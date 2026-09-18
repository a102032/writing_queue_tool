// Writing Queue offline support.
// You don't need to edit this file when you change the app: boards that are
// online always load the newest version and save a fresh copy as they go.
const CACHE = "writing-queue-v3";
const SONG = "./media/warm-up-song.mp4";
const CORE = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./high-five.svg",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-48.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE)
        // The song is several megabytes. Cache it too, but never let it fail
        // the install - the app itself must still work offline without it.
        .then(() => cache.add(SONG).catch(() => {})))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function withTimeout(promise, ms){
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("timeout")), ms);
    promise.then(r => { clearTimeout(t); resolve(r); }, e => { clearTimeout(t); reject(e); });
  });
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: keep a saved copy so the fonts work offline.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(CACHE).then(cache => cache.match(req).then(hit => {
        const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || fresh;
      }))
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // The app page: try the internet first so updates show up, fall back to the saved copy.
  if (req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/")) {
    event.respondWith(
      withTimeout(fetch(req.url, { cache: "no-cache" }), 4000)
        .then(res => { if (res.ok) caches.open(CACHE).then(c => c.put("./index.html", res.clone())); return res; })
        .catch(() => caches.match("./index.html").then(hit => hit || caches.match("./")))
    );
    return;
  }

  // The app's own script and styles: same idea, so a change reaches boards
  // without leaving them stranded when the network is slow or down.
  if (url.pathname.endsWith(".js") || url.pathname.endsWith(".css")) {
    event.respondWith(
      withTimeout(fetch(req.url, { cache: "no-cache" }), 4000)
        .then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone())); return res; })
        .catch(() => caches.match(req).then(hit => hit || Promise.reject(new Error("offline"))))
    );
    return;
  }

  // The song. A <video> asks for byte ranges, and the Cache API only stores
  // whole 200 responses, so serve the range by slicing the cached copy - a
  // plain cache hit would break seeking and some browsers' playback outright.
  if (url.pathname.endsWith(".mp4")) {
    event.respondWith(serveMedia(req));
    return;
  }

  // Icons and other files: saved copy first.
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
    return res;
  })));
});

// A <video> fetches its file in many small byte ranges while it plays. The
// Cache API can only hand back whole responses, so each range used to mean
// reading and decoding the entire 8MB file again - enough to stutter playback
// on classroom hardware. Read it once, keep the bytes, slice from memory.
let songBytes = null;
let songType = "video/mp4";
let songBytesPending = null;

function loadSongBytes(cache, url) {
  if (songBytes) return Promise.resolve(songBytes);
  if (songBytesPending) return songBytesPending;   // several ranges can land at once
  songBytesPending = cache.match(url).then(whole => {
    if (!whole) return null;
    songType = whole.headers.get("Content-Type") || "video/mp4";
    return whole.arrayBuffer().then(buf => { songBytes = buf; return buf; });
  }).catch(() => null).then(buf => { songBytesPending = null; return buf; });
  return songBytesPending;
}

function rangeResponse(buf, range) {
  const m = /^bytes=(\d*)-(\d*)/.exec(range);
  let start = m && m[1] ? parseInt(m[1], 10) : 0;
  let end = m && m[2] ? parseInt(m[2], 10) : buf.byteLength - 1;

  if (isNaN(start) || start >= buf.byteLength) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": "bytes */" + buf.byteLength }
    });
  }
  if (isNaN(end) || end >= buf.byteLength) end = buf.byteLength - 1;

  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": songType,
      "Content-Length": String(end - start + 1),
      "Content-Range": "bytes " + start + "-" + end + "/" + buf.byteLength,
      "Accept-Ranges": "bytes"
    }
  });
}

async function serveMedia(req) {
  const cache = await caches.open(CACHE);
  const range = req.headers.get("range");
  const buf = await loadSongBytes(cache, req.url);

  if (buf) return range ? rangeResponse(buf, range) : new Response(buf, {
    status: 200,
    headers: { "Content-Type": songType, "Content-Length": String(buf.byteLength), "Accept-Ranges": "bytes" }
  });

  // Not cached yet - go to the network and keep a copy for next time
  try {
    const res = await fetch(req);
    if (res.ok && res.status === 200) cache.put(req.url, res.clone());
    return res;
  } catch (e) {
    return new Response("The song is not available offline yet.", { status: 504 });
  }
}
