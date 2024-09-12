import typeScriptWorkerData from '../../../../config/browser-scripts/typescript-worker.json';

const typeScriptWorkerSrc = `/js/${typeScriptWorkerData.filename}.js`;

let worker: Worker | null = null;
type Code = {
  contents: string;
  editableContents: string;
  original: string;
};

function getTypeScriptWorker(): Worker {
  if (!worker) {
    worker = new Worker(typeScriptWorkerSrc);
  }
  return worker;
}

export function compileTypeScriptCode(code: Code): void {
  getTypeScriptWorker().postMessage({ type: 'compile', code });
}
