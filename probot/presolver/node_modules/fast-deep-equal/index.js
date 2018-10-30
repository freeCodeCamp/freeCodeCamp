'use strict';

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  var dateA = a instanceof Date
    , dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime();

  var regexpA = a instanceof RegExp
    , regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = 0; i < length; i++)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = 0; i < length; i++) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};
