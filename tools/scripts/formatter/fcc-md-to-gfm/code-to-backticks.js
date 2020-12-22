const visit = require('unist-util-visit');
const toHast = require('mdast-util-to-hast');
const raw = require('hast-util-raw');
const toMdast = require('hast-util-to-mdast');
const toHtml = require('hast-util-to-html');
const inlineCode = require('hast-util-to-mdast/lib/handlers/inline-code');

function getCodeToInline(shouldThrow) {
  return (h, node) => {
    if (node.children.length > 1) {
      if (shouldThrow) {
        console.log('Leaving code block as it does not just contain text');
        console.log(node);
        throw Error('Too many children');
      } else {
        return rawHtml(h, node);
      }
    } else {
      return inlineCode(h, node);
    }
  };
}

function rawHtml(h, node) {
  return {
    type: 'html',
    value: toHtml(node, {
      allowDangerousCharacters: true,
      allowDangerousHtml: true,
      quote: "'"
    })
  };
}

function plugin({ shouldThrow = false, pre = false }) {
  const codeToInline = getCodeToInline(shouldThrow);
  return transformer;

  function transformer(tree) {
    if (pre) {
      visit(tree, 'html', preVisitor);
    } else {
      visit(tree, 'paragraph', visitor);
    }

    function visitor(node, id, parent) {
      const hast = toHast(node, { allowDangerousHtml: true });
      const lastChild = hast.children.slice(-1)[0];

      if (
        shouldThrow &&
        lastChild &&
        lastChild.value &&
        lastChild.value.match(/<\w*>/) &&
        !lastChild.value.match(/<br>/)
      ) {
        console.log('Unclosed tag', lastChild.value);
        throw Error('Unclosed tag in paragraph.');
      }

      const paragraph = raw(hast);
      parent.children[id] = toMdast(paragraph, {
        handlers: {
          code: codeToInline,
          dfn: rawHtml,
          sup: rawHtml,
          sub: rawHtml,
          button: rawHtml
        }
      });
    }

    function preVisitor(node, id, parent) {
      const paragraph = raw(toHast(node, { allowDangerousHtml: true }));
      parent.children[id] = toMdast(paragraph, {
        handlers: {
          pre: codeToInline,
          dfn: rawHtml,
          sup: rawHtml,
          sub: rawHtml,
          button: rawHtml
        }
      });
    }
  }
}

module.exports = plugin;
