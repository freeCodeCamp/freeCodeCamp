import { version } from '@freecodecamp/browser-scripts/package.json';

// TODO: This might be cleaner as a class.
const pythonWorkerSrc = `/js/workers/${version}/python-worker.js`;

let worker: Worker | null = null;
let listener: ((event: MessageEvent) => void) | null = null;

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
      | 'is-alive'
      | 'run-complete';
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
  runComplete?: () => void;
  stopped?: () => void;
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
      handlers.stopped?.();
      return;
    }

    if (type === 'run-complete') {
      handlers.runComplete?.();
      return;
    } else {
      handlers[type](text);
    }
  };
  pythonWorker.addEventListener('message', listener);
  // The worker may have sent its initial "stopped" signal before the listener
  // was attached. Sending listen here ensures run requests are accepted.
  sendListenMessage();
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
}): Promise<void> {
  const pythonWorker = getPythonWorker();
  const pingId = Date.now();

  return new Promise(resolve => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const resolveRun = () => {
      pythonWorker.removeEventListener('message', completionListener);
      if (timeout) clearTimeout(timeout);
      resolve();
    };

    const completionListener = (event: PythonWorkerEvent) => {
      const { type, text } = event.data;
      if (type === 'run-complete' || type === 'stopped') {
        resolveRun();
        return;
      }

      // Fallback for environments where run-complete is unavailable:
      // the cancel ping is queued after run and acknowledged once the worker
      // is responsive again.
      if (type === 'is-alive' && Number(text) === pingId) {
        resolveRun();
      }
    };

    pythonWorker.addEventListener('message', completionListener);

    pythonWorker.postMessage({ type: 'listen' });
    pythonWorker.postMessage({ type: 'run', code });
    pythonWorker.postMessage({ type: 'cancel', value: pingId });
    timeout = setTimeout(resolveRun, 30000);
  });
}

// If the python worker reports that it has stopped, we need to send a listen
// message to get it to listen to run messages again.
function sendListenMessage(): void {
  getPythonWorker().postMessage({ type: 'listen' });
}
