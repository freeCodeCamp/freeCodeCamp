const visitChildren = require('unist-util-visit-children');

function hasId(node, index, parent) {
  // image references should always be inside paragraphs.
  if (node.type !== 'paragraph') return;
  const idHolder = node.children[0];
  if (idHolder.type === 'imageReference') {
    if (node.children.length > 1) {
      console.log('oooops, too many links together!');
      // TODO: optional chaining
    } else if (
      parent.children[index + 1] &&
      parent.children[index + 1].type === 'code'
    ) {
      console.log('found adjacent code block for id ' + idHolder.identifier);
    } else {
      console.log(
        'ooops! the id ' + idHolder.identifier + ' is not next to a code block'
      );
    }
  }
}

function plugin() {
  // we don't want to recurse into the tree, hence visitChildren

  const visit = visitChildren(hasId);
  return transformer;

  function transformer(tree) {
    visit(tree);
  }
}

module.exports = plugin;
