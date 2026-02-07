import { describe, it, expect } from 'vitest';
import { ObjectId } from 'bson';
import { getStepTemplate } from './get-step-template.js';

const props = {
  challengeId: new ObjectId('60d4ebe4801158d1abe1b18f'),
  challengeSeeds: [
    {
      contents: '',
      editableRegionBoundaries: [0, 2],
      ext: 'html',
      head: '',
      id: '',
      key: 'indexhtml',
      name: 'index',
      tail: ''
    }
  ],
  stepNum: 5,
  challengeType: 0
};

// Note: evaluates at highlevel the process, but seedHeads and seedTails could
// be tested if more specifics are needed.
describe('getStepTemplate util', () => {
  it('should be able to create a markdown', () => {
    const baseOutput = `---
id: 60d4ebe4801158d1abe1b18f
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

step 5 instructions

# --hints--

Test 1

\`\`\`js

\`\`\`

# --seed--

## --seed-contents--

\`\`\`html
--fcc-editable-region--

--fcc-editable-region--
\`\`\`\n`;

    expect(getStepTemplate(props)).toEqual(baseOutput);
  });

  it('should add lang property when challengeLang is passed', () => {
    const frontMatter = `---
id: 60d4ebe4801158d1abe1b18f
title: Step 5
challengeType: 0
dashedName: step-5
lang: es
---`;

    expect(getStepTemplate({ ...props, challengeLang: 'es' })).match(
      new RegExp(`^${frontMatter}`)
    );
  });
});
