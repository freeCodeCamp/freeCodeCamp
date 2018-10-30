'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromLogicalExpression;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extractor function for a LogicalExpression type value node.
 * A logical expression is `a && b` or `a || b`, so we evaluate both sides
 * and return the extracted value of the expression.
 *
 * @param - value - AST Value object with type `LogicalExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromLogicalExpression(value) {
  var operator = value.operator,
      left = value.left,
      right = value.right;

  var leftVal = (0, _index2.default)(left);
  var rightVal = (0, _index2.default)(right);

  return operator === '&&' ? leftVal && rightVal : leftVal || rightVal;
}