/* eslint-disable @typescript-eslint/naming-convention */
// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

import type { FrameDocument } from '.';

// This will be running in an iframe, so document will be
// element.contentDocument. This declaration is just to add properties we know
// exist on this document (but not on the parent)
const contentDocument = document as FrameDocument;

function createTerminal() {
  const terminalContainer = document.getElementById('terminal');
  if (!terminalContainer) throw Error('Could not find terminal container');

  const term = new Terminal();
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(terminalContainer);
  fitAddon.fit();

  return term;
}

async function setupPyodide() {
  return await loadPyodide({
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${pkg.version}/full/`
  });
}

function setupRunPython(pyodide: PyodideInterface, term: Terminal) {
  // print is defined so that pyodide can import when it runs python (we don't
  // use it in JS)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function print(...args: unknown[]) {
    const text = args
      .map(arg => {
        // @ts-expect-error don't panic
        if (typeof arg === 'object' && arg?.__str__) {
          // @ts-expect-error don't panic
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
          return arg.__str__();
        } else {
          return arg;
        }
      })
      .join(' ');
    term.writeln(`>>> ${text}`);
  }

  // TODO: use registerJsModule so we don't have to modify window.
  window.print = print;

  function runPython(code: string) {
    // Pyodide doesn't clear the global namespace when you runPython, so we have
    // to.
    pyodide.runPython(`
user_defined = [var for var in globals().copy() if not var.startswith("__")]
for var in user_defined:
  del globals()[var]`);
    pyodide.runPython(`
import js
from js import print
`);
    pyodide.runPython(code);
  }

  contentDocument.__runPython = runPython;
}

async function initPythonFrame() {
  const term = createTerminal();
  const pyodide = await setupPyodide();
  setupRunPython(pyodide, term);
}

contentDocument.__initPythonFrame = initPythonFrame;
