const visit = require('unist-util-visit');

const emojiRE = /^:[a-z_]+:$/;

function markdownToHTML(node) {
  const { url, title, alt } = node;
  const html = `
  <img
    alt="${alt}"
    class="forum-image"
    src="${url}"
    title="${title}"
    >
  `;

  return Object.assign(node, {
    type: 'html',
    value: html
  });
}

module.exports = function forumEmojiPlugin({ markdownAST }) {
  visit(markdownAST, 'image', imageNode =>
    emojiRE.test(imageNode.title) ? markdownToHTML(imageNode) : imageNode
  );
};
