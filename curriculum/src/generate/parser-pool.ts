import { cpus } from 'os';
import { resolve } from 'path';
import workerpool from 'workerpool';

import type { parseMD } from '../../../tools/challenge-parser/parser';

type ParsedChallenge = Awaited<ReturnType<typeof parseMD>>;

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
  maxWorkers = Math.max(1, cpus().length - 1)
): ParserPool {
  const pool = workerpool.pool(resolve(__dirname, 'parse-worker.js'), {
    maxWorkers,
    workerType: 'thread'
  });

  const parse: Parser = filename =>
    pool.exec('parseMD', [filename]) as Promise<ParsedChallenge>;

  const terminate = async () => {
    await pool.terminate();
  };

  return { parse, terminate };
}
