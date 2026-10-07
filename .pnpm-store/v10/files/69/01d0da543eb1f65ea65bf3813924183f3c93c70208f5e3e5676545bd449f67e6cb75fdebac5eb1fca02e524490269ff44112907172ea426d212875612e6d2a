"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getAccessibleChildText;
var _jsxAstUtils = require("jsx-ast-utils");
var _isHiddenFromScreenReader = _interopRequireDefault(require("./isHiddenFromScreenReader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns a new "standardized" string: all whitespace is collapsed to one space,
 * and the string is lowercase
 * @param {string} input
 * @returns lowercase, single-spaced, punctuation-stripped, trimmed string
 */
function standardizeSpaceAndCase(input) {
  return input.trim().replace(/[,.?¿!‽¡;:]/g, '') // strip punctuation
  .replace(/\s\s+/g, ' ') // collapse spaces
  .toLowerCase();
}

/**
 * Returns the (recursively-defined) accessible child text of a node, which (in-order) is:
 * 1. The element's aria-label
 * 2. If the element is a direct literal, the literal value
 * 3. Otherwise, merge all of its children
 * @param {JSXElement} node - node to traverse
 * @returns child text as a string
 */
function getAccessibleChildText(node, elementType) {
  var ariaLabel = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.openingElement.attributes, 'aria-label'));
  // early escape-hatch when aria-label is applied
  if (ariaLabel) return standardizeSpaceAndCase(ariaLabel);

  // early-return if alt prop exists and is an image
  var altTag = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.openingElement.attributes, 'alt'));
  if (elementType(node.openingElement) === 'img' && altTag) return standardizeSpaceAndCase(altTag);

  // skip if aria-hidden is true
  if ((0, _isHiddenFromScreenReader["default"])(elementType(node.openingElement), node.openingElement.attributes)) {
    return '';
  }
  var rawChildText = node.children.map(function (currentNode) {
    // $FlowFixMe JSXText is missing in ast-types-flow
    if (currentNode.type === 'Literal' || currentNode.type === 'JSXText') {
      return String(currentNode.value);
    }
    if (currentNode.type === 'JSXElement') {
      return getAccessibleChildText(currentNode, elementType);
    }
    return '';
  }).join(' ');
  return standardizeSpaceAndCase(rawChildText);
}
module.exports = exports.default;