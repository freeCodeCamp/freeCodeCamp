"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _mayContainChildComponent = _interopRequireDefault(require("../util/mayContainChildComponent"));
var _mayHaveAccessibleLabel = _interopRequireDefault(require("../util/mayHaveAccessibleLabel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce label tags have an associated control.
 * @author Jesse Beach
 *
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'A form label must be associated with a control.';
var errorMessageNoLabel = 'A form label must have accessible text.';
var schema = (0, _schemas.generateObjSchema)({
  labelComponents: _schemas.arraySchema,
  labelAttributes: _schemas.arraySchema,
  controlComponents: _schemas.arraySchema,
  assert: {
    description: 'Assert that the label has htmlFor, a nested label, both or either',
    type: 'string',
    "enum": ['htmlFor', 'nesting', 'both', 'either']
  },
  depth: {
    description: 'JSX tree depth limit to check for accessible label',
    type: 'integer',
    minimum: 0
  }
});
function validateID(node, context) {
  var _settings$jsxA11y$at, _settings$jsxA11y, _settings$jsxA11y$att;
  var settings = context.settings;
  var htmlForAttributes = (_settings$jsxA11y$at = (_settings$jsxA11y = settings['jsx-a11y']) === null || _settings$jsxA11y === void 0 ? void 0 : (_settings$jsxA11y$att = _settings$jsxA11y.attributes) === null || _settings$jsxA11y$att === void 0 ? void 0 : _settings$jsxA11y$att["for"]) !== null && _settings$jsxA11y$at !== void 0 ? _settings$jsxA11y$at : ['htmlFor'];
  for (var i = 0; i < htmlForAttributes.length; i += 1) {
    var attribute = htmlForAttributes[i];
    if ((0, _jsxAstUtils.hasProp)(node.attributes, attribute)) {
      var htmlForAttr = (0, _jsxAstUtils.getProp)(node.attributes, attribute);
      var htmlForValue = (0, _jsxAstUtils.getPropValue)(htmlForAttr);
      return htmlForAttr !== false && !!htmlForValue;
    }
  }
  return false;
}
var _default = exports["default"] = {
  meta: {
    docs: {
      description: 'Enforce that a `label` tag has a text label and an associated control.',
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md'
    },
    schema: [schema]
  },
  create: function create(context) {
    var options = context.options[0] || {};
    var labelComponents = options.labelComponents || [];
    var assertType = options.assert || 'either';
    var componentNames = ['label'].concat(labelComponents);
    var elementType = (0, _getElementType["default"])(context);
    var rule = function rule(node) {
      if (componentNames.indexOf(elementType(node.openingElement)) === -1) {
        return;
      }
      var controlComponents = ['input', 'meter', 'output', 'progress', 'select', 'textarea'].concat(options.controlComponents || []);
      // Prevent crazy recursion.
      var recursionDepth = Math.min(options.depth === undefined ? 2 : options.depth, 25);
      var hasLabelId = validateID(node.openingElement, context);
      // Check for multiple control components.
      var hasNestedControl = controlComponents.some(function (name) {
        return (0, _mayContainChildComponent["default"])(node, name, recursionDepth, elementType);
      });
      var hasAccessibleLabel = (0, _mayHaveAccessibleLabel["default"])(node, recursionDepth, options.labelAttributes, elementType, controlComponents);
      if (!hasAccessibleLabel) {
        context.report({
          node: node.openingElement,
          message: errorMessageNoLabel
        });
        return;
      }
      switch (assertType) {
        case 'htmlFor':
          if (hasLabelId) {
            return;
          }
          break;
        case 'nesting':
          if (hasNestedControl) {
            return;
          }
          break;
        case 'both':
          if (hasLabelId && hasNestedControl) {
            return;
          }
          break;
        case 'either':
          if (hasLabelId || hasNestedControl) {
            return;
          }
          break;
        default:
          break;
      }

      // htmlFor case
      context.report({
        node: node.openingElement,
        message: errorMessage
      });
    };

    // Create visitor selectors.
    return {
      JSXElement: rule
    };
  }
};
module.exports = exports.default;