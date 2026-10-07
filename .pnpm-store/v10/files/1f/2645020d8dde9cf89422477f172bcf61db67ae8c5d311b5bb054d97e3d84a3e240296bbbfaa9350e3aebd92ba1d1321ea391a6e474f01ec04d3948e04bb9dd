"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var issn = '^\\d{4}-?\\d{3}[\\dX]$';
function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _assertString.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;
  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }
  return checksum % 11 === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;