"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}, {
  additionalProperties: false,
  properties: {
    allowNull: {
      type: 'boolean'
    }
  },
  type: 'object'
}];

const create = context => {
  const always = (context.options[0] || 'always') === 'always';
  const allowNull = !(context.options[1] && context.options[1].allowNull === false);

  if (always) {
    return {
      IntersectionTypeAnnotation(node) {
        if (allowNull && node.types.length === 2 && (node.types[0].type === 'NullLiteralTypeAnnotation' || node.types[1].type === 'NullLiteralTypeAnnotation')) {
          return;
        }

        if (node.parent.type !== 'TypeAlias') {
          context.report({
            message: 'All intersection types must be declared with named type alias.',
            node
          });
        }
      },

      UnionTypeAnnotation(node) {
        if (allowNull && node.types.length === 2 && (node.types[0].type === 'NullLiteralTypeAnnotation' || node.types[1].type === 'NullLiteralTypeAnnotation')) {
          return;
        }

        if (node.parent.type !== 'TypeAlias') {
          context.report({
            message: 'All union types must be declared with named type alias.',
            node
          });
        }
      }

    };
  } else {
    return {};
  }
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;