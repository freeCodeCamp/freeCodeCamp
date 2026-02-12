const { root } = require('mdast-builder');
const { getSection, getAllSections } = require('./utils/get-section');
const { createMdastToHtml } = require('./utils/i18n-stringify');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const toHtml = createMdastToHtml(file.data.lang);
    const quizzesNodes = getSection(tree, `--quizzes--`);

    function getDistractors(distractorsNodes) {
      const distractorsGroups = splitOnThematicBreak(distractorsNodes);

      if (distractorsGroups.length !== 3)
        throw Error('Three distractors are required per quiz-question');

      return distractorsGroups.map(distractorsGroup => {
        return toHtml(distractorsGroup);
      });
    }

    function getQuestion(textNodes, distractorNodes, answerNodes, audioNodes) {
      const text = toHtml(textNodes);
      const distractors = getDistractors(distractorNodes);
      const answer = toHtml(answerNodes);

      if (!text) throw Error('--text-- is missing from the quiz question');
      if (!distractors)
        throw Error('--distractors-- are missing from quiz question');
      if (!answer) throw Error('--answer-- is missing from quiz question');

      const questionData = { text, distractors, answer };

      // Extract audio data if present
      if (audioNodes.length > 0) {
        // Audio should be in a JSON code block
        if (audioNodes[0].type !== 'code' || audioNodes[0].lang !== 'json') {
          throw Error('--audio-- section must contain a ```json code block');
        }

        try {
          const audioData = JSON.parse(audioNodes[0].value);

          // Validate structure
          if (!audioData.audio || !audioData.audio.filename) {
            throw Error('--audio-- section must contain audio.filename');
          }

          if (!audioData.transcript || !Array.isArray(audioData.transcript)) {
            throw Error(
              '--audio-- section must contain transcript as an array'
            );
          }

          if (audioData.transcript.length === 0) {
            throw Error('--audio-- section transcript array cannot be empty');
          }

          // Validate each transcript line
          audioData.transcript.forEach((line, index) => {
            if (!line.character || !line.text) {
              throw Error(
                `--audio-- transcript line ${index} must have character and text properties`
              );
            }
          });

          questionData.audioData = audioData;
        } catch (error) {
          if (error instanceof SyntaxError) {
            throw Error('--audio-- section must contain valid JSON');
          }
          throw error;
        }
      }

      return questionData;
    }

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
          const audioNodes = getSection(questionTree, '--audio--');

          quizQuestions.push(
            getQuestion(textNodes, distractorNodes, answerNodes, audioNodes)
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

module.exports = plugin;
