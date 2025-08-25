const { root } = require('mdast-builder');
const find = require('unist-util-find');
const { getSection } = require('./utils/get-section');
const { getParagraphContent } = require('./utils/get-paragraph-content');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const allQuestionNodes = getSection(tree, '--questions--');

    if (allQuestionNodes.length > 0) {
      const audioIds = [];
      const questionTrees = [];

      allQuestionNodes.forEach(questionNode => {
        const isStartOfQuestion =
          questionNode.children?.[0]?.value === '--text--';
        if (isStartOfQuestion) {
          questionTrees.push([questionNode]);
        } else {
          questionTrees[questionTrees.length - 1].push(questionNode);
        }
      });

      questionTrees.forEach(questionNodes => {
        const questionTree = root(questionNodes);
        const answersNodes = getSection(questionTree, '--answers--');

        if (answersNodes.length > 0) {
          const questionAudioIds = getAudioIds(answersNodes);
          if (questionAudioIds.length > 0) {
            audioIds.push(questionAudioIds);
          }
        }
      });

      if (audioIds.length > 0) {
        // Flatten the array if there's only one question, otherwise keep nested structure
        file.data.audioIds = audioIds.length === 1 ? audioIds[0] : audioIds;
      }
    }
  }
}

function getAudioIds(answersNodes) {
  const answerGroups = splitOnThematicBreak(answersNodes);
  const audioIds = [];

  answerGroups.forEach(answerGroup => {
    const answerTree = root(answerGroup);
    const audioIdNode = find(answerTree, { value: '--audioid--' });

    if (audioIdNode) {
      const audioIdNodes = getSection(answerTree, '--audioid--');

      if (audioIdNodes.length > 0) {
        try {
          const audioId = getParagraphContent(audioIdNodes[0]);
          if (audioId && audioId.trim()) {
            audioIds.push(audioId.trim());
          } else {
            audioIds.push(null); // Placeholder for answers without audioId
          }
        } catch {
          audioIds.push(null); // Placeholder for malformed audioId
        }
      } else {
        audioIds.push(null); // Placeholder for empty audioId section
      }
    } else {
      audioIds.push(null); // Placeholder for answers without audioId section
    }
  });

  return audioIds;
}

module.exports = plugin;
