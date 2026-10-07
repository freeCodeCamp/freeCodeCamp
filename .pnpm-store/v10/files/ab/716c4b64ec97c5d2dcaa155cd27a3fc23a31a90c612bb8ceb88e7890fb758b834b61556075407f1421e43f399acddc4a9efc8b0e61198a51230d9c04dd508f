/**
 * Extractor function for a JSXFragment type value node.
 *
 * Returns self-closing element with correct name.
 */
export default function extractValueFromJSXFragment(value) {
  // eslint-disable-next-line global-require
  const getValue = require('.').default;

  if (value.children.length === 0) {
    return '<></>';
  }
  return `<>${[].concat(value.children).map((x) => getValue(x)).join('')}</>`;
}
