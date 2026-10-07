import Symbol from './_Symbol.js';
import copyArray from './_copyArray.js';
import getTag from './_getTag.js';
import isArrayLike from './isArrayLike.js';
import isString from './isString.js';
import iteratorToArray from './_iteratorToArray.js';
import mapToArray from './_mapToArray.js';
import setToArray from './_setToArray.js';
import stringToArray from './_stringToArray.js';
import values from './values.js';

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

export default toArray;
