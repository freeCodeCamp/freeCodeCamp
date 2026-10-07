"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _schemas = require("../util/schemas");
var _getAccessibleChildText = _interopRequireDefault(require("../util/getAccessibleChildText"));
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce anchor text to not exactly match 'click here', 'here', 'link', 'learn more', and user-specified words.
 * @author Matt Wang
 * 
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var DEFAULT_AMBIGUOUS_WORDS = ['click here', 'here', 'link', 'a link', 'learn more'];
var schema = (0, _schemas.generateObjSchema)({
  words: _schemas.arraySchema
});
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md',
      description: 'Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    var typesToValidate = ['a'];
    var options = context.options[0] || {};
    var _options$words = options.words,
      words = _options$words === void 0 ? DEFAULT_AMBIGUOUS_WORDS : _options$words;
    var ambiguousWords = new Set(words);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var nodeType = elementType(node);

        // Only check anchor elements and custom types.
        if (typesToValidate.indexOf(nodeType) === -1) {
          return;
        }
        var nodeText = (0, _getAccessibleChildText["default"])(node.parent, elementType);
        if (!ambiguousWords.has(nodeText)) {
          // check the value
          return;
        }
        context.report({
          node,
          message: 'Ambiguous text within anchor. Screen reader users rely on link text for context; the words "{{wordsList}}" are ambiguous and do not provide enough context.',
          data: {
            wordsList: words.join('", "')
          }
        });
      }
    };
  }
};
module.exports = exports.default;