"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hasAccessibleChild;
var _jsxAstUtils = require("jsx-ast-utils");
var _isHiddenFromScreenReader = _interopRequireDefault(require("./isHiddenFromScreenReader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function hasAccessibleChild(node, elementType) {
  return node.children.some(function (child) {
    switch (child.type) {
      case 'Literal':
        return !!child.value;
      // $FlowFixMe JSXText is missing in ast-types-flow
      case 'JSXText':
        return !!child.value;
      case 'JSXElement':
        return !(0, _isHiddenFromScreenReader["default"])(elementType(child.openingElement), child.openingElement.attributes);
      case 'JSXExpressionContainer':
        if (child.expression.type === 'Identifier') {
          return child.expression.name !== 'undefined';
        }
        return true;
      default:
        return false;
    }
  }) || (0, _jsxAstUtils.hasAnyProp)(node.openingElement.attributes, ['dangerouslySetInnerHTML', 'children']);
}
module.exports = exports.default;