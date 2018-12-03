export default class WorkerExecutor {
  constructor(workerName) {
    this.workerName = workerName;
    this.worker = null;
  }

  getWorker() {
    if (this.worker === null) {
      this.worker = new Worker(`js/${this.workerName}.js`);
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
        clearTimeout(timeoutId);
        resolve(e.data);
      };

      worker.onerror = e => {
        clearTimeout(timeoutId);
        reject(e.message);
      };
    });
  }
}
