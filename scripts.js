const PROJECTS = [
  {
    title: 'Gestro',
    short: 'A privacy-first, cross-device file transfer system that uses hand gestures and local Wi-Fi to securely send photos without internet dependency.',
    tech: [
      'Kotlin', 'Android', 'CameraX', 'Local Server', 'Socket Programming',
      'Python Backend', 'Networking', 'Concurrency'
    ],
    role: 'Designed and engineered the gesture-recognition workflow, local transfer engine, reliability logic, and multi-device communication system.',
    demo: 'https://play.google.com/store/apps/details?id=com.gtca.gestro',
    img: 'assets/gestro.png',
    tags: [
      'mobile', 'android', 'privacy', 'file-transfer', 'networking',
      'kotlin', 'gesture', 'realtime', 'communication'
    ]
  },

  {
    title: 'Library Tracker',
    short: 'A production-grade library management system with a full desktop GUI, offline SQLite storage, cloud-sync support, and book issue/return automation.',
    tech: [
      'Python', 'PyQt6', 'SQLite', 'Google Sheets API', 'Google Drive API',
      'OAuth2', 'Automation', 'CSV Export', 'Cloud Sync'
    ],
    role: 'Developed the complete system including UI, local database engine, transaction workflows, cloud integration pipeline, and packaged Windows executable.',
    demo: 'https://sites.google.com/view/library-tracker/home',
    repo: 'https://github.com/Kinshukhh/library_tracker',
    img: 'assets/library.ico',
    tags: [
      'desktop', 'python', 'management', 'sqlite', 'cloud',
      'automation', 'windows-app', 'database', 'admin-tool'
    ]
  },

  {
    title: 'DriveSync',
    short: 'A real-time desktop backup utility that monitors folders, detects file changes instantly, and syncs updates with reliable event-based tracking.',
    tech: [
      'Python', 'Watchdog', 'PyQt', 'File System Events', 'Automation',
      'Threading', 'Backup Logic'
    ],
    role: 'Engineered the sync engine, event-detection layer, multi-folder monitoring, conflict handling, and intuitive PyQt user interface.',
    repo: 'https://github.com/Kinshukhh/drivesync',
    img: 'assets/drivesync.png',
    tags: [
      'desktop', 'backup', 'python', 'automation', 'filesystem',
      'sync', 'event-driven', 'tooling'
    ]
  },

  {
    title: 'QRLogger',
    short: 'High-accuracy QR-based attendance tracking system used in real events with thousands of scans and instant cloud logging.',
    tech: [
      'Kotlin', 'CameraX', 'Google Sheets API', 'QR Scanning',
      'SQLite (optional)', 'Optimized Scanning Pipeline'
    ],
    role: 'Built the QR scan pipeline, real-time logging workflow, offline recovery logic, and integration with Google Sheets for automated reporting.',
    demo: 'https://play.google.com/store/apps/details?id=com.gtca.qr',
    img: 'assets/qrlogger.png',
    tags: [
      'mobile', 'android', 'kotlin', 'qr', 'camera', 'scanning',
      'attendance', 'cloud', 'realtime'
    ]
  },

  {
    title: 'GestroWin',
    short: 'A Windows desktop companion app that seamlessly receives, organizes, and previews files sent from the Gestro Android app.',
    tech: [
      'Python', 'PyQt', 'Local Server', 'Socket Receiver',
      'File Processing', 'Desktop UI'
    ],
    role: 'Built the receiver service, file-organization workflow, connection handling, and user-friendly interface for fast desktop import.',
    demo: 'https://www.gestro.dev/downloads',
    img: 'assets/gestrowin.png',
    tags: [
      'desktop', 'python', 'pyqt', 'file-transfer', 'receiver',
      'windows-app', 'networking'
    ]
  },

  {
    title: 'gestro.dev',
    short: 'Product landing website for the Gestro platform.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Responsive Design'],
    role: 'Designed the product landing website',
    demo: 'https://www.gestro.dev/',
    img: 'assets/gestrodev.png',
    tags: ['web', 'landing', 'frontend', 'website']
  }
];

const tagFilter = document.getElementById('tag-filter');
const projectsList = document.getElementById('projects-list');
const searchInput = document.getElementById('search');
const clearBtn = document.getElementById('clear-search');
const themeToggle = document.getElementById('theme-toggle');

function uniqueTags(data){
  const s = new Set();
  data.forEach(p => (p.tags || []).forEach(t => s.add(t)));
  return Array.from(s).sort();
}

function populateTagFilter(){
  const tags = uniqueTags(PROJECTS);
  tags.forEach(tag => {
    const opt = document.createElement('option');
    opt.value = tag;
    opt.textContent = tag;
    tagFilter.appendChild(opt);
  });
}

function projectMatches(p, q, tag){
  const qlow = (q || '').toLowerCase();
  const text = (p.title + ' ' + p.short + ' ' + (p.tech || []).join(' ')).toLowerCase();
  const tagMatch = (tag === 'all') || (p.tags && p.tags.includes(tag));
  return tagMatch && (!qlow || text.includes(qlow));
}

function escapeHtml(s = ''){
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderProjects(query = '', tag = 'all'){
  projectsList.innerHTML = '';
  projectsList.setAttribute('aria-busy', 'true');
  const matches = PROJECTS.filter(p => projectMatches(p, query, tag));

  if(matches.length === 0){
    const li = document.createElement('li');
    li.className = 'no-results';
    li.textContent = 'No projects found.';
    projectsList.appendChild(li);
    projectsList.setAttribute('aria-busy','false');
    return;
  }

  matches.forEach(p => {
    const li = document.createElement('li');
    li.className = 'project-card';
    li.innerHTML = `
      <article tabindex="0" aria-labelledby="t-${escapeHtml(p.title)}" class="project-article">
        <div class="project-media" role="img" aria-label="${escapeHtml(p.title)} screenshot">
          <img src="${p.img}" alt="${escapeHtml(p.title)} screenshot" loading="lazy" width="800" height="450" />
        </div>
        <div class="project-content">
          <div class="project-title">
            <h3 id="t-${escapeHtml(p.title)}">${escapeHtml(p.title)}</h3>
            <div class="role">${escapeHtml(p.role || '')}</div>
          </div>
          <p class="project-desc">${escapeHtml(p.short)}</p>

          <div class="meta-row">
            <div>
              <div class="project-tags">
                ${(p.tags || []).map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join('')}
              </div>
              <div class="tech-list" aria-hidden="true">
                ${(p.tech || []).map(t => `<span class="tech">${escapeHtml(t)}</span>`).join('')}
              </div>
            </div>

            <div class="card-links" role="group" aria-label="Project links">
              ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Repo</a>` : `<a aria-disabled="true">Repo</a>`}
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live</a>` : `<a aria-disabled="true">Live</a>`}
            </div>
          </div>
        </div>
      </article>
    `;
    projectsList.appendChild(li);
  });

  projectsList.setAttribute('aria-busy','false');
}

function debounce(fn, ms = 160){
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

const doSearch = debounce(() => {
  renderProjects(searchInput.value.trim(), tagFilter.value);
}, 140);

tagFilter.addEventListener('change', () => renderProjects(searchInput.value.trim(), tagFilter.value));
searchInput.addEventListener('input', doSearch);

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  renderProjects('', tagFilter.value);
});

function setTheme(dark){
  const root = document.documentElement;
  root.classList.toggle('dark', !!dark);
  themeToggle.setAttribute('aria-pressed', !!dark);
  const icon = themeToggle.querySelector('.icon');
  icon.textContent = dark ? '☀️' : '🌙';
  try{ localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(e){}
}

themeToggle.addEventListener('click', () => 
  setTheme(!document.documentElement.classList.contains('dark'))
);

(function initTheme(){
  let saved = null;
  try{ saved = localStorage.getItem('theme'); }catch(e){}
  if(saved === 'dark' || saved === 'light'){
    setTheme(saved === 'dark');
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark);
})();

populateTagFilter();
renderProjects();
document.getElementById('year').textContent = new Date().getFullYear();
