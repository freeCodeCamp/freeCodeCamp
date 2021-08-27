const { insertErms } = require('./insert-erms');

// Builds a block
function getCodeBlock(label, content) {
  return `\`\`\`${label}
${typeof content !== 'undefined' ? content : ''}
\`\`\``;
}

// Builds a section
function getSeedSection(content, label) {
  return content
    ? `

## --${label}--

${content}`
    : '';
}

// Build the base markdown for a step
function getStepTemplate({
  challengeId,
  challengeSeeds,
  stepBetween,
  stepNum
}) {
  const seedTexts = Object.values(challengeSeeds)
    .map(({ contents, ext, editableRegionBoundaries }) => {
      let fullContents = contents;
      if (editableRegionBoundaries.length >= 2) {
        fullContents = insertErms(contents, editableRegionBoundaries);
      }
      return getCodeBlock(ext, fullContents);
    })
    .join('\n');

  const seedHeads = Object.values(challengeSeeds)
    .filter(({ head }) => head)
    .map(({ ext, head }) => getCodeBlock(ext, head))
    .join('\n');

  const seedTails = Object.values(challengeSeeds)
    .filter(({ tail }) => tail)
    .map(({ ext, tail }) => getCodeBlock(ext, tail))
    .join('\n');

  const descStepNum = stepBetween ? stepNum + 1 : stepNum;

  const stepDescription = `${
    stepBetween ? 'new ' : ''
  }step ${descStepNum} instructions`;

  const seedChallengeSection = getSeedSection(seedTexts, 'seed-contents');
  const seedHeadSection = getSeedSection(seedHeads, 'before-user-code');
  const seedTailSection = getSeedSection(seedTails, 'after-user-code');

  return (
    `---
id: ${challengeId}
title: Part ${stepNum}
challengeType: 0
dashedName: part-${stepNum}
---

# --description--

${stepDescription}

# --hints--

Test 1

${getCodeBlock('js')}

# --seed--` +
    seedChallengeSection +
    seedHeadSection +
    seedTailSection
  );
}

exports.getStepTemplate = getStepTemplate;
