/* global describe it expect beforeEach */
const isArray = require('lodash/isArray');

const mockAST = require('./fixtures/challenge-html-ast.json');
const { challengeSeedToData } = require('./challengeSeed-to-data');
const { isObject } = require('lodash');

describe('challengeSeed-to-data plugin', () => {
  const plugin = challengeSeedToData();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `files` property to `file.data`', () => {
    plugin(mockAST, file);
    expect('files' in file.data).toBe(true);
  });

  it('ensures that the `files` property is an object', () => {
    plugin(mockAST, file);
    expect(isObject(file.data.files)).toBe(true);
  });

  it('adds test objects to the files array following a schema', () => {
    expect.assertions(15);
    plugin(mockAST, file);
    const {
      data: { files }
    } = file;
    const testObject = files.indexjs;
    expect(Object.keys(testObject).length).toEqual(7);
    expect(testObject).toHaveProperty('key');
    expect(typeof testObject['key']).toBe('string');
    expect(testObject).toHaveProperty('ext');
    expect(typeof testObject['ext']).toBe('string');
    expect(testObject).toHaveProperty('name');
    expect(typeof testObject['name']).toBe('string');
    expect(testObject).toHaveProperty('contents');
    expect(typeof testObject['contents']).toBe('string');
    expect(testObject).toHaveProperty('head');
    expect(typeof testObject['head']).toBe('string');
    expect(testObject).toHaveProperty('tail');
    expect(typeof testObject['tail']).toBe('string');
    expect(testObject).toHaveProperty('editableRegionBoundaries');
    expect(isArray(testObject['editableRegionBoundaries'])).toBe(true);
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
