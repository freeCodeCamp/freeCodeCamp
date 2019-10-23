/* global describe it expect beforeEach */
const mockAST = require('./fixtures/challenge-md-ast.json');
const testsToData = require('./tests-to-data');

describe('tests-to-data plugin', () => {
  const plugin = testsToData();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `tests` property to `file.data`', () => {
    plugin(mockAST, file);

    expect('tests' in file.data).toBe(true);
  });

  it('adds test objects to the tests array following a schema', () => {
    expect.assertions(3);
    plugin(mockAST, file);
    const testObject = file.data.tests[0];
    expect(Object.keys(testObject).length).toBe(2);
    expect(testObject).toHaveProperty('testString');
    expect(testObject).toHaveProperty('text');
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
