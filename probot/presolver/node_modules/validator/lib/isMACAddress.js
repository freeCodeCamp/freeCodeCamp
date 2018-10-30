'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

function isMACAddress(str, options) {
  (0, _assertString2.default)(str);
  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }
  return macAddress.test(str);
}
module.exports = exports['default'];