/**
 * @import {AttributeValueAdapter} from "@html-eslint/core"
 * @import {
 *   Range,
 *   SourceLocation
 * } from "@html-eslint/types"
 * @import {JSXExpressionContainer} from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { LiteralAttributeValueAdapter } = require("./literal");
const { TemplateLiteralAttributeValueAdapter } = require("./template-literal");

/** @implements {AttributeValueAdapter} */
class JSXExpressionAttributeValueAdapter {
  /** @param {JSXExpressionContainer} node */
  constructor(node) {
    this.node = node;
    this.adapter = this.getAdapter();
  }

  /**
   * @private
   * @returns {AttributeValueAdapter | null}
   */
  getAdapter() {
    if (this.node.expression.type === AST_NODE_TYPES.Literal) {
      return new LiteralAttributeValueAdapter(this.node.expression);
    }
    if (this.node.expression.type === AST_NODE_TYPES.TemplateLiteral) {
      return new TemplateLiteralAttributeValueAdapter(this.node.expression);
    }
    return null;
  }

  /** @returns {SourceLocation} */
  getLocation() {
    return this.adapter?.getLocation() ?? this.node.expression.loc;
  }

  /** @returns {Range} */
  getRange() {
    return this.adapter?.getRange() ?? this.node.expression.range;
  }

  getValue() {
    return this.adapter?.getValue() ?? null;
  }

  hasExpression() {
    return this.adapter?.hasExpression() ?? true;
  }
}

module.exports = {
  JSXExpressionAttributeValueAdapter,
};
