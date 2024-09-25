const { root } = require('mdast-builder');
const { getSection, getAllSections } = require('./utils/get-section');
const mdastToHtml = require('./utils/mdast-to-html');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const quizzesNodes = getSection(tree, `--quizzes--`);

    if (quizzesNodes.length > 0) {
      const compiledQuizzes = [];
      const quizSections = getAllSections(root(quizzesNodes), `--quiz--`);

      if (quizSections.length === 0) {
        throw Error(
          'The --quizzes-- section should contain at least one quiz.'
        );
      }

      quizSections.forEach(quizNodes => {
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
          throw Error(
            'The --quiz-- section should contain at least one question.'
          );
        }

        questionTrees.forEach(singleQuestionNodes => {
          const questionTree = root(singleQuestionNodes);

          const questionNodes = getSection(questionTree, '--question--');
          const distractorNodes = getSection(questionTree, '--distractors--');
          const answerNodes = getSection(questionTree, '--answer--');

          quizQuestions.push(
            getQuestion(questionNodes, distractorNodes, answerNodes)
          );
        });

        compiledQuizzes.push({ questions: quizQuestions });
      });

      if (compiledQuizzes.length > 0) {
        file.data.quizzes = compiledQuizzes;
      }
    }
  }
}

function getQuestion(questionNodes, distractorNodes, answerNodes) {
  const question = mdastToHtml(questionNodes);
  const distractors = getDistractors(distractorNodes);
  const answer = mdastToHtml(answerNodes);

  if (!question) throw Error('--question-- is missing from the quiz');
  if (!distractors)
    throw Error('--distractors-- are missing from quiz question');
  if (!answer) throw Error('--answer-- is missing from quiz question');

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
