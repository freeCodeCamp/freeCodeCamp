"use strict";

exports.__esModule = true;
exports.default = void 0;
class Batcher {
  queue = [];
  callbacks = [];
  bulkCallbacks = [];
  constructor(threshold) {
    this.threshold = threshold;
  }

  /** Add a call to the batcher */
  add(...args) {
    this.queue.push(args);
    if (this.queue.length >= this.threshold) {
      this.flush();
    }
  }

  /** Call all of our callbacks and clear out the queue */
  flush() {
    // call each callback for each item in the queue
    this.queue.forEach(args => this.callbacks.forEach(callback => callback(...args)));

    // pass the entire queue to all bulk callbacks
    this.bulkCallbacks.forEach(callback => {
      callback(this.queue);
    });

    // clear out the queue
    this.queue = [];
  }

  /** Sets up a callback for each batcher item */
  call(callback) {
    this.callbacks.push(callback);
  }

  /** Sets up a bulk callback that takes the entire queue */
  bulkCall(callback) {
    this.bulkCallbacks.push(callback);
  }
}
exports.default = Batcher;
//# sourceMappingURL=batcher.js.map