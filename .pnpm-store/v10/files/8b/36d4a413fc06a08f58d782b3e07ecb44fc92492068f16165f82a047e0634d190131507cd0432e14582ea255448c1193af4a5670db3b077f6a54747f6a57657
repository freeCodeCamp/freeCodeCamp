'use strict';
/**
 * Extracts the arguments of a CSS function or AtRule.
 *
 * @param {import('postcss-value-parser').ParsedValue | import('postcss-value-parser').FunctionNode} node
 * @return {import('postcss-value-parser').Node[][]}
 */
module.exports = function getArguments(node) {
  /** @type {import('postcss-value-parser').Node[][]} */
  const list = [[]];
  for (const child of node.nodes) {
    if (child.type !== 'div') {
      list[list.length - 1].push(child);
    } else {
      list.push([]);
    }
  }
  return list;
};
