/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest';

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

  afterEach(() => {
    delete document.__hasRun;
    document.body.querySelectorAll('script').forEach(s => s.remove());
    vi.restoreAllMocks();
  });

  it('runs deferred scripts when the readystate becomes interactive', async () => {
    const script = document.createElement('script');
    script.setAttribute('defer', true);
    embedScript(script, 'script.js', 'document.__hasRun = true;');

    // By default, the jsdom environment is "complete", so we need to mock it to
    // test the defer behavior.
    vi.spyOn(document, 'readyState', 'get').mockReturnValueOnce('interactive');
    // We have to wait for something to happen inside the script. Since we
    // dispatch this event, that is something we can wait for.
    const scriptRan = new Promise(resolve =>
      document.addEventListener('readystatechange', resolve, {
        once: true
      })
    );

    document.body.appendChild(script);
    document.dispatchEvent(new Event('readystatechange'));

    await scriptRan;
    expect(document.__hasRun).toBe(true);
  });

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
