/**
 * A wrapper around a third-party child process worker pool implementation.
 * Used by {@link module:buffered-runner}.
 * @private
 * @module buffered-worker-pool
 */

'use strict';

const serializeJavascript = require('serialize-javascript');
const workerpool = require('workerpool');
const {deserialize} = require('./serializer');
const debug = require('debug')('mocha:parallel:buffered-worker-pool');
const {createInvalidArgumentTypeError} = require('../errors');

const WORKER_PATH = require.resolve('./worker.js');

/**
 * A mapping of Mocha `Options` objects to serialized values.
 *
 * This is helpful because we tend to same the same options over and over
 * over IPC.
 * @type {WeakMap<Options,string>}
 */
let optionsCache = new WeakMap();

/**
 * These options are passed into the [workerpool](https://npm.im/workerpool) module.
 * @type {Partial<WorkerPoolOptions>}
 */
const WORKER_POOL_DEFAULT_OPTS = {
  // use child processes, not worker threads!
  workerType: 'process',
  // ensure the same flags sent to `node` for this `mocha` invocation are passed
  // along to children
  forkOpts: {execArgv: process.execArgv},
  maxWorkers: workerpool.cpus - 1
};

/**
 * A wrapper around a third-party worker pool implementation.
 * @private
 */
class BufferedWorkerPool {
  /**
   * Creates an underlying worker pool instance; determines max worker count
   * @param {Partial<WorkerPoolOptions>} [opts] - Options
   */
  constructor(opts = {}) {
    const maxWorkers = Math.max(
      1,
      typeof opts.maxWorkers === 'undefined'
        ? WORKER_POOL_DEFAULT_OPTS.maxWorkers
        : opts.maxWorkers
    );

    /* istanbul ignore next */
    if (workerpool.cpus < 2) {
      // TODO: decide whether we should warn
      debug(
        'not enough CPU cores available to run multiple jobs; avoid --parallel on this machine'
      );
    } else if (maxWorkers >= workerpool.cpus) {
      // TODO: decide whether we should warn
      debug(
        '%d concurrent job(s) requested, but only %d core(s) available',
        maxWorkers,
        workerpool.cpus
      );
    }
    /* istanbul ignore next */
    debug(
      'run(): starting worker pool of max size %d, using node args: %s',
      maxWorkers,
      process.execArgv.join(' ')
    );

    let counter = 0;
    const onCreateWorker = ({forkOpts}) => {
      return {
        forkOpts: {
          ...forkOpts,
          // adds an incremental id to all workers, which can be useful to allocate resources for each process
          env: {...process.env, MOCHA_WORKER_ID: counter++}
        }
      };
    };

    this.options = {
      ...WORKER_POOL_DEFAULT_OPTS,
      ...opts,
      maxWorkers,
      onCreateWorker
    };
    this._pool = workerpool.pool(WORKER_PATH, this.options);
  }

  /**
   * Terminates all workers in the pool.
   * @param {boolean} [force] - Whether to force-kill workers. By default, lets workers finish their current task before termination.
   * @private
   * @returns {Promise<void>}
   */
  async terminate(force = false) {
    /* istanbul ignore next */
    debug('terminate(): terminating with force = %s', force);
    return this._pool.terminate(force);
  }

  /**
   * Adds a test file run to the worker pool queue for execution by a worker process.
   *
   * Handles serialization/deserialization.
   *
   * @param {string} filepath - Filepath of test
   * @param {Options} [options] - Options for Mocha instance
   * @private
   * @returns {Promise<SerializedWorkerResult>}
   */
  async run(filepath, options = {}) {
    if (!filepath || typeof filepath !== 'string') {
      throw createInvalidArgumentTypeError(
        'Expected a non-empty filepath',
        'filepath',
        'string'
      );
    }
    const serializedOptions = BufferedWorkerPool.serializeOptions(options);
    const result = await this._pool.exec('run', [filepath, serializedOptions]);
    return deserialize(result);
  }

  /**
   * Returns stats about the state of the worker processes in the pool.
   *
   * Used for debugging.
   *
   * @private
   */
  stats() {
    return this._pool.stats();
  }

  /**
   * Instantiates a {@link WorkerPool}.
   * @private
   */
  static create(...args) {
    return new BufferedWorkerPool(...args);
  }

  /**
   * Given Mocha options object `opts`, serialize into a format suitable for
   * transmission over IPC.
   *
   * @param {Options} [opts] - Mocha options
   * @private
   * @returns {string} Serialized options
   */
  static serializeOptions(opts = {}) {
    if (!optionsCache.has(opts)) {
      const serialized = serializeJavascript(opts, {
        unsafe: true, // this means we don't care about XSS
        ignoreFunction: true // do not serialize functions
      });
      optionsCache.set(opts, serialized);
      /* istanbul ignore next */
      debug(
        'serializeOptions(): serialized options %O to: %s',
        opts,
        serialized
      );
    }
    return optionsCache.get(opts);
  }

  /**
   * Resets internal cache of serialized options objects.
   *
   * For testing/debugging
   * @private
   */
  static resetOptionsCache() {
    optionsCache = new WeakMap();
  }
}

exports.BufferedWorkerPool = BufferedWorkerPool;
