/**
 * @import {AST} from "eslint"
 * @import {
 *   ConditionalExpression,
 *   JSXAttribute,
 *   JSXIdentifier,
 *   Literal,
 *   LogicalExpression,
 *   Node,
 *   NodeOrToken,
 *   TemplateLiteral
 * } from "../../types"
 */
const { AST_NODE_TYPES } = require("../../constants/node-types");

/**
 * Check if a node represents a static string value
 *
 * A node is considered a static string if it's either:
 *
 * - A Literal node (e.g., "foo", 'bar')
 * - A TemplateLiteral without any expressions (e.g., `foo`)
 *
 * @example
 *   isStaticString("foo"); // true - Literal
 *   isStaticString(`bar`); // true - TemplateLiteral without expressions
 *   isStaticString(`${foo}`); // false - has expression
 *   isStaticString(someVariable); // false - not a string literal
 *
 * @param {Node} node - The AST node to check
 * @returns {node is Literal | TemplateLiteral} True if the node is a static
 *   string
 */
function isStaticString(node) {
  return (
    (node.type === AST_NODE_TYPES.Literal && typeof node.value === "string") ||
    (node.type === AST_NODE_TYPES.TemplateLiteral &&
      node.expressions.length === 0 &&
      node.quasis.length === 1)
  );
}

/**
 * @param {JSXAttribute} node
 * @returns {Literal | TemplateLiteral | JSXIdentifier | null}
 */
function findAttributeValueNode(node) {
  // boolean props
  if (!node.value && node.name.type === AST_NODE_TYPES.JSXIdentifier) {
    return node.name;
  }

  if (node.value?.type === AST_NODE_TYPES.Literal) {
    return node.value;
  }

  if (
    node.value?.type === AST_NODE_TYPES.JSXExpressionContainer &&
    (node.value?.expression.type === AST_NODE_TYPES.Literal ||
      (node.value?.expression.type === AST_NODE_TYPES.TemplateLiteral &&
        node.value?.expression.expressions.length === 0 &&
        node.value?.expression.quasis.length === 1))
  ) {
    return node.value?.expression;
  }
  return null;
}

/**
 * Adjust the column position of a source location
 *
 * @param {AST.SourceLocation} location - The source location to adjust
 * @param {number} columnOffset - The number of columns to add
 * @returns {AST.SourceLocation} A new location with adjusted columns
 */
function adjustLocationColumn(location, columnOffset) {
  return {
    start: {
      line: location.start.line,
      column: location.start.column + columnOffset,
    },
    end: {
      line: location.end.line,
      column: location.end.column + columnOffset,
    },
  };
}

/**
 * @param {NodeOrToken} node
 * @returns {node is Literal}
 */
function isLiteral(node) {
  return node.type === AST_NODE_TYPES.Literal;
}

/**
 * @param {NodeOrToken} node
 * @returns {node is TemplateLiteral}
 */
function isTemplateLiteral(node) {
  return node.type === AST_NODE_TYPES.TemplateLiteral;
}

/**
 * @param {NodeOrToken} node
 * @returns {node is LogicalExpression}
 */
function isLogicalExpression(node) {
  return node.type === AST_NODE_TYPES.LogicalExpression;
}

/**
 * @param {NodeOrToken} node
 * @returns {node is ConditionalExpression}
 */
function isConditionalExpression(node) {
  return node.type === AST_NODE_TYPES.ConditionalExpression;
}

module.exports = {
  isStaticString,
  findAttributeValueNode,
  adjustLocationColumn,
  isLiteral,
  isTemplateLiteral,
  isLogicalExpression,
  isConditionalExpression,
};
