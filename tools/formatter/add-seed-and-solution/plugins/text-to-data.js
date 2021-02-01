const stringify = require('remark-stringify');
const { root } = require('mdast-builder');
const unified = require('unified');
const getAllBetween = require('../../../challenge-parser/mdx/plugins/utils/between-headings');

const stringifyMd = nodes =>
  unified()
    .use(stringify, { fences: true, emphasis: '*' })
    .stringify(root(nodes));

// NOTE: we need a new plugin (rather than using the challenge parser's plugin)
// simply because it adds html to the descriptions. It's easier to start from
// scratch.
function plugin() {
  return transformer;

  function transformer(tree, file) {
    file.data.description = stringifyMd(getAllBetween(tree, '--description--'));
    file.data.instructions = stringifyMd(
      getAllBetween(tree, '--instructions--')
    );
  }
}

module.exports = plugin;
module.exports.stringifyMd = stringifyMd;
