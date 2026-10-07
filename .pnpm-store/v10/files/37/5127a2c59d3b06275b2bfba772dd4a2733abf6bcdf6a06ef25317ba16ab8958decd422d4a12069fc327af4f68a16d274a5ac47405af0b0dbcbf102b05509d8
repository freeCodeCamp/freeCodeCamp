"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `toHaveLength()`',
      recommended: false
    },
    messages: {
      useToHaveLength: 'Use toHaveLength() instead'
    },
    fixable: 'code',
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          expect: {
            arguments: [argument]
          },
          matcher
        } = (0, _utils.parseExpectCall)(node);

        if (!matcher || !(0, _utils.isParsedEqualityMatcherCall)(matcher) || (argument === null || argument === void 0 ? void 0 : argument.type) !== _experimentalUtils.AST_NODE_TYPES.MemberExpression || !(0, _utils.isSupportedAccessor)(argument.property, 'length')) {
          return;
        }

        context.report({
          fix(fixer) {
            return [// remove the "length" property accessor
            fixer.removeRange([argument.property.range[0] - 1, argument.range[1]]), // replace the current matcher with "toHaveLength"
            fixer.replaceTextRange([matcher.node.object.range[1], matcher.node.range[1]], '.toHaveLength')];
          },

          messageId: 'useToHaveLength',
          node: matcher.node.property
        });
      }

    };
  }

});

exports.default = _default;