/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';

import { embedFilesInHtml } from './transformers';

const parseHtml = html => new DOMParser().parseFromString(html, 'text/html');

describe('embedFilesInHtml', () => {
  it('moves deferred script.js to the end of body when embedding', async () => {
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
    expect(script?.textContent).toContain('window.app');
    expect(script?.parentElement?.tagName).toBe('BODY');
    expect(doc.body.lastElementChild).toBe(script);
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
    expect(script?.parentElement?.tagName).toBe('HEAD');
    expect(doc.body.lastElementChild?.id).toBe('app');
  });
});
