import pythonWorkerData from '../../../../config/browser-scripts/python-worker.json';

const pythonWorkerSrc = `/js/${pythonWorkerData.filename}.js`;

let pythonWorker: Worker | null = null;
let listener: ((event: MessageEvent) => void) | null = null;

export function getPythonWorker(): Worker {
  if (!pythonWorker) {
    pythonWorker = new Worker(pythonWorkerSrc);
  }
  return pythonWorker;
}

type PythonWorkerEvent = {
  data: {
    type: 'print' | 'input';
    text: string;
  };
};

/**
 * Registers a terminal to receive print and input messages from the python worker.
 * @param handlers
 * @param handlers.print - A function that handles print messages from the python worker
 * @param handlers.input - A function that handles input messages from the python worker
 */
export function registerTerminal(handlers: {
  print: (text: string) => void;
  input: (text: string) => void;
}): void {
  const pythonWorker = getPythonWorker();
  if (listener) pythonWorker.removeEventListener('message', listener);
  listener = (event: PythonWorkerEvent) => {
    const { type, text } = event.data;
    handlers[type](text);
  };
  pythonWorker.addEventListener('message', listener);
}
