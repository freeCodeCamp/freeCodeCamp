"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const isExpectAssertionsOrHasAssertionsCall = expression => expression.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && expression.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && (0, _utils.isSupportedAccessor)(expression.callee.object, 'expect') && (0, _utils.isSupportedAccessor)(expression.callee.property) && ['assertions', 'hasAssertions'].includes((0, _utils.getAccessorValue)(expression.callee.property));

const isFirstLineExprStmt = functionBody => functionBody[0] && functionBody[0].type === _experimentalUtils.AST_NODE_TYPES.ExpressionStatement;

const suggestRemovingExtraArguments = (args, extraArgsStartAt) => ({
  messageId: 'suggestRemovingExtraArguments',
  fix: fixer => fixer.removeRange([args[extraArgsStartAt].range[0] - Math.sign(extraArgsStartAt), args[args.length - 1].range[1]])
});

const suggestions = [['suggestAddingHasAssertions', 'expect.hasAssertions();'], ['suggestAddingAssertions', 'expect.assertions();']];

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `expect.assertions()` OR `expect.hasAssertions()`',
      recommended: false,
      suggestion: true
    },
    messages: {
      hasAssertionsTakesNoArguments: '`expect.hasAssertions` expects no arguments',
      assertionsRequiresOneArgument: '`expect.assertions` excepts a single argument of type number',
      assertionsRequiresNumberArgument: 'This argument should be a number',
      haveExpectAssertions: 'Every test should have either `expect.assertions(<number of assertions>)` or `expect.hasAssertions()` as its first expression',
      suggestAddingHasAssertions: 'Add `expect.hasAssertions()`',
      suggestAddingAssertions: 'Add `expect.assertions(<number of assertions>)`',
      suggestRemovingExtraArguments: 'Remove extra arguments'
    },
    type: 'suggestion',
    hasSuggestions: true,
    schema: [{
      type: 'object',
      properties: {
        onlyFunctionsWithAsyncKeyword: {
          type: 'boolean'
        },
        onlyFunctionsWithExpectInLoop: {
          type: 'boolean'
        },
        onlyFunctionsWithExpectInCallback: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },
  defaultOptions: [{
    onlyFunctionsWithAsyncKeyword: false,
    onlyFunctionsWithExpectInLoop: false,
    onlyFunctionsWithExpectInCallback: false
  }],

  create(context, [options]) {
    let expressionDepth = 0;
    let hasExpectInCallback = false;
    let hasExpectInLoop = false;
    let inTestCaseCall = false;
    let inForLoop = false;

    const shouldCheckFunction = testFunction => {
      if (!options.onlyFunctionsWithAsyncKeyword && !options.onlyFunctionsWithExpectInLoop && !options.onlyFunctionsWithExpectInCallback) {
        return true;
      }

      if (options.onlyFunctionsWithAsyncKeyword) {
        if (testFunction.async) {
          return true;
        }
      }

      if (options.onlyFunctionsWithExpectInLoop) {
        if (hasExpectInLoop) {
          return true;
        }
      }

      if (options.onlyFunctionsWithExpectInCallback) {
        if (hasExpectInCallback) {
          return true;
        }
      }

      return false;
    };

    const enterExpression = () => inTestCaseCall && expressionDepth++;

    const exitExpression = () => inTestCaseCall && expressionDepth--;

    const enterForLoop = () => inForLoop = true;

    const exitForLoop = () => inForLoop = false;

    return {
      FunctionExpression: enterExpression,
      'FunctionExpression:exit': exitExpression,
      ArrowFunctionExpression: enterExpression,
      'ArrowFunctionExpression:exit': exitExpression,
      ForStatement: enterForLoop,
      'ForStatement:exit': exitForLoop,
      ForInStatement: enterForLoop,
      'ForInStatement:exit': exitForLoop,
      ForOfStatement: enterForLoop,
      'ForOfStatement:exit': exitForLoop,

      CallExpression(node) {
        if ((0, _utils.isTestCaseCall)(node)) {
          inTestCaseCall = true;
          return;
        }

        if ((0, _utils.isExpectCall)(node) && inTestCaseCall) {
          if (inForLoop) {
            hasExpectInLoop = true;
          }

          if (expressionDepth > 1) {
            hasExpectInCallback = true;
          }
        }
      },

      'CallExpression:exit'(node) {
        if (!(0, _utils.isTestCaseCall)(node)) {
          return;
        }

        if (node.arguments.length < 2) {
          return;
        }

        const [, testFn] = node.arguments;

        if (!(0, _utils.isFunction)(testFn) || testFn.body.type !== _experimentalUtils.AST_NODE_TYPES.BlockStatement) {
          return;
        }

        if (!shouldCheckFunction(testFn)) {
          return;
        }

        hasExpectInLoop = false;
        hasExpectInCallback = false;
        const testFuncBody = testFn.body.body;

        if (!isFirstLineExprStmt(testFuncBody)) {
          context.report({
            messageId: 'haveExpectAssertions',
            node,
            suggest: suggestions.map(([messageId, text]) => ({
              messageId,
              fix: fixer => fixer.insertTextBeforeRange([testFn.body.range[0] + 1, testFn.body.range[1]], text)
            }))
          });
          return;
        }

        const testFuncFirstLine = testFuncBody[0].expression;

        if (!isExpectAssertionsOrHasAssertionsCall(testFuncFirstLine)) {
          context.report({
            messageId: 'haveExpectAssertions',
            node,
            suggest: suggestions.map(([messageId, text]) => ({
              messageId,
              fix: fixer => fixer.insertTextBefore(testFuncBody[0], text)
            }))
          });
          return;
        }

        if ((0, _utils.isSupportedAccessor)(testFuncFirstLine.callee.property, 'hasAssertions')) {
          if (testFuncFirstLine.arguments.length) {
            context.report({
              messageId: 'hasAssertionsTakesNoArguments',
              node: testFuncFirstLine.callee.property,
              suggest: [suggestRemovingExtraArguments(testFuncFirstLine.arguments, 0)]
            });
          }

          return;
        }

        if (!(0, _utils.hasOnlyOneArgument)(testFuncFirstLine)) {
          let {
            loc
          } = testFuncFirstLine.callee.property;
          const suggest = [];

          if (testFuncFirstLine.arguments.length) {
            loc = testFuncFirstLine.arguments[1].loc;
            suggest.push(suggestRemovingExtraArguments(testFuncFirstLine.arguments, 1));
          }

          context.report({
            messageId: 'assertionsRequiresOneArgument',
            suggest,
            loc
          });
          return;
        }

        const [arg] = testFuncFirstLine.arguments;

        if (arg.type === _experimentalUtils.AST_NODE_TYPES.Literal && typeof arg.value === 'number' && Number.isInteger(arg.value)) {
          return;
        }

        context.report({
          messageId: 'assertionsRequiresNumberArgument',
          node: arg
        });
      }

    };
  }

});

exports.default = _default;