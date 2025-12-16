import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import unified from 'unified';
import remark from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import addFrontmatter from './add-frontmatter';
import validateWorkshop from './validate-workshop';
import parseFixture from '../__fixtures__/parse-fixture';

const processor = unified()
  .use(remark)
  .use(frontmatter, ['yaml'])
  .use(addFrontmatter)
  .use(validateWorkshop);

// Files for testing. Defined at the start to keep the tests formatting cleaner.

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
  let simpleAST,
    withErmsOnOneLineAST,
    withEditableMarkersAST,
    withOneEditableMarkerAST;

  const plugin = validateWorkshop();

  let file = { data: {} };

  beforeAll(async () => {
    simpleAST = await parseFixture('simple.md');
    withErmsOnOneLineAST = await parseFixture(
      'with-editable-markers-on-one-line.md'
    );
    withEditableMarkersAST = await parseFixture('with-editable-markers.md');
    withOneEditableMarkerAST = await parseFixture(
      'with-one-editable-marker.md'
    );
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('passes for a files without any editable section', () => {
    expect(() => {
      plugin(simpleAST, file);
    }).not.toThrow();
  });

  it('passes for a workshop with exactly two editable regions and "--solutions--" only in final step', () => {
    expect(() => {
      plugin(withErmsOnOneLineAST);
      plugin(withEditableMarkersAST);
    }).not.toThrow();
  });

  it('throws when the number of --fcc-editable-region-- markers is not exactly two', () => {
    expect(() => {
      plugin(withOneEditableMarkerAST);
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 1.'
    );

    expect(() => {
      processor.runSync(processor.parse(fileWithThree));
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 3.'
    );
  });

  it('throws when a --solutions-- header appears before the last step', () => {
    expect(() => {
      processor.runSync(processor.parse(solutionInTheMiddleFile));
    }).toThrow(
      /Validation error: "--solutions--" header appears before the last step/
    );
  });
});
