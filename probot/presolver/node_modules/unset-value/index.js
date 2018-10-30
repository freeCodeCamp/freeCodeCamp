/*!
 * unset-value <https://github.com/jonschlinkert/unset-value>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var has = require('has-value');

module.exports = function unset(obj, prop) {
  if (!isObject(obj)) {
    throw new TypeError('expected an object.');
  }
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  }

  if (has(obj, prop)) {
    var segs = prop.split('.');
    var last = segs.pop();
    while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
      last = segs.pop().slice(0, -1) + '.' + last;
    }
    while (segs.length) obj = obj[prop = segs.shift()];
    return (delete obj[last]);
  }
  return true;
};
