// @flow strict-local

import {makeDeferredWithPromise, type Deferred} from './Deferred';

type PromiseQueueOpts = {|maxConcurrent: number|};

export default class PromiseQueue<T> {
  _deferred: ?Deferred<Array<T>>;
  _maxConcurrent: number;
  _numRunning: number = 0;
  _queue: Array<() => Promise<void>> = [];
  _runPromise: ?Promise<Array<T>> = null;
  _error: mixed;
  _count: number = 0;
  _results: Array<T> = [];

  constructor(opts: PromiseQueueOpts = {maxConcurrent: Infinity}) {
    if (opts.maxConcurrent <= 0) {
      throw new TypeError('maxConcurrent must be a positive, non-zero value');
    }

    this._maxConcurrent = opts.maxConcurrent;
  }

  getNumWaiting(): number {
    return this._queue.length;
  }

  add(fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      let i = this._count++;
      let wrapped = () =>
        fn().then(
          result => {
            this._results[i] = result;
            resolve(result);
          },
          err => {
            reject(err);
            throw err;
          },
        );

      this._queue.push(wrapped);

      if (this._numRunning > 0 && this._numRunning < this._maxConcurrent) {
        this._next();
      }
    });
  }

  run(): Promise<Array<T>> {
    if (this._runPromise != null) {
      return this._runPromise;
    }

    if (this._queue.length === 0) {
      return Promise.resolve([]);
    }

    let {deferred, promise} = makeDeferredWithPromise();
    this._deferred = deferred;
    this._runPromise = promise;

    while (this._queue.length && this._numRunning < this._maxConcurrent) {
      this._next();
    }

    return promise;
  }

  async _next(): Promise<void> {
    let fn = this._queue.shift();
    await this._runFn(fn);
    if (this._queue.length) {
      this._next();
    } else if (this._numRunning === 0) {
      this._done();
    }
  }

  async _runFn(fn: () => mixed): Promise<void> {
    this._numRunning++;
    try {
      await fn();
    } catch (e) {
      // Only store the first error that occurs.
      // We don't reject immediately so that any other concurrent
      // requests have time to complete.
      if (this._error == null) {
        this._error = e;
      }
    } finally {
      this._numRunning--;
    }
  }

  _resetState(): void {
    this._queue = [];
    this._count = 0;
    this._results = [];
    this._runPromise = null;
    this._numRunning = 0;
    this._deferred = null;
  }

  _done(): void {
    if (this._deferred != null) {
      if (this._error != null) {
        this._deferred.reject(this._error);
      } else {
        this._deferred.resolve(this._results);
      }
    }

    this._resetState();
  }
}
