const { root } = require('mdast-builder');
const find = require('unist-util-find');
const visit = require('unist-util-visit');
const { getSection } = require('./utils/get-section');
const getAllBefore = require('./utils/before-heading');
const mdastToHtml = require('./utils/mdast-to-html');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

const NOT_IN_PARAGRAPHS = `Each inline code block in the fillInTheBlank sentence section must in its own paragraph
If you have more than one code block, check that they're separated by a blank line
Example of bad formatting:
\`too close\`
\`to each other\`

Example of good formatting:
\`separated\`

\`by a blank line\`

`;

const NOT_IN_CODE_BLOCK = `Each paragraph in the fillInTheBlank sentence section must be inside an inline code block
Example of bad formatting:
## --sentence--

This is a sentence

Example of good formatting:
## --sentence--

\`This is a sentence\`

`;

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const fillInTheBlankNodes = getSection(tree, '--fillInTheBlank--');
    if (fillInTheBlankNodes.length > 0) {
      const fillInTheBlankTree = root(fillInTheBlankNodes);

      validateBlanksCount(fillInTheBlankTree);

      const sentenceNodes = getSection(fillInTheBlankTree, '--sentence--');
      const blanksNodes = getSection(fillInTheBlankTree, '--blanks--');

      const fillInTheBlank = getfillInTheBlank(sentenceNodes, blanksNodes);

      file.data.fillInTheBlank = fillInTheBlank;
    }
  }
}

function validateBlanksCount(fillInTheBlankTree) {
  let blanksCount = 0;
  visit(fillInTheBlankTree, { value: '--blanks--' }, () => {
    blanksCount++;
  });

  if (blanksCount !== 1)
    throw Error(
      `There should only be one --blanks-- section in the fillInTheBlank challenge`
    );
}

function getfillInTheBlank(sentenceNodes, blanksNodes) {
  const sentenceWithoutCodeBlocks = sentenceNodes.map(node => {
    node.children.forEach(child => {
      if (child.type === 'text' && child.value.trim() === '')
        throw Error(NOT_IN_PARAGRAPHS);
      if (child.type !== 'inlineCode') throw Error(NOT_IN_CODE_BLOCK);
    });

    const children = node.children.map(child => ({ ...child, type: 'text' }));
    return { ...node, children };
  });
  const sentence = mdastToHtml(sentenceWithoutCodeBlocks);
  const blanks = getBlanks(blanksNodes);

  if (!sentence) throw Error('sentence is missing from fill in the blank');
  if (!blanks) throw Error('blanks are missing from fill in the blank');
  if (sentence.match(/BLANK/g).length !== blanks.length)
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
      const feedbackNodes = getSection(blanksTree, '--feedback--');

      return {
        answer: blanksNodes[0].children[0].value,
        feedback: mdastToHtml(feedbackNodes)
      };
    }

    return { answer: blanksGroup[0].children[0].value, feedback: null };
  });
}

module.exports = plugin;
