/**
 * @import {AttributeValueAdapter} from "@html-eslint/core"
 * @import {
 *   Range,
 *   SourceLocation
 * } from "@html-eslint/types"
 * @import {TemplateLiteral} from "../../types"
 */

/** @implements {AttributeValueAdapter} */
class TemplateLiteralAttributeValueAdapter {
  /** @param {TemplateLiteral} node */
  constructor(node) {
    /** @private */
    this.node = node;
  }

  /** @returns {SourceLocation} */
  getLocation() {
    return {
      start: {
        column: this.node.loc.start.column + 1,
        line: this.node.loc.start.line,
      },
      end: {
        column: this.node.loc.end.column - 1,
        line: this.node.loc.end.line,
      },
    };
  }

  /** @returns {Range} */
  getRange() {
    return /** @type {Range} */ ([
      this.node.range[0] + 1,
      this.node.range[1] - 1,
    ]);
  }
  /** @returns {string | null} */
  getValue() {
    if (this.hasExpression()) {
      return null;
    }
    const quasis = this.node.quasis[0];
    return quasis.value.cooked;
  }

  /** @returns {boolean} */
  hasExpression() {
    return !!this.node.expressions.length;
  }
}

module.exports = {
  TemplateLiteralAttributeValueAdapter,
};
