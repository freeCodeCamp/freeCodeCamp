'use strict';

var isExtendable = require('is-extendable');
var forIn = require('for-in');

function mixinDeep(target, objects) {
  var len = arguments.length, i = 0;
  while (++i < len) {
    var obj = arguments[i];
    if (isObject(obj)) {
      forIn(obj, copy, target);
    }
  }
  return target;
}

/**
 * Copy properties from the source object to the
 * target object.
 *
 * @param  {*} `val`
 * @param  {String} `key`
 */

function copy(val, key) {
  if (key === '__proto__') {
    return;
  }

  var obj = this[key];
  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    this[key] = val;
  }
}

/**
 * Returns true if `val` is an object or function.
 *
 * @param  {any} val
 * @return {Boolean}
 */

function isObject(val) {
  return isExtendable(val) && !Array.isArray(val);
}

/**
 * Expose `mixinDeep`
 */

module.exports = mixinDeep;
