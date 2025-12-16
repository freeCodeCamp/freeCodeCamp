import { describe, it, expect, beforeAll } from 'vitest';
import validateWorkshop from './validate-workshop';
import parseFixture from '../__fixtures__/parse-fixture';

describe('validate-workshop plugin', () => {
  let simpleAST,
    withErmsOnOneLineAST,
    withEditableMarkersAST,
    workshopOneMarkerAST,
    workshopThreeMarkersAST,
    workshopSolutionsInMiddleAST,
    workshopNoSolutionsAST,
    workshopMultipleSolutionsAST,
    workshopValidTwoMarkersAST;

  const plugin = validateWorkshop();

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
