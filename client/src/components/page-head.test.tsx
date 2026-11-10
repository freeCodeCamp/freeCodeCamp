import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

import PageHead from './page-head';

vi.mock('react-redux', () => ({
  useSelector: () => 'dark'
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'es' }
  })
}));

describe('PageHead', () => {
  it('renders the translated language, current theme and shared metadata', () => {
    const view = renderToStaticMarkup(<PageHead title='A challenge' />);
    const document = new DOMParser().parseFromString(view, 'text/html');

    expect(document.documentElement.lang).toBe('es');
    expect(document.body.className).toBe('dark-palette');
    expect(document.title).toBe('A challenge');
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content')
    ).toBe('metaTags:description');
    expect(
      document.querySelectorAll('link[rel="preload"][as="font"]')
    ).toHaveLength(6);
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
  });

  it('only excludes pages from indexing when requested', () => {
    const view = renderToStaticMarkup(<PageHead noindex />);
    const document = new DOMParser().parseFromString(view, 'text/html');

    expect(
      document.querySelector('meta[name="robots"]')?.getAttribute('content')
    ).toBe('noindex');
  });

  it('keeps certification pages light without the default layout metadata', () => {
    const view = renderToStaticMarkup(<PageHead certification />);
    const document = new DOMParser().parseFromString(view, 'text/html');

    expect(document.body.className).toBe('light-palette');
    expect(document.querySelector('meta[name="description"]')).toBeNull();
    expect(document.querySelector('link[rel="preload"]')).toBeNull();
  });
});
