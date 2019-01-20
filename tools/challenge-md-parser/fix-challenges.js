const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const raw = require('rehype-raw');
const visit = require('unist-util-visit');
const vfile = require('to-vfile');
const path = require('path');
const { Transform } = require('stream');
const { Translate } = require('@google-cloud/translate');
const YAML = require('js-yaml');

const solutionsToData = require('./solution-to-data');
const challengeSeedToData = require('./challengeSeed-to-data');

const transformChallenge = new Transform({
  transform(chunk, encoding, callback) {
    const fileName = chunk.toString().trim();

    rebuildChallengeFile(fileName)
      .then(file => callback(null, String(file.contents)))
      .catch(err => console.error(err));
  }
});

process.stdin.pipe(transformChallenge).pipe(process.stdout);

const processor = unified()
  .use(markdown)
  .use(frontmatter, ['yaml'])
  .use(frontmatterToData)
  .use(testsToData)
  .use(textToData, ['description', 'instructions'])
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(solutionsToData)
  .use(challengeSeedToData)
  .use(replaceWithReferenceData)
  .use(output);

exports.rebuildChallengeFile = rebuildChallengeFile;

async function rebuildChallengeFile(fileName) {
  const filePath = path.resolve(fileName);
  const lang = detectLang(filePath);
  let referenceChallenge;
  let translateText;
  if (lang !== 'english') {
    referenceChallenge = await getReferenceChallengeData(filePath);
    translateText = createTranslateText(lang);
  }

  const file = await vfile.read(filePath);
  file.data = {
    ...file.data,
    lang,
    referenceChallenge,
    translateText
  };
  return await processor.process(file);
}

async function getReferenceChallengeData(filePath) {
  const parts = filePath.split(path.sep);
  parts.push(parts.pop().replace(/\.[^.]+\.md$/, '.english.md'));
  parts[parts.length - 4] = 'english';
  const filePathEnglishChallenge = parts.join(path.sep);
  try {
    const fileData = await vfile.read(filePathEnglishChallenge);
    fileData.data = { ...fileData.data, refData: true };
    return (await processor.process(fileData)).data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function detectLang(filePath) {
  const match = /\.([^.]+)\.md$/.exec(filePath);
  if (!match) {
    throw new Error(`Incorrect file path ${filePath}`);
  }
  return match[1];
}

function frontmatterToData() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'yaml', visitor);

    function visitor(node) {
      const frontmatter = node.value;

      file.data = { ...file.data, frontmatter };
    }
  }
}

function testsToData() {
  return (tree, file) => {
    visit(tree, 'code', visitor);

    function visitor(node) {
      const { lang, value } = node;
      if (lang === 'yml') {
        file.data = {
          ...file.data,
          tests: value
        };
      }
    }
  };
}

function textToData(sectionIds) {
  return (tree, file) => {
    let indexId = 0;
    let currentSection = sectionIds[indexId];
    let inSection = false;
    let nodes = [];
    let findSection;
    const visitor = (node, index, parent) => {
      if (!parent) {
        return visit.CONTINUE;
      }

      if (node.type === 'heading') {
        if (inSection) {
          findSection = new RegExp(`^<section id=('|")${currentSection}\\1>`);
          file.data = {
            ...file.data,
            [currentSection]: new stringify.Compiler(
              { type: 'root', children: nodes },
              file
            )
              .compile()
              .trim()
              .replace(findSection, '')
              .replace(/<\/section>$/, '')
              .trim()
          };
          nodes = [];
          indexId++;
          if (indexId < sectionIds.length) {
            currentSection = sectionIds[indexId];
          } else {
            return visit.EXIT;
          }
        }
        inSection = true;
      } else if (inSection) {
        nodes.push(node);
      }

      return visit.SKIP;
    };
    visit(tree, visitor);
  };
}

function createTranslateText(target, source = 'english') {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
  if (!projectId) {
    return async text => text;
  }
  const languageCodes = {
    arabic: 'ar',
    chinese: 'zh',
    english: 'en',
    portuguese: 'pt',
    russian: 'ru',
    spanish: 'es'
  };
  const from = languageCodes[source];
  const to = languageCodes[target];
  return async text => {
    if (!text) {
      return text;
    }
    try {
      const translate = new Translate({ projectId });
      const result = await translate.translate(text, { from, to });
      const translations = result[0];
      return translations;
    } catch (err) {
      // console.error(err);
      return text;
    }
  };
}

async function processTests(tests, referenceTests, translateText) {
  const testsObject = YAML.load(referenceTests);
  if (
    !testsObject.tests ||
    testsObject.tests.length === 0 ||
    !testsObject.tests[0].text
  ) {
    return referenceTests;
  }
  const newTests = await Promise.all(
    testsObject.tests.map(async test => {
      const text = await translateText(test.text);
      return { ...test, text };
    })
  );
  const testStrings = newTests
    .map(
      ({ text, testString }) =>
        `  - text: ${dumpToYamlString(text)}    testString: ${dumpToYamlString(
          testString
        )}`
    )
    .join('');
  return `tests:${testStrings ? '\n' + testStrings : ' []\n'}`;
}

function dumpToYamlString(text) {
  let fromYaml;
  try {
    fromYaml = YAML.load(text);
  } catch {
    // console.error(`YAML load: ${text}`);
  }
  if (text === fromYaml) {
    return text + '\n';
  }
  return YAML.dump(text, { lineWidth: 10000 });
}

async function processFrontmatter(fileData) {
  const { referenceChallenge, lang, translateText } = fileData;
  const challengeData = YAML.load(fileData.frontmatter);
  let data;
  if (referenceChallenge) {
    data = YAML.load(referenceChallenge.frontmatter);
  } else {
    data = challengeData;
  }

  if (lang && lang !== 'english') {
    if (challengeData.localeTitle) {
      data.localeTitle = challengeData.localeTitle;
    } else {
      data.localeTitle = await translateText(data.title);
    }
  }

  fileData.frontmatter = Object.entries(data)
    .map(([name, value]) => {
      if (typeof value === 'object') {
        return `${name}:
  ${dumpToYamlString(value)
    .replace(/\n/, '\n  ')
    .trimRight()}
`;
      }
      return `${name}: ${dumpToYamlString(value)}`;
    })
    .join('')
    .trimRight();
}

function replaceWithReferenceData() {
  return async (tree, file) => {
    if (file.data.refData) {
      return;
    }

    const { referenceChallenge, translateText } = file.data;

    await processFrontmatter(file.data);

    if (referenceChallenge) {
      const { description, instructions } = file.data;

      if (!description || description === 'undefined') {
        file.data.description = await translateText(
          referenceChallenge.description
        );
      }
      if (!instructions || instructions === 'undefined') {
        file.data.instructions = await translateText(
          referenceChallenge.instructions
        );
      }
      file.data.tests = await processTests(
        file.data.tests,
        referenceChallenge.tests,
        translateText
      );
      file.data.files = referenceChallenge.files;
      file.data.solutions = referenceChallenge.solutions;
    }
  };
}

function output() {
  this.Compiler = function(tree, file) {
    let {
      frontmatter,
      description,
      instructions,
      tests,
      files: [challengeFile = {}]
    } = file.data;
    const { ext, contents, head, tail } = challengeFile;
    let { solutions = [] } = file.data;
    solutions = solutions
      .map(s => s.trim())
      .map(s =>
        !s.includes('\n') && /^\/\//.test(s) ? '// solution required' : s
      );
    return `---
${frontmatter}
---

## Description
<section id='description'>
${description}
</section>

## Instructions
<section id='instructions'>
${instructions}
</section>

## Tests
<section id='tests'>

\`\`\`yml
${tests}
\`\`\`

</section>

${
  ext
    ? `## Challenge Seed
<section id='challengeSeed'>

<div id='${ext}-seed'>

\`\`\`${ext}
${contents}
\`\`\`

</div>${
        head
          ? `

### Before Tests
<div id='${ext}-setup'>

\`\`\`${ext}
${head}
\`\`\`

</div>`
          : ''
      }${
        tail
          ? `

### After Tests
<div id='${ext}-teardown'>

\`\`\`${ext}
${tail}
\`\`\`

</div>`
          : ''
      }

</section>

## Solution
${solutions.reduce(
  (result, solution) =>
    result +
    `<section id='solution'>

\`\`\`${ext}
${solution.trim()}
\`\`\`

</section>`,
  ''
)}
`
    : ''
}`;
  };
}
