import { describe, it, expect } from 'vitest';
import unified from 'unified';
import remark from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import addFrontmatter from './add-frontmatter';
import validateWorkshop from './validate-workshop';

const processor = unified()
  .use(remark)
  .use(frontmatter, ['yaml'])
  .use(addFrontmatter)
  .use(validateWorkshop);

// Files for testing. Defined at the start to keep the tests formatting cleaner.
const nonWorkshopFile = `---
id: workshop-test
title: Workshop Test
---
# --scene--
## Step 1
Some instructions for step 1.

# --description--
## Step 2
Some content for step 2.

---
`;

const validFile = `---
id: workshop-test
title: Workshop Test
---

# Step 1
--fcc-editable-region--
Some instructions for step 1.

---
# Step 2
Some content for step 2.
--fcc-editable-region--

---
# --solutions--
Here are the solutions.
`;

const fileWithOne = `---
id: workshop-one-marker
title: One marker
---

# Step 1
--fcc-editable-region--

---
# --solutions--
Solution text
`;

const fileWithThree = `---
id: workshop-three-markers
title: Three markers
---

# Step 1
--fcc-editable-region--

---
# Step 2
--fcc-editable-region--

---
# Final Step
--fcc-editable-region--

# --solutions--
Solution text
`;

const solutionInTheMiddleFile = `---
id: workshop-bad-solutions
title: Solutions in middle
---

# Step 1
--fcc-editable-region--

--fcc-editable-region--

---
# --solutions--
This solutions section is in the middle — invalid.

---
# --scene--
Some final content.
`;

describe('validate-workshop plugin', () => {
  it('passes for a files without any editable section', () => {
    expect(() => {
      processor.runSync(processor.parse(nonWorkshopFile));
    }).not.toThrow();
  });

  it('passes for a workshop with exactly two editable regions and Solutions only in final step', () => {
    expect(() => {
      processor.runSync(processor.parse(validFile));
    }).not.toThrow();
  });

  it('throws when the number of --fcc-editable-region-- markers is not exactly two', () => {
    expect(() => {
      processor.runSync(processor.parse(fileWithOne));
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of --fcc-editable-region-- but found 1.'
    );

    expect(() => {
      processor.runSync(processor.parse(fileWithThree));
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of --fcc-editable-region-- but found 3.'
    );
  });

  it('throws when a Solutions header appears before the last step', () => {
    expect(() => {
      processor.runSync(processor.parse(solutionInTheMiddleFile));
    }).toThrow(
      'Validation error: "Solutions" header appears before the last step. The Solutions header must only appear in the final step.'
    );
  });
});
