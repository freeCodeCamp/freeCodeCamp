const { root } = require('mdast-builder');
const { getSection, getAllSections } = require('./utils/get-section');
const { createMdastToHtml } = require('./utils/i18n-stringify');
const { getParagraphContent } = require('./utils/get-paragraph-content');

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

    function getQuestion(
      textNodes,
      distractorNodes,
      answerNodes,
      audioIdNodes,
      transcriptNodes
    ) {
      const text = toHtml(textNodes);
      const distractors = getDistractors(distractorNodes);
      const answer = toHtml(answerNodes);

      if (!text) throw Error('--text-- is missing from the quiz question');
      if (!distractors)
        throw Error('--distractors-- are missing from quiz question');
      if (!answer) throw Error('--answer-- is missing from quiz question');

      const questionData = { text, distractors, answer };

      // Extract audio-id if present
      if (audioIdNodes.length > 0) {
        const audioIdContent = getParagraphContent(audioIdNodes[0]);
        if (audioIdContent && audioIdContent.trim()) {
          questionData.audioId = audioIdContent.trim();

          // Transcript is required when audio-id is present
          if (transcriptNodes.length === 0) {
            throw Error(
              '--transcript-- is required when --audio-id-- is present'
            );
          }
          const transcriptContent = toHtml(transcriptNodes);
          if (!transcriptContent || !transcriptContent.trim()) {
            throw Error(
              '--transcript-- content cannot be empty when --audio-id-- is present'
            );
          }
          questionData.transcript = transcriptContent;
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
          const audioIdNodes = getSection(questionTree, '--audio-id--');
          const transcriptNodes = getSection(questionTree, '--transcript--');

          quizQuestions.push(
            getQuestion(
              textNodes,
              distractorNodes,
              answerNodes,
              audioIdNodes,
              transcriptNodes
            )
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
