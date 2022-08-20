import ObjectID from 'bson-objectid';
import { insertErms } from './insert-erms';

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
  challengeId: ObjectID;
  challengeSeeds: Record<string, ChallengeSeed>;
  stepNum: number;
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
  stepNum
}: StepOptions): string {
  const seedTexts = Object.values(challengeSeeds)
    .map(({ contents, ext, editableRegionBoundaries }: ChallengeSeed) => {
      let fullContents = contents;
      if (editableRegionBoundaries.length >= 2) {
        fullContents = insertErms(contents, editableRegionBoundaries);
      }
      return getCodeBlock(ext, fullContents);
    })
    .join('\n');

  const seedHeads = Object.values(challengeSeeds)
    .filter(({ head }: ChallengeSeed) => head)
    .map(({ ext, head }: ChallengeSeed) => getCodeBlock(ext, head))
    .join('\n');

  const seedTails = Object.values(challengeSeeds)
    .filter(({ tail }: ChallengeSeed) => tail)
    .map(({ ext, tail }: ChallengeSeed) => getCodeBlock(ext, tail))
    .join('\n');

  const stepDescription = `step ${stepNum} instructions`;
  const seedChallengeSection = getSeedSection(seedTexts, 'seed-contents');
  const seedHeadSection = getSeedSection(seedHeads, 'before-user-code');
  const seedTailSection = getSeedSection(seedTails, 'after-user-code');

  return (
    `---
id: ${challengeId.toString()}
title: Step ${stepNum}
challengeType: 0
dashedName: step-${stepNum}
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
