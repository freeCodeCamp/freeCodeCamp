import typeScriptWorkerData from '../../../../config/browser-scripts/typescript-worker.json';
import { awaitResponse } from './worker-messenger';

const typeScriptWorkerSrc = `/js/${typeScriptWorkerData.filename}.js`;

let worker: Worker | null = null;

function getTypeScriptWorker(): Worker {
  if (!worker) {
    worker = new Worker(typeScriptWorkerSrc);
  }
  return worker;
}

export function compileTypeScriptCode(code: string): Promise<string> {
  return awaitResponse({
    worker: getTypeScriptWorker(),
    message: { type: 'compile', code },
    onMessage: (data, onSuccess, onFailure) => {
      if (data.type === 'compiled') {
        if (!data.error) {
          onSuccess(data.value);
        } else {
          onFailure(Error(data.error));
        }
      } else {
        onFailure(Error('unable to compile code'));
      }
    }
  });
}

export function checkTSServiceIsReady(): Promise<boolean> {
  return awaitResponse({
    worker: getTypeScriptWorker(),
    message: { type: 'check-is-ready' },
    onMessage: (data, onSuccess) => {
      if (data.type === 'ready') {
        onSuccess(true);
      }
      // otherwise it times out.
    }
  });
}
