/* global describe it expect beforeEach */
const simpleNoJsxAST = require('../__fixtures__/ast-simple-no-jsx.json');
const brokenHintsAST = require('../__fixtures__/ast-broken-hints.json');
const addTests = require('./add-tests');

describe('add-tests plugin', () => {
  const plugin = addTests();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `tests` property to `file.data`', () => {
    plugin(simpleNoJsxAST, file);

    expect('tests' in file.data).toBe(true);
  });

  it('adds test objects to the tests array following a schema', () => {
    expect.assertions(7);
    plugin(simpleNoJsxAST, file);
    const testObject = file.data.tests[0];
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject).toHaveProperty('testString');
    expect(typeof testObject.testString).toBe('string');
    expect(testObject).toHaveProperty('text');
    expect(typeof testObject.text).toBe('string');
    expect(testObject).toHaveProperty('id');
    expect(typeof testObject.id).toBe('string');
  });

  it('gets the ids associated with the tests', () => {
    expect.assertions(2);
    plugin(simpleNoJsxAST, file);
    const testObject = file.data.tests[0];
    const testObjectThree = file.data.tests[2];
    expect(testObject.id).toBe('test-id-1');
    expect(testObjectThree.id).toBe('test-id-3');
  });

  // TODO: make this a bit more robust and informative
  it('should throw if a test triplet is out of order', () => {
    expect.assertions(1);
    expect(() => plugin(brokenHintsAST, file)).toThrow(
      'Tests must be in (![id], text, ```testString```) order'
    );
  });

  // TODO: check id uniqueness (each id in a challenge should be a different
  // string)

  it('preserves code whitespace in testStrings', () => {
    plugin(simpleNoJsxAST, file);
    const testObject = file.data.tests[2];
    expect(testObject.testString).toBe(`// more test code
if(let x of xs) {
  console.log(x);
}`);
  });

  it('does not encode html', () => {
    plugin(simpleNoJsxAST, file);
    const testObject = file.data.tests[1];
    expect(testObject.text).toBe('<p>Second hint with <code>code</code></p>');
  });

  it('converts test text from md to html', () => {
    plugin(simpleNoJsxAST, file);
    const testObject = file.data.tests[2];
    expect(testObject.text).toBe(
      '<p>Third <em>hint</em> with <code>code</code>' +
        ' and <code>inline code</code></p>'
    );
  });

  it('should have an output to match the snapshot', () => {
    plugin(simpleNoJsxAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
