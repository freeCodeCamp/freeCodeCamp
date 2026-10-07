import { isWorkerInitialized } from '../common/initialize.js';
export { initialize } from '../common/initialize.js';
import { start } from './editor.worker.start.js';

self.onmessage = () => {
  if (!isWorkerInitialized()) {
    start(() => {
      return {};
    });
  }
};
