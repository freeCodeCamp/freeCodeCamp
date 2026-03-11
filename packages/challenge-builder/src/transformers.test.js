/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';

import { embedFilesInHtml, embedScript } from './transformers';

const parseHtml = html => new DOMParser().parseFromString(html, 'text/html');

describe('embedFilesInHtml', () => {
  it('keeps deferred script.js in place', async () => {
    const result = await embedFilesInHtml([
      {
        fileKey: 'indexhtml',
        contents:
          '<!doctype html><html><head><script defer src="script.js"></script></head><body><main id="app"></main></body></html>'
      },
      {
        fileKey: 'scriptjs',
        contents: 'window.app = document.querySelector("#app");'
      }
    ]);

    const doc = parseHtml(result);
    const script = doc.querySelector('script[data-src="script.js"]');

    expect(script).toBeTruthy();
    expect(script?.getAttribute('src')).toBeNull();
    expect(script?.textContent).toContain(
      'window.app = document.querySelector("#app");'
    );
    expect(script?.parentElement?.tagName).toBe('HEAD');
    expect(doc.body.lastElementChild?.id).toBe('app');
  });

  it('keeps non-deferred script.js in place when embedding', async () => {
    const result = await embedFilesInHtml([
      {
        fileKey: 'indexhtml',
        contents:
          '<!doctype html><html><head><script src="script.js"></script></head><body><main id="app"></main></body></html>'
      },
      {
        fileKey: 'scriptjs',
        contents: 'window.app = document.querySelector("#app");'
      }
    ]);

    const doc = parseHtml(result);
    const script = doc.querySelector('script[data-src="script.js"]');

    expect(script).toBeTruthy();
    expect(script?.getAttribute('src')).toBeNull();
    expect(script?.parentElement?.tagName).toBe('HEAD');
    expect(doc.body.lastElementChild?.id).toBe('app');
  });
});

describe('embedScript', () => {
  const rawScript = 'console.log("Hello, world!");';

  it('embeds script content into a script tag', () => {
    const script = document.createElement('script');
    embedScript(script, 'script.js', rawScript);

    expect(script.getAttribute('src')).toBeNull();
    expect(script.textContent).toEqual(rawScript);
  });

  it('embeds defered scripts content', () => {
    const script = document.createElement('script');
    script.setAttribute('defer', true);
    embedScript(script, 'script.js', rawScript);

    expect(script.getAttribute('defer')).toBe('true');
    expect(script.getAttribute('src')).toBeNull();
    expect(script.textContent).toContain(rawScript);
  });
});
