const visit = require('unist-util-visit');
const _ = require('lodash');

/**
 * Finds all nodes in a tree that match a given condition. This is a trivial
 * extension of `unist-util-find` that returns all matching nodes.
 *
 * @param {Object} tree - The unist tree to search through.
 * @param {Function|Object} condition - The condition to match nodes
 * against. This can be a function that accepts a single node argument or an object to match.
 * @returns {Array} An array of nodes that match the condition.
 */
function findAll(tree, condition) {
  const predicate = _.iteratee(condition);
  const results = [];
  visit(tree, node => {
    if (predicate(node)) {
      results.push(node);
    }

    return visit.CONTINUE;
  });

  return results;
}

module.exports.findAll = findAll;
