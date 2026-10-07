import { isPromise } from './isPromise.mjs';

/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
export function promiseReduce(values, callbackFn, initialValue) {
  let accumulator = initialValue;

  for (const value of values) {
    accumulator = isPromise(accumulator)
      ? accumulator.then((resolved) => callbackFn(resolved, value))
      : callbackFn(accumulator, value);
  }

  return accumulator;
}
