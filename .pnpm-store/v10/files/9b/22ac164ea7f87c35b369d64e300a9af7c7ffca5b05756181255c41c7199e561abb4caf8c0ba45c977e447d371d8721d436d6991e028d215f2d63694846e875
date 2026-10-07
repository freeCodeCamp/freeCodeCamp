/**
 * @import {AttributeValueAdapter} from "@html-eslint/core"
 * @import {
 *   JSXExpressionContainer,
 *   Literal,
 *   TemplateLiteral
 * } from "../../types"
 */

const { AST_NODE_TYPES } = require("../../constants/node-types");
const { JSXExpressionAttributeValueAdapter } = require("./jsx-expression");

const { LiteralAttributeValueAdapter } = require("./literal");
const { TemplateLiteralAttributeValueAdapter } = require("./template-literal");

/**
 * @param {Literal | TemplateLiteral | JSXExpressionContainer} node
 * @returns {AttributeValueAdapter}
 */
function createAttributeValueAdapter(node) {
  switch (node.type) {
    case AST_NODE_TYPES.Literal: {
      return new LiteralAttributeValueAdapter(node);
    }
    case AST_NODE_TYPES.TemplateLiteral: {
      return new TemplateLiteralAttributeValueAdapter(node);
    }
    case AST_NODE_TYPES.JSXExpressionContainer: {
      return new JSXExpressionAttributeValueAdapter(node);
    }
  }
}

module.exports = {
  createAttributeValueAdapter,
};
