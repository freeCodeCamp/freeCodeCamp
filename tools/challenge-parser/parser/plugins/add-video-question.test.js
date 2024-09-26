const parseFixture = require('../__fixtures__/parse-fixture');
const addVideoQuestion = require('./add-video-question');

describe('add-video-question plugin', () => {
  let simpleAST, videoAST, multipleQuestionAST, videoOutOfOrderAST;
  const plugin = addVideoQuestion();
  let file = { data: {} };

  beforeAll(async () => {
    simpleAST = await parseFixture('simple.md');
    videoAST = await parseFixture('with-video-question.md');
    multipleQuestionAST = await parseFixture(
      'with-multiple-video-questions.md'
    );
    videoOutOfOrderAST = await parseFixture(
      'with-video-question-out-of-order.md'
    );
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `questions` property to `file.data`', () => {
    plugin(videoAST, file);

    expect('questions' in file.data).toBe(true);
  });

  const checkQuestion = question => {
    expect(question).toHaveProperty('text');
    expect(typeof question.text).toBe('string');
    expect(question).toHaveProperty('solution');
    expect(typeof question.solution).toBe('number');
    expect(question).toHaveProperty('answers');
    expect(Array.isArray(question.answers)).toBe(true);
    expect(typeof question.answers[0]).toBe('object');
    expect(question.answers[0]).toHaveProperty('answer');
    expect(question.answers[0].answer).toBeTruthy();
    expect(question.answers[0]).toHaveProperty('feedback');
  };

  it('should generate a questions array from a video challenge AST', () => {
    plugin(videoAST, file);
    const testArr = file.data.questions;
    expect(Array.isArray(testArr)).toBe(true);
    expect(testArr.length).toBe(1);

    checkQuestion(testArr[0]);
  });

  it('should include multiple questions if present', () => {
    plugin(multipleQuestionAST, file);
    const testArr = file.data.questions;
    expect(Array.isArray(testArr)).toBe(true);
    expect(testArr.length).toBe(2);
    for (const testObject of testArr) {
      checkQuestion(testObject);
    }
  });

  it('should convert question and answer markdown into html', () => {
    plugin(videoAST, file);
    const testObject = file.data.questions[0];
    expect(Object.keys(testObject).length).toBe(3);
    expect(testObject.text).toBe(
      '<p>Question line 1</p>\n' +
        `<pre><code class="language-js">  var x = 'y';\n` +
        '</code></pre>'
    );
    expect(testObject.solution).toBe(3);
    expect(testObject.answers[0]).toStrictEqual({
      answer: '<p>Some inline <code>code</code></p>',
      feedback: '<p>That is not correct.</p>'
    });
    expect(testObject.answers[1]).toStrictEqual({
      answer: `<p>Some <em>italics</em></p>
<p>A second answer paragraph.</p>`,
      feedback: null
    });
    expect(testObject.answers[2]).toStrictEqual({
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
    plugin(videoAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
