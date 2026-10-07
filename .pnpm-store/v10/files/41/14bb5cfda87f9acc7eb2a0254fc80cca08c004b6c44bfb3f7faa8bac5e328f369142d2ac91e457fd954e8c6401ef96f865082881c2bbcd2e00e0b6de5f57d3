"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _alpha = require("./alpha");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var numericNoSymbols = /^[0-9]+$/;
function isNumeric(str, options) {
  (0, _assertString.default)(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : '.', "])?[0-9]+$")).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;