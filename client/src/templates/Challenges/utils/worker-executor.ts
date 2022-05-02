/* eslint-disable @typescript-eslint/naming-convention */
interface Task {
  done?: Promise<Worker>;
  _events: Record<string, unknown[]>;
  _worker: Worker | null;
  on: (event: string, listener: unknown) => Task;
  once: (event: string, listener: unknown) => Task;
  removeListener: (event: string, listener: unknown) => Task;
  emit:  (event: string, args: unknown) => Task;
  _execute: (getWorker: WorkerExecutor['_getWorker']) => Task
}

class WorkerExecutor {

  _workersInUse: number;
  _maxWorkers: number;
  _terminateWorker: boolean;
  _scriptURL: string;
  _workerPool: Worker[];
  _taskQueue: Task[];
  constructor(
    workerName: string,
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

  async _getWorker(): Promise<Worker> {
    return this._workerPool.length
      ? this._workerPool.shift() as Worker
      : this._createWorker();
  }

  _createWorker(): Promise<Worker> {
    return new Promise((resolve, reject) => {
      const newWorker = new Worker(this._scriptURL);
      newWorker.onmessage = (ev: MessageEvent<Event>) => {
   
        if (ev.data.type === 'contentLoaded') {
          resolve(newWorker);
        }
      };
      newWorker.onerror = err => reject(err);
    });
  }

  _handleTaskEnd(task: Task) {
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
      const task: Task = this._taskQueue.shift() as Task;
      const handleTaskEnd = this._handleTaskEnd(task);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      (task._execute(this._getWorker).done as Promise<unknown>).then(handleTaskEnd, handleTaskEnd);
      this._workersInUse++;
    }
  }

  execute(data: string, timeout = 1000) {
    const task: Task = eventify();
    task._execute = function (getWorker) {
      getWorker().then(
        (worker: Worker) => {
          task._worker = worker;
          const timeoutId = setTimeout(() => {
            task._worker?.terminate();
            task._worker = null;
            this.emit('error', { message: 'timeout' });
          }, timeout);

          worker.onmessage = (ev: MessageEvent<Event>)  => {
            clearTimeout(timeoutId);
            // data.type is undefined when the message has been processed
            // successfully and defined when something else has happened (e.g.
            // an error occurred)
            if (ev.data.type) {
              this.emit(ev.data.type, ev.data);
            } else {
              this.emit('done', ev.data);
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
        .once('done', (data: Promise<Worker>) => resolve(data))
        .once('error', (err: { message: string; }) => reject(err.message));
    });

    this._taskQueue.push(task);
    this._processQueue();
    return task;
  }
}

// Error and completion handling
const eventify = (): Task => {

  const self: Task = {
    _events: {},
    on: (event, listener) => {
      if (typeof self._events[event] === 'undefined') {
        self._events[event] = [];
      }
      self._events[event].push(listener);
      return self;
    },
    once: (event, listener) => {
      self.on(event, function handler(...args: unknown[]) {
        self.removeListener(event, handler);
        listener.apply(self, args);
      });
      return self;
    },
    removeListener: (event, listener) => {
      if (typeof self._events[event] !== 'undefined') {
        const index = self._events[event].indexOf(listener);
        if (index !== -1) {
          self._events[event].splice(index, 1);
        }
      }
      return self;
    },
    emit: (event, ...args) => {
      if (typeof self._events[event] !== 'undefined') {
        self._events[event].forEach(listener => {
          listener.apply(self, args);
        });
      }
      return self;
    },
    done: undefined,
    _worker: null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _execute: function (getWorker: () => Promise<unknown>): Task {
      throw new Error("Function not implemented.");
    }
  };

  return self;
};

export default function createWorkerExecutor(workerName: string, options: { location?: string | undefined; maxWorkers?: number | undefined; terminateWorker?: boolean | undefined; } | undefined) {
  return new WorkerExecutor(workerName, options);
}
