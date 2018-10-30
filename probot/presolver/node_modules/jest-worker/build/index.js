/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeStream;

function _load_mergeStream() {
  return _mergeStream = _interopRequireDefault(require('merge-stream'));
}

var _os;

function _load_os() {
  return _os = _interopRequireDefault(require('os'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _types;

function _load_types() {
  return _types = require('./types');
}

var _worker;

function _load_worker() {
  return _worker = _interopRequireDefault(require('./worker'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
const emptyMethod = () => {};

/**
 * The Jest farm (publicly called "Worker") is a class that allows you to queue
 * methods across multiple child processes, in order to parallelize work. This
 * is done by providing an absolute path to a module that will be loaded on each
 * of the child processes, and bridged to the main process.
 *
 * Bridged methods are specified by using the "exposedMethods" property of the
 * options "object". This is an array of strings, where each of them corresponds
 * to the exported name in the loaded module.
 *
 * You can also control the amount of workers by using the "numWorkers" property
 * of the "options" object, and the settings passed to fork the process through
 * the "forkOptions" property. The amount of workers defaults to the amount of
 * CPUS minus one.
 *
 * Queueing calls can be done in two ways:
 *   - Standard method: calls will be redirected to the first available worker,
 *     so they will get executed as soon as they can.
 *
 *   - Sticky method: if a "computeWorkerKey" method is provided within the
 *   config, the resulting string of this method will be used as a key.
 *   Everytime this key is returned, it is guaranteed that your job will be
 *   processed by the same worker. This is specially useful if your workers are
 *   caching results.
 */
exports.default = class {

  constructor(workerPath) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    const numWorkers = options.numWorkers || (_os || _load_os()).default.cpus().length - 1;
    const workers = new Array(numWorkers);
    const stdout = (0, (_mergeStream || _load_mergeStream()).default)();
    const stderr = (0, (_mergeStream || _load_mergeStream()).default)();

    if (!(_path || _load_path()).default.isAbsolute(workerPath)) {
      workerPath = require.resolve(workerPath);
    }

    const sharedWorkerOptions = {
      forkOptions: options.forkOptions || {},
      maxRetries: options.maxRetries || 3,
      workerPath
    };

    for (let i = 0; i < numWorkers; i++) {
      const workerOptions = Object.assign({}, sharedWorkerOptions, {
        workerId: i + 1
      });
      const worker = new (_worker || _load_worker()).default(workerOptions);
      const workerStdout = worker.getStdout();
      const workerStderr = worker.getStderr();

      if (workerStdout) {
        stdout.add(workerStdout);
      }

      if (workerStderr) {
        stderr.add(workerStderr);
      }

      workers[i] = worker;
    }

    let exposedMethods = options.exposedMethods;

    // If no methods list is given, try getting it by auto-requiring the module.
    if (!exposedMethods) {
      // $FlowFixMe: This has to be a dynamic require.
      const child = require(workerPath);

      exposedMethods = Object.keys(child).filter(name => typeof child[name] === 'function');

      if (typeof child === 'function') {
        exposedMethods.push('default');
      }
    }

    exposedMethods.forEach(name => {
      if (name.startsWith('_')) {
        return;
      }

      if (this.constructor.prototype.hasOwnProperty(name)) {
        throw new TypeError('Cannot define a method called ' + name);
      }

      // $FlowFixMe: dynamic extension of the class instance is expected.
      this[name] = this._makeCall.bind(this, name);
    });

    this._stdout = stdout;
    this._stderr = stderr;
    this._ending = false;
    this._cacheKeys = Object.create(null);
    this._options = options;
    this._workers = workers;
    this._offset = 0;
  }

  getStdout() {
    return this._stdout;
  }

  getStderr() {
    return this._stderr;
  }

  end() {
    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    const workers = this._workers;

    // We do not cache the request object here. If so, it would only be only
    // processed by one of the workers, and we want them all to close.
    for (let i = 0; i < workers.length; i++) {
      workers[i].send([(_types || _load_types()).CHILD_MESSAGE_END, false], emptyMethod);
    }

    this._ending = true;
  }

  // eslint-disable-next-line no-unclear-flowtypes
  _makeCall(method) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    return new Promise((resolve, reject) => {
      const computeWorkerKey = this._options.computeWorkerKey;

      const workers = this._workers;
      const length = workers.length;
      const cacheKeys = this._cacheKeys;
      const request = [(_types || _load_types()).CHILD_MESSAGE_CALL, false, method, args];

      let worker = null;
      let hash = null;

      if (computeWorkerKey) {
        hash = computeWorkerKey.apply(this, [method].concat(args));
        worker = hash == null ? null : cacheKeys[hash];
      }

      // Do not use a fat arrow since we need the "this" value, which points to
      // the worker that executed the call.
      function callback(error, result) {
        if (hash != null) {
          cacheKeys[hash] = this;
        }

        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }

      // If a worker is pre-selected, use it...
      if (worker) {
        worker.send(request, callback);
        return;
      }

      // ... otherwise use all workers, so the first one available will pick it.
      for (let i = 0; i < length; i++) {
        workers[(i + this._offset) % length].send(request, callback);
      }

      this._offset++;
    });
  }
};