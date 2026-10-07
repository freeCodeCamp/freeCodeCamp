"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['bool', 'boolean'],
  type: 'string'
}];

const create = context => {
  const longForm = (context.options[0] || 'boolean') === 'boolean';
  return {
    BooleanTypeAnnotation(node) {
      const diff = node.range[1] - node.range[0];

      if (longForm && diff === 4) {
        context.report({
          fix(fixer) {
            return fixer.replaceText(node, 'boolean');
          },

          message: 'Use "boolean", not "bool"',
          node
        });
      }

      if (!longForm && diff !== 4) {
        context.report({
          fix(fixer) {
            return fixer.replaceText(node, 'bool');
          },

          message: 'Use "bool", not "boolean"',
          node
        });
      }
    }

  };
};

var _default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;