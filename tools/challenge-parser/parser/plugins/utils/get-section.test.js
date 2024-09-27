const isArray = require('lodash/isArray');
const { root } = require('mdast-builder');
const find = require('unist-util-find');

const parseFixture = require('../../__fixtures__/parse-fixture');
const { getSection } = require('./get-section');

describe('getSection', () => {
  let simpleAst, extraHeadingAst;

  beforeAll(async () => {
    extraHeadingAst = await parseFixture('with-extra-heading.md');
    simpleAst = await parseFixture('simple.md');
  });

  it('should return an array', () => {
    expect.assertions(1);
    const actual = getSection(simpleAst, '--hints--');
    expect(isArray(actual)).toBe(true);
  });

  it('should return an empty array if the marker is not present', () => {
    expect.assertions(2);
    const actual = getSection(simpleAst, '--not-a-marker--');
    expect(isArray(actual)).toBe(true);
    expect(actual.length).toBe(0);
  });

  it('should include any headings without markers', () => {
    expect.assertions(1);
    const actual = getSection(extraHeadingAst, '--description--');
    expect(
      find(root(actual), {
        value: 'this should still be inside --description--'
      })
    ).not.toBeUndefined();
  });

  it('should include the rest of the AST if there is no end marker', () => {
    expect.assertions(2);
    const actual = getSection(extraHeadingAst, '--solutions--');
    expect(actual.length > 0).toBe(true);
    expect(
      find(root(actual), { value: 'body {\n  background: white;\n}' })
    ).not.toBeUndefined();
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
