/* global describe it expect */
const mockAST = require('./fixtures/challenge-html-ast.json');
const textToData = require('./text-to-data');

describe('text-to-data', () => {
  const expectedField = 'description';
  const otherExpectedField = 'instructions';
  const unexpectedField = 'does-not-exis';
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('should take return a function', () => {
    const plugin = textToData(['a-section-id']);

    expect(typeof plugin).toEqual('function');
  });

  it('throws when no argument or the incorrect argument is supplied', () => {
    expect.assertions(5);
    const expectedError =
      "textToData must have an array of section id's supplied";
    expect(() => {
      textToData();
    }).toThrow(expectedError);
    expect(() => {
      textToData('');
    }).toThrow(expectedError);
    expect(() => {
      textToData({});
    }).toThrow(expectedError);
    expect(() => {
      textToData(1);
    }).toThrow(expectedError);
    expect(() => {
      textToData([]);
    }).toThrow(expectedError);
  });

  it("should only add a value for 'found' section id's", () => {
    const plugin = textToData([expectedField, unexpectedField]);
    plugin(mockAST, file);
    expect(expectedField in file.data && !(unexpectedField in file.data)).toBe(
      true
    );
  });

  it('should add a string relating to the section id to `file.data`', () => {
    const plugin = textToData([expectedField]);
    plugin(mockAST, file);
    const expectedText = 'Welcome to freeCodeCamp';
    expect(file.data[expectedField].includes(expectedText)).toBe(true);
  });

  it('should preserve nested html', () => {
    const plugin = textToData([expectedField]);
    plugin(mockAST, file);
    const expectedText = `<blockquote>
<p>Some text in a blockquote</p>
<p>Some text in a blockquote, with <code>code</code></p>
</blockquote>`;
    expect(file.data[expectedField].includes(expectedText)).toBe(true);
  });

  it('should have an output to match the snapshot', () => {
    const plugin = textToData([expectedField, otherExpectedField]);
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
