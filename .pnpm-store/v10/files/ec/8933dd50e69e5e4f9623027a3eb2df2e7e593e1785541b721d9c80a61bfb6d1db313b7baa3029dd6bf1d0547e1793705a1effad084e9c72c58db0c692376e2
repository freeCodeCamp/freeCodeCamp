"use strict";
exports.convertToFP = convertToFP;

/**
 * Converts a function to a curried function that accepts arguments in reverse
 * order.
 *
 * @param fn - The function to convert to FP
 * @param arity - The arity of the function
 * @param curriedArgs - The curried arguments
 *
 * @returns FP version of the function
 *
 * @private
 */
function convertToFP(fn, arity, curriedArgs = []) {
  return curriedArgs.length >= arity
    ? fn(...curriedArgs.slice(0, arity).reverse())
    : (...args) => convertToFP(fn, arity, curriedArgs.concat(args));
}
