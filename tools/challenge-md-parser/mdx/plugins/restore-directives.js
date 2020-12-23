const visit = require('unist-util-visit');
const { matches } = require('unist-util-select');
const directive = require('mdast-util-directive');
var toMarkdown = require('mdast-util-to-markdown');

// TODO: needs tests (and confirmation it doesn't break imports), but I think
// this approach is sound.
function plugin() {
  return transformer;

  function transformer(tree) {
    visit(tree, visitor);

    function visitor(node, id, parent) {
      // currently `remark-directive` seems to be ignoring containerDirectives
      // but, assuming that will get fixed, we test for it anyway.
      const isDirective =
        matches('leafDirective', node) ||
        matches('textDirective', node) ||
        matches('containerDirective', node);

      if (isDirective) {
        parent.children[id] = {
          type: 'text',
          value: toMarkdown(node, {
            extensions: [directive.toMarkdown]
          }).trim()
        };
      }
    }
  }
}

module.exports = plugin;
