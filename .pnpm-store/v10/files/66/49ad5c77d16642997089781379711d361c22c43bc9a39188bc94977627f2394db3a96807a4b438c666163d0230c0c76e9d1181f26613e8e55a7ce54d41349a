var baseToPairs = require('./_baseToPairs'),
    getTag = require('./_getTag'),
    mapToArray = require('./_mapToArray'),
    setToPairs = require('./_setToPairs');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag(object);
    if (tag == mapTag) {
      return mapToArray(object);
    }
    if (tag == setTag) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

module.exports = createToPairs;
