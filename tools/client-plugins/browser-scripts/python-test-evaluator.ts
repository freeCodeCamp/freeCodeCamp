// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import type { PyProxy, PythonError } from 'pyodide/ffi';
import pkg from 'pyodide/package.json';
import * as helpers from '@freecodecamp/curriculum-helpers';
import chai from 'chai';

const ctx: Worker & typeof globalThis = self as unknown as Worker &
  typeof globalThis;

let pyodide: PyodideInterface;

interface PythonRunEvent extends MessageEvent {
  data: {
    code: {
      contents: string;
      editableContents: string;
      original: { [id: string]: string };
    };
    firstTest: unknown;
    testString: string;
    build: string;
    sources: {
      [fileName: string]: unknown;
    };
  };
}

type EvaluatedTeststring = {
  input: string[];
  test: () => Promise<unknown>;
};

async function setupPyodide() {
  if (pyodide) return pyodide;

  pyodide = await loadPyodide({
    // TODO: host this ourselves
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${pkg.version}/full/`
  });

  // We freeze this to prevent learners from getting the worker into a
  // weird state. NOTE: this has to come after pyodide is loaded, because
  // pyodide modifies self while loading.
  Object.freeze(self);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  pyodide.FS.writeFile(
    '/home/pyodide/ast_helpers.py',
    helpers.python.astHelpers,
    {
      encoding: 'utf8'
    }
  );

  ctx.postMessage({ type: 'contentLoaded' });

  return pyodide;
}

void setupPyodide();

ctx.onmessage = async (e: PythonRunEvent) => {
  const pyodide = await setupPyodide();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const code = (e.data.code.contents || '').slice();
  const editableContents = (e.data.code.editableContents || '').slice();
  const testString = e.data.testString;

  const assert = chai.assert;
  const __helpers = helpers;

  // Create fresh globals for each test
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const __userGlobals = pyodide.globals.get('dict')() as PyProxy;

  /* eslint-enable @typescript-eslint/no-unused-vars */
  // uncomment the following line to inspect
  // the frame-runner as it runs tests
  // make sure the dev tools console is open
  // debugger;
  try {
    // eval test string to get the dummy input and actual test
    const evaluatedTestString = await new Promise<unknown>(
      (resolve, reject) => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const test: { input: string[]; test: () => Promise<unknown> } =
            eval(testString);
          resolve(test);
        } catch (err) {
          reject(err);
        }
      }
    );

    // If the test string does not evaluate to an object, then we assume that
    // it's a standard JS test and any assertions have already passed.
    if (typeof evaluatedTestString !== 'object') {
      ctx.postMessage({ pass: true });
      return;
    }

    if (!evaluatedTestString || !('test' in evaluatedTestString)) {
      throw new Error(
        'Test string did not evaluate to an object with the test property'
      );
    }

    const { input, test } = evaluatedTestString as EvaluatedTeststring;

    // Some tests rely on __name__ being set to __main__ and we new dicts do not
    // have this set by default.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    __userGlobals.set('__name__', '__main__');

    // The runPython helper is a shortcut for running python code with our
    // custom globals.
    const runPython = (pyCode: string) =>
      pyodide.runPython(pyCode, { globals: __userGlobals }) as unknown;
    // TODO: remove __pyodide once all the test use runPython.
    const __pyodide = {
      runPython
    };

    runPython(`
def __inputGen(xs):
  def gen():
    for x in xs:
      yield x
  iter = gen()
  def input(arg=None):
    return next(iter)

  return input

input = __inputGen(${JSON.stringify(input ?? [])})
`);

    runPython(`from ast_helpers import Node as _Node`);

    // The tests need the user's code as a string, so we write it to the virtual
    // filesystem...
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    pyodide.FS.writeFile('/user_code.py', code, { encoding: 'utf8' });

    // ...and then read it back into a variable so that they can evaluate it.
    runPython(`
with open("/user_code.py", "r") as f:
  _code = f.read()
`);

    try {
      // Evaluates the learner's code so that any variables they define are
      // available to the test.
      runPython(code);
    } catch (e) {
      const err = e as PythonError;

      // Quite a lot of lessons can easily lead users to write code that has
      // indentation errors. In these cases we want to provide a more helpful
      // error message. For other errors, we can just provide the standard
      // message.
      const errorType =
        err.type === 'IndentationError' ? 'indentation' : 'other';
      return ctx.postMessage({
        err: {
          message: err.message,
          stack: err.stack,
          errorType
        }
      });
    }
    // TODO: remove the next line, creating __locals, once all the tests access
    // variables directly.
    runPython('__locals = globals()');
    await test();

    ctx.postMessage({ pass: true });
  } catch (err) {
    if (!(err instanceof chai.AssertionError)) {
      console.error(err);
    }
    // to provide useful debugging information when debugging the tests, we
    // have to extract the message, stack and, if they exist, expected and
    // actual before returning
    ctx.postMessage({
      err: {
        message: (err as Error).message,
        stack: (err as Error).stack,
        expected: (err as { expected?: string }).expected,
        actual: (err as { actual?: string }).actual
      }
    });
  } finally {
    __userGlobals.destroy();
  }
};
