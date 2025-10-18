const { root } = require('mdast-builder');
const find = require('unist-util-find');
const { getSection } = require('./utils/get-section');
const getAllBefore = require('./utils/before-heading');
const mdastToHtml = require('./utils/mdast-to-html');
const { getParagraphContent } = require('./utils/get-paragraph-content');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const allQuestionNodes = getSection(tree, '--questions--');

    if (allQuestionNodes.length > 0) {
      const questions = [];
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

        const textNodes = getSection(questionTree, '--text--');
        const answersNodes = getSection(questionTree, '--answers--');
        const solutionNodes = getSection(questionTree, '--video-solution--');

        questions.push(getQuestion(textNodes, answersNodes, solutionNodes));
      });

      file.data.questions = questions;
    }
  }
}

function getQuestion(textNodes, answersNodes, solutionNodes) {
  const text = mdastToHtml(textNodes);
  const answers = getAnswers(answersNodes);
  const solution = getSolution(solutionNodes);

  if (!text) throw Error('text is missing from question');
  if (!answers) throw Error('answers are missing from question');
  if (!solution) throw Error('solution is missing from question');

  return { text, answers, solution };
}

function getAnswers(answersNodes) {
  const answerGroups = splitOnThematicBreak(answersNodes);

  return answerGroups.map(answerGroup => {
    const answerTree = root(answerGroup);

    const feedbackNodes = getSection(answerTree, '--feedback--');
    const audioIdNodes = getSection(answerTree, '--audio-id--');
    const hasFeedback = feedbackNodes.length > 0;
    const hasAudioId = audioIdNodes.length > 0;

    if (hasFeedback || hasAudioId) {
      let answerNodes;

      if (hasFeedback && hasAudioId) {
        const feedbackHeading = find(answerTree, {
          type: 'heading',
          children: [{ type: 'text', value: '--feedback--' }]
        });
        const audioIdHeading = find(answerTree, {
          type: 'heading',
          children: [{ type: 'text', value: '--audio-id--' }]
        });

        const feedbackIndex = answerTree.children.indexOf(feedbackHeading);
        const audioIdIndex = answerTree.children.indexOf(audioIdHeading);
        const firstMarker =
          feedbackIndex < audioIdIndex ? '--feedback--' : '--audio-id--';
        answerNodes = getAllBefore(answerTree, firstMarker);
      } else if (hasFeedback) {
        answerNodes = getAllBefore(answerTree, '--feedback--');
      } else {
        answerNodes = getAllBefore(answerTree, '--audio-id--');
      }

      if (answerNodes.length < 1) {
        throw Error('Answer missing');
      }

      let extractedAudioId = null;
      if (hasAudioId) {
        const audioIdContent = getParagraphContent(audioIdNodes[0]);
        if (audioIdContent && audioIdContent.trim()) {
          extractedAudioId = audioIdContent.trim();
        }
      }

      return {
        answer: mdastToHtml(answerNodes),
        feedback: hasFeedback ? mdastToHtml(feedbackNodes) : null,
        audioId: extractedAudioId
      };
    }

    return { answer: mdastToHtml(answerGroup), feedback: null, audioId: null };
  });
}

function getSolution(solutionNodes) {
  let solution;
  try {
    solution = Number(getParagraphContent(solutionNodes[0]));
    if (Number.isNaN(solution)) throw Error('Not a number');
    if (solution < 1) throw Error('Not positive number');
  } catch (e) {
    console.log(e);
    throw Error('A video solution should be a positive integer');
  }

  return solution;
}

module.exports = plugin;
