"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `toStrictEqual()`',
      recommended: false,
      suggestion: true
    },
    messages: {
      useToStrictEqual: 'Use `toStrictEqual()` instead',
      suggestReplaceWithStrictEqual: 'Replace with `toStrictEqual()`'
    },
    type: 'suggestion',
    schema: [],
    hasSuggestions: true
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          matcher
        } = (0, _utils.parseExpectCall)(node);

        if (matcher && (0, _utils.isParsedEqualityMatcherCall)(matcher, _utils.EqualityMatcher.toEqual)) {
          context.report({
            messageId: 'useToStrictEqual',
            node: matcher.node.property,
            suggest: [{
              messageId: 'suggestReplaceWithStrictEqual',
              fix: fixer => [fixer.replaceText(matcher.node.property, _utils.EqualityMatcher.toStrictEqual)]
            }]
          });
        }
      }

    };
  }

});

exports.default = _default;