"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _emojiRegex = _interopRequireDefault(require("emoji-regex"));
var _jsxAstUtils = require("jsx-ast-utils");
var _safeRegexTest = _interopRequireDefault(require("safe-regex-test"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _isHiddenFromScreenReader = _interopRequireDefault(require("../util/isHiddenFromScreenReader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce emojis are wrapped in <span> and provide screen reader access.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var errorMessage = 'Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby.';
var schema = (0, _schemas.generateObjSchema)();
var _default = exports["default"] = {
  meta: {
    docs: {
      description: 'Enforce emojis are wrapped in `<span>` and provide screen reader access.',
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md'
    },
    deprecated: true,
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    var testEmoji = (0, _safeRegexTest["default"])((0, _emojiRegex["default"])());
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var literalChildValue = node.parent.children.find(function (child) {
          return child.type === 'Literal' || child.type === 'JSXText';
        });
        if (literalChildValue && testEmoji(literalChildValue.value)) {
          var elementIsHidden = (0, _isHiddenFromScreenReader["default"])(elementType(node), node.attributes);
          if (elementIsHidden) {
            return; // emoji is decorative
          }
          var rolePropValue = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'role'));
          var ariaLabelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-label');
          var arialLabelledByProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-labelledby');
          var hasLabel = ariaLabelProp !== undefined || arialLabelledByProp !== undefined;
          var isSpan = elementType(node) === 'span';
          if (hasLabel === false || rolePropValue !== 'img' || isSpan === false) {
            context.report({
              node,
              message: errorMessage
            });
          }
        }
      }
    };
  }
};
module.exports = exports.default;