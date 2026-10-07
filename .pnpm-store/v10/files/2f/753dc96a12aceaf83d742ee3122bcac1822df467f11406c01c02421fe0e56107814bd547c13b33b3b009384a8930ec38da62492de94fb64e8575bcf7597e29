"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJSON;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _includesArray = _interopRequireDefault(require("./util/includesArray"));
var _merge = _interopRequireDefault(require("./util/merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var default_json_options = {
  allow_primitives: false,
  allow_any_value: false
};
function isJSON(str, options) {
  (0, _assertString.default)(str);
  try {
    options = (0, _merge.default)(options, default_json_options);
    var obj = JSON.parse(str);

    // When allow_any_value is true, accept anything that JSON.parse successfully parses
    if (options.allow_any_value) {
      return true;
    }
    var primitives = [];
    if (options.allow_primitives) {
      primitives = [null, false, true];
    }
    return (0, _includesArray.default)(primitives, obj) || !!obj && _typeof(obj) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports.default;
module.exports.default = exports.default;