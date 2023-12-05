import pythonWorkerData from '../../../../config/browser-scripts/python-worker.json';

const pythonWorkerSrc = `/js/${pythonWorkerData.filename}.js`;

let pythonWorker: Worker | null = null;

export function getPythonWorker(): Worker {
  if (!pythonWorker) {
    pythonWorker = new Worker(pythonWorkerSrc);
  }
  return pythonWorker;
}
