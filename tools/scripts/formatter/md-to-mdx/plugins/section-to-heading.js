const visit = require('unist-util-visit');
const is = require('unist-util-is');

function plugin() {
  return transformer;

  function transformer(tree) {
    visit(tree, 'heading', visitor);

    // eslint-disable-next-line consistent-return
    function visitor(node) {
      if (node.children.length !== 1) throw 'Heading has too many children';
      if (is(node.children[0], { type: 'text', value: 'Description' }))
        return true;

      if (is(node.children[0], { type: 'text', value: 'Instructions' }))
        return true;
    }
  }
}

module.exports = plugin;
