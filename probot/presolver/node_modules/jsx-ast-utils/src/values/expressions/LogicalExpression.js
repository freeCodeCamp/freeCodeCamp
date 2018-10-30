import getValue from './index';

/**
 * Extractor function for a LogicalExpression type value node.
 * A logical expression is `a && b` or `a || b`, so we evaluate both sides
 * and return the extracted value of the expression.
 *
 * @param - value - AST Value object with type `LogicalExpression`
 * @returns - The extracted value converted to correct type.
 */
export default function extractValueFromLogicalExpression(value) {
  const { operator, left, right } = value;
  const leftVal = getValue(left);
  const rightVal = getValue(right);

  return operator === '&&' ? leftVal && rightVal : leftVal || rightVal;
}
