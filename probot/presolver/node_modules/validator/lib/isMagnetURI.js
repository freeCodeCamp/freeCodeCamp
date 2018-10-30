'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMagnetURI;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  (0, _assertString2.default)(url);
  return magnetURI.test(url.trim());
}
module.exports = exports['default'];