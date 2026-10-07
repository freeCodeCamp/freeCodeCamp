"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns boolean indicating that the aria-hidden prop
 * is present or the value is true. Will also return true if
 * there is an input with type='hidden'.
 *
 * <div aria-hidden /> is equivalent to the DOM as <div aria-hidden=true />.
 */
var isHiddenFromScreenReader = function isHiddenFromScreenReader(type, attributes) {
  if (type.toUpperCase() === 'INPUT') {
    var hidden = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(attributes, 'type'));
    if (hidden && hidden.toUpperCase() === 'HIDDEN') {
      return true;
    }
  }
  var ariaHidden = (0, _jsxAstUtils.getPropValue)((0, _jsxAstUtils.getProp)(attributes, 'aria-hidden'));
  return ariaHidden === true;
};
var _default = exports["default"] = isHiddenFromScreenReader;
module.exports = exports.default;