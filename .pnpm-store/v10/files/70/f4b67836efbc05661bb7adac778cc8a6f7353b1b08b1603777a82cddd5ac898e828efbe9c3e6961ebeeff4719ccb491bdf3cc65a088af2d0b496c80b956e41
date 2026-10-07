/**
 * @import {AttributeKeyAdapter} from "@html-eslint/core"
 * @import {
 *   JSXIdentifier,
 *   JSXNamespacedName
 * } from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { JSXIdentifierAttributeKeyAdapter } = require("./jsx-identifier");
const { JSXNamespaceNameAttributeKeyAdapter } = require("./jsx-namespace-name");

/**
 * @param {JSXIdentifier | JSXNamespacedName} node
 * @returns {AttributeKeyAdapter}
 */
function createAttributeKeyAdapter(node) {
  switch (node.type) {
    case AST_NODE_TYPES.JSXIdentifier: {
      return new JSXIdentifierAttributeKeyAdapter(node);
    }
    case AST_NODE_TYPES.JSXNamespacedName: {
      return new JSXNamespaceNameAttributeKeyAdapter(node);
    }
  }
}

module.exports = {
  createAttributeKeyAdapter,
};
