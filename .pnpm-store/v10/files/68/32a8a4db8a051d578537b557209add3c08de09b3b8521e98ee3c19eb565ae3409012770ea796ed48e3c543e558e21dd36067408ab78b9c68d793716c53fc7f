"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

/*
 * This implementation is ported from from eslint-plugin-jasmine.
 * MIT license, Tom Vincent.
 */

/**
 * Async assertions might be called in Promise
 * methods like `Promise.x(expect1)` or `Promise.x([expect1, expect2])`.
 * If that's the case, Promise node have to be awaited or returned.
 *
 * @Returns CallExpressionNode
 */
const getPromiseCallExpressionNode = node => {
  if (node.type === _experimentalUtils.AST_NODE_TYPES.ArrayExpression && node.parent && node.parent.type === _experimentalUtils.AST_NODE_TYPES.CallExpression) {
    node = node.parent;
  }

  if (node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && (0, _utils.isSupportedAccessor)(node.callee.object) && (0, _utils.getAccessorValue)(node.callee.object) === 'Promise' && node.parent) {
    return node;
  }

  return null;
};

const findPromiseCallExpressionNode = node => {
  var _node$parent;

  return (_node$parent = node.parent) !== null && _node$parent !== void 0 && _node$parent.parent && [_experimentalUtils.AST_NODE_TYPES.CallExpression, _experimentalUtils.AST_NODE_TYPES.ArrayExpression].includes(node.parent.type) ? getPromiseCallExpressionNode(node.parent) : null;
};

const getParentIfThenified = node => {
  var _node$parent2;

  const grandParentNode = (_node$parent2 = node.parent) === null || _node$parent2 === void 0 ? void 0 : _node$parent2.parent;

  if (grandParentNode && grandParentNode.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && (0, _utils.isExpectMember)(grandParentNode.callee) && ['then', 'catch'].includes((0, _utils.getAccessorValue)(grandParentNode.callee.property)) && grandParentNode.parent) {
    // Just in case `then`s are chained look one above.
    return getParentIfThenified(grandParentNode);
  }

  return node;
};

const isAcceptableReturnNode = (node, allowReturn) => {
  if (allowReturn && node.type === _experimentalUtils.AST_NODE_TYPES.ReturnStatement) {
    return true;
  }

  if (node.type === _experimentalUtils.AST_NODE_TYPES.ConditionalExpression && node.parent) {
    return isAcceptableReturnNode(node.parent, allowReturn);
  }

  return [_experimentalUtils.AST_NODE_TYPES.ArrowFunctionExpression, _experimentalUtils.AST_NODE_TYPES.AwaitExpression].includes(node.type);
};

const isNoAssertionsParentNode = node => node.type === _experimentalUtils.AST_NODE_TYPES.ExpressionStatement || node.type === _experimentalUtils.AST_NODE_TYPES.AwaitExpression && node.parent !== undefined && node.parent.type === _experimentalUtils.AST_NODE_TYPES.ExpressionStatement;

const promiseArrayExceptionKey = ({
  start,
  end
}) => `${start.line}:${start.column}-${end.line}:${end.column}`;

const defaultAsyncMatchers = ['toReject', 'toResolve'];

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Enforce valid `expect()` usage',
      recommended: 'error'
    },
    messages: {
      tooManyArgs: 'Expect takes at most {{ amount }} argument{{ s }}.',
      notEnoughArgs: 'Expect requires at least {{ amount }} argument{{ s }}.',
      modifierUnknown: 'Expect has no modifier named "{{ modifierName }}".',
      matcherNotFound: 'Expect must have a corresponding matcher call.',
      matcherNotCalled: 'Matchers must be called to assert.',
      asyncMustBeAwaited: 'Async assertions must be awaited{{ orReturned }}.',
      promisesWithAsyncAssertionsMustBeAwaited: 'Promises which return async assertions must be awaited{{ orReturned }}.'
    },
    type: 'suggestion',
    schema: [{
      type: 'object',
      properties: {
        alwaysAwait: {
          type: 'boolean',
          default: false
        },
        asyncMatchers: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        minArgs: {
          type: 'number',
          minimum: 1
        },
        maxArgs: {
          type: 'number',
          minimum: 1
        }
      },
      additionalProperties: false
    }]
  },
  defaultOptions: [{
    alwaysAwait: false,
    asyncMatchers: defaultAsyncMatchers,
    minArgs: 1,
    maxArgs: 1
  }],

  create(context, [{
    alwaysAwait,
    asyncMatchers = defaultAsyncMatchers,
    minArgs = 1,
    maxArgs = 1
  }]) {
    // Context state
    const arrayExceptions = new Set();

    const pushPromiseArrayException = loc => arrayExceptions.add(promiseArrayExceptionKey(loc));
    /**
     * Promise method that accepts an array of promises,
     * (eg. Promise.all), will throw warnings for the each
     * unawaited or non-returned promise. To avoid throwing
     * multiple warnings, we check if there is a warning in
     * the given location.
     */


    const promiseArrayExceptionExists = loc => arrayExceptions.has(promiseArrayExceptionKey(loc));

    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          expect,
          modifier,
          matcher
        } = (0, _utils.parseExpectCall)(node);

        if (expect.arguments.length < minArgs) {
          const expectLength = (0, _utils.getAccessorValue)(expect.callee).length;
          const loc = {
            start: {
              column: node.loc.start.column + expectLength,
              line: node.loc.start.line
            },
            end: {
              column: node.loc.start.column + expectLength + 1,
              line: node.loc.start.line
            }
          };
          context.report({
            messageId: 'notEnoughArgs',
            data: {
              amount: minArgs,
              s: minArgs === 1 ? '' : 's'
            },
            node,
            loc
          });
        }

        if (expect.arguments.length > maxArgs) {
          const {
            start
          } = expect.arguments[maxArgs].loc;
          const {
            end
          } = expect.arguments[node.arguments.length - 1].loc;
          const loc = {
            start,
            end: {
              column: end.column - 1,
              line: end.line
            }
          };
          context.report({
            messageId: 'tooManyArgs',
            data: {
              amount: maxArgs,
              s: maxArgs === 1 ? '' : 's'
            },
            node,
            loc
          });
        } // something was called on `expect()`


        if (!matcher) {
          if (modifier) {
            context.report({
              messageId: 'matcherNotFound',
              node: modifier.node.property
            });
          }

          return;
        }

        if ((0, _utils.isExpectMember)(matcher.node.parent)) {
          context.report({
            messageId: 'modifierUnknown',
            data: {
              modifierName: matcher.name
            },
            node: matcher.node.property
          });
          return;
        }

        if (!matcher.arguments) {
          context.report({
            messageId: 'matcherNotCalled',
            node: matcher.node.property
          });
        }

        const parentNode = matcher.node.parent;
        const shouldBeAwaited = modifier && modifier.name !== _utils.ModifierName.not || asyncMatchers.includes(matcher.name);

        if (!parentNode.parent || !shouldBeAwaited) {
          return;
        }
        /**
         * If parent node is an array expression, we'll report the warning,
         * for the array object, not for each individual assertion.
         */


        const isParentArrayExpression = parentNode.parent.type === _experimentalUtils.AST_NODE_TYPES.ArrayExpression;
        const orReturned = alwaysAwait ? '' : ' or returned';
        /**
         * An async assertion can be chained with `then` or `catch` statements.
         * In that case our target CallExpression node is the one with
         * the last `then` or `catch` statement.
         */

        const targetNode = getParentIfThenified(parentNode);
        const finalNode = findPromiseCallExpressionNode(targetNode) || targetNode;

        if (finalNode.parent && // If node is not awaited or returned
        !isAcceptableReturnNode(finalNode.parent, !alwaysAwait) && // if we didn't warn user already
        !promiseArrayExceptionExists(finalNode.loc)) {
          context.report({
            loc: finalNode.loc,
            data: {
              orReturned
            },
            messageId: finalNode === targetNode ? 'asyncMustBeAwaited' : 'promisesWithAsyncAssertionsMustBeAwaited',
            node
          });

          if (isParentArrayExpression) {
            pushPromiseArrayException(finalNode.loc);
          }
        }
      },

      // nothing called on "expect()"
      'CallExpression:exit'(node) {
        if ((0, _utils.isExpectCall)(node) && isNoAssertionsParentNode(node.parent)) {
          context.report({
            messageId: 'matcherNotFound',
            node
          });
        }
      }

    };
  }

});

exports.default = _default;