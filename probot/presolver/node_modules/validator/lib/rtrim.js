'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  for (; idx >= 0 && pattern.test(str[idx]); idx--) {}

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];