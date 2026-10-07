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
      description: 'Disallow Jasmine globals',
      recommended: 'error'
    },
    messages: {
      illegalGlobal: 'Illegal usage of global `{{ global }}`, prefer `{{ replacement }}`',
      illegalMethod: 'Illegal usage of `{{ method }}`, prefer `{{ replacement }}`',
      illegalFail: 'Illegal usage of `fail`, prefer throwing an error, or the `done.fail` callback',
      illegalPending: 'Illegal usage of `pending`, prefer explicitly skipping a test using `test.skip`',
      illegalJasmine: 'Illegal usage of jasmine global'
    },
    fixable: 'code',
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        const {
          callee
        } = node;
        const calleeName = (0, _utils.getNodeName)(callee);

        if (!calleeName) {
          return;
        }

        if (calleeName === 'spyOn' || calleeName === 'spyOnProperty' || calleeName === 'fail' || calleeName === 'pending') {
          if ((0, _utils.scopeHasLocalReference)(context.getScope(), calleeName)) {
            // It's a local variable, not a jasmine global.
            return;
          }

          switch (calleeName) {
            case 'spyOn':
            case 'spyOnProperty':
              context.report({
                node,
                messageId: 'illegalGlobal',
                data: {
                  global: calleeName,
                  replacement: 'jest.spyOn'
                }
              });
              break;

            case 'fail':
              context.report({
                node,
                messageId: 'illegalFail'
              });
              break;

            case 'pending':
              context.report({
                node,
                messageId: 'illegalPending'
              });
              break;
          }

          return;
        }

        if (callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && calleeName.startsWith('jasmine.')) {
          const functionName = calleeName.replace('jasmine.', '');

          if (functionName === 'any' || functionName === 'anything' || functionName === 'arrayContaining' || functionName === 'objectContaining' || functionName === 'stringMatching') {
            context.report({
              fix: fixer => [fixer.replaceText(callee.object, 'expect')],
              node,
              messageId: 'illegalMethod',
              data: {
                method: calleeName,
                replacement: `expect.${functionName}`
              }
            });
            return;
          }

          if (functionName === 'addMatchers') {
            context.report({
              node,
              messageId: 'illegalMethod',
              data: {
                method: calleeName,
                replacement: 'expect.extend'
              }
            });
            return;
          }

          if (functionName === 'createSpy') {
            context.report({
              node,
              messageId: 'illegalMethod',
              data: {
                method: calleeName,
                replacement: 'jest.fn'
              }
            });
            return;
          }

          context.report({
            node,
            messageId: 'illegalJasmine'
          });
        }
      },

      MemberExpression(node) {
        if ((0, _utils.isSupportedAccessor)(node.object, 'jasmine')) {
          const {
            parent,
            property
          } = node;

          if (parent && parent.type === _experimentalUtils.AST_NODE_TYPES.AssignmentExpression) {
            if ((0, _utils.isSupportedAccessor)(property, 'DEFAULT_TIMEOUT_INTERVAL')) {
              const {
                right
              } = parent;

              if (right.type === _experimentalUtils.AST_NODE_TYPES.Literal) {
                context.report({
                  fix: fixer => [fixer.replaceText(parent, `jest.setTimeout(${right.value})`)],
                  node,
                  messageId: 'illegalJasmine'
                });
                return;
              }
            }

            context.report({
              node,
              messageId: 'illegalJasmine'
            });
          }
        }
      }

    };
  }

});

exports.default = _default;