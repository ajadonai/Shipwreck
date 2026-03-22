/* ═══════════════════════════════════════
   SHIPWRECKS — Content Registry
   Single source of truth for all pages.
   Adding a new page = adding one entry.
   ═══════════════════════════════════════ */

const SITE = {
  name: 'Shipwrecks',
  url: 'https://shipwrecksbyai.vercel.app',
  author: {
    name: 'TRIP',
    handle: '@WLXAJ',
    bio: 'Designer & developer building at the intersection of fintech, crypto, and taste. Currently shipping products that don\'t make the mistakes above.',
    avatar: '/avatar.jpg',
    twitter: 'https://twitter.com/WLXAJ'
  }
};

/* Tag types with colors */
const TAG_TYPES = {
  tool:      { label: 'Tool',      icon: '🔧', color: 'amber'  },
  read:      { label: 'Read',      icon: '📖', color: 'blue'   },
  community: { label: 'Community', icon: '💬', color: 'green'  },
  guide:     { label: 'Guide',     icon: '📚', color: 'purple' },
};

/* Content pages — order matters for pagination */
const PAGES = [
  {
    id: 'mistakes',
    title: '37 Mistakes',
    desc: 'Security, performance, code quality, DevOps, and UX — the full production checklist.',
    type: 'read',
    url: '/mistakes.html',
    status: 'live',
    icon: '📋',
    added: '2025-06-01'
  },
  {
    id: 'score',
    title: 'Shipwreck Score',
    desc: 'Quiz your codebase. Get scored, get roasted, share the wreckage.',
    type: 'tool',
    url: '/score.html',
    status: 'live',
    icon: '🔥',
    added: '2025-06-15'
  },
  {
    id: 'resources',
    title: 'Resources',
    desc: 'How to actually fix each mistake. Guides, tools, and code snippets.',
    type: 'guide',
    url: '#',
    status: 'soon',
    icon: '🛠️',
    added: '2025-07-01'
  },
  {
    id: 'community',
    title: 'Community',
    desc: 'Submit a mistake. Vote on what\'s worst. Share your horror stories.',
    type: 'community',
    url: '#',
    status: 'soon',
    icon: '💬',
    added: '2025-07-01'
  }
];

/* Search index — mistakes data for the search overlay */
const MISTAKES_INDEX = [
  { id: 1,  title: 'Auth tokens in localStorage', cat: 'Security', url: '/mistakes.html#mistake-1' },
  { id: 2,  title: 'No input sanitisation', cat: 'Security', url: '/mistakes.html#mistake-2' },
  { id: 3,  title: 'Hardcoded API keys', cat: 'Security', url: '/mistakes.html#mistake-3' },
  { id: 4,  title: 'No Stripe webhook verification', cat: 'Security', url: '/mistakes.html#mistake-4' },
  { id: 5,  title: 'Sessions that never expire', cat: 'Security', url: '/mistakes.html#mistake-5' },
  { id: 6,  title: 'Password reset links don\'t expire', cat: 'Security', url: '/mistakes.html#mistake-6' },
  { id: 7,  title: 'No CORS policy', cat: 'Security', url: '/mistakes.html#mistake-7' },
  { id: 8,  title: 'Admin routes with no role checks', cat: 'Security', url: '/mistakes.html#mistake-8' },
  { id: 9,  title: 'No CSRF protection', cat: 'Security', url: '/mistakes.html#mistake-9' },
  { id: 10, title: 'Secrets committed to git', cat: 'Security', url: '/mistakes.html#mistake-10' },
  { id: 11, title: 'No Content Security Policy', cat: 'Security', url: '/mistakes.html#mistake-11' },
  { id: 12, title: 'No rate limiting', cat: 'Infra', url: '/mistakes.html#mistake-12' },
  { id: 13, title: 'No database connection pooling', cat: 'Infra', url: '/mistakes.html#mistake-13' },
  { id: 14, title: 'Images uploaded to server', cat: 'Infra', url: '/mistakes.html#mistake-14' },
  { id: 15, title: 'Emails sent synchronously', cat: 'Infra', url: '/mistakes.html#mistake-15' },
  { id: 16, title: 'No health check endpoint', cat: 'Infra', url: '/mistakes.html#mistake-16' },
  { id: 17, title: 'No logging in production', cat: 'Infra', url: '/mistakes.html#mistake-17' },
  { id: 18, title: 'No env variable validation', cat: 'Infra', url: '/mistakes.html#mistake-18' },
  { id: 19, title: 'No graceful shutdown', cat: 'Infra', url: '/mistakes.html#mistake-19' },
  { id: 20, title: 'No retry logic with backoff', cat: 'Infra', url: '/mistakes.html#mistake-20' },
  { id: 21, title: 'No request timeout', cat: 'Infra', url: '/mistakes.html#mistake-21' },
  { id: 22, title: 'No database indexing', cat: 'Data', url: '/mistakes.html#mistake-22' },
  { id: 23, title: 'No database migrations', cat: 'Data', url: '/mistakes.html#mistake-23' },
  { id: 24, title: 'No soft deletes', cat: 'Data', url: '/mistakes.html#mistake-24' },
  { id: 25, title: 'No pagination on queries', cat: 'Data', url: '/mistakes.html#mistake-25' },
  { id: 26, title: 'No database backups', cat: 'Data', url: '/mistakes.html#mistake-26' },
  { id: 27, title: 'User data not encrypted at rest', cat: 'Data', url: '/mistakes.html#mistake-27' },
  { id: 28, title: 'No lint or format enforcement', cat: 'Code', url: '/mistakes.html#mistake-28' },
  { id: 29, title: 'No error boundaries', cat: 'Code', url: '/mistakes.html#mistake-29' },
  { id: 30, title: 'Console.log in production', cat: 'Code', url: '/mistakes.html#mistake-30' },
  { id: 31, title: 'No TypeScript or schema validation', cat: 'Code', url: '/mistakes.html#mistake-31' },
  { id: 32, title: 'No tests at all', cat: 'Code', url: '/mistakes.html#mistake-32' },
  { id: 33, title: 'Git history is one commit', cat: 'Code', url: '/mistakes.html#mistake-33' },
  { id: 34, title: 'Dead code everywhere', cat: 'Code', url: '/mistakes.html#mistake-34' },
  { id: 35, title: 'No loading or empty states', cat: 'UX', url: '/mistakes.html#mistake-35' },
  { id: 36, title: 'No mobile responsiveness', cat: 'UX', url: '/mistakes.html#mistake-36' },
  { id: 37, title: 'No error messages for users', cat: 'UX', url: '/mistakes.html#mistake-37' },
];

/* Category → color mapping for search icons */
const CAT_COLORS = {
  'Security': 'red',
  'Infra':    'amber',
  'Data':     'blue',
  'Code':     'green',
  'UX':       'purple'
};

/* Category → icon mapping */
const CAT_ICONS = {
  'Security': '🔒',
  'Infra':    '⚡',
  'Data':     '💾',
  'Code':     '🧹',
  'UX':       '🎨'
};
