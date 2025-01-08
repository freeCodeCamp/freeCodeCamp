const { root } = require('mdast-builder');
const find = require('unist-util-find');
const { getSection } = require('./utils/get-section');
const getAllBefore = require('./utils/before-heading');
const mdastToHtml = require('./utils/mdast-to-html');

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
        const distractorNodes = getSection(questionTree, '--distractors--');
        const solutionNodes = getSection(questionTree, '--answer--');

        questions.push(getQuestion(textNodes, distractorNodes, solutionNodes));
      });

      file.data.questions = questions;
    }
  }
}

function getQuestion(textNodes, distractorsNodes, answerNodes) {
  const text = mdastToHtml(textNodes);
  const distractors = getDistractors(distractorsNodes);
  const answer = getAnswer(answerNodes);

  if (!text) throw Error('text is missing from question');
  if (!distractors) throw Error('distractors are missing from question');
  if (!answer) throw Error('answer is missing from question');

  return { text, distractors, answer };
}

function getDistractors(distractorsNodes) {
  const distractorGroups = splitOnThematicBreak(distractorsNodes);

  return distractorGroups.map(distractorGroup => {
    const distractorTree = root(distractorGroup);
    const feedback = find(distractorTree, { value: '--feedback--' });

    if (feedback) {
      const answerNodes = getAllBefore(distractorTree, '--feedback--');
      const feedbackNodes = getSection(distractorTree, '--feedback--');

      if (answerNodes.length < 1) {
        throw Error('Answer missing');
      }

      return {
        answer: mdastToHtml(answerNodes),
        feedback: mdastToHtml(feedbackNodes)
      };
    }

    return { answer: mdastToHtml(distractorGroup), feedback: null };
  });
}

function getAnswer(solutionNodes) {
  return mdastToHtml(solutionNodes);
}

module.exports = plugin;
