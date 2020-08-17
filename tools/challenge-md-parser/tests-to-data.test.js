/* global describe it expect beforeEach */
const mockAST = require('./fixtures/challenge-md-ast.json');
const mockVideoAST = require('./fixtures/video-challenge-md-ast.json');
const testsToData = require('./tests-to-data');

const { mdToHTML } = testsToData;

describe('mdToHTML', () => {
  it('converts Markdown to HTML', () => {
    // a line of text on its own is parsed as a paragraph, hence the p tags
    expect(mdToHTML('*it*')).toBe('<p><em>it</em></p>');
  });

  it('preserves code language', () => {
    expect(mdToHTML('```js\n var x = "y";\n```')).toBe(
      '<pre><code class="language-js"> var x = "y";\n</code></pre>'
    );
  });
});

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

  it('should generate a question object from a video challenge AST', () => {
    expect.assertions(4);
    plugin(mockVideoAST, file);
    const testObject = file.data.question;
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject).toHaveProperty('text');
    expect(testObject).toHaveProperty('solution');
    expect(testObject).toHaveProperty('answers');
  });

  it('should convert question and answer markdown into html', () => {
    plugin(mockVideoAST, file);
    const testObject = file.data.question;
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject.text).toBe(
      '<p>Question line one</p>\n' +
        `<pre><code class="language-js">  var x = 'y';\n` +
        '</code></pre>'
    );
    expect(testObject.solution).toBe(3);
    expect(testObject.answers[0]).toBe('<p>inline <code>code</code></p>');
    expect(testObject.answers[1]).toBe('<p>some <em>italics</em></p>');
    expect(testObject.answers[2]).toBe(
      '<p><code> code in </code> code tags</p>'
    );
  });

  it('should have an output to match the snapshot', () => {
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });

  it('should match the video snapshot', () => {
    plugin(mockVideoAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
