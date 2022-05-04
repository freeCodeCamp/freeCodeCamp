/* eslint-disable @typescript-eslint/naming-convention */

interface WorkerEvents {
  LOG: Array<(data: unknown) => void>;
  error: Array<(data: Error) => void>;
  done: Array<(data: Event) => void>;
}

type newWorkerEvent = keyof WorkerEvents;

interface Task {
  done?: Promise<Worker>;
  _events: WorkerEvents;
  _worker: Worker | null;
  on: (
    event: newWorkerEvent,
    listener: (...data: (Event | Error)[]) => void
  ) => Task;
  once: (
    event: newWorkerEvent,
    listener: (data: Promise<Worker> | Worker) => void
  ) => Task;
  removeListener: (
    event: newWorkerEvent,
    listener: (...data: (Event | Error)[]) => void
  ) => Task;
  emit: (event: newWorkerEvent, data: Error | Event) => Task;
  _execute: (getWorker: WorkerExecutor['_getWorker']) => Task;
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
      ? (this._workerPool.shift() as Worker)
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
      (task._execute(this._getWorker).done as Promise<unknown>).then(
        handleTaskEnd,
        handleTaskEnd
      );
      this._workersInUse++;
    }
  }

  execute(tests: string, timeout = 1000) {
    const task: Task = eventify();
    task._execute = function (getWorker) {
      getWorker()
        .then((worker: Worker) => {
          task._worker = worker;
          const timeoutId = setTimeout(() => {
            task._worker?.terminate();
            task._worker = null;
            this.emit('error', { message: 'timeout' } as Error);
          }, timeout);

          worker.onmessage = (ev: MessageEvent<Event>) => {
            clearTimeout(timeoutId);
            console.log(ev.data);
            this.emit('done', ev.data);
          };

          worker.onerror = e => {
            clearTimeout(timeoutId);
            this.emit('error', { message: e.message } as Error);
          };

          worker.postMessage(tests);
        })
        .catch((error: Error) => this.emit('error', error));
      return this;
    };

    task.done = new Promise((resolve, reject) => {
      task
        .once('done', (data: Promise<Worker>) => resolve(data))
        .once('error', (err: { message: string }) => reject(err.message));
    });

    this._taskQueue.push(task);
    this._processQueue();
    return task;
  }
}

// Error and completion handling
const eventify = (): Task => {
  const self: Task = {
    _events: {
      error: [],
      done: [],
      LOG: []
    },
    on: (event, listener) => {
      self._events[event].push(listener);
      return self;
    },
    once: (event, listener) => {
      self.on(event, function handler(...data) {
        self.removeListener(event, handler);
        listener.apply(self, data);
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
    emit: (event, ...data) => {
      console.log(self);
      if (typeof self._events[event] !== 'undefined') {
        self._events[event].forEach(listener => {
          listener.apply(self, ...data);
        });
      }
      return self;
    },
    done: undefined,
    _worker: null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _execute: function (getWorker: () => Promise<unknown>): Task {
      throw new Error('Function not implemented.');
    }
  };

  return self;
};

export default function createWorkerExecutor(
  workerName: string,
  options?:
    | {
        location?: string | undefined;
        maxWorkers?: number | undefined;
        terminateWorker?: boolean | undefined;
      }
    | undefined
) {
  return new WorkerExecutor(workerName, options);
}
