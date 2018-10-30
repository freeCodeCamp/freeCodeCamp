import getValue from './index';


/**
 * Extractor function for a BinaryExpression type value node.
 * A binary expression has a left and right side separated by an operator
 * such as `a + b`.
 *
 * @param - value - AST Value object with type `BinaryExpression`
 * @returns - The extracted value converted to correct type.
 */
export default function extractValueFromBinaryExpression(value) {
  const { operator, left, right } = value;
  const leftVal = getValue(left);
  const rightVal = getValue(right);

  switch (operator) {
    case '==':
      return leftVal == rightVal; // eslint-disable-line
    case '!=':
      return leftVal != rightVal; // eslint-disable-line
    case '===':
      return leftVal === rightVal;
    case '!==':
      return leftVal !== rightVal;
    case '<':
      return leftVal < rightVal;
    case '<=':
      return leftVal <= rightVal;
    case '>':
      return leftVal > rightVal;
    case '>=':
      return leftVal >= rightVal;
    case '<<':
      return leftVal << rightVal; // eslint-disable-line no-bitwise
    case '>>':
      return leftVal >> rightVal; // eslint-disable-line no-bitwise
    case '>>>':
      return leftVal >>> rightVal; // eslint-disable-line no-bitwise
    case '+':
      return leftVal + rightVal;
    case '-':
      return leftVal - rightVal;
    case '*':
      return leftVal * rightVal;
    case '/':
      return leftVal / rightVal;
    case '%':
      return leftVal % rightVal;
    case '|':
      return leftVal | rightVal; // eslint-disable-line no-bitwise
    case '^':
      return leftVal ^ rightVal; // eslint-disable-line no-bitwise
    case '&':
      return leftVal & rightVal; // eslint-disable-line no-bitwise
    case 'in':
      try {
        return leftVal in rightVal;
      } catch (err) {
        return false;
      }
    case 'instanceof':
      if (typeof rightVal !== 'function') {
        return false;
      }
      return leftVal instanceof rightVal;
    default:
      return undefined;
  }
}
