/*!
 * object-visit <https://github.com/jonschlinkert/object-visit>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');

module.exports = function visit(thisArg, method, target, val) {
  if (!isObject(thisArg) && typeof thisArg !== 'function') {
    throw new Error('object-visit expects `thisArg` to be an object.');
  }

  if (typeof method !== 'string') {
    throw new Error('object-visit expects `method` name to be a string');
  }

  if (typeof thisArg[method] !== 'function') {
    return thisArg;
  }

  var args = [].slice.call(arguments, 3);
  target = target || {};

  for (var key in target) {
    var arr = [key, target[key]].concat(args);
    thisArg[method].apply(thisArg, arr);
  }
  return thisArg;
};
