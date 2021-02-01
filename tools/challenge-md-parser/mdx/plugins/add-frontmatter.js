const visit = require('unist-util-visit');
const YAML = require('js-yaml');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'yaml', visitor);

    function visitor(node) {
      const frontmatter = YAML.load(node.value);

      file.data = { ...file.data, ...frontmatter };
    }
  }
}

module.exports = plugin;
