/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it, vi } from 'vitest';
import { createPoly } from '@freecodecamp/shared/utils/polyvinyl';

import {
  embedFilesInHtml,
  embedScript,
  getJSTranspiler,
  getLocalSourceWarnings,
  getMultifileJSXTransformers,
  getTransformers
} from './transformers';
import { compileTypeScriptCode } from './typescript-worker-handler';

vi.mock('./typescript-worker-handler', () => ({
  compileTypeScriptCode: vi.fn()
}));

const parseHtml = html => new DOMParser().parseFromString(html, 'text/html');

describe('getJSTranspiler', () => {
  // The first time a transpiler is called it loads Babel (a very slow process) which
  // is why we need a long timeout.
  it(
    'does not transpile const declarations to var',
    { timeout: 10_000 },
    async () => {
      const file = createPoly({
        name: 'script',
        ext: 'js',
        contents:
          'const location = []; const copiedLocation = { ...window.location };',
        head: '',
        tail: ''
      });
      const transpiled = await getJSTranspiler()(file);

      expect(transpiled.contents).toMatch(/\bconst\s+location\b/);
    }
  );
});

describe('Babel challenge transforms', () => {
  const transformFile = async (file, transformers = getTransformers()) => {
    for (const transform of transformers) {
      file = await transform(file);
    }
    return file;
  };

  const React = {
    createElement: (type, props, ...children) => ({ type, props, children })
  };

  afterEach(() => {
    vi.restoreAllMocks();
    compileTypeScriptCode.mockReset();
  });

  it('transpiles JavaScript exports into executable code', async () => {
    const file = createPoly({
      name: 'script',
      ext: 'js',
      contents: 'export const answer = ({ value: 21 })?.value * 2;'
    });
    const transformed = await transformFile(file);
    const exports = {};

    new Function('exports', transformed.contents)(exports);

    expect(exports.answer).toBe(42);
    expect(transformed.source).toBe(file.contents);
  });

  it('transpiles JSX with expressions and props', async () => {
    const transformed = await transformFile(
      createPoly({
        name: 'index',
        ext: 'jsx',
        contents: 'const view = <p title="greeting">Hello {2 + 2}</p>;'
      })
    );
    const view = new Function('React', `${transformed.contents}; return view;`)(
      React
    );

    expect(view).toEqual({
      type: 'p',
      props: { title: 'greeting' },
      children: ['Hello ', 4]
    });
  });

  it.each([
    ['preview', { preview: true }, true],
    ['tests', { preview: false }, true],
    [
      'disabled',
      {
        preview: true,
        disableLoopProtectTests: true,
        disableLoopProtectPreview: true
      },
      false
    ]
  ])('respects %s loop protection', async (_, options, protectedLoop) => {
    const transformed = await getJSTranspiler(options)(
      createPoly({
        name: 'script',
        ext: 'js',
        contents: 'let iterations = 0; while (iterations < 10000) iterations++;'
      })
    );
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    const clock = { now: vi.fn().mockReturnValueOnce(0).mockReturnValue(2000) };
    const iterations = new Function(
      'Date',
      `${transformed.contents}; return iterations;`
    )(clock);

    const warning = expect.stringContaining('Potential infinite loop detected');
    expect(iterations).toBeGreaterThan(0);
    expect(iterations).toBeLessThanOrEqual(10000);
    expect(iterations < 10000).toBe(protectedLoop);
    expect(log.mock.calls).toEqual(protectedLoop ? [[warning]] : []);
  });

  it.each(['jsx', 'tsx'])(
    'runs %s modules through the UMD transform',
    async ext => {
      const compiled =
        'import React from "react"; export default <strong>{6 * 7}</strong>;';
      const contents =
        ext === 'tsx'
          ? 'import React from "react"; const answer: number = 42; export default <strong>{answer}</strong>;'
          : compiled;
      if (ext === 'tsx') compileTypeScriptCode.mockResolvedValueOnce(compiled);
      const transformed = await transformFile(
        createPoly({ name: 'index', ext, contents }),
        getMultifileJSXTransformers()
      );
      const globals = { react: React };

      new Function('globalThis', 'self', transformed.contents)(
        globals,
        globals
      );

      expect(globals.index.default).toEqual({
        type: 'strong',
        props: null,
        children: [42]
      });
      expect(compileTypeScriptCode.mock.calls).toEqual(
        ext === 'tsx' ? [[contents]] : []
      );
    }
  );

  it('transpiles inline Babel scripts into executable HTML scripts', async () => {
    const transformed = await transformFile(
      createPoly({
        name: 'index',
        ext: 'html',
        contents:
          '<main id="app"></main><script type="text/babel">window.view = <span>Hello</span>;</script>'
      })
    );
    const doc = parseHtml(transformed.contents);
    const script = doc.querySelector('script');
    const window = {};

    expect(script.getAttribute('type')).toBeNull();
    expect(doc.querySelector('#app')).not.toBeNull();
    new Function('window', 'React', script.textContent)(window, React);

    expect(window.view).toEqual({
      type: 'span',
      props: null,
      children: ['Hello']
    });
  });
});

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
