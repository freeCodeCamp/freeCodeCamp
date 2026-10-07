/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {inspect} from './inspect.js';

/**
 * ### .compareByInspect(mixed, mixed)
 *
 * To be used as a compareFunction with Array.prototype.sort. Compares elements
 * using inspect instead of default behavior of using toString so that Symbols
 * and objects with irregular/missing toString can still be sorted without a
 * TypeError.
 *
 * @param {unknown} a first element to compare
 * @param {unknown} b second element to compare
 * @returns {number} -1 if 'a' should come before 'b'; otherwise 1
 * @name compareByInspect
 * @namespace Utils
 * @public
 */
export function compareByInspect(a, b) {
  return inspect(a) < inspect(b) ? -1 : 1;
}
