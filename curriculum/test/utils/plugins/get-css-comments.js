const { isEmpty } = require('lodash');
const visit = require('unist-util-visit');
var css = require('css');
var visitCss = require('rework-visit');
const { commentToData } = require('../comment-to-data');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    if (isEmpty(file.data)) file.data = {};
    visit(tree, { type: 'element', tagName: 'style' }, styleVisitor);

    function styleVisitor(node) {
      visit(node, 'text', cssVisitor);
    }
    function cssVisitor(node) {
      const ast = css.parse(node.value);
      visitCss(ast.stylesheet, dec => {
        let comments = dec
          .filter(({ type }) => type === 'comment')
          .map(({ comment }) => comment.trim());
        comments.forEach(comment => commentToData(file, comment));
      });
    }
  }
}

module.exports = plugin;
