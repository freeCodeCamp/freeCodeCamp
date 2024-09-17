import typeScriptWorkerData from '../../../../config/browser-scripts/typescript-worker.json';
import { awaitResponse } from './worker-messenger';

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

export function compileTypeScriptCode(code: Code): Promise<string> {
  return awaitResponse({
    worker: getTypeScriptWorker(),
    message: { type: 'compile', code },
    onMessage: (data, onSuccess, onFailure) => {
      if (data.type === 'compiled') {
        onSuccess(data.value);
      } else {
        onFailure('unable to compile code');
      }
    }
  });
}
