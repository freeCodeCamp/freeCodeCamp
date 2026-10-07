"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBtcAddress;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var bech32 = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/;
var base58 = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
function isBtcAddress(str) {
  (0, _assertString.default)(str);
  return bech32.test(str) || base58.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;