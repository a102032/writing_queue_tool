// ============================================
// Desk data (placeholder roster - Set Up Class /
// roster upload will replace this later)
// ============================================
const stages = [
    { key: 'prewriting', label: 'Pre-Writing', color: 'var(--stage-1-color)', icon: 'prewriting' },
    { key: 'sentences', label: 'Sentences', color: 'var(--stage-2-color)', icon: 'sentences' },
    { key: 'paragraphs', label: 'Paragraphs', color: 'var(--stage-3-color)', icon: 'paragraphs' },
    { key: 'publishing', label: 'Publishing', color: 'var(--stage-4-color)', icon: 'publishing' },
    { key: 'done', label: 'Done', color: 'var(--stage-5-color)', icon: 'done' }
];

const stageIcons = {
    prewriting: '<svg viewBox="0 0 512 512"><g><path d="m325.05 426.19v16.77c0 38.13-30.92 69.04-69.05 69.04s-69.05-30.91-69.05-69.04v-16.77z" fill="#48578b"/><path d="m325.05 426.19v16.77c0 38.13-30.92 69.04-69.05 69.04v-85.81z" fill="#2a396c"/><path d="m428.61 172.61c0 42.14-15.1 80.75-40.18 110.71-21.23 25.36-32.64 57.51-32.64 90.59l-99.79 14-99.79-14c0-33.08-11.41-65.24-32.64-90.6-25.08-29.97-40.18-68.56-40.18-110.69-.01-95.39 76.8-172.4 172.19-172.62h.42c95.34 0 172.61 77.28 172.61 172.61z" fill="#fedd55"/><path d="m428.61 172.61c0 42.14-15.1 80.75-40.18 110.71-21.23 25.36-32.64 57.51-32.64 90.59l-99.79 14v-387.91c95.34 0 172.61 77.28 172.61 172.61z" fill="#f9bd3f"/><path d="m156.21 373.91h199.58v69.05h-199.58z" fill="#62739a"/><path d="m256 373.91h99.79v69.05h-99.79z" fill="#48578b"/><path d="m339.91 169.78-8.76-26.96-42.13-6.12-18.85-38.18h-28.34l-18.85 38.18-42.13 6.12-8.76 26.96 30.49 29.72-7.2 41.96 22.93 16.67 37.69-19.82 37.69 19.82 22.93-16.67-7.2-41.96z" fill="#f9bd3f"/><path d="m309.42 199.5 7.2 41.96-22.93 16.67-37.69-19.82v-139.79h14.17l18.85 38.18 42.13 6.12 8.76 26.96z" fill="#fd9126"/><g fill="#f9bd3f"><path d="m0 162.017h46.147v30h-46.147z"/><path d="m30.512 54.89h30v45.671h-30z" transform="matrix(.413 -.911 .911 .413 -44.075 87.04)"/><path d="m22.677 261.308h45.671v30h-45.671z" transform="matrix(.911 -.413 .413 .911 -110.14 43.521)"/></g><path d="m465.853 162.017h46.147v30h-46.147z" fill="#fd9126"/><path d="m443.652 62.725h45.671v30h-45.671z" fill="#fd9126" transform="matrix(.911 -.413 .413 .911 9.589 199.771)"/><path d="m451.488 253.472h30v45.671h-30z" fill="#fd9126" transform="matrix(.413 -.911 .911 .413 22.069 586.869)"/></g></svg>',
    sentences: '<svg viewBox="0 0 497 497"><g><path d="m4.391 492.609c4.413 4.413 10.89 5.498 16.323 3.262l35.827-14.752.884-41.543z" fill="#16202d"/><path d="m15.881 440.46-14.752 35.826c-2.236 5.432-1.151 11.91 3.262 16.323l66.291-39.775z" fill="#2d3e53"/><path d="m131.67 450.183.884-69.827-88.388 88.388 12.374 12.375z" fill="#ffd19c"/><path d="m46.817 365.33-30.936 75.13 28.285 28.284 92.807-55.684z" fill="#fff0be"/><path d="m488.213 51.213-21.213-21.213-136.118 146.724 114.905-40.659 42.427-42.426c11.715-11.715 11.715-30.71-.001-42.426z" fill="#ff3187"/><path d="m467 30-21.213-21.213c-11.716-11.716-30.711-11.715-42.426 0l-42.426 42.427-14.142 141.421 120.207-120.209c11.716-11.715 11.716-30.71 0-42.426z" fill="#ff5178"/><path d="m297.294 136.066 116.673 31.82 31.82-31.82-21.214-21.213z" fill="#dff5ff"/><path d="m424.573 114.853-63.639-63.64-31.82 31.82 21.213 106.066z" fill="#fff"/><path d="m110.457 428.97 21.213 21.213 282.297-282.297-21.213-21.213-192.812 89.483z" fill="#ffb24a"/><path d="m20.171 211.001h399.229v90h-399.229z" fill="#ffd23b" transform="matrix(.707 -.707 .707 .707 -116.647 230.393)"/></g></svg>',
    paragraphs: '<svg viewBox="0 0 512 512"><path fill="#CAE8F9" d="M374.525,90h-75V15c0-8.401-6.599-15-15-15H45C20.098,0,0,20.099,0,45v422c0,24.899,20.098,45,45,45h299.525c24.902,0,45-20.101,45-45V105C389.525,96.599,382.926,90,374.525,90z"/><path fill="#B7E0F6" d="M389.525,105v362c0,24.899-20.098,45-45,45h-150V0h90c8.401,0,15,6.599,15,15v75h75C382.926,90,389.525,96.599,389.525,105z"/><path fill="#CAE8F9" d="M389.525,120h-105c-8.291,0-15-6.709-15-15V0h32.695c11.777,0,23.32,4.775,31.641,13.11l42.568,42.583c8.32,8.35,13.096,19.863,13.096,31.611V120z"/><path fill="#1689FC" d="M498.726,160.8c-16.798-17.1-46.798-17.1-63.6,0l-15.3,15.601l-10.8,10.499c-6.002,5.7-6.002,15.3,0,21l21.299,21.301l21.302,21.299c5.398,6,15.601,6,20.999,0l10.8-10.499l15.3-15.601C516.425,207.599,516.425,177.599,498.726,160.8z"/><path fill="#FEDBAB" d="M327.724,331.8l-30.901-30.901c-0.597-0.599-1.198-0.599-1.798,0l-0.897,0.601c-1.802,1.8-3.003,3.9-3.604,6l-21.299,63.9c-2.102,5.999-0.3,11.699,3.6,15.3v0.298c4.2,3.9,9.899,5.4,15.3,3.301l63.9-21.301c2.102-0.601,4.2-1.8,5.999-3.6l0.601-0.601c0.601-0.599,0.601-1.199,0-1.8C348.726,352.8,337.926,341.999,327.724,331.8z"/><g><path fill="#17ACE8" d="M284.525,180H75c-19.797,0-19.797-30,0-30h209.525C304.323,150,304.323,180,284.525,180z"/><path fill="#17ACE8" d="M224.525,240H75c-19.797,0-19.797-30,0-30h149.525C244.323,210,244.323,240,224.525,240z"/><path fill="#17ACE8" d="M224.525,300H75c-19.797,0-19.797-30,0-30h149.525C244.323,270,244.323,300,224.525,300z"/><path fill="#17ACE8" d="M224.525,360H75c-19.797,0-19.797-30,0-30h149.525C244.323,330,244.323,360,224.525,360z"/><path fill="#17ACE8" d="M284.525,452h-90c-19.797,0-19.797-30,0-30h90C304.323,422,304.323,452,284.525,452z"/></g><path fill="#FEC478" d="M327.724,331.8c10.203,10.199,21.002,21,30.901,31.199c0.601,0.601,0.601,1.201,0,1.8l-0.601,0.601c-1.798,1.8-3.896,2.999-5.999,3.6l-63.9,21.301c-5.402,2.098-11.1,0.599-15.3-3.301v-0.3L327.724,331.8z"/><path fill="#136EF1" d="M498.726,224.399L483.425,240l-10.8,10.499c-5.398,6-15.601,6-20.999,0L430.325,229.2l68.401-68.401C516.425,177.599,516.425,207.599,498.726,224.399z"/><path fill="#FD003A" d="M483.425,240l-10.8,10.499c-59.399,59.101-39.602,39.3-93.003,92.701c0,0.599-21.299,21.899-21.599,22.2c-1.798,1.8-3.896,2.999-5.999,3.6l-61.501-61.5c0.601-2.1,1.802-4.2,3.604-6c0.3-0.3,21.599-21.601,22.2-21.601c38.998-39,19.797-19.499,92.699-92.999l10.499-10.8L483.425,240z"/><path fill="#E50027" d="M483.425,240l-10.8,10.499c-59.399,59.101-39.602,39.3-93.003,92.701c0,0.599-21.299,21.899-21.599,22.2c-1.798,1.8-3.896,2.999-5.999,3.6l-30.601-30.601L451.627,208.2L483.425,240z"/><g><path fill="#1689FC" d="M224.525,360h-30v-30h30C244.323,330,244.323,360,224.525,360z"/><path fill="#1689FC" d="M224.525,300h-30v-30h30C244.323,270,244.323,300,224.525,300z"/><path fill="#1689FC" d="M224.525,240h-30v-30h30C244.323,210,244.323,240,224.525,240z"/><path fill="#1689FC" d="M284.525,452h-90v-30h90C304.323,422,304.323,452,284.525,452z"/><path fill="#1689FC" d="M284.525,180h-90v-30h90C304.323,150,304.323,180,284.525,180z"/></g></svg>',
    publishing: '<svg viewBox="0 0 24 24"><path d="M7 2h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/><path d="M14 2v4h4" fill="none" stroke="#94A3B8" stroke-width="1"/><rect x="8" y="9.5" width="8" height="1.9" rx="0.95" fill="#64748B"/><rect x="8" y="13" width="8" height="1.9" rx="0.95" fill="#64748B"/><rect x="8" y="16.5" width="5" height="1.9" rx="0.95" fill="#64748B"/><path d="M2 20.3c.8-3 3.8-4.2 6.8-3.3l6.3 1.5c1.1.3 1 1.8-.1 1.9l-9.3.6c-1.4.1-2.8-.1-3.7-.7Z" fill="#F4C9A8"/></svg>',
    done: '<svg viewBox="0 0 128 128"><g><path d="m110.7 54.95c0 5.38 5.25 11.52 3.68 16.37-1.64 5.02-9.55 6.9-12.59 11.08-.27.39-.52.79-.74 1.23-2.26 4.41-2.07 11.37-5.92 14.17-4.18 3.04-11.66-.05-16.69 1.58-1.12.36-2.19 1.01-3.25 1.78-3.59 2.62-7.04 6.74-11.18 6.74s-7.6-4.13-11.18-6.74c-1.06-.77-2.14-1.42-3.25-1.78-5.02-1.64-12.51 1.46-16.69-1.58-3.85-2.79-3.66-9.76-5.92-14.17-.22-.44-.47-.84-.74-1.23-3.04-4.18-10.96-6.06-12.59-11.08-1.57-4.85 3.68-10.99 3.68-16.37s-5.25-11.52-3.68-16.37c1.64-5.02 9.55-6.9 12.59-11.08 3.08-4.23 2.43-12.32 6.66-15.4 4.18-3.04 11.66.05 16.69-1.58 4.83-1.57 9.04-8.52 14.42-8.52s9.59 6.95 14.44 8.53c5.02 1.64 12.51-1.46 16.69 1.58 4.23 3.07 3.59 11.16 6.66 15.4 3.04 4.18 10.96 6.06 12.59 11.08 1.57 4.84-3.68 10.98-3.68 16.36z" fill="#ffe36e"/><circle cx="64" cy="54.95" fill="#ffaa39" r="36.33"/><path d="m66.83 34.89 4.11 8.33c.46.93 1.35 1.58 2.37 1.73l9.2 1.34c2.59.38 3.62 3.55 1.75 5.38l-6.65 6.49c-.74.72-1.08 1.77-.91 2.79l1.57 9.16c.44 2.58-2.26 4.54-4.58 3.32l-8.22-4.32c-.92-.48-2.02-.48-2.93 0l-8.22 4.32c-2.31 1.22-5.02-.75-4.58-3.32l1.57-9.16c.18-1.02-.16-2.07-.91-2.79l-6.65-6.49c-1.87-1.82-.84-5 1.75-5.38l9.2-1.34c1.03-.15 1.91-.79 2.37-1.73l4.11-8.33c1.15-2.35 4.49-2.35 5.65 0z" fill="#fffeeb"/><g fill="#3980e5"><path d="m52.82 101.16-9.49 24.34-12.5-9.87-15.89-1.19 12.01-30.81c2.26 4.41 2.07 11.37 5.92 14.17 4.18 3.04 11.66-.05 16.69 1.58 1.12.36 2.19 1.01 3.26 1.78z"/><path d="m113.05 114.44-15.89 1.19-12.5 9.87-9.49-24.34c1.06-.77 2.14-1.42 3.25-1.78 5.02-1.64 12.51 1.46 16.69-1.58 3.85-2.79 3.66-9.76 5.92-14.17z"/></g></g></svg>'
};

// ============================================
// Class state
// ============================================
// The app opens with nothing set up at all - no class, no writing project and
// no students. "Set Up Class" in Teacher Controls is how the first one is made.
//
// `desks` is a map of SEATS, not a list of students: each entry is either a
// student or null for an empty seat. A room always shows at least SEAT_COUNT
// seats so the board can be arranged to match the real room, empty desks and
// all. A student's index in here is where they sit; their `id` travels with
// them when seats are swapped.
const SEAT_COUNT = 30;
const desks = [];

function deskById(id) {
    return desks.find(d => d && d.id === id);
}

function studentCount() {
    return desks.reduce((n, d) => n + (d ? 1 : 0), 0);
}

// Pad out to a full room, and never drop a seat that holds someone
function padSeats(list) {
    const out = list.slice();
    while (out.length < SEAT_COUNT) out.push(null);
    while (out.length > SEAT_COUNT && out[out.length - 1] === null) out.pop();
    return out;
}

// The single source of truth for the check line: desk ids in line order.
// queue[0] is the student being checked right now ("Now Checking"); the
// rest are the waiting list. Every desk badge and sidebar chiclet is
// derived from this array, so mutating it + renderQueue() is the only way
// the line ever changes.
const queue = [];

// Shown in the header, edited in the Set Up Class modal. Empty until set up.
let classLabel = '';
let projectLabel = '';

// What students can do while they wait for a check. Per class, so a different
// class or project can have a different routine.
const DEFAULT_WAITING = ['Illustrate', 'Spelling', 'Read'];
let waitingList = DEFAULT_WAITING.slice();

// Declared up here because startup calls loadClassState() long before the
// class-setup section at the bottom of this file is evaluated.
const CLASS_KEY = 'writingQueueClass_v1';      // single class - read only, to migrate
const CLASSES_KEY = 'writingQueueClasses_v2';  // { activeId, classes: [...] }

// Every class the teacher has set up. The live `desks`/`queue`/labels above
// are always a working copy of whichever one is active; saveClassState()
// folds them back into this list.
let classes = [];
let activeClassId = null;

// ============================================
// Desk rendering
// ============================================
const classroomGrid = document.getElementById('classroom-grid');
// What a desk tap does right now: nothing (null), bump its writing stage
// ('level'), put the student in the check line ('ready'), or pick it for a
// seat swap ('swap'). Exactly one mode is armed at a time.
let armedMode = null;
let swapFirstSeat = null;   // index of the first seat picked in a swap

function deskCardHTML(desk) {
    const stage = stages[desk.stage];
    const badgeHTML = desk.queue
        ? '<div class="desk-badge">' + desk.queue + '</div>'
        : '<div class="desk-badge hidden"></div>';
    const doneHTML = desk.stage === 4
        ? '<div class="desk-done-icon"><img src="high-five.svg" alt="Done"></div>'
        : '';
    return (
        badgeHTML +
        '<div class="desk-name">' + desk.name + '</div>' +
        '<div class="desk-room">' + desk.homeroom + '</div>' +
        '<div class="desk-spacer">' + doneHTML + '</div>' +
        '<div class="stage-pill" style="background:' + stage.color + '">' + stageIcons[stage.icon] + '<span>' + stage.label + '</span></div>'
    );
}

function renderDesks() {
    classroomGrid.innerHTML = '';

    // Nothing set up yet: say so and offer the way in, rather than showing
    // an empty white rectangle that looks broken.
    if (!studentCount()) {
        classroomGrid.classList.add('empty');
        const empty = document.createElement('div');
        empty.className = 'grid-empty';
        empty.innerHTML =
            '<h2>No class set up yet</h2>' +
            '<p>Add your students to get started. You can set up more than one class and switch between them.</p>';
        const btn = document.createElement('button');
        btn.className = 'splash-btn enter small';
        btn.type = 'button';
        btn.textContent = 'Set Up Class';
        btn.addEventListener('click', openClassSetup);
        empty.appendChild(btn);
        classroomGrid.appendChild(empty);
        updateArmableState();
        return;
    }

    classroomGrid.classList.remove('empty');
    desks.forEach((desk, seat) => {
        const el = document.createElement('div');
        el.dataset.seat = String(seat);
        if (desk) {
            el.className = 'desk ' + desk.gender;
            el.id = 'desk-' + desk.id;
            el.innerHTML = deskCardHTML(desk);
        } else {
            el.className = 'desk empty-seat';
        }
        el.addEventListener('click', () => onDeskTap(seat));
        classroomGrid.appendChild(el);
    });
    layoutDeskGrid();
    updateArmableState();
}

// The board must never scroll, so the desks are sized to fit rather than the
// box being scrolled. For each possible column count work out how big a card
// could be - limited by the width of a column, and by the height of the rows
// that column count implies - and keep whichever count allows the biggest
// card. Cards are 4:3, which is what converts an available height into a width.
const MAX_DESK_W = 195;
function layoutDeskGrid() {
    const n = desks.length;
    if (!n) return;

    const cs = getComputedStyle(classroomGrid);
    const gap = parseFloat(cs.rowGap) || 8;
    const availW = classroomGrid.clientWidth
        - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const availH = classroomGrid.clientHeight
        - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    if (!(availW > 0) || !(availH > 0)) return;   // not laid out yet

    let bestCols = 1;
    let bestW = 0;
    for (let cols = 1; cols <= n; cols++) {
        const rows = Math.ceil(n / cols);
        const byWidth = (availW - gap * (cols - 1)) / cols;
        const byHeight = ((availH - gap * (rows - 1)) / rows) * (4 / 3);
        const w = Math.min(byWidth, byHeight);
        if (w > bestW) { bestW = w; bestCols = cols; }
    }

    const cardW = Math.max(1, Math.min(bestW, MAX_DESK_W));
    classroomGrid.style.setProperty('--cols', String(bestCols));
    classroomGrid.style.setProperty('--card-w', cardW.toFixed(2) + 'px');
}

// Re-fit whenever the window, and therefore the grid box, changes size.
if (window.ResizeObserver) {
    new ResizeObserver(() => layoutDeskGrid()).observe(classroomGrid);
} else {
    window.addEventListener('resize', layoutDeskGrid);
}

function updateArmableState() {
    document.querySelectorAll('.desk').forEach(el => {
        el.classList.toggle('armable', armedMode !== null);
    });
    if (swapFirstSeat !== null) {
        const el = classroomGrid.querySelector('[data-seat="' + swapFirstSeat + '"]');
        if (el) el.classList.add('swap-pick');
    }
}

// Tapping the button of the live mode disarms it; any other button switches.
function setArmedMode(mode) {
    armedMode = (mode === armedMode) ? null : mode;
    if (armedMode !== 'swap') clearSwapPick();
    btnChangeLevel.classList.toggle('armed', armedMode === 'level');
    btnReady.classList.toggle('armed', armedMode === 'ready');
    btnSwap.classList.toggle('armed', armedMode === 'swap');
    updateArmableState();
}

function onDeskTap(seat) {
    // Seats are swappable whether or not anyone is sitting there - that is how
    // a room with gaps in it gets arranged. The other modes need a student.
    if (armedMode === 'swap') { pickForSwap(seat); return; }
    const desk = desks[seat];
    if (!desk) return;
    if (armedMode === 'ready') addToQueue(desk.id);
    else if (armedMode === 'level') advanceDeskStage(desk.id);
}

function advanceDeskStage(id) {
    const desk = desks.find(d => d.id === id);
    if (!desk) return;
    desk.stage = (desk.stage + 1) % stages.length;
    const el = document.getElementById('desk-' + id);

    el.classList.remove('wiggle');
    void el.offsetWidth;
    el.classList.add('wiggle');
    setTimeout(() => el.classList.remove('wiggle'), 3000);

    const stage = stages[desk.stage];
    el.querySelector('.stage-pill').style.background = stage.color;
    el.querySelector('.stage-pill').innerHTML = stageIcons[stage.icon] + '<span>' + stage.label + '</span>';

    const spacer = el.querySelector('.desk-spacer');
    spacer.innerHTML = desk.stage === 4
        ? '<div class="desk-done-icon"><img src="high-five.svg" alt="Done"></div>'
        : '';

    if (desk.stage === 3) {
        confettiBurst(el, { colors: ['#2496C8', '#93297E', '#7FBC3F', '#E07B2E', '#FFFFFF'], count: 26 });
    } else if (desk.stage === 4) {
        sparkleDesk(el, 3000);
        confettiRain();
        playCelebrationSound();
    }

    saveClassState();
}

// ============================================
// Celebration effects (confetti, sparkle, sound)
// ============================================
function sparkleDesk(cardEl, duration) {
    const sparkleColors = ['#F0AD1F', '#FFFFFF', '#FCD34D'];
    const endTime = Date.now() + duration;

    function spawnSparkle() {
        const rect = cardEl.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        const size = 16 + Math.random() * 8;
        const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];

        const s = document.createElement('div');
        s.className = 'sparkle-particle';
        s.style.filter = 'drop-shadow(0 0 3px rgba(255,255,255,0.9)) drop-shadow(0 0 5px rgba(240,173,31,0.7))';
        s.innerHTML = '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="' +
            color +
            '"><path d="M12 1 L14.5 9.5 L23 12 L14.5 14.5 L12 23 L9.5 14.5 L1 12 L9.5 9.5 Z"/></svg>';
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        document.body.appendChild(s);

        const anim = s.animate([
            { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.3) rotate(100deg)', opacity: 1, offset: 0.35 },
            { transform: 'translate(-50%, -50%) scale(0.9) rotate(140deg)', opacity: 1, offset: 0.6 },
            { transform: 'translate(-50%, -50%) scale(0) rotate(200deg)', opacity: 0 }
        ], { duration: 750, easing: 'ease-in-out' });

        anim.onfinish = () => s.remove();
    }

    (function loop() {
        if (Date.now() >= endTime) return;
        spawnSparkle();
        if (Math.random() > 0.35) spawnSparkle();
        setTimeout(loop, 100 + Math.random() * 80);
    })();
}

function confettiBurst(originEl, opts) {
    const rect = originEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = opts.colors;
    const count = opts.count || 30;
    const spread = opts.spread || 1;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = 5 + Math.random() * 5;
        p.style.width = size + 'px';
        p.style.height = size * (0.5 + Math.random() * 0.5) + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.left = cx + 'px';
        p.style.top = cy + 'px';
        document.body.appendChild(p);

        const angle = (Math.random() * Math.PI) + Math.PI;
        const velocity = (60 + Math.random() * 90) * spread;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity - 40;
        const rot = (Math.random() - 0.5) * 720;
        const duration = 900 + Math.random() * 500;

        const anim = p.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${dx * 0.5}px, ${dy}px) rotate(${rot * 0.5}deg)`, opacity: 1, offset: 0.4 },
            { transform: `translate(${dx}px, ${dy + 260}px) rotate(${rot}deg)`, opacity: 0 }
        ], { duration: duration, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });

        anim.onfinish = () => p.remove();
    }
}

function confettiRain() {
    const colors = ['#2496C8', '#93297E', '#7FBC3F', '#E07B2E', '#F0AD1F', '#FFFFFF'];
    const count = 140;
    const viewportW = window.innerWidth;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = 6 + Math.random() * 6;
        p.style.width = size + 'px';
        p.style.height = size * (0.5 + Math.random() * 0.5) + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * viewportW;
        p.style.left = startX + 'px';
        p.style.top = '-20px';
        document.body.appendChild(p);

        const drift = (Math.random() - 0.5) * 160;
        const rot = (Math.random() - 0.5) * 900;
        const fallDistance = window.innerHeight + 60;
        const duration = 2200 + Math.random() * 1400;
        const delay = Math.random() * 500;

        const anim = p.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${drift * 0.5}px, ${fallDistance * 0.6}px) rotate(${rot * 0.6}deg)`, opacity: 1, offset: 0.7 },
            { transform: `translate(${drift}px, ${fallDistance}px) rotate(${rot}deg)`, opacity: 0.9 }
        ], { duration: duration, delay: delay, easing: 'cubic-bezier(0.25, 0.1, 0.5, 1)' });

        anim.onfinish = () => p.remove();
    }
}

let celebrationAudioCtx = null;
function playCelebrationSound() {
    try {
        if (!celebrationAudioCtx) {
            celebrationAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = celebrationAudioCtx;
        if (ctx.state === 'suspended') ctx.resume();

        const notes = [523.25, 659.25, 783.99, 1046.5];
        const t0 = ctx.currentTime + 0.02;

        notes.forEach((freq, i) => {
            const start = t0 + i * 0.11;
            const osc = ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.0001, start);
            g.gain.linearRampToValueAtTime(0.35, start + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);
            osc.connect(g).connect(ctx.destination);
            osc.start(start);
            osc.stop(start + 0.6);
        });
    } catch (e) { /* audio unavailable - celebration still shows visually */ }
}

// ============================================
// Change Level button
// ============================================
const btnChangeLevel = document.getElementById('btn-next-step');
btnChangeLevel.addEventListener('click', () => setArmedMode('level'));

loadClassState();
syncDeskQueueNumbers();
renderHeader();
renderDesks();

// ============================================
// Real flip-card digit (single 0-9 character)
// ============================================
class FlipDigit {
    constructor(el) {
        this.el = el;
        this.value = '0';
        this._animating = false;
        this._pendingValue = null;

        el.classList.add('flip-digit');
        el.innerHTML =
            '<div class="fd-half fd-upper"><div class="fd-inner"><span></span></div></div>' +
            '<div class="fd-half fd-lower"><div class="fd-inner"><span></span></div></div>';

        this.upperSpan = el.querySelector('.fd-upper span');
        this.lowerSpan = el.querySelector('.fd-lower span');

        this._setStatic('0');
    }

    _setStatic(v) {
        this.value = v;
        this.upperSpan.textContent = v;
        this.lowerSpan.textContent = v;
    }

    // Instantly jump to a value with no flip animation (used on first paint)
    setImmediate(v) {
        v = String(v);
        this._setStatic(v);
    }

    // Animate to a new value using a two-phase mechanical flip
    set(v) {
        v = String(v);
        if (v === this.value) return;
        if (this._animating) {
            this._pendingValue = v;
            return;
        }
        this._animate(v);
    }

    _animate(newVal) {
        this._animating = true;
        const oldVal = this.value;

        // Phase 1: top flap (showing OLD value) folds down and away
        const topFlap = document.createElement('div');
        topFlap.className = 'fd-flap fd-flap-top animating';
        topFlap.innerHTML = '<div class="fd-inner"><span>' + oldVal + '</span></div>';
        this.el.appendChild(topFlap);

        setTimeout(() => {
            topFlap.remove();

            // Reveal the new value on the static cards underneath
            this.upperSpan.textContent = newVal;
            this.lowerSpan.textContent = newVal;
            this.value = newVal;

            // Phase 2: bottom flap (showing NEW value) unfolds down into place
            const bottomFlap = document.createElement('div');
            bottomFlap.className = 'fd-flap fd-flap-bottom animating';
            bottomFlap.innerHTML = '<div class="fd-inner"><span>' + newVal + '</span></div>';
            this.el.appendChild(bottomFlap);

            setTimeout(() => {
                bottomFlap.remove();
                this._animating = false;

                if (this._pendingValue !== null && this._pendingValue !== this.value) {
                    const next = this._pendingValue;
                    this._pendingValue = null;
                    this._animate(next);
                } else {
                    this._pendingValue = null;
                }
            }, 180);
        }, 180);
    }
}

// ============================================
// MM:SS flip clock made of 4 FlipDigits
// ============================================
class FlipClockTimer {
    constructor(container) {
        container.innerHTML =
            '<div class="flip-clock">' +
                '<div class="flip-group">' +
                    '<div class="flip-digit" data-d="m0"></div>' +
                    '<div class="flip-digit" data-d="m1"></div>' +
                '</div>' +
                '<div class="flip-colon"><span></span><span></span></div>' +
                '<div class="flip-group">' +
                    '<div class="flip-digit" data-d="s0"></div>' +
                    '<div class="flip-digit" data-d="s1"></div>' +
                '</div>' +
            '</div>';

        this.digits = {};
        container.querySelectorAll('.flip-digit').forEach(el => {
            this.digits[el.dataset.d] = new FlipDigit(el);
        });
    }

    setTime(totalSeconds, immediate) {
        totalSeconds = Math.max(0, Math.min(5999, totalSeconds)); // cap at 99:59
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const mm = String(mins).padStart(2, '0');
        const ss = String(secs).padStart(2, '0');

        if (immediate) {
            this.digits.m0.setImmediate(mm[0]);
            this.digits.m1.setImmediate(mm[1]);
            this.digits.s0.setImmediate(ss[0]);
            this.digits.s1.setImmediate(ss[1]);
        } else {
            this.digits.m0.set(mm[0]);
            this.digits.m1.set(mm[1]);
            this.digits.s0.set(ss[0]);
            this.digits.s1.set(ss[1]);
        }
    }
}

// ============================================
// Alarm sound synthesis (Web Audio API - no external audio files needed)
// ============================================
const SoundKit = (function () {
    let ctx = null;
    function getCtx() {
        if (!ctx) {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (ctx.state === 'suspended') ctx.resume();
        return ctx;
    }

    function playBell(ctx, out, t0, vol) {
        // Additive synthesis: inharmonic partials with staggered decay, like a struck bell
        const freq = 660;
        const partials = [
            { ratio: 1,    decay: 1.8 },
            { ratio: 2.01, decay: 1.3 },
            { ratio: 3.0,  decay: 0.9 },
            { ratio: 4.2,  decay: 0.6 },
            { ratio: 5.4,  decay: 0.4 }
        ];
        partials.forEach((p, i) => {
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = freq * p.ratio;
            const g = ctx.createGain();
            const peak = vol * (0.55 / (i + 1));
            g.gain.setValueAtTime(peak, t0);
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + p.decay);
            osc.connect(g).connect(out);
            osc.start(t0);
            osc.stop(t0 + p.decay + 0.1);
        });
    }

    function playChime(ctx, out, t0, vol) {
        // Bright three-note major chord, soft attack
        const notes = [880, 1108.73, 1318.51]; // A5, C#6, E6
        notes.forEach((f, i) => {
            const start = t0 + i * 0.09;
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = f;
            const g = ctx.createGain();
            g.gain.setValueAtTime(0.0001, start);
            g.gain.linearRampToValueAtTime(vol * 0.55, start + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, start + 1.4);
            osc.connect(g).connect(out);
            osc.start(start);
            osc.stop(start + 1.5);
        });
    }

    function playBuzzer(ctx, out, t0, vol) {
        // Classic short game-show style buzzes
        const pulses = [[0, 0.22], [0.3, 0.22], [0.6, 0.35]];
        pulses.forEach(([offset, dur]) => {
            const osc = ctx.createOscillator();
            osc.type = 'square';
            osc.frequency.value = 220;
            const g = ctx.createGain();
            const s = t0 + offset;
            g.gain.setValueAtTime(0.0001, s);
            g.gain.linearRampToValueAtTime(vol * 0.45, s + 0.01);
            g.gain.setValueAtTime(vol * 0.45, s + dur - 0.03);
            g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
            osc.connect(g).connect(out);
            osc.start(s);
            osc.stop(s + dur + 0.05);
        });
    }

    function sweepTone(ctx, out, start, dur, f0, f1, peak, type) {
        const osc = ctx.createOscillator();
        osc.type = type || 'sawtooth';
        osc.frequency.setValueAtTime(f0, start);
        osc.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), start + dur);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, start);
        g.gain.linearRampToValueAtTime(peak, start + Math.min(0.04, dur * 0.3));
        g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
        osc.connect(g).connect(out);
        osc.start(start);
        osc.stop(start + dur + 0.05);
    }

    function playRooster(ctx, out, t0, vol) {
        // Cartoon-ish "cock-a-doodle-doo": a few short rising blips then a long falling crow
        sweepTone(ctx, out, t0 + 0.00, 0.10, 500, 750, vol * 0.65, 'sawtooth');
        sweepTone(ctx, out, t0 + 0.13, 0.08, 550, 700, vol * 0.55, 'sawtooth');
        sweepTone(ctx, out, t0 + 0.24, 0.07, 600, 680, vol * 0.55, 'sawtooth');
        sweepTone(ctx, out, t0 + 0.36, 0.55, 900, 380, vol * 0.7, 'sawtooth');
    }

    function playCow(ctx, out, t0, vol) {
        // Low sawtooth with vibrato + lowpass filter, sliding pitch = "moo"
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, t0);
        osc.frequency.linearRampToValueAtTime(160, t0 + 0.25);
        osc.frequency.linearRampToValueAtTime(100, t0 + 1.1);

        const vibrato = ctx.createOscillator();
        vibrato.frequency.value = 5.5;
        const vibratoGain = ctx.createGain();
        vibratoGain.gain.value = 6;
        vibrato.connect(vibratoGain).connect(osc.frequency);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 600;

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.linearRampToValueAtTime(vol * 0.75, t0 + 0.15);
        g.gain.setValueAtTime(vol * 0.75, t0 + 0.85);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.3);

        osc.connect(filter).connect(g).connect(out);
        osc.start(t0);
        vibrato.start(t0);
        osc.stop(t0 + 1.4);
        vibrato.stop(t0 + 1.4);
    }

    function playTrain(ctx, out, t0, vol) {
        // Two-tone chord like a real train horn, two toots
        [[t0, 1.6], [t0 + 1.9, 1.0]].forEach(([start, dur]) => {
            [392.0, 466.16].forEach(f => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = f;
                const g = ctx.createGain();
                g.gain.setValueAtTime(0.0001, start);
                g.gain.linearRampToValueAtTime(vol * 0.4, start + 0.15);
                g.gain.setValueAtTime(vol * 0.4, start + dur - 0.25);
                g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
                osc.connect(g).connect(out);
                osc.start(start);
                osc.stop(start + dur + 0.1);
            });
        });
    }

    function karplusStrongBuffer(ctx, freq, duration, decay) {
        // Plucked-string synthesis: a noise burst filtered through a decaying delay loop
        const sr = ctx.sampleRate;
        const length = Math.floor(sr * duration);
        const buffer = ctx.createBuffer(1, length, sr);
        const data = buffer.getChannelData(0);
        const period = Math.max(2, Math.round(sr / freq));
        const ring = new Float32Array(period);
        for (let i = 0; i < period; i++) ring[i] = Math.random() * 2 - 1;
        let idx = 0;
        for (let i = 0; i < length; i++) {
            data[i] = ring[idx];
            const nextIdx = (idx + 1) % period;
            ring[idx] = 0.5 * (ring[idx] + ring[nextIdx]) * decay;
            idx = nextIdx;
        }
        return buffer;
    }

    function playGuitar(ctx, out, t0, vol) {
        // Quick three-note strum using Karplus-Strong plucked strings
        const notes = [196.0, 246.94, 293.66]; // G3, B3, D4
        notes.forEach((f, i) => {
            const start = t0 + i * 0.045;
            const buffer = karplusStrongBuffer(ctx, f, 1.6, 0.996);
            const src = ctx.createBufferSource();
            src.buffer = buffer;
            const g = ctx.createGain();
            g.gain.setValueAtTime(vol * 0.85, start);
            g.gain.exponentialRampToValueAtTime(0.0001, start + 1.5);
            src.connect(g).connect(out);
            src.start(start);
        });
    }

    const players = {
        bell: playBell,
        chime: playChime,
        buzzer: playBuzzer,
        rooster: playRooster,
        cow: playCow,
        train: playTrain,
        guitar: playGuitar
    };

    function play(type, volumePercent) {
        if (!type || type === 'none') return;
        const player = players[type];
        if (!player) return;
        const audioCtx = getCtx();
        const master = audioCtx.createGain();
        master.gain.value = 1;
        master.connect(audioCtx.destination);
        const vol = Math.max(0, Math.min(1, volumePercent / 100)) * 0.9;
        player(audioCtx, master, audioCtx.currentTime + 0.02, vol);
    }

    return { play };
})();

// ============================================
// Timer settings (alarm sound + low-time color warning)
// ============================================
const SETTINGS_KEY = 'classroomTimerSettings_v1';

function loadSettings() {
    const defaults = { sound: 'bell', volume: 55, warningEnabled: true };
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (raw) return Object.assign(defaults, JSON.parse(raw));
    } catch (e) { /* localStorage unavailable - fall back to defaults */ }
    return defaults;
}

function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ }
}

let settings = loadSettings();

// Initialize the flip clock
let totalSeconds = 0;
let timerInterval = null;

const clock = new FlipClockTimer(document.querySelector('.classroom-clock'));
const flipClockEl = document.querySelector('.flip-clock');
clock.setTime(totalSeconds, true);

// The duration the countdown started at, used as the "100%" reference
// for the low-time (15% remaining) color warning.
let startDuration = 0;

function updateWarningState() {
    if (!flipClockEl) return;
    const shouldWarn = settings.warningEnabled &&
        startDuration > 0 &&
        totalSeconds > 0 &&
        (totalSeconds / startDuration) <= 0.25;
    flipClockEl.classList.toggle('time-warning', shouldWarn);
}

function refreshClock() {
    clock.setTime(totalSeconds);
    updateWarningState();
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function playAlarmSound() {
    SoundKit.play(settings.sound, settings.volume);
}

// 1-minute increments
document.getElementById('btn-increase-minute').addEventListener('click', function () {
    totalSeconds += 60;
    if (!timerInterval) startDuration = totalSeconds;
    refreshClock();
});

document.getElementById('btn-reduce-minute').addEventListener('click', function () {
    totalSeconds = Math.max(0, totalSeconds - 60);
    if (!timerInterval) startDuration = totalSeconds;
    refreshClock();
});

// 1-second increments
document.getElementById('btn-increase-second').addEventListener('click', function () {
    totalSeconds += 1;
    if (!timerInterval) startDuration = totalSeconds;
    refreshClock();
});

document.getElementById('btn-reduce-second').addEventListener('click', function () {
    totalSeconds = Math.max(0, totalSeconds - 1);
    if (!timerInterval) startDuration = totalSeconds;
    refreshClock();
});

// Play, Pause, Stop Controls
document.getElementById('btn-start').addEventListener('click', function () {
    if (totalSeconds <= 0 || timerInterval) return;
    if (startDuration <= 0) startDuration = totalSeconds;
    timerInterval = setInterval(function () {
        totalSeconds -= 1;
        refreshClock();
        if (totalSeconds <= 0) {
            stopTimer();
            playAlarmSound();
        }
    }, 1000);
});

document.getElementById('btn-pause').addEventListener('click', function () {
    stopTimer();
});

document.getElementById('btn-stop').addEventListener('click', function () {
    stopTimer();
    totalSeconds = 0;
    startDuration = 0;
    refreshClock();
});

// Scroll & Drag Logic for Queue
const queueList = document.getElementById('queue-list');
let isDown = false;
let startY;
let scrollTop;
let isDragging = false; 

queueList.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false;
    startY = e.pageY - queueList.offsetTop;
    scrollTop = queueList.scrollTop;
});
queueList.addEventListener('mouseleave', () => { isDown = false; });
queueList.addEventListener('mouseup', () => { isDown = false; });
queueList.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - queueList.offsetTop;
    const walk = (y - startY) * 1.5;
    if (Math.abs(walk) > 3) isDragging = true;
    queueList.scrollTop = scrollTop - walk;
});

// ============================================
// Timer Controls Drawer (slide open/closed)
// ============================================
const controlsHandle = document.getElementById('btn-toggle-controls');
const controlsPanel = document.getElementById('controls-panel');

controlsHandle.addEventListener('click', function () {
    const isExpanded = controlsPanel.classList.toggle('expanded');
    controlsHandle.setAttribute('aria-expanded', String(isExpanded));
    controlsHandle.setAttribute('aria-label', isExpanded ? 'Hide timer controls' : 'Show timer controls');
});

// ============================================
// Check queue: rendering + teacher actions
// ============================================
const activeSlot = document.getElementById('active-slot');
const moveArrows = document.getElementById('move-arrows');
const btnMoveUp = document.getElementById('btn-move-up');
const btnMoveDown = document.getElementById('btn-move-down');
const btnReturnSeat = document.getElementById('btn-return-seat');
const btnBackOfLine = document.getElementById('btn-back-of-line');
const btnDone = document.getElementById('btn-done');
const btnReady = document.getElementById('btn-ready');
const scrollIndicator = document.getElementById('queue-scroll-indicator');

// Desk id of the chiclet the teacher has tapped, or null. Actions with no
// selection fall through to whoever is being checked right now.
let selectedQueueId = null;

// Copy line positions from `queue` onto the desk objects so desk cards,
// which render from `desk.queue`, stay in step with the sidebar.
function syncDeskQueueNumbers() {
    desks.forEach(d => { if (d) d.queue = null; });
    queue.forEach((id, i) => {
        const desk = deskById(id);
        if (desk) desk.queue = i + 1;
    });
}

// Patch the badges in place rather than re-rendering the grid, so a desk
// mid-wiggle or mid-sparkle keeps its animation.
function updateDeskBadges() {
    desks.forEach(desk => {
        if (!desk) return;
        const el = document.getElementById('desk-' + desk.id);
        if (!el) return;
        const badge = el.querySelector('.desk-badge');
        if (!badge) return;
        badge.textContent = desk.queue ? desk.queue : '';
        badge.classList.toggle('hidden', !desk.queue);
    });
}

function chicletHTML(desk, position) {
    return '<span>' + desk.name + ' ' + desk.homeroom + '</span>' +
           '<span class="queue-badge">' + position + '</span>';
}

function renderQueue() {
    syncDeskQueueNumbers();

    // A student who left the line can't stay selected
    if (selectedQueueId !== null && queue.indexOf(selectedQueueId) === -1) {
        selectedQueueId = null;
    }

    // "Now Checking" slot
    activeSlot.innerHTML = '';
    if (queue.length) {
        const desk = deskById(queue[0]);
        const el = document.createElement('div');
        el.className = 'chiclet active-chiclet' + (selectedQueueId === desk.id ? ' selected' : '');
        el.dataset.deskId = String(desk.id);
        el.innerHTML = chicletHTML(desk, 1);
        activeSlot.appendChild(el);
    } else {
        const el = document.createElement('div');
        el.className = 'queue-empty';
        el.textContent = 'Nobody in line';
        activeSlot.appendChild(el);
    }

    // Waiting list (everyone behind the student being checked)
    queueList.innerHTML = '';
    const waiting = queue.slice(1);
    if (waiting.length) {
        waiting.forEach((id, i) => {
            const desk = deskById(id);
            const li = document.createElement('li');
            li.className = 'chiclet' + (selectedQueueId === id ? ' selected' : '');
            li.dataset.deskId = String(id);
            li.innerHTML = chicletHTML(desk, i + 2);
            queueList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'queue-empty';
        li.textContent = 'No one waiting';
        queueList.appendChild(li);
    }

    // The "..." hint only means something when the list actually overflows
    scrollIndicator.classList.toggle('hidden', waiting.length < 5);

    moveArrows.classList.toggle('visible', selectedQueueId !== null);

    const idx = selectedQueueId === null ? -1 : queue.indexOf(selectedQueueId);
    btnMoveUp.disabled = idx <= 0;
    btnMoveDown.disabled = idx === -1 || idx >= queue.length - 1;

    const hasTarget = queueTargetId() !== null;
    btnReturnSeat.disabled = !hasTarget;
    btnBackOfLine.disabled = !hasTarget;
    btnDone.disabled = !hasTarget;

    updateDeskBadges();
    saveClassState();
}

// Actions act on the selected chiclet, or on the student being checked
// when nothing is selected - that's the common case for a teacher.
function queueTargetId() {
    if (selectedQueueId !== null) return selectedQueueId;
    return queue.length ? queue[0] : null;
}

function addToQueue(id) {
    if (queue.indexOf(id) !== -1) return;   // already in line
    queue.push(id);
    renderQueue();
}

function removeFromQueue(id) {
    const i = queue.indexOf(id);
    if (i === -1) return false;
    queue.splice(i, 1);
    if (selectedQueueId === id) selectedQueueId = null;
    return true;
}

function moveSelected(delta) {
    if (selectedQueueId === null) return;
    const i = queue.indexOf(selectedQueueId);
    const j = i + delta;
    if (i === -1 || j < 0 || j >= queue.length) return;
    queue[i] = queue[j];
    queue[j] = selectedQueueId;
    renderQueue();
}

// Tap a chiclet to select it, tap again to deselect
function onChicletClick(e) {
    if (isDragging) return;
    const el = e.target.closest('[data-desk-id]');
    if (!el) return;
    const id = Number(el.dataset.deskId);
    selectedQueueId = (selectedQueueId === id) ? null : id;
    renderQueue();
}

activeSlot.addEventListener('click', onChicletClick);
queueList.addEventListener('click', onChicletClick);

btnMoveUp.addEventListener('click', () => moveSelected(-1));
btnMoveDown.addEventListener('click', () => moveSelected(1));

// Sent back to work without being checked off - just leaves the line
btnReturnSeat.addEventListener('click', () => {
    const id = queueTargetId();
    if (id === null) return;
    removeFromQueue(id);
    renderQueue();
});

// Still needs checking, but someone else goes first
btnBackOfLine.addEventListener('click', () => {
    const id = queueTargetId();
    if (id === null) return;
    if (removeFromQueue(id)) queue.push(id);
    renderQueue();
});

// Check passed: leaves the line and moves up a writing stage
btnDone.addEventListener('click', () => {
    const id = queueTargetId();
    if (id === null) return;
    removeFromQueue(id);
    renderQueue();
    const desk = deskById(id);
    if (desk && desk.stage < stages.length - 1) advanceDeskStage(id);
});

// ============================================
// Ready to Check button
// ============================================
btnReady.addEventListener('click', () => setArmedMode('ready'));

renderQueue();

// ============================================
// Timer Settings Modal
// ============================================
const settingsOverlay = document.getElementById('settings-overlay');
const gearBtn = document.getElementById('btn-settings');
const settingsCloseBtn = document.getElementById('settings-close');
const soundSelect = document.getElementById('alarm-sound');
const testSoundBtn = document.getElementById('settings-test');
const volumeSlider = document.getElementById('alarm-volume');
const warningToggle = document.getElementById('warning-toggle');

function openSettings() {
    soundSelect.value = settings.sound;
    volumeSlider.value = settings.volume;
    warningToggle.checked = settings.warningEnabled;
    settingsOverlay.classList.add('open');
}

function closeSettings() {
    settingsOverlay.classList.remove('open');
}

gearBtn.addEventListener('click', openSettings);
settingsCloseBtn.addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', function (e) {
    if (e.target === settingsOverlay) closeSettings();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && settingsOverlay.classList.contains('open')) closeSettings();
});

soundSelect.addEventListener('change', function () {
    settings.sound = soundSelect.value;
    saveSettings();
    SoundKit.play(settings.sound, settings.volume);
});

volumeSlider.addEventListener('input', function () {
    settings.volume = Number(volumeSlider.value);
    saveSettings();
});

testSoundBtn.addEventListener('click', function () {
    SoundKit.play(soundSelect.value, Number(volumeSlider.value));
});

warningToggle.addEventListener('change', function () {
    settings.warningEnabled = warningToggle.checked;
    saveSettings();
    updateWarningState();
});

// ============================================
// Class setup: roster, seat swapping, persistence
// ============================================
const btnSwap = document.getElementById('btn-swap');
const btnSetupClass = document.getElementById('btn-setup-class');
const btnResetAll = document.getElementById('btn-reset-all');
const classOverlay = document.getElementById('class-overlay');
const classCloseBtn = document.getElementById('class-close');
const classCancelBtn = document.getElementById('class-cancel');
const classSaveBtn = document.getElementById('class-save');
const classNameInput = document.getElementById('class-name-input');
const projectTitleInput = document.getElementById('project-title-input');
const rosterInput = document.getElementById('roster-input');
const rosterHint = document.getElementById('roster-hint');
const classSwitcher = document.getElementById('class-switcher');
const btnNewClass = document.getElementById('class-new');
const btnDeleteClass = document.getElementById('class-delete');
const btnShowSplash = document.getElementById('btn-show-splash');

function renderHeader() {
    const nameEl = document.getElementById('class-name');
    const projEl = document.getElementById('project-title');
    nameEl.textContent = classLabel || 'not set up yet';
    nameEl.classList.toggle('unset', !classLabel);
    projEl.textContent = projectLabel || 'none yet';
    projEl.classList.toggle('unset', !projectLabel);
}

function classOptionLabel(rec) {
    if (!rec.classLabel && !rec.projectLabel) return 'Untitled class';
    if (!rec.projectLabel) return rec.classLabel;
    if (!rec.classLabel) return rec.projectLabel;
    return rec.classLabel + ' \u2014 ' + rec.projectLabel;
}

function renderClassSwitcher() {
    classSwitcher.innerHTML = '';
    classes.forEach(rec => {
        const opt = document.createElement('option');
        opt.value = rec.id;
        // Show the live labels for the class being edited, not the last saved ones
        opt.textContent = rec.id === activeClassId
            ? classOptionLabel({ classLabel: classLabel, projectLabel: projectLabel })
            : classOptionLabel(rec);
        opt.selected = rec.id === activeClassId;
        classSwitcher.appendChild(opt);
    });
    classSwitcher.disabled = classes.length < 2;
    // Deleting the last class would leave the board with nothing to show
    if (btnDeleteClass) btnDeleteClass.disabled = classes.length < 2;
}

function switchToClass(id) {
    if (!id || id === activeClassId) return;
    const target = classes.find(c => c.id === id);
    if (!target) return;
    saveClassState();        // bank the class we are leaving
    hideUndo();              // that snapshot belongs to the other class
    activeClassId = id;
    applyState(target);
    renderAll();
    saveClassState();
}

// --- Persistence -------------------------------------------------------
// localStorage can throw (private browsing, blocked storage). The tool still
// works fine without it, so every access is best-effort.
function serializeState() {
    return {
        classLabel: classLabel,
        projectLabel: projectLabel,
        waitingList: waitingList.slice(),
        desks: desks.map(d => d ? {
            id: d.id, name: d.name, gender: d.gender,
            homeroom: d.homeroom, stage: d.stage
        } : null),
        queue: queue.slice()
    };
}

function makeClassId() {
    return 'cls-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

// Validate one saved class into a clean record, or null if it is unusable.
// Every path that reads stored data goes through here, so a corrupt stage,
// an unknown gender or a line entry for a student who has left can never
// reach the renderer.
function normalizeClass(saved) {
    if (!saved || !Array.isArray(saved.desks)) return null;

    // Seat order matters, so a bad entry becomes an empty seat rather than
    // shifting everyone behind it along one.
    const desksOut = padSeats(saved.desks.map(d => {
        if (!d || typeof d.name !== 'string' || !d.name.trim()) return null;
        return {
            id: d.id,
            name: d.name,
            gender: (d.gender === 'boy' || d.gender === 'girl') ? d.gender : 'neutral',
            homeroom: d.homeroom == null ? '' : d.homeroom,
            stage: (Number.isInteger(d.stage) && d.stage >= 0 && d.stage < stages.length) ? d.stage : 0
        };
    }));

    const validIds = new Set(desksOut.filter(Boolean).map(d => d.id));
    const queueOut = [];
    (Array.isArray(saved.queue) ? saved.queue : []).forEach(id => {
        if (validIds.has(id) && queueOut.indexOf(id) === -1) queueOut.push(id);
    });

    return {
        id: (typeof saved.id === 'string' && saved.id) ? saved.id : makeClassId(),
        classLabel: typeof saved.classLabel === 'string' ? saved.classLabel : '',
        projectLabel: typeof saved.projectLabel === 'string' ? saved.projectLabel : '',
        // Classes saved before this existed simply get the default routine
        waitingList: Array.isArray(saved.waitingList)
            ? saved.waitingList.filter(t => typeof t === 'string' && t.trim()).map(t => t.trim())
            : DEFAULT_WAITING.slice(),
        desks: desksOut,
        queue: queueOut
    };
}

// Load a class record into the live working copy. Shared by startup, class
// switching and undo. Returns false and changes nothing if it is unusable.
function applyState(saved) {
    const rec = normalizeClass(saved);
    if (!rec) return false;

    desks.length = 0;
    rec.desks.forEach(d => desks.push(d ? {
        id: d.id, name: d.name, gender: d.gender,
        homeroom: d.homeroom, stage: d.stage, queue: null
    } : null));
    queue.length = 0;
    rec.queue.forEach(id => queue.push(id));

    classLabel = rec.classLabel;
    projectLabel = rec.projectLabel;
    waitingList = rec.waitingList.slice();
    return true;
}

function currentClassRecord() {
    const rec = serializeState();
    rec.id = activeClassId;
    return rec;
}

function saveClassState() {
    // Fold the live working copy back into the active class, then persist all
    const rec = currentClassRecord();
    const i = classes.findIndex(c => c.id === activeClassId);
    if (i === -1) classes.push(rec); else classes[i] = rec;

    const payload = JSON.stringify({ activeId: activeClassId, classes: classes });
    try {
        localStorage.setItem(CLASSES_KEY, payload);
    } catch (e) { /* storage blocked or full - not persisting is survivable */ }
}

// First ever run: one empty class, waiting to be set up
function seedDefaultClass() {
    activeClassId = makeClassId();
    classLabel = '';
    projectLabel = '';
    desks.length = 0;
    queue.length = 0;
    classes = [currentClassRecord()];
}

// A seat map for a class with nobody in it yet
function emptyRoom() {
    return padSeats([]);
}

function readStored(key) {
    let raw;
    try {
        raw = localStorage.getItem(key);
    } catch (e) {
        return null;   // storage blocked
    }
    if (!raw) return null;
    try {
        return JSON.parse(raw);   // saved data can be corrupt or from an older shape
    } catch (e) {
        return null;
    }
}

function loadClassState() {
    let envelope = readStored(CLASSES_KEY);

    // A class saved by the single-class version becomes the first class here
    if (!envelope || !Array.isArray(envelope.classes)) {
        const migrated = normalizeClass(readStored(CLASS_KEY));
        envelope = migrated ? { activeId: migrated.id, classes: [migrated] } : null;
    }

    const list = (envelope && Array.isArray(envelope.classes)) ? envelope.classes : [];
    classes = list.map(normalizeClass).filter(Boolean);
    if (!classes.length) {
        seedDefaultClass();
        return;
    }

    const wanted = envelope && envelope.activeId;
    const active = classes.find(c => c.id === wanted) || classes[0];
    activeClassId = active.id;
    applyState(active);
}

// Redraw everything from the current state. Used after any change that can
// move students between seats or rewrite the roster.
function renderAll() {
    selectedQueueId = null;
    setArmedMode(null);
    renderHeader();
    renderWaitingList();
    renderClassSwitcher();
    renderDesks();
    renderQueue();
}

// --- Seat swapping -----------------------------------------------------
function clearSwapPick() {
    if (swapFirstSeat === null) return;
    const el = classroomGrid.querySelector('[data-seat="' + swapFirstSeat + '"]');
    if (el) el.classList.remove('swap-pick');
    swapFirstSeat = null;
}

function pickForSwap(seat) {
    if (swapFirstSeat === null) {
        swapFirstSeat = seat;
        const el = classroomGrid.querySelector('[data-seat="' + seat + '"]');
        if (el) el.classList.add('swap-pick');
        return;
    }
    if (swapFirstSeat === seat) {   // tapped the same desk again: cancel the pick
        clearSwapPick();
        return;
    }

    const a = swapFirstSeat;
    const b = seat;
    clearSwapPick();
    if (a < 0 || b < 0 || a >= desks.length || b >= desks.length) return;

    // `desks` order is seating order and each id belongs to a student, so
    // swapping the two entries moves the students without disturbing the
    // check line - a queued student keeps their place after changing seats.
    // Either end may be an empty seat, which is how a student is moved into
    // a free desk.
    const tmp = desks[a];
    desks[a] = desks[b];
    desks[b] = tmp;

    renderDesks();
    renderQueue();
    saveClassState();
    // Stay armed: rearranging a room means several swaps in a row. Tap
    // Swap Seats again to finish.
}

btnSwap.addEventListener('click', () => setArmedMode('swap'));

// --- Roster parsing ----------------------------------------------------
// One student per line: "Name, homeroom, girl/boy". Homeroom and gender are
// optional; gender only decides the desk colour, so anything unrecognised
// falls back to a neutral desk rather than rejecting the line.
function parseRoster(text) {
    const students = [];
    text.split('\n').forEach(line => {
        const parts = line.split(',').map(part => part.trim());
        const name = parts[0];
        if (!name) return;
        const g = (parts[2] || '').toLowerCase();
        let gender = 'neutral';
        if (g === 'g' || g === 'girl' || g === 'f' || g === 'female') gender = 'girl';
        else if (g === 'b' || g === 'boy' || g === 'm' || g === 'male') gender = 'boy';
        students.push({ name: name, homeroom: parts[1] || '', gender: gender });
    });
    return students;
}

function rosterToText() {
    return desks.filter(Boolean).map(d => {
        const bits = [d.name, d.homeroom];
        if (d.gender !== 'neutral') bits.push(d.gender);
        return bits.join(', ');
    }).join('\n');
}

function studentKey(name, homeroom) {
    return name.toLowerCase() + '|' + String(homeroom).toLowerCase();
}

function applyRoster(students) {
    // Carry writing stages over for students who are still on the roster, so
    // fixing a typo or adding a late arrival doesn't wipe the class's work.
    const previous = new Map();
    desks.filter(Boolean).forEach(d => {
        const key = studentKey(d.name, d.homeroom);
        if (!previous.has(key)) previous.set(key, []);
        previous.get(key).push(d);
    });
    const takePrevious = key => {
        const bucket = previous.get(key);
        return (bucket && bucket.length) ? bucket.shift() : null;
    };

    const queuedKeys = queue
        .map(id => deskById(id))
        .filter(Boolean)
        .map(d => studentKey(d.name, d.homeroom));

    // Students fill the seats in roster order; the rest of the room stays
    // empty, ready to be arranged to match the real classroom.
    const seated = students.map((student, i) => {
        const prev = takePrevious(studentKey(student.name, student.homeroom));
        return {
            id: i + 1,
            name: student.name,
            gender: student.gender,
            homeroom: student.homeroom,
            stage: prev ? prev.stage : 0,
            queue: null
        };
    });
    desks.length = 0;
    padSeats(seated).forEach(d => desks.push(d));

    // Rebuild the line in its old order, dropping anyone no longer enrolled
    const available = new Map();
    desks.filter(Boolean).forEach(d => {
        const key = studentKey(d.name, d.homeroom);
        if (!available.has(key)) available.set(key, []);
        available.get(key).push(d.id);
    });
    const rebuilt = [];
    queuedKeys.forEach(key => {
        const bucket = available.get(key);
        if (bucket && bucket.length) rebuilt.push(bucket.shift());
    });
    queue.length = 0;
    rebuilt.forEach(id => queue.push(id));

    renderAll();
}

// --- Set Up Class modal ------------------------------------------------
function openClassSetup() {
    classNameInput.value = classLabel;
    projectTitleInput.value = projectLabel;
    rosterInput.value = rosterToText();
    rosterHint.textContent = desks.length
        ? 'Seats fill left to right, in this order.'
        : 'Type this class\u2019s students, one per line.';
    rosterHint.classList.remove('error');
    btnDeleteClass.disabled = classes.length < 2;
    classOverlay.classList.add('open');
    classNameInput.focus();
}

function closeClassSetup() {
    classOverlay.classList.remove('open');
}

btnSetupClass.addEventListener('click', openClassSetup);
classCloseBtn.addEventListener('click', closeClassSetup);
classCancelBtn.addEventListener('click', closeClassSetup);
classOverlay.addEventListener('click', function (e) {
    if (e.target === classOverlay) closeClassSetup();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && classOverlay.classList.contains('open')) closeClassSetup();
});

classSwitcher.addEventListener('change', function () {
    switchToClass(classSwitcher.value);
});

// --- What students do while they wait ---------------------------------
const waitingListEl = document.getElementById('waiting-list');
const waitingOverlay = document.getElementById('waiting-overlay');
const waitingInput = document.getElementById('waiting-input');
const waitingHint = document.getElementById('waiting-hint');
const btnEditWaiting = document.getElementById('btn-edit-waiting');
const btnWaitingSave = document.getElementById('waiting-save');
const btnWaitingCancel = document.getElementById('waiting-cancel');
const btnWaitingClose = document.getElementById('waiting-close');

function renderWaitingList() {
    waitingListEl.innerHTML = '';
    waitingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        waitingListEl.appendChild(li);
    });
}

function openWaitingEditor() {
    waitingInput.value = waitingList.join('\n');
    waitingHint.textContent = 'Keep them short \u2014 they show in the narrow side panel.';
    waitingHint.classList.remove('error');
    waitingOverlay.classList.add('open');
    waitingInput.focus();
}

function closeWaitingEditor() {
    waitingOverlay.classList.remove('open');
}

btnEditWaiting.addEventListener('click', openWaitingEditor);
btnWaitingCancel.addEventListener('click', closeWaitingEditor);
btnWaitingClose.addEventListener('click', closeWaitingEditor);
waitingOverlay.addEventListener('click', function (e) {
    if (e.target === waitingOverlay) closeWaitingEditor();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && waitingOverlay.classList.contains('open')) closeWaitingEditor();
});

btnWaitingSave.addEventListener('click', function () {
    const items = waitingInput.value.split('\n').map(t => t.trim()).filter(Boolean);
    if (!items.length) {
        waitingHint.textContent = 'Add at least one thing, or press Cancel to keep the current list.';
        waitingHint.classList.add('error');
        waitingInput.focus();
        return;
    }
    waitingList = items;
    renderWaitingList();
    saveClassState();
    closeWaitingEditor();
});

// A brand-new class starts empty so the teacher can type straight into the
// roster box; it only becomes a real class once they save one.
btnNewClass.addEventListener('click', function () {
    saveClassState();
    const rec = {
        id: makeClassId(),
        classLabel: '',
        projectLabel: '',
        waitingList: DEFAULT_WAITING.slice(),
        desks: [],
        queue: []
    };
    classes.push(rec);
    activeClassId = rec.id;
    applyState(rec);
    renderAll();
    saveClassState();

    classNameInput.value = '';
    projectTitleInput.value = '';
    rosterInput.value = '';
    rosterHint.textContent = 'Type this class\u2019s students, one per line.';
    rosterHint.classList.remove('error');
    classNameInput.focus();
});

btnDeleteClass.addEventListener('click', function () {
    if (classes.length < 2) return;   // there has to be a class to fall back to
    const doomed = classes.find(c => c.id === activeClassId);
    const name = doomed ? doomed.classLabel : classLabel;
    askConfirm(
        'Delete Class',
        'Delete "' + name + '" and everything saved with it \u2014 its roster, writing stages and check line? This cannot be undone.',
        'Delete',
        function () {
            const i = classes.findIndex(c => c.id === activeClassId);
            if (i === -1) return;
            classes.splice(i, 1);
            const next = classes[Math.min(i, classes.length - 1)];
            activeClassId = next.id;
            applyState(next);
            hideUndo();
            renderAll();
            saveClassState();
            openClassSetup();   // reopen showing whichever class we landed on
        }
    );
});

classSaveBtn.addEventListener('click', function () {
    const students = parseRoster(rosterInput.value);
    if (!classNameInput.value.trim()) {
        rosterHint.textContent = 'Give the class a name first.';
        rosterHint.classList.add('error');
        classNameInput.focus();
        return;
    }
    if (!students.length) {
        rosterHint.textContent = 'Add at least one student before saving.';
        rosterHint.classList.add('error');
        rosterInput.focus();
        return;
    }
    const before = serializeState();
    classLabel = classNameInput.value.trim();
    projectLabel = projectTitleInput.value.trim();
    applyRoster(students);
    closeClassSetup();
    offerUndo('Class updated.', before);
});

// Back to the welcome screen, mainly so the song can be played again
btnShowSplash.addEventListener('click', function () {
    showSplash();
});

// --- Reset All ---------------------------------------------------------
btnResetAll.addEventListener('click', function () {
    askConfirm(
        'Reset All',
        'Put every student back to Pre-Writing and clear the check line? The class roster is kept.',
        'Reset',
        function () {
            const before = serializeState();
            desks.forEach(d => { if (d) d.stage = 0; });
            queue.length = 0;
            renderAll();
            offerUndo('Class reset to Pre-Writing.', before);
        }
    );
});

// --- Confirm dialog ----------------------------------------------------
// An in-app dialog rather than window.confirm: native dialogs look out of
// place in an installed app window and some platforms suppress them.
const confirmOverlay = document.getElementById('confirm-overlay');
const confirmTitle = document.getElementById('confirm-title');
const confirmText = document.getElementById('confirm-text');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
let confirmAction = null;

function askConfirm(title, message, confirmLabel, onConfirm) {
    confirmTitle.textContent = title;
    confirmText.textContent = message;
    confirmYes.textContent = confirmLabel;
    confirmAction = onConfirm;
    confirmOverlay.classList.add('open');
    confirmNo.focus();
}

function closeConfirm() {
    confirmOverlay.classList.remove('open');
    confirmAction = null;
}

confirmYes.addEventListener('click', function () {
    const act = confirmAction;
    closeConfirm();
    if (act) act();
});
confirmNo.addEventListener('click', closeConfirm);
confirmOverlay.addEventListener('click', function (e) {
    if (e.target === confirmOverlay) closeConfirm();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && confirmOverlay.classList.contains('open')) closeConfirm();
});

// --- Undo ---------------------------------------------------------------
// Reset All and saving a roster can throw away a morning's work, so each one
// keeps a snapshot the teacher can put back for a few seconds afterwards.
const undoToast = document.getElementById('undo-toast');
const undoMessage = document.getElementById('undo-message');
const undoBtn = document.getElementById('undo-btn');
const UNDO_TIMEOUT_MS = 15000;
let undoSnapshot = null;
let undoTimer = null;

function offerUndo(message, snapshot) {
    undoSnapshot = snapshot;
    undoMessage.textContent = message;
    undoToast.classList.add('show');
    clearTimeout(undoTimer);
    undoTimer = setTimeout(hideUndo, UNDO_TIMEOUT_MS);
}

function hideUndo() {
    clearTimeout(undoTimer);
    undoToast.classList.remove('show');
    undoSnapshot = null;
}

undoBtn.addEventListener('click', function () {
    if (!undoSnapshot) return;
    if (applyState(undoSnapshot)) renderAll();
    hideUndo();
});

// ============================================
// Welcome splash + warm-up song
// ============================================
// The splash is visible from CSS on load so the board never flashes the desk
// grid first. Everything below is about getting out of it again.
const splash = document.getElementById('splash');
const splashSky = document.getElementById('splash-sky');
const splashTitle = document.getElementById('splash-title');
const splashClass = document.getElementById('splash-class');
const btnEnterApp = document.getElementById('btn-enter-app');
const btnPlaySong = document.getElementById('btn-play-song');
const btnCloseSong = document.getElementById('btn-close-song');
const btnSongDone = document.getElementById('btn-song-done');
const songStage = document.getElementById('song-stage');
const songFallback = document.getElementById('song-fallback');
const warmupVideo = document.getElementById('warmup-video');

const prefersReducedMotion = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Wrap each letter so the title can bounce a letter at a time. The <h1> keeps
// its text, so screen readers and the page title are unaffected.
function animateSplashTitle() {
    if (prefersReducedMotion) return;
    const text = splashTitle.textContent;
    splashTitle.textContent = '';
    text.split('').forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = ch === ' ' ? 'ltr space' : 'ltr';
        span.textContent = ch === ' ' ? ' ' : ch;
        span.style.animationDelay = (i * 0.08).toFixed(2) + 's';
        splashTitle.appendChild(span);
    });
}

// Letters and pencils drifting up behind the card
const SPLASH_FLOATERS = ['A', 'B', 'C', 'a', 'b', 'c', '✏️', '✨', '⭐', '\u{1F4DA}', '1', '2', '3'];
function startSplashSky() {
    if (prefersReducedMotion) return;
    for (let i = 0; i < 18; i++) {
        const el = document.createElement('span');
        el.className = 'splash-float';
        el.textContent = SPLASH_FLOATERS[Math.floor(Math.random() * SPLASH_FLOATERS.length)];
        el.style.left = (Math.random() * 96) + '%';
        el.style.fontSize = (1.5 + Math.random() * 2.4).toFixed(2) + 'rem';
        el.style.animationDuration = (11 + Math.random() * 12).toFixed(1) + 's';
        el.style.animationDelay = (-Math.random() * 18).toFixed(1) + 's';
        el.style.setProperty('--spin', (Math.random() * 90 - 45).toFixed(0) + 'deg');
        splashSky.appendChild(el);
    }
}

function showSplashClass() {
    const bits = [];
    if (classLabel) bits.push(classLabel);
    if (projectLabel) bits.push(projectLabel);
    splashClass.textContent = bits.join('  •  ');
}

function stopSong() {
    try {
        warmupVideo.pause();
        warmupVideo.currentTime = 0;
    } catch (e) { /* nothing playing yet */ }
}

function closeSong() {
    stopSong();
    songStage.classList.remove('open');
    btnPlaySong.focus();
}

let splashDismissed = false;
function enterApp() {
    if (splashDismissed) return;
    splashDismissed = true;
    stopSong();
    splash.classList.add('leaving');
    const finish = () => {
        splash.classList.add('hidden');
        splashSky.innerHTML = '';   // stop the drifting letters animating off-screen
        btnReady.focus();
    };
    if (prefersReducedMotion) finish();
    else setTimeout(finish, 450);
}

// Bring the welcome screen back, so the song can be played again mid-lesson
function showSplash() {
    splashDismissed = false;
    splash.classList.remove('hidden', 'leaving');
    if (!splashSky.childElementCount) startSplashSky();
    showSplashClass();   // the class may have changed since it was last shown
    btnEnterApp.focus();
}

btnEnterApp.addEventListener('click', enterApp);
btnSongDone.addEventListener('click', enterApp);
btnCloseSong.addEventListener('click', closeSong);

btnPlaySong.addEventListener('click', function () {
    songStage.classList.add('open');
    warmupVideo.preload = 'auto';
    // Started from a tap, so the browser lets it play with sound.
    const started = warmupVideo.play();
    if (started && started.catch) started.catch(() => { /* teacher can use the controls */ });
    btnCloseSong.focus();
});

// If the file or its codec is unavailable, say so and offer the download
// rather than leaving a silent black box on the board.
warmupVideo.addEventListener('error', function () {
    songFallback.hidden = false;
});

songStage.addEventListener('click', function (e) {
    if (e.target === songStage) closeSong();
});

document.addEventListener('keydown', function (e) {
    if (splashDismissed) return;
    if (e.key === 'Escape') {
        // Escape backs out of the song first, then off the splash entirely
        if (songStage.classList.contains('open')) closeSong();
        else enterApp();
        return;
    }
    // Enter goes straight to the board, unless a button already has focus
    if (e.key === 'Enter' && !(document.activeElement && document.activeElement.tagName === 'BUTTON')) {
        enterApp();
    }
});

animateSplashTitle();
startSplashSky();
showSplashClass();
renderWaitingList();
renderClassSwitcher();   // safe here: the class-setup elements exist by now
btnEnterApp.focus();
