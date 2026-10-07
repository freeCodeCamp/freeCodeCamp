"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce that elements that do not support ARIA roles,
 *  states and properties do not have those attributes.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(invalidProp) {
  return "This element does not support ARIA roles, states and properties. Try removing the prop '".concat(invalidProp, "'.");
};
var invalidAttributes = new Set(_ariaQuery.aria.keys().concat('role'));
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md',
      description: 'Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var nodeType = elementType(node);
        var nodeAttrs = _ariaQuery.dom.get(nodeType) || {};
        var _nodeAttrs$reserved = nodeAttrs.reserved,
          isReservedNodeType = _nodeAttrs$reserved === void 0 ? false : _nodeAttrs$reserved;

        // If it's not reserved, then it can have aria-* roles, states, and properties
        if (isReservedNodeType === false) {
          return;
        }
        node.attributes.forEach(function (prop) {
          if (prop.type === 'JSXSpreadAttribute') {
            return;
          }
          var name = (0, _jsxAstUtils.propName)(prop).toLowerCase();
          if (invalidAttributes.has(name)) {
            context.report({
              node,
              message: errorMessage(name)
            });
          }
        });
      }
    };
  }
};
module.exports = exports.default;