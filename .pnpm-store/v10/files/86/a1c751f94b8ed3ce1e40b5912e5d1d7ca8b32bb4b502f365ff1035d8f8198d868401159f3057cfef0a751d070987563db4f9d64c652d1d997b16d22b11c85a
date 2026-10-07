var castPath = require('./_castPath'),
    last = require('./last'),
    parent = require('./_parent'),
    toKey = require('./_toKey');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);

  // Prevent prototype pollution:
  // https://github.com/lodash/lodash/security/advisories/GHSA-xxjr-mmjv-4gpg
  // https://github.com/lodash/lodash/security/advisories/GHSA-f23m-r3pf-42rh
  var index = -1,
      length = path.length;

  if (!length) {
    return true;
  }

  while (++index < length) {
    var key = toKey(path[index]);

    // Always block "__proto__" anywhere in the path if it's not expected
    if (key === '__proto__' && !hasOwnProperty.call(object, '__proto__')) {
      return false;
    }

    // Block constructor/prototype as non-terminal traversal keys to prevent
    // escaping the object graph into built-in constructors and prototypes.
    if ((key === 'constructor' || key === 'prototype') && index < length - 1) {
      return false;
    }
  }

  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}

module.exports = baseUnset;
