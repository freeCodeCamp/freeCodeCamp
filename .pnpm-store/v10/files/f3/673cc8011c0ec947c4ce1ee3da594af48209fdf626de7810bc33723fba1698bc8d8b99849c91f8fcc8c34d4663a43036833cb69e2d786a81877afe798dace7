"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _alpha = require("./alpha");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function isAlpha(_str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0, _assertString.default)(_str);
  var str = _str;
  var ignore = options.ignore;
  if (ignore) {
    if (ignore instanceof RegExp) {
      str = str.replace(ignore, '');
    } else if (typeof ignore === 'string') {
      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&'), "]"), 'g'), ''); // escape regex for ignore
    } else {
      throw new Error('ignore should be instance of a String or RegExp');
    }
  }
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = exports.locales = Object.keys(_alpha.alpha);