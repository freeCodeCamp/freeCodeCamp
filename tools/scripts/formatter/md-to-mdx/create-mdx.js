const { isEmpty, pick } = require('lodash');
const yaml = require('js-yaml');
const he = require('he');
const prettier = require('prettier');

const prettierOptions = prettier.resolveConfig.sync();

const {
  getCodeToBackticksSync,
  prettifySync
} = require('../../formatter/fcc-md-to-gfm/transformChallenges');
const { correctUrl } = require('../../formatter/fcc-md-to-gfm/insert-spaces');

const codeToBackticksSync = getCodeToBackticksSync(true);
const unified = require('unified');

const remarkParse = require('remark-parse');
const find = require('unist-util-find');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const raw = require('rehype-raw');

var parser = unified().use(remarkParse);
var mdToHTML = unified()
  .use(remarkParse)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(raw)
  .use(html, { allowDangerousCharacters: true, allowDangerousHtml: true })
  .processSync;

function parseMd(text) {
  return parser.parse(text);
}

// inspired by wrapRecursive, but takes in text and outputs text.
function wrapUrls(rawText) {
  const mdNode = parseMd(rawText);

  const link = find(mdNode, { type: 'link' });

  if (link) {
    const url = correctUrl(link.url);
    const pos = rawText.indexOf(url);
    const head = rawText.slice(0, pos);
    const tail = rawText.slice(pos + url.length);
    const newText = head + '`' + url + '`' + wrapUrls(tail);
    return newText;
  } else {
    return rawText;
  }
}

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

// TODO: handle certs elsewhere (ideally don't try to create mdx versions)
function createHints({ tests, title }) {
  if (!tests) return '';
  const strTests = tests
    .map(
      ({ text, testString }) => `${hintToMd(text, title)}

${'```js'}
${
  typeof testString === 'string'
    ? prettier
        .format(testString, { ...prettierOptions, parser: 'babel' })
        .trim()
    : ''
}
${'```'}
`
    )
    .join('\n');
  return `# --hints--

${strTests}
`;
}

function validateHints({ tests, question, title }) {
  if (tests) {
    tests.forEach(({ text }) => {
      validateAndLog(text, title, false);
    });
  }
  if (question && question.text) {
    validateAndLog(question.text, title, false);
  }
  if (question && question.answers) {
    question.answers.forEach(text => {
      validateAndLog(text, title, false);
    });
  }
}

function validateAndLog(text, title, log = true) {
  const { valid, parsed, parsedSimplified, finalHint } = validateText(text);
  if (!valid) {
    if (log) {
      console.log('original'.padEnd(8, ' '), text);
      console.log('parsed'.padEnd(8, ' '), parsed);
      console.log('finalP'.padEnd(8, ' '), parsedSimplified);
      console.log('finalT'.padEnd(8, ' '), finalHint);
    }
    throw Error(title);
  }
}

function validateText(text) {
  // hints can be empty; empty hints don't need validating.
  if (!text) {
    return { valid: true };
  }

  // the trailing \n will not affect the final html, so we can trim.  At worst
  // there will be <br> difference between the two.
  text = text.trim();

  let parsed = mdToHTML(text).contents;

  // parsed text is expected to get wrapped in p tags, so we remove them.
  // NOTE: this is a bit zealous, but allowing any p tags generates a ton of
  // false positives.
  if (parsed.match(/^<p>.*<\/p>$/s)) {
    parsed = parsed.replace(/<p>/g, '').replace(/<\/p>/g, '');
  } else if (parsed.match(/^<p>.*<\/p>\n<pre>/)) {
    parsed = parsed.match(/^<p>(.*)<\/p>/s)[1];
    text = text.match(/^(.*?)```/s)[1];
  } else if (
    parsed.match(/^<pre><code>/) ||
    parsed.match(/^<pre><code\s*class/)
  ) {
    // TODO: figure out how to handle the
    /*
    question: | text
      ```lang
      sfasfd
      ```

    */
    // type of question.  Actually, since this is already md format, we can
    // probably let these through.  Just check that they match the <p>stuff</p>
    // <pre> blah and we should be okay.

    // throw Error(`Unexpected parse result ${parsed}`);
    return { valid: true, parsed };
  } else {
    throw Error(`Unexpected parse result ${parsed}`);
  }

  if (text === parsed) {
    return { valid: true, parsed };
  }

  // it's possible the hint contained ` not code tags, so we replace in both
  // also trimming because we know whitespace is actually preserved by the mdx
  // parser

  let finalParsed = parsed.replace(/<code>/g, '`').replace(/<\/code>/g, '`');
  let finalHint = text.replace(/<code>/g, '`').replace(/<\/code>/g, '`');

  // I've verified that whitespace is preserved by formatting and that the mdx
  // parser also preserves it when it should (i.e. inside ``).  So, for
  // simplicity, I'm collapsing it here.
  finalParsed = finalParsed.replace(/\s+/g, '');
  finalHint = finalHint.replace(/\s+/g, '');
  // TODO: is this too lax?  Just forcing them both to use the decoded
  // characters.
  finalParsed = he.decode(finalParsed);
  finalHint = he.decode(finalHint);

  return {
    valid: finalHint === finalParsed,
    parsed,
    parsedSimplified: finalParsed,
    finalHint
  };
}

function hintToMd(hint, title) {
  // we're only interested in `code` and want to avoid catching ```code```
  const codeRE = /(?<!`)`[^`]+`(?!`)/g;
  let wrappedCode = wrapCode(hint, title);
  let wrappedUrls = wrapUrls(wrappedCode, title);
  const pretty = wrappedUrls.split(codeRE).map(text => {
    // prettify discards whitespace, which we generally want to keep.
    if (text.match(/^\s*$/)) {
      return text;
    } else {
      // bit of hack: we need to keep trailing newlines because they might be
      // meaningful. prettifySync should respect them, but it's clearly being
      // overzealous.
      const leadingBreaks = text.match(/^\n*/)[0];
      const rest = text.slice(leadingBreaks.length);
      // prettify *also* adds a trailing \n which we generally don't want to
      // keep
      return leadingBreaks + prettifySync(rest).contents.slice(0, -1);
    }
  });

  const code = [...wrappedUrls.matchAll(codeRE)].map(match => match[0]);
  let newHint = [];
  pretty.forEach((text, idx) => {
    newHint.push(text);
    if (typeof code[idx] !== 'undefined') {
      newHint.push(code[idx]);
    }
  });
  // depending on how the hint is represented in yaml, it can have extra \n
  // chars at the end, so we should trim.
  newHint = newHint.join('').trim();

  return newHint;
}

function wrapCode(hint) {
  if (typeof hint !== 'string') {
    return '';
  }
  let mdHint;
  function replacer(match, p1) {
    // transform then remove the trailing \n
    // Using pre is a dirty hack to make sure the whitespace is preserved
    return codeToBackticksSync(`<pre>${p1}</pre>`).contents.slice(0, -1);
  }
  const codeRE = /<code>(.*?)<\/code>/g;
  // to avoid parsing the rest of the markdown we use codeToBackticksSync on the
  // code inside the re. If it fails, the code could be complicated enough to
  // fool the regex, so we log it for human validation.
  try {
    mdHint = hint.replace(codeRE, replacer);
  } catch (err) {
    // console.log('err', err);
    //     console.log(`${title} failed
    // hint:
    // ${hint}`);
    mdHint = hint.replace(codeRE, '`$1`');
    // console.log('produced:');
    // console.log(mdHint);
    // console.log();
  }
  return mdHint;
}

function createSolutions({ solutions }) {
  if (!solutions) return '';
  const solutionsStr = solutions.map(soln => solutionToText(soln)).join(`
---

`);
  return `# --solutions--

${solutionsStr}`;
}

function createQuestion({ question, title }) {
  if (!question) return '';
  const { text, answers, solution } = question;
  return `# --question--

## --text--

${hintToMd(text, title)}

## --answers--

${answers.map(answer => hintToMd(answer, title)).join(`

---

`)}

## --video-solution--

${solution}

`;
}

// files: {
//   indexhtml: {
//     key: 'indexhtml',
//     ext: 'html',
//     name: 'index',
//     contents: '<h1>Hello</h1>\n',
//     head: '',
//     tail: '',
//     editableRegionBoundaries: []
//   }
// }

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
    createSection('before-user-code', head, 2) +
    createSection('after-user-code', tail, 2) +
    createSection('seed-contents', contents, 2)
  );
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

// Even if there is no code, we should fence it in case the extension is used
function fenceCode(ext, code) {
  return `${'```' + ext}
${code + '```'}
`;
}

function createInstructions({ instructions }) {
  return createSection('instructions', instructions);
}

function createDescription({ description }) {
  return createSection('description', description);
}

function createSection(heading, contents, depth = 1) {
  return contents && contents.trim()
    ? `${''.padEnd(depth, '#')} --${heading}--

${contents}
`
    : '';
}

function challengeToString(data) {
  return (
    createFrontmatter(data) +
    createDescription(data) +
    createInstructions(data) +
    createQuestion(data) +
    createHints(data) +
    createSeed(data) +
    createSolutions(data)
  );
}

exports.challengeToString = challengeToString;
exports.validateHints = validateHints;

// console.log(exports.challengeToString(challengeData));
// // exports.challengeToString(challengeData);

// console.log(
//   hintToMd('ZigZagMatrix(2) should return [[0, 1], [2, 3]].', 'title')
// );

// console.log(hintToMd('lar@freecodecamp.org', 'title'));
