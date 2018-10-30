import {
  objectOrFunction,
  isFunction
} from './utils';
import originalThen from './then';
import originalResolve from './promise/resolve';
import instrument from './instrument';

import { config } from './config';
import Promise from './promise';

function withOwnPromise() {
  return new TypeError('A promises callback cannot return that same promise.');
}

export function noop() {}

export const PENDING   = void 0;
export const FULFILLED = 1;
export const REJECTED  = 2;

const GET_THEN_ERROR = new ErrorObject();

export function getThen(promise) {
  try {
    return promise.then;
  } catch(error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch(e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  config.async(promise => {
    let sealed = false;
    let error = tryThen(then, thenable, value => {
      if (sealed) { return; }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value, undefined);
      } else {
        fulfill(promise, value);
      }
    }, reason => {
      if (sealed) { return; }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    thenable._onError = null;
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, value => {
      if (thenable !== value) {
        resolve(promise, value, undefined);
      } else {
        fulfill(promise, value);
      }
    }, reason => reject(promise, reason));
  }
}

export function handleMaybeThenable(promise, maybeThenable, then) {
  let isOwnThenable =
    maybeThenable.constructor === promise.constructor &&
    then === originalThen &&
    promise.constructor.resolve === originalResolve;

  if (isOwnThenable) {
    handleOwnThenable(promise, maybeThenable);
  } else if (then === GET_THEN_ERROR) {
    reject(promise, GET_THEN_ERROR.error);
    GET_THEN_ERROR.error = null;
  } else if (isFunction(then)) {
    handleForeignThenable(promise, maybeThenable, then);
  } else {
    fulfill(promise, maybeThenable);
  }
}

export function resolve(promise, value) {
  if (promise === value) {
    fulfill(promise, value);
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

export function publishRejection(promise) {
  if (promise._onError) {
    promise._onError(promise._result);
  }

  publish(promise);
}

export function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length === 0) {
    if (config.instrument) {
      instrument('fulfilled', promise);
    }
  } else {
    config.async(publish, promise);
  }
}

export function reject(promise, reason) {
  if (promise._state !== PENDING) { return; }
  promise._state = REJECTED;
  promise._result = reason;
  config.async(publishRejection, promise);
}

export function subscribe(parent, child, onFulfillment, onRejection) {
  let subscribers = parent._subscribers;
  let length = subscribers.length;

  parent._onError = null;

  subscribers[length] = child;
  subscribers[length + FULFILLED] = onFulfillment;
  subscribers[length + REJECTED]  = onRejection;

  if (length === 0 && parent._state) {
    config.async(publish, parent);
  }
}

export function publish(promise) {
  let subscribers = promise._subscribers;
  let settled = promise._state;

  if (config.instrument) {
    instrument(settled === FULFILLED ? 'fulfilled' : 'rejected', promise);
  }

  if (subscribers.length === 0) { return; }

  let child, callback, result = promise._result;

  for (let i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, result);
    } else {
      callback(result);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

const TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, result) {
  try {
    return callback(result);
  } catch(e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

export function invokeCallback(state, promise, callback, result) {
  let hasCallback = isFunction(callback);
  let value, error;

  if (hasCallback) {
    value = tryCatch(callback, result);

    if (value === TRY_CATCH_ERROR) {
      error = value.error;
      value.error = null; // release
    } else if (value === promise) {
      reject(promise, withOwnPromise());
      return;
    }
  } else {
    value = result;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && error === undefined) {
    resolve(promise, value);
  } else if (error !== undefined) {
    reject(promise, error);
  } else if (state === FULFILLED) {
    fulfill(promise, value);
  } else if (state === REJECTED) {
    reject(promise, value);
  }
}

export function initializePromise(promise, resolver) {
  let resolved = false;
  try {
    resolver(value => {
      if (resolved) { return; }
      resolved = true;
      resolve(promise, value);
    }, reason => {
      if (resolved) { return; }
      resolved = true;
      reject(promise, reason);
    });
  } catch(e) {
    reject(promise, e);
  }
}
