'use strict';

function clone(value) {
  if (typeof value === 'object' && value !== null) {
    return _merge(Array.isArray(value) ? [] : {}, value);
  }
  return value;
}

function isObjectOrArrayOrFunction(value) {
  return (
    typeof value === 'function' ||
    Array.isArray(value) ||
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

function _merge(target, source) {
  if (target === source) {
    return target;
  }

  // eslint-disable-next-line instantsearch/no-for-in
  for (var key in source) {
    if (
      !Object.prototype.hasOwnProperty.call(source, key) ||
      key === '__proto__' ||
      key === 'constructor'
    ) {
      // eslint-disable-next-line no-continue
      continue;
    }

    var sourceVal = source[key];
    var targetVal = target[key];

    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (
      isObjectOrArrayOrFunction(targetVal) &&
      isObjectOrArrayOrFunction(sourceVal)
    ) {
      target[key] = _merge(targetVal, sourceVal);
    } else {
      target[key] = clone(sourceVal);
    }
  }
  return target;
}

/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} target The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */
function merge(target) {
  if (!isObjectOrArrayOrFunction(target)) {
    target = {};
  }

  for (var i = 1, l = arguments.length; i < l; i++) {
    var source = arguments[i];

    if (isObjectOrArrayOrFunction(source)) {
      _merge(target, source);
    }
  }
  return target;
}

module.exports = merge;
