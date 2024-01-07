class WorkerExecutor {
  constructor(
    workerName,
    { location = '/js/', maxWorkers = 2, terminateWorker = false } = {}
  ) {
    this._workerPool = [];
    this._taskQueue = [];
    this._workersInUse = 0;
    this._maxWorkers = maxWorkers;
    this._terminateWorker = terminateWorker;
    this._scriptURL = `${location}${workerName}.js`;

    this._getWorker = this._getWorker.bind(this);
  }

  async _getWorker() {
    return this._workerPool.length
      ? this._workerPool.shift()
      : this._createWorker();
  }

  _createWorker() {
    return new Promise((resolve, reject) => {
      const newWorker = new Worker(this._scriptURL);
      newWorker.onmessage = e => {
        if (e.data?.type === 'contentLoaded') {
          resolve(newWorker);
        }
      };
      newWorker.onerror = err => reject(err);
    });
  }

  _handleTaskEnd(task) {
    return () => {
      this._workersInUse--;
      const worker = task._worker;
      if (worker) {
        if (this._terminateWorker) {
          worker.terminate();
        } else {
          worker.onmessage = null;
          worker.onerror = null;
          this._workerPool.push(worker);
        }
      }
      this._processQueue();
    };
  }

  _processQueue() {
    while (this._workersInUse < this._maxWorkers && this._taskQueue.length) {
      const task = this._taskQueue.shift();
      const handleTaskEnd = this._handleTaskEnd(task);
      task._execute(this._getWorker).done.then(handleTaskEnd, handleTaskEnd);
      this._workersInUse++;
    }
  }

  execute(data, timeout = 1000) {
    const task = eventify({});
    task._execute = function (getWorker) {
      getWorker().then(
        worker => {
          task._worker = worker;
          const timeoutId = setTimeout(() => {
            task._worker.terminate();
            task._worker = null;
            this.emit('error', { message: 'timeout' });
          }, timeout);

          worker.onmessage = e => {
            clearTimeout(timeoutId);
            // data.type is undefined when the message has been processed
            // successfully and defined when something else has happened (e.g.
            // an error occurred)
            if (e.data?.type) {
              this.emit(e.data.type, e.data.data);
            } else {
              this.emit('done', e.data);
            }
          };

          worker.onerror = e => {
            clearTimeout(timeoutId);
            this.emit('error', { message: e.message });
          };

          worker.postMessage(data);
        },
        err => this.emit('error', err)
      );
      return this;
    };

    task.done = new Promise((resolve, reject) => {
      task
        .once('done', data => resolve(data))
        .once('error', err => reject(err.message));
    });

    this._taskQueue.push(task);
    this._processQueue();
    return task;
  }
}

// Error and completion handling
const eventify = self => {
  self._events = {};

  self.on = (event, listener) => {
    if (typeof self._events[event] === 'undefined') {
      self._events[event] = [];
    }
    self._events[event].push(listener);
    return self;
  };

  self.removeListener = (event, listener) => {
    if (typeof self._events[event] !== 'undefined') {
      const index = self._events[event].indexOf(listener);
      if (index !== -1) {
        self._events[event].splice(index, 1);
      }
    }
    return self;
  };

  self.emit = (event, ...args) => {
    if (typeof self._events[event] !== 'undefined') {
      const listeners = self._events[event].slice();
      for (let listener of listeners) {
        listener.apply(self, args);
      }
    }
    return self;
  };

  self.once = (event, listener) => {
    self.on(event, function handler(...args) {
      self.removeListener(event, handler);
      listener.apply(self, args);
    });
    return self;
  };

  return self;
};

export default function createWorkerExecutor(workerName, options) {
  return new WorkerExecutor(workerName, options);
}
