'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPort;

var _isInt = require('./isInt');

var _isInt2 = _interopRequireDefault(_isInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPort(str) {
  return (0, _isInt2.default)(str, { min: 0, max: 65535 });
}
module.exports = exports['default'];