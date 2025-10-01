import { describe, beforeAll, it, expect } from 'vitest';
import isArray from 'lodash/isArray';
import { root } from 'mdast-builder';
import find from 'unist-util-find';

import parseFixture from '../../__fixtures__/parse-fixture';
import { getSection } from './get-section';

describe('getSection', () => {
  let simpleAst, extraHeadingAst;

  beforeAll(async () => {
    extraHeadingAst = await parseFixture('with-extra-heading.md');
    simpleAst = await parseFixture('simple.md');
  });

  it('should return an array', () => {
    const actual = getSection(simpleAst, '--hints--');
    expect(isArray(actual)).toBe(true);
  });

  it('should return an empty array if the marker is not present', () => {
    const actual = getSection(simpleAst, '--not-a-marker--');
    expect(isArray(actual)).toBe(true);
    expect(actual.length).toBe(0);
  });

  it('should include any headings without markers', () => {
    const actual = getSection(extraHeadingAst, '--description--');
    expect(
      find(root(actual), {
        value: 'this should still be inside --description--'
      })
    ).not.toBeUndefined();
  });

  it('should include the rest of the AST if there is no end marker', () => {
    const actual = getSection(extraHeadingAst, '--solutions--');
    expect(actual.length > 0).toBe(true);
    expect(
      find(root(actual), { value: 'body {\n  background: white;\n}' })
    ).not.toBeUndefined();
  });

  it('should ignore a marker if the depth is not correct', () => {
    const actual = getSection(extraHeadingAst, '--instructions--', 2);
    expect(actual).toHaveLength(0);
  });

  it('should match the hints snapshot', () => {
    const actual = getSection(simpleAst, '--hints--');
    expect(actual).toMatchSnapshot();
  });
  it('should match the instructions snapshot', () => {
    const actual = getSection(simpleAst, '--instructions--');
    expect(actual).toMatchSnapshot();
  });
});
