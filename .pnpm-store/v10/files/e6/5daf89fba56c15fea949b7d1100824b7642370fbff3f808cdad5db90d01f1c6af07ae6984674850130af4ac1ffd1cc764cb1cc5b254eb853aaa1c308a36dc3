"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce usage of onBlur over onChange for accessibility.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'onBlur must be used instead of onchange, unless absolutely necessary and it causes no negative consequences for keyboard only or screen reader users.';
var applicableTypes = ['select', 'option'];
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md',
      description: 'Enforce usage of `onBlur` over `onChange` on select menus for accessibility.'
    },
    deprecated: true,
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var nodeType = elementType(node);
        if (applicableTypes.indexOf(nodeType) === -1) {
          return;
        }
        var onChange = (0, _jsxAstUtils.getProp)(node.attributes, 'onChange');
        var hasOnBlur = (0, _jsxAstUtils.getProp)(node.attributes, 'onBlur') !== undefined;
        if (onChange && !hasOnBlur) {
          context.report({
            node,
            message: errorMessage
          });
        }
      }
    };
  }
};
module.exports = exports.default;