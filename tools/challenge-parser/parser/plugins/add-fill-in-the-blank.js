const { root } = require('mdast-builder');
const find = require('unist-util-find');
const visit = require('unist-util-visit');
const { getSection } = require('./utils/get-section');
const getAllBefore = require('./utils/before-heading');
const {
  createMdastToHtml,
  parseHanziPinyinPairs
} = require('./utils/i18n-stringify');
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

      validateBlanksSectionCount(fillInTheBlankTree);

      const sentenceNodes = getSection(fillInTheBlankTree, '--sentence--');
      const blanksNodes = getSection(fillInTheBlankTree, '--blanks--');

      const lang = file.data.lang;
      const inputType = file.data.inputType;
      const toHtml = createMdastToHtml(lang);

      file.data.fillInTheBlank = getFillInTheBlank(sentenceNodes, blanksNodes);

      function getFillInTheBlank(sentenceNodes, blanksNodes) {
        const sentenceWithoutCodeBlocks = sentenceNodes.map(node => {
          node.children.forEach(child => {
            if (child.type === 'text' && child.value.trim() === '')
              throw Error(NOT_IN_PARAGRAPHS);
            if (child.type !== 'inlineCode') throw Error(NOT_IN_CODE_BLOCK);
          });

          // For Chinese hanzi-pinyin, keep as inlineCode so handler generates ruby elements
          if (lang === 'zh-CN') {
            const hasChinesePairs = node.children.some(
              child =>
                child.type === 'inlineCode' &&
                parseHanziPinyinPairs(child.value).length > 0
            );

            if (hasChinesePairs) {
              return node;
            }
          }

          // Convert inlineCode to text for non-Chinese content
          const children = node.children.map(child => ({
            ...child,
            type: 'text'
          }));
          return { ...node, children };
        });

        const sentence = toHtml(sentenceWithoutCodeBlocks);
        const blanks = getBlanks(blanksNodes);

        if (!sentence)
          throw Error('sentence is missing from fill in the blank');
        if (!blanks) throw Error('blanks are missing from fill in the blank');
        if (sentence.match(/BLANK/g).length !== blanks.length)
          throw Error(`Number of BLANKs doesn't match the number of answers.`);

        // For 'pinyin-to-hanzi' inputType, all answers must be of type 'hanzi-pinyin'.
        // This validation ensures compatibility with the pinyin input in the UI,
        // where users type pinyin and the system automatically converts it to hanzi
        // if the input value matches the expected pinyin from the answer.
        if (inputType === 'pinyin-to-hanzi') {
          const allAnswersAreHanziPinyin = blanks.every(
            blank => parseHanziPinyinPairs(blank.answer).length === 1
          );

          if (!allAnswersAreHanziPinyin) {
            throw Error(
              `When inputType is 'pinyin-to-hanzi', all answers must be in 'hanzi (pinyin)' format.`
            );
          }
        }

        return { sentence, blanks, ...(inputType && { inputType }) };
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
              feedback: toHtml(feedbackNodes)
            };
          }

          return {
            answer: blanksGroup[0].children[0].value,
            feedback: null
          };
        });
      }
    }
  }
}

function validateBlanksSectionCount(fillInTheBlankTree) {
  let blanksCount = 0;
  visit(fillInTheBlankTree, { value: '--blanks--' }, () => {
    blanksCount++;
  });

  if (blanksCount !== 1)
    throw Error(
      `There should only be one --blanks-- section in the fillInTheBlank challenge`
    );
}

module.exports = plugin;
