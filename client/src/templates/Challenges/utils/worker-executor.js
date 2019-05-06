class WorkerExecutor {
  constructor(
    workerName,
    { location = '/js/', concurrency = 2, terminateWorker = false } = {}
  ) {
    this._workerName = workerName;
    this._workers = [];
    this._queue = [];
    this._running = 0;
    this._concurrency = concurrency;
    this._terminateWorker = terminateWorker;
    this._location = location;

    this._getWorker = this._getWorker.bind(this);
  }

  async _getWorker() {
    let worker;
    if (this._workers.length) {
      worker = this._workers.shift();
    } else {
      worker = await new Promise((resolve, reject) => {
        const worker = new Worker(`${this._location}${this._workerName}.js`);
        worker.onmessage = e => {
          if (e.data && e.data.type && e.data.type === 'contentLoaded') {
            resolve(worker);
          }
        };
        worker.onerror = err => reject(err);
      });
    }
    return worker;
  }

  _pushTask(task) {
    this._queue.push(task);
    this._next();
  }

  _handleTaskEnd(task) {
    return () => {
      this._running--;
      if (task._worker) {
        const worker = task._worker;
        if (this._terminateWorker) {
          worker.terminate();
        } else {
          worker.onmessage = null;
          worker.onerror = null;
          this._workers.push(worker);
        }
      }
      this._next();
    };
  }

  _next() {
    while (this._running < this._concurrency && this._queue.length) {
      const task = this._queue.shift();
      const handleTaskEnd = this._handleTaskEnd(task);
      task._execute(this._getWorker).done.then(handleTaskEnd, handleTaskEnd);
      this._running++;
    }
  }

  execute(data, timeout = 1000) {
    const task = eventify({});
    task._execute = function(getWorker) {
      getWorker().then(
        worker => {
          task._worker = worker;
          const timeoutId = setTimeout(() => {
            task._worker.terminate();
            task._worker = null;
            this.emit('error', { message: 'timeout' });
          }, timeout);

          worker.onmessage = e => {
            if (e.data && e.data.type) {
              this.emit(e.data.type, e.data.data);
              return;
            }
            clearTimeout(timeoutId);
            this.emit('done', e.data);
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

    this._pushTask(task);
    return task;
  }
}

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
      self._events[event].forEach(listener => {
        listener.apply(self, args);
      });
    }
    return self;
  };

  self.once = (event, listener) => {
    self.on(event, function handler(...args) {
      self.removeListener(handler);
      listener.apply(self, args);
    });
    return self;
  };

  return self;
};

export default function createWorkerExecutor(workerName, options) {
  return new WorkerExecutor(workerName, options);
}
