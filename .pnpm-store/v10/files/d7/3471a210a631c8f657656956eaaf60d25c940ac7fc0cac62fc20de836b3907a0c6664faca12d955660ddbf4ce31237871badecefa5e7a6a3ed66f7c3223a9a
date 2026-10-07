"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase58;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
function isBase58(str) {
  (0, _assertString.default)(str);
  return base58Reg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;