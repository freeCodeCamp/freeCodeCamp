// We have to specify pyodide.js because we need to import that file (not .mjs)
// and 'import' defaults to .mjs
import { loadPyodide, type PyodideInterface } from 'pyodide/pyodide.js';
import pkg from 'pyodide/package.json';
import { type PythonError } from 'pyodide/ffi';

const ctx: Worker & typeof globalThis = self as unknown as Worker &
  typeof globalThis;

let pyodide: PyodideInterface;

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

  // I tried setting jsglobals here, to provide 'input' and 'print' to python,
  // without having to modify the global window object. However, it didn't work
  // because pyodide needs access to that object. Instead, I used
  // registerJsModule when setting up runPython.

  // Make print available to python
  pyodide.registerJsModule('jscustom', {
    print,
    input
  });
  // TODO: use a fresh global object for each runPython call if we stop terminating
  // the worker when the user input changes. (See python-test-evaluator.ts)
  pyodide.runPython(`
import jscustom
from jscustom import print
from jscustom import input
def __wrap(func):
  def fn(*args):
    data = func(*args)
    if data.type == 'cancel':
      raise KeyboardInterrupt
    return data.value
  return fn
input = __wrap(input)
`);

  ignoreRunMessages = true;
  postMessage({ type: 'stopped' });
}

void setupPyodide();

ctx.onmessage = (e: PythonRunEvent | ListenRequestEvent) => {
  const { data } = e;
  if (data.type === 'listen') {
    handleListenRequest();
  } else {
    handleRunRequest(data);
  }
};

function handleListenRequest() {
  ignoreRunMessages = false;
}

function handleRunRequest(data: PythonRunEvent['data']) {
  if (ignoreRunMessages) return;
  const code = (data.code.contents || '').slice();
  postMessage({ type: 'reset' });

  // use pyodide.runPythonAsync if we want top-level await
  try {
    pyodide.runPython(code);
  } catch (e) {
    const err = e as PythonError;
    console.error(e);
    if (err.type === 'KeyboardInterrupt') {
      ignoreRunMessages = true;
      postMessage({ type: 'stopped' });
    }
  }
}
