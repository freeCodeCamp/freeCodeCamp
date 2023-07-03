/* eslint-disable @typescript-eslint/naming-convention */
// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import { IDisposable, Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import jQuery from 'jquery'; // TODO: is jQuery needed for the python runner?
import * as helpers from '@freecodecamp/curriculum-helpers';

import type { FrameDocument, FrameWindow, InitTestFrameArg } from '.';

import 'xterm/css/xterm.css';

(window as FrameWindow).$ = jQuery;

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
    console.log('Clearing globals');
    pyodide.runPython(`
user_defined = [var for var in globals().copy() if not var.startswith("__")]
for var in user_defined:
  del globals()[var]`);
    // Make print and input available to python
    // TODO: use registerJsModule so we don't have to modify window.
    console.log('Setting up print and input');
    pyodide.runPython(`
import js
from js import print
from js import input
`);
    console.log('Running python');
    pyodide.runPython(code);
    console.log('Python finished');
    return pyodide;
  }

  contentDocument.__runPython = runPython;
}

async function initPythonFrame() {
  console.log('Initializing python frame');
  const term = createTerminal();
  const pyodide = await setupPyodide();
  setupRunPython(pyodide, term);
}

contentDocument.__initPythonFrame = initPythonFrame;

contentDocument.__initTestFrame = initTestFrame;

// TODO: DRY this and frame-runner.ts's initTestFrame
async function initTestFrame(e: InitTestFrameArg = { code: {} }) {
  console.log('Initializing test frame');
  const code = (e.code.contents || '').slice();
  const __file = (id?: string) => {
    if (id && e.code.original) {
      return e.code.original[id];
    } else {
      return code;
    }
  };

  if (!e.getUserInput) {
    e.getUserInput = () => code;
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // Fake Deep Equal dependency
  const DeepEqual = (a: Record<string, unknown>, b: Record<string, unknown>) =>
    JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DeepFreeze = (o: Record<string, any>) => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (
        Object.prototype.hasOwnProperty.call(o, prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };

  const { default: chai } = await import(/* webpackChunkName: "chai" */ 'chai');
  const assert = chai.assert;
  const __helpers = helpers;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  let Enzyme;
  if (e.loadEnzyme) {
    /* eslint-disable prefer-const */
    let Adapter16;

    [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
      import(/* webpackChunkName: "enzyme" */ 'enzyme'),
      import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
    ]);
    /* eslint-enable no-inline-comments */

    Enzyme.configure({ adapter: new Adapter16() });
    /* eslint-enable prefer-const */
  }

  contentDocument.__runTest = async function runTests(testString: string) {
    // uncomment the following line to inspect
    // the frame-runner as it runs tests
    // make sure the dev tools console is open
    // debugger;
    try {
      // TODO: figure out what happens when the user code is waiting for input.
      // Can we supply that in a test? Can we do that incrementally? If so, how
      // do we stop the user code when the test is done?
      // Make __pyodide available to the test code
      const __pyodide = this.__runPython(code);
      // eval test string to actual JavaScript
      // This return can be a function
      // i.e. function() { assert(true, 'happy coding'); }
      const testPromise = new Promise((resolve, reject) =>
        // To avoid race conditions, we have to run the test in a final
        // frameDocument ready:
        $(() => {
          try {
            const test: unknown = eval(testString);
            resolve(test);
          } catch (err) {
            reject(err);
          }
        })
      );
      const test = await testPromise;
      if (typeof test === 'function') {
        await test(e.getUserInput);
      }
      return { pass: true };
    } catch (err) {
      if (!(err instanceof chai.AssertionError)) {
        console.error(err);
      }
      // to provide useful debugging information when debugging the tests, we
      // have to extract the message, stack and, if they exist, expected and
      // actual before returning
      return {
        err: {
          message: (err as Error).message,
          stack: (err as Error).stack,
          expected: (err as { expected?: string }).expected,
          actual: (err as { actual?: string }).actual
        }
      };
    }
  };
}
