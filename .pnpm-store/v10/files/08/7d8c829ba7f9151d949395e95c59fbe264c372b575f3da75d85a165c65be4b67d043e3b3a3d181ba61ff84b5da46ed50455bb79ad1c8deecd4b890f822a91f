"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
/**
 * Returns boolean indicating whether the given element has been specified with
 * an AST node with a non-literal type.
 *
 * Returns true if the elements has a role and its value is not of a type Literal.
 * Otherwise returns false.
 */
var isNonLiteralProperty = function isNonLiteralProperty(attributes, propName) {
  var prop = (0, _jsxAstUtils.getProp)(attributes, propName);
  if (!prop) return false;
  var propValue = prop.value;
  if (!propValue) return false;
  if (propValue.type === 'Literal') return false;
  if (propValue.type === 'JSXExpressionContainer') {
    var expression = propValue.expression;
    if (expression.type === 'Identifier' && expression.name === 'undefined') return false;
    if (expression.type === 'JSXText') return false;
  }
  return true;
};
var _default = exports["default"] = isNonLiteralProperty;
module.exports = exports.default;