class WorkerExecutor {
  constructor(workerName, location) {
    this.workerName = workerName;
    this.worker = null;
    this.observers = {};
    this.location = location;

    this.execute = this.execute.bind(this);
    this.killWorker = this.killWorker.bind(this);
    this.getWorker = this.getWorker.bind(this);
  }

  getWorker() {
    if (this.worker === null) {
      this.worker = new Worker(`${this.location}${this.workerName}.js`);
    }

    return this.worker;
  }

  killWorker() {
    if (this.worker !== null) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  execute(data, timeout = 1000) {
    const worker = this.getWorker();
    return new Promise((resolve, reject) => {
      // Handle timeout
      const timeoutId = setTimeout(() => {
        this.killWorker();
        reject('timeout');
      }, timeout);

      worker.postMessage(data);

      // Handle result
      worker.onmessage = e => {
        if (e.data && e.data.type) {
          const observers = this.observers[e.data.type] || [];
          for (const observer of observers) {
            observer(e.data.data);
          }
          return;
        }
        clearTimeout(timeoutId);
        resolve(e.data);
      };

      worker.onerror = e => {
        clearTimeout(timeoutId);
        reject(e.message);
      };
    });
  }

  on(type, callback) {
    const observers = this.observers[type] || [];
    observers.push(callback);
    this.observers[type] = observers;
  }

  remove(type, callback) {
    const observers = this.observers[type] || [];
    const index = observers.indexOf(callback);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  }
}

export default function createWorkerExecutor(workerName, location = '/js/') {
  return new WorkerExecutor(workerName, location);
}
