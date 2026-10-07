"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
var _isInteractiveElement = _interopRequireDefault(require("../util/isInteractiveElement"));
var _isPresentationRole = _interopRequireDefault(require("../util/isPresentationRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce a clickable non-interactive element has at least 1 keyboard event listener.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Visible, non-interactive elements with click handlers must have at least one keyboard listener.';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md',
      description: 'Enforce a clickable non-interactive element has at least one keyboard event listener.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var props = node.attributes;
        if ((0, _jsxAstUtils.getProp)(props, 'onclick') === undefined) {
          return;
        }
        var type = elementType(node);
        var requiredProps = ['onkeydown', 'onkeyup', 'onkeypress'];
        if (!_ariaQuery.dom.has(type)) {
          // Do not test higher level JSX components, as we do not know what
          // low-level DOM element this maps to.
          return;
        }
        if ((0, _isHiddenFromScreenReader["default"])(type, props) || (0, _isPresentationRole["default"])(type, props)) {
          return;
        }
        if ((0, _isInteractiveElement["default"])(type, props)) {
          return;
        }
        if ((0, _jsxAstUtils.hasAnyProp)(props, requiredProps)) {
          return;
        }

        // Visible, non-interactive elements with click handlers require one keyboard event listener.
        context.report({
          node,
          message: errorMessage
        });
      }
    };
  }
};
module.exports = exports.default;