"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const getBlockType = statement => {
  const func = statement.parent;
  /* istanbul ignore if */

  if (!func) {
    throw new Error(`Unexpected BlockStatement. No parent defined. - please file a github issue at https://github.com/jest-community/eslint-plugin-jest`);
  } // functionDeclaration: function func() {}


  if (func.type === _experimentalUtils.AST_NODE_TYPES.FunctionDeclaration) {
    return 'function';
  }

  if ((0, _utils.isFunction)(func) && func.parent) {
    const expr = func.parent; // arrow function or function expr

    if (expr.type === _experimentalUtils.AST_NODE_TYPES.VariableDeclarator) {
      return 'function';
    } // if it's not a variable, it will be callExpr, we only care about describe


    if (expr.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && (0, _utils.isDescribeCall)(expr)) {
      return 'describe';
    }
  }

  return null;
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow using `expect` outside of `it` or `test` blocks',
      recommended: 'error'
    },
    messages: {
      unexpectedExpect: 'Expect must be inside of a test block.'
    },
    type: 'suggestion',
    schema: [{
      properties: {
        additionalTestBlockFunctions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },
  defaultOptions: [{
    additionalTestBlockFunctions: []
  }],

  create(context, [{
    additionalTestBlockFunctions = []
  }]) {
    const callStack = [];

    const isCustomTestBlockFunction = node => additionalTestBlockFunctions.includes((0, _utils.getNodeName)(node) || '');

    const isTestBlock = node => (0, _utils.isTestCaseCall)(node) || isCustomTestBlockFunction(node);

    return {
      CallExpression(node) {
        if ((0, _utils.isExpectCall)(node)) {
          const parent = callStack[callStack.length - 1];

          if (!parent || parent === _utils.DescribeAlias.describe) {
            context.report({
              node,
              messageId: 'unexpectedExpect'
            });
          }

          return;
        }

        if (isTestBlock(node)) {
          callStack.push('test');
        }

        if (node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression) {
          callStack.push('template');
        }
      },

      'CallExpression:exit'(node) {
        const top = callStack[callStack.length - 1];

        if (top === 'test' && isTestBlock(node) && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.MemberExpression || top === 'template' && node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression) {
          callStack.pop();
        }
      },

      BlockStatement(statement) {
        const blockType = getBlockType(statement);

        if (blockType) {
          callStack.push(blockType);
        }
      },

      'BlockStatement:exit'(statement) {
        if (callStack[callStack.length - 1] === getBlockType(statement)) {
          callStack.pop();
        }
      },

      ArrowFunctionExpression(node) {
        var _node$parent;

        if (((_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.type) !== _experimentalUtils.AST_NODE_TYPES.CallExpression) {
          callStack.push('arrow');
        }
      },

      'ArrowFunctionExpression:exit'() {
        if (callStack[callStack.length - 1] === 'arrow') {
          callStack.pop();
        }
      }

    };
  }

});

exports.default = _default;