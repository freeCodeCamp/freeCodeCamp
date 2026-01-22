import { ObjectId } from 'bson';
import { insertErms } from './insert-erms.js';

// Builds a block
function getCodeBlock(label: string, content?: string) {
  return `\`\`\`${label}
${typeof content !== 'undefined' ? content : ''}
\`\`\`\n`;
}

// Builds a section
function getSeedSection(content: string, label: string) {
  return content
    ? `

## --${label}--

${content}`
    : '';
}

type StepOptions = {
  challengeId: ObjectId;
  challengeSeeds: ChallengeSeed[];
  stepNum: number;
  challengeType?: number;
  isFirstChallenge?: boolean;
  challengeLang?: string;
};

export interface ChallengeSeed {
  contents: string;
  ext: string;
  editableRegionBoundaries: number[];
  head?: string;
  tail?: string;
}

// Build the base markdown for a step
function getStepTemplate({
  challengeId,
  challengeSeeds,
  stepNum,
  challengeType,
  isFirstChallenge = false,
  challengeLang
}: StepOptions): string {
  const seedTexts = challengeSeeds
    .map(({ contents, ext, editableRegionBoundaries }) => {
      let fullContents = contents;
      if (editableRegionBoundaries.length >= 2) {
        fullContents = insertErms(contents, editableRegionBoundaries);
      }
      return getCodeBlock(ext, fullContents);
    })
    .join('\n');

  const seedHeads = challengeSeeds
    .filter(({ head }) => head)
    .map(({ ext, head }) => getCodeBlock(ext, head))
    .join('\n');

  const seedTails = challengeSeeds
    .filter(({ tail }) => tail)
    .map(({ ext, tail }) => getCodeBlock(ext, tail))
    .join('\n');

  const stepDescription = `step ${stepNum} instructions`;
  const seedChallengeSection = getSeedSection(seedTexts, 'seed-contents');
  const seedHeadSection = getSeedSection(seedHeads, 'before-user-code');
  const seedTailSection = getSeedSection(seedTails, 'after-user-code');

  const demoString = isFirstChallenge
    ? `
# demoType can either be 'onClick' or 'onLoad'. If the project or lab doesn't have a preview, delete the property
demoType: onClick`
    : '';

  const langString = challengeLang
    ? `
lang: ${challengeLang}`
    : '';

  return (
    `---
id: ${challengeId.toString()}
title: Step ${stepNum}
challengeType: ${challengeType ?? 'placeholder'}
dashedName: step-${stepNum}${langString}${demoString}
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

export { getStepTemplate };
