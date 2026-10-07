"use strict";

const { domSymbolTree } = require("../helpers/internal-constants");
const { nodeRoot, isFollowing, isInclusiveAncestor } = require("../helpers/node");

// Returns 0 if equal, +1 for after and -1 for before
// https://dom.spec.whatwg.org/#concept-range-bp-after
function compareBoundaryPointsPosition(bpA, bpB) {
  const { node: nodeA, offset: offsetA } = bpA;
  const { node: nodeB, offset: offsetB } = bpB;

  if (nodeRoot(nodeA) !== nodeRoot(nodeB)) {
    throw new Error(`Internal Error: Boundary points should have the same root!`);
  }

  if (nodeA === nodeB) {
    if (offsetA === offsetB) {
      return 0;
    } else if (offsetA < offsetB) {
      return -1;
    }

    return 1;
  }

  if (isFollowing(nodeA, nodeB)) {
    return compareBoundaryPointsPosition(bpB, bpA) === -1 ? 1 : -1;
  }

  if (isInclusiveAncestor(nodeA, nodeB)) {
    let child = nodeB;

    while (domSymbolTree.parent(child) !== nodeA) {
      child = domSymbolTree.parent(child);
    }

    if (domSymbolTree.index(child) < offsetA) {
      return 1;
    }
  }

  return -1;
}

module.exports = {
  compareBoundaryPointsPosition
};
