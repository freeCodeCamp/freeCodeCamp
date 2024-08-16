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

  it('adds a `questions` property to `file.data`', () => {
    plugin(mockVideoAST, file);

    expect('questions' in file.data).toBe(true);
  });

  it('should generate a question object from a video challenge AST', () => {
    expect.assertions(11);
    plugin(mockVideoAST, file);
    const testObject = file.data.questions;
    expect(Array.isArray(testObject)).toBe(true);

    const question = testObject[0];
    expect(testObject.length).toBe(1);
    expect(question).toHaveProperty('text');
    expect(typeof question.text).toBe('string');
    expect(question).toHaveProperty('solution');
    expect(typeof question.solution).toBe('number');
    expect(question).toHaveProperty('answers');
    expect(Array.isArray(question.answers)).toBe(true);
    expect(typeof question.answers[0]).toBe('object');
    expect(question.answers[0]).toHaveProperty('answer');
    expect(question.answers[0]).toHaveProperty('feedback');
  });

  it('should convert question and answer markdown into html', () => {
    plugin(mockVideoAST, file);
    const testObject = file.data.questions;
    expect(testObject.length).toBe(1);

    const question = testObject[0];
    expect(question.text).toBe(
      '<p>Question line 1</p>\n' +
        `<pre><code class="language-js">  var x = 'y';\n` +
        '</code></pre>'
    );
    expect(question.solution).toBe(3);
    expect(question.answers[0]).toStrictEqual({
      answer: '<p>Some inline <code>code</code></p>',
      feedback: '<p>That is not correct.</p>'
    });
    expect(question.answers[1]).toStrictEqual({
      answer: `<p>Some <em>italics</em></p>
<p>A second answer paragraph.</p>`,
      feedback: null
    });
    expect(question.answers[2]).toStrictEqual({
      answer: '<p><code> code in </code> code tags</p>',
      feedback: null
    });
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
