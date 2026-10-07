"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _nullUndefinedCheck = _interopRequireDefault(require("./util/nullUndefinedCheck"));
var _alpha = require("./alpha");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function isFloat(str, options) {
  (0, _assertString.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (str === '' || str === '.' || str === ',' || str === '-' || str === '+') {
    return false;
  }
  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || (0, _nullUndefinedCheck.default)(options.min) || value >= options.min) && (!options.hasOwnProperty('max') || (0, _nullUndefinedCheck.default)(options.max) || value <= options.max) && (!options.hasOwnProperty('lt') || (0, _nullUndefinedCheck.default)(options.lt) || value < options.lt) && (!options.hasOwnProperty('gt') || (0, _nullUndefinedCheck.default)(options.gt) || value > options.gt);
}
var locales = exports.locales = Object.keys(_alpha.decimal);