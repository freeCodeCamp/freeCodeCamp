/* eslint-disable @typescript-eslint/naming-convention */
import { TestEvaluatorEvent } from '../../../client/workers/test-evaluator'

interface WorkerEvent {
  LOG: Array<(data: TestEvaluatorEvent) => void>;
  error:  Array<(data: TestEvaluatorEvent) => void>;
  done: Array<(data: TestEvaluatorEvent) => void>; 
}

type newWorkerEvent = keyof WorkerEvent;

interface Task {
  done: Promise<Worker>
  _worker: Worker | null;
  _events: WorkerEvent;
  _execute: (worker: WorkerExecutor['_getWorker']) => Task
  emit: {(event: newWorkerEvent, args: TestEvaluatorEvent ): Task };
  once: (event: newWorkerEvent, listener: (args: TestEvaluatorEvent) => void) => void;
  on: (event: newWorkerEvent, listener: (args: TestEvaluatorEvent) => void) => void;
  removeListener: (event: newWorkerEvent, listener: (args: TestEvaluatorEvent) => void) => void;

}

class WorkerExecutor {
  _workerPool: Worker[];
  _taskQueue: Task[];
  _workersInUse: number;
  _maxWorkers: number;
  _terminateWorker: boolean;
  _scriptURL: string;
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
      newWorker.onmessage = (e: TestEvaluatorEvent) => {
        if (e.data?.type === 'contentLoaded') {
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
      const task = this._taskQueue.shift() as Task;
      const handleTaskEnd = this._handleTaskEnd(task);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      task._execute(this._getWorker).done.then(handleTaskEnd, handleTaskEnd);
      this._workersInUse++;
    }
  }

  execute(data: TestEvaluatorEvent, timeout = 1000) {
    console.log(data);
    const task: Task  = eventify({});
    task._execute = function (getWorker) {
      getWorker().then(
        (worker: Worker) => {
          task._worker = worker;
          const timeoutId = setTimeout(() => {
            task._worker?.terminate();
            task._worker = null;
            this.emit('error', { message: 'timeout' });
          }, timeout);

          worker.onmessage = (e: TestEvaluatorEvent) => {
            clearTimeout(timeoutId);
            // data.type is undefined when the message has been processed
            // successfully and defined when something else has happened (e.g.
            // an error occurred)
            console.log(e.data)
            if (e.data?.type) {
              console.log(e.data.type);
              this.emit('error', data.data);
            } else {
              console.log(e.data.type);
              this.emit('done', e.data);
            }
          };

          worker.onerror = (e: ErrorEvent) => {
            clearTimeout(timeoutId);
            this.emit('error', { message: e.message });
          };

          worker.postMessage(data);
        },
        (err: Error) => this.emit('error', err)
      );
      return this;
    };

    task.done = new Promise((resolve, reject) => {
      task.once('done', data => resolve(data))
    });

    this._taskQueue.push(task);
    this._processQueue();
    return task;
  }
}

// Error and completion handling
const eventify = (self: Task ) => {
  self._events = {error: [], done: [], LOG: []};

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

  self.emit = (event , ...args) => {
    if (typeof self._events[event] !== 'undefined') {
     
      self._events[event].forEach(listener => {
        listener.apply(self, args);
      });
    }
    return self;
  };

  self.once = (event, listener) => {
    console.log(typeof listener);
    self.on(event, function handler(...args) {
      self.removeListener(event, handler);
      listener.apply(self, args);
    });
    return self;
  };
  console.log(self);
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
