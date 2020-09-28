/* global expect, jest */

import createWorker from './worker-executor';

function mockWorker({ init, postMessage, terminate } = {}) {
  global.Worker = jest.fn(function() {
    setImmediate(
      (init && init(this)) ||
        (() =>
          this.onmessage && this.onmessage({ data: { type: 'contentLoaded' } }))
    );
    this.onmessage = null;
    this.postMessage =
      postMessage ||
      function(data) {
        setImmediate(
          () => this.onmessage && this.onmessage({ data: `${data} processed` })
        );
      };
    this.terminate = terminate || (() => {});
    return this;
  });
}

afterEach(() => {
  delete global.Worker;
});

it('Worker executor should successfully execute one task', async () => {
  const terminateHandler = jest.fn();
  mockWorker({ terminate: terminateHandler });
  const testWorker = createWorker('test');
  expect(testWorker).not.toBeUndefined();

  const task = testWorker.execute('test');
  expect(task).not.toBeUndefined();
  expect(task.done).not.toBeUndefined();
  const handler = jest.fn();
  task.on('done', handler);
  const errorHandler = jest.fn();
  task.on('error', errorHandler);

  await expect(task.done).resolves.toBe('test processed');

  expect(handler).toBeCalledTimes(1);
  expect(handler).toBeCalledWith('test processed');

  expect(errorHandler).not.toBeCalled();
  expect(terminateHandler).not.toBeCalled();

  expect(global.Worker).toBeCalledTimes(1);
  expect(global.Worker).toBeCalledWith('/js/test.js');
});

// eslint-disable-next-line max-len
it('Worker executor should successfully execute two tasks in parallel', async () => {
  const terminateHandler = jest.fn();
  mockWorker({ terminate: terminateHandler });
  const testWorker = createWorker('test');

  const task1 = testWorker.execute('test1');
  const handler1 = jest.fn();
  task1.on('done', handler1);
  const errorHandler1 = jest.fn();
  task1.on('error', errorHandler1);

  const task2 = testWorker.execute('test2');
  const handler2 = jest.fn();
  task2.on('done', handler2);
  const errorHandler2 = jest.fn();
  task2.on('error', errorHandler2);

  await expect(Promise.all([task1.done, task2.done])).resolves.toEqual([
    'test1 processed',
    'test2 processed'
  ]);

  expect(handler1).toBeCalledTimes(1);
  expect(handler1).toBeCalledWith('test1 processed');
  expect(errorHandler1).not.toBeCalled();

  expect(handler2).toBeCalledTimes(1);
  expect(handler2).toBeCalledWith('test2 processed');
  expect(errorHandler2).not.toBeCalled();
  expect(terminateHandler).not.toBeCalled();

  expect(global.Worker).toBeCalledTimes(2);
});

// eslint-disable-next-line max-len
it('Worker executor should successfully execute 3 tasks in parallel and use two workers', async () => {
  mockWorker();
  const testWorker = createWorker('test');

  const task1 = testWorker.execute('test1');
  const task2 = testWorker.execute('test2');
  const task3 = testWorker.execute('test3');
  await expect(
    Promise.all([task1.done, task2.done, task3.done])
  ).resolves.toEqual(['test1 processed', 'test2 processed', 'test3 processed']);

  expect(global.Worker).toBeCalledTimes(2);
});

// eslint-disable-next-line max-len
it('Worker executor should successfully execute 3 tasks, use 3 workers and terminate each worker', async () => {
  const terminateHandler = jest.fn();
  mockWorker({ terminate: terminateHandler });
  const testWorker = createWorker('test', { terminateWorker: true });

  const task1 = testWorker.execute('test1');
  const task2 = testWorker.execute('test2');
  const task3 = testWorker.execute('test3');
  await expect(
    Promise.all([task1.done, task2.done, task3.done])
  ).resolves.toEqual(['test1 processed', 'test2 processed', 'test3 processed']);

  expect(terminateHandler).toBeCalledTimes(3);
  expect(global.Worker).toBeCalledTimes(3);
});

// eslint-disable-next-line max-len
it('Worker executor should successfully execute 3 tasks in parallel and use 3 workers', async () => {
  mockWorker();
  const testWorker = createWorker('test', { concurrency: 3 });

  const task1 = testWorker.execute('test1');
  const task2 = testWorker.execute('test2');
  const task3 = testWorker.execute('test3');
  await expect(
    Promise.all([task1.done, task2.done, task3.done])
  ).resolves.toEqual(['test1 processed', 'test2 processed', 'test3 processed']);

  expect(global.Worker).toBeCalledTimes(3);
});

// eslint-disable-next-line max-len
it('Worker executor should successfully execute 3 tasks and use 1 worker', async () => {
  mockWorker();
  const testWorker = createWorker('test', { concurrency: 1 });

  const task1 = testWorker.execute('test1');
  const task2 = testWorker.execute('test2');
  const task3 = testWorker.execute('test3');
  await expect(
    Promise.all([task1.done, task2.done, task3.done])
  ).resolves.toEqual(['test1 processed', 'test2 processed', 'test3 processed']);

  expect(global.Worker).toBeCalledTimes(1);
});

it('Worker executor should reject task', async () => {
  const error = { message: 'Error on init worker' };
  mockWorker({
    init: () => {
      throw error;
    }
  });
  const testWorker = createWorker('test');

  const task = testWorker.execute('test');
  const errorHandler = jest.fn();
  task.on('error', errorHandler);
  await expect(task.done).rejects.toBe(error.message);

  expect(errorHandler).toBeCalledTimes(1);
  expect(errorHandler).toBeCalledWith(error);
});

it('Worker executor should emit LOG events', async () => {
  mockWorker({
    postMessage: function(data) {
      setImmediate(() => {
        for (let i = 0; i < 3; i++) {
          // eslint-disable-next-line no-unused-expressions
          this.onmessage && this.onmessage({ data: { type: 'LOG', data: i } });
        }
        // eslint-disable-next-line no-unused-expressions
        this.onmessage && this.onmessage({ data: `${data} processed` });
        setImmediate(
          () =>
            this.onmessage && this.onmessage({ data: { type: 'LOG', data: 3 } })
        );
      });
    }
  });
  const testWorker = createWorker('test');

  const task = testWorker.execute('test');
  const handler = jest.fn();
  task.on('done', handler);
  const errorHandler = jest.fn();
  task.on('error', errorHandler);
  const logHandler = jest.fn();
  task.on('LOG', logHandler);

  await expect(task.done).resolves.toBe('test processed');

  expect(handler).toBeCalledTimes(1);
  expect(handler).toBeCalledWith('test processed');
  expect(errorHandler).not.toBeCalled();

  expect(logHandler).toBeCalledTimes(3);
  for (let i = 0; i < 3; i++) {
    expect(logHandler.mock.calls[i][0]).toBe(i);
  }
});

it('Worker executor should reject task on timeout', async () => {
  const terminateHandler = jest.fn();
  mockWorker({
    postMessage: () => {},
    terminate: terminateHandler
  });
  const testWorker = createWorker('test');

  const task = testWorker.execute('test', 0);
  const errorHandler = jest.fn();
  task.on('error', errorHandler);
  await expect(task.done).rejects.toBe('timeout');

  expect(errorHandler).toBeCalledTimes(1);
  expect(errorHandler.mock.calls[0][0]).toEqual({ message: 'timeout' });

  expect(terminateHandler).toBeCalledTimes(1);
});

it('Worker executor should get worker from specified location', async () => {
  mockWorker();
  const testWorker = createWorker('test', { location: '/other/location/' });

  const task = testWorker.execute('test');
  await expect(task.done).resolves.toBe('test processed');

  expect(global.Worker).toBeCalledTimes(1);
  expect(global.Worker).toBeCalledWith('/other/location/test.js');
});
