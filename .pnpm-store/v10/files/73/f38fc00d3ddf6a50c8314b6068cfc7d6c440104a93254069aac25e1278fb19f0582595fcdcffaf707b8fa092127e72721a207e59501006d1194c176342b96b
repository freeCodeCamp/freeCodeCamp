'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _FifoQueue = _interopRequireDefault(require('./FifoQueue'));

var _types = require('./types');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
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

class Farm {
  constructor(_numOfWorkers, _callback, options = {}) {
    var _options$workerSchedu, _options$taskQueue;

    _defineProperty(this, '_computeWorkerKey', void 0);

    _defineProperty(this, '_workerSchedulingPolicy', void 0);

    _defineProperty(this, '_cacheKeys', Object.create(null));

    _defineProperty(this, '_locks', []);

    _defineProperty(this, '_offset', 0);

    _defineProperty(this, '_taskQueue', void 0);

    this._numOfWorkers = _numOfWorkers;
    this._callback = _callback;
    this._computeWorkerKey = options.computeWorkerKey;
    this._workerSchedulingPolicy =
      (_options$workerSchedu = options.workerSchedulingPolicy) !== null &&
      _options$workerSchedu !== void 0
        ? _options$workerSchedu
        : 'round-robin';
    this._taskQueue =
      (_options$taskQueue = options.taskQueue) !== null &&
      _options$taskQueue !== void 0
        ? _options$taskQueue
        : new _FifoQueue.default();
  }

  doWork(method, ...args) {
    const customMessageListeners = new Set();

    const addCustomMessageListener = listener => {
      customMessageListeners.add(listener);
      return () => {
        customMessageListeners.delete(listener);
      };
    };

    const onCustomMessage = message => {
      customMessageListeners.forEach(listener => listener(message));
    };

    const promise = new Promise( // Bind args to this function so it won't reference to the parent scope.
      // This prevents a memory leak in v8, because otherwise the function will
      // retaine args for the closure.
      ((args, resolve, reject) => {
        const computeWorkerKey = this._computeWorkerKey;
        const request = [_types.CHILD_MESSAGE_CALL, false, method, args];
        let worker = null;
        let hash = null;

        if (computeWorkerKey) {
          hash = computeWorkerKey.call(this, method, ...args);
          worker = hash == null ? null : this._cacheKeys[hash];
        }

        const onStart = worker => {
          if (hash != null) {
            this._cacheKeys[hash] = worker;
          }
        };

        const onEnd = (error, result) => {
          customMessageListeners.clear();

          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        };

        const task = {
          onCustomMessage,
          onEnd,
          onStart,
          request
        };

        if (worker) {
          this._taskQueue.enqueue(task, worker.getWorkerId());

          this._process(worker.getWorkerId());
        } else {
          this._push(task);
        }
      }).bind(null, args)
    );
    promise.UNSTABLE_onCustomMessage = addCustomMessageListener;
    return promise;
  }

  _process(workerId) {
    if (this._isLocked(workerId)) {
      return this;
    }

    const task = this._taskQueue.dequeue(workerId);

    if (!task) {
      return this;
    }

    if (task.request[1]) {
      throw new Error('Queue implementation returned processed task');
    } // Reference the task object outside so it won't be retained by onEnd,
    // and other properties of the task object, such as task.request can be
    // garbage collected.

    const taskOnEnd = task.onEnd;

    const onEnd = (error, result) => {
      taskOnEnd(error, result);

      this._unlock(workerId);

      this._process(workerId);
    };

    task.request[1] = true;

    this._lock(workerId);

    this._callback(
      workerId,
      task.request,
      task.onStart,
      onEnd,
      task.onCustomMessage
    );

    return this;
  }

  _push(task) {
    this._taskQueue.enqueue(task);

    const offset = this._getNextWorkerOffset();

    for (let i = 0; i < this._numOfWorkers; i++) {
      this._process((offset + i) % this._numOfWorkers);

      if (task.request[1]) {
        break;
      }
    }

    return this;
  }

  _getNextWorkerOffset() {
    switch (this._workerSchedulingPolicy) {
      case 'in-order':
        return 0;

      case 'round-robin':
        return this._offset++;
    }
  }

  _lock(workerId) {
    this._locks[workerId] = true;
  }

  _unlock(workerId) {
    this._locks[workerId] = false;
  }

  _isLocked(workerId) {
    return this._locks[workerId];
  }
}

exports.default = Farm;
