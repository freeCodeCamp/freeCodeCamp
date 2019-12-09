const visit = require('unist-util-visit');
const toHast = require('mdast-util-to-hast');
const raw = require('hast-util-raw');
const toMdast = require('hast-util-to-mdast');
const toHtml = require('hast-util-to-html');
const inlineCode = require('hast-util-to-mdast/lib/handlers/inline-code');

function codeToInline(h, node) {
  if (node.children.length > 1) {
    // console.log('Leaving code block as it does not just contain text');
    // console.log(node);
    // throw Error('Too many children');
    return rawHTML(h, node);
  } else {
    return inlineCode(h, node);
  }
}

function rawHTML(h, node) {
  return {
    type: 'html',
    value: toHtml(node, {
      allowDangerousCharacters: true,
      allowDangerousHTML: true,
      quote: "'"
    })
  };
}

function plugin() {
  return transformer;

  function transformer(tree) {
    visit(tree, 'paragraph', visitor);

    function visitor(node, id, parent) {
      const paragraph = raw(toHast(node, { allowDangerousHTML: true }));
      parent.children[id] = toMdast(paragraph, {
        handlers: {
          code: codeToInline,
          dfn: rawHTML,
          sup: rawHTML,
          sub: rawHTML,
          button: rawHTML
        }
      });
    }
  }
}

module.exports = plugin;
