"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _hasAccessibleChild = _interopRequireDefault(require("../util/hasAccessibleChild"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce heading (h1, h2, etc) elements contain accessible content.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Headings must have content and the content must be accessible by a screen reader.';
var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
var schema = (0, _schemas.generateObjSchema)({
  components: _schemas.arraySchema
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md',
      description: 'Enforce heading (`h1`, `h2`, etc) elements contain accessible content.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var options = context.options[0] || {};
        var componentOptions = options.components || [];
        var typeCheck = headings.concat(componentOptions);
        var nodeType = elementType(node);

        // Only check 'h*' elements and custom types.
        if (typeCheck.indexOf(nodeType) === -1) {
          return;
        }
        if ((0, _hasAccessibleChild["default"])(node.parent, elementType)) {
          return;
        }
        if ((0, _isHiddenFromScreenReader["default"])(nodeType, node.attributes)) {
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