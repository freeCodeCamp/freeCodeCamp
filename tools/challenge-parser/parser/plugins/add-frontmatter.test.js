const { isObject } = require('lodash');

const parse = require('../__fixtures__/parse-fixture');
const processFrontmatter = require('./add-frontmatter');

describe('process-frontmatter plugin', () => {
  let mockAST;

  beforeAll(async () => {
    mockAST = await parse('with-frontmatter.md');
  });

  const plugin = processFrontmatter();
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

  // And no others. The AST includes some yaml code, and this also
  // checks that none of those keys get parsed
  it('should add all keys from frontmatter to the `file.data` property', () => {
    const expectedKeys = [
      'id',
      'title',
      'challengeType',
      'isHidden',
      'videoUrl',
      'forumTopicId'
    ];
    plugin(mockAST, file);
    const actualKeys = Object.keys(file.data);
    expect(actualKeys).toEqual(expectedKeys);
  });

  it('should not mutate any type held in the frontmatter', () => {
    plugin(mockAST, file);
    const { id, title, challengeType, videoUrl, forumTopicId } = file.data;
    expect(typeof id).toEqual('string');
    expect(typeof title).toEqual('string');
    expect(typeof challengeType).toEqual('number');
    expect(typeof videoUrl).toEqual('string');
    expect(typeof forumTopicId).toEqual('number');
  });

  it('should trim extra whitespace from keys and values', () => {
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
