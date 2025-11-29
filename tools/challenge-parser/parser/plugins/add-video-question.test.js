import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from '../__fixtures__/parse-fixture';
import addVideoQuestion from './add-video-question';

describe('add-video-question plugin', () => {
  let simpleAST,
    videoAST,
    multipleQuestionAST,
    videoOutOfOrderAST,
    videoWithAudioAST,
    videoWithSolutionAboveNumberOfAnswersAST,
    videoWithFeedbackTwiceInARow,
    videoWithCorrectAnswerWithFeedback,
    chineseVideoAST;
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
    videoWithAudioAST = await parseFixture('with-video-question-audio.md');
    videoWithSolutionAboveNumberOfAnswersAST = await parseFixture(
      'with-video-question-solution-above-number-of-answers.md'
    );
    videoWithFeedbackTwiceInARow = await parseFixture(
      'with-video-question-feedback-twice-in-a-row.md'
    );
    videoWithCorrectAnswerWithFeedback = await parseFixture(
      'with-video-question-correct-answer-with-feedback.md'
    );
    chineseVideoAST = await parseFixture('with-chinese-mcq.md');
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
    expect(question.answers[0]).toHaveProperty('audioId');
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
      feedback: '<p>That is not correct.</p>',
      audioId: null
    });
    expect(testObject.answers[1]).toStrictEqual({
      answer: `<p>Some <em>italics</em></p>
<p>A second answer paragraph.</p>`,
      feedback: null,
      audioId: null
    });
    expect(testObject.answers[2]).toStrictEqual({
      answer: '<p><code> code in </code> code tags</p>',
      feedback: null,
      audioId: null
    });
  });

  // TODO: consider testing for more specific messages.  Ideally we them to say
  // 'The md is missing "x"', so it's obvious how to fix things.
  it('should throw if the subheadings are outside the question heading', () => {
    expect.assertions(1);
    expect(() => plugin(videoOutOfOrderAST, file)).toThrow(
      'question text is missing in questions section'
    );
  });

  it('should throw if solution is higher than the number of answers', () => {
    expect.assertions(1);
    expect(() =>
      plugin(videoWithSolutionAboveNumberOfAnswersAST, file)
    ).toThrow('solution must be within range of number of answers: 1-3');
  });

  it('should throw if answer has more than one feedback section', () => {
    expect.assertions(1);
    expect(() => plugin(videoWithFeedbackTwiceInARow, file)).toThrow(
      'answer 2 has multiple feedback sections'
    );
  });

  it('should throw if correct answer has feedback section', () => {
    expect.assertions(1);
    expect(() => plugin(videoWithCorrectAnswerWithFeedback, file)).toThrow(
      'answer selected as solution cannot have feedback section'
    );
  });

  it('should NOT throw if there is no question', () => {
    expect.assertions(1);
    expect(() => plugin(simpleAST, file)).not.toThrow();
  });

  it('should extract audioId from answers when present', () => {
    plugin(videoWithAudioAST, file);

    const testObject = file.data.questions[0];

    expect(testObject.answers[0]).toStrictEqual({
      answer: '<p>Some inline <code>code</code></p>',
      feedback: '<p>That is not correct.</p>',
      audioId: 'answer1-audio'
    });

    expect(testObject.answers[1]).toStrictEqual({
      answer: `<p>Some <em>italics</em></p>
<p>A second answer paragraph.</p>`,
      feedback: null,
      audioId: 'answer2-audio'
    });

    expect(testObject.answers[2]).toStrictEqual({
      answer: '<p><code> code in </code> code tags</p>',
      feedback: null,
      audioId: null
    });
  });

  it('should match the video snapshot', () => {
    plugin(videoAST, file);
    expect(file.data).toMatchSnapshot();
  });

  it('should render Chinese inline code as ruby in question text, answers, and feedback', async () => {
    const zhFile = { data: { lang: 'zh-CN' } };

    plugin(chineseVideoAST, zhFile);

    const question = zhFile.data.questions[0];

    expect(question.text).toBe(
      '<p>Question text containing <ruby>汉字<rp>(</rp><rt>hàn zì</rt><rp>)</rp></ruby>.</p>'
    );

    const answer1 = question.answers[0];
    expect(answer1.answer).toContain(
      '<ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>'
    );

    const answer2 = question.answers[1];
    expect(answer2.answer).toContain(
      '<ruby>请<rp>(</rp><rt>qǐng</rt><rp>)</rp></ruby>'
    );
    expect(answer2.feedback).toBe(
      '<p><ruby>请<rp>(</rp><rt>qǐng</rt><rp>)</rp></ruby> is not correct.</p>'
    );

    const answer3 = question.answers[2];
    expect(answer3.answer).toContain(
      '<ruby>请问<rp>(</rp><rt>qǐng wèn</rt><rp>)</rp></ruby>'
    );

    const answer4 = question.answers[3];
    expect(answer4.answer).toContain(
      '<ruby>问<rp>(</rp><rt>wèn</rt><rp>)</rp></ruby>'
    );
  });
});
