// actualites.js — La Cabane
// News cards + interactive calendar/agenda
// To add content: edit NEWS_ARTICLES and EVENTS below.

// ══════════════════════════════════════════════════════
//  DATA — edit these to populate the page
// ══════════════════════════════════════════════════════

const NEWS_ARTICLES = [
  {
    tag:     "Nouveauté",
    date:    new Date(2026, 2, 28),   // 28 mars 2026
    title:   "Arrivage printemps : les gyokuro sont là",
    excerpt: "Notre sélection de thés verts ombrés du Japon vient d'arriver. Découvrez notamment le Gyokuro Prestige de Kyushu, récolte de printemps, d'une intensité umami exceptionnelle.",
    image:   null,
    emoji:   "🌿",
    author:  "La Cabane",
    authorEmoji: "🍃",
  },
  {
    tag:     "Événement",
    date:    new Date(2026, 3, 12),   // 12 avril 2026
    title:   "Atelier dégustation : les oolongs de Taïwan",
    excerpt: "Rejoignez-nous pour une après-midi autour des grands oolongs taiwanais. Dong Ding, Oriental Beauty, Ali Shan… une plongée dans l'art du thé semi-oxydé.",
    image:   null,
    emoji:   "🦋",
    author:  "La Cabane",
    authorEmoji: "🍃",
  },
  {
    tag:     "Boutique",
    date:    new Date(2026, 3, 1),    // 1 avril 2026
    title:   "Nouveaux packaging pour la boutique en ligne",
    excerpt: "Nos boîtes de thé font peau neuve ! Un emballage éco-responsable, élégant, parfait pour offrir. Toutes les commandes en ligne bénéficient du nouveau packaging dès maintenant.",
    image:   null,
    emoji:   "📦",
    author:  "La Cabane",
    authorEmoji: "🍃",
  },
];

// Events for the agenda/calendar
// month is 0-indexed (0 = janvier, 3 = avril…)
const EVENTS = [
  {
    date:        new Date(2026, 3, 12),
    time:        "14h00 – 17h00",
    title:       "Atelier : Oolongs de Taïwan",
    description: "Dégustation commentée de 5 oolongs, des plus légers aux plus oxydés. Places limitées à 8 personnes.",
    tag:         "Dégustation",
    emoji:       "🦋",
  },
  {
    date:        new Date(2026, 3, 19),
    time:        "10h30 – 12h00",
    title:       "Introduction au Matcha",
    description: "Apprenez les gestes du chakai : tamiser, fouetter, apprécier. Un atelier doux et apaisant.",
    tag:         "Atelier",
    emoji:       "🍵",
  },
  {
    date:        new Date(2026, 4, 3),
    time:        "Toute la journée",
    title:       "Fête du thé de printemps",
    description: "Journée portes ouvertes avec dégustations gratuites, mini-conférences et vente flash sur toute la boutique.",
    tag:         "Événement",
    emoji:       "🌸",
  },
  {
    date:        new Date(2026, 4, 17),
    time:        "15h00 – 16h30",
    title:       "Atelier : Thés blancs du Fujian",
    description: "Bai Hao Yin Zhen, Pai Mu Tan, Shou Mei… Un voyage dans la douceur et la délicatesse des thés blancs.",
    tag:         "Dégustation",
    emoji:       "🌾",
  },
];

// ══════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════

function fmtDate(d) {
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function fmtDay(d)   { return d.getDate(); }
function fmtMon(d)   { return d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.',''); }
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth()    === b.getMonth()    &&
         a.getDate()     === b.getDate();
}

function esc(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ══════════════════════════════════════════════════════
//  NEWS CARDS
// ══════════════════════════════════════════════════════

function renderNewsCard(a) {
  const imageHTML = a.image
    ? `<img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">`
    : `<div class="news-card-image-placeholder">${a.emoji}</div>`;

  return `
    <article class="news-card">
      <div class="news-card-image">
        ${imageHTML}
        <span class="news-card-tag">${esc(a.tag)}</span>
      </div>
      <div class="news-card-body">
        <span class="news-card-date">${fmtDate(a.date)}</span>
        <h3 class="news-card-title">${esc(a.title)}</h3>
        <p class="news-card-excerpt">${esc(a.excerpt)}</p>
      </div>
      <div class="news-card-footer">
        <div class="news-card-author">
          <div class="news-card-author-avatar">${a.authorEmoji}</div>
          ${esc(a.author)}
        </div>
        <span class="news-read-more">
          Lire
          <iconify-icon icon="ph:arrow-right" width="12" height="12"></iconify-icon>
        </span>
      </div>
    </article>
  `;
}

// ══════════════════════════════════════════════════════
//  CALENDAR
// ══════════════════════════════════════════════════════

let calYear, calMonth, selectedDate = null;

function initCalendar() {
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();
  renderCalendar();
}

function renderCalendar() {
  const widget = document.querySelector('.calendar-widget');
  if (!widget) return;

  const today  = new Date();
  const first  = new Date(calYear, calMonth, 1);
  const last   = new Date(calYear, calMonth + 1, 0);
  const startDow = (first.getDay() + 6) % 7; // Monday-first
  const label  = new Date(calYear, calMonth, 1)
    .toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  // Build day cells
  let cells = '';
  // Leading blanks
  for (let i = 0; i < startDow; i++) {
    const d = new Date(calYear, calMonth, -startDow + i + 1);
    cells += `<div class="cal-day other-month">${d.getDate()}</div>`;
  }
  // Current month
  for (let d = 1; d <= last.getDate(); d++) {
    const date   = new Date(calYear, calMonth, d);
    const isToday   = sameDay(date, today);
    const hasEvent  = EVENTS.some(e => sameDay(e.date, date));
    const isSel     = selectedDate && sameDay(date, selectedDate);
    const classes = [
      'cal-day',
      isToday   ? 'today'     : '',
      hasEvent  ? 'has-event' : '',
      isSel     ? 'selected'  : '',
    ].filter(Boolean).join(' ');
    const ds = `${calYear}-${calMonth}-${d}`;
    cells += `<div class="${classes}" data-date="${ds}">${d}</div>`;
  }
  // Trailing blanks
  const trail = (7 - ((startDow + last.getDate()) % 7)) % 7;
  for (let i = 1; i <= trail; i++) {
    cells += `<div class="cal-day other-month">${i}</div>`;
  }

  widget.querySelector('.cal-month-label').textContent = label;
  widget.querySelector('.cal-grid').innerHTML = cells;

  // Day click → filter events
  widget.querySelectorAll('.cal-day.has-event').forEach(el => {
    el.addEventListener('click', () => {
      const [y, m, d] = el.dataset.date.split('-').map(Number);
      const clicked = new Date(y, m, d);
      if (selectedDate && sameDay(selectedDate, clicked)) {
        selectedDate = null; // deselect
      } else {
        selectedDate = clicked;
      }
      renderCalendar();
      renderEventCards();
      renderCalendarPreview();
    });
  });

  renderCalendarPreview();
}

function renderCalendarPreview() {
  const preview = document.querySelector('.cal-events-preview');
  if (!preview) return;
  const date = selectedDate ?? new Date();
  const evs  = EVENTS.filter(e => sameDay(e.date, date));
  const label = selectedDate
    ? date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
    : "Aujourd'hui";

  preview.innerHTML = `<p class="cal-events-preview-title">${label}</p>` +
    (evs.length
      ? evs.map(e => `
          <div class="cal-event-pill" data-event-title="${esc(e.title)}">
            <div class="cal-event-pill-dot"></div>
            ${esc(e.title)}
          </div>`).join('')
      : `<p class="cal-no-event">Aucun événement</p>`
    );

  // Click pill → highlight event card
  preview.querySelectorAll('.cal-event-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const title = pill.dataset.eventTitle;
      document.querySelectorAll('.event-card').forEach(card => {
        card.classList.toggle('highlighted',
          card.dataset.eventTitle === title);
        card.classList.toggle('dimmed',
          card.dataset.eventTitle !== title);
      });
      setTimeout(() => {
        document.querySelector('.event-card.highlighted')
          ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    });
  });
}

// ── Calendar navigation ────────────────────────────
function bindCalNav() {
  document.querySelector('.cal-prev')?.addEventListener('click', () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    selectedDate = null;
    renderCalendar();
    renderEventCards();
  });
  document.querySelector('.cal-next')?.addEventListener('click', () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    selectedDate = null;
    renderCalendar();
    renderEventCards();
  });
}

// ══════════════════════════════════════════════════════
//  EVENT CARDS
// ══════════════════════════════════════════════════════

function renderEventCards() {
  const container = document.querySelector('.agenda-events');
  if (!container) return;

  // Show events for current calendar month, or filtered by selectedDate
  const filtered = EVENTS.filter(e =>
    selectedDate
      ? sameDay(e.date, selectedDate)
      : e.date.getMonth() === calMonth && e.date.getFullYear() === calYear
  ).sort((a, b) => a.date - b.date);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding:40px 0;text-align:center;color:var(--ink-muted);font-size:14px;font-weight:300;font-style:italic;">
        Aucun événement ce mois-ci.
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(e => `
    <div class="event-card" data-event-title="${esc(e.title)}">
      <div class="event-date-block">
        <span class="event-day">${fmtDay(e.date)}</span>
        <span class="event-month">${fmtMon(e.date)}</span>
      </div>
      <div class="event-body">
        <span class="event-time">
          <iconify-icon icon="ph:clock" width="11" height="11"></iconify-icon>
          ${esc(e.time)}
        </span>
        <h3 class="event-title">${esc(e.title)}</h3>
        <p class="event-description">${esc(e.description)}</p>
        <span class="event-tag">${e.emoji} ${esc(e.tag)}</span>
      </div>
    </div>
  `).join('');

  // Click event card → highlight it and sync calendar
  container.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
      const isHL = card.classList.contains('highlighted');
      container.querySelectorAll('.event-card').forEach(c => {
        c.classList.remove('highlighted', 'dimmed');
      });
      if (!isHL) {
        card.classList.add('highlighted');
        container.querySelectorAll('.event-card:not(.highlighted)')
          .forEach(c => c.classList.add('dimmed'));
      }
    });
  });
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // News
  const newsGrid = document.querySelector('.news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = NEWS_ARTICLES.map(renderNewsCard).join('');
  }

  // Calendar
  initCalendar();
  bindCalNav();
  renderEventCards();
});
