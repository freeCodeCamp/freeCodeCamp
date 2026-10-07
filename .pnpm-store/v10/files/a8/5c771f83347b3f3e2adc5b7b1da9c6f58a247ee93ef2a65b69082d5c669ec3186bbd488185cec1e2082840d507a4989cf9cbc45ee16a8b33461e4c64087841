'use strict';

/**
 * @param {import('postcss').AnyNode} nodeA
 * @param {import('postcss').AnyNode} nodeB
 * @return {boolean}
 */
function checkMatch(nodeA, nodeB) {
  if (nodeA.type === 'atrule' && nodeB.type === 'atrule') {
    return (
      nodeA.params === nodeB.params &&
      nodeA.name.toLowerCase() === nodeB.name.toLowerCase()
    );
  }
  return nodeA.type === nodeB.type;
}

/** @typedef {import('postcss').AnyNode & {parent?: Child}} Child */
/**
 * @param {Child} nodeA
 * @param {Child} nodeB
 * @return {boolean}
 */
function sameParent(nodeA, nodeB) {
  if (!nodeA.parent) {
    // A is orphaned, return if B is orphaned as well
    return !nodeB.parent;
  }

  if (!nodeB.parent) {
    // B is orphaned and A is not
    return false;
  }

  // Check if parents match
  if (!checkMatch(nodeA.parent, nodeB.parent)) {
    return false;
  }

  // Check parents' parents
  return sameParent(nodeA.parent, nodeB.parent);
}

module.exports = sameParent;
