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

  async getWorker() {
    if (this.worker === null) {
      this.worker = await new Promise((resolve, reject) => {
        const worker = new Worker(`${this.location}${this.workerName}.js`);
        worker.onmessage = e => {
          if (e.data && e.data.type && e.data.type === 'contentLoaded') {
            resolve(worker);
          }
        };
        worker.onerror = e => reject(e.message);
      });
    }

    return this.worker;
  }

  killWorker() {
    if (this.worker !== null) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  async execute(data, timeout = 1000) {
    const worker = await this.getWorker();
    return new Promise((resolve, reject) => {
      // Handle timeout
      const timeoutId = setTimeout(() => {
        this.killWorker();
        done('timeout');
      }, timeout);

      const done = (err, data) => {
        clearTimeout(timeoutId);
        this.remove('error', handleError);
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      };

      const handleError = e => {
        done(e.message);
      };
      this.on('error', handleError);

      worker.postMessage(data);

      // Handle result
      worker.onmessage = e => {
        if (e.data && e.data.type) {
          this.handleEvent(e.data.type, e.data.data);
          return;
        }
        done(null, e.data);
      };

      worker.onerror = e => {
        this.handleEvent('error', { message: e.message });
      };
    });
  }

  handleEvent(type, data) {
    const observers = this.observers[type] || [];
    for (const observer of observers) {
      observer(data);
    }
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
