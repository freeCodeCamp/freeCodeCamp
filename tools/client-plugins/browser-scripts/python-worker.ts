// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';

let pyodide: PyodideInterface;

async function setupPyodide() {
  if (pyodide) return pyodide;

  pyodide = await loadPyodide({
    // TODO: host this ourselves
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${pkg.version}/full/`
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const str = pyodide.globals.get('str') as (x: unknown) => string;

  function print(...args: unknown[]) {
    const text = args.map(x => str(x)).join(' ');
    postMessage({ type: 'print', text });
  }

  function input(text: string) {
    // TODO: send unique ids to the main thread and the service worker, so we
    // can have multiple concurrent input requests.
    postMessage({ type: 'input', text });
    const request = new XMLHttpRequest();
    request.open('POST', '/python/intercept-input/', false);
    request.send(null);

    return request.responseText;
  }

  // I tried setting jsglobals here, to provide 'input' and 'print' to python,
  // without having to modify the global window object. However, it didn't work
  // because pyodide needs access to that object. Instead, I used
  // registerJsModule when setting up runPython.

  // Make print available to python
  pyodide.registerJsModule('jscustom', {
    print,
    input
  });
  pyodide.runPython(`
  import jscustom
  from jscustom import print
  from jscustom import input
`);

  return pyodide;
}

self.onmessage = async (e: { data: { code: string } }) => {
  console.log('python worker received message', e.data);
  const pyodide = await setupPyodide();
  const { code } = e.data;
  const result = (await pyodide.runPythonAsync(code)) as unknown;
  // self.postMessage(result);
  console.log('result', result);
};

self.postMessage({ type: 'contentLoaded' });
