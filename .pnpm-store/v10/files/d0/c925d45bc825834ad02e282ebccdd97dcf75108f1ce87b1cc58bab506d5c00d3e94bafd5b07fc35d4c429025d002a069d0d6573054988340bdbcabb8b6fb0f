"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _hasown = _interopRequireDefault(require("hasown"));
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _getExplicitRole = _interopRequireDefault(require("../util/getExplicitRole"));
var _getImplicitRole = _interopRequireDefault(require("../util/getImplicitRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce explicit role property is not the
 * same as implicit/default role property on element.
 * @author Ethan Cohen <@evcohen>
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(element, implicitRole) {
  return "The element ".concat(element, " has an implicit role of ").concat(implicitRole, ". Defining this explicitly is redundant and should be avoided.");
};
var DEFAULT_ROLE_EXCEPTIONS = {
  nav: ['navigation']
};
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md',
      description: 'Enforce explicit role property is not the same as implicit/default role property on element.'
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
      JSXOpeningElement: function (_JSXOpeningElement) {
        function JSXOpeningElement(_x) {
          return _JSXOpeningElement.apply(this, arguments);
        }
        JSXOpeningElement.toString = function () {
          return _JSXOpeningElement.toString();
        };
        return JSXOpeningElement;
      }(function (node) {
        var type = elementType(node);
        var implicitRole = (0, _getImplicitRole["default"])(type, node.attributes);
        var explicitRole = (0, _getExplicitRole["default"])(type, node.attributes);
        if (!implicitRole || !explicitRole) {
          return;
        }
        if (implicitRole === explicitRole) {
          var allowedRedundantRoles = options[0] || {};
          var redundantRolesForElement;
          if ((0, _hasown["default"])(allowedRedundantRoles, type)) {
            redundantRolesForElement = allowedRedundantRoles[type];
          } else {
            redundantRolesForElement = DEFAULT_ROLE_EXCEPTIONS[type] || [];
          }
          if ((0, _arrayIncludes["default"])(redundantRolesForElement, implicitRole)) {
            return;
          }
          context.report({
            node,
            message: errorMessage(type, implicitRole.toLowerCase())
          });
        }
      })
    };
  }
};
module.exports = exports.default;