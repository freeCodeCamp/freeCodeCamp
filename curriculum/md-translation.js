const fs = require('fs-extra');
const path = require('path');
const YAML = require('js-yaml');
const readDirP = require('readdirp-walk');
const { parseMarkdown } = require('@freecodecamp/challenge-md-parser');
const { Translate } = require('@google-cloud/translate');

const lang = 'pt';
const langFull = 'portuguese';

const outputDir = path.resolve(__dirname, `./challenges/${langFull}`);
fs.ensureDirSync(outputDir);

readDirP({
  root: path.resolve(__dirname, './challenges/english')
}).on('data', translateChallenge);

async function translateChallenge(file) {
  const { name, path: filePath, fullPath, stat } = file;
  if (stat.isDirectory() || name === '.DS_Store') {
    return null;
  }

  const blockName = getBlockNameFromPath(filePath);
  const { fileName: superBlock } = superBlockInfoFromPath(filePath);
  const outputFile = `${outputDir}/${superBlock}/${blockName}/${name.replace(
    'english',
    langFull
  )}`;
  if (fs.existsSync(outputFile)) {
    return null;
  }

  const challenge = await parseMarkdown(fullPath);
  const { title, description, instructions, tests } = challenge;
  challenge['videoUrl'] = '';
  if (challenge['guideUrl']) {
    challenge['guideUrl'] = challenge['guideUrl'].replace('www', langFull);
  }
  const translatePromises = [
    translateText(title),
    translateText(description),
    translateText(instructions),
    ...tests.map(
      test =>
        new Promise(async(resolve, reject) => {
          const { testString, text } = test;
          const translatedText = await translateText(text).catch(reject);
          return resolve({
            text: translatedText ? translatedText.join(' ').trim() : '',
            testString
          });
        })
    )
  ];
  return Promise.all(translatePromises).then(
    ([title, description, instructions, ...tests]) => {
      const {
        files = {},
        solutions = [],
        ...challengeMeta
      } = challenge;
      const md = `---
${YAML.dump(
        Object.assign(challengeMeta, {
          localeTitle: title ? title.join(' ').trim() : ''
        }),
        { lineWidth: 10000 }
      )}---

## Description
${description}

## Instructions
${instructions}

## Tests
<section id='tests'>

\`\`\`yml
${YAML.dump({ tests }, { lineWidth: 10000 })}
\`\`\`

</section>

## Challenge Seed
<section id='challengeSeed'>
${generateChallengeSeed(files)}
</section>

## Solution
<section id='solution'>

${
        solutions.length === 0
          ? `\`\`\`js
// solution required
\`\`\``
          : solutions
              .map(
                solution => `
\`\`\`js
${solution}
\`\`\`
`
              )
              .join('\n')
      }
</section>
`;

      console.log(outputFile);
      fs.ensureFileSync(outputFile);
      fs.writeFile(outputFile, md);
    }
  );
}

function generateChallengeSeed(files) {
  return Object.keys(files)
    .map(key => files[key])
    .map(file => {
      const { ext, contents = [], head = [], tail = [] } = file;
      return `
<div id='${ext}-seed'>

\`\`\`${ext}
${contents}
\`\`\`

</div>
${
        head.length
          ? `
### Before Test
<div id='${ext}-setup'>

\`\`\`${ext}
${head}
\`\`\`

</div>`
          : ''
      }
${
        tail.length
          ? `
### After Test
<div id='${ext}-teardown'>

\`\`\`js
console.info('after the test');
\`\`\`

</div>`
          : ''
      }
`;
    });
}

const createTranslateText = target => text => {
  if (!text) {
    return '';
  }
  const translate = new Translate();

  return translate
    .translate(text, target)
    .then(results => {
      let translations = results[0];
      translations = Array.isArray(translations)
        ? translations
        : [translations];
      return translations;
    })
    .catch(err => {
      console.log(err);
    });
};

const translateText = createTranslateText(lang);

function superBlockInfoFromPath(filePath) {
  const [maybeSuper] = filePath.split('/');
  return superBlockInfo(maybeSuper);
}

function superBlockInfo(fileName) {
  const [maybeOrder, ...superBlock] = fileName.split('-');
  let order = parseInt(maybeOrder, 10);
  if (isNaN(order)) {
    return {
      order: 0,
      name: fileName
    };
  } else {
    return {
      order: order,
      name: superBlock.join('-'),
      fileName
    };
  }
}

function getBlockNameFromPath(filePath) {
  const [, block] = filePath.split('/');
  return block;
}
