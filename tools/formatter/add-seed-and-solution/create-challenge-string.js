const { isEmpty, pick } = require('lodash');
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
  'helpCategory',
  'dashedName'
];

const otherProperties = [
  'description',
  'instructions',
  'tests',
  'solutions',
  'files',
  'question'
];

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

${testString.trimEnd()}
`
    )
    .join('\n');
  return createSection('hints', strTests);
}

function createQuestion({ question }) {
  if (!question) return '';
  const { text, answers, solution } = question;
  const formattedAnswers = answers.map(
    answer => `${answer.trimEnd()}
`
  ).join(`
---

`);
  const formattedQuestion =
    createSection('text', text, { depth: 2 }) +
    createSection('answers', formattedAnswers, { depth: 2 }) +
    createSection('video-solution', solution, { depth: 2 });
  return createSection('question', formattedQuestion);
}

function createInstructions({ instructions }) {
  return createSection('instructions', instructions);
}

function createDescription({ description }) {
  return createSection('description', description);
}

function createSeed({ files }) {
  if (!files) return '';
  const supportedLanguages = ['html', 'css', 'js', 'jsx'];
  const supportedIndexes = supportedLanguages.map(lang => 'index' + lang);
  Object.values(files).forEach(({ ext }) => {
    if (!supportedLanguages.includes(ext)) throw `Unsupported language: ${ext}`;
  });
  Object.keys(files).forEach(index => {
    if (!supportedIndexes.includes(index)) throw `Unsupported index: ${index}`;
  });

  const head = Object.values(files)
    .filter(({ head }) => !isEmpty(head))
    .map(({ ext, head }) => fenceCode(ext, head))
    .join('\n');

  const tail = Object.values(files)
    .filter(({ tail }) => !isEmpty(tail))
    .map(({ ext, tail }) => fenceCode(ext, tail))
    .join('\n');

  const contents = Object.values(files)
    .map(({ ext, contents, editableRegionBoundaries }) =>
      fenceCode(ext, insertMarkers(contents, editableRegionBoundaries))
    )
    .join('\n');

  return (
    `# --seed--

` +
    createSection('before-user-code', head, { depth: 2 }) +
    createSection('after-user-code', tail, { depth: 2 }) +
    createSection('seed-contents', contents, { depth: 2 })
  );
}

function createSolutions({ solutions }) {
  if (isEmptySolutions(solutions)) return '';
  const solutionsStr = solutions.map(soln => solutionToText(soln)).join(`
---

`);
  return `# --solutions--

${solutionsStr}`;
}

function isEmptySolutions(solutions) {
  if (!solutions || !solutions.length) return true;
  return isEmpty(solutions[0]);
}

function solutionToText(solution) {
  const supportedLanguages = ['html', 'css', 'js', 'jsx', 'py'];
  const supportedIndexes = supportedLanguages.map(lang => 'index' + lang);
  Object.values(solution).forEach(({ ext }) => {
    if (!supportedLanguages.includes(ext)) throw `Unsupported language: ${ext}`;
  });
  Object.keys(solution).forEach(index => {
    if (!supportedIndexes.includes(index)) throw `Unsupported index: ${index}`;
  });

  return Object.values(solution)
    .map(({ ext, contents }) => fenceCode(ext, contents))
    .join('\n');
}

function createSection(heading, contents, options) {
  const { depth = 1 } = options || {};
  return contents && contents.toString().trim()
    ? `${''.padEnd(depth, '#')} --${heading}--

${contents.toString().trimEnd()}

`
    : '';
}

// Even if there is no code, we should fence it in case the extension is used
function fenceCode(ext, code) {
  if (code) {
    return `${'```' + ext}
${code}
${'```'}
`;
  } else {
    return `${'```' + ext}
${'```'}
`;
  }
}

function insertMarkers(code, markers) {
  const lines = code.split('\n');
  return markers
    .reduce((acc, idx) => {
      return insert(acc, '--fcc-editable-region--', idx);
    }, lines)
    .join('\n');
}

function insert(xs, x, idx) {
  return [...xs.slice(0, idx), x, ...xs.slice(idx)];
}

function challengeToString(data) {
  const chalString =
    createFrontmatter(data) +
    createDescription(data) +
    createInstructions(data) +
    createQuestion(data) +
    createHints(data) +
    createSeed(data) +
    createSolutions(data);
  return chalString;
}

exports.challengeToString = challengeToString;
