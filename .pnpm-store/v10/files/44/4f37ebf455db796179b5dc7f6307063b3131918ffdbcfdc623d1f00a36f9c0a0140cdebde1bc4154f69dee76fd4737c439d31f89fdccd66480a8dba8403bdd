"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSemVer;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _multilineRegex = _interopRequireDefault(require("./util/multilineRegex"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */
var semanticVersioningRegex = (0, _multilineRegex.default)(['^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)', '(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))', '?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$'], 'i');
function isSemVer(str) {
  (0, _assertString.default)(str);
  return semanticVersioningRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;