"use strict";

exports.__esModule = true;
exports.default = clear;

/**
 * Removes all child nodes from a given node.
 * 
 * @param node the node to clear
 */
function clear(node) {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }

    return node;
  }

  return null;
}

module.exports = exports["default"];