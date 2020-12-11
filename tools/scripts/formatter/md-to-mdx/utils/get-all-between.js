const between = require('unist-util-find-all-between');
const find = require('unist-util-find');
const findAfter = require('unist-util-find-after');
const findAllAfter = require('unist-util-find-all-after');

function getAllBetween(tree, testStart, testEnd) {
  const start = find(tree, testStart);

  if (!start) return [];

  const end = findAfter(tree, start, testEnd);

  const targetNodes = end
    ? between(tree, start, end)
    : findAllAfter(tree, start);
  return targetNodes;
}

module.exports = getAllBetween;
