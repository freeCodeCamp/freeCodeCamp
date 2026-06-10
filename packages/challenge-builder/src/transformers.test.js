/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  embedFilesInHtml,
  embedScript,
  getLocalSourceWarnings
} from './transformers';

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

describe('getLocalSourceWarnings', () => {
  it('warns when unexpected local style and script files are sourced', () => {
    const warnings = getLocalSourceWarnings([
      {
        fileKey: 'indexhtml',
        contents:
          '<!doctype html><html><head><link rel="stylesheet" href="style.css"><script src="./scripts.js"></script></head><body></body></html>'
      },
      {
        fileKey: 'stylescss',
        contents: 'body { color: red; }'
      },
      {
        fileKey: 'scriptjs',
        contents: 'console.log("hi");'
      }
    ]);

    expect(warnings).toEqual(
      expect.arrayContaining([
        {
          type: 'unavailable-local-resource',
          source: 'style.css',
          resourceType: 'stylesheet',
          allowedSources: ['styles.css']
        },
        {
          type: 'unavailable-local-resource',
          source: './scripts.js',
          resourceType: 'script',
          allowedSources: ['script.js']
        }
      ])
    );
  });

  it('does not warn for expected local files or external urls', () => {
    const warnings = getLocalSourceWarnings([
      {
        fileKey: 'indexhtml',
        contents:
          '<!doctype html><html><head><link rel="stylesheet" href="./styles.css?v=1"><script src="/script.js#v=2"></script><script src="https://cdn.example.com/script.js"></script></head><body></body></html>'
      },
      {
        fileKey: 'stylescss',
        contents: 'body { color: red; }'
      },
      {
        fileKey: 'scriptjs',
        contents: 'console.log("hi");'
      }
    ]);

    expect(warnings).toEqual([]);
  });

  it('does not warn for local script sources when script.js is not part of the challenge', () => {
    const warnings = getLocalSourceWarnings([
      {
        fileKey: 'indexhtml',
        contents:
          '<!doctype html><html><head><script src="custom.js"></script></head><body></body></html>'
      },
      {
        fileKey: 'stylescss',
        contents: 'body { color: red; }'
      }
    ]);

    expect(warnings).toEqual([]);
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
