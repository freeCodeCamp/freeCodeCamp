import { initialize } from '../../common/initialize.js';
import * as typescriptServices from './lib/typescriptServices.js';
export { typescriptServices as ts };
import { create } from './tsWorker.js';
export { TypeScriptWorker } from './tsWorker.js';
export { libFileMap } from './lib/lib.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return create(ctx, createData);
  });
};

export { create, initialize };
