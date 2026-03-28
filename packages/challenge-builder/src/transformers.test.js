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

  const warningTestCases = [
    {
      name: 'should inject a warning for incorrect css file links',
      files: [
        {
          fileKey: 'indexhtml',
          contents:
            '<!DOCTYPE html><html><head><link href="style.css" rel="stylesheet"></head><body></body></html>'
        }
      ],
      expected:
        'console.warn("You have tried to source style.css, but that does not exist. The only file that can be sourced is styles.css.");'
    },
    {
      name: 'should inject a warning for incorrect js file scripts',
      files: [
        {
          fileKey: 'indexhtml',
          contents:
            '<html><head></head><body><script src="scripts.js"></script></body></html>'
        }
      ],
      expected:
        'console.warn("You have tried to source scripts.js, but that does not exist. The only file that can be sourced is script.js.");'
    },
    {
      name: 'should not inject a warning for correct file links',
      files: [
        {
          fileKey: 'indexhtml',
          contents:
            '<html><head><link href="styles.css" rel="stylesheet"></head><body><script src="script.js"></script></body></html>'
        },
        { fileKey: 'stylescss', contents: 'body { color: red; }' },
        { fileKey: 'scriptjs', contents: 'console.log("hello");' }
      ],
      notExpected: 'console.warn'
    },
    {
      name: 'should not inject a warning for external links',
      files: [
        {
          fileKey: 'indexhtml',
          contents:
            '<html><head><link href="https://example.com/styles.css"></head><body><script src="https://example.com/script.js"></script></body></html>'
        }
      ],
      notExpected: 'console.warn'
    }
  ];

  it.each(warningTestCases)(
    '$name',
    async ({ files, expected, notExpected }) => {
      const result = await embedFilesInHtml(files);
      if (expected) expect(result).toContain(expected);
      if (notExpected) expect(result).not.toContain(notExpected);
    }
  );
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
