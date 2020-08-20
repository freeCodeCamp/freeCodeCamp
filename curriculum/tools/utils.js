const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const padWithLeadingZeros = originalNum => {
  /* always want file step numbers 3 digits */
  const maxDigits = 3;
  let paddedNum = '' + originalNum;
  while (paddedNum.length < maxDigits) {
    paddedNum = '0' + paddedNum;
  }
  return paddedNum;
};

const removeErms = seedCode => {
  const lines = seedCode.split('\n');
  return lines
    .filter(line => !line.includes('--fcc-editable-region--'))
    .join('\n');
};

/*
function below modifed from GitHub user @solenoid's gist https://gist.github.com/solenoid/1372386
*/
const mongoObjectId = () => {
  /* eslint-disable no-bitwise */
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, function() {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

const createStepFile = ({ projectPath, stepNum, challengeSeed = '' }) => {
  if (challengeSeed) {
    challengeSeed = removeErms(challengeSeed);
  }

  const challengeSeedSection = `<section id='challengeSeed'>

${challengeSeed.trim()}

</section>`;

  const template = `---
id: ${mongoObjectId()}
title: Part ${stepNum}
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

step ${stepNum} instructions

</section>

## Tests
<section id='tests'>

\`\`\`yml
tests:
  - text: Test 1
    testString: ''

\`\`\`

</section>

## Challenge Seed
${challengeSeedSection}
`;

  fs.writeFileSync(
    `${projectPath}part-${padWithLeadingZeros(stepNum)}.md`,
    template
  );
};

const reorderSteps = () => {
  const projectPath = (process.env.CALLING_DIR || process.cwd()) + path.sep;
  let projectName =
    process.env.CALLING_DIR &&
    process.env.CALLING_DIR.split(path.sep)
      .slice(-1)
      .toString();
  if (!projectName) {
    projectName = process
      .cwd()
      .split(path.sep)
      .slice(-1)
      .toString();
  }
  const projectMetaPath = path.resolve(
    'challenges',
    '_meta',
    projectName,
    'meta.json'
  );

  // console.log('projectMetaPath');
  // console.log(projectMetaPath);
  // process.exit();
  let metaData;
  try {
    metaData = fs.readFileSync(projectMetaPath);
  } catch (err) {
    throw `No _meta.json file exists at ${projectMetaPath}`;
  }

  let foundFinal = false;
  const filesArr = [];
  fs.readdirSync(projectPath).forEach(fileName => {
    if (path.extname(fileName).toLowerCase() === '.md') {
      if (!fileName.endsWith('final.md')) {
        filesArr.push(fileName);
      } else {
        foundFinal = true;
      }
    }
  });
  if (foundFinal) {
    filesArr.push('final.md');
  }

  const filesToReorder = filesArr.map((fileName, i) => {
    const newStepNum = i + 1;
    const newFileName =
      fileName !== 'final.md'
        ? `part-${padWithLeadingZeros(newStepNum)}.md`
        : 'final.md';
    return {
      oldFileName: fileName,
      newFileName,
      newStepNum
    };
  });

  const challengeOrder = [];
  const parsedData = JSON.parse(metaData);

  filesToReorder.forEach(({ oldFileName, newFileName, newStepNum }) => {
    fs.renameSync(
      `${projectPath}${oldFileName}`,
      `${projectPath}${newFileName}.tmp`
    );
    const filePath = `${projectPath}${newFileName}.tmp`;
    const frontMatter = matter.read(filePath);
    const challengeID = frontMatter.data.id || mongoObjectId();
    const title =
      newFileName === 'final.md' ? 'Final Prototype' : `Part ${newStepNum}`;
    challengeOrder.push(['' + challengeID, title]);
    const newData = {
      ...frontMatter.data,
      id: challengeID,
      title
    };
    fs.writeFileSync(filePath, frontMatter.stringify(newData));
  });

  filesToReorder.forEach(({ newFileName }) => {
    fs.renameSync(
      `${projectPath}${newFileName}.tmp`,
      `${projectPath}${newFileName}`
    );
  });

  const newMeta = { ...parsedData, challengeOrder };
  fs.writeFileSync(projectMetaPath, JSON.stringify(newMeta, null, 2));
};

module.exports = {
  padWithLeadingZeros,
  mongoObjectId,
  createStepFile,
  reorderSteps
};
