"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const findOnlyNode = node => {
  const callee = node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;

  if (callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
    if (callee.object.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
      if ((0, _utils.isSupportedAccessor)(callee.object.property, 'only')) {
        return callee.object.property;
      }
    }

    if ((0, _utils.isSupportedAccessor)(callee.property, 'only')) {
      return callee.property;
    }
  }

  return null;
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow focused tests',
      recommended: 'error',
      suggestion: true
    },
    messages: {
      focusedTest: 'Unexpected focused test.',
      suggestRemoveFocus: 'Remove focus from test.'
    },
    schema: [],
    type: 'suggestion',
    hasSuggestions: true
  },
  defaultOptions: [],
  create: context => ({
    CallExpression(node) {
      if (!(0, _utils.isDescribeCall)(node) && !(0, _utils.isTestCaseCall)(node)) {
        return;
      }

      if ((0, _utils.getNodeName)(node).startsWith('f')) {
        context.report({
          messageId: 'focusedTest',
          node,
          suggest: [{
            messageId: 'suggestRemoveFocus',
            fix: fixer => fixer.removeRange([node.range[0], node.range[0] + 1])
          }]
        });
        return;
      }

      const onlyNode = findOnlyNode(node);

      if (!onlyNode) {
        return;
      }

      context.report({
        messageId: 'focusedTest',
        node: onlyNode,
        suggest: [{
          messageId: 'suggestRemoveFocus',
          fix: fixer => fixer.removeRange([onlyNode.range[0] - 1, onlyNode.range[1] + Number(onlyNode.type !== _experimentalUtils.AST_NODE_TYPES.Identifier)])
        }]
      });
    }

  })
});

exports.default = _default;