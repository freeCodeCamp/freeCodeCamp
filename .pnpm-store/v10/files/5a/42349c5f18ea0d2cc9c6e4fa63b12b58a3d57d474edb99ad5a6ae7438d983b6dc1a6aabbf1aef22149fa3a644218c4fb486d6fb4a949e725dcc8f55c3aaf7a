"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBuiltinRule = require("../utilities/getBuiltinRule");

// A wrapper around ESLint's core rule no-unused-expressions, additionally ignores type cast
// expressions.
const noUnusedExpressionsRule = (0, _getBuiltinRule.getBuiltinRule)('no-unused-expressions');
const {
  meta
} = noUnusedExpressionsRule;

const create = context => {
  const coreChecks = noUnusedExpressionsRule.create(context);
  return {
    ExpressionStatement(node) {
      if (node.expression.type === 'TypeCastExpression' || node.expression.type === 'OptionalCallExpression') {
        return;
      } // eslint-disable-next-line @babel/new-cap


      coreChecks.ExpressionStatement(node);
    }

  };
};

var _default = {
  create,
  meta
};
exports.default = _default;
module.exports = exports.default;