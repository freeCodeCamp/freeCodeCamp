"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterationDecorator;
var _iteratorProxy = _interopRequireDefault(require("./iteratorProxy"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function iterationDecorator(collection, entries) {
  if (typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol') {
    Object.defineProperty(collection, Symbol.iterator, {
      value: _iteratorProxy.default.bind(entries)
    });
  }
  return collection;
}