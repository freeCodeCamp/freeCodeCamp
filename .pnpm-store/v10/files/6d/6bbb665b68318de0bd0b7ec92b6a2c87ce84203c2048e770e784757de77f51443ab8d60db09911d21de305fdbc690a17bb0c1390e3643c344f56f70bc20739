"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (context, report) => {
  const sourceCode = context.getSourceCode();
  return typeCastExpression => {
    report({
      colon: sourceCode.getFirstToken(typeCastExpression.typeAnnotation),
      node: typeCastExpression,
      type: 'type cast'
    });
  };
};

exports.default = _default;
module.exports = exports.default;