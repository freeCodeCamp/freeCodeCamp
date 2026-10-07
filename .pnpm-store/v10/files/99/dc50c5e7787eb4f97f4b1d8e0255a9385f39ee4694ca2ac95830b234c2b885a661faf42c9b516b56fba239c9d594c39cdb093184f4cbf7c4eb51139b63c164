/**
 * @import {AttributeKeyAdapter} from "@html-eslint/core"
 * @import {
 *   Range,
 *   SourceLocation
 * } from "@html-eslint/types"
 * @import {JSXNamespacedName} from "../../types"
 */

/** @implements {AttributeKeyAdapter} */
class JSXNamespaceNameAttributeKeyAdapter {
  /** @param {JSXNamespacedName} node */
  constructor(node) {
    this.node = node;
  }

  /** @returns {SourceLocation} */
  getLocation() {
    return this.node.loc;
  }

  /** @returns {Range} */
  getRange() {
    return this.node.range;
  }

  /** @returns {string} */
  getValue() {
    return `${this.node.namespace.name}:${this.node.name.name}`;
  }

  /** @returns {boolean} */
  hasExpression() {
    return false;
  }
}

module.exports = {
  JSXNamespaceNameAttributeKeyAdapter,
};
