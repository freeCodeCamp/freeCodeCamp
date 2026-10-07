"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _schemas = require("../util/schemas");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce aria role attribute is valid.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Elements with ARIA roles must use a valid, non-abstract ARIA role.';
var schema = (0, _schemas.generateObjSchema)({
  allowedInvalidRoles: {
    items: {
      type: 'string'
    },
    type: 'array',
    uniqueItems: true
  },
  ignoreNonDOM: {
    type: 'boolean',
    "default": false
  }
});
var validRoles = new Set(_ariaQuery.roles.keys().filter(function (role) {
  return _ariaQuery.roles.get(role)["abstract"] === false;
}));
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md',
      description: 'Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var options = context.options[0] || {};
    var ignoreNonDOM = !!options.ignoreNonDOM;
    var allowedInvalidRoles = new Set(options.allowedInvalidRoles || []);
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        // If ignoreNonDOM and the parent isn't DOM, don't run rule.
        if (ignoreNonDOM) {
          var type = elementType(attribute.parent);
          if (!_ariaQuery.dom.get(type)) {
            return;
          }
        }

        // Get prop name
        var name = (0, _jsxAstUtils.propName)(attribute).toUpperCase();
        if (name !== 'ROLE') {
          return;
        }
        var value = (0, _jsxAstUtils.getLiteralPropValue)(attribute);

        // If value is undefined, then the role attribute will be dropped in the DOM.
        // If value is null, then getLiteralAttributeValue is telling us that the
        // value isn't in the form of a literal.
        if (value === undefined || value === null) {
          return;
        }
        var values = String(value).split(' ');
        var isValid = values.every(function (val) {
          return allowedInvalidRoles.has(val) || validRoles.has(val);
        });
        if (isValid === true) {
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