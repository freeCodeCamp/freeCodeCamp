"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImplicitRoleForMenuitem;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns the implicit role for a menuitem tag.
 */
function getImplicitRoleForMenuitem(attributes) {
  var type = (0, _jsxAstUtils.getProp)(attributes, 'type');
  if (type) {
    var value = (0, _jsxAstUtils.getLiteralPropValue)(type) || '';
    switch (typeof value === 'string' && value.toUpperCase()) {
      case 'COMMAND':
        return 'menuitem';
      case 'CHECKBOX':
        return 'menuitemcheckbox';
      case 'RADIO':
        return 'menuitemradio';
      default:
        return '';
    }
  }
  return '';
}
module.exports = exports.default;