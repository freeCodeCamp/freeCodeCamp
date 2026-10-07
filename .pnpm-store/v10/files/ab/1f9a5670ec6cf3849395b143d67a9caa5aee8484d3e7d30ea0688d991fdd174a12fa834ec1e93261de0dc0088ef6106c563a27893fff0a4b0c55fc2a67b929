"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getExplicitRole;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns an element's computed role, which is
 *
 *  1. The valid value of its explicit role attribute; or
 *  2. The implicit value of its tag.
 */
function getExplicitRole(tag, attributes) {
  var explicitRole = function toLowerCase(role) {
    if (typeof role === 'string') {
      return role.toLowerCase();
    }
    return null;
  }((0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(attributes, 'role')));
  if (_ariaQuery.roles.has(explicitRole)) {
    return explicitRole;
  }
  return null;
}
module.exports = exports.default;