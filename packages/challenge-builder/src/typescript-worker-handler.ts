import browserScripts from '@freecodecamp/browser-scripts/package.json';

import { awaitResponse } from './awaitable-messenger.js';

const typeScriptWorkerSrc = `/js/workers/${browserScripts.version}/typescript-worker.js`;

let worker: Worker | null = null;

function getTypeScriptWorker(): Worker {
  if (!worker) {
    worker = new Worker(typeScriptWorkerSrc);
  }
  return worker;
}

export function compileTypeScriptCode(code: string): Promise<string> {
  return awaitResponse({
    messenger: getTypeScriptWorker(),
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
    messenger: getTypeScriptWorker(),
    message: { type: 'check-is-ready' },
    onMessage: (data, onSuccess) => {
      if (data.type === 'ready') {
        onSuccess(true);
      }
      // otherwise it times out.
    }
  });
}
