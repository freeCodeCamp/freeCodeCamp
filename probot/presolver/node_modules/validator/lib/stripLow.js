'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = require('./blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];