'use strict';

const is = require('unist-util-is');
const find = require('unist-util-find');

function findAllBetween(parent, start, end, test) {
  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node');
  }

  const {children} = parent;
  const results = [];
  let index = check(start);
  const length = check(end);
  let child;

  while (++index < length) {
    child = children[index];

    if (is(child, test, index, parent)) {
      results.push(child);
    }
  }

  return results;

  function check(index) {
    if (index && index.type) {
      // `find` will match the parent node but we only want
      // to check child nodes.
      if (parent.type === index.type) {
        parent = {
          type: parent.type + '-root',
          children: parent.children
        };
      }

      const node = find(parent, index);
      index = children.indexOf(node);
    }

    if (isNaN(index) || index < 0 || index === Infinity) {
      throw new Error('Expected positive finite index or child node');
    }

    if (index >= children.length) {
      index = children.length - 1;
    }

    return index;
  }
}

module.exports = findAllBetween;
