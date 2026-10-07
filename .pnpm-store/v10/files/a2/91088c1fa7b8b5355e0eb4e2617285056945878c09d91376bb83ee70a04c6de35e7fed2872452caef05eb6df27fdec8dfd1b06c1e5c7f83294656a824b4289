// @flow
import assert from 'assert';
import randomInt from 'random-int';

import PromiseQueue from '../src/PromiseQueue';

describe('PromiseQueue', () => {
  it('run() should resolve when all async functions in queue have completed', async () => {
    let queue = new PromiseQueue();

    let someBooleanToBeChanged = false;
    queue.add(() =>
      Promise.resolve().then(() => {
        someBooleanToBeChanged = true;
      }),
    );
    await queue.run();
    assert(someBooleanToBeChanged);
  });

  it('run() should reject if any of the async functions in the queue failed', async () => {
    let error = new Error('some failure');
    try {
      let queue = new PromiseQueue();
      queue
        .add(() => Promise.reject(error))
        .catch(
          /* catch this to prevent an unhandled promise rejection*/ () => {},
        );
      await queue.run();
    } catch (e) {
      assert.equal(e, error);
    }
  });

  it('.run() should instantly resolve when the queue is empty', async () => {
    let queue = new PromiseQueue();
    await queue.run();
    // no need to assert, test will hang or throw an error if condition fails
  });

  it(".add() should resolve with the same result when the passed in function's promise resolves", async () => {
    let queue = new PromiseQueue();
    let promise = queue.add(() => Promise.resolve(42));
    await queue.run();
    let result = await promise;
    assert.equal(result, 42);
  });

  it(".add() should reject with the same error when the passed in function's promise rejects", async () => {
    let queue = new PromiseQueue();
    let error = new Error('Oh no!');
    let promise = queue.add(() => Promise.reject(error));
    await queue.run().catch(() => null);
    await promise.then(null, e => assert.equal(e, error));
  });

  it('constructor() should allow for configuration of max concurrent running functions', async () => {
    const maxConcurrent = 5;
    const queue = new PromiseQueue({maxConcurrent});
    let running = 0;

    new Array(100).fill(0).map(() =>
      queue.add(async () => {
        running++;
        assert(queue._numRunning === running);
        assert(running <= maxConcurrent);
        await Promise.resolve(randomInt(1, 10)); //sleep(randomInt(1, 10));
        running--;
      }),
    );

    await queue.run();
  });
});
