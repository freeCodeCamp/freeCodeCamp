"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var isDisabledElement = function isDisabledElement(attributes) {
  var disabledAttr = (0, _jsxAstUtils.getProp)(attributes, 'disabled');
  var disabledAttrValue = (0, _jsxAstUtils.getPropValue)(disabledAttr);
  var isHTML5Disabled = disabledAttr && disabledAttrValue !== undefined;
  if (isHTML5Disabled) {
    return true;
  }
  var ariaDisabledAttr = (0, _jsxAstUtils.getProp)(attributes, 'aria-disabled');
  var ariaDisabledAttrValue = (0, _jsxAstUtils.getLiteralPropValue)(ariaDisabledAttr);
  if (ariaDisabledAttr && ariaDisabledAttrValue !== undefined && ariaDisabledAttrValue === true) {
    return true;
  }
  return false;
};
var _default = exports["default"] = isDisabledElement;
module.exports = exports.default;