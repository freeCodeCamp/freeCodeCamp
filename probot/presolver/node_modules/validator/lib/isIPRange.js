'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIPRange;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isIP = require('./isIP');

var _isIP2 = _interopRequireDefault(_isIP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  (0, _assertString2.default)(str);
  var parts = str.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return (0, _isIP2.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}
module.exports = exports['default'];