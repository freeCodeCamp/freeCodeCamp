'use strict';

exports.repeat = function (str, num) {
  var result = '';
  for (var i = 0; i < num; i++) { result += str; }
  return result;
};

exports.arrayEqual = function (a, b) {
  if (a.length !== b.length) { return false; }
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) { return false; }
  }
  return true;
};

exports.trimChars = function (str, chars) {
  var start = 0;
  var end = str.length - 1;
  while (chars.indexOf(str.charAt(start)) >= 0) { start++; }
  while (chars.indexOf(str.charAt(end)) >= 0) { end--; }
  return str.slice(start, end + 1);
};

exports.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.arrayUnion = function () {
  var result = [];
  for (var i = 0, values = {}; i < arguments.length; i++) {
    var arr = arguments[i];
    for (var j = 0; j < arr.length; j++) {
      if (!values[arr[j]]) {
        values[arr[j]] = true;
        result.push(arr[j]);
      }
    }
  }
  return result;
};

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.has = has;

exports.extend = function (dest, src) {
  for (var i in src) {
    if (has(src, i)) { dest[i] = src[i]; }
  }
};

exports.trimEnd = function (str) {
  return str.replace(/\s+$/g, '');
};
