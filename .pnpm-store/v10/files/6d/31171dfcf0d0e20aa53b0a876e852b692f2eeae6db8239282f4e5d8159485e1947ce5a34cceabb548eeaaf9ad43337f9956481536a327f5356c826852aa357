/**
 * @import {AttributeAdapter} from "@html-eslint/core"
 * @import {
 *   JSXAttribute,
 *   JSXSpreadAttribute
 * } from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { JSXAttributeAttributeAdapter } = require("./jsx-attribute");
const { JSXSpreadAttributeAdapter } = require("./jsx-spread-attribute");

/**
 * @param {JSXAttribute | JSXSpreadAttribute} node
 * @returns {AttributeAdapter}
 */
function createAttributeAdapter(node) {
  switch (node.type) {
    case AST_NODE_TYPES.JSXAttribute: {
      return new JSXAttributeAttributeAdapter(node);
    }
    case AST_NODE_TYPES.JSXSpreadAttribute: {
      return new JSXSpreadAttributeAdapter(node);
    }
  }
}

module.exports = {
  createAttributeAdapter,
};
