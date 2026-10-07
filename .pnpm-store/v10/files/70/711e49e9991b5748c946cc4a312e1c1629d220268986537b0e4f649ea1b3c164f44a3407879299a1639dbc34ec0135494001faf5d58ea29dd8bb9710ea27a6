"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axeCore = require("axe-core");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Ensure autocomplete attribute is correct.
 * @author Wilco Fiers
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var schema = (0, _schemas.generateObjSchema)({
  inputComponents: _schemas.arraySchema
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md',
      description: 'Enforce that autocomplete attributes are used correctly.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var options = context.options[0] || {};
        var _options$inputCompone = options.inputComponents,
          inputComponents = _options$inputCompone === void 0 ? [] : _options$inputCompone;
        var inputTypes = ['input'].concat(inputComponents);
        var elType = elementType(node);
        var autocomplete = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'autocomplete'));
        if (typeof autocomplete !== 'string' || !inputTypes.includes(elType)) {
          return;
        }
        var type = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'type'));
        var _runVirtualRule = (0, _axeCore.runVirtualRule)('autocomplete-valid', {
            nodeName: 'input',
            attributes: {
              autocomplete,
              // Which autocomplete is valid depends on the input type
              type: type === null ? undefined : type
            }
          }),
          violations = _runVirtualRule.violations;
        if (violations.length === 0) {
          return;
        }
        // Since we only test one rule, with one node, return the message from first (and only) instance of each
        context.report({
          node,
          message: violations[0].nodes[0].all[0].message
        });
      }
    };
  }
};
module.exports = exports.default;