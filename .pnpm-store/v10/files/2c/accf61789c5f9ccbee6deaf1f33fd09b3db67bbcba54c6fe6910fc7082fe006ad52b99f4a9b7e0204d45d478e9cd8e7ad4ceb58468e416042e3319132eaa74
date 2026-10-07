"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @template T
 * @typedef {() => T} FunctionReturning
 */

/**
 * @template T
 * @param {FunctionReturning<T>} fn memorized function
 * @returns {FunctionReturning<T>} new function
 */
const memoize = fn => {
  let cache = false;
  /** @type {T} */
  let result;
  return () => {
    if (cache) {
      return result;
    }
    result = fn();
    cache = true;
    // Allow to clean up memory for fn
    // and all dependent resources
    /** @type {FunctionReturning<T> | undefined} */
    fn = undefined;
    return result;
  };
};
var _default = exports.default = memoize;