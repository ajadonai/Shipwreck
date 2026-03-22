/* ═══════════════════════════════════════
   SHIPWRECKS — Shared Component Rendering
   Injects nav, search overlay, and footer
   into any page that includes this file.
   ═══════════════════════════════════════ */

const BRAND_SVG = `<svg class="nav-logo-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="12" fill="#1a1a1a"/><path d="M32 12 L56 52 L8 52 Z" fill="none" stroke="#ffb347" stroke-width="3" stroke-linejoin="round"/><text x="32" y="44" fill="#ffb347" font-family="ui-monospace,monospace" font-size="14" font-weight="600" text-anchor="middle">&lt;/&gt;</text></svg>`;

const X_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

/* ═══ RENDER NAV ═══ */
function renderNav() {
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;

  navEl.innerHTML = `
    <a class="nav-logo" href="/">
      ${BRAND_SVG}
      <div class="nav-logo-text">shipwrecks</div>
    </a>
    <div class="nav-right">
      <button class="nav-btn" onclick="openSearch()" aria-label="Search" title="Search">
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
      </button>
      <div class="text-size-toggle">
        <button class="nav-btn text-sz" onclick="document.getElementById('tsd').classList.toggle('open')" aria-label="Text size">Aa</button>
        <div class="text-size-dropdown" id="tsd">
          <button class="ts-opt" onclick="setSize('small')">Small</button>
          <button class="ts-opt active" onclick="setSize('medium')">Medium</button>
          <button class="ts-opt" onclick="setSize('large')">Large</button>
        </div>
      </div>
      <button class="nav-btn theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
        <svg class="icon-sun" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>
        <svg class="icon-moon" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
      </button>
    </div>
  `;
}

/* ═══ RENDER SEARCH OVERLAY ═══ */
function renderSearchOverlay() {
  const el = document.getElementById('search-overlay-mount');
  if (!el) return;

  el.innerHTML = `
    <div class="search-overlay" id="searchOverlay" onclick="if(event.target===this)closeSearch()">
      <div class="search-modal">
        <div class="search-input-wrap">
          <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
          <input class="search-input" id="searchInput" type="text" placeholder="Search mistakes, pages..." autocomplete="off">
          <span class="search-esc" onclick="closeSearch()">esc</span>
        </div>
        <div class="search-results" id="searchResults"></div>
      </div>
    </div>
  `;
}

/* ═══ RENDER FOOTER ═══ */
/* mode: 'full' includes action buttons (for content pages), 'minimal' is author only (homepage) */
function renderFooter(mode) {
  const el = document.getElementById('site-footer');
  if (!el) return;

  const actionsHtml = mode === 'full' ? `
    <div class="footer-actions">
      <button class="footer-btn" onclick="navigator.clipboard.writeText(window.location.href).then(()=>{const b=event.target.closest('.footer-btn');b.innerHTML='<svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><polyline points=\\'20 6 9 17 4 12\\'></polyline></svg> Copied!';setTimeout(()=>location.reload(),2000)})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        Copy link
      </button>
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title + ' — ' + SITE.url)}" class="footer-btn" target="_blank" rel="noopener">
        ${X_SVG}
        Post on X
      </a>
    </div>
    <div class="footer-divider"></div>
  ` : '';

  el.innerHTML = `
    <div class="footer-accent"></div>
    <div class="footer-inner">
      ${actionsHtml}
      <div class="footer-bottom">
        <img src="${SITE.author.avatar}" alt="${SITE.author.name}" class="footer-avatar" onerror="this.style.display='none'">
        <div class="footer-author-info">
          <span class="footer-author-name">${SITE.author.name}</span>
          <p class="footer-author-bio">${SITE.author.bio}</p>
        </div>
        <a href="${SITE.author.twitter}" class="footer-follow" target="_blank" rel="noopener noreferrer">
          ${X_SVG}
          Follow
        </a>
      </div>
    </div>
  `;
}

/* ═══ INIT ALL SHARED COMPONENTS ═══ */
/* Called immediately — scripts are loaded at bottom of body, DOM is ready */
renderNav();
renderSearchOverlay();
