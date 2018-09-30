const fs = require('fs-extra');
const path = require('path');
const { omit, findLastIndex } = require('lodash');
const YAML = require('js-yaml');

const { dasherize } = require('./utils');
const getChallenges = require('./getChallenges');

const blackListedFieldNames = [
  'betaSolutions',
  'betaTests',
  'hints',
  'MDNlinks',
  'null',
  'rawSolutions',
  'react',
  'reactRedux',
  'redux',
  'releasedOn',
  'translations',
  'type'
];

getChallenges().forEach(block => {
  const { name, order, challenges, time = '', superBlock, superOrder } = block;
  const blockDashedName = dasherize(name);
  const blockMeta = {
    name,
    dashedName: blockDashedName,
    order,
    time,
    superBlock,
    superOrder
  };
  const superOrderPrefix = `0${superOrder}`;
  const outputDir = path.resolve(
    __dirname,
    `./challenges/${superOrderPrefix}-${superBlock}/${blockDashedName}`
  );
  fs.emptyDirSync(outputDir);

  challenges.forEach(challenge => {
    const {
      description: oldDescription = [],
      files = {},
      tests = [],
      solutions = [],
      ...restChallenge
    } = challenge;
    const challengeMeta = omit(restChallenge, blackListedFieldNames);
    const challengeFileName = `${challenge.title}.md`;
    let description = '';
    let instructions = '';

    const hrIndex = findLastIndex(oldDescription, el =>
      (/^<hr\s?\/?>$/).test(el)
    );

    if (hrIndex && hrIndex !== -1) {
      description = oldDescription.slice(0, hrIndex).join('\n');
      instructions = oldDescription.slice(hrIndex + 1).join('\n');
    } else {
      description = oldDescription.join('\n');
    }

    const md = `---
${YAML.dump(challengeMeta, { lineWidth: 10000 })}---

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
${YAML.dump(tests, { lineWidth: 10000 })}
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
    fs.writeFile(`${outputDir}/${challengeFileName}`, md);
    fs.writeFile(`${outputDir}/meta.json`, JSON.stringify(blockMeta, null, 2));
  });
});

function generateChallengeSeed(files) {
  return Object.keys(files)
    .map(key => files[key])
    .map(file => {
      const { ext, contents = [], head = [], tail = [] } = file;
      return `
<div id='${ext}-seed'>

\`\`\`${ext}
${contents.join('\n')}
\`\`\`

</div>
${
        head.length
          ? `
### Before Test
<div id='${ext}-setup'>

\`\`\`${ext}
${head.join('\n')}
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
    })
    .join('\n');
}
