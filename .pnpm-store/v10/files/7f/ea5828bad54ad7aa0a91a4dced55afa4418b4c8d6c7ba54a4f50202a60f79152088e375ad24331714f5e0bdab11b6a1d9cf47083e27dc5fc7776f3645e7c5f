import baseClamp from './_baseClamp.js';
import copyArray from './_copyArray.js';
import shuffleSelf from './_shuffleSelf.js';

/**
 * A specialized version of `_.sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(array, n) {
  return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
}

export default arraySampleSize;
