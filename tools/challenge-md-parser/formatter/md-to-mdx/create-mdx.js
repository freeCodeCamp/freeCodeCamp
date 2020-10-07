const { isEmpty, pick } = require('lodash');
const yaml = require('js-yaml');

const {
  getCodeToBackticksSync,
  prettifySync
} = require('../../formatter/fcc-md-to-gfm/transformChallenges');
const { correctUrl } = require('../../formatter/fcc-md-to-gfm/insert-spaces');

const codeToBackticksSync = getCodeToBackticksSync(true);
const unified = require('unified');

const remarkStringify = require('remark-stringify');
const remarkParse = require('remark-parse');
const find = require('unist-util-find');

var parser = unified().use(remarkParse);
var mdCompiler = unified().use(remarkStringify);

function parseMd(text) {
  return parser.parse(text);
}

function stringifyMd(mdast) {
  return mdCompiler.stringify(mdast);
}

function escapeMDText(text) {
  const tree = {
    type: 'paragraph',
    children: [{ type: 'text', value: text }]
  };
  // Is there a trailing /n ? apparently not
  return stringifyMd(tree);
}

// inspired by wrapRecursive, but takes in text and outputs text.
function wrapUrls(rawText, title) {
  const mdNode = parseMd(rawText);

  const link = find(mdNode, { type: 'link' });

  if (link) {
    console.log(`${title} had link.
link: ${link.url}`);
    console.log(`hint:
${rawText}`);

    const url = correctUrl(link.url);
    const pos = rawText.indexOf(url);
    const head = rawText.slice(0, pos);
    const tail = rawText.slice(pos + url.length);
    const newText = head + '`' + url + '`' + wrapUrls(tail);
    console.log('produced:');
    console.log(newText);
    console.log();
    return newText;
  } else {
    return rawText;
  }
}

const challengeData = {
  id: 'bd7123c8c441eddfaeb5bdef',
  title: 'Say: Hello to HTML Elements',
  challengeType: 0,
  videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2',
  forumTopicId: 18276,
  required: [
    {
      link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
      raw: true
    }
  ],
  tests: [
    {
      text: '<code>h1</code> element should have the text "Hello World".',
      testString: "assert.isTrue((/hello(\\s)+world/gi).test($('h1').text()));"
    },
    {
      text: 'Your <code>h1</code> element should have the text "Hello World".',
      testString: "assert.isTrue((/hello(\\s)+world/gi).test($('h1').text()));"
    },
    {
      // text: 'This <code>var x = y*y;</code> should be fine',
      text: 'This <code>var x = y*y*y;</code> should *be* flagged up',
      testString: "assert.isTrue((/hello(\\s)+test2/gi).test($('h1').text()));"
    },
    {
      text: 'Text with embedded https://www.example.com url',
      testString: "assert.isTrue((/hello(\\s)+world/gi).test($('h1').text()));"
    },
    {
      text: 'ZigZagMatrix(2) should return [[0, 1], [2, 3]].',
      testString: ''
    }
  ],
  solutions: [
    {
      indexhtml: {
        key: 'indexhtml',
        ext: 'html',
        name: 'index',
        contents: '<h1>Hello World</h1>\n',
        head: '',
        tail: ''
      },
      indexjs: {
        key: 'indexjs',
        ext: 'js',
        name: 'index',
        contents: 'var x = "y";\n',
        head: '',
        tail: ''
      }
    },
    {
      indexhtml: {
        key: 'indexhtml',
        ext: 'html',
        name: 'index',
        contents: `<h1>
Hello World
</h1>
`,
        head: '',
        tail: ''
      }
    }
  ],
  videoId: 'nVAaxZ34khk',
  question: {
    text:
      'What will the following Python program print out?:\n' +
      '```python\n' +
      `def fred():
  print("Zap")
def jane():
print("ABC")

jane()
fred()
jane()
` +
      '```\n',
    answers: [
      'The size in gigabytes the dataframe we loaded into memory is.\n',
      'How many rows and columns our dataframe has.\n',
      'How many rows the source data had before loading.\n',
      'How many columns the source data had before loading.\n'
    ],
    solution: 2
  },
  description:
    "Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.\n" +
    '\n' +
    "First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is embedded into this web page.\n" +
    '\n' +
    "Do you see the code in your code editor that says `<h1>Hello</h1>`? That's an HTML element.\n" +
    '\n' +
    'Most HTML elements have an opening tag and a closing tag.\n' +
    '\n' +
    'Opening tags look like this:\n' +
    '\n' +
    '`<h1>`\n' +
    '\n' +
    'Closing tags look like this:\n' +
    '\n' +
    '`</h1>`\n' +
    '\n' +
    'The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.\n' +
    '\n' +
    `Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests, you'll be prompted to submit your solution and go to the next coding challenge.\n`,
  instructions:
    'To pass the test on this challenge, change your `h1` element\'s text to say "Hello World".\n',
  files: {
    indexhtml: {
      key: 'indexhtml',
      ext: 'html',
      name: 'index',
      contents: `<h1>
      Hello
</h1>`,
      head: '',
      tail: '</closing>',
      editableRegionBoundaries: [1, 2]
    },
    indexjsx: {
      key: 'indexjsx',
      ext: 'jsx',
      name: 'index',
      contents: `<Hello world={'world'}>
      Hello
</Hello>`,
      head: 'var x = "y"',
      tail: 'var tail',
      editableRegionBoundaries: []
    },
    indexcss: {
      key: 'indexcss',
      ext: 'css',
      name: 'index',
      contents: `body {
  color: red;
}`,
      head: '',
      tail: '',
      editableRegionBoundaries: []
    }
  }
};

/* TODO Test with
 * curriculum/challenges/english/01-responsive-web-design/basic-css-cafe-menu/part-004.md
 * to make sure the ERMS go in the right places.
 */

const frontmatterProperties = [
  'id',
  'title',
  'challengeType',
  'videoId',
  'videoUrl',
  'forumTopicId',
  'isPrivate',
  'required'
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
      throw `Unknown property ${key}`;
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
${typeof testString === 'string' ? testString.trim() : ''}
${'```'}
`
    )
    .join('\n');
  return `# --hints--

${strTests}
`;
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
  return newHint.join('').trim();
}

function wrapCode(hint, title) {
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
    console.log(`${title} failed
hint:
${hint}`);
    mdHint = hint.replace(codeRE, '`$1`');
    console.log('produced:');
    console.log(mdHint);
    console.log();
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

// console.log(exports.challengeToString(challengeData));
// // exports.challengeToString(challengeData);

// console.log(
//   hintToMd('ZigZagMatrix(2) should return [[0, 1], [2, 3]].', 'title')
// );

// console.log(
//   hintToMd(
//     'ZigZagMatrix(2) <code>should  aaaa</code> return [[0, 1], [2, 3]].',
//     'title'
//   )
// );
