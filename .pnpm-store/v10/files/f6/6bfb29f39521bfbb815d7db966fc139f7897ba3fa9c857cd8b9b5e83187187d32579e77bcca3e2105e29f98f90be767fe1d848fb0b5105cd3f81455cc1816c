/**
 * Extractor function for a JSXElement type value node.
 *
 * Returns self-closing element with correct name.
 */
export default function extractValueFromJSXElement(value) {
  // eslint-disable-next-line global-require
  const getValue = require('.').default;

  const Tag = value.openingElement.name.name;
  if (value.openingElement.selfClosing) {
    return `<${Tag} />`;
  }
  return `<${Tag}>${[].concat(value.children).map((x) => getValue(x)).join('')}</${Tag}>`;
}
