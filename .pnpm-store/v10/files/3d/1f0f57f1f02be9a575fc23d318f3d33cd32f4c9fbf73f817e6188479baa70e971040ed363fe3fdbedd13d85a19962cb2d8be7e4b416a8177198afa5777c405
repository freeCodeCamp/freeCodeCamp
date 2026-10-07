"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImplicitRoleForMenu;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns the implicit role for a menu tag.
 */
function getImplicitRoleForMenu(attributes) {
  var type = (0, _jsxAstUtils.getProp)(attributes, 'type');
  if (type) {
    var value = (0, _jsxAstUtils.getLiteralPropValue)(type);
    return value && value.toUpperCase() === 'TOOLBAR' ? 'toolbar' : '';
  }
  return '';
}
module.exports = exports.default;