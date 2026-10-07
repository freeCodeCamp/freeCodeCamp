"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImplicitRoleForInput;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns the implicit role for an input tag.
 */
function getImplicitRoleForInput(attributes) {
  var type = (0, _jsxAstUtils.getProp)(attributes, 'type');
  if (type) {
    var value = (0, _jsxAstUtils.getLiteralPropValue)(type) || '';
    switch (typeof value === 'string' && value.toUpperCase()) {
      case 'BUTTON':
      case 'IMAGE':
      case 'RESET':
      case 'SUBMIT':
        return 'button';
      case 'CHECKBOX':
        return 'checkbox';
      case 'RADIO':
        return 'radio';
      case 'RANGE':
        return 'slider';
      case 'EMAIL':
      case 'PASSWORD':
      case 'SEARCH': // with [list] selector it's combobox
      case 'TEL': // with [list] selector it's combobox
      case 'URL': // with [list] selector it's combobox
      default:
        return 'textbox';
    }
  }
  return 'textbox';
}
module.exports = exports.default;