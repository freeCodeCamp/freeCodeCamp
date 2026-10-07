"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _ariaQuery = require("aria-query");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce autoFocus prop is not used.
 * @author Ethan Cohen <@evcohen>
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'The autoFocus prop should not be used, as it can reduce usability and accessibility for users.';
var schema = (0, _schemas.generateObjSchema)({
  ignoreNonDOM: {
    type: 'boolean',
    "default": false
  }
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md',
      description: 'Enforce autoFocus prop is not used.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        // Determine if ignoreNonDOM is set to true
        // If true, then do not run rule.
        var options = context.options[0] || {};
        var ignoreNonDOM = !!options.ignoreNonDOM;
        if (ignoreNonDOM) {
          var type = elementType(attribute.parent);
          if (!_ariaQuery.dom.get(type)) {
            return;
          }
        }

        // Don't normalize, since React only recognizes autoFocus on low-level DOM elements.
        if ((0, _jsxAstUtils.propName)(attribute) === 'autoFocus') {
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