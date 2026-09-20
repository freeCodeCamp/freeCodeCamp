import isArray from 'lodash/isArray';
import { describe, beforeAll, it, expect } from 'vitest';

import parseFixture from '../../__fixtures__/parse-fixture';
import getAllBefore from './before-heading';

describe('before-headings', () => {
  let simpleAst;

  beforeAll(async () => {
    simpleAst = await parseFixture('simple.md');
  });

  it('should return an array', () => {
    expect.assertions(1);
    const actual = getAllBefore(simpleAst, '--hints--');
    expect(isArray(actual)).toBe(true);
  });

  it('should return an empty array if the marker is not present', () => {
    expect.assertions(2);
    const actual = getAllBefore(simpleAst, '--not-a-marker--');
    expect(isArray(actual)).toBe(true);
    expect(actual.length).toBe(0);
  });

  it('should include the whole AST before the marker', () => {
    expect.assertions(1);
    const actual = getAllBefore(simpleAst, '--hints--');
    expect(actual).toHaveLength(6);
  });
});
