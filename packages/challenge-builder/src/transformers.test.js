/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { embedFilesInHtml } from './transformers';

const parseHtml = html => new DOMParser().parseFromString(html, 'text/html');

describe('embedFilesInHtml', () => {
  const createObjectURL = vi.fn();
  let oldCreateObjectURL;
  let oldRevokeObjectURL;

  beforeEach(() => {
    createObjectURL.mockReset().mockReturnValue('blob:script.js');
    oldCreateObjectURL = URL.createObjectURL;
    oldRevokeObjectURL = URL.revokeObjectURL;

    URL.createObjectURL = createObjectURL;
    URL.revokeObjectURL = vi.fn();
  });

  afterEach(() => {
    URL.createObjectURL = oldCreateObjectURL;
    URL.revokeObjectURL = oldRevokeObjectURL;
  });

  it('keeps deferred script.js in place and embeds it as a blob URL', async () => {
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
    expect(script?.getAttribute('src')).toBe('blob:script.js');
    expect(script?.textContent).toBe('');
    expect(script?.parentElement?.tagName).toBe('HEAD');
    expect(doc.body.lastElementChild?.id).toBe('app');
    expect(createObjectURL).toHaveBeenCalledTimes(1);
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
    expect(createObjectURL).not.toHaveBeenCalled();
  });
});
