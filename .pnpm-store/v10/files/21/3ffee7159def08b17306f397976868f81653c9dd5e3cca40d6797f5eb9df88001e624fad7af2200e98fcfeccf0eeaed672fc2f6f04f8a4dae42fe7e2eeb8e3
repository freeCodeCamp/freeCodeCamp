/**
 * @import {
 *   AttributeAdapter,
 *   ElementAdapter
 * } from "@html-eslint/core"
 * @import {
 *   Range,
 *   SourceLocation
 * } from "@html-eslint/types"
 * @import {
 *   JSXElement,
 *   JSXMemberExpression
 * } from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { createAttributeAdapter } = require("../attribute/factory");

/**
 * Recursively builds the string representation of a JSXMemberExpression. For
 * example, <a.b.c> becomes "a.b.c"
 *
 * @param {JSXMemberExpression} node
 * @returns {string}
 */
function getJSXMemberExpressionName(node) {
  const objectName =
    node.object.type === AST_NODE_TYPES.JSXIdentifier
      ? node.object.name
      : node.object.type === AST_NODE_TYPES.JSXNamespacedName
        ? `${node.object.namespace.name}:${node.object.name.name}`
        : getJSXMemberExpressionName(node.object);
  return `${objectName}.${node.property.name}`;
}

/** @implements {ElementAdapter} */
class JSXElementElementAdapter {
  /** @param {JSXElement} node */
  constructor(node) {
    this.node = node;
  }

  /** @returns {string} */
  getElementName() {
    if (
      this.node.openingElement.name.type === AST_NODE_TYPES.JSXNamespacedName
    ) {
      return `${this.node.openingElement.name.namespace.name}:${this.node.openingElement.name.name.name}`;
    }
    if (
      this.node.openingElement.name.type === AST_NODE_TYPES.JSXMemberExpression
    ) {
      return getJSXMemberExpressionName(this.node.openingElement.name);
    }
    return this.node.openingElement.name.name;
  }

  /** @returns {SourceLocation} */
  getLocation() {
    return this.node.loc;
  }

  /** @returns {Range} */
  getRange() {
    return this.node.range;
  }

  /** @returns {AttributeAdapter[]} */
  getAttributes() {
    return this.node.openingElement.attributes.map((attribute) =>
      createAttributeAdapter(attribute)
    );
  }

  /** @returns {SourceLocation} */
  getOpenStartLocation() {
    return this.node.openingElement.name.loc;
  }

  /** @returns {Range} */
  getOpenStartRange() {
    return this.node.openingElement.name.range;
  }
}

module.exports = { JSXElementElementAdapter };
