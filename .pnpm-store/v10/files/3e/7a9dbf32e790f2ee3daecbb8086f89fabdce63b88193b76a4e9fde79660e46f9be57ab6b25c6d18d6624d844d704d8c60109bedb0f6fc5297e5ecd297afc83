"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noUnusedExpressions = _interopRequireDefault(require("eslint/lib/rules/no-unused-expressions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A wrapper around ESLint's core rule no-unused-expressions, additionally ignores type cast
// expressions.
const meta = _noUnusedExpressions.default.meta;

const create = context => {
  const coreChecks = _noUnusedExpressions.default.create(context);

  return {
    ExpressionStatement(node) {
      if (node.expression.type === 'TypeCastExpression' || node.expression.type === 'OptionalCallExpression') {
        return;
      }

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