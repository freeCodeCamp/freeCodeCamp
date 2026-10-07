/**
 * @import {AttributeAdapter} from "@html-eslint/core"
 * @import {JSXAttribute} from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { createAttributeKeyAdapter } = require("../attribute-key/factory");
const { createAttributeValueAdapter } = require("../attribute-value/factory");

/** @implements {AttributeAdapter} */
class JSXAttributeAttributeAdapter {
  /** @param {JSXAttribute} node */
  constructor(node) {
    this.node = node;
  }

  getKey() {
    return createAttributeKeyAdapter(this.node.name);
  }

  getValue() {
    if (
      !this.node.value ||
      this.node.value.type === AST_NODE_TYPES.JSXElement ||
      this.node.value.type === AST_NODE_TYPES.JSXSpreadChild
    ) {
      return null;
    }
    return createAttributeValueAdapter(this.node.value);
  }
}

module.exports = {
  JSXAttributeAttributeAdapter,
};
