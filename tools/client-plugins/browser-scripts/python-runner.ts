/* eslint-disable @typescript-eslint/naming-convention */
// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

import type { FrameDocument } from '.';

// This will be running in an iframe, so document will be
// element.contentDocument. This declaration is just to add properties we know
// exist on this document (but not on the parent)
const contentDocument = document as FrameDocument;

function setupTerminal() {
  const terminalContainer = document.getElementById('terminal');
  if (!terminalContainer) throw Error('Could not find terminal container');

  const term = new Terminal();
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(terminalContainer);
  fitAddon.fit();
}

async function setupPyodide() {
  const pyodide = await loadPyodide({
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${pkg.version}/full/`
  });

  function runPython(code: string) {
    // Pyodide doesn't clear the global namespace when you runPython, so we have
    // to.
    pyodide.runPython(`
user_defined = [var for var in globals().copy() if not var.startswith("__")]
for var in user_defined:
  del globals()[var]`);

    pyodide.runPython(code);
  }

  contentDocument.__runPython = runPython;
}

async function initPythonFrame() {
  setupTerminal();
  await setupPyodide();
}

contentDocument.__initPythonFrame = initPythonFrame;
