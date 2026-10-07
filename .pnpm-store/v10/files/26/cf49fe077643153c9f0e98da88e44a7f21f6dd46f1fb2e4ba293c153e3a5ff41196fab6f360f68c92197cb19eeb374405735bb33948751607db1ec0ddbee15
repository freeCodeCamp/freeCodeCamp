"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBIC;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _isISO31661Alpha = require("./isISO31661Alpha2");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// https://en.wikipedia.org/wiki/ISO_9362
var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
function isBIC(str) {
  (0, _assertString.default)(str);

  // toUpperCase() should be removed when a new major version goes out that changes
  // the regex to [A-Z] (per the spec).
  var countryCode = str.slice(4, 6).toUpperCase();
  if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== 'XK') {
    return false;
  }
  return isBICReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;