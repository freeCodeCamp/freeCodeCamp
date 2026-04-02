/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { createPoly } from '@freecodecamp/shared/utils/polyvinyl';

import { embedFilesInHtml, embedScript, getTransformers } from './transformers';

const parseHtml = html => new DOMParser().parseFromString(html, 'text/html');
const defaultLoopProtectOptions = {
  preview: false,
  disableLoopProtectTests: false,
  disableLoopProtectPreview: false
};

const applyTransformers = challengeFile => {
  const transformers = getTransformers(defaultLoopProtectOptions);
  return transformers.reduce(
    (fileP, transformer) => fileP.then(file => transformer(file)),
    Promise.resolve(challengeFile)
  );
};

describe('embedFilesInHtml', () => {
  it('does not transpile const declarations to var', async () => {
    const file = createPoly({
      name: 'script',
      ext: 'js',
      contents:
        'const location = []; const copiedLocation = { ...window.location };',
      head: '',
      tail: ''
    });

    const transformed = await applyTransformers(file);

    expect(transformed.contents).toMatch(/\bconst\s+location\b/);
    expect(transformed.contents).not.toMatch(/\bvar\s+location\b/);
    expect(transformed.contents).toMatch(/\.\.\.\s*window\.location/);
  });

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
