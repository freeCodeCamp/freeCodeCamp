"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
/**
 * @fileoverview Enforce no accesskey attribute on element.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'No access key attribute allowed. Inconsistencies between keyboard shortcuts and keyboard commands used by screen readers and keyboard-only users create a11y complications.';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md',
      description: 'Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.'
    },
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var accessKey = (0, _jsxAstUtils.getProp)(node.attributes, 'accesskey');
        var accessKeyValue = (0, _jsxAstUtils.getPropValue)(accessKey);
        if (accessKey && accessKeyValue) {
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