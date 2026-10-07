"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function toBoolean(str, strict) {
  (0, _assertString.default)(str);
  if (strict) {
    return str === '1' || /^true$/i.test(str);
  }
  return str !== '0' && !/^false$/i.test(str) && str !== '';
}
module.exports = exports.default;
module.exports.default = exports.default;