import pythonWorkerData from '../../../../config/browser-scripts/python-worker.json';

const pythonWorkerSrc = `/js/${pythonWorkerData.filename}.js`;

let worker: Worker | null = null;
let testWorker: Worker | null = null;
let listener: ((event: MessageEvent) => void) | null = null;
let resetTerminal: (() => void) | null = null;

export function getPythonWorker(): Worker {
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
    type: 'print' | 'input' | 'contentLoaded';
    text: string;
  };
};

/**
 * Registers a terminal to receive print and input messages from the python worker.
 * @param handlers
 * @param handlers.print - A function that handles print messages from the python worker
 * @param handlers.input - A function that handles input messages from the python worker
 * @param reset - A function that resets the terminal
 */
export function registerTerminal(
  handlers: {
    print: (text: string) => void;
    input: (text: string) => void;
  },
  reset: () => void
): void {
  const pythonWorker = getPythonWorker();
  if (listener) pythonWorker.removeEventListener('message', listener);
  listener = (event: PythonWorkerEvent) => {
    const { type, text } = event.data;
    // Ignore contentLoaded messages for now.
    if (type === 'contentLoaded') return;
    handlers[type](text);
  };
  pythonWorker.addEventListener('message', listener);
  resetTerminal = reset;
}

/**
 * Terminates the existing python worker and creates a new one.
 */
export function resetPythonWorker(): void {
  if (resetTerminal) resetTerminal();
  worker?.terminate();
  worker = new Worker(pythonWorkerSrc);
  if (listener) worker.addEventListener('message', listener);
}
