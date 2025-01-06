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
        const questionTrees = getAllSections(root(quizNodes), `--question--`);

        if (questionTrees.length === 0) {
          throw Error(
            'The --quiz-- section should contain at least one question.'
          );
        }

        questionTrees.forEach(singleQuestionNodes => {
          const questionTree = root(singleQuestionNodes);

          const textNodes = getSection(questionTree, '--text--');
          const distractorNodes = getSection(questionTree, '--distractors--');
          const answerNodes = getSection(questionTree, '--answer--');

          quizQuestions.push(
            getQuestion(textNodes, distractorNodes, answerNodes)
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

function getQuestion(textNodes, distractorNodes, answerNodes) {
  const text = mdastToHtml(textNodes);
  const distractors = getDistractors(distractorNodes);
  const answer = mdastToHtml(answerNodes);

  if (!text) throw Error('--text-- is missing from the quiz question');
  if (!distractors)
    throw Error('--distractors-- are missing from quiz question');
  if (!answer) throw Error('--answer-- is missing from quiz question');

  return { text, distractors, answer };
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
