/**
 * Extractor function for a JSXElement type value node.
 *
 * Returns self-closing element with correct name.
 */
export default function extractValueFromJSXElement(value) {
  return `<${value.openingElement.name.name} />`;
}
