import { type EventEmitter } from 'events';

import { type Abortable } from '../../mongo_types';
import { type TimeoutContext } from '../../timeout';
import { addAbortListener, kDispose, List, promiseWithResolvers } from '../../utils';

/**
 * @internal
 * An object holding references to a promise's resolve and reject functions.
 */
type PendingPromises = Omit<
  ReturnType<typeof promiseWithResolvers<IteratorResult<Buffer>>>,
  'promise'
>;

/**
 * onData is adapted from Node.js' events.on helper
 * https://nodejs.org/api/events.html#eventsonemitter-eventname-options
 *
 * Returns an AsyncIterator that iterates each 'data' event emitted from emitter.
 * It will reject upon an error event.
 */
export function onData(
  emitter: EventEmitter,
  { timeoutContext, signal }: { timeoutContext?: TimeoutContext } & Abortable
) {
  signal?.throwIfAborted();

  // Setup pending events and pending promise lists
  /**
   * When the caller has not yet called .next(), we store the
   * value from the event in this list. Next time they call .next()
   * we pull the first value out of this list and resolve a promise with it.
   */
  const unconsumedEvents = new List<Buffer>();
  /**
   * When there has not yet been an event, a new promise will be created
   * and implicitly stored in this list. When an event occurs we take the first
   * promise in this list and resolve it.
   */
  const unconsumedPromises = new List<PendingPromises>();

  /**
   * Stored an error created by an error event.
   * This error will turn into a rejection for the subsequent .next() call
   */
  let error: Error | null = null;

  /** Set to true only after event listeners have been removed. */
  let finished = false;

  const iterator: AsyncGenerator<Buffer> = {
    next() {
      // First, we consume all unread events
      const value = unconsumedEvents.shift();
      if (value != null) {
        return Promise.resolve({ value, done: false });
      }

      // Then we error, if an error happened
      // This happens one time if at all, because after 'error'
      // we stop listening
      if (error != null) {
        const p = Promise.reject(error);
        // Only the first element errors
        error = null;
        return p;
      }

      // If the iterator is finished, resolve to done
      if (finished) return closeHandler();

      // Wait until an event happens
      const { promise, resolve, reject } = promiseWithResolvers<IteratorResult<Buffer>>();
      unconsumedPromises.push({ resolve, reject });
      return promise;
    },

    return() {
      return closeHandler();
    },

    throw(err: Error) {
      errorHandler(err);
      return Promise.resolve({ value: undefined, done: true });
    },

    [Symbol.asyncIterator]() {
      return this;
    },

    // Note this should currently not be used, but is required by the AsyncGenerator interface.
    async [Symbol.asyncDispose]() {
      await closeHandler();
    }
  };

  // Adding event handlers
  emitter.on('data', eventHandler);
  emitter.on('error', errorHandler);
  const abortListener = addAbortListener(signal, function () {
    errorHandler(this.reason);
  });

  const timeoutForSocketRead = timeoutContext?.timeoutForSocketRead;
  timeoutForSocketRead?.throwIfExpired();
  timeoutForSocketRead?.then(undefined, errorHandler);

  return iterator;

  function eventHandler(value: Buffer) {
    const promise = unconsumedPromises.shift();
    if (promise != null) promise.resolve({ value, done: false });
    else unconsumedEvents.push(value);
  }

  function errorHandler(err: Error) {
    const promise = unconsumedPromises.shift();

    if (promise != null) promise.reject(err);
    else error = err;
    void closeHandler();
  }

  function closeHandler() {
    // Adding event handlers
    emitter.off('data', eventHandler);
    emitter.off('error', errorHandler);
    abortListener?.[kDispose]();
    finished = true;
    timeoutForSocketRead?.clear();
    const doneResult = { value: undefined, done: finished } as const;

    for (const promise of unconsumedPromises) {
      promise.resolve(doneResult);
    }

    return Promise.resolve(doneResult);
  }
}
