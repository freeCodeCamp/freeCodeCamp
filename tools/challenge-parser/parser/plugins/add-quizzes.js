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

      if (quizTrees.length === 0) {
        throw Error('Quizzes should have at least one quiz');
      }

      quizTrees.forEach(allQuizNodes => {
        const quizTree = root(allQuizNodes);
        const quizNodes = getAllBetween(quizTree, `--quiz--`);
        const quizQuestions = [];
        const questionTrees = [];

        quizNodes.forEach(quizNode => {
          const isStartOfQuestion =
            quizNode.children?.[0]?.value === '--question--';
          if (isStartOfQuestion) {
            questionTrees.push([quizNode]);
          } else {
            questionTrees[questionTrees.length - 1].push(quizNode);
          }
        });

        if (questionTrees.length === 0) {
          throw Error('A quiz should have at least one quiz-question');
        }

        questionTrees.forEach(singleQuestionNodes => {
          const questionTree = root(singleQuestionNodes);

          const questionNodes = getAllBetween(questionTree, '--question--');
          const distractorNodes = getAllBetween(
            questionTree,
            '--distractors--'
          );
          const answerNodes = getAllBetween(questionTree, '--answer--');

          quizQuestions.push(
            getQuestion(questionNodes, distractorNodes, answerNodes)
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

function getQuestion(questionNodes, distractorNodes, answerNodes) {
  const question = mdastToHtml(questionNodes);
  const distractors = getDistractors(distractorNodes);
  const answer = mdastToHtml(answerNodes);

  if (!question) throw Error('question is missing from the quiz');
  if (!distractors) throw Error('distractors are missing from quiz question');
  if (!answer) throw Error('answer is missing from quiz question');

  return { question, distractors, answer };
}

function getDistractors(distractorsNodes) {
  const distractorsGroups = splitOnThematicBreak(distractorsNodes);

  if (distractorsGroups.length !== 3)
    throw Error('Three distractors are required per quiz-question');

  return distractorsGroups.map(distractorsGroup => {
    return mdastToHtml(distractorsGroup);
  });
}

module.exports = plugin;
