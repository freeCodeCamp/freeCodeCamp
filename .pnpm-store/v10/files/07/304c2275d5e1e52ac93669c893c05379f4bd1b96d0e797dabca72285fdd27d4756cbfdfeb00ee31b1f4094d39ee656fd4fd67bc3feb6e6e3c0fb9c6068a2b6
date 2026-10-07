"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _hasown = _interopRequireDefault(require("hasown"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isAbstractRole = _interopRequireDefault(require("../util/isAbstractRole"));
var _isContentEditable = _interopRequireDefault(require("../util/isContentEditable"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
var _isInteractiveElement = _interopRequireDefault(require("../util/isInteractiveElement"));
var _isInteractiveRole = _interopRequireDefault(require("../util/isInteractiveRole"));
var _isNonInteractiveElement = _interopRequireDefault(require("../util/isNonInteractiveElement"));
var _isNonInteractiveRole = _interopRequireDefault(require("../util/isNonInteractiveRole"));
var _isPresentationRole = _interopRequireDefault(require("../util/isPresentationRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce non-interactive elements have no interactive handlers.
 * @author Jese Beach
 * 
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Non-interactive elements should not be assigned mouse or keyboard event listeners.';
var defaultInteractiveProps = [].concat(_jsxAstUtils.eventHandlersByType.focus, _jsxAstUtils.eventHandlersByType.image, _jsxAstUtils.eventHandlersByType.keyboard, _jsxAstUtils.eventHandlersByType.mouse);
var schema = (0, _schemas.generateObjSchema)({
  handlers: _schemas.arraySchema
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md',
      description: 'Non-interactive elements should not be assigned mouse or keyboard event listeners.'
    },
    schema: [schema]
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
        var attributes = node.attributes;
        var type = elementType(node);
        var config = options[0] || {};
        var interactiveProps = config.handlers || defaultInteractiveProps;
        // Allow overrides from rule configuration for specific elements and roles.
        if ((0, _hasown["default"])(config, type)) {
          attributes = attributes.filter(function (attr) {
            return attr.type !== 'JSXSpreadAttribute' && !(0, _arrayIncludes["default"])(config[type], (0, _jsxAstUtils.propName)(attr));
          });
        }
        var hasInteractiveProps = interactiveProps.some(function (prop) {
          return (0, _jsxAstUtils.hasProp)(attributes, prop) && (0, _jsxAstUtils.getPropValue)((0, _jsxAstUtils.getProp)(attributes, prop)) != null;
        });
        if (!_ariaQuery.dom.has(type)) {
          // Do not test higher level JSX components, as we do not know what
          // low-level DOM element this maps to.
          return;
        }
        if (!hasInteractiveProps || (0, _isContentEditable["default"])(type, attributes) || (0, _isHiddenFromScreenReader["default"])(type, attributes) || (0, _isPresentationRole["default"])(type, attributes)) {
          // Presentation is an intentional signal from the author that this
          // element is not meant to be perceivable. For example, a click screen
          // to close a dialog .
          return;
        }
        if ((0, _isInteractiveElement["default"])(type, attributes) || (0, _isInteractiveRole["default"])(type, attributes) || !(0, _isNonInteractiveElement["default"])(type, attributes) && !(0, _isNonInteractiveRole["default"])(type, attributes) || (0, _isAbstractRole["default"])(type, attributes)) {
          // This rule has no opinion about abtract roles.
          return;
        }

        // Visible, non-interactive elements should not have an interactive handler.
        context.report({
          node,
          message: errorMessage
        });
      })
    };
  }
};
module.exports = exports.default;