'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

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

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * First-in, First-out task queue that manages a dedicated pool
 * for each worker as well as a shared queue. The FIFO ordering is guaranteed
 * across the worker specific and shared queue.
 */
class FifoQueue {
  constructor() {
    _defineProperty(this, '_workerQueues', []);

    _defineProperty(this, '_sharedQueue', new InternalQueue());
  }

  enqueue(task, workerId) {
    if (workerId == null) {
      this._sharedQueue.enqueue(task);

      return;
    }

    let workerQueue = this._workerQueues[workerId];

    if (workerQueue == null) {
      workerQueue = this._workerQueues[workerId] = new InternalQueue();
    }

    const sharedTop = this._sharedQueue.peekLast();

    const item = {
      previousSharedTask: sharedTop,
      task
    };
    workerQueue.enqueue(item);
  }

  dequeue(workerId) {
    var _this$_workerQueues$w, _workerTop$previousSh, _workerTop$previousSh2;

    const workerTop =
      (_this$_workerQueues$w = this._workerQueues[workerId]) === null ||
      _this$_workerQueues$w === void 0
        ? void 0
        : _this$_workerQueues$w.peek();
    const sharedTaskIsProcessed =
      (_workerTop$previousSh =
        workerTop === null || workerTop === void 0
          ? void 0
          : (_workerTop$previousSh2 = workerTop.previousSharedTask) === null ||
            _workerTop$previousSh2 === void 0
          ? void 0
          : _workerTop$previousSh2.request[1]) !== null &&
      _workerTop$previousSh !== void 0
        ? _workerTop$previousSh
        : true; // Process the top task from the shared queue if
    // - there's no task in the worker specific queue or
    // - if the non-worker-specific task after which this worker specifif task
    //   hasn been queued wasn't processed yet

    if (workerTop != null && sharedTaskIsProcessed) {
      var _this$_workerQueues$w2,
        _this$_workerQueues$w3,
        _this$_workerQueues$w4;

      return (_this$_workerQueues$w2 =
        (_this$_workerQueues$w3 = this._workerQueues[workerId]) === null ||
        _this$_workerQueues$w3 === void 0
          ? void 0
          : (_this$_workerQueues$w4 = _this$_workerQueues$w3.dequeue()) ===
              null || _this$_workerQueues$w4 === void 0
          ? void 0
          : _this$_workerQueues$w4.task) !== null &&
        _this$_workerQueues$w2 !== void 0
        ? _this$_workerQueues$w2
        : null;
    }

    return this._sharedQueue.dequeue();
  }
}

exports.default = FifoQueue;

/**
 * FIFO queue for a single worker / shared queue.
 */
class InternalQueue {
  constructor() {
    _defineProperty(this, '_head', null);

    _defineProperty(this, '_last', null);
  }

  enqueue(value) {
    const item = {
      next: null,
      value
    };

    if (this._last == null) {
      this._head = item;
    } else {
      this._last.next = item;
    }

    this._last = item;
  }

  dequeue() {
    if (this._head == null) {
      return null;
    }

    const item = this._head;
    this._head = item.next;

    if (this._head == null) {
      this._last = null;
    }

    return item.value;
  }

  peek() {
    var _this$_head$value, _this$_head;

    return (_this$_head$value =
      (_this$_head = this._head) === null || _this$_head === void 0
        ? void 0
        : _this$_head.value) !== null && _this$_head$value !== void 0
      ? _this$_head$value
      : null;
  }

  peekLast() {
    var _this$_last$value, _this$_last;

    return (_this$_last$value =
      (_this$_last = this._last) === null || _this$_last === void 0
        ? void 0
        : _this$_last.value) !== null && _this$_last$value !== void 0
      ? _this$_last$value
      : null;
  }
}
