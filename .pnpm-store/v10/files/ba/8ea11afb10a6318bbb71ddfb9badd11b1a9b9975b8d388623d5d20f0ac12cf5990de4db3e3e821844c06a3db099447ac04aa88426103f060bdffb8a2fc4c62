"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _hasown = _interopRequireDefault(require("hasown"));
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _getExplicitRole = _interopRequireDefault(require("../util/getExplicitRole"));
var _isNonInteractiveElement = _interopRequireDefault(require("../util/isNonInteractiveElement"));
var _isInteractiveRole = _interopRequireDefault(require("../util/isInteractiveRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Disallow inherently non-interactive elements to be assigned
 * interactive roles.
 * @author Jesse Beach
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Non-interactive elements should not be assigned interactive roles.';
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md',
      description: 'Non-interactive elements should not be assigned interactive roles.'
    },
    schema: [{
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'string'
        },
        uniqueItems: true
      }
    }]
  },
  create: function create(context) {
    var options = context.options;
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        var attributeName = (0, _jsxAstUtils.propName)(attribute);
        // $FlowFixMe: [TODO] Mark propName as a JSXIdentifier, not a string.
        if (attributeName !== 'role') {
          return;
        }
        var node = attribute.parent;
        var attributes = node.attributes;
        var type = elementType(node);
        var role = (0, _getExplicitRole["default"])(type, node.attributes);
        if (!_ariaQuery.dom.has(type)) {
          // Do not test higher level JSX components, as we do not know what
          // low-level DOM element this maps to.
          return;
        }
        // Allow overrides from rule configuration for specific elements and
        // roles.
        var allowedRoles = options[0] || {};
        if ((0, _hasown["default"])(allowedRoles, type) && (0, _arrayIncludes["default"])(allowedRoles[type], role)) {
          return;
        }
        if ((0, _isNonInteractiveElement["default"])(type, attributes) && (0, _isInteractiveRole["default"])(type, attributes)) {
          context.report({
            node: attribute,
            message: errorMessage
          });
        }
      }
    };
  }
};
module.exports = exports.default;