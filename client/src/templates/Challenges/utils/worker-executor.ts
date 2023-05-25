class WorkerExecutor {
  _workerPool: Worker[];
  _terminateWorker: boolean;
  _maxWorkers: number;
  _workersInUse: number;
  _scriptURL: string;
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

  async _getWorker() {
    if (this._workerPool.length) {
      return this._workerPool.shift();
    }
    try {
      return await this._createWorker();
    }
    catch (err) {
      this._workersInUse--;
      throw err;
    }
  }

  _createWorker() {
    return new Promise((resolve, reject) => {
      const newWorker = new Worker(this._scriptURL);
      newWorker.onmessage = e => {
        if (e.data?.type === 'contentLoaded') {
          resolve(newWorker);
        }
        // do something else if not contentLoaded?
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
      const task = this._taskQueue.shift();
      if (!task) {
        break;
      }
      const handleTaskEnd = this._handleTaskEnd(task);
      try {
        task._execute(this._getWorker).done.then(handleTaskEnd, handleTaskEnd)

        this._workersInUse++;
      }
      catch (err) {
        //do something
      }

    }
  }

  execute(data, timeout = 1000) {
    // make a new task
    const task = eventify();
    // give the task a worker
    task._execute = async function (getWorker) {
      try {
        const worker = await getWorker();
        task._worker = worker;
        const timeoutId = setTimeout(() => {
          task._worker?.terminate();
          task._worker = null;
          this.emit('error', { message: 'timeout' });
        }, timeout);

        worker.onmessage = (e: {
          data: {
            type?: string,
            data?: any
          }
        }) => {
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

        worker.onerror = (e: { message: string }) => {
          clearTimeout(timeoutId);
          this.emit('error', { message: e.message });
        };

        worker.postMessage(data);
      }
      catch (err) {
        this.emit('error', err)
      }
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
type Listeners = Set<Function>;
type Events = Map<string, Listeners>;
type Task = {
  _events: Events;
  on: (event: string, listener: Function) => Task;
  removeListener: (event: string, listener: Function) => Task;
  emit: (event: string, ...args: any[]) => Task;
  once: (event: string, listener: Function) => void;
  _worker?: Worker | null;
  _execute: (getWorker: () => Promise<Worker>) => Promise<Task>;
}
// Error and completion handling
const eventify = (): Task => {
  const self = {} as Task;
  self._events = new Map() as Events;

  self.on = (event: string, listener: Function) => {
    const currentListeners = self._events.get(event) || new Set();
    self._events.set(event, currentListeners.add(listener));
    return self;
  };

  self.removeListener = (event: string, listener: Function) => {
    const currentListeners = self._events.get(event) || new Set();
    currentListeners.delete(listener);
    return self;
  };

  self.emit = (event, ...args) => {
    const listeners = self._events.get(event) || new Set();
    for (let listener of listeners) {
      listener.apply(self, args);
    }
    return self;
  };

  self.once = (event, listener) => {
    self.on(event, function handler(...args: any[]) {
      self.removeListener(event, handler);
      listener.apply(self, args);
    });
    return self;
  };

  return self;
};
type CreateWorkerOptions = {
  location?: string,
  maxWorkers?: number,
  terminateWorker?: boolean
}
export default function createWorkerExecutor(workerName: string, options: CreateWorkerOptions) {
  return new WorkerExecutor(workerName, options);
}
