"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

function isEmptyFunction(node) {
  if (!(0, _utils.isFunction)(node)) {
    return false;
  }

  return node.body.type === _experimentalUtils.AST_NODE_TYPES.BlockStatement && !node.body.body.length;
}

function createTodoFixer(node, fixer) {
  const testName = (0, _utils.getNodeName)(node).split('.').shift();
  return fixer.replaceText(node.callee, `${testName}.todo`);
}

const isTargetedTestCase = node => (0, _utils.isTestCaseCall)(node) && [_utils.TestCaseName.it, _utils.TestCaseName.test, 'it.skip', 'test.skip'].includes((0, _utils.getNodeName)(node));

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `test.todo`',
      recommended: false
    },
    messages: {
      emptyTest: 'Prefer todo test case over empty test case',
      unimplementedTest: 'Prefer todo test case over unimplemented test case'
    },
    fixable: 'code',
    schema: [],
    type: 'layout'
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        const [title, callback] = node.arguments;

        if (!title || !isTargetedTestCase(node) || !(0, _utils.isStringNode)(title)) {
          return;
        }

        if (callback && isEmptyFunction(callback)) {
          context.report({
            messageId: 'emptyTest',
            node,
            fix: fixer => [fixer.removeRange([title.range[1], callback.range[1]]), createTodoFixer(node, fixer)]
          });
        }

        if ((0, _utils.hasOnlyOneArgument)(node)) {
          context.report({
            messageId: 'unimplementedTest',
            node,
            fix: fixer => [createTodoFixer(node, fixer)]
          });
        }
      }

    };
  }

});

exports.default = _default;