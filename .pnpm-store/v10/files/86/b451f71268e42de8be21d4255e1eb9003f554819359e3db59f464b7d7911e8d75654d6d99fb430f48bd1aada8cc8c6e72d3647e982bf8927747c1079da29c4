"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const findCallbackArg = (node, isJestEach) => {
  if (isJestEach) {
    return node.arguments[1];
  }

  if ((0, _utils.isHook)(node) && node.arguments.length >= 1) {
    return node.arguments[0];
  }

  if ((0, _utils.isTestCaseCall)(node) && node.arguments.length >= 2) {
    return node.arguments[1];
  }

  return null;
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Avoid using a callback in asynchronous tests and hooks',
      recommended: 'error',
      suggestion: true
    },
    messages: {
      noDoneCallback: 'Return a Promise instead of relying on callback parameter',
      suggestWrappingInPromise: 'Wrap in `new Promise({{ callback }} => ...`',
      useAwaitInsteadOfCallback: 'Use await instead of callback in async functions'
    },
    schema: [],
    type: 'suggestion',
    hasSuggestions: true
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        var _getNodeName$endsWith, _getNodeName;

        // done is the second argument for it.each, not the first
        const isJestEach = (_getNodeName$endsWith = (_getNodeName = (0, _utils.getNodeName)(node.callee)) === null || _getNodeName === void 0 ? void 0 : _getNodeName.endsWith('.each')) !== null && _getNodeName$endsWith !== void 0 ? _getNodeName$endsWith : false;

        if (isJestEach && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression) {
          // isJestEach but not a TaggedTemplateExpression, so this must be
          // the `jest.each([])()` syntax which this rule doesn't support due
          // to its complexity (see jest-community/eslint-plugin-jest#710)
          return;
        }

        const callback = findCallbackArg(node, isJestEach);
        const callbackArgIndex = Number(isJestEach);

        if (!callback || !(0, _utils.isFunction)(callback) || callback.params.length !== 1 + callbackArgIndex) {
          return;
        }

        const argument = callback.params[callbackArgIndex];

        if (argument.type !== _experimentalUtils.AST_NODE_TYPES.Identifier) {
          context.report({
            node: argument,
            messageId: 'noDoneCallback'
          });
          return;
        }

        if (callback.async) {
          context.report({
            node: argument,
            messageId: 'useAwaitInsteadOfCallback'
          });
          return;
        }

        context.report({
          node: argument,
          messageId: 'noDoneCallback',
          suggest: [{
            messageId: 'suggestWrappingInPromise',
            data: {
              callback: argument.name
            },

            fix(fixer) {
              const {
                body
              } = callback;
              const sourceCode = context.getSourceCode();
              const firstBodyToken = sourceCode.getFirstToken(body);
              const lastBodyToken = sourceCode.getLastToken(body);
              const tokenBeforeArgument = sourceCode.getTokenBefore(argument);
              const tokenAfterArgument = sourceCode.getTokenAfter(argument);
              /* istanbul ignore if */

              if (!firstBodyToken || !lastBodyToken || !tokenBeforeArgument || !tokenAfterArgument) {
                throw new Error(`Unexpected null when attempting to fix ${context.getFilename()} - please file a github issue at https://github.com/jest-community/eslint-plugin-jest`);
              }

              const argumentInParens = tokenBeforeArgument.value === '(' && tokenAfterArgument.value === ')';
              let argumentFix = fixer.replaceText(argument, '()');

              if (argumentInParens) {
                argumentFix = fixer.remove(argument);
              }

              let newCallback = argument.name;

              if (argumentInParens) {
                newCallback = `(${newCallback})`;
              }

              let beforeReplacement = `new Promise(${newCallback} => `;
              let afterReplacement = ')';
              let replaceBefore = true;

              if (body.type === _experimentalUtils.AST_NODE_TYPES.BlockStatement) {
                const keyword = 'return';
                beforeReplacement = `${keyword} ${beforeReplacement}{`;
                afterReplacement += '}';
                replaceBefore = false;
              }

              return [argumentFix, replaceBefore ? fixer.insertTextBefore(firstBodyToken, beforeReplacement) : fixer.insertTextAfter(firstBodyToken, beforeReplacement), fixer.insertTextAfter(lastBodyToken, afterReplacement)];
            }

          }]
        });
      }

    };
  }

});

exports.default = _default;