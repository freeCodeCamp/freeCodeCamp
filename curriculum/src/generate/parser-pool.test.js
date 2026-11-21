import { EventEmitter } from 'node:events';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Worker } from 'node:worker_threads';

import { createParserPool } from './parser-pool';

vi.mock('node:worker_threads', () => ({ Worker: vi.fn() }));

describe('parser pool', () => {
  let workers;
  let pools;

  beforeEach(() => {
    workers = [];
    pools = [];
    Worker.mockImplementation(function () {
      const worker = new EventEmitter();
      worker.postMessage = vi.fn();
      worker.terminate = vi.fn().mockResolvedValue(0);
      workers.push(worker);
      return worker;
    });
  });

  afterEach(async () => {
    await Promise.all(pools.map(pool => pool.terminate()));
    vi.resetAllMocks();
  });

  function createPool(size = 2) {
    const pool = createParserPool(size);
    pools.push(pool);
    return pool;
  }

  it('bounds concurrency, queues work and associates out-of-order results', async () => {
    const pool = createPool();
    expect(workers).toHaveLength(0);

    const results = Promise.all(['a.md', 'b.md', 'c.md'].map(pool.parse));
    expect(workers).toHaveLength(2);
    expect(workers[0].postMessage.mock.calls).toEqual([['a.md']]);
    expect(workers[1].postMessage.mock.calls).toEqual([['b.md']]);

    workers[1].emit('message', { data: { id: 'b' } });
    expect(workers[1].postMessage.mock.calls).toEqual([['b.md'], ['c.md']]);
    workers[1].emit('message', { data: { id: 'c' } });
    workers[0].emit('message', { data: { id: 'a' } });

    await expect(results).resolves.toEqual([
      { id: 'a' },
      { id: 'b' },
      { id: 'c' }
    ]);
  });

  it('continues queued work after a parse error', async () => {
    const pool = createPool(1);
    const error = new Error('Invalid markdown');
    const failed = pool.parse('invalid.md').catch(error => error);
    const next = pool.parse('valid.md');

    workers[0].emit('message', { error });
    expect(workers[0].postMessage).toHaveBeenLastCalledWith('valid.md');
    workers[0].emit('message', { data: { id: 'valid' } });

    await expect(failed).resolves.toBe(error);
    await expect(next).resolves.toEqual({ id: 'valid' });
  });

  it.each([
    ['error', new Error('Worker crashed')],
    ['messageerror', new Error('Cannot deserialize result')],
    ['exit', 0],
    ['exit', 1]
  ])(
    'rejects all unfinished and future work on worker %s',
    async (event, value) => {
      const pool = createPool();
      const results = Promise.allSettled(
        ['a.md', 'b.md', 'c.md'].map(pool.parse)
      );
      workers[0].emit(event, value);

      expect(await results).toEqual([
        { status: 'rejected', reason: expect.any(Error) },
        { status: 'rejected', reason: expect.any(Error) },
        { status: 'rejected', reason: expect.any(Error) }
      ]);
      await expect(pool.parse('later.md')).rejects.toThrow();
      await pool.terminate();
      for (const worker of workers) {
        expect(worker.terminate).toHaveBeenCalledTimes(1);
      }
    }
  );

  it('terminates once and rejects both running and queued tasks', async () => {
    const pool = createPool(1);
    const results = Promise.allSettled(['a.md', 'b.md'].map(pool.parse));
    const termination = pool.terminate();

    expect(pool.terminate()).toBe(termination);
    await termination;
    expect(await results).toEqual([
      {
        status: 'rejected',
        reason: expect.objectContaining({
          message: 'Parser pool has been terminated'
        })
      },
      {
        status: 'rejected',
        reason: expect.objectContaining({
          message: 'Parser pool has been terminated'
        })
      }
    ]);
    await expect(pool.parse('later.md')).rejects.toThrow('terminated');
    expect(workers[0].terminate).toHaveBeenCalledTimes(1);
  });

  it('rejects queued work when a worker cannot start', async () => {
    const pool = createPool(1);
    Worker.mockImplementationOnce(() => {
      throw new Error('Cannot start worker');
    });

    await expect(pool.parse('a.md')).rejects.toThrow('Cannot start worker');
    await expect(pool.parse('b.md')).rejects.toThrow('Cannot start worker');
  });

  it('rejects unfinished work when posting a task fails', async () => {
    const pool = createPool(1);
    const first = pool.parse('a.md');
    const next = pool.parse('b.md').catch(error => error);
    workers[0].postMessage.mockImplementationOnce(() => {
      throw new Error('Cannot post task');
    });
    workers[0].emit('message', { data: { id: 'a' } });

    await expect(first).resolves.toEqual({ id: 'a' });
    await expect(next).resolves.toEqual(new Error('Cannot post task'));
  });

  it.each([0, -1, 1.5, Infinity, NaN])(
    'rejects invalid worker count %s',
    size => {
      expect(() => createPool(size)).toThrow(
        'maxWorkers must be a positive integer'
      );
    }
  );
});
