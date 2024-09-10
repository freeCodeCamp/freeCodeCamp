const { root } = require('mdast-builder');
const find = require('unist-util-find');
const getAllBetween = require('./utils/between-headings');
const getAllBefore = require('./utils/before-heading');
const mdastToHtml = require('./utils/mdast-to-html');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    let quizNumber = 1;
    let endOfQuizzes = false;
    const quizzes = [];

    while (!endOfQuizzes) {
      const quizNodes = getAllBetween(tree, `--quiz-${quizNumber}--`);

      if (quizNodes.length > 0) {
        const quizQuestions = [];
        const questionTrees = [];

        quizNodes.forEach(quizNode => {
          const isStartOfQuestion =
            quizNode.children?.[0]?.value === '--quiz-question--';
          if (isStartOfQuestion) {
            questionTrees.push([quizNode]);
          } else {
            questionTrees[questionTrees.length - 1].push(quizNode);
          }
        });

        questionTrees.forEach(questionNodes => {
          const questionTree = root(questionNodes);

          const quizQuestionNodes = getAllBetween(
            questionTree,
            '--quiz-question--'
          );
          const questionOptionNodes = getAllBetween(
            questionTree,
            '--question-options--'
          );
          const questionSolutionNodes = getAllBetween(
            questionTree,
            '--question-solution--'
          );

          quizQuestions.push(
            getQuestion(
              quizQuestionNodes,
              questionOptionNodes,
              questionSolutionNodes
            )
          );
        });

        quizzes.push({ questions: quizQuestions });
        quizNumber++;
      } else {
        endOfQuizzes = true;
      }
    }

    if (quizzes.length > 0) {
      console.log(quizzes);
      console.log(quizzes[0].questions);
      console.log(quizzes[0].questions[0].options);
      file.data.quizzes = quizzes;
    }
  }
}

function getQuestion(questionNodes, optionsNodes, solutionNodes) {
  const question = mdastToHtml(questionNodes);
  const options = getOptions(optionsNodes);
  const solution = getSolution(solutionNodes);

  if (!question) throw Error('quiz-question is missing from the quiz');
  if (!options) throw Error('options are missing from quiz question');
  if (!solution) throw Error('solution is missing from quiz question');

  return { question, options, solution };
}

function getOptions(optionsNodes) {
  const optionGroups = splitOnThematicBreak(optionsNodes);

  return optionGroups.map(optionGroup => {
    const optionTree = root(optionGroup);
    const feedback = find(optionTree, { value: '--option-feedback--' });

    if (feedback) {
      const optionNodes = getAllBefore(optionTree, '--option-feedback--');
      const feedbackNodes = getAllBetween(optionTree, '--option-feedback--');

      if (optionNodes.length < 1) {
        throw Error('Option missing');
      }

      return {
        option: mdastToHtml(optionNodes),
        feedback: mdastToHtml(feedbackNodes)
      };
    }

    return { option: mdastToHtml(optionGroup), feedback: null };
  });
}

function getSolution(solutionNodes) {
  let solution;
  try {
    if (solutionNodes.length > 1) throw Error('Too many nodes');
    if (solutionNodes[0].children.length > 1)
      throw Error('Too many child nodes');
    const solutionString = solutionNodes[0].children[0].value;
    if (solutionString === '') throw Error('Non-empty string required');

    solution = Number(solutionString);
    if (Number.isNaN(solution)) throw Error('Not a number');
    if (solution < 1) throw Error('Not positive number');
  } catch (e) {
    console.log(e);
    throw Error('A quiz question solution should be a positive integer');
  }

  return solution;
}

module.exports = plugin;
