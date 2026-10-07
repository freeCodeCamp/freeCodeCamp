'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromLogicalExpression;
/**
 * Extractor function for a LogicalExpression type value node.
 * A logical expression is `a && b` or `a || b`, so we evaluate both sides
 * and return the extracted value of the expression.
 *
 * @param - value - AST Value object with type `LogicalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromLogicalExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  var operator = value.operator,
      left = value.left,
      right = value.right;

  var leftVal = getValue(left);
  var rightVal = getValue(right);

  if (operator === '&&') {
    return leftVal && rightVal;
  }
  if (operator === '??') {
    // return leftVal ?? rightVal; // TODO: update to babel 7
    return leftVal === null || typeof leftVal === 'undefined' ? rightVal : leftVal;
  }
  return leftVal || rightVal;
}