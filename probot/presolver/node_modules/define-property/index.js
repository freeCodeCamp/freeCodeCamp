/*!
 * define-property <https://github.com/jonschlinkert/define-property>
 *
 * Copyright (c) 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isobject = require('isobject');
var isDescriptor = require('is-descriptor');
var define = (typeof Reflect !== 'undefined' && Reflect.defineProperty)
  ? Reflect.defineProperty
  : Object.defineProperty;

module.exports = function defineProperty(obj, key, val) {
  if (!isobject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
    throw new TypeError('expected an object, function, or array');
  }

  if (typeof key !== 'string') {
    throw new TypeError('expected "key" to be a string');
  }

  if (isDescriptor(val)) {
    define(obj, key, val);
    return obj;
  }

  define(obj, key, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: val
  });

  return obj;
};
