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

// Small first-name pool + homerooms used only to seed a placeholder roster
// until "Set Up Class" (real roster upload) exists.
const placeholderRoster = [
    ['Sachiko', 'girl', 203], ['Jimmy', 'boy', 203], ['Alexandria', 'girl', 205], ['Sam', 'boy', 201],
    ['Jenny', 'girl', 205], ['Christopher', 'boy', 208], ['Mike', 'boy', 210], ['Leo', 'boy', 204],
    ['Sarah', 'girl', 202], ['Fred', 'boy', 208], ['Maria', 'girl', 201], ['Daniel', 'boy', 206],
    ['Priya', 'girl', 209], ['Marcus', 'boy', 203], ['Olivia', 'girl', 207], ['Ethan', 'boy', 205],
    ['Zoe', 'girl', 210], ['Nathan', 'boy', 202], ['Amara', 'girl', 206], ['Lucas', 'boy', 209],
    ['Isabella', 'girl', 204], ['Ryan', 'boy', 207], ['Grace', 'girl', 208], ['Aiden', 'boy', 201],
    ['Chloe', 'girl', 203], ['Owen', 'boy', 210], ['Layla', 'girl', 202], ['Henry', 'boy', 206],
    ['Nora', 'girl', 209], ['Caleb', 'boy', 205]
];

// Queue positions matching the placeholder "Now Checking" / "Waiting" sidebar content
const queuePositions = { 'Sachiko': 1, 'Jimmy': 2, 'Sam': 3, 'Jenny': 4, 'Fred': 5, 'Sarah': 6, 'Mike': 7, 'Leo': 8 };

// Spread starting stages across the grid just so the demo shows real variety
const starterStages = [0, 1, 0, 2, 4, 0, 1, 2, 0, 3, 1, 0, 2, 0, 1, 0, 3, 1, 0, 2, 0, 1, 4, 0, 2, 0, 1, 0, 3, 0];

const desks = placeholderRoster.map(([name, gender, homeroom], i) => ({
    id: i + 1,
    name,
    gender,
    homeroom,
    stage: starterStages[i],
    queue: queuePositions[name] || null
}));

// ============================================
// Desk rendering
// ============================================
const classroomGrid = document.getElementById('classroom-grid');
let changeLevelArmed = false;

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
    desks.forEach(desk => {
        const el = document.createElement('div');
        el.className = 'desk ' + desk.gender;
        el.id = 'desk-' + desk.id;
        el.innerHTML = deskCardHTML(desk);
        el.addEventListener('click', () => onDeskTap(desk.id));
        classroomGrid.appendChild(el);
    });
    updateArmableState();
}

function updateArmableState() {
    document.querySelectorAll('.desk').forEach(el => {
        el.classList.toggle('armable', changeLevelArmed);
    });
}

function onDeskTap(id) {
    if (!changeLevelArmed) return;
    advanceDeskStage(id);
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
btnChangeLevel.addEventListener('click', () => {
    changeLevelArmed = !changeLevelArmed;
    btnChangeLevel.classList.toggle('armed', changeLevelArmed);
    updateArmableState();
});

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

const chiclets = document.querySelectorAll('.chiclet');
const moveArrows = document.getElementById('move-arrows');

chiclets.forEach(chiclet => {
    chiclet.addEventListener('click', () => {
        if (!isDragging) {
            const wasSelected = chiclet.classList.contains('selected');
            chiclets.forEach(c => c.classList.remove('selected'));
            
            if (!wasSelected) {
                chiclet.classList.add('selected');
                moveArrows.classList.add('visible');
            } else {
                moveArrows.classList.remove('visible');
            }
        }
    });
});

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
