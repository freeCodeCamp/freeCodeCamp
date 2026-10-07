"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const buildFixer = (callee, nodeName, preferredTestKeyword) => fixer => [fixer.replaceText(callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression ? callee.object : callee, getPreferredNodeName(nodeName, preferredTestKeyword))];

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Have control over `test` and `it` usages',
      recommended: false
    },
    fixable: 'code',
    messages: {
      consistentMethod: "Prefer using '{{ testKeyword }}' instead of '{{ oppositeTestKeyword }}'",
      consistentMethodWithinDescribe: "Prefer using '{{ testKeywordWithinDescribe }}' instead of '{{ oppositeTestKeyword }}' within describe"
    },
    schema: [{
      type: 'object',
      properties: {
        fn: {
          enum: [_utils.TestCaseName.it, _utils.TestCaseName.test]
        },
        withinDescribe: {
          enum: [_utils.TestCaseName.it, _utils.TestCaseName.test]
        }
      },
      additionalProperties: false
    }],
    type: 'suggestion'
  },
  defaultOptions: [{
    fn: _utils.TestCaseName.test,
    withinDescribe: _utils.TestCaseName.it
  }],

  create(context) {
    const configObj = context.options[0] || {};
    const testKeyword = configObj.fn || _utils.TestCaseName.test;
    const testKeywordWithinDescribe = configObj.withinDescribe || configObj.fn || _utils.TestCaseName.it;
    let describeNestingLevel = 0;
    return {
      CallExpression(node) {
        const nodeName = (0, _utils.getNodeName)(node.callee);

        if (!nodeName) {
          return;
        }

        if ((0, _utils.isDescribeCall)(node)) {
          describeNestingLevel++;
        }

        const funcNode = node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;

        if ((0, _utils.isTestCaseCall)(node) && describeNestingLevel === 0 && !nodeName.includes(testKeyword)) {
          const oppositeTestKeyword = getOppositeTestKeyword(testKeyword);
          context.report({
            messageId: 'consistentMethod',
            node: node.callee,
            data: {
              testKeyword,
              oppositeTestKeyword
            },
            fix: buildFixer(funcNode, nodeName, testKeyword)
          });
        }

        if ((0, _utils.isTestCaseCall)(node) && describeNestingLevel > 0 && !nodeName.includes(testKeywordWithinDescribe)) {
          const oppositeTestKeyword = getOppositeTestKeyword(testKeywordWithinDescribe);
          context.report({
            messageId: 'consistentMethodWithinDescribe',
            node: node.callee,
            data: {
              testKeywordWithinDescribe,
              oppositeTestKeyword
            },
            fix: buildFixer(funcNode, nodeName, testKeywordWithinDescribe)
          });
        }
      },

      'CallExpression:exit'(node) {
        if ((0, _utils.isDescribeCall)(node)) {
          describeNestingLevel--;
        }
      }

    };
  }

});

exports.default = _default;

function getPreferredNodeName(nodeName, preferredTestKeyword) {
  if (nodeName === _utils.TestCaseName.fit) {
    return 'test.only';
  }

  return nodeName.startsWith('f') || nodeName.startsWith('x') ? nodeName.charAt(0) + preferredTestKeyword : preferredTestKeyword;
}

function getOppositeTestKeyword(test) {
  if (test === _utils.TestCaseName.test) {
    return _utils.TestCaseName.it;
  }

  return _utils.TestCaseName.test;
}