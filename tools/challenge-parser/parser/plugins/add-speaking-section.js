const { root } = require('mdast-builder');
const { getSection } = require('./utils/get-section');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const speakingSectionNodes = getSection(tree, '--speaking-section--');
    if (speakingSectionNodes.length === 0) return;

    const speakingSectionTree = root(speakingSectionNodes);

    const sentenceNodes = getSection(speakingSectionTree, '--sentence--');
    if (sentenceNodes.length === 0) {
      throw Error(
        '--speaking-section-- must contain a --sentence-- subsection'
      );
    }
    const sentenceParagraph = sentenceNodes[0];
    if (
      sentenceParagraph.type !== 'paragraph' ||
      sentenceParagraph.children.length !== 1 ||
      sentenceParagraph.children[0].type !== 'inlineCode'
    ) {
      throw Error(
        '--sentence-- in --speaking-section-- must be a single inline code block, e.g. `Yes, I have.`'
      );
    }
    const sentence = sentenceParagraph.children[0].value.trim();
    if (!sentence) {
      throw Error('--sentence-- in --speaking-section-- must not be empty');
    }

    const audioNodes = getSection(speakingSectionTree, '--speaking-audio--');
    if (audioNodes.length === 0) {
      throw Error(
        '--speaking-section-- must contain a --speaking-audio-- subsection'
      );
    }
    if (audioNodes[0].type !== 'code' || audioNodes[0].lang !== 'json') {
      throw Error('--speaking-audio-- must contain a ```json code block');
    }
    // throws if invalid JSON
    const audio = JSON.parse(audioNodes[0].value);

    file.data.speakingSection = { sentence, audio };
  }
}

module.exports = plugin;
