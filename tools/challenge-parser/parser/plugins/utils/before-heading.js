const find = require('unist-util-find');
const findAllBefore = require('unist-util-find-all-before');

function getAllBefore(tree, marker) {
  const start = find(tree, {
    type: 'heading',
    children: [
      {
        type: 'text',
        value: marker
      }
    ]
  });

  if (!start) return [];

  // reverse because it goes up the tree backwards and adds nodes in that order
  return findAllBefore(tree, start).reverse();
}

module.exports = getAllBefore;
