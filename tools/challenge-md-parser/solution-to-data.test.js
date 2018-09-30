/* global describe it expect beforeEach */
const mockAST = require('./fixtures/challenge-html-ast.json');
const solutionToData = require('./solution-to-data');

describe('challengeSeed-to-data plugin', () => {
  const plugin = solutionToData();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `solutions` property to `file.data`', () => {
    plugin(mockAST, file);
    expect('solutions' in file.data).toBe(true);
  });

  it('ensures that the `solutions` property is an array', () => {
    plugin(mockAST, file);
    expect(Array.isArray(file.data.solutions)).toBe(true);
  });

  it('each entry in the `solutions` array is a string', () => {
    plugin(mockAST, file);

    expect(file.data.solutions.every(el => typeof el === 'string')).toBe(true);
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
