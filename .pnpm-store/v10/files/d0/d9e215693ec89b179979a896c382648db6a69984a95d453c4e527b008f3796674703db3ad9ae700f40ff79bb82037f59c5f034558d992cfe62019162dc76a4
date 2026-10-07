"use strict";

const NODE_TYPE = require("../node-type");
const { domSymbolTree } = require("./internal-constants");

// https://dom.spec.whatwg.org/#concept-node-length
function nodeLength(node) {
  switch (node.nodeType) {
    case NODE_TYPE.DOCUMENT_TYPE_NODE:
      return 0;

    case NODE_TYPE.TEXT_NODE:
    case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
    case NODE_TYPE.COMMENT_NODE:
      return node.data.length;

    default:
      return domSymbolTree.childrenCount(node);
  }
}

// https://dom.spec.whatwg.org/#concept-tree-root
function nodeRoot(node) {
  while (domSymbolTree.parent(node)) {
    node = domSymbolTree.parent(node);
  }

  return node;
}

// https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor
function isInclusiveAncestor(ancestorNode, node) {
  while (node) {
    if (ancestorNode === node) {
      return true;
    }

    node = domSymbolTree.parent(node);
  }

  return false;
}

// https://dom.spec.whatwg.org/#concept-tree-following
function isFollowing(nodeA, nodeB) {
  if (nodeA === nodeB) {
    return false;
  }

  let current = nodeB;
  while (current) {
    if (current === nodeA) {
      return true;
    }

    current = domSymbolTree.following(current);
  }

  return false;
}

module.exports = {
  nodeLength,
  nodeRoot,

  isInclusiveAncestor,
  isFollowing
};
