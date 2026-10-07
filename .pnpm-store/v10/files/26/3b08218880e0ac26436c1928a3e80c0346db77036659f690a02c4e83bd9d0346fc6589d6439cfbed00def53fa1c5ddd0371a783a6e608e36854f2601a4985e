"use strict";

exports.__esModule = true;
exports.default = insertAfter;

/**
 * Inserts a node after a given reference node.
 * 
 * @param node the node to insert
 * @param refNode the reference node
 */
function insertAfter(node, refNode) {
  if (node && refNode && refNode.parentNode) {
    if (refNode.nextSibling) {
      refNode.parentNode.insertBefore(node, refNode.nextSibling);
    } else {
      refNode.parentNode.appendChild(node);
    }

    return node;
  }

  return null;
}

module.exports = exports["default"];