// TODO: This might be cleaner as a class.
import pythonWorkerData from '../../../../config/browser-scripts/python-worker.json';

const pythonWorkerSrc = `/js/${pythonWorkerData.filename}.js`;

let worker: Worker | null = null;
let listener: ((event: MessageEvent) => void) | null = null;
type Code = {
  contents: string;
  editableContents: string;
  original: string;
};
// We need to keep track of the last code message so we can re-run it if the
// worker is reset.
let lastCodeMessage: Code | null = null;

function getPythonWorker(): Worker {
  if (!worker) {
    worker = new Worker(pythonWorkerSrc);
  }
  return worker;
}

type PythonWorkerEvent = {
  data: {
    type:
      | 'print'
      | 'input'
      | 'contentLoaded'
      | 'reset'
      | 'stopped'
      | 'is-alive';
    text?: string;
  };
};

/**
 * Registers a terminal to receive print and input messages from the python worker.
 * @param handlers
 * @param handlers.print - A function that handles print messages from the python worker
 * @param handlers.input - A function that handles input messages from the python worker
 * @param reset - A function that resets the terminal
 */
export function registerTerminal(handlers: {
  print: (text?: string) => void;
  input: (text?: string) => void;
  reset: () => void;
}): void {
  const pythonWorker = getPythonWorker();
  if (listener) pythonWorker.removeEventListener('message', listener);
  listener = (event: PythonWorkerEvent) => {
    // TODO: refactor text -> value or msg.
    const { type, text } = event.data;

    // TODO: this is a bit messy with the 'handlers' as well as the implicit
    // handlers reacting to stopped and contentLoaded messages.
    if (type === 'contentLoaded') return; // Ignore contentLoaded messages for now.
    if (type === 'is-alive') {
      clearTimeout(Number(text));
      return;
    }
    // 'stopped' means the worker is ignoring 'run' messages.
    if (type === 'stopped') {
      clearTimeout(Number(text));
      sendListenMessage();
      // Generally, we get here if the learner changes their code while the
      // worker is busy. In that case, we want to re-run the code on receipt of
      // the 'stopped' message.
      if (lastCodeMessage) runPythonCode(lastCodeMessage);
    } else {
      handlers[type](text);
    }
  };
  pythonWorker.addEventListener('message', listener);
}

/**
 * Tries to cancel the currently running code and, if it cannot, terminate the worker.
 */
export function interruptCodeExecution(): void {
  const resetId = setTimeout(() => {
    getPythonWorker().terminate();
    worker = new Worker(pythonWorkerSrc);
    if (listener) getPythonWorker().addEventListener('message', listener);
  }, 1000) as unknown as number; // This is running the browser, so setTimeout returns a number, but TS doesn't know that.
  navigator.serviceWorker.controller?.postMessage(
    JSON.stringify({
      type: 'cancel',
      value: '' + resetId // Converting to string for convenience. (TODO: check if necessary)
    })
  );

  // TODO: Since loading pyodide is slow, there's a risk that this will
  // terminate the worker before it's finished loading. As such we should check
  // if the worker has loaded before attempting to reset it (or send run
  // messages).

  // TODO: sort out the terminology.
  getPythonWorker().postMessage({ type: 'cancel', value: resetId });
}

export function runPythonCode(code: {
  contents: string;
  editableContents: string;
  original: string;
}): void {
  lastCodeMessage = code;
  getPythonWorker().postMessage({ type: 'run', code });
}

// If the python worker reports that it has stopped, we need to send a listen
// message to get it to listen to run messages again.
function sendListenMessage(): void {
  getPythonWorker().postMessage({ type: 'listen' });
}
