import { AsyncResource } from 'node:async_hooks';
import { availableParallelism } from 'node:os';
import { resolve } from 'node:path';
import { Worker } from 'node:worker_threads';

import type { parseMD } from '../../../tools/challenge-parser/parser';

type ParsedChallenge = Awaited<ReturnType<typeof parseMD>>;
type ParseResult = { data: ParsedChallenge } | { error: Error };
type ParseTask = {
  filename: string;
  done: (result: ParseResult) => void;
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
  maxWorkers = Math.max(1, availableParallelism() - 1)
): ParserPool {
  if (!Number.isInteger(maxWorkers) || maxWorkers < 1) {
    throw new RangeError('maxWorkers must be a positive integer');
  }

  const workers = new Map<Worker, ParseTask | undefined>();
  const queue: ParseTask[] = [];
  let stopped: Error | undefined;
  let termination: Promise<void> | undefined;

  const stop = (error: Error) => {
    if (!termination) {
      stopped = error;
      for (const task of queue.splice(0)) task.done({ error });
      for (const task of workers.values()) task?.done({ error });
      termination = Promise.all(
        [...workers.keys()].map(worker => worker.terminate())
      ).then(() => {
        workers.clear();
      });
    }
    return termination;
  };

  const dispatch = (worker: Worker) => {
    const task = queue.shift();
    workers.set(worker, task);
    if (task) {
      try {
        worker.postMessage(task.filename);
      } catch (error) {
        void stop(error as Error);
      }
    }
  };

  const addWorker = () => {
    const worker = new Worker(resolve(__dirname, 'parse-worker.js'));
    workers.set(worker, undefined);
    worker.on('message', (result: ParseResult) => {
      if (stopped) return;
      workers.get(worker)?.done(result);
      dispatch(worker);
    });
    worker.on('error', (error: Error) => {
      void stop(error);
    });
    worker.on('messageerror', (error: Error) => {
      void stop(error);
    });
    worker.on('exit', code => {
      if (!stopped) {
        void stop(
          new Error(`Parser worker exited unexpectedly (code ${code})`)
        );
      }
    });
    return worker;
  };

  const parse: Parser = filename => {
    if (stopped) return Promise.reject(stopped);

    return new Promise((resolvePromise, reject) => {
      const resource = new AsyncResource('ParseTask');
      queue.push({
        filename,
        done: result => {
          resource.runInAsyncScope(() => {
            if ('error' in result) reject(result.error);
            else resolvePromise(result.data);
          });
          resource.emitDestroy();
        }
      });

      try {
        const idleWorker = [...workers].find(([, task]) => !task)?.[0];
        if (idleWorker) dispatch(idleWorker);
        else if (workers.size < maxWorkers) dispatch(addWorker());
      } catch (error) {
        void stop(error as Error);
      }
    });
  };

  return {
    parse,
    terminate: () => stop(new Error('Parser pool has been terminated'))
  };
}
