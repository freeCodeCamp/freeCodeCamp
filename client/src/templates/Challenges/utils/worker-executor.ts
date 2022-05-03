/* eslint-disable @typescript-eslint/naming-convention */
interface Task {
  done?: Promise<Worker>;
  _events: { done: SuccessHandler[]; error: FailureHandler[] };
  _worker: Worker | null;
  on: EventListenerFunction;
  once: EventListenerFunction;
  removeListener: EventListenerFunction;
  emit: (event: string, args: SuccessHandler | FailureHandler) => Task;
  _execute: (getWorker: WorkerExecutor['_getWorker']) => Task;
}

type EventListenerFunction = <E extends 'done' | 'error'>(
  event: E,
  listener: E extends 'done' ? SuccessHandler : FailureHandler
) => Task;
type SuccessHandler = (data: Promise<Worker>) => void;
type FailureHandler = (error: Error) => void;

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

          worker.onmessage = (ev: MessageEvent<Event>) => {
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
        .once('error', (err: { message: string }) => reject(err.message));
    });

    this._taskQueue.push(task);
    this._processQueue();
    return task;
  }
}

function isDone(
  event: 'done' | 'error',
  handler: SuccessHandler | FailureHandler
): handler is SuccessHandler {
  return event === 'done';
}

// Error and completion handling
const eventify = (): Task => {
  const self: Task = {
    _events: { done: [], error: [] },
    on: (event, listener) => {
      if (isDone(event, listener)) {
        self._events.done.push(listener);
      } else {
        self._events.error.push(listener);
      }
      return self;
    },
    once: (event, listener) => {
      if (isDone(event, listener)) {
        if (event === 'done') {
          self.on<'done'>(event, function handler(args: Promise<Worker>) {
            self.removeListener<'done'>(event, handler);
            listener.call(self, args);
          });
        }
      } else {
        if (event === 'error') {
          self.on<'error'>(event, function handler(args: Error) {
            self.removeListener<'error'>(event, handler);
            listener.call(self, args);
          });
        }
      }
      return self;
    },
    removeListener: (event, listener) => {
      let index;
      if (isDone(event, listener)) {
        index = self._events.done.indexOf(listener);
      } else {
        index = self._events.error.indexOf(listener);
      }
      if (index !== -1) {
        self._events[event].splice(index, 1);
      }
      return self;
    },
    emit: (event, args) => {
      if (event === 'done' && isDone(event, args)) {
        self._events.done.forEach(listener => listener.call(self, args));
      } else {
        self._events.error.forEach(listener => listener.call(self, args));
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
  options:
    | {
        location?: string | undefined;
        maxWorkers?: number | undefined;
        terminateWorker?: boolean | undefined;
      }
    | undefined
) {
  return new WorkerExecutor(workerName, options);
}
