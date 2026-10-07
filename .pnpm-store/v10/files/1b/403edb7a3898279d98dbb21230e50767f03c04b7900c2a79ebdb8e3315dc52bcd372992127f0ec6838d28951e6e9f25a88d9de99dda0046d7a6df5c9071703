"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function unescape(str) {
  (0, _assertString.default)(str);
  return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`').replace(/&amp;/g, '&');
  // &amp; replacement has to be the last one to prevent
  // bugs with intermediate strings containing escape sequences
  // See: https://github.com/validatorjs/validator.js/issues/1827
}
module.exports = exports.default;
module.exports.default = exports.default;