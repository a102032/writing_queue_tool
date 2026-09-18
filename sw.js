// Writing Queue offline support.
// You don't need to edit this file when you change the app: boards that are
// online always load the newest version and save a fresh copy as they go.
const CACHE = "writing-queue-v1";
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
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
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

  // Icons and other files: saved copy first.
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone()));
    return res;
  })));
});
