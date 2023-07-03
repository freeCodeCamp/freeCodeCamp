/* eslint-disable @typescript-eslint/naming-convention */
// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import { IDisposable, Terminal } from 'xterm';
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

// TODO: term will need to be abstracted to allow for testing. Either light
// abstraction (just a interface with the methods we need) or heavy abstraction
// (pass in functions that handle writing and reading to... something
// unspecified)
function setupRunPython(pyodide: PyodideInterface, term: Terminal) {
  function print(...args: unknown[]) {
    const text = args
      .map(arg => {
        // @ts-expect-error types forthcoming
        if (typeof arg === 'object' && arg?.__str__) {
          // @ts-expect-error types forthcoming
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
          return arg.__str__();
        } else {
          return arg;
        }
      })
      .join(' ');
    term.writeln(`>>> ${text}`);
  }

  const writeLine = (text: string) => term.writeln(`>>> ${text}`);

  const waitForInput = () =>
    new Promise(resolve => {
      let userinput = '';
      // Eslint is confused because this is a hack. The disposable does not
      // exist until term.onData is called by the keyListener, but we need a
      // reference to it to create the keyListener. The way out is to declare a
      // variable to hold the reference, knowing that it will be assigned before
      // done is called.

      // eslint-disable-next-line prefer-const
      let disposable: IDisposable | undefined;

      const done = () => {
        disposable?.dispose();
        resolve(userinput);
      };

      const keyListener = (key: string) => {
        if (key === '\u007F' || key === '\b') {
          // Backspace or delete key
          term.write('\b \b'); // Move cursor back, replace character with space, then move cursor back again
          userinput = userinput.slice(0, -1); // Remove the last character from userinput
        }
        if (key == '\r') {
          term.write('\r\n');
          done();
        } else {
          userinput += key;
          term.write(key);
        }
      };

      disposable = term.onData(keyListener); // Listen for key events and store the disposable
    });

  const input = async (text: string) => {
    writeLine(text);
    return await waitForInput();
  };

  window.print = print;
  // @ts-expect-error I'll update the window type later
  window.input = input;

  function runPython(code: string) {
    // Pyodide doesn't clear the global namespace when you runPython, so we have
    // to.
    pyodide.runPython(`
user_defined = [var for var in globals().copy() if not var.startswith("__")]
for var in user_defined:
  del globals()[var]`);
    // Make print and input available to python
    // TODO: use registerJsModule so we don't have to modify window.
    pyodide.runPython(`
import js
from js import print
from js import input
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
