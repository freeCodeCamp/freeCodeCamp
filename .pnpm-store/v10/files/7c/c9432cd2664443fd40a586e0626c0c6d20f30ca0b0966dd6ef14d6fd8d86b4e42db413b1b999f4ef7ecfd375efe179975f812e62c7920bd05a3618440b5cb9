import type { PromiseOrValue } from './PromiseOrValue';
/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
export declare function promiseReduce<T, U>(
  values: Iterable<T>,
  callbackFn: (accumulator: U, currentValue: T) => PromiseOrValue<U>,
  initialValue: PromiseOrValue<U>,
): PromiseOrValue<U>;
