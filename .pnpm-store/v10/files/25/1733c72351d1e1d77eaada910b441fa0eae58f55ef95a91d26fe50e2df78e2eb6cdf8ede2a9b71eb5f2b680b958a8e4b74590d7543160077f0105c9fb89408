"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const isCatchCall = node => node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && (0, _utils.isSupportedAccessor)(node.callee.property, 'catch');

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      description: 'Prevent calling `expect` conditionally',
      category: 'Best Practices',
      recommended: 'error'
    },
    messages: {
      conditionalExpect: 'Avoid calling `expect` conditionally`'
    },
    type: 'problem',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    let conditionalDepth = 0;
    let inTestCase = false;
    let inPromiseCatch = false;

    const increaseConditionalDepth = () => inTestCase && conditionalDepth++;

    const decreaseConditionalDepth = () => inTestCase && conditionalDepth--;

    return {
      FunctionDeclaration(node) {
        const declaredVariables = context.getDeclaredVariables(node);
        const testCallExpressions = (0, _utils.getTestCallExpressionsFromDeclaredVariables)(declaredVariables);

        if (testCallExpressions.length > 0) {
          inTestCase = true;
        }
      },

      CallExpression(node) {
        if ((0, _utils.isTestCaseCall)(node)) {
          inTestCase = true;
        }

        if (isCatchCall(node)) {
          inPromiseCatch = true;
        }

        if (inTestCase && (0, _utils.isExpectCall)(node) && conditionalDepth > 0) {
          context.report({
            messageId: 'conditionalExpect',
            node
          });
        }

        if (inPromiseCatch && (0, _utils.isExpectCall)(node)) {
          context.report({
            messageId: 'conditionalExpect',
            node
          });
        }
      },

      'CallExpression:exit'(node) {
        if ((0, _utils.isTestCaseCall)(node)) {
          inTestCase = false;
        }

        if (isCatchCall(node)) {
          inPromiseCatch = false;
        }
      },

      CatchClause: increaseConditionalDepth,
      'CatchClause:exit': decreaseConditionalDepth,
      IfStatement: increaseConditionalDepth,
      'IfStatement:exit': decreaseConditionalDepth,
      SwitchStatement: increaseConditionalDepth,
      'SwitchStatement:exit': decreaseConditionalDepth,
      ConditionalExpression: increaseConditionalDepth,
      'ConditionalExpression:exit': decreaseConditionalDepth,
      LogicalExpression: increaseConditionalDepth,
      'LogicalExpression:exit': decreaseConditionalDepth
    };
  }

});

exports.default = _default;