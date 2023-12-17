// TODO: This might be cleaner as a class.
import pythonWorkerData from '../../../../config/browser-scripts/python-worker.json';

const pythonWorkerSrc = `/js/${pythonWorkerData.filename}.js`;

let worker: Worker | null = null;
let testWorker: Worker | null = null;
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

export function getPythonTestWorker(): Worker {
  if (!testWorker) {
    testWorker = new Worker(pythonWorkerSrc);
  }
  return testWorker;
}

type PythonWorkerEvent = {
  data: {
    // TODO: remove reset?
    type: 'print' | 'input' | 'contentLoaded' | 'reset' | 'stopped';
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
    const { type, text } = event.data;

    // TODO: this is a bit messy with the 'handlers' as well as the implicit
    // handlers reacting to stopped and contentLoaded messages.
    if (type === 'contentLoaded') return; // Ignore contentLoaded messages for now.
    // 'stopped' means the worker is ignoring 'run' messages.
    if (type === 'stopped') {
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
 * Terminates the existing python worker and creates a new one.
 */
export function resetPythonWorker(): void {
  navigator.serviceWorker.controller?.postMessage(
    JSON.stringify({
      type: 'cancel'
    })
  );
  // TODO: create a fallback where we terminate the worker if cancel fails
  // somehow. e.g. attach ids to messages and terminate the worker if we don't
  // get a stopped message (with the same id) within a certain amount of time.
  // Remember that the new worker will need the same listeners as the old one.
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
