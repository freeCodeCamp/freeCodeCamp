"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
function isISRC(str) {
  (0, _assertString.default)(str);
  return isrc.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;