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

var _child_process;

function _load_child_process() {
  return _child_process = _interopRequireDefault(require('child_process'));
}

var _types;

function _load_types() {
  return _types = require('./types');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This class wraps the child process and provides a nice interface to
 * communicate with. It takes care of:
 *
 *  - Re-spawning the process if it dies.
 *  - Queues calls while the worker is busy.
 *  - Re-sends the requests if the worker blew up.
 *
 * The reason for queueing them here (since childProcess.send also has an
 * internal queue) is because the worker could be doing asynchronous work, and
 * this would lead to the child process to read its receiving buffer and start a
 * second call. By queueing calls here, we don't send the next call to the
 * children until we receive the result of the previous one.
 *
 * As soon as a request starts to be processed by a worker, its "processed"
 * field is changed to "true", so that other workers which might encounter the
 * same call skip it.
 */
exports.default = class {

  constructor(options) {
    this._options = options;
    this._queue = [];

    this._initialize();
  }

  getStdout() {
    return this._child.stdout;
  }

  getStderr() {
    return this._child.stderr;
  }

  send(request, callback) {
    this._queue.push({ callback, request });
    this._process();
  }

  _initialize() {
    const child = (_child_process || _load_child_process()).default.fork(require.resolve('./child'),
    // $FlowFixMe: Flow does not work well with Object.assign.
    Object.assign({
      cwd: process.cwd(),
      env: Object.assign({}, process.env, {
        JEST_WORKER_ID: this._options.workerId
      }),
      // suppress --debug / --inspect flags while preserving others (like --harmony)
      execArgv: process.execArgv.filter(v => !/^--(debug|inspect)/.test(v)),
      silent: true
    }, this._options.forkOptions));

    child.on('message', this._receive.bind(this));
    child.on('exit', this._exit.bind(this));

    // $FlowFixMe: wrong "ChildProcess.send" signature.
    child.send([(_types || _load_types()).CHILD_MESSAGE_INITIALIZE, false, this._options.workerPath]);

    this._retries++;
    this._child = child;
    this._busy = false;

    // If we exceeded the amount of retries, we will emulate an error reply
    // coming from the child. This avoids code duplication related with cleaning
    // the queue, and scheduling the next call.
    if (this._retries > this._options.maxRetries) {
      const error = new Error('Call retries were exceeded');

      this._receive([(_types || _load_types()).PARENT_MESSAGE_ERROR, error.name, error.message, error.stack, { type: 'WorkerError' }]);
    }
  }

  _process() {
    if (this._busy) {
      return;
    }

    const queue = this._queue;
    let skip = 0;

    // Calls in the queue might have already been processed by another worker,
    // so we have to skip them.
    while (queue.length > skip && queue[skip].request[1]) {
      skip++;
    }

    // Remove all pieces at once.
    queue.splice(0, skip);

    if (queue.length) {
      const call = queue[0];

      // Flag the call as processed, so that other workers know that they don't
      // have to process it as well.
      call.request[1] = true;

      this._retries = 0;
      this._busy = true;

      // $FlowFixMe: wrong "ChildProcess.send" signature.
      this._child.send(call.request);
    }
  }

  _receive(response /* Should be ParentMessage */) {
    const callback = this._queue[0].callback;

    this._busy = false;
    this._process();

    switch (response[0]) {
      case (_types || _load_types()).PARENT_MESSAGE_OK:
        callback.call(this, null, response[1]);
        break;

      case (_types || _load_types()).PARENT_MESSAGE_ERROR:
        let error = response[4];

        if (error != null && typeof error === 'object') {
          const extra = error;
          const NativeCtor = global[response[1]];
          const Ctor = typeof NativeCtor === 'function' ? NativeCtor : Error;

          error = new Ctor(response[2]);
          // $FlowFixMe: adding custom properties to errors.
          error.type = response[1];
          error.stack = response[3];

          for (const key in extra) {
            // $FlowFixMe: adding custom properties to errors.
            error[key] = extra[key];
          }
        }

        callback.call(this, error, null);
        break;

      default:
        throw new TypeError('Unexpected response from worker: ' + response[0]);
    }
  }

  _exit(exitCode) {
    if (exitCode !== 0) {
      this._initialize();
    }
  }
};