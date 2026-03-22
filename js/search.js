/* ═══════════════════════════════════════
   SHIPWRECKS — Search (Cmd+K overlay)
   Reads from registry.js (PAGES, MISTAKES_INDEX)
   ═══════════════════════════════════════ */

let _searchFocusIdx = -1;

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  const inp = document.getElementById('searchInput');
  inp.value = '';
  inp.focus();
  renderSearch('');
  _searchFocusIdx = -1;
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
}

/* Keyboard: Cmd+K to open, Esc to close, arrows + enter to navigate */
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
    return;
  }
  if (e.key === 'Escape' && document.getElementById('searchOverlay').classList.contains('open')) {
    closeSearch();
    return;
  }
  if (!document.getElementById('searchOverlay').classList.contains('open')) return;

  const items = document.querySelectorAll('.sr-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _searchFocusIdx = Math.min(_searchFocusIdx + 1, items.length - 1);
    _updateSearchFocus(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _searchFocusIdx = Math.max(_searchFocusIdx - 1, 0);
    _updateSearchFocus(items);
  } else if (e.key === 'Enter' && _searchFocusIdx >= 0 && items[_searchFocusIdx]) {
    items[_searchFocusIdx].click();
  }
});

function _updateSearchFocus(items) {
  items.forEach((it, i) => it.classList.toggle('focused', i === _searchFocusIdx));
  if (items[_searchFocusIdx]) items[_searchFocusIdx].scrollIntoView({ block: 'nearest' });
}

/* Input listener — bind after DOM is ready (scripts at bottom of body) */
const _searchInp = document.getElementById('searchInput');
if (_searchInp) _searchInp.addEventListener('input', e => renderSearch(e.target.value));

function renderSearch(q) {
  const r = document.getElementById('searchResults');
  if (!r) return;
  q = q.toLowerCase().trim();

  if (!q) {
    r.innerHTML = '<div class="search-empty">Type to search pages, mistakes...</div>';
    _searchFocusIdx = -1;
    return;
  }

  /* Search pages from registry */
  const pageMatches = PAGES.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q)
  );

  /* Search mistakes from registry */
  const mistakeMatches = MISTAKES_INDEX.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.cat.toLowerCase().includes(q)
  );

  if (!pageMatches.length && !mistakeMatches.length) {
    r.innerHTML = '<div class="search-empty">No results found</div>';
    _searchFocusIdx = -1;
    return;
  }

  let h = '';

  if (pageMatches.length) {
    h += '<div class="sr-group">Pages</div>';
    pageMatches.forEach(p => {
      const tag = TAG_TYPES[p.type] || {};
      const colorCls = tag.color || 'muted';
      h += `<a class="sr-item" href="${p.url}">
        <div class="sr-icon ${colorCls}">${p.icon}</div>
        <div class="sr-meta">
          <div class="sr-title">${_hl(p.title, q)}</div>
          <div class="sr-sub">${tag.label || p.type} · ${p.desc}</div>
        </div>
        <span class="sr-arrow">→</span>
      </a>`;
    });
  }

  if (mistakeMatches.length) {
    h += '<div class="sr-group">Mistakes</div>';
    mistakeMatches.forEach(m => {
      const colorCls = CAT_COLORS[m.cat] || 'muted';
      const icon = CAT_ICONS[m.cat] || '📋';
      h += `<a class="sr-item" href="${m.url}">
        <div class="sr-icon ${colorCls}">${icon}</div>
        <div class="sr-meta">
          <div class="sr-title">${_hl(m.title, q)}</div>
          <div class="sr-sub">${m.cat}</div>
        </div>
        <span class="sr-arrow">→</span>
      </a>`;
    });
  }

  r.innerHTML = h;
  _searchFocusIdx = -1;
}

/* Highlight matching text */
function _hl(text, q) {
  if (!q) return text;
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<strong style="color:var(--text-primary)">$1</strong>');
}
