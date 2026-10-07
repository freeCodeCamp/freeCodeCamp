"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];

const create = context => {
  return {
    ObjectTypeAnnotation(node) {
      const {
        properties
      } = node;

      for (const property of properties) {
        const {
          type
        } = property;

        if (type === 'ObjectTypeSpreadProperty') {
          const {
            argument: {
              type: argumentType,
              id: argumentId
            }
          } = property;

          if (argumentType !== 'GenericTypeAnnotation' || argumentId.name !== '$Exact') {
            context.report({
              message: 'Use $Exact to make type spreading safe.',
              node
            });
          }
        }
      }
    }

  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;