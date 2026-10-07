import isIndex from './_isIndex.js';

/**
 * The base implementation of `_.nth` which doesn't coerce arguments.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {number} n The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 */
function baseNth(array, n) {
  var length = array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return isIndex(n, length) ? array[n] : undefined;
}

export default baseNth;
