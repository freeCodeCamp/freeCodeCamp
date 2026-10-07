import { isThenable } from './is.js';

const STATE_PENDING = 0;
const STATE_RESOLVED = 1;
const STATE_REJECTED = 2;
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve) => {
    resolve(value);
  });
}
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}
class SyncPromise {
  constructor(executor) {
    this._state = STATE_PENDING;
    this._handlers = [];
    this._runExecutor(executor);
  }
  /** @inheritdoc */
  then(onfulfilled, onrejected) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve(result);
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  /** @inheritdoc */
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  /** @inheritdoc */
  finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve(val);
      });
    });
  }
  /** Excute the resolve/reject handlers. */
  _executeHandlers() {
    if (this._state === STATE_PENDING) {
      return;
    }
    const cachedHandlers = this._handlers.slice();
    this._handlers = [];
    cachedHandlers.forEach((handler) => {
      if (handler[0]) {
        return;
      }
      if (this._state === STATE_RESOLVED) {
        handler[1](this._value);
      }
      if (this._state === STATE_REJECTED) {
        handler[2](this._value);
      }
      handler[0] = true;
    });
  }
  /** Run the executor for the SyncPromise. */
  _runExecutor(executor) {
    const setResult = (state, value) => {
      if (this._state !== STATE_PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(resolve, reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
    const resolve = (value) => {
      setResult(STATE_RESOLVED, value);
    };
    const reject = (reason) => {
      setResult(STATE_REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
}

export { SyncPromise, rejectedSyncPromise, resolvedSyncPromise };
//# sourceMappingURL=syncpromise.js.map
