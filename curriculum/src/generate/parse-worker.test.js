import { resolve } from 'node:path';
import { parentPort } from 'node:worker_threads';
import { describe, expect, it, vi } from 'vitest';

import { parseMD } from '../../../tools/challenge-parser/parser';
import './parse-worker';

vi.mock('node:worker_threads', async () => {
  const { EventEmitter } = await import('node:events');
  const parentPort = new EventEmitter();
  parentPort.postMessage = vi.fn();
  return { parentPort };
});

function parseInWorker(filename) {
  return new Promise(resolve => {
    parentPort.postMessage.mockImplementationOnce(message => {
      resolve(structuredClone(message));
    });
    parentPort.emit('message', filename);
  });
}

describe('parse worker', () => {
  it('returns the same challenge as the serial parser', async () => {
    const filename = resolve(
      __dirname,
      '../../__fixtures__/english/challenge.md'
    );
    await expect(parseInWorker(filename)).resolves.toEqual({
      data: await parseMD(filename)
    });
  });

  it('sends parsing failures back without losing the error message', async () => {
    const filename = resolve(__dirname, 'missing-challenge.md');
    await expect(parseInWorker(filename)).resolves.toEqual({
      error: expect.objectContaining({
        message: expect.stringContaining(filename)
      })
    });
  });
});
