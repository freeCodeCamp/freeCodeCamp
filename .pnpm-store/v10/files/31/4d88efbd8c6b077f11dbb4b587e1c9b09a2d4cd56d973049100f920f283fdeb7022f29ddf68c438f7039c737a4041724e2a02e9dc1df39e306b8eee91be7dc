"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
var _exportNames = {
  WorkerPool: true
};
exports.WorkerPool = void 0;
var _child_process = require("child_process");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _os = _interopRequireDefault(require("os"));
var _path = _interopRequireDefault(require("path"));
var _taskQueue = require("./task-queue");
var _types = require("./types");
var _child = require("./child");
Object.keys(_child).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _child[key]) return;
  exports[key] = _child[key];
});
const childWrapperPath = require.resolve(`./child`);
class TaskInfo {
  constructor(opts) {
    this.functionName = opts.functionName;
    this.args = opts.args;
    this.assignedToWorker = opts.assignedToWorker;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
/**
 * Worker pool is a class that allow you to queue function execution across multiple
 * child processes, in order to parallelize work. It accepts absolute path to worker module
 * and will expose exported function of that module as properties on WorkerPool instance.
 *
 * Worker pool allows queueing execution of a function on all workers (via `.all` property)
 * as well as distributing execution across workers (via `.single` property)
 */
class WorkerPool {
  /**
   * Schedule task execution on all workers. Useful for setting up workers
   */

  /**
   * Schedule task execution on single worker. Useful to distribute tasks between multiple workers.
   */

  workers = [];
  taskQueue = new _taskQueue.TaskQueue();
  idleWorkers = new Set();
  listeners = [];
  counter = 0;
  constructor(workerPath, options) {
    this.workerPath = workerPath;
    this.options = options;
    const single = {};
    const all = {};
    {
      // we don't need to retain these
      const module = require(workerPath);
      const exportNames = Object.keys(module);
      for (const exportName of exportNames) {
        if (typeof module[exportName] !== `function`) {
          // We only expose functions. Exposing other types
          // would require additional handling which doesn't seem
          // worth supporting given that consumers can just access
          // those via require/import instead of WorkerPool interface.
          continue;
        }
        single[exportName] = this.scheduleWorkSingle.bind(this, exportName);
        all[exportName] = this.scheduleWorkAll.bind(this, exportName);
      }
    }
    this.single = single;
    this.all = all;
    this.startAll();
  }
  startAll() {
    this.counter = 0;
    const tmpDir = _fsExtra.default.mkdtempSync(_path.default.join(_os.default.tmpdir(), `gatsby-worker`));
    const options = this.options;
    for (let workerId = 1; workerId <= ((_options$numWorkers = options === null || options === void 0 ? void 0 : options.numWorkers) !== null && _options$numWorkers !== void 0 ? _options$numWorkers : 1); workerId++) {
      var _options$numWorkers, _options$env;
      const workerInFlightsDumpLocation = _path.default.join(tmpDir, `worker-${workerId}.json`);
      const worker = (0, _child_process.fork)(childWrapperPath, {
        cwd: process.cwd(),
        env: {
          ...process.env,
          ...((_options$env = options === null || options === void 0 ? void 0 : options.env) !== null && _options$env !== void 0 ? _options$env : {}),
          GATSBY_WORKER_ID: workerId.toString(),
          GATSBY_WORKER_MODULE_PATH: this.workerPath,
          GATSBY_WORKER_IN_FLIGHT_DUMP_LOCATION: workerInFlightsDumpLocation
        },
        // Suppress --debug / --inspect flags while preserving others (like --harmony).
        execArgv: process.execArgv.filter(v => !/^--(debug|inspect)/.test(v)),
        silent: options && options.silent
      });
      let workerReadyResolve;
      let workerExitResolve;
      const workerInfo = {
        workerId,
        send: msg => {
          if (!worker.connected) {
            return;
          }
          worker.send(msg, undefined, undefined, error => {
            if (error && worker.connected) {
              throw error;
            }
          });
        },
        kill: worker.kill.bind(worker),
        ready: new Promise(resolve => {
          workerReadyResolve = resolve;
        }),
        lastMessage: 0,
        exitedPromise: new Promise(resolve => {
          workerExitResolve = resolve;
        })
      };
      const workerProcessMessageHandler = msg => {
        if (!Array.isArray(msg)) {
          // all gatsby-worker messages should be an array
          // if it's not an array we skip it
          return;
        } else if (msg[1] <= workerInfo.lastMessage) {
          // this message was already handled, so skipping it
          // this is specifically for special casing worker exits
          // where we serialize "in-flight" IPC messages to fs
          // and "replay" them here to ensure no messages are lost
          // Trickiness is that while we write out in flight IPC messages
          // to fs, those messages might actually still go through as regular
          // ipc messages so we have to ensure we don't handle same message twice
          return;
        } else if (msg[1] !== workerInfo.lastMessage + 1) {
          // TODO: figure out IPC message order guarantees (or lack of them) - for now
          // condition above relies on IPC messages being received in same order
          // as they were sent via `process.send` in child process
          // generally we expect messages we receive to be next one (lastMessage + 1)
          // IF order is not guaranteed, then different strategy for de-duping messages
          // is needed.
          throw new Error(`[gatsby-worker] Out of order message. Expected ${workerInfo.lastMessage + 1}, got ${msg[1]}.\n\nFull message:\n${JSON.stringify(msg, null, 2)}.`);
        }
        workerInfo.lastMessage = msg[1];
        if (msg[0] === _types.RESULT) {
          if (!workerInfo.currentTask) {
            throw new Error(`Invariant: gatsby-worker received execution result, but it wasn't expecting it.`);
          }
          const task = workerInfo.currentTask;
          workerInfo.currentTask = undefined;
          this.checkForWork(workerInfo);
          task.resolve(msg[2]);
        } else if (msg[0] === _types.ERROR) {
          if (!workerInfo.currentTask) {
            throw new Error(`Invariant: gatsby-worker received execution rejection, but it wasn't expecting it.`);
          }
          let error = msg[5];
          if (error !== null && typeof error === `object`) {
            const extra = error;
            const NativeCtor = global[msg[2]];
            const Ctor = typeof NativeCtor === `function` ? NativeCtor : Error;
            error = new Ctor(msg[3]);
            // @ts-ignore type doesn't exist on Error, but that's what jest-worker does for errors :shrug:
            error.type = msg[2];
            error.stack = msg[4];
            for (const key in extra) {
              if (Object.prototype.hasOwnProperty.call(extra, key)) {
                error[key] = extra[key];
              }
            }
          }
          const task = workerInfo.currentTask;
          workerInfo.currentTask = undefined;
          this.checkForWork(workerInfo);
          task.reject(error);
        } else if (msg[0] === _types.CUSTOM_MESSAGE) {
          for (const listener of this.listeners) {
            listener(msg[2], workerId);
          }
        } else if (msg[0] === _types.WORKER_READY) {
          workerReadyResolve();
        }
      };
      worker.on(`message`, workerProcessMessageHandler);
      worker.on(`exit`, async (code, signal) => {
        if (await _fsExtra.default.pathExists(workerInFlightsDumpLocation)) {
          const pendingMessages = await _fsExtra.default.readJSON(workerInFlightsDumpLocation);
          if (Array.isArray(pendingMessages)) {
            for (const msg of pendingMessages) {
              workerProcessMessageHandler(msg);
            }
          }
          try {
            await _fsExtra.default.remove(workerInFlightsDumpLocation);
          } catch {
            // this is just cleanup, failing to delete this file
            // won't cause
          }
        }
        if (workerInfo.currentTask) {
          // worker exited without finishing a task
          workerInfo.currentTask.reject(new Error(`Worker exited before finishing task`));
        }
        // remove worker from list of workers
        this.workers.splice(this.workers.indexOf(workerInfo), 1);
        workerExitResolve({
          code,
          signal
        });
      });
      this.workers.push(workerInfo);
      this.idleWorkers.add(workerInfo);
    }
  }

  /**
   * Kills worker processes and rejects and ongoing or pending tasks.
   * @returns Array of promises for each worker that will resolve once worker did exit.
   */
  end() {
    const results = this.workers.map(async workerInfo => {
      // tell worker to end gracefully
      const endMessage = [_types.END, ++this.counter];
      workerInfo.send(endMessage);

      // force exit if worker doesn't exit gracefully quickly
      const forceExitTimeout = setTimeout(() => {
        workerInfo.kill(`SIGKILL`);
      }, 1000);
      const exitResult = await workerInfo.exitedPromise;
      clearTimeout(forceExitTimeout);
      return exitResult.code;
    });
    Promise.all(results).then(() => {
      // make sure we fail queued tasks as well
      for (const taskNode of this.taskQueue) {
        taskNode.value.reject(new Error(`Worker exited before finishing task`));
      }
      this.workers = [];
      this.idleWorkers = new Set();
    });
    return results;
  }

  /**
   * Kills all running worker processes and spawns a new pool of processes
   */
  async restart() {
    await Promise.all(this.end());
    this.startAll();
  }
  getWorkerInfo() {
    return this.workers.map(worker => {
      return {
        workerId: worker.workerId
      };
    });
  }
  checkForWork(workerInfo) {
    // check if there is task in queue
    for (const taskNode of this.taskQueue) {
      const task = taskNode.value;
      if (!task.assignedToWorker || task.assignedToWorker === workerInfo) {
        this.doWork(task, workerInfo);
        this.taskQueue.remove(taskNode);
        return;
      }
    }

    // no task found, so just marking worker as idle
    this.idleWorkers.add(workerInfo);
  }
  async doWork(taskInfo, workerInfo) {
    // block worker
    workerInfo.currentTask = taskInfo;
    this.idleWorkers.delete(workerInfo);
    await workerInfo.ready;
    const msg = [_types.EXECUTE, ++this.counter, taskInfo.functionName, taskInfo.args];
    workerInfo.send(msg);
  }
  scheduleWork(taskInfo) {
    let workerToExecuteTaskNow;
    if (taskInfo.assignedToWorker) {
      if (this.idleWorkers.has(taskInfo.assignedToWorker)) {
        workerToExecuteTaskNow = taskInfo.assignedToWorker;
      }
    } else {
      workerToExecuteTaskNow = this.idleWorkers.values().next().value;
    }
    if (workerToExecuteTaskNow) {
      this.doWork(taskInfo, workerToExecuteTaskNow);
    } else {
      this.taskQueue.enqueue(taskInfo);
    }
    return taskInfo.promise;
  }
  scheduleWorkSingle(functionName, ...args) {
    return this.scheduleWork(new TaskInfo({
      functionName,
      args
    }));
  }
  scheduleWorkAll(functionName, ...args) {
    return this.workers.map(workerInfo => this.scheduleWork(new TaskInfo({
      assignedToWorker: workerInfo,
      functionName,
      args
    })));
  }
  onMessage(listener) {
    this.listeners.push(listener);
  }
  sendMessage(msg, workerId) {
    const worker = this.workers[workerId - 1];
    if (!worker) {
      throw new Error(`There is no worker with "${workerId}" id.`);
    }
    const poolMsg = [_types.CUSTOM_MESSAGE, ++this.counter, msg];
    worker.send(poolMsg);
  }
}
exports.WorkerPool = WorkerPool;