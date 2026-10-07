'use strict';
/**
 * @param {import('postcss').Rule} rule
 * @param {string[]} properties
 * @return {import('postcss').Declaration[]}
 */
module.exports = function getDecls(rule, properties) {
  return /** @type {import('postcss').Declaration[]} */ (
    rule.nodes.filter(
      (node) =>
        node.type === 'decl' && properties.includes(node.prop.toLowerCase())
    )
  );
};
