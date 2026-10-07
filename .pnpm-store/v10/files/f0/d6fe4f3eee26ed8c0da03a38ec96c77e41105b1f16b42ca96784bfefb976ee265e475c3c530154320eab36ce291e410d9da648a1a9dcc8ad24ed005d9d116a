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
      description: 'Use `.only` and `.skip` over `f` and `x`',
      recommended: 'error'
    },
    messages: {
      usePreferredName: 'Use "{{ preferredNodeName }}" instead'
    },
    fixable: 'code',
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        const nodeName = (0, _utils.getNodeName)(node.callee);
        if (!nodeName || !(0, _utils.isDescribeCall)(node) && !(0, _utils.isTestCaseCall)(node)) return;
        const preferredNodeName = getPreferredNodeName(nodeName);
        if (!preferredNodeName) return;
        const funcNode = node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;
        context.report({
          messageId: 'usePreferredName',
          node: node.callee,
          data: {
            preferredNodeName
          },

          fix(fixer) {
            return [fixer.replaceText(funcNode, preferredNodeName)];
          }

        });
      }

    };
  }

});

exports.default = _default;

function getPreferredNodeName(nodeName) {
  const firstChar = nodeName.charAt(0);
  const suffix = nodeName.endsWith('.each') ? '.each' : '';

  if (firstChar === 'f') {
    return `${nodeName.slice(1).replace('.each', '')}.only${suffix}`;
  }

  if (firstChar === 'x') {
    return `${nodeName.slice(1).replace('.each', '')}.skip${suffix}`;
  }

  return null;
}