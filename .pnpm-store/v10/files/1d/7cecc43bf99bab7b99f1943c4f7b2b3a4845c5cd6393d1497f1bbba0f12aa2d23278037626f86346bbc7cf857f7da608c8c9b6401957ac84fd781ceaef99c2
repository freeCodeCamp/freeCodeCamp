Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const syncpromise = require('./syncpromise.js');
const timer = require('./timer.js');

const SENTRY_BUFFER_FULL_ERROR = /* @__PURE__ */ Symbol.for("SentryBufferFullError");
function makePromiseBuffer(limit = 100) {
  const buffer = /* @__PURE__ */ new Set();
  function isReady() {
    return buffer.size < limit;
  }
  function remove(task) {
    buffer.delete(task);
  }
  function add(taskProducer) {
    if (!isReady()) {
      return syncpromise.rejectedSyncPromise(SENTRY_BUFFER_FULL_ERROR);
    }
    const task = taskProducer();
    buffer.add(task);
    void task.then(
      () => remove(task),
      () => remove(task)
    );
    return task;
  }
  function drain(timeout) {
    if (!buffer.size) {
      return syncpromise.resolvedSyncPromise(true);
    }
    const drainPromise = Promise.allSettled(Array.from(buffer)).then(() => true);
    if (!timeout) {
      return drainPromise;
    }
    const promises = [
      drainPromise,
      new Promise((resolve) => timer.safeUnref(setTimeout(() => resolve(false), timeout)))
    ];
    return Promise.race(promises);
  }
  return {
    get $() {
      return Array.from(buffer);
    },
    add,
    drain
  };
}

exports.SENTRY_BUFFER_FULL_ERROR = SENTRY_BUFFER_FULL_ERROR;
exports.makePromiseBuffer = makePromiseBuffer;
//# sourceMappingURL=promisebuffer.js.map
