// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs.

// This is to do with how webpack handles node fallbacks - it uses the node
// resolution algorithm to find the file, but that requires the full file name.
// We can't add the extension, because it's in a bundle we're importing. However
// we can import the .js file and then the strictness does not apply.
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import type { PyProxy, PythonError } from 'pyodide/ffi';
import * as helpers from '@freecodecamp/curriculum-helpers';

const ctx: Worker & typeof globalThis = self as unknown as Worker &
  typeof globalThis;

let pyodide: PyodideInterface | null = null;

interface PythonRunEvent extends MessageEvent {
  data: {
    type: 'run';
    code: {
      contents: string;
      editableContents: string;
      original: { [id: string]: string };
    };
  };
}

interface ListenRequestEvent extends MessageEvent {
  data: {
    type: 'listen';
  };
}

interface CancelEvent extends MessageEvent {
  data: {
    type: 'cancel';
    value: number;
  };
}

// Since messages are buffered, it needs to be possible to discard 'run'
// messages. Otherwise messages could build up while the worker is busy (for
// example, while loading pyodide) and the work would try to process them in
// sequence. Instead, it will ignore messages until it receives a 'listen'
// message and will inform the client every time it starts ignoring messages.
let ignoreRunMessages = true;

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

  ignoreRunMessages = true;
  postMessage({ type: 'stopped' });
}

function resetPyodide() {
  if (pyodide) pyodide = null;
  void setupPyodide();
}

void setupPyodide();

function initRunPython() {
  if (!pyodide) throw new Error('pyodide not loaded');
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

    // We want to raise a KeyboardInterrupt if the user cancels. To do that,
    // this function returns a JS object with the 'type' property set to
    // 'cancel'. Then the python code can actually raise the exception.
    return JSON.parse(request.responseText) as {
      type: 'msg' | 'cancel';
      value?: string;
    };
  }

  function __interruptExecution() {
    postMessage({ type: 'reset' });
  }

  // I tried setting jsglobals here, to provide 'input' and 'print' to python,
  // without having to modify the global window object. However, it didn't work
  // because pyodide needs access to that object. Instead, I used
  // registerJsModule when setting up runPython.

  // Make print available to python
  pyodide.registerJsModule('jscustom', {
    print,
    input,
    __interruptExecution
  });
  // Create fresh globals each time user code is run.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const globals = pyodide.globals.get('dict')() as PyProxy;
  // Some tests rely on __name__ being set to __main__ and we new dicts do not
  // have this set by default.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  globals.set('__name__', '__main__');

  // The runPython helper is a shortcut for running python code with our
  // custom globals.
  const runPython = (pyCode: string) =>
    pyodide!.runPython(pyCode, { globals }) as unknown;

  runPython(`
  from pyodide.ffi import JsException

  import jscustom
  from jscustom import print
  from jscustom import input

  def __wrap(func):
    def fn(*args):
      try:
        data = func(*args)
        if data.type == 'cancel':
          raise KeyboardInterrupt(data.value)
        return data.value
      except JsException:
        jscustom.__interruptExecution()
        raise
    return fn
  input = __wrap(input)
  `);

  // Exposing sys.last_value can create memory leaks, so this just returns a
  // string instead of the actual exception. args[0] is what was passed to the
  // exception constructor. In our case, that's the id we want.
  // TODO: I'm using 'join' to make sure we're not leaking a reference to the
  // exception. This might be excessive, but I don't know enough about pyodide
  // to be sure.
  runPython(`
  import sys
  def __get_reset_id():
    if sys.last_value and sys.last_value.args:
      return "".join(str(sys.last_value.args[0]))
    else:
      return ""
  `);
  runPython(`
def print_exception():
    from ast_helpers import format_exception
    formatted = format_exception(exception=sys.last_value, traceback=sys.last_traceback, filename="<exec>", new_filename="main.py")
    print(formatted)
`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const printException = globals.get('print_exception') as PyProxy &
    (() => string);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const getResetId = globals.get('__get_reset_id') as PyProxy & (() => string);
  return { runPython, getResetId, globals, printException };
}

ctx.onmessage = (e: PythonRunEvent | ListenRequestEvent | CancelEvent) => {
  const { data } = e;
  if (data.type === 'listen') {
    handleListenRequest();
  } else if (data.type === 'cancel') {
    handleCancelRequest(data);
  } else {
    handleRunRequest(data);
  }
};

// This lets the client know that there is nothing to cancel.
function handleCancelRequest({ value }: { value: number }) {
  postMessage({ type: 'is-alive', text: value });
}

function handleListenRequest() {
  ignoreRunMessages = false;
}

function handleRunRequest(data: PythonRunEvent['data']) {
  try {
    if (ignoreRunMessages) return;
    const code = (data.code.contents || '').slice();
    // TODO: use reset-terminal for clarity?
    postMessage({ type: 'reset' });

    const { runPython, getResetId, globals, printException } = initRunPython();
    // use pyodide.runPythonAsync if we want top-level await
    try {
      runPython(code);
    } catch (e) {
      const err = e as PythonError;
      // the formatted exception is printed to the terminal
      printException();
      // but the full error is logged to the console for debugging
      console.error(err);
      const resetId = getResetId();
      // TODO: if a user raises a KeyboardInterrupt with a custom message this
      // will be treated as a reset, the client will resend their code and this
      // will loop. Can we fix that? Perhaps by using a custom exception?
      if (err.type === 'KeyboardInterrupt' && resetId) {
        // If the client sends a lot of run messages, it's easy for them to build
        // up while the worker is busy. As such, we both ignore any queued run
        // messages...
        ignoreRunMessages = true;
        // ...and tell the client that we're ignoring them.
        postMessage({ type: 'stopped', text: getResetId() });
      }
    } finally {
      getResetId.destroy();
      printException.destroy();
      globals.destroy();
    }
  } catch (e) {
    // This should only be reach if pyodide crashes, but it's helpful to log
    // the error in case it's something else.
    console.error(e);
    void resetPyodide();
  }
}
