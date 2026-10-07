/**
 * @import {AttributeValueAdapter} from "@html-eslint/core"
 * @import {Range} from "@html-eslint/types"
 * @import {Literal} from "../../types"
 */

/** @implements {AttributeValueAdapter} */
class LiteralAttributeValueAdapter {
  /** @param {Literal} node */
  constructor(node) {
    this.node = node;
  }

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

  getRange() {
    return /** @type {Range} */ ([
      this.node.range[0] + 1,
      this.node.range[1] - 1,
    ]);
  }

  hasExpression() {
    return false;
  }

  getValue() {
    if (typeof this.node.value === "string") {
      return this.node.value;
    } else if (typeof this.node.value === "number") {
      return String(this.node.value);
    }
    return null;
  }
}

module.exports = {
  LiteralAttributeValueAdapter,
};
