"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.initJobsMessagingInMainProcess = initJobsMessagingInMainProcess;
exports.initJobsMessagingInWorker = initJobsMessagingInWorker;
exports.maybeSendJobToMainProcess = maybeSendJobToMainProcess;
exports.waitUntilWorkerJobsAreComplete = void 0;
var _pDefer = _interopRequireDefault(require("p-defer"));
var _types = require("./types");
var _redux = require("../../redux");
var _actions = require("../../redux/actions");
var _messaging = require("../worker/messaging");
let hasActiveWorkerJobs = null;
let activeWorkerJobs = 0;
function initJobsMessagingInMainProcess(workerPool) {
  workerPool.onMessage((msg, workerId) => {
    if (msg.type === _types.MESSAGE_TYPES.JOB_CREATED) {
      if (activeWorkerJobs === 0) {
        hasActiveWorkerJobs = (0, _pDefer.default)();
      }
      activeWorkerJobs++;
      _redux.store.dispatch(_actions.internalActions.createJobV2FromInternalJob(msg.payload)).then(result => {
        workerPool.sendMessage({
          type: _types.MESSAGE_TYPES.JOB_COMPLETED,
          payload: {
            id: msg.payload.id,
            result
          }
        }, workerId);
      }).catch(error => {
        workerPool.sendMessage({
          type: _types.MESSAGE_TYPES.JOB_FAILED,
          payload: {
            id: msg.payload.id,
            error: error.message,
            stack: error.stack
          }
        }, workerId);
      }).finally(() => {
        if (--activeWorkerJobs === 0) {
          var _hasActiveWorkerJobs;
          (_hasActiveWorkerJobs = hasActiveWorkerJobs) === null || _hasActiveWorkerJobs === void 0 ? void 0 : _hasActiveWorkerJobs.resolve();
          hasActiveWorkerJobs = null;
        }
      });
    }
  });
}
const waitUntilWorkerJobsAreComplete = () => hasActiveWorkerJobs ? hasActiveWorkerJobs.promise : Promise.resolve();

/**
 * This map is ONLY used in worker. It's purpose is to keep track of promises returned to plugins
 * when creating jobs (in worker context), so that we can resolve or reject those once main process
 * send back their status.
 */
exports.waitUntilWorkerJobsAreComplete = waitUntilWorkerJobsAreComplete;
const deferredWorkerPromises = new Map();
const gatsbyWorkerMessenger = (0, _messaging.getMessenger)();
function initJobsMessagingInWorker() {
  if (_messaging.isWorker && gatsbyWorkerMessenger) {
    gatsbyWorkerMessenger.onMessage(msg => {
      if (msg.type === _types.MESSAGE_TYPES.JOB_COMPLETED) {
        const {
          id,
          result
        } = msg.payload;
        const deferredPromise = deferredWorkerPromises.get(id);
        if (!deferredPromise) {
          throw new Error(`Received message about completed job that wasn't scheduled by this worker`);
        }
        deferredPromise.resolve(result);
        deferredWorkerPromises.delete(id);
      } else if (msg.type === _types.MESSAGE_TYPES.JOB_FAILED) {
        const {
          id,
          error,
          stack
        } = msg.payload;
        const deferredPromise = deferredWorkerPromises.get(id);
        if (!deferredPromise) {
          throw new Error(`Received message about failed job that wasn't scheduled by this worker`);
        }
        const errorObject = new _types.WorkerError(error);
        if (stack) {
          errorObject.stack = stack;
        }
        deferredPromise.reject(errorObject);
        deferredWorkerPromises.delete(id);
      }
    });
  }
}

/**
 * Forwards job to main process (if executed in worker context) and returns
 * a promise. Will return `undefined` if called not in worker context.
 */
function maybeSendJobToMainProcess(job) {
  if (_messaging.isWorker && gatsbyWorkerMessenger) {
    const deferredWorkerPromise = (0, _pDefer.default)();
    const msg = {
      type: _types.MESSAGE_TYPES.JOB_CREATED,
      payload: job
    };
    gatsbyWorkerMessenger.sendMessage(msg);

    // holds on to promise
    deferredWorkerPromises.set(job.id, deferredWorkerPromise);
    return deferredWorkerPromise.promise;
  }
  return undefined;
}
//# sourceMappingURL=worker-messaging.js.map