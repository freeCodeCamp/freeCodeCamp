const find = require('unist-util-find');
const findAfter = require('unist-util-find-after');
const findAllAfter = require('unist-util-find-all-after');
const between = require('unist-util-find-all-between');
const { findAll } = require('./find-all');

function _getSection(tree) {
  return start => {
    if (!start) return [];

    const isEnd = node => {
      return (
        node.type === 'heading' && node.depth <= start.depth && isMarker(node)
      );
    };

    const isMarker = node => {
      if (node.children && node.children[0]) {
        const child = node.children[0];
        return (
          child.type === 'text' &&
          child.value.startsWith('--') &&
          child.value.endsWith('--')
        );
      } else {
        return false;
      }
    };

    const end = findAfter(tree, start, isEnd);

    const targetNodes = end
      ? between(tree, start, end)
      : findAllAfter(tree, start);
    return targetNodes;
  };
}

const startNode = marker => ({
  type: 'heading',
  children: [
    {
      type: 'text',
      value: marker
    }
  ]
});

function getSection(tree, marker) {
  const start = find(tree, startNode(marker));
  return _getSection(tree)(start);
}

function getAllSections(tree, marker) {
  const starts = findAll(tree, startNode(marker));
  return starts.map(_getSection(tree));
}

module.exports = { getSection, getAllSections };
