import getValue, { getLiteralValue } from './values';

const extractValue = (attribute, extractor) => {
  if (attribute && attribute.type === 'JSXAttribute') {
    if (attribute.value === null) {
      // Null valued attributes imply truthiness.
      // For example: <div aria-hidden />
      // See: https://facebook.github.io/react/docs/jsx-in-depth.html#boolean-attributes
      return true;
    }

    return extractor(attribute.value);
  }

  return undefined;
};

/**
 * Returns the value of a given attribute.
 * Different types of attributes have their associated
 * values in different properties on the object.
 *
 * This function should return the most *closely* associated
 * value with the intention of the JSX.
 *
 * @param attribute - The JSXAttribute collected by AST parser.
 */
export default function getPropValue(attribute) {
  return extractValue(attribute, getValue);
}

/**
 * Returns the value of a given attribute.
 * Different types of attributes have their associated
 * values in different properties on the object.
 *
 * This function should return a value only if we can extract
 * a literal value from its attribute (i.e. values that have generic
 * types in JavaScript - strings, numbers, booleans, etc.)
 *
 * @param attribute - The JSXAttribute collected by AST parser.
 */
export function getLiteralPropValue(attribute) {
  return extractValue(attribute, getLiteralValue);
}
