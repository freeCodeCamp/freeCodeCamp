const visit = require('unist-util-visit');
const YAML = require('js-yaml');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'code', visitor);

    function visitor(node) {
      const { lang, value } = node;
      if (lang === 'yml') {
        const tests = YAML.load(value);
        file.data = {
          ...file.data,
          ...tests
        };
      }
    }
  }
}

module.exports = plugin;
