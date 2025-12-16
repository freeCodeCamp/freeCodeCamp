import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import validateWorkshop from './validate-workshop';
import parseFixture from '../__fixtures__/parse-fixture';

describe('validate-workshop plugin', () => {
  let simpleAST,
    withErmsOnOneLineAST,
    withEditableMarkersAST,
    workshopOneMarkerAST,
    workshopThreeMarkersAST,
    workshopSolutionsInMiddleAST;

  const plugin = validateWorkshop();

  let file = { data: {} };

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
      plugin(workshopOneMarkerAST, file);
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 1.'
    );

    expect(() => {
      plugin(workshopThreeMarkersAST, file);
    }).toThrow(
      'Validation error: expected exactly 2 occurrences of "--fcc-editable-region--" but found 3.'
    );
  });

  it('throws when a --solutions-- header appears before the last step', () => {
    expect(() => {
      plugin(workshopSolutionsInMiddleAST, file);
    }).toThrow(
      'Validation error: "--solutions--" header appears before the last step.'
    );
  });
});
