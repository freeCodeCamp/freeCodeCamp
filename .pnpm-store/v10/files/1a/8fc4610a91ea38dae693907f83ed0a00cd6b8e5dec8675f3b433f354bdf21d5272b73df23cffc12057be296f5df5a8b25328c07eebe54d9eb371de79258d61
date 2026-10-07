"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString.default)(str);
  return ascii.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;