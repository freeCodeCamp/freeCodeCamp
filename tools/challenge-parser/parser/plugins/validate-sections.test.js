import { describe, it, expect, beforeAll } from 'vitest';
import unified from 'unified';
import remark from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import parseFixture from '../__fixtures__/parse-fixture';
import addFrontmatter from './add-frontmatter';
import validateSections, {
  VALID_MARKERS,
  NON_HEADING_MARKERS
} from './validate-sections';

const processor = unified()
  .use(remark)
  .use(frontmatter, ['yaml'])
  .use(addFrontmatter)
  .use(validateSections);

describe('validate-sections plugin', () => {
  let simpleAST,
    withErmsOnOneLineAST,
    withEditableMarkersAST,
    workshopOneMarkerAST,
    workshopThreeMarkersAST,
    workshopSolutionsInMiddleAST,
    workshopNoSolutionsAST,
    workshopMultipleSolutionsAST,
    workshopValidTwoMarkersAST;

  const plugin = validateSections();

  beforeAll(async () => {
    simpleAST = await parseFixture('simple.md');
    withErmsOnOneLineAST = await parseFixture(
      'with-editable-markers-on-one-line.md'
    );
    withEditableMarkersAST = await parseFixture('with-editable-markers.md');
    workshopOneMarkerAST = await parseFixture('workshop-one-marker.md');
    workshopThreeMarkersAST = await parseFixture('workshop-three-markers.md');
    workshopSolutionsInMiddleAST = await parseFixture(
      'workshop-solutions-in-middle.md'
    );
    workshopNoSolutionsAST = await parseFixture('workshop-no-solutions.md');
    workshopMultipleSolutionsAST = await parseFixture(
      'workshop-multiple-solutions.md'
    );
    workshopValidTwoMarkersAST = await parseFixture(
      'workshop-valid-two-markers.md'
    );
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('should pass when all section markers are valid', () => {
    const file = [
      '---',
      'id: test',
      'title: Test',
      '---',
      '',
      ...VALID_MARKERS.map(marker => `${marker}\nDummy content.`),
      ...NON_HEADING_MARKERS.map(marker => `${marker}\nDummy content.`)
    ].join('\n');

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

## --interactive--
Interactive should be at level 1, not 2.

### --seed-contents--
Seed contents should be at level 2, not 3.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid heading levels: "## --interactive--" should be "# --interactive--", "### --seed-contents--" should be "## --seed-contents--".'
    );
  });

  it('should throw combined errors for invalid markers and wrong levels', () => {
    const file = `---
id: test
title: Test
---

## --interactive--
Wrong level.

# --invalid-marker--
Invalid marker.

### --seed-contents--
Wrong level.
`;

    expect(() => {
      processor.runSync(processor.parse(file));
    }).toThrow(
      'Invalid marker names: "--invalid-marker--".\nInvalid heading levels: "## --interactive--" should be "# --interactive--", "### --seed-contents--" should be "## --seed-contents--".'
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

  it('passes for a files without any editable section', () => {
    expect(() => {
      plugin(simpleAST);
    }).not.toThrow();
  });

  it('passes for a workshop with exactly two editable regions and "--solutions--" only in final step', () => {
    expect(() => {
      plugin(withErmsOnOneLineAST);
      plugin(withEditableMarkersAST);
      plugin(workshopValidTwoMarkersAST);
    }).not.toThrow();
  });

  it('throws when the number of --fcc-editable-region-- markers is not exactly two', () => {
    expect(() => {
      plugin(workshopOneMarkerAST);
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 1.'
    );

    expect(() => {
      plugin(workshopThreeMarkersAST);
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 3.'
    );
  });

  it('throws when a --solutions-- header appears before the last step', () => {
    expect(() => {
      plugin(workshopSolutionsInMiddleAST);
    }).toThrow(
      'Validation error: "--solutions--" header appears before the last step.'
    );
  });

  it('throws when the final step is not a --solutions-- section', () => {
    expect(() => {
      plugin(workshopNoSolutionsAST);
    }).toThrow(
      'Validation error: Expected the final step to be the "--solutions--" section, but found "--scene--" instead.'
    );
  });

  it('throws when there are multiple --solutions-- headers', () => {
    expect(() => {
      plugin(workshopMultipleSolutionsAST);
    }).toThrow(
      'Validation error: "--solutions--" header appears before the last step.'
    );
  });
});
