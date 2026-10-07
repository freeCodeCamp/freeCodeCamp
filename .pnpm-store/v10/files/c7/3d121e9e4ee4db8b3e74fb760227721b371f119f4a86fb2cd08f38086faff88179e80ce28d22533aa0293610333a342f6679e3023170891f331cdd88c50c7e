"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _isFullWidth = require("./isFullWidth");
var _isHalfWidth = require("./isHalfWidth");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function isVariableWidth(str) {
  (0, _assertString.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;