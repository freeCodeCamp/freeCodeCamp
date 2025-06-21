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
This is a description.

# --instructions--
Follow these instructions.

# --seed--
Some seed content.

# --solutions--
Solution goes here.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
  });

  it('should throw error for a single invalid section marker', () => {
    const file = `---
id: test
title: Test
---

# --description--
This is a description.

# --instructionss--
This has a typo.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow('Invalid section markers: "--instructionss--".');
  });

  it('should throw error for multiple invalid section markers', () => {
    const file = `---
id: test
title: Test
---

# --descriptio--
This has a typo.

# --instructionss--
This also has a typo.

# --seeddd--
Another typo.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid section markers: "--descriptio--", "--instructionss--", "--seeddd--".'
    );
  });

  it('should pass with all valid section markers from different plugins', () => {
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

## --feedback--
Feedback.

# --quizzes--
Quiz section.

## --quiz--
Individual quiz.

### --question--
Quiz question.

### --text--
Question text.

### --distractors--
Distractors.

### --answer--
Correct answer.

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

  it('should ignore non-section headings', () => {
    const file = `---
id: test
title: Test
---

# Introduction
This is not a section marker.

## What you'll learn
Regular heading.

# --instructions--
Valid section marker.

### Random heading
Not a marker.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
  });

  it('should handle special fcc-editable-region marker', () => {
    const file = `---
id: test
title: Test
---

# --seed--
Seed section.

## --seed-contents--
Some code here
\`\`\`html
<!-- --fcc-editable-region-- -->
<div>Edit this</div>
<!-- --fcc-editable-region-- -->
\`\`\`
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
  });

  it('should throw for malformed markers that look like section markers', () => {
    const file = `---
id: test
title: Test
---

# --invalid-marker--
This marker is not in the valid list.

# --another-bad-one--
Neither is this.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid section markers: "--invalid-marker--", "--another-bad-one--".'
    );
  });

  it('should handle empty files without errors', () => {
    const file = `---
id: test
title: Test
---

Some content without any section markers.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
  });

  it('should handle files with only frontmatter', () => {
    const file = `---
id: test
title: Test
---`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).not.toThrow();
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
    }).toThrow(
      'Invalid section markers: "--INSTRUCTIONS--", "--Instructions--".'
    );
  });

  it('should handle markers with different heading levels', () => {
    const file = `---
id: test
title: Test
---

# --instructions--
Level 1 heading.

## --seed-contents--
Level 2 heading.

### --feedback--
Level 3 heading.

#### --wronglevel--
Invalid marker at level 4.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow('Invalid section markers: "--wronglevel--".');
  });
});
