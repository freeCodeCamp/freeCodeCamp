"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
/**
 * @fileoverview Enforce ARIA state and property values are valid.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(name, type, permittedValues) {
  switch (type) {
    case 'tristate':
      return "The value for ".concat(name, " must be a boolean or the string \"mixed\".");
    case 'token':
      return "The value for ".concat(name, " must be a single token from the following: ").concat(permittedValues, ".");
    case 'tokenlist':
      return "The value for ".concat(name, " must be a list of one or more tokens from the following: ").concat(permittedValues, ".");
    case 'idlist':
      return "The value for ".concat(name, " must be a list of strings that represent DOM element IDs (idlist)");
    case 'id':
      return "The value for ".concat(name, " must be a string that represents a DOM element ID");
    case 'boolean':
    case 'string':
    case 'integer':
    case 'number':
    default:
      return "The value for ".concat(name, " must be a ").concat(type, ".");
  }
};
var _validityCheck = function validityCheck(value, expectedType, permittedValues) {
  switch (expectedType) {
    case 'boolean':
      return typeof value === 'boolean';
    case 'string':
    case 'id':
      return typeof value === 'string';
    case 'tristate':
      return typeof value === 'boolean' || value === 'mixed';
    case 'integer':
    case 'number':
      // Booleans resolve to 0/1 values so hard check that it's not first.
      // eslint-disable-next-line no-restricted-globals
      return typeof value !== 'boolean' && isNaN(Number(value)) === false;
    case 'token':
      return permittedValues.indexOf(typeof value === 'string' ? value.toLowerCase() : value) > -1;
    case 'idlist':
      return typeof value === 'string' && value.split(' ').every(function (token) {
        return _validityCheck(token, 'id', []);
      });
    case 'tokenlist':
      return typeof value === 'string' && value.split(' ').every(function (token) {
        return permittedValues.indexOf(token.toLowerCase()) > -1;
      });
    default:
      return false;
  }
};
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  validityCheck: _validityCheck,
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md',
      description: 'Enforce ARIA state and property values are valid.'
    },
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        var name = (0, _jsxAstUtils.propName)(attribute);
        var normalizedName = name.toLowerCase();

        // Not a valid aria-* state or property.
        if (normalizedName.indexOf('aria-') !== 0 || _ariaQuery.aria.get(normalizedName) === undefined) {
          return;
        }

        // Ignore the attribute if its value is null or undefined.
        if ((0, _jsxAstUtils.getPropValue)(attribute) == null) return;
        var value = (0, _jsxAstUtils.getLiteralPropValue)(attribute);

        // Ignore the attribute if its value is not a literal.
        if (value === null) {
          return;
        }

        // These are the attributes of the property/state to check against.
        var attributes = _ariaQuery.aria.get(normalizedName);
        var permittedType = attributes.type;
        var allowUndefined = attributes.allowUndefined || false;
        var permittedValues = attributes.values || [];
        var isValid = _validityCheck(value, permittedType, permittedValues) || allowUndefined && value === undefined;
        if (isValid) {
          return;
        }
        context.report({
          node: attribute,
          message: errorMessage(name, permittedType, permittedValues)
        });
      }
    };
  }
};
module.exports = exports.default;