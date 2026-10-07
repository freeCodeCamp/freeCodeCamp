"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.correctPath = correctPath;
exports.unixify = unixify;
var isWin = process.platform === 'win32';
function removeTrailingSeparator(str) {
  var i = str.length - 1;
  if (i < 2) {
    return str;
  }
  while (isSeparator(str, i)) {
    i--;
  }
  return str.substr(0, i + 1);
}
function isSeparator(str, i) {
  var _char = str[i];
  return i > 0 && (_char === '/' || isWin && _char === '\\');
}
function normalizePath(str, stripTrailing) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }
  str = str.replace(/[\\\/]+/g, '/');
  if (stripTrailing !== false) {
    str = removeTrailingSeparator(str);
  }
  return str;
}
function unixify(filepath) {
  var stripTrailing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (isWin) {
    filepath = normalizePath(filepath, stripTrailing);
    return filepath.replace(/^([a-zA-Z]+:|\.\/)/, '');
  }
  return filepath;
}
function correctPath(filepath) {
  return unixify(filepath.replace(/^\\\\\?\\.:\\/, '\\'));
}