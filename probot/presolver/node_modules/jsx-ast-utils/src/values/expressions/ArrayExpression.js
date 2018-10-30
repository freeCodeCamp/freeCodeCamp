import getValue from './index';

/**
 * Extractor function for an ArrayExpression type value node.
 * An array expression is an expression with [] syntax.
 *
 * @returns - An array of the extracted elements.
 */
export default function extractValueFromArrayExpression(value) {
  return value.elements.map(element => getValue(element));
}
