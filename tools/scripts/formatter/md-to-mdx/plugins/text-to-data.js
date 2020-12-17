const stringify = require('remark-stringify');
const { root } = require('mdast-builder');
const unified = require('unified');
const getAllBetween = require('../utils/get-all-between');

const stringifyMd = nodes =>
  unified()
    .use(stringify, { fences: true, emphasis: '*' })
    .stringify(root(nodes));

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const descriptionNodes = getAllBetween(
      tree,
      { type: 'html', value: "<section id='description'>" },
      { type: 'html', value: '</section>' }
    );
    file.data.description = stringifyMd(descriptionNodes);
    const instructionsNodes = getAllBetween(
      tree,
      { type: 'html', value: "<section id='instructions'>" },
      { type: 'html', value: '</section>' }
    );
    file.data.instructions = stringifyMd(instructionsNodes);
  }
}

module.exports = plugin;
