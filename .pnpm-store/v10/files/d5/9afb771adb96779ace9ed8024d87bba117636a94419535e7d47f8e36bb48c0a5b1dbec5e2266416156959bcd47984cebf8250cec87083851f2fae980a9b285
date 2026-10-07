"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function isFullWidth(str) {
  (0, _assertString.default)(str);
  return fullWidth.test(str);
}