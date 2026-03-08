/* ─── PROJECT DATA ──────────────────────────────────────────── */
const PROJECTS = [
  {
    title: 'Gestro',
    short: 'A privacy-first, cross-device file transfer system that uses hand gestures and local Wi-Fi to securely send photos without internet dependency.',
    tech: ['Kotlin', 'Android', 'CameraX', 'Local Server', 'Socket Programming', 'Python Backend', 'Networking', 'Concurrency'],
    role: 'Designed and engineered the gesture-recognition workflow, local transfer engine, reliability logic, and multi-device communication system.',
    demo: 'https://play.google.com/store/apps/details?id=com.gtca.gestro',
    img: 'assets/gestro.png',
    tags: ['mobile', 'android', 'privacy', 'file-transfer', 'networking', 'kotlin', 'gesture', 'realtime']
  },
  {
    title: 'GestroWin',
    short: 'A Windows desktop companion app that seamlessly receives, organizes, and previews files sent from the Gestro Android app.',
    tech: ['Python', 'PyQt', 'Local Server', 'Socket Receiver', 'File Processing', 'Desktop UI'],
    role: 'Built the receiver service, file-organization workflow, connection handling, and user-friendly interface for fast desktop import.',
    demo: 'https://www.gestro.dev/downloads',
    img: 'assets/gestrowin.png',
    tags: ['desktop', 'python', 'pyqt', 'file-transfer', 'receiver', 'windows-app', 'networking']
  },
  {
    title: 'QRLogger',
    short: 'High-accuracy QR-based attendance tracking system used in real events with thousands of scans and instant cloud logging.',
    tech: ['Kotlin', 'CameraX', 'Google Sheets API', 'QR Scanning', 'SQLite', 'Optimized Scanning Pipeline'],
    role: 'Built the QR scan pipeline, real-time logging workflow, offline recovery logic, and integration with Google Sheets for automated reporting.',
    demo: 'https://play.google.com/store/apps/details?id=com.gtca.qr',
    img: 'assets/qrlogger.png',
    tags: ['mobile', 'android', 'kotlin', 'qr', 'camera', 'scanning', 'attendance', 'cloud', 'realtime']
  },
  {
    title: 'Library Tracker',
    short: 'A production-grade library management system with a full desktop GUI, offline SQLite storage, cloud-sync support, and book issue/return automation.',
    tech: ['Python', 'PyQt6', 'SQLite', 'Google Sheets API', 'Google Drive API', 'OAuth2', 'Automation', 'CSV Export', 'Cloud Sync'],
    role: 'Developed the complete system including UI, local database engine, transaction workflows, cloud integration pipeline, and packaged Windows executable.',
    demo: 'https://sites.google.com/view/library-tracker/home',
    repo: 'https://github.com/Kinshukhh/library_tracker',
    img: 'assets/library.ico',
    tags: ['desktop', 'python', 'management', 'sqlite', 'cloud', 'automation', 'windows-app', 'database']
  },
  {
    title: 'DriveSync',
    short: 'A real-time desktop backup utility that monitors folders, detects file changes instantly, and syncs updates with reliable event-based tracking.',
    tech: ['Python', 'Watchdog', 'PyQt', 'File System Events', 'Automation', 'Threading', 'Backup Logic'],
    role: 'Engineered the sync engine, event-detection layer, multi-folder monitoring, conflict handling, and intuitive PyQt user interface.',
    repo: 'https://github.com/Kinshukhh/drivesync',
    img: 'assets/drivesync.png',
    tags: ['desktop', 'backup', 'python', 'automation', 'filesystem', 'sync', 'event-driven', 'tooling']
  },
  {
    title: 'gestro.dev',
    short: 'Product landing website for the Gestro platform — showcasing the app, downloads, and documentation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Responsive Design'],
    role: 'Designed and built the complete product landing website.',
    demo: 'https://www.gestro.dev/',
    img: 'assets/gestrodev.png',
    tags: ['web', 'landing', 'frontend', 'website']
  },
  {
    title: 'Naai',
    short: 'A salon & stylist discovery app that connects customers with expert stylists at top salons nearby. Book appointments, find the right stylist, and manage your beauty routine — all in one place.',
    tech: ['React Native', 'Firebase', 'Firestore', 'Firebase Auth', 'Push Notifications', 'Google Maps API', 'Real-time Sync'],
    role: 'Built the full customer-facing mobile app including stylist discovery, booking flow, real-time appointment management, and Firebase backend integration.',
    demo: 'https://naai.co.in',
    img: 'https://naai.co.in/redicon.png',
    tags: ['mobile', 'react-native', 'firebase', 'booking', 'beauty', 'salon', 'android', 'ios', 'realtime']
  },
  {
    title: 'Naai Partners',
    short: 'A dedicated mobile app for salon owners to manage their presence on the Naai platform — accept bookings, manage services and pricing, track earnings, and communicate with customers in real time.',
    tech: ['React Native', 'Firebase', 'Firestore', 'Firebase Auth', 'Push Notifications', 'Real-time Dashboard', 'Cloud Functions'],
    role: 'Engineered the salon partner app including booking management dashboard, service catalogue editor, earnings tracking, QR verification, and automated customer reminders.',
    demo: 'https://partners.naai.co.in',
    img: 'https://naai.co.in/partner-logo.png',
    tags: ['mobile', 'react-native', 'firebase', 'dashboard', 'beauty', 'salon', 'android', 'ios', 'management']
  },
  {
    title: 'naai.co.in',
    short: 'Customer-facing website for the Naai platform — find and book expert stylists at top salons, explore services, and get early access to new launches across India.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Responsive Design', 'SEO'],
    role: 'Designed and built the customer website with Firebase backend, service discovery, and booking entry point.',
    demo: 'https://naai.co.in',
    img: 'https://naai.co.in/redicon.png',
    tags: ['web', 'frontend', 'firebase', 'booking', 'beauty', 'salon', 'landing', 'website']
  },
  {
    title: 'partners.naai.co.in',
    short: 'The salon partner onboarding and information website for Naai — guides salon owners through joining the platform, setting up their profile, managing bookings, and growing their business.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Responsive Design', 'SEO'],
    role: 'Built the partner-facing website covering the full onboarding journey, feature showcase, FAQ, and live registration flow connected to Firebase.',
    demo: 'https://partners.naai.co.in',
    img: 'https://naai.co.in/partner-logo.png',
    tags: ['web', 'frontend', 'firebase', 'salon', 'beauty', 'partner', 'landing', 'website']
  }
];

/* ─── ELEMENT REFS ──────────────────────────────────────────── */
const tagFilter    = document.getElementById('tag-filter');
const projectsList = document.getElementById('projects-list');
const searchInput  = document.getElementById('search');
const clearBtn     = document.getElementById('clear-search');
const themeToggle  = document.getElementById('theme-toggle');

/* ─── HELPERS ───────────────────────────────────────────────── */
function esc(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function debounce(fn, ms = 150) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

/* ─── TAG FILTER POPULATION ─────────────────────────────────── */
function populateTagFilter() {
  const tags = [...new Set(PROJECTS.flatMap(p => p.tags || []))].sort();
  tags.forEach(tag => {
    const opt = document.createElement('option');
    opt.value = tag;
    opt.textContent = tag;
    tagFilter.appendChild(opt);
  });
}

/* ─── FILTER LOGIC ───────────────────────────────────────────── */
function projectMatches(p, query, tag) {
  const q = query.trim().toLowerCase();
  const text = [p.title, p.short, ...(p.tech || []), ...(p.tags || [])].join(' ').toLowerCase();
  const tagOk = tag === 'all' || (p.tags && p.tags.includes(tag));
  return tagOk && (!q || text.includes(q));
}

/* ─── RENDER ─────────────────────────────────────────────────── */
function renderProjects(query = '', tag = 'all') {
  projectsList.innerHTML = '';

  const matches = PROJECTS.filter(p => projectMatches(p, query, tag));

  if (matches.length === 0) {
    const li = document.createElement('li');
    li.className = 'no-results';
    li.textContent = 'No projects match your search.';
    projectsList.appendChild(li);
    return;
  }

  matches.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'project-card';
    li.style.animationDelay = `${i * 0.05}s`;

    // Only show first 4 tags in pills to keep cards clean
    const visibleTags = (p.tags || []).slice(0, 4);
    const extraTags   = (p.tags || []).length - visibleTags.length;

    li.innerHTML = `
      <article tabindex="0" aria-labelledby="proj-${i}">
        <div class="project-media">
          <img
            src="${esc(p.img)}"
            alt="${esc(p.title)} screenshot"
            loading="lazy"
            onerror="this.style.display='none';this.parentElement.style.background='var(--surface2)'"
          />
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 id="proj-${i}">${esc(p.title)}</h3>
          </div>
          <p class="project-role">${esc(p.role)}</p>
          <p class="project-desc">${esc(p.short)}</p>
          <div class="project-tags">
            ${visibleTags.map(t => `<span class="tag-pill">${esc(t)}</span>`).join('')}
            ${extraTags > 0 ? `<span class="tag-pill">+${extraTags}</span>` : ''}
          </div>
          <div class="tech-list">
            ${(p.tech || []).map(t => `<span class="tech">${esc(t)}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          <div class="card-links" role="group" aria-label="Project links for ${esc(p.title)}">
            ${p.repo
              ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                   Repo
                 </a>`
              : `<a aria-disabled="true" style="cursor:default">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                   Repo
                 </a>`
            }
            ${p.demo
              ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                   Live
                 </a>`
              : `<a aria-disabled="true" style="cursor:default">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="opacity:.4"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                   Live
                 </a>`
            }
          </div>
        </div>
      </article>
    `;
    projectsList.appendChild(li);
  });
}

/* ─── SEARCH EVENTS ──────────────────────────────────────────── */
const doSearch = debounce(() => {
  const q = searchInput.value;
  clearBtn.classList.toggle('visible', q.length > 0);
  renderProjects(q, tagFilter.value);
}, 150);

searchInput.addEventListener('input', doSearch);

tagFilter.addEventListener('change', () => {
  renderProjects(searchInput.value, tagFilter.value);
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.classList.remove('visible');
  searchInput.focus();
  renderProjects('', tagFilter.value);
});

/* ─── THEME ──────────────────────────────────────────────────── */
function setTheme(dark) {
  document.documentElement.classList.toggle('dark', !!dark);
  themeToggle.setAttribute('aria-pressed', String(!!dark));
  themeToggle.querySelector('.theme-icon').textContent = dark ? '☀️' : '🌙';
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
}

themeToggle.addEventListener('click', () => {
  setTheme(!document.documentElement.classList.contains('dark'));
});

// Persist or follow system preference
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved === 'dark');
  } else {
    setTheme(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
  }
})();

/* ─── HAMBURGER (mobile nav) ─────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });
}

/* ─── INIT ───────────────────────────────────────────────────── */
populateTagFilter();
renderProjects();
document.getElementById('year').textContent = new Date().getFullYear();
