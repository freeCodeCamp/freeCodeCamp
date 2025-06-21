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

# --description--
Text content.

# --instructions--
More text.

# --seed--
Seed section.

## --seed-contents--
Contents here.

## --before-user-code--
Before code.

## --after-user-code--
After code.

# --solutions--
Solutions.

# --hints--
Hints.

# --before-all--
Before all hook.

# --questions--
Video questions.

## --text--
Question text.

## --answers--
Answers.

## --video-solution--
Video solution.

### --feedback--
Feedback.

# --quizzes--
Quiz section.

## --quiz--
Individual quiz.

### --question--
Quiz question.

#### --text--
Question text.

#### --answer--
Correct answer.

#### --distractors--
Distractors.

# --scene--
Scene content.

# --assignment--
Assignment.

# --fillInTheBlank--
Fill in blank.

## --sentence--
Sentence.

## --blanks--
Blanks.

# --notes--
Notes.

# --explanation--
Explanation.

# --transcript--
Transcript.
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

# --feedback---
Another typo.

# --invalid-marker--
Completely invalid marker.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid marker names: "--descriptio--", "--instructionss--", "--feedback---", "--invalid-marker--".'
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

  it('should reject fcc-editable-region when used as headings', () => {
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
});
