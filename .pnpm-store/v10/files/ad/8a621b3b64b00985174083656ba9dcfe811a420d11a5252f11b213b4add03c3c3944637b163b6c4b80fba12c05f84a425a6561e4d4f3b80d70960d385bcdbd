"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _blacklist = _interopRequireDefault(require("./blacklist"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function stripLow(str, keep_new_lines) {
  (0, _assertString.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist.default)(str, chars);
}
module.exports = exports.default;
module.exports.default = exports.default;