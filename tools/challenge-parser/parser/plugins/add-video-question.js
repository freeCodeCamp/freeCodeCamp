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
    const feedback = find(answerTree, { value: '--feedback--' });

    if (feedback) {
      const answerNodes = getAllBefore(answerTree, '--feedback--');
      const feedbackNodes = getSection(answerTree, '--feedback--');

      if (answerNodes.length < 1) {
        throw Error('Answer missing');
      }

      return {
        answer: mdastToHtml(answerNodes),
        feedback: mdastToHtml(feedbackNodes)
      };
    }

    return { answer: mdastToHtml(answerGroup), feedback: null };
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
