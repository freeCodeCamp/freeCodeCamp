"use strict";

exports.__esModule = true;
exports.scope = exports.path = undefined;

var _weakMap = require("babel-runtime/core-js/weak-map");

var _weakMap2 = _interopRequireDefault(_weakMap);

exports.clear = clear;
exports.clearPath = clearPath;
exports.clearScope = clearScope;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = exports.path = new _weakMap2.default();
var scope = exports.scope = new _weakMap2.default();

function clear() {
  clearPath();
  clearScope();
}

function clearPath() {
  exports.path = path = new _weakMap2.default();
}

function clearScope() {
  exports.scope = scope = new _weakMap2.default();
}