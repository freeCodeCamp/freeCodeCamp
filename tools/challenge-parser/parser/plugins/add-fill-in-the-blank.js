const { root } = require('mdast-builder');
const find = require('unist-util-find');
const getAllBetween = require('./utils/between-headings');
const getAllBefore = require('./utils/before-heading');
const mdastToHtml = require('./utils/mdast-to-html');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const fillInTheBlankNodes = getAllBetween(tree, '--fillInTheBlank--');
    if (fillInTheBlankNodes.length > 0) {
      const fillInTheBlankTree = root(fillInTheBlankNodes);

      const sentenceNodes = getAllBetween(fillInTheBlankTree, '--sentence--');
      const blanksNodes = getAllBetween(fillInTheBlankTree, '--blanks--');

      const fillInTheBlank = getfillInTheBlank(sentenceNodes, blanksNodes);

      file.data.fillInTheBlank = fillInTheBlank;
    }
  }
}

function getfillInTheBlank(sentenceNodes, blanksNodes) {
  const sentence = mdastToHtml(sentenceNodes);
  const blanks = getBlanks(blanksNodes);

  if (!sentence) throw Error('sentence is missing from fill in the blank');
  if (!blanks) throw Error('blanks are missing from fill in the blank');
  if (sentence.match(/_/g).length !== blanks.length)
    throw Error(
      `Number of underscores in sentence doesn't match the number of blanks`
    );

  return { sentence, blanks };
}

function getBlanks(blanksNodes) {
  const blanksGroups = splitOnThematicBreak(blanksNodes);

  return blanksGroups.map(blanksGroup => {
    const blanksTree = root(blanksGroup);
    const feedback = find(blanksTree, { value: '--feedback--' });

    if (feedback) {
      const blanksNodes = getAllBefore(blanksTree, '--feedback--');
      const feedbackNodes = getAllBetween(blanksTree, '--feedback--');

      return {
        answer: blanksNodes[0].children[0].value,
        feedback: mdastToHtml(feedbackNodes)
      };
    }

    return { answer: blanksGroup[0].children[0].value, feedback: null };
  });
}

module.exports = plugin;
