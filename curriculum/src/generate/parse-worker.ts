import { parentPort } from 'node:worker_threads';

import { parseMD } from '../../../tools/challenge-parser/parser';

if (!parentPort) throw new Error('Parser worker requires a parent port');
const port = parentPort;

port.on('message', (filename: string) => {
  void parseMD(filename)
    .then(data => port.postMessage({ data }))
    .catch((error: unknown) => {
      port.postMessage({
        error: error instanceof Error ? error : new Error(String(error))
      });
    });
});
