const { getStepTemplate } = require('./get-step-template');

// Note: evaluates at highlevel the process, but seedHeads and seedTails could
// be tested if more specifics are needed.
describe('getStepTemplate util', () => {
  it('should be able to create a markdown', () => {
    const baseOutput = `---
id: 60d4ebe4801158d1abe1b18f
title: Part 5
challengeType: 0
dashedName: part-5
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
\`\`\``;

    const props = {
      challengeId: '60d4ebe4801158d1abe1b18f',
      challengeSeeds: {
        indexhtml: {
          contents: '',
          editableRegionBoundaries: [0, 2],
          ext: 'html',
          head: '',
          id: '',
          key: 'indexhtml',
          name: 'index',
          tail: ''
        }
      },
      stepBetween: false,
      stepNum: 5
    };

    expect(getStepTemplate(props)).toEqual(baseOutput);
  });
});
