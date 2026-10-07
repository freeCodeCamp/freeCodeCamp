"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isDisabledElement = _interopRequireDefault(require("../util/isDisabledElement"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
var _isInteractiveElement = _interopRequireDefault(require("../util/isInteractiveElement"));
var _isInteractiveRole = _interopRequireDefault(require("../util/isInteractiveRole"));
var _isNonInteractiveElement = _interopRequireDefault(require("../util/isNonInteractiveElement"));
var _isNonInteractiveRole = _interopRequireDefault(require("../util/isNonInteractiveRole"));
var _isPresentationRole = _interopRequireDefault(require("../util/isPresentationRole"));
var _getTabIndex = _interopRequireDefault(require("../util/getTabIndex"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce that elements with onClick handlers must be tabbable.
 * @author Ethan Cohen
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var schema = (0, _schemas.generateObjSchema)({
  tabbable: (0, _schemas.enumArraySchema)(_ariaQuery.roles.keys().filter(function (name) {
    return !_ariaQuery.roles.get(name)["abstract"] && _ariaQuery.roles.get(name).superClass.some(function (klasses) {
      return (0, _arrayIncludes["default"])(klasses, 'widget');
    });
  }))
});
var interactiveProps = [].concat(_jsxAstUtils.eventHandlersByType.mouse, _jsxAstUtils.eventHandlersByType.keyboard);
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md',
      description: 'Enforce that elements with interactive handlers like `onClick` must be focusable.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var tabbable = context.options && context.options[0] && context.options[0].tabbable || [];
        var attributes = node.attributes;
        var type = elementType(node);
        var hasInteractiveProps = (0, _jsxAstUtils.hasAnyProp)(attributes, interactiveProps);
        var hasTabindex = (0, _getTabIndex["default"])((0, _jsxAstUtils.getProp)(attributes, 'tabIndex')) !== undefined;
        if (!_ariaQuery.dom.has(type)) {
          // Do not test higher level JSX components, as we do not know what
          // low-level DOM element this maps to.
          return;
        }
        if (!hasInteractiveProps || (0, _isDisabledElement["default"])(attributes) || (0, _isHiddenFromScreenReader["default"])(type, attributes) || (0, _isPresentationRole["default"])(type, attributes)) {
          // Presentation is an intentional signal from the author that this
          // element is not meant to be perceivable. For example, a click screen
          // to close a dialog .
          return;
        }
        if (hasInteractiveProps && (0, _isInteractiveRole["default"])(type, attributes) && !(0, _isInteractiveElement["default"])(type, attributes) && !(0, _isNonInteractiveElement["default"])(type, attributes) && !(0, _isNonInteractiveRole["default"])(type, attributes) && !hasTabindex) {
          var role = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(attributes, 'role'));
          if ((0, _arrayIncludes["default"])(tabbable, role)) {
            // Always tabbable, tabIndex = 0
            context.report({
              node,
              message: "Elements with the '".concat(role, "' interactive role must be tabbable.")
            });
          } else {
            // Focusable, tabIndex = -1 or 0
            context.report({
              node,
              message: "Elements with the '".concat(role, "' interactive role must be focusable.")
            });
          }
        }
      }
    };
  }
};
module.exports = exports.default;