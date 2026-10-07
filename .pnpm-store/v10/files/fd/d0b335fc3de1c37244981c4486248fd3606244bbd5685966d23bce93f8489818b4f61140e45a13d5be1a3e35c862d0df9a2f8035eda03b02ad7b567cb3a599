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
      description: 'Prefer `await expect(...).resolves` over `expect(await ...)` syntax',
      recommended: false
    },
    fixable: 'code',
    messages: {
      expectResolves: 'Use `await expect(...).resolves instead.'
    },
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],
  create: context => ({
    CallExpression(node) {
      const [awaitNode] = node.arguments;

      if ((0, _utils.isExpectCall)(node) && (awaitNode === null || awaitNode === void 0 ? void 0 : awaitNode.type) === _experimentalUtils.AST_NODE_TYPES.AwaitExpression) {
        context.report({
          node: node.arguments[0],
          messageId: 'expectResolves',

          fix(fixer) {
            return [fixer.insertTextBefore(node, 'await '), fixer.removeRange([awaitNode.range[0], awaitNode.argument.range[0]]), fixer.insertTextAfter(node, '.resolves')];
          }

        });
      }
    }

  })
});

exports.default = _default;