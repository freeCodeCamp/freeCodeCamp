"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

/*
 * This implementation is adapted from eslint-plugin-jasmine.
 * MIT license, Remco Haszing.
 */

/**
 * Checks if node names returned by getNodeName matches any of the given star patterns
 * Pattern examples:
 *   request.*.expect
 *   request.**.expect
 *   request.**.expect*
 */
function matchesAssertFunctionName(nodeName, patterns) {
  return patterns.some(p => new RegExp(`^${p.split('.').map(x => {
    if (x === '**') return '[a-z\\.]*';
    return x.replace(/\*/gu, '[a-z]*');
  }).join('\\.')}(\\.|$)`, 'ui').test(nodeName));
}

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Enforce assertion to be made in a test body',
      recommended: 'warn'
    },
    messages: {
      noAssertions: 'Test has no assertions'
    },
    schema: [{
      type: 'object',
      properties: {
        assertFunctionNames: {
          type: 'array',
          items: [{
            type: 'string'
          }]
        },
        additionalTestBlockFunctions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }],
    type: 'suggestion'
  },
  defaultOptions: [{
    assertFunctionNames: ['expect'],
    additionalTestBlockFunctions: []
  }],

  create(context, [{
    assertFunctionNames = ['expect'],
    additionalTestBlockFunctions = []
  }]) {
    const unchecked = [];

    function checkCallExpressionUsed(nodes) {
      for (const node of nodes) {
        const index = node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? unchecked.indexOf(node) : -1;

        if (node.type === _experimentalUtils.AST_NODE_TYPES.FunctionDeclaration) {
          const declaredVariables = context.getDeclaredVariables(node);
          const testCallExpressions = (0, _utils.getTestCallExpressionsFromDeclaredVariables)(declaredVariables);
          checkCallExpressionUsed(testCallExpressions);
        }

        if (index !== -1) {
          unchecked.splice(index, 1);
          break;
        }
      }
    }

    return {
      CallExpression(node) {
        var _getNodeName;

        const name = (_getNodeName = (0, _utils.getNodeName)(node.callee)) !== null && _getNodeName !== void 0 ? _getNodeName : '';

        if ((0, _utils.isTestCaseCall)(node) || additionalTestBlockFunctions.includes(name)) {
          if (node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && (0, _utils.isSupportedAccessor)(node.callee.property, 'todo')) {
            return;
          }

          unchecked.push(node);
        } else if (matchesAssertFunctionName(name, assertFunctionNames)) {
          // Return early in case of nested `it` statements.
          checkCallExpressionUsed(context.getAncestors());
        }
      },

      'Program:exit'() {
        unchecked.forEach(node => context.report({
          messageId: 'noAssertions',
          node
        }));
      }

    };
  }

});

exports.default = _default;