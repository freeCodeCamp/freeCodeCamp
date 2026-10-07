"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Handle", {
  enumerable: true,
  get: function () {
    return _Handle.default;
  }
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _events() {
  const data = _interopRequireDefault(require("events"));

  _events = function () {
    return data;
  };

  return data;
}

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _Worker = _interopRequireDefault(require("./Worker"));

var _cpuCount = _interopRequireDefault(require("./cpuCount"));

var _Handle = _interopRequireDefault(require("./Handle"));

var _childState = require("./childState");

var _backend = require("./backend");

var _Profiler = _interopRequireDefault(require("./Profiler"));

var _Trace = _interopRequireDefault(require("./Trace"));

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let referenceId = 1;

/**
 * workerPath should always be defined inside farmOptions
 */
class WorkerFarm extends _events().default {
  callQueue = [];
  ending = false;
  warmWorkers = 0;
  workers = new Map();
  handles = new Map();
  sharedReferences = new Map();
  sharedReferencesByValue = new Map();
  serializedSharedReferences = new Map();

  constructor(farmOptions = {}) {
    super();
    this.options = {
      maxConcurrentWorkers: WorkerFarm.getNumWorkers(),
      maxConcurrentCallsPerWorker: WorkerFarm.getConcurrentCallsPerWorker(),
      forcedKillTime: 500,
      warmWorkers: false,
      useLocalWorker: true,
      // TODO: setting this to false makes some tests fail, figure out why
      backend: (0, _backend.detectBackend)(),
      ...farmOptions
    };

    if (!this.options.workerPath) {
      throw new Error('Please provide a worker path!');
    } // $FlowFixMe this must be dynamic


    this.localWorker = require(this.options.workerPath);
    this.localWorkerInit = this.localWorker.childInit != null ? this.localWorker.childInit() : null;
    this.run = this.createHandle('run'); // Worker thread stdout is by default piped into the process stdout, if there are enough worker
    // threads to exceed the default listener limit, then anything else piping into stdout will trigger
    // the `MaxListenersExceededWarning`, so we should ensure the max listeners is at least equal to the
    // number of workers + 1 for the main thread.
    //
    // Note this can't be fixed easily where other things pipe into stdout -  even after starting > 10 worker
    // threads `process.stdout.getMaxListeners()` will still return 10, however adding another pipe into `stdout`
    // will give the warning with `<worker count + 1>` as the number of listeners.

    process.stdout.setMaxListeners(Math.max(process.stdout.getMaxListeners(), WorkerFarm.getNumWorkers() + 1));
    this.startMaxWorkers();
  }

  workerApi = {
    callMaster: async (request, awaitResponse = true) => {
      // $FlowFixMe
      let result = await this.processRequest({ ...request,
        awaitResponse
      });
      return (0, _core().deserialize)((0, _core().serialize)(result));
    },
    createReverseHandle: fn => this.createReverseHandle(fn),
    callChild: (childId, request) => new Promise((resolve, reject) => {
      (0, _nullthrows().default)(this.workers.get(childId)).call({ ...request,
        resolve,
        reject,
        retries: 0
      });
    }),
    runHandle: (handle, args) => this.workerApi.callChild((0, _nullthrows().default)(handle.childId), {
      handle: handle.id,
      args
    }),
    getSharedReference: ref => this.sharedReferences.get(ref),
    resolveSharedReference: value => this.sharedReferencesByValue.get(value)
  };

  warmupWorker(method, args) {
    // Workers are already stopping
    if (this.ending) {
      return;
    } // Workers are not warmed up yet.
    // Send the job to a remote worker in the background,
    // but use the result from the local worker - it will be faster.


    let promise = this.addCall(method, [...args, true]);

    if (promise) {
      promise.then(() => {
        this.warmWorkers++;

        if (this.warmWorkers >= this.workers.size) {
          this.emit('warmedup');
        }
      }).catch(() => {});
    }
  }

  shouldStartRemoteWorkers() {
    return this.options.maxConcurrentWorkers > 0 || !this.options.useLocalWorker;
  }

  createHandle(method, useMainThread = false) {
    return async (...args) => {
      // Child process workers are slow to start (~600ms).
      // While we're waiting, just run on the main thread.
      // This significantly speeds up startup time.
      if (this.shouldUseRemoteWorkers() && !useMainThread) {
        return this.addCall(method, [...args, false]);
      } else {
        if (this.options.warmWorkers && this.shouldStartRemoteWorkers()) {
          this.warmupWorker(method, args);
        }

        let processedArgs;

        if (!useMainThread) {
          processedArgs = (0, _core().restoreDeserializedObject)((0, _core().prepareForSerialization)([...args, false]));
        } else {
          processedArgs = args;
        }

        if (this.localWorkerInit != null) {
          await this.localWorkerInit;
          this.localWorkerInit = null;
        }

        return this.localWorker[method](this.workerApi, ...processedArgs);
      }
    };
  }

  onError(error, worker) {
    // Handle ipc errors
    if (error.code === 'ERR_IPC_CHANNEL_CLOSED') {
      return this.stopWorker(worker);
    } else {
      _logger().default.error(error, '@parcel/workers');
    }
  }

  startChild() {
    let worker = new _Worker.default({
      forcedKillTime: this.options.forcedKillTime,
      backend: this.options.backend,
      shouldPatchConsole: this.options.shouldPatchConsole,
      sharedReferences: this.sharedReferences
    });
    worker.fork((0, _nullthrows().default)(this.options.workerPath));
    worker.on('request', data => this.processRequest(data, worker));
    worker.on('ready', () => this.processQueue());
    worker.on('response', () => this.processQueue());
    worker.on('error', err => this.onError(err, worker));
    worker.once('exit', () => this.stopWorker(worker));
    this.workers.set(worker.id, worker);
  }

  async stopWorker(worker) {
    if (!worker.stopped) {
      this.workers.delete(worker.id);
      worker.isStopping = true;

      if (worker.calls.size) {
        for (let call of worker.calls.values()) {
          call.retries++;
          this.callQueue.unshift(call);
        }
      }

      worker.calls.clear();
      await worker.stop(); // Process any requests that failed and start a new worker

      this.processQueue();
    }
  }

  processQueue() {
    if (this.ending || !this.callQueue.length) return;

    if (this.workers.size < this.options.maxConcurrentWorkers) {
      this.startChild();
    }

    let workers = [...this.workers.values()].sort((a, b) => a.calls.size - b.calls.size);

    for (let worker of workers) {
      if (!this.callQueue.length) {
        break;
      }

      if (!worker.ready || worker.stopped || worker.isStopping) {
        continue;
      }

      if (worker.calls.size < this.options.maxConcurrentCallsPerWorker) {
        this.callWorker(worker, this.callQueue.shift());
      }
    }
  }

  async callWorker(worker, call) {
    for (let ref of this.sharedReferences.keys()) {
      if (!worker.sentSharedReferences.has(ref)) {
        await worker.sendSharedReference(ref, this.getSerializedSharedReference(ref));
      }
    }

    worker.call(call);
  }

  async processRequest(data, worker) {
    let {
      method,
      args,
      location,
      awaitResponse,
      idx,
      handle: handleId
    } = data;
    let mod;

    if (handleId != null) {
      var _this$handles$get;

      mod = (0, _nullthrows().default)((_this$handles$get = this.handles.get(handleId)) === null || _this$handles$get === void 0 ? void 0 : _this$handles$get.fn);
    } else if (location) {
      // $FlowFixMe this must be dynamic
      mod = require(location);
    } else {
      throw new Error('Unknown request');
    }

    const responseFromContent = content => ({
      idx,
      type: 'response',
      contentType: 'data',
      content
    });

    const errorResponseFromError = e => ({
      idx,
      type: 'response',
      contentType: 'error',
      content: (0, _diagnostic().anyToDiagnostic)(e)
    });

    let result;

    if (method == null) {
      try {
        result = responseFromContent(await mod(...args));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    } else {
      // ESModule default interop
      if (mod.__esModule && !mod[method] && mod.default) {
        mod = mod.default;
      }

      try {
        // $FlowFixMe
        result = responseFromContent(await mod[method](...args));
      } catch (e) {
        result = errorResponseFromError(e);
      }
    }

    if (awaitResponse) {
      if (worker) {
        worker.send(result);
      } else {
        if (result.contentType === 'error') {
          throw new (_diagnostic().default)({
            diagnostic: result.content
          });
        }

        return result.content;
      }
    }
  }

  addCall(method, args) {
    if (this.ending) {
      throw new Error('Cannot add a worker call if workerfarm is ending.');
    }

    return new Promise((resolve, reject) => {
      this.callQueue.push({
        method,
        args: args,
        retries: 0,
        resolve,
        reject
      });
      this.processQueue();
    });
  }

  async end() {
    this.ending = true;
    await Promise.all(Array.from(this.workers.values()).map(worker => this.stopWorker(worker)));

    for (let handle of this.handles.values()) {
      handle.dispose();
    }

    this.handles = new Map();
    this.sharedReferences = new Map();
    this.sharedReferencesByValue = new Map();
    this.ending = false;
  }

  startMaxWorkers() {
    // Starts workers until the maximum is reached
    if (this.workers.size < this.options.maxConcurrentWorkers) {
      let toStart = this.options.maxConcurrentWorkers - this.workers.size;

      while (toStart--) {
        this.startChild();
      }
    }
  }

  shouldUseRemoteWorkers() {
    return !this.options.useLocalWorker || (this.warmWorkers >= this.workers.size || !this.options.warmWorkers) && this.options.maxConcurrentWorkers > 0;
  }

  createReverseHandle(fn) {
    let handle = new _Handle.default({
      fn
    });
    this.handles.set(handle.id, handle);
    return handle;
  }

  createSharedReference(value, isCacheable = true) {
    let ref = referenceId++;
    this.sharedReferences.set(ref, value);
    this.sharedReferencesByValue.set(value, ref);

    if (!isCacheable) {
      this.serializedSharedReferences.set(ref, null);
    }

    return {
      ref,
      dispose: () => {
        this.sharedReferences.delete(ref);
        this.sharedReferencesByValue.delete(value);
        this.serializedSharedReferences.delete(ref);
        let promises = [];

        for (let worker of this.workers.values()) {
          if (!worker.sentSharedReferences.has(ref)) {
            continue;
          }

          worker.sentSharedReferences.delete(ref);
          promises.push(new Promise((resolve, reject) => {
            worker.call({
              method: 'deleteSharedReference',
              args: [ref],
              resolve,
              reject,
              skipReadyCheck: true,
              retries: 0
            });
          }));
        }

        return Promise.all(promises);
      }
    };
  }

  getSerializedSharedReference(ref) {
    let cached = this.serializedSharedReferences.get(ref);

    if (cached) {
      return cached;
    }

    let value = this.sharedReferences.get(ref);
    let buf = (0, _core().serialize)(value).buffer; // If the reference was created with the isCacheable option set to false,
    // serializedSharedReferences will contain `null` as the value.

    if (cached !== null) {
      this.serializedSharedReferences.set(ref, buf);
    }

    return buf;
  }

  async startProfile() {
    let promises = [];

    for (let worker of this.workers.values()) {
      promises.push(new Promise((resolve, reject) => {
        worker.call({
          method: 'startProfile',
          args: [],
          resolve,
          reject,
          retries: 0,
          skipReadyCheck: true
        });
      }));
    }

    this.profiler = new _Profiler.default();
    promises.push(this.profiler.startProfiling());
    await Promise.all(promises);
  }

  async endProfile() {
    if (!this.profiler) {
      return;
    }

    let promises = [this.profiler.stopProfiling()];
    let names = ['Master'];

    for (let worker of this.workers.values()) {
      names.push('Worker ' + worker.id);
      promises.push(new Promise((resolve, reject) => {
        worker.call({
          method: 'endProfile',
          args: [],
          resolve,
          reject,
          retries: 0,
          skipReadyCheck: true
        });
      }));
    }

    var profiles = await Promise.all(promises);
    let trace = new _Trace.default();
    let filename = `profile-${getTimeId()}.trace`;
    let stream = trace.pipe(_fs().default.createWriteStream(filename));

    for (let profile of profiles) {
      trace.addCPUProfile(names.shift(), profile);
    }

    trace.flush();
    await new Promise(resolve => {
      stream.once('finish', resolve);
    });

    _logger().default.info({
      origin: '@parcel/workers',
      message: (0, _diagnostic().md)`Wrote profile to ${filename}`
    });
  }

  async callAllWorkers(method, args) {
    let promises = [];

    for (let worker of this.workers.values()) {
      promises.push(new Promise((resolve, reject) => {
        worker.call({
          method,
          args,
          resolve,
          reject,
          retries: 0
        });
      }));
    }

    promises.push(this.localWorker[method](this.workerApi, ...args));
    await Promise.all(promises);
  }

  async takeHeapSnapshot() {
    let snapshotId = getTimeId();

    try {
      let snapshotPaths = await Promise.all([...this.workers.values()].map(worker => new Promise((resolve, reject) => {
        worker.call({
          method: 'takeHeapSnapshot',
          args: [snapshotId],
          resolve,
          reject,
          retries: 0,
          skipReadyCheck: true
        });
      })));

      _logger().default.info({
        origin: '@parcel/workers',
        message: (0, _diagnostic().md)`Wrote heap snapshots to the following paths:\n${snapshotPaths.join('\n')}`
      });
    } catch {
      _logger().default.error({
        origin: '@parcel/workers',
        message: 'Unable to take heap snapshots. Note: requires Node 11.13.0+'
      });
    }
  }

  static getNumWorkers() {
    return process.env.PARCEL_WORKERS ? parseInt(process.env.PARCEL_WORKERS, 10) : Math.ceil((0, _cpuCount.default)() / 2);
  }

  static isWorker() {
    return !!_childState.child;
  }

  static getWorkerApi() {
    (0, _assert().default)(_childState.child != null, 'WorkerFarm.getWorkerApi can only be called within workers');
    return _childState.child.workerApi;
  }

  static getConcurrentCallsPerWorker() {
    return parseInt(process.env.PARCEL_MAX_CONCURRENT_CALLS, 10) || 30;
  }

}

exports.default = WorkerFarm;

function getTimeId() {
  let now = new Date();
  return String(now.getFullYear()) + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0') + '-' + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0') + String(now.getSeconds()).padStart(2, '0');
}