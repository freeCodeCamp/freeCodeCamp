"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
/**
 * @fileoverview Enforce tabIndex value is not greater than zero.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Avoid positive integer values for tabIndex.';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md',
      description: 'Enforce `tabIndex` value is not greater than zero.'
    },
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        var name = (0, _jsxAstUtils.propName)(attribute).toUpperCase();

        // Check if tabIndex is the attribute
        if (name !== 'TABINDEX') {
          return;
        }

        // Only check literals because we can't infer values from certain expressions.
        var value = Number((0, _jsxAstUtils.getLiteralPropValue)(attribute));

        // eslint-disable-next-line no-restricted-globals
        if (isNaN(value) || value <= 0) {
          return;
        }
        context.report({
          node: attribute,
          message: errorMessage
        });
      }
    };
  }
};
module.exports = exports.default;