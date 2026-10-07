import baseIteratee from './_baseIteratee.js';
import baseSortedIndexBy from './_baseSortedIndexBy.js';

/**
 * This method is like `_.sortedIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * var objects = [{ 'x': 4 }, { 'x': 5 }];
 *
 * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
 * // => 0
 */
function sortedIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee, 2));
}

export default sortedIndexBy;
