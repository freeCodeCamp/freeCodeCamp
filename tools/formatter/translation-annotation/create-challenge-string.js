const { pick } = require('lodash');
const yaml = require('js-yaml');

const frontmatterProperties = [
  'id',
  'title',
  'challengeType',
  'videoId',
  'videoUrl',
  'forumTopicId',
  'isPrivate',
  'required',
  'helpCategory'
];

const otherProperties = [
  'description',
  'instructions',
  'tests',
  'solutions',
  'files',
  'question'
];

const notranslateStart = '<notranslate>';
const notranslateEnd = '</notranslate>';

function createFrontmatter(data) {
  Object.keys(data).forEach(key => {
    if (!frontmatterProperties.includes(key) && !otherProperties.includes(key))
      throw Error(`Unknown property '${key}'`);
  });

  // TODO: sort the keys?  It doesn't matter from a machine perspective, but
  // it does from human-readability one.  We could get lucky and have the order
  // be preserved accidentally.
  const frontData = pick(data, frontmatterProperties);
  const frontYAML = yaml.dump(frontData);

  return `---
${frontYAML}---

`;
}

// NOTE: trimEnd is used since trailing whitespace is rarely used (it can create
// a <br>, but that's uncommon and hard to read)
function createHints({ tests }) {
  if (!tests) return '';
  const strTests = tests
    .map(
      ({ text, testString }) => `${text.trimEnd()}

${notranslateStart}
${testString.trimEnd()}
${notranslateEnd}
`
    )
    .join('\n');
  return createSection('hints', strTests);
}

function createQuestion({ question }) {
  if (!question) return '';
  const { text, answers, solution } = question;
  const formattedAnswers = answers.map(
    answer => `${notranslateStart}
${answer.trimEnd()}
${notranslateEnd}
`
  ).join(`
---

`);
  const formattedQuestion =
    createSection('text', text, { depth: 2 }) +
    createSection('answers', formattedAnswers, { depth: 2 }) +
    createSection('video-solution', solution, { depth: 2, translate: false });
  return createSection('question', formattedQuestion);
}

function createInstructions({ instructions }) {
  return createSection('instructions', instructions);
}

function createDescription({ description }) {
  return createSection('description', description);
}

function createSection(heading, contents, options) {
  const { depth = 1, translate = true } = options || {};
  return contents && contents.toString().trim()
    ? `${notranslateStart}
${''.padEnd(depth, '#')} --${heading}--
${translate ? notranslateEnd + '\n' : ''}
${contents.toString().trimEnd()}
${translate ? '' : notranslateEnd + '\n'}
`
    : '';
}

function challengeToString(data) {
  const chalString =
    createFrontmatter(data) +
    createDescription(data) +
    createInstructions(data) +
    createQuestion(data) +
    createHints(data);
  // all sections have a trailing '\n', the last one of which needs removing
  return chalString.slice(0, -1);
}

exports.challengeToString = challengeToString;
