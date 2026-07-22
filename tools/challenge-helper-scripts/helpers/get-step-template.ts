import { ObjectId } from 'bson';
import type { ChallengeLang } from '@freecodecamp/shared/config/curriculum';
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
  challengeLang?: ChallengeLang;
};

export interface ChallengeSeed {
  contents: string;
  ext: string;
  editableRegionBoundaries: number[];
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

  const stepDescription = `step ${stepNum} instructions`;
  const seedChallengeSection = getSeedSection(seedTexts, 'seed-contents');

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
# --seed--` + seedChallengeSection
  );
}

export { getStepTemplate };
