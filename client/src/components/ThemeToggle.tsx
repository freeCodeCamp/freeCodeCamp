/*
Theme toggle (React + TypeScript)

Files included in this single file for convenience:
  1) ThemeToggle React component (default export)
  2) CSS (paste into your global stylesheet e.g. src/index.css or App.css)
  3) Optional small init snippet (paste into src/index.tsx or at app bootstrap)

How to use:
  - Add the CSS block (below) to your global stylesheet.
  - Copy ThemeToggle component into e.g. src/components/ThemeToggle.tsx
  - Import and put <ThemeToggle /> somewhere in your header/navbar.
  - Add the init snippet to your app entry (src/index.tsx) once.

Behavior:
  - Honors user's system preference on first load (prefers-color-scheme).
  - Persists choice to localStorage under key 'theme' ('light' | 'dark').
  - Applies theme using data-theme attribute on <html> for easy targeting.
  - Adds an accessible toggle button (aria-pressed, visually-hidden label).
  - Smooth transitions and CSS variables for easy customization.
*/

import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

// Utility: apply theme to document.documentElement
function applyTheme(theme: Theme) {
  try {
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    // ignore in SSR environments
  }
}

// Read persisted or system preference
function getInitialTheme(): Theme {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return 'light';
  }
  const persisted = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (persisted === 'light' || persisted === 'dark') return persisted;

  // fallback to system preference
  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if (mql && mql.matches) return 'dark';
  return 'light';
}

export default function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  // Apply theme on mount + whenever changes
  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  // Keep in sync if user changes system preference while app is open
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      // only change theme automatically if user hasn't persisted a choice
      const persisted = window.localStorage.getItem(STORAGE_KEY);
      if (persisted) return;
      setTheme(e.matches ? 'dark' : 'light');
    };

    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (mql && mql.addEventListener) {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    } else if (mql && (mql as any).addListener) {
      // older browsers
      (mql as any).addListener(handler);
      return () => (mql as any).removeListener(handler);
    }
  }, []);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed={theme === 'dark'}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        borderRadius: 8,
        border: '1px solid var(--muted-border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        cursor: 'pointer',
      }}
    >
      {/* Simple icon: sun / moon (SVG) */}
      {theme === 'light' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L3.51 3.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.49 20.49l-1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07L3.51 20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}

      <span style={{ fontSize: 13 }}>{theme === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  );
}

/*
CSS to paste into global stylesheet (e.g. src/index.css)

The CSS uses CSS variables and the [data-theme="dark"] attribute on <html>.
Adjust variables to match your design tokens.
*/

/*
:root {
  --bg: #ffffff;
  --surface: #ffffff;
  --text: #0f172a;      // primary text
  --muted-text: #475569; // secondary text
  --muted-border: #e2e8f0;
  --accent: #2563eb;
  --transition: 200ms ease;
}

html[data-theme="dark"] {
  --bg: #0b1220;
  --surface: #071022;
  --text: #e6eef8;
  --muted-text: #9fb0cc;
  --muted-border: #1f2a3a;
  --accent: #3b82f6;
}

/* apply variables */
html, body, #root {
  background: var(--bg);
  color: var(--text);
  transition: background var(--transition), color var(--transition);
}

/* example for buttons/inputs */
button, input, select, textarea {
  transition: background var(--transition), color var(--transition), border-color var(--transition);
}
*/


Optional bootstrap snippet (place once in src/index.tsx or at app start)
Purpose: avoid flash of wrong theme on first paint by setting attribute before React hydrates.

// --- PASTE at top of src/index.tsx BEFORE any imports that might render ---
(function() {
  try {
    const key = 'theme';
    const persisted = window.localStorage.getItem(key);
    if (persisted === 'light' || persisted === 'dark') {
      document.documentElement.setAttribute('data-theme', persisted);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  } catch (e) { /* ignore */ }
})();
// --- end snippet ---
*/
