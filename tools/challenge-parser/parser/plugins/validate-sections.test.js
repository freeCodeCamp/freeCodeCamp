const unified = require('unified');
const remark = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const addFrontmatter = require('./add-frontmatter');
const validateSections = require('./validate-sections');

const processor = unified()
  .use(remark)
  .use(frontmatter, ['yaml'])
  .use(addFrontmatter)
  .use(validateSections);

describe('validate-sections plugin', () => {
  it('should pass when all section markers are valid', () => {
    const file = `---
id: test
title: Test
---

# --after-all--
After all hook.

# --after-each--
After each hook.

# --assignment--
Assignment.

# --before-all--
Before all hook.

# --before-each--
Before each hook.

# --description--
Text content.

# --explanation--
Explanation.

# --fillInTheBlank--
Fill in blank.

# --hints--
Hints.

# --instructions--
More text.

# --notes--
Notes.

# --questions--
Video questions.

# --quizzes--
Quiz section.

# --scene--
Scene content.

# --seed--
Seed section.

# --solutions--
Solutions.

# --transcript--
Transcript.

## --answers--
Answers.

## --blanks--
Blanks.

## --quiz--
Individual quiz.

## --seed-contents--
Contents here.

## --sentence--
Sentence.

## --text--
Question text.

## --video-solution--
Video solution.

## --after-user-code--
After code.

## --before-user-code--
Before code.

### --feedback--
Feedback.

### --question--
Quiz question.

#### --answer--
Correct answer.

#### --distractors--
Distractors.

#### --text--
Question text.

--fcc-editable-region--
Editable region.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
  });

  it('should throw error for invalid marker names', () => {
    const file = `---
id: test
title: Test
---

# --descriptio--
Typo in marker name.

# --instructionss--
Another typo.

# -- instructions--
Another typo.

# --feedback---
Another typo.

# --invalid-marker--
Completely invalid marker.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid marker names: "--descriptio--", "--instructionss--", "-- instructions--", "--feedback---", "--invalid-marker--".'
    );
  });

  it('should validate case-sensitive markers', () => {
    const file = `---
id: test
title: Test
---

# --INSTRUCTIONS--
Wrong case.

# --Instructions--
Also wrong case.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow('Invalid marker names: "--INSTRUCTIONS--", "--Instructions--".');
  });

  it('should throw error for correct marker at wrong heading level', () => {
    const file = `---
id: test
title: Test
---

## --instructions--
Instructions should be at level 1, not 2.

### --seed-contents--
Seed contents should be at level 2, not 3.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid heading levels: "## --instructions--" should be "# --instructions--", "### --seed-contents--" should be "## --seed-contents--".'
    );
  });

  it('should throw combined errors for invalid markers and wrong levels', () => {
    const file = `---
id: test
title: Test
---

## --instructions--
Wrong level.

# --invalid-marker--
Invalid marker.

### --seed-contents--
Wrong level.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid marker names: "--invalid-marker--".\nInvalid heading levels: "## --instructions--" should be "# --instructions--", "### --seed-contents--" should be "## --seed-contents--".'
    );
  });

  it('should throw error for fcc-editable-region when used as headings', () => {
    const file = `---
id: test
title: Test
---

# --fcc-editable-region--
This should not be a heading.

## --fcc-editable-region--
This should also not be a heading.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Non-heading markers should not be used as headings: "# --fcc-editable-region--", "## --fcc-editable-region--".'
    );
  });

  it('should throw error for markers valid at multiple levels but used at an invalid level', () => {
    const file = `---
id: test
title: Test
---

### --text--
This marker is valid at level 2 or level 4, but not at level 3.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid heading levels: "### --text--" should be "## --text-- or #### --text--".'
    );
  });
});
