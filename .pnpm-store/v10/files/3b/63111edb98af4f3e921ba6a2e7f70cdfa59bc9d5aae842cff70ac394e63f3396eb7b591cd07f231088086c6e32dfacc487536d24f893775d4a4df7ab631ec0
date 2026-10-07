'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _BaseWorkerPool = _interopRequireDefault(require('./base/BaseWorkerPool'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const canUseWorkerThreads = () => {
  try {
    require('worker_threads');

    return true;
  } catch {
    return false;
  }
};

class WorkerPool extends _BaseWorkerPool.default {
  send(workerId, request, onStart, onEnd, onCustomMessage) {
    this.getWorkerById(workerId).send(request, onStart, onEnd, onCustomMessage);
  }

  createWorker(workerOptions) {
    let Worker;

    if (this._options.enableWorkerThreads && canUseWorkerThreads()) {
      Worker = require('./workers/NodeThreadsWorker').default;
    } else {
      Worker = require('./workers/ChildProcessWorker').default;
    }

    return new Worker(workerOptions);
  }
}

var _default = WorkerPool;
exports.default = _default;
