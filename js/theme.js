/* ═══════════════════════════════════════
   SHIPWRECKS — Theme & Text Size
   ═══════════════════════════════════════ */

function toggleTheme() {
  const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem('sw-theme', t); } catch(e) {}
}

function setSize(s) {
  document.documentElement.dataset.textSize = s;
  document.querySelectorAll('.ts-opt').forEach(b =>
    b.classList.toggle('active', b.textContent.toLowerCase() === s)
  );
  const dd = document.getElementById('tsd');
  if (dd) dd.classList.remove('open');
  try { localStorage.setItem('sw-size', s); } catch(e) {}
}

/* Restore on load */
(function() {
  try {
    const t = localStorage.getItem('sw-theme');
    if (t) document.documentElement.dataset.theme = t;
    const s = localStorage.getItem('sw-size');
    if (s) setSize(s);
  } catch(e) {}
})();

/* Close text size dropdown on outside click */
document.addEventListener('click', e => {
  if (!e.target.closest('.text-size-toggle')) {
    const dd = document.getElementById('tsd');
    if (dd) dd.classList.remove('open');
  }
});
