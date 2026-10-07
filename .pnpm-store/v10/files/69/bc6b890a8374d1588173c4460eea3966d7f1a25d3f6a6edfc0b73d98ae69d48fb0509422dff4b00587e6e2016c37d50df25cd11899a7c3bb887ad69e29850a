import Literal from '../Literal';
import JSXElement from '../JSXElement';
import JSXFragment from '../JSXFragment';
import JSXText from '../JSXText';
import Identifier from './Identifier';
import TaggedTemplateExpression from './TaggedTemplateExpression';
import TemplateLiteral from './TemplateLiteral';
import FunctionExpression from './FunctionExpression';
import LogicalExpression from './LogicalExpression';
import MemberExpression from './MemberExpression';
import ChainExpression from './ChainExpression';
import OptionalCallExpression from './OptionalCallExpression';
import OptionalMemberExpression from './OptionalMemberExpression';
import CallExpression from './CallExpression';
import UnaryExpression from './UnaryExpression';
import ThisExpression from './ThisExpression';
import ConditionalExpression from './ConditionalExpression';
import BinaryExpression from './BinaryExpression';
import ObjectExpression from './ObjectExpression';
import NewExpression from './NewExpression';
import UpdateExpression from './UpdateExpression';
import ArrayExpression from './ArrayExpression';
import BindExpression from './BindExpression';
import SpreadElement from './SpreadElement';
import TypeCastExpression from './TypeCastExpression';
import SequenceExpression from './SequenceExpression';
import TSNonNullExpression from './TSNonNullExpression';
import AssignmentExpression from './AssignmentExpression';

// Composition map of types to their extractor functions.
const TYPES = {
  Identifier,
  Literal,
  JSXElement,
  JSXFragment,
  JSXText,
  TaggedTemplateExpression,
  TemplateLiteral,
  ArrowFunctionExpression: FunctionExpression,
  FunctionExpression,
  LogicalExpression,
  MemberExpression,
  ChainExpression,
  OptionalCallExpression,
  OptionalMemberExpression,
  CallExpression,
  UnaryExpression,
  ThisExpression,
  ConditionalExpression,
  BinaryExpression,
  ObjectExpression,
  NewExpression,
  UpdateExpression,
  ArrayExpression,
  BindExpression,
  SpreadElement,
  TypeCastExpression,
  SequenceExpression,
  TSNonNullExpression,
  AssignmentExpression,
};

const noop = () => null;

const errorMessage = (expression) => `The prop value with an expression type of ${expression} could not be resolved. Please file an issue ( https://github.com/jsx-eslint/jsx-ast-utils/issues/new ) to get this fixed immediately.`;

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *all* possible expression types.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
export default function extract(value) {
  // Value will not have the expression property when we recurse.
  // The type for expression on ArrowFunctionExpression is a boolean.
  let expression;
  if (
    typeof value.expression !== 'boolean'
    && value.expression
  ) {
    expression = value.expression; // eslint-disable-line prefer-destructuring
  } else {
    expression = value;
  }
  let { type } = expression;

  // Typescript NonNull Expression is wrapped & it would end up in the wrong extractor
  if (expression.object && expression.object.type === 'TSNonNullExpression') {
    type = 'TSNonNullExpression';
  }

  while (type === 'TSAsExpression') {
    ({ type } = expression);
    if (expression.expression) {
      ({ expression } = expression);
    }
  }

  if (TYPES[type] === undefined) {
    // eslint-disable-next-line no-console
    console.error(errorMessage(type));
    return null;
  }

  return TYPES[type](expression);
}

// Composition map of types to their extractor functions to handle literals.
const LITERAL_TYPES = {
  ...TYPES,
  Literal: (value) => {
    const extractedVal = TYPES.Literal.call(undefined, value);
    const isNull = extractedVal === null;
    // This will be convention for attributes that have null
    // value explicitly defined (<div prop={null} /> maps to 'null').
    return isNull ? 'null' : extractedVal;
  },
  Identifier: (value) => {
    const isUndefined = TYPES.Identifier.call(undefined, value) === undefined;
    return isUndefined ? undefined : null;
  },
  JSXElement: noop,
  JSXFragment: noop,
  JSXText: noop,
  ArrowFunctionExpression: noop,
  FunctionExpression: noop,
  LogicalExpression: noop,
  MemberExpression: noop,
  OptionalCallExpression: noop,
  OptionalMemberExpression: noop,
  CallExpression: noop,
  UnaryExpression: (value) => {
    const extractedVal = TYPES.UnaryExpression.call(undefined, value);
    return extractedVal === undefined ? null : extractedVal;
  },
  UpdateExpression: (value) => {
    const extractedVal = TYPES.UpdateExpression.call(undefined, value);
    return extractedVal === undefined ? null : extractedVal;
  },
  ThisExpression: noop,
  ConditionalExpression: noop,
  BinaryExpression: noop,
  ObjectExpression: noop,
  NewExpression: noop,
  ArrayExpression: (value) => {
    const extractedVal = TYPES.ArrayExpression.call(undefined, value);
    return extractedVal.filter((val) => val !== null);
  },
  BindExpression: noop,
  SpreadElement: noop,
  TSNonNullExpression: noop,
  TSAsExpression: noop,
  TypeCastExpression: noop,
  SequenceExpression: noop,
  ChainExpression: noop,
};

/**
 * This function maps an AST value node
 * to its correct extractor function for its
 * given type.
 *
 * This will map correctly for *some* possible types that map to literals.
 *
 * @param - value - AST Value object with type `JSXExpressionContainer`
 * @returns The extracted value.
 */
export function extractLiteral(value) {
  // Value will not have the expression property when we recurse.
  const expression = value.expression || value;
  const { type } = expression;

  if (LITERAL_TYPES[type] === undefined) {
    // eslint-disable-next-line no-console
    console.error(errorMessage(type));
    return null;
  }

  return LITERAL_TYPES[type](expression);
}
