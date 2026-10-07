"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce distracting elements are not used.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = function errorMessage(element) {
  return "Do not use <".concat(element, "> elements as they can create visual accessibility issues and are deprecated.");
};
var DEFAULT_ELEMENTS = ['marquee', 'blink'];
var schema = (0, _schemas.generateObjSchema)({
  elements: (0, _schemas.enumArraySchema)(DEFAULT_ELEMENTS)
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md',
      description: 'Enforce distracting elements are not used.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var options = context.options[0] || {};
        var elementOptions = options.elements || DEFAULT_ELEMENTS;
        var type = elementType(node);
        var distractingElement = elementOptions.find(function (element) {
          return type === element;
        });
        if (distractingElement) {
          context.report({
            node,
            message: errorMessage(distractingElement)
          });
        }
      }
    };
  }
};
module.exports = exports.default;