"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isSemanticRoleElement = _interopRequireDefault(require("../util/isSemanticRoleElement"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce that elements with ARIA roles must
 *  have all required attributes for that role.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(role, requiredProps) {
  return "Elements with the ARIA role \"".concat(role, "\" must have the following attributes defined: ").concat(String(requiredProps).toLowerCase());
};
var schema = (0, _schemas.generateObjSchema)();
var roleKeys = _ariaQuery.roles.keys();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md',
      description: 'Enforce that elements with ARIA roles must have all required attributes for that role.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXAttribute: function JSXAttribute(attribute) {
        var name = (0, _jsxAstUtils.propName)(attribute).toLowerCase();
        if (name !== 'role') {
          return;
        }
        var type = elementType(attribute.parent);
        if (!_ariaQuery.dom.get(type)) {
          return;
        }
        var roleAttrValue = (0, _jsxAstUtils.getLiteralPropValue)(attribute);
        var attributes = attribute.parent.attributes;

        // If value is undefined, then the role attribute will be dropped in the DOM.
        // If value is null, then getLiteralAttributeValue is telling us
        // that the value isn't in the form of a literal.
        if (roleAttrValue === undefined || roleAttrValue === null) {
          return;
        }
        var normalizedValues = String(roleAttrValue).toLowerCase().split(' ');
        var validRoles = normalizedValues.filter(function (val) {
          return roleKeys.indexOf(val) > -1;
        });

        // Check semantic DOM elements
        // For example, <input type="checkbox" role="switch" />
        if ((0, _isSemanticRoleElement["default"])(type, attributes)) {
          return;
        }
        // Check arbitrary DOM elements
        validRoles.forEach(function (role) {
          var _roles$get = _ariaQuery.roles.get(role),
            requiredPropKeyValues = _roles$get.requiredProps;
          var requiredProps = Object.keys(requiredPropKeyValues);
          if (requiredProps.length > 0) {
            var hasRequiredProps = requiredProps.every(function (prop) {
              return (0, _jsxAstUtils.getProp)(attributes, prop);
            });
            if (hasRequiredProps === false) {
              context.report({
                node: attribute,
                message: errorMessage(role.toLowerCase(), requiredProps)
              });
            }
          }
        });
      }
    };
  }
};
module.exports = exports.default;