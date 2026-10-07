"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _merge = _interopRequireDefault(require("./util/merge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var base64WithPadding = /^[A-Za-z0-9+/]+={0,2}$/;
var base64WithoutPadding = /^[A-Za-z0-9+/]+$/;
var base64UrlWithPadding = /^[A-Za-z0-9_-]+={0,2}$/;
var base64UrlWithoutPadding = /^[A-Za-z0-9_-]+$/;
function isBase64(str, options) {
  var _options;
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, {
    urlSafe: false,
    padding: !((_options = options) !== null && _options !== void 0 && _options.urlSafe)
  });
  if (str === '') return true;
  if (options.padding && str.length % 4 !== 0) return false;
  var regex;
  if (options.urlSafe) {
    regex = options.padding ? base64UrlWithPadding : base64UrlWithoutPadding;
  } else {
    regex = options.padding ? base64WithPadding : base64WithoutPadding;
  }
  return (!options.padding || str.length % 4 === 0) && regex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;