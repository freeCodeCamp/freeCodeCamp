"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [];

const create = context => {
  return {
    MixedTypeAnnotation(node) {
      context.report({
        message: 'Unexpected use of mixed type',
        node
      });
    }

  };
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;