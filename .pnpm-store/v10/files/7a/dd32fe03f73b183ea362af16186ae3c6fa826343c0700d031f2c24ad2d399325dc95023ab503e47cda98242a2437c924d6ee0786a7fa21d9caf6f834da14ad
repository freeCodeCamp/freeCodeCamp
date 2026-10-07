/**
 * Extractor function for an ArrayExpression type value node.
 * An array expression is an expression with [] syntax.
 *
 * @returns - An array of the extracted elements.
 */
export default function extractValueFromArrayExpression(value) {
  // eslint-disable-next-line global-require
  const getValue = require('.').default;
  return value.elements.map((element) => {
    if (element === null) return undefined;
    return getValue(element);
  });
}
