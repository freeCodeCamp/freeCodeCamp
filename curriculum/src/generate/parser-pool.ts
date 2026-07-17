import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { resolve } from 'path';

import type { parseMD } from '../../../tools/challenge-parser/parser';

type ParsedChallenge = Awaited<ReturnType<typeof parseMD>>;

type PendingTask = {
  resolve: (data: ParsedChallenge) => void;
  reject: (error: Error) => void;
};

export type Parser = (filename: string) => Promise<ParsedChallenge>;

export type ParserPool = {
  parse: Parser;
  terminate: () => Promise<void>;
};

// Parsing a challenge's markdown is synchronous, CPU-bound work (remark/
// unified), so running it on the main thread means challenges are parsed
// one at a time no matter how many are kicked off with Promise.all. Spreading
// that work across worker threads lets it actually run in parallel.
export function createParserPool(
  size = Math.max(1, cpus().length - 1)
): ParserPool {
  const workerPath = resolve(__dirname, 'parse-worker.js');
  const workers = Array.from({ length: size }, () => new Worker(workerPath));
  const pending = new Map<number, PendingTask>();
  let nextId = 0;
  let nextWorker = 0;

  for (const worker of workers) {
    worker.on(
      'message',
      (msg: { id: number; data?: ParsedChallenge; error?: string }) => {
        const task = pending.get(msg.id);
        if (!task) return;
        pending.delete(msg.id);
        if (msg.error) task.reject(new Error(msg.error));
        else task.resolve(msg.data!);
      }
    );
    worker.on('error', (error: Error) => {
      for (const [id, task] of pending) {
        task.reject(error);
        pending.delete(id);
      }
    });
  }

  const parse: Parser = filename => {
    const id = nextId++;
    const worker = workers[nextWorker]!;
    nextWorker = (nextWorker + 1) % workers.length;

    return new Promise((resolvePromise, reject) => {
      pending.set(id, { resolve: resolvePromise, reject });
      worker.postMessage({ id, filename });
    });
  };

  const terminate = async () => {
    await Promise.all(workers.map(worker => worker.terminate()));
  };

  return { parse, terminate };
}
