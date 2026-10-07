"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isFocusable = _interopRequireDefault(require("../util/isFocusable"));
var _schemas = require("../util/schemas");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce aria-hidden is not used on interactive elements or contain interactive elements.
 * @author Kate Higa
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md',
      description: 'Disallow `aria-hidden="true"` from being set on focusable elements.'
    },
    schema: [schema]
  },
  create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement(node) {
        var attributes = node.attributes;
        var type = elementType(node);
        var isAriaHidden = (0, _jsxAstUtils.getPropValue)((0, _jsxAstUtils.getProp)(attributes, 'aria-hidden')) === true;
        if (isAriaHidden && (0, _isFocusable["default"])(type, attributes)) {
          context.report({
            node,
            message: 'aria-hidden="true" must not be set on focusable elements.'
          });
        }
      }
    };
  }
};
module.exports = exports.default;