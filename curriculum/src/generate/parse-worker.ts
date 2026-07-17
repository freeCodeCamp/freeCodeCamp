import { parentPort } from 'worker_threads';

import { parseMD } from '../../../tools/challenge-parser/parser';

type ParsedChallenge = Awaited<ReturnType<typeof parseMD>>;
type Task = { id: number; filename: string };
type Result =
  | { id: number; data: ParsedChallenge }
  | { id: number; error: string };

parentPort?.on('message', ({ id, filename }: Task) => {
  parseMD(filename)
    .then((data: ParsedChallenge) => {
      const result: Result = { id, data };
      parentPort?.postMessage(result);
    })
    .catch((error: Error) => {
      const result: Result = { id, error: error.message };
      parentPort?.postMessage(result);
    });
});
