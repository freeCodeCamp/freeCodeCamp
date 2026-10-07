"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const getBody = args => {
  const [, secondArg] = args;

  if (secondArg && (0, _utils.isFunction)(secondArg) && secondArg.body.type === _experimentalUtils.AST_NODE_TYPES.BlockStatement) {
    return secondArg.body.body;
  }

  return [];
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow explicitly returning from tests',
      recommended: false
    },
    messages: {
      noReturnValue: 'Jest tests should not return a value.'
    },
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isTestCaseCall)(node)) return;
        const body = getBody(node.arguments);
        const returnStmt = body.find(t => t.type === _experimentalUtils.AST_NODE_TYPES.ReturnStatement);
        if (!returnStmt) return;
        context.report({
          messageId: 'noReturnValue',
          node: returnStmt
        });
      },

      FunctionDeclaration(node) {
        const declaredVariables = context.getDeclaredVariables(node);
        const testCallExpressions = (0, _utils.getTestCallExpressionsFromDeclaredVariables)(declaredVariables);
        if (testCallExpressions.length === 0) return;
        const returnStmt = node.body.body.find(t => t.type === _experimentalUtils.AST_NODE_TYPES.ReturnStatement);
        if (!returnStmt) return;
        context.report({
          messageId: 'noReturnValue',
          node: returnStmt
        });
      }

    };
  }

});

exports.default = _default;