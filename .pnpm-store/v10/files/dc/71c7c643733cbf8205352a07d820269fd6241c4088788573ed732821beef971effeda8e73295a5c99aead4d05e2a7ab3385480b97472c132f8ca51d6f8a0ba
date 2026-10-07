/**
 * @import {AttributeKeyAdapter} from "@html-eslint/core"
 * @import {
 *   Range,
 *   SourceLocation
 * } from "@html-eslint/types"
 * @import {JSXIdentifier} from "../../types"
 */

/** @implements {AttributeKeyAdapter} */
class JSXIdentifierAttributeKeyAdapter {
  /** @param {JSXIdentifier} node */
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
    return this.node.name;
  }

  /** @returns {boolean} */
  hasExpression() {
    return false;
  }
}

module.exports = {
  JSXIdentifierAttributeKeyAdapter,
};
