"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _languageTags = _interopRequireDefault(require("language-tags"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce lang attribute has a valid value.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'lang attribute must have a valid value.';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md',
      description: 'Enforce lang attribute has a valid value.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXAttribute: function JSXAttribute(node) {
        var name = (0, _jsxAstUtils.propName)(node);
        if (name && name.toUpperCase() !== 'LANG') {
          return;
        }
        var parent = node.parent;
        var type = elementType(parent);
        if (type && type !== 'html') {
          return;
        }
        var value = (0, _jsxAstUtils.getLiteralPropValue)(node);

        // Don't check identifiers
        if (value === null) {
          return;
        }
        if (value === undefined) {
          context.report({
            node,
            message: errorMessage
          });
          return;
        }
        if (_languageTags["default"].check(value)) {
          return;
        }
        context.report({
          node,
          message: errorMessage
        });
      }
    };
  }
};
module.exports = exports.default;