/**
 * @import {ElementAdapter} from "@html-eslint/core"
 * @import {JSXElement} from "../../types"
 */

const { JSXElementElementAdapter } = require("./jsx-element");

/**
 * @param {JSXElement} node
 * @returns {ElementAdapter}
 */
function createElementAdapter(node) {
  return new JSXElementElementAdapter(node);
}

module.exports = {
  createElementAdapter,
};
