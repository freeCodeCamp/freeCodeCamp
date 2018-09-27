/* global describe it expect beforeEach */
const { isObject } = require('lodash');

const mockAST = require('./fixtures/challenge-md-ast.json');
const frontmatterToData = require('./frontmatter-to-data');

describe('frontmatter-to-data plugin', () => {
  const plugin = frontmatterToData();
  let file = { data: {} };
  beforeEach(() => {
    file = { data: {} };
  });

  it('should return a plugin which is a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('should maintain an object for the `file.data` property', () => {
    plugin(mockAST, file);
    expect(isObject(file.data)).toBe(true);
  });

  it('should add all keys from frontmatter to the `file.data` property', () => {
    const expectedKeys = ['id', 'title', 'challengeType', 'videoUrl'];
    plugin(mockAST, file);
    const actualKeys = Object.keys(file.data);
    expect(actualKeys).toEqual(expectedKeys);
  });

  it('should not mutate any type held in the frontmatter', () => {
    expect.assertions(4);
    plugin(mockAST, file);
    const { id, title, challengeType, videoUrl } = file.data;
    expect(typeof id).toEqual('string');
    expect(typeof title).toEqual('string');
    expect(typeof challengeType).toEqual('number');
    expect(typeof videoUrl).toEqual('string');
  });

  it('should trim extra whitespace from keys and values', () => {
    expect.assertions(7);
    plugin(mockAST, file);
    const whitespaceRE = /(^\s\S+|\S\s$)/;
    const keys = Object.keys(file.data);
    keys.forEach(key => expect(whitespaceRE.test(key)).toBe(false));
    const values = keys.map(key => file.data[key]);
    values
      .filter(value => typeof value === 'string')
      .forEach(value => expect(whitespaceRE.test(value)).toBe(false));
  });

  it('should not mutate url strings', () => {
    const expectedUrl = 'https://scrimba.com/p/pVMPUv/cE8Gpt2';
    plugin(mockAST, file);
    expect(file.data.videoUrl).toEqual(expectedUrl);
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
