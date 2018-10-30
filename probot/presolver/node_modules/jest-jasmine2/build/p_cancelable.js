'use strict';

// Try getting the real promise object from the context, if available. Someone
// could have overridden it in a test.

const Promise = global[Symbol.for('jest-native-promise')] || global.Promise;

class CancelError extends Error {
  constructor() {
    super('Promise was canceled');
    this.name = 'CancelError';
  }
}

class PCancelable {
  static fn(fn) {
    return function () {
      const args = [].slice.apply(arguments);
      return new PCancelable((onCancel, resolve, reject) => {
        args.unshift(onCancel);
        fn.apply(null, args).then(resolve, reject);
      });
    };
  }

  constructor(executor) {
    this._pending = true;
    this._canceled = false;

    this._promise = new Promise((resolve, reject) => {
      this._reject = reject;

      return executor(fn => {
        this._cancel = fn;
      }, val => {
        this._pending = false;
        resolve(val);
      }, err => {
        this._pending = false;
        reject(err);
      });
    });
  }

  then() {
    return this._promise.then.apply(this._promise, arguments);
  }

  catch() {
    return this._promise.catch.apply(this._promise, arguments);
  }

  cancel() {
    if (!this._pending || this._canceled) {
      return;
    }

    if (typeof this._cancel === 'function') {
      try {
        this._cancel();
      } catch (err) {
        this._reject(err);
      }
    }

    this._canceled = true;
    this._reject(new CancelError());
  }

  get canceled() {
    return this._canceled;
  }
}

Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);

module.exports = PCancelable;
module.exports.CancelError = CancelError;