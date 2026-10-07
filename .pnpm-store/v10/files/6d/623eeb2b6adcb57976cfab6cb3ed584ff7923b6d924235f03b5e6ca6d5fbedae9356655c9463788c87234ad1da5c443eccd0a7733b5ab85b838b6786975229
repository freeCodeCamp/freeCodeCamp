"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterationDecorator;
var _iteratorProxy = _interopRequireDefault(require("./iteratorProxy"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function iterationDecorator(collection, entries) {
  if (typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol') {
    Object.defineProperty(collection, Symbol.iterator, {
      value: _iteratorProxy.default.bind(entries)
    });
  }
  return collection;
}