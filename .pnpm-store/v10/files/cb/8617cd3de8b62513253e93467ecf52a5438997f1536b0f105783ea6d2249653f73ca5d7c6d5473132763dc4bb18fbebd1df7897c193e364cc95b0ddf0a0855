"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getComputedRole;
var _getExplicitRole = _interopRequireDefault(require("./getExplicitRole"));
var _getImplicitRole = _interopRequireDefault(require("./getImplicitRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns an element's computed role, which is
 *
 *  1. The valid value of its explicit role attribute; or
 *  2. The implicit value of its tag.
 */
function getComputedRole(tag, attributes) {
  return (0, _getExplicitRole["default"])(tag, attributes) || (0, _getImplicitRole["default"])(tag, attributes);
}
module.exports = exports.default;