"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const findNodeObject = node => {
  if ('object' in node) {
    return node.object;
  }

  if (node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
    return node.callee.object;
  }

  return null;
};

const getJestFnCall = node => {
  if (node.type !== _experimentalUtils.AST_NODE_TYPES.CallExpression && node.type !== _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
    return null;
  }

  const obj = findNodeObject(node);

  if (!obj) {
    return null;
  }

  if (obj.type === _experimentalUtils.AST_NODE_TYPES.Identifier) {
    return node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && (0, _utils.getNodeName)(node.callee) === 'jest.fn' ? node : null;
  }

  return getJestFnCall(obj);
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `jest.spyOn()`',
      recommended: false
    },
    messages: {
      useJestSpyOn: 'Use jest.spyOn() instead.'
    },
    fixable: 'code',
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    return {
      AssignmentExpression(node) {
        const {
          left,
          right
        } = node;
        if (left.type !== _experimentalUtils.AST_NODE_TYPES.MemberExpression) return;
        const jestFnCall = getJestFnCall(right);
        if (!jestFnCall) return;
        context.report({
          node,
          messageId: 'useJestSpyOn',

          fix(fixer) {
            const leftPropQuote = left.property.type === _experimentalUtils.AST_NODE_TYPES.Identifier ? "'" : '';
            const [arg] = jestFnCall.arguments;
            const argSource = arg && context.getSourceCode().getText(arg);
            const mockImplementation = argSource ? `.mockImplementation(${argSource})` : '.mockImplementation()';
            return [fixer.insertTextBefore(left, `jest.spyOn(`), fixer.replaceTextRange([left.object.range[1], left.property.range[0]], `, ${leftPropQuote}`), fixer.replaceTextRange([left.property.range[1], jestFnCall.range[1]], `${leftPropQuote})${mockImplementation}`)];
          }

        });
      }

    };
  }

});

exports.default = _default;