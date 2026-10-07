"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _includesArray = _interopRequireDefault(require("./util/includesArray"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var defaultOptions = {
  loose: false
};
var strictBooleans = ['true', 'false', '1', '0'];
var looseBooleans = [].concat(strictBooleans, ['yes', 'no']);
function isBoolean(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  (0, _assertString.default)(str);
  if (options.loose) {
    return (0, _includesArray.default)(looseBooleans, str.toLowerCase());
  }
  return (0, _includesArray.default)(strictBooleans, str);
}
module.exports = exports.default;
module.exports.default = exports.default;