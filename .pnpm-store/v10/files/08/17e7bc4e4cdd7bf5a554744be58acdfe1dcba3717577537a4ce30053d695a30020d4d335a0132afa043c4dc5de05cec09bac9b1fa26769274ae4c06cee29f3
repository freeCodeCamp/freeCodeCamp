import { start } from '../editor/editor.worker.start.js';

let initialized = false;
function isWorkerInitialized() {
  return initialized;
}
function initialize(callback) {
  initialized = true;
  self.onmessage = (m) => {
    start((ctx) => {
      return callback(ctx, m.data);
    });
  };
}

export { initialize, isWorkerInitialized };
