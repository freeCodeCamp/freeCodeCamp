/* global describe it expect beforeEach */
const mockAST = require('./fixtures/challenge-html-ast.json');
const challengeSeedToData = require('./challengeSeed-to-data');

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

  it('ensures that the `files` property is an array', () => {
    plugin(mockAST, file);
    expect(Array.isArray(file.data.files)).toBe(true);
  });

  it('adds test objects to the files array following a schema', () => {
    expect.assertions(7);
    plugin(mockAST, file);
    const {
      data: { files }
    } = file;
    const testObject = files[0];
    expect(Object.keys(testObject).length).toEqual(6);
    expect(testObject).toHaveProperty('key');
    expect(testObject).toHaveProperty('ext');
    expect(testObject).toHaveProperty('name');
    expect(testObject).toHaveProperty('contents');
    expect(testObject).toHaveProperty('head');
    expect(testObject).toHaveProperty('tail');
  });

  it('only adds strings to the `files` object type', () => {
    expect.assertions(6);
    plugin(mockAST, file);
    const {
      data: { files }
    } = file;
    const testObject = files[0];
    Object.keys(testObject)
      .map(key => testObject[key])
      .forEach(value => expect(typeof value).toEqual('string'));
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
