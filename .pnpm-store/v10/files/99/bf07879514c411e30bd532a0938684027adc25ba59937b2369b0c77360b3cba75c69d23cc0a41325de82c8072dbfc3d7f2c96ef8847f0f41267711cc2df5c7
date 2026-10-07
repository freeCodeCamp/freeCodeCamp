"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function isSurrogatePair(str) {
  (0, _assertString.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;