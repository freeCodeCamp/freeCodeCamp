/**
 * Simple event system used by WorkerTask.
 * It lets us listen for events like "done" and "error".
 */
class EventEmitter {
  constructor() {
    // Stores events and their listeners
    this._events = new Map();
  }

  // Add a listener for an event
  on(event, listener) {
    if (!this._events.has(event)) {
      this._events.set(event, new Set());
    }

    this._events.get(event).add(listener);
    return this;
  }

  // Add a listener that runs once then removes itself
  once(event, listener) {
    const wrapper = (...args) => {
      this.removeListener(event, wrapper);
      listener(...args);
    };

    return this.on(event, wrapper);
  }

  // Trigger an event and call all listeners
  emit(event, ...args) {
    const listeners = this._events.get(event);

    if (!listeners) return false;

    // Copy list in case listeners change during execution
    for (const listener of [...listeners]) {
      listener(...args);
    }

    return true;
  }

  // Remove a specific listener
  removeListener(event, listener) {
    const listeners = this._events.get(event);

    if (!listeners) return this;

    listeners.delete(listener);

    // Clean up if no listeners left
    if (listeners.size === 0) {
      this._events.delete(event);
    }

    return this;
  }

  // Remove all listeners for one event or everything
  removeAllListeners(event) {
    if (event) {
      this._events.delete(event);
    } else {
      this._events.clear();
    }

    return this;
  }
}

/**
 * Represents a single task that runs inside a worker.
 */
class WorkerTask extends EventEmitter {
  constructor(data, timeout) {
    super();

    this.data = data;
    this.timeout = timeout;

    // Worker assigned when task starts running
    this.worker = null;

    // Promise that resolves or rejects based on task result
    this.done = new Promise((resolve, reject) => {
      this.once('done', resolve);
      this.once('error', reject);
    });
  }
}

/**
 * Handles a pool of workers and runs tasks with a limit on concurrency.
 */
export class WorkerExecutor {
  constructor(
    workerName,
    {
      location = '/js/',
      maxWorkers = 2,
      terminateWorker = false,
    } = {}
  ) {
    this._scriptURL = `${location}${workerName}.js`;

    // Max number of workers running at the same time
    this._maxWorkers = maxWorkers;

    // If true workers are destroyed after each task
    this._terminateWorker = terminateWorker;

    // Idle workers we can reuse
    this._workerPool = [];

    // Waiting tasks
    this._taskQueue = [];

    // How many workers are currently running
    this._workersInUse = 0;
  }

  // Creates a worker and waits until it signals it is ready
  async _createWorker() {
    return new Promise((resolve, reject) => {
      const worker = new Worker(this._scriptURL);

      const onMessage = e => {
        if (e.data?.type !== 'contentLoaded') return;

        worker.removeEventListener('message', onMessage);
        worker.removeEventListener('error', onError);

        resolve(worker);
      };

      const onError = err => {
        worker.removeEventListener('message', onMessage);
        worker.removeEventListener('error', onError);

        reject(err);
      };

      worker.addEventListener('message', onMessage);
      worker.addEventListener('error', onError);
    });
  }

  // Get a worker from the pool or create a new one
  async _acquireWorker() {
    if (this._workerPool.length > 0) {
      return this._workerPool.pop();
    }

    return this._createWorker();
  }

  // Return worker to pool or terminate it
  _releaseWorker(worker) {
    if (!worker) return;

    worker.onmessage = null;
    worker.onerror = null;

    if (this._terminateWorker) {
      worker.terminate();
      return;
    }

    this._workerPool.push(worker);
  }

  // Clean up after a task finishes
  _finalizeTask(task) {
    this._workersInUse--;

    this._releaseWorker(task.worker);
    task.worker = null;

    this._processQueue();
  }

  // Runs a single task
  async _runTask(task) {
    this._workersInUse++;

    try {
      const worker = await this._acquireWorker();
      task.worker = worker;

      const timeoutId = setTimeout(() => {
        if (!task.worker) return;

        task.worker.terminate();
        task.worker = null;

        task.emit('error', new Error('Worker timeout'));
      }, task.timeout);

      worker.onmessage = e => {
        clearTimeout(timeoutId);

        if (e.data?.type) {
          task.emit(e.data.type, e.data.data);
        } else {
          task.emit('done', e.data);
        }
      };

      worker.onerror = e => {
        clearTimeout(timeoutId);
        task.emit('error', new Error(e.message || 'Worker error'));
      };

      worker.postMessage(task.data);

      await task.done;
    } catch (err) {
      task.emit('error', err);
    } finally {
      this._finalizeTask(task);
    }
  }

  // Starts tasks while respecting max worker limit
  _processQueue() {
    while (
      this._workersInUse < this._maxWorkers &&
      this._taskQueue.length > 0
    ) {
      const task = this._taskQueue.shift();
      this._runTask(task);
    }
  }

  // Public API to run a task
  execute(data, timeout = 1000) {
    const task = new WorkerTask(data, timeout);

    this._taskQueue.push(task);
    this._processQueue();

    return task;
  }

  // Stops and clears all idle workers
  terminateAll() {
    for (const worker of this._workerPool) {
      worker.terminate();
    }

    this._workerPool = [];
  }
}
