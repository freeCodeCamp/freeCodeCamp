"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _merge = _interopRequireDefault(require("./util/merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var default_is_empty_options = {
  ignore_whitespace: false
};
function isEmpty(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_empty_options);
  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;