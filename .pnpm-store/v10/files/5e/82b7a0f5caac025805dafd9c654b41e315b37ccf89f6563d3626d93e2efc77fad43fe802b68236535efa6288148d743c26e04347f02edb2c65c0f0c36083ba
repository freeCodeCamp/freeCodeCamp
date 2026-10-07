var lodash = require('./wrapperLodash');

/**
 * Creates a `lodash` wrapper instance that wraps `value` with explicit method
 * chain sequences enabled. The result of such sequences must be unwrapped
 * with `_#value`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Seq
 * @param {*} value The value to wrap.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36 },
 *   { 'user': 'fred',    'age': 40 },
 *   { 'user': 'pebbles', 'age': 1 }
 * ];
 *
 * var youngest = _
 *   .chain(users)
 *   .sortBy('age')
 *   .map(function(o) {
 *     return o.user + ' is ' + o.age;
 *   })
 *   .head()
 *   .value();
 * // => 'pebbles is 1'
 */
function chain(value) {
  var result = lodash(value);
  result.__chain__ = true;
  return result;
}

module.exports = chain;
