"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _merge = _interopRequireDefault(require("./util/merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
var hexcolor_with_prefix = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
var default_is_hexcolor_options = {
  require_hashtag: false
};
function isHexColor(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_is_hexcolor_options);
  var hexcolor_regex = options.require_hashtag ? hexcolor_with_prefix : hexcolor;
  return hexcolor_regex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;