"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _getImplicitRole = _interopRequireDefault(require("../util/getImplicitRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce that elements with explicit or implicit roles defined contain only
 * `aria-*` properties supported by that `role`.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(attr, role, tag, isImplicit) {
  if (isImplicit) {
    return "The attribute ".concat(attr, " is not supported by the role ").concat(role, ". This role is implicit on the element ").concat(tag, ".");
  }
  return "The attribute ".concat(attr, " is not supported by the role ").concat(role, ".");
};
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md',
      description: 'Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.'
    },
    schema: [schema]
  },
  create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement(node) {
        // If role is not explicitly defined, then try and get its implicit role.
        var type = elementType(node);
        var role = (0, _jsxAstUtils.getProp)(node.attributes, 'role');
        var roleValue = role ? (0, _jsxAstUtils.getLiteralPropValue)(role) : (0, _getImplicitRole["default"])(type, node.attributes);
        var isImplicit = roleValue && role === undefined;

        // If there is no explicit or implicit role, then assume that the element
        // can handle the global set of aria-* properties.
        // This actually isn't true - should fix in future release.
        if (typeof roleValue !== 'string' || _ariaQuery.roles.get(roleValue) === undefined) {
          return;
        }

        // Make sure it has no aria-* properties defined outside its property set.
        var _roles$get = _ariaQuery.roles.get(roleValue),
          propKeyValues = _roles$get.props;
        var invalidAriaPropsForRole = new Set(_ariaQuery.aria.keys().filter(function (attribute) {
          return !(attribute in propKeyValues);
        }));
        node.attributes.filter(function (prop) {
          return (0, _jsxAstUtils.getPropValue)(prop) != null // Ignore the attribute if its value is null or undefined.
          && prop.type !== 'JSXSpreadAttribute' // Ignore the attribute if it's a spread.
          ;
        }).forEach(function (prop) {
          var name = (0, _jsxAstUtils.propName)(prop);
          if (invalidAriaPropsForRole.has(name)) {
            context.report({
              node,
              message: errorMessage(name, roleValue, type, isImplicit)
            });
          }
        });
      }
    };
  }
};
module.exports = exports.default;