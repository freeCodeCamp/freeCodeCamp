"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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