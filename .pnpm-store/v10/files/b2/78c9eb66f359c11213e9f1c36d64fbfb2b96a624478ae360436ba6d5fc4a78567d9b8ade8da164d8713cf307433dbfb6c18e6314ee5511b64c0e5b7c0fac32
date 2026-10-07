/**
 * Extractor function for a Literal type value node.
 *
 * @param - value - AST Value object with type `Literal`
 * @returns { String|Boolean } - The extracted value converted to correct type.
 */
export default function extractValueFromLiteral(value) {
  const { value: extractedValue } = value;

  const normalizedStringValue = typeof extractedValue === 'string' && extractedValue.toLowerCase();
  if (normalizedStringValue === 'true') {
    return true;
  }

  if (normalizedStringValue === 'false') {
    return false;
  }

  return extractedValue;
}
