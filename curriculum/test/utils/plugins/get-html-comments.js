const { isEmpty } = require('lodash');
const visit = require('unist-util-visit');
const { commentToData } = require('../comment-to-data');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    if (isEmpty(file.data)) {
      file.data = {};
    }
    visit(tree, 'comment', visitor);

    function visitor(node) {
      commentToData(file, node.value.trim());
    }
  }
}

module.exports = plugin;
