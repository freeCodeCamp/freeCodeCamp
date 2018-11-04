const visit = require('unist-util-visit');
const { selectAll } = require('hast-util-select');

const { sectionFilter } = require('./utils');

function createPlugin() {
  return function transformer(tree, file) {
    function visitor(node) {
      if (sectionFilter(node, 'solution')) {
        const solutions = selectAll('code', node).map(
          element => element.children[0].value
        );
        file.data = {
          ...file.data,
          solutions
        };
      }
    }
    visit(tree, 'element', visitor);
  };
}

module.exports = createPlugin;
