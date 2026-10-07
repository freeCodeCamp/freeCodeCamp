"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _getTabIndex = _interopRequireDefault(require("../util/getTabIndex"));
var _isInteractiveElement = _interopRequireDefault(require("../util/isInteractiveElement"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce elements with aria-activedescendant are tabbable.
 * @author Jesse Beach <@jessebeach>
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'An element that manages focus with `aria-activedescendant` must have a tabindex';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md',
      description: 'Enforce elements with aria-activedescendant are tabbable.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var attributes = node.attributes;
        if ((0, _jsxAstUtils.getProp)(attributes, 'aria-activedescendant') === undefined) {
          return;
        }
        var type = elementType(node);
        // Do not test higher level JSX components, as we do not know what
        // low-level DOM element this maps to.
        if (!_ariaQuery.dom.has(type)) {
          return;
        }
        var tabIndex = (0, _getTabIndex["default"])((0, _jsxAstUtils.getProp)(attributes, 'tabIndex'));

        // If this is an interactive element and the tabindex attribute is not specified,
        // or the tabIndex property was not mutated, then the tabIndex
        // property will be undefined.
        if ((0, _isInteractiveElement["default"])(type, attributes) && tabIndex === undefined) {
          return;
        }
        if (tabIndex >= -1) {
          return;
        }
        context.report({
          node,
          message: errorMessage
        });
      }
    };
  }
};
module.exports = exports.default;