const simpleAST = require('../__fixtures__/ast-simple.json');
const mockVideoAST = require('../__fixtures__/ast-video-challenge.json');
// eslint-disable-next-line max-len
const videoOutOfOrderAST = require('../__fixtures__/ast-video-out-of-order.json');
const addVideoQuestion = require('./add-video-question');

describe('add-video-question plugin', () => {
  const plugin = addVideoQuestion();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `question` property to `file.data`', () => {
    plugin(mockVideoAST, file);

    expect('question' in file.data).toBe(true);
  });

  it('should generate a question object from a video challenge AST', () => {
    expect.assertions(8);
    plugin(mockVideoAST, file);
    const testObject = file.data.question;
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject).toHaveProperty('text');
    expect(typeof testObject.text).toBe('string');
    expect(testObject).toHaveProperty('solution');
    expect(typeof testObject.solution).toBe('number');
    expect(testObject).toHaveProperty('answers');
    expect(Array.isArray(testObject.answers)).toBe(true);
    expect(typeof testObject.answers[0]).toBe('string');
  });

  it('should convert question and answer markdown into html', () => {
    plugin(mockVideoAST, file);
    const testObject = file.data.question;
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject.text).toBe(
      '<p>Question line 1</p>\n' +
        `<pre><code class="language-js">  var x = 'y';\n` +
        '</code></pre>'
    );
    expect(testObject.solution).toBe(3);
    expect(testObject.answers[0]).toBe('<p>Some inline <code>code</code></p>');
    expect(testObject.answers[1]).toBe(`<p>Some <em>italics</em></p>
<p>A second answer paragraph.</p>`);
    expect(testObject.answers[2]).toBe(
      '<p><code> code in </code> code tags</p>'
    );
  });

  // TODO: consider testing for more specific messages.  Ideally we them to say
  // 'The md is missing "x"', so it's obvious how to fix things.
  it('should throw if the subheadings are outside the question heading', () => {
    expect.assertions(1);
    expect(() => plugin(videoOutOfOrderAST)).toThrow();
  });

  it('should NOT throw if there is no question', () => {
    expect.assertions(1);
    expect(() => plugin(simpleAST)).not.toThrow();
  });

  it('should match the video snapshot', () => {
    plugin(mockVideoAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
