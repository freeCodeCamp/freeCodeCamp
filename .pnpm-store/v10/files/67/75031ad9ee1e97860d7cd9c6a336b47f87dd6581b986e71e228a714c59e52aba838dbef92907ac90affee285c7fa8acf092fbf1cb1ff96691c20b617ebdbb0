'use strict';

module.exports = class Queue {
  _queue = [];
  _executing = false;
  _jobRunner = null;

  constructor(jobRunner) {
    this._jobRunner = jobRunner;
  }

  enqueue = (...args) => {
    this._queue.push(args);
    this._dequeue();
  };

  destroy() {
    this._queue.length = 0;
    this._jobRunner = null;
  }

  _dequeue() {
    if (this._executing || !this._queue.length) return;
    this._executing = true;

    this._jobRunner(...this._queue.shift());

    setTimeout(() => {
      this._executing = false;
      this._dequeue();
    });
  }
};
