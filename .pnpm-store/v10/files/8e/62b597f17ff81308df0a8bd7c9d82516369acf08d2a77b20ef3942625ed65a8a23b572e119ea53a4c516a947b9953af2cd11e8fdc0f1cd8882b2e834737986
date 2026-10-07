"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// eslint-disable-next-line eslint-plugin/prefer-object-rule -- false positive, this is not a rule
var _default = iterator => {
  return (context, ...rest) => {
    const nodeIterator = iterator(context, ...rest);
    return {
      ArrowFunctionExpression: nodeIterator,
      FunctionDeclaration: nodeIterator,
      FunctionExpression: nodeIterator,
      FunctionTypeAnnotation: nodeIterator
    };
  };
};

exports.default = _default;
module.exports = exports.default;