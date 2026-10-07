"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isDOMElement = _interopRequireDefault(require("../util/isDOMElement"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
var _isInteractiveElement = _interopRequireDefault(require("../util/isInteractiveElement"));
var _isInteractiveRole = _interopRequireDefault(require("../util/isInteractiveRole"));
var _mayHaveAccessibleLabel = _interopRequireDefault(require("../util/mayHaveAccessibleLabel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce controls are associated with a text label.
 * @author Jesse Beach
 *
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'A control must be associated with a text label.';
var ignoreList = ['link'];
var schema = (0, _schemas.generateObjSchema)({
  labelAttributes: _schemas.arraySchema,
  controlComponents: _schemas.arraySchema,
  ignoreElements: _schemas.arraySchema,
  ignoreRoles: _schemas.arraySchema,
  depth: {
    description: 'JSX tree depth limit to check for accessible label',
    type: 'integer',
    minimum: 0
  }
});
var _default = exports["default"] = {
  meta: {
    docs: {
      description: 'Enforce that a control (an interactive element) has a text label.',
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    var options = context.options[0] || {};
    var _options$labelAttribu = options.labelAttributes,
      labelAttributes = _options$labelAttribu === void 0 ? [] : _options$labelAttribu,
      _options$controlCompo = options.controlComponents,
      controlComponents = _options$controlCompo === void 0 ? [] : _options$controlCompo,
      _options$ignoreElemen = options.ignoreElements,
      ignoreElements = _options$ignoreElemen === void 0 ? [] : _options$ignoreElemen,
      _options$ignoreRoles = options.ignoreRoles,
      ignoreRoles = _options$ignoreRoles === void 0 ? [] : _options$ignoreRoles;
    var newIgnoreElements = new Set([].concat(ignoreElements, ignoreList));
    var rule = function rule(node) {
      var tag = elementType(node.openingElement);
      var role = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.openingElement.attributes, 'role'));
      // Ignore interactive elements that might get their label from a source
      // that cannot be discerned from static analysis, like
      // <label><input />Save</label>
      if (newIgnoreElements.has(tag)) {
        return;
      }
      // Ignore roles that are "interactive" but should not require a label.
      if ((0, _arrayIncludes["default"])(ignoreRoles, role)) {
        return;
      }
      var props = node.openingElement.attributes;
      var nodeIsDOMElement = (0, _isDOMElement["default"])(tag);
      var nodeIsHiddenFromScreenReader = (0, _isHiddenFromScreenReader["default"])(tag, props);
      var nodeIsInteractiveElement = (0, _isInteractiveElement["default"])(tag, props);
      var nodeIsInteractiveRole = (0, _isInteractiveRole["default"])(tag, props);
      var nodeIsControlComponent = controlComponents.indexOf(tag) > -1;
      if (nodeIsHiddenFromScreenReader) {
        return;
      }
      var hasAccessibleLabel = true;
      if (nodeIsInteractiveElement || nodeIsDOMElement && nodeIsInteractiveRole || nodeIsControlComponent) {
        // Prevent crazy recursion.
        var recursionDepth = Math.min(options.depth === undefined ? 2 : options.depth, 25);
        hasAccessibleLabel = (0, _mayHaveAccessibleLabel["default"])(node, recursionDepth, labelAttributes, elementType, controlComponents);
      }
      if (!hasAccessibleLabel) {
        context.report({
          node: node.openingElement,
          message: errorMessage
        });
      }
    };

    // Create visitor selectors.
    return {
      JSXElement: rule
    };
  }
};
module.exports = exports.default;