"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;
var _merge = _interopRequireDefault(require("./util/merge"));
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _includesArray = _interopRequireDefault(require("./util/includesArray"));
var _alpha = require("./alpha");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function decimalRegExp(options) {
  var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
  return regExp;
}
var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};
var blacklist = ['', '-', '+'];
function isDecimal(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_decimal_options);
  if (options.locale in _alpha.decimal) {
    return !(0, _includesArray.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }
  throw new Error("Invalid locale '".concat(options.locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;