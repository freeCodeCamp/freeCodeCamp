const { root } = require('mdast-builder');
const getAllBetween = require('./utils/between-headings');
const mdastToHtml = require('./utils/mdast-to-html');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const quizzesNodes = getAllBetween(tree, `--quizzes--`);

    if (quizzesNodes.length > 0) {
      const quizzes = [];
      const quizTrees = [];

      quizzesNodes.forEach(quizNode => {
        const isStartOfQuiz = quizNode.children?.[0]?.value === '--quiz--';
        if (isStartOfQuiz) {
          quizTrees.push([quizNode]);
        } else {
          quizTrees[quizTrees.length - 1].push(quizNode);
        }
      });

      quizTrees.forEach(allQuizNodes => {
        const quizTree = root(allQuizNodes);
        const quizNodes = getAllBetween(quizTree, `--quiz--`);
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
      });

      if (quizzes.length > 0) {
        file.data.quizzes = quizzes;
      }
    }
  }
}

function getQuestion(questionNodes, optionsNodes, solutionNodes) {
  const question = mdastToHtml(questionNodes);
  const options = getOptions(optionsNodes);
  const solution = getSolution(solutionNodes);

  if (!question) throw Error('quiz-question is missing from the quiz');
  if (!options) throw Error('question-options are missing from quiz question');
  if (!solution) throw Error('question-solution is missing from quiz question');

  return { question, options, solution };
}

function getOptions(optionsNodes) {
  const optionGroups = splitOnThematicBreak(optionsNodes);

  return optionGroups.map(optionGroup => {
    return mdastToHtml(optionGroup);
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
