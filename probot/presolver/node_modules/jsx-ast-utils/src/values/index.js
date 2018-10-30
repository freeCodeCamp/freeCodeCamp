import Literal from './Literal';
import JSXElement from './JSXElement';
import JSXExpressionContainer, { extractLiteral } from './expressions';

// Composition map of types to their extractor functions.
const TYPES = {
  Literal,
  JSXElement,
  JSXExpressionContainer,
};

// Composition map of types to their extractor functions to handle literals.
const LITERAL_TYPES = Object.assign({}, TYPES, {
  JSXElement: () => null,
  JSXExpressionContainer: extractLiteral,
});

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible types.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
export default function getValue(value) {
  return TYPES[value.type](value);
}

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param value - AST Value object on a JSX Attribute.
 */
export function getLiteralValue(value) {
  return LITERAL_TYPES[value.type](value);
}
