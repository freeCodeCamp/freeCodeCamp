'use strict';

/**
 * Find the token before the closing bracket.
 * @param {ASTNode} node - The JSX element node.
 * @returns {Token} The token before the closing bracket.
 */
function getTokenBeforeClosingBracket(node) {
  const attributes = node.attributes;
  if (!attributes || attributes.length === 0) {
    return node.name;
  }
  return attributes[attributes.length - 1];
}

module.exports = getTokenBeforeClosingBracket;
