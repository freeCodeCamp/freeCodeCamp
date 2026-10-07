"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mayHaveAccessibleLabel;
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _jsxAstUtils = require("jsx-ast-utils");
var _minimatch = _interopRequireDefault(require("minimatch"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns true if a labelling element is found or if it cannot determine if
 * a label is present because of expression containers or spread attributes.
 * A false return value means that the node definitely does not have a label,
 * but a true return return value means that the node may or may not have a
 * label.
 *
 * 
 */

function tryTrim(value) {
  return typeof value === 'string' ? value.trim() : value;
}
function hasLabellingProp(openingElement) {
  var additionalLabellingProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var labellingProps = [].concat('alt',
  // Assume alt is used correctly on an image
  'aria-label', 'aria-labelledby', additionalLabellingProps);
  return openingElement.attributes.some(function (attribute) {
    // We must assume that a spread value contains a labelling prop.
    if (attribute.type !== 'JSXAttribute') {
      return true;
    }
    // Attribute matches.
    if ((0, _arrayIncludes["default"])(labellingProps, (0, _jsxAstUtils.propName)(attribute)) && !!tryTrim((0, _jsxAstUtils.getPropValue)(attribute))) {
      return true;
    }
    return false;
  });
}
function mayHaveAccessibleLabel(root) {
  var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var additionalLabellingProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var getElementType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _jsxAstUtils.elementType;
  var controlComponents = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  function checkElement(node, depth) {
    // Bail when maxDepth is exceeded.
    if (depth > maxDepth) {
      return false;
    }
    // Check for literal text.
    if (node.type === 'Literal' && !!tryTrim(node.value)) {
      return true;
    }
    // Assume an expression container renders a label. It is the best we can
    // do in this case.
    if (node.type === 'JSXExpressionContainer') {
      return true;
    }
    // Check for JSXText.
    // $FlowFixMe Remove after updating ast-types-flow
    if (node.type === 'JSXText' && !!tryTrim(node.value)) {
      return true;
    }
    // Check for labelling props.
    if (node.openingElement
    /* $FlowFixMe */ && hasLabellingProp(node.openingElement, additionalLabellingProps)) {
      return true;
    }
    if (node.type === 'JSXElement' && node.children.length === 0 && node.openingElement) {
      // $FlowFixMe `node.openingElement` has `unknown` type
      var name = getElementType(node.openingElement);
      var isReactComponent = name.length > 0 && name[0] === name[0].toUpperCase();
      if (isReactComponent && !controlComponents.some(function (control) {
        return (0, _minimatch["default"])(name, control);
      })) {
        return true;
      }
    }

    // Recurse into the child element nodes.
    if (node.children) {
      /* $FlowFixMe */
      for (var i = 0; i < node.children.length; i += 1) {
        /* $FlowFixMe */
        if (checkElement(node.children[i], depth + 1)) {
          return true;
        }
      }
    }
    return false;
  }
  return checkElement(root, 0);
}
module.exports = exports.default;