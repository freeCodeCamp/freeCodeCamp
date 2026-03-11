const { root } = require('mdast-builder');
const find = require('unist-util-find');
const { getSection, getAllSections } = require('./utils/get-section');
const getAllBefore = require('./utils/before-heading');
const { getParagraphContent } = require('./utils/get-paragraph-content');

const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');
const { createMdastToHtml } = require('./utils/i18n-stringify');

function plugin() {
  return transformer;
  function transformer(tree, file) {
    const toHtml = createMdastToHtml(file.data.lang);

    function getQuestion(textNodes, answersNodes, solutionNodes) {
      const text = toHtml(textNodes);
      const answers = getAnswers(answersNodes);
      const solution = getSolution(solutionNodes);

      if (!text) throw Error('text is missing from question');
      if (!answers) throw Error('answers are missing from question');
      if (!solution) throw Error('solution is missing from question');
      if (solution > answers.length)
        throw Error(
          `solution must be within range of number of answers: 1-${answers.length}`
        );
      if (answers[solution - 1].feedback)
        throw Error('answer selected as solution cannot have feedback section');

      return { text, answers, solution };
    }

    function getAnswers(answersNodes) {
      const answerGroups = splitOnThematicBreak(answersNodes);

      return answerGroups.map((answerGroup, index) => {
        const answerTree = root(answerGroup);
        const feedbackGroups = getAllSections(answerTree, '--feedback--');

        if (feedbackGroups.length > 1)
          throw new Error(`answer ${index + 1} has multiple feedback sections`);

        const [feedbackNodes] = feedbackGroups;
        const audioIdNodes = getSection(answerTree, '--audio-id--');
        const hasFeedback = feedbackNodes?.length > 0;
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
            answer: toHtml(answerNodes),
            feedback: hasFeedback ? toHtml(feedbackNodes) : null,
            audioId: extractedAudioId
          };
        }

        return {
          answer: toHtml(answerGroup),
          feedback: null,
          audioId: null
        };
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

    const allQuestionNodes = getSection(tree, '--questions--');

    if (allQuestionNodes.length > 0) {
      const questions = [];
      const questionTrees = [];

      allQuestionNodes.forEach(questionNode => {
        const isStartOfQuestion =
          questionNode.children?.[0]?.value === '--text--';
        if (isStartOfQuestion) {
          questionTrees.push([questionNode]);
        } else if (questionTrees.length === 0) {
          throw Error('question text is missing in questions section');
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

module.exports = plugin;
