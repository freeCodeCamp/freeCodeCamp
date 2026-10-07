import baseSet from './_baseSet.js';
import baseZipObject from './_baseZipObject.js';

/**
 * This method is like `_.zipObject` except that it supports property paths.
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet);
}

export default zipObjectDeep;
