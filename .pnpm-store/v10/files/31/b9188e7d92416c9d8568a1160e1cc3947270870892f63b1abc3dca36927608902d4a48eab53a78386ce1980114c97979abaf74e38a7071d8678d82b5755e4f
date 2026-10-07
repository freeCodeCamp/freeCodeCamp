"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mayContainChildComponent;
var _jsxAstUtils = require("jsx-ast-utils");
var _minimatch = _interopRequireDefault(require("minimatch"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns true if it can positively determine that the element lacks an
 * accessible label. If no determination is possible, it returns false. Treat
 * false as an unknown value. The element might still have an accessible label,
 * but this module cannot determine it positively.
 *
 * 
 */

function mayContainChildComponent(root, componentName) {
  var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var elementType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _jsxAstUtils.elementType;
  function traverseChildren(node, depth) {
    // Bail when maxDepth is exceeded.
    if (depth > maxDepth) {
      return false;
    }
    if (node.children) {
      /* $FlowFixMe */
      for (var i = 0; i < node.children.length; i += 1) {
        /* $FlowFixMe */
        var childNode = node.children[i];
        // Assume an expression container renders a label. It is the best we can
        // do in this case.
        if (childNode.type === 'JSXExpressionContainer') {
          return true;
        }
        // Check for components with the provided name.
        if (childNode.type === 'JSXElement' && childNode.openingElement && (0, _minimatch["default"])(elementType(childNode.openingElement), componentName)) {
          return true;
        }
        if (traverseChildren(childNode, depth + 1)) {
          return true;
        }
      }
    }
    return false;
  }
  return traverseChildren(root, 1);
}
module.exports = exports.default;