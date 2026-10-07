'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function path() {
  const data = _interopRequireWildcard(require('path'));

  path = function () {
    return data;
  };

  return data;
}

function _mergeStream() {
  const data = _interopRequireDefault(require('merge-stream'));

  _mergeStream = function () {
    return data;
  };

  return data;
}

function _types() {
  const data = require('../types');

  _types = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// How long to wait for the child process to terminate
// after CHILD_MESSAGE_END before sending force exiting.
const FORCE_EXIT_DELAY = 500;
/* istanbul ignore next */

const emptyMethod = () => {};

class BaseWorkerPool {
  constructor(workerPath, options) {
    _defineProperty(this, '_stderr', void 0);

    _defineProperty(this, '_stdout', void 0);

    _defineProperty(this, '_options', void 0);

    _defineProperty(this, '_workers', void 0);

    this._options = options;
    this._workers = new Array(options.numWorkers);

    if (!path().isAbsolute(workerPath)) {
      workerPath = require.resolve(workerPath);
    }

    const stdout = (0, _mergeStream().default)();
    const stderr = (0, _mergeStream().default)();
    const {forkOptions, maxRetries, resourceLimits, setupArgs} = options;

    for (let i = 0; i < options.numWorkers; i++) {
      const workerOptions = {
        forkOptions,
        maxRetries,
        resourceLimits,
        setupArgs,
        workerId: i,
        workerPath
      };
      const worker = this.createWorker(workerOptions);
      const workerStdout = worker.getStdout();
      const workerStderr = worker.getStderr();

      if (workerStdout) {
        stdout.add(workerStdout);
      }

      if (workerStderr) {
        stderr.add(workerStderr);
      }

      this._workers[i] = worker;
    }

    this._stdout = stdout;
    this._stderr = stderr;
  }

  getStderr() {
    return this._stderr;
  }

  getStdout() {
    return this._stdout;
  }

  getWorkers() {
    return this._workers;
  }

  getWorkerById(workerId) {
    return this._workers[workerId];
  }

  createWorker(_workerOptions) {
    throw Error('Missing method createWorker in WorkerPool');
  }

  async end() {
    // We do not cache the request object here. If so, it would only be only
    // processed by one of the workers, and we want them all to close.
    const workerExitPromises = this._workers.map(async worker => {
      worker.send(
        [_types().CHILD_MESSAGE_END, false],
        emptyMethod,
        emptyMethod,
        emptyMethod
      ); // Schedule a force exit in case worker fails to exit gracefully so
      // await worker.waitForExit() never takes longer than FORCE_EXIT_DELAY

      let forceExited = false;
      const forceExitTimeout = setTimeout(() => {
        worker.forceExit();
        forceExited = true;
      }, FORCE_EXIT_DELAY);
      await worker.waitForExit(); // Worker ideally exited gracefully, don't send force exit then

      clearTimeout(forceExitTimeout);
      return forceExited;
    });

    const workerExits = await Promise.all(workerExitPromises);
    return workerExits.reduce(
      (result, forceExited) => ({
        forceExited: result.forceExited || forceExited
      }),
      {
        forceExited: false
      }
    );
  }
}

exports.default = BaseWorkerPool;
