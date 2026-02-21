import { version } from '@freecodecamp/browser-scripts/package.json';

// TODO: This might be cleaner as a class.
const pythonWorkerSrc = `/js/workers/${version}/python-worker.js`;

let worker: Worker | null = null;
type Code = {
  contents: string;
  editableContents: string;
};
// We need to keep track of the last code message so we can re-run it if the
// worker is reset.
let lastCodeMessage: Code | null = null;

export type PythonWorkerEvent = {
  data: {
    type:
    | 'print'
    | 'input'
    | 'contentLoaded'
    | 'reset'
    | 'stopped'
    | 'is-alive'
    | 'error';
    text?: string;
  };
};

const listeners: ((event: PythonWorkerEvent['data']) => void)[] = [];

function handleMessage(event: PythonWorkerEvent) {
  const { type, text } = event.data;

  // Ignore contentLoaded messages for now.
  if (type === 'contentLoaded') return;

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
    // Dispatch to all listeners
    listeners.forEach(listener => listener(event.data));
  }
}

export function getPythonWorker(): Worker {
  if (!worker) {
    worker = new Worker(pythonWorkerSrc);
    worker.addEventListener('message', handleMessage);
  }
  return worker;
}

/**
 * Subscribes to events from the python worker.
 * @param listener A function that handles messages from the worker
 * @returns A function to unsubscribe
 */
export function onPythonWorkerEvent(
  listener: (event: PythonWorkerEvent['data']) => void
): () => void {
  listeners.push(listener);

  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}


/**
 * Tries to cancel the currently running code and, if it cannot, terminate the worker.
 */
export function interruptCodeExecution(): void {
  const resetId = setTimeout(() => {
    getPythonWorker().terminate();
    worker = new Worker(pythonWorkerSrc);
    getPythonWorker().addEventListener('message', handleMessage);
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
}): void {
  lastCodeMessage = code;
  getPythonWorker().postMessage({ type: 'run', code });
}

// If the python worker reports that it has stopped, we need to send a listen
// message to get it to listen to run messages again.
function sendListenMessage(): void {
  getPythonWorker().postMessage({ type: 'listen' });
}
