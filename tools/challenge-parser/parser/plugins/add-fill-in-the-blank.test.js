import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from '../__fixtures__/parse-fixture';
import addFillInTheBlankQuestion from './add-fill-in-the-blank';

describe('fill-in-the-blanks plugin', () => {
  let mockFillInTheBlankAST,
    mockFillInTheBlankYouAreAST,
    mockFillInTheBlankTwoSentencesAST,
    mockFillInTheBlankBadSentence,
    mockFillInTheBlankBadParagraph,
    mockFillInTheBlankMultipleBlanks,
    mockChineseFillInTheBlankAST,
    mockChineseFillInTheBlankNoPinyinAST,
    mockChineseFillInTheBlankNoHanziAST,
    mockChineseFillInTheBlankWrongAnswerFormatAST,
    mockChineseFillInTheBlankBlankAnswerMismatchAST,
    mockChineseFillInTheBlankLatinAST;
  const plugin = addFillInTheBlankQuestion();
  let file = { data: {} };

  beforeAll(async () => {
    mockFillInTheBlankAST = await parseFixture('with-fill-in-the-blank.md');
    mockFillInTheBlankYouAreAST = await parseFixture(
      'with-fill-in-the-blank-one-blank.md'
    );
    mockFillInTheBlankTwoSentencesAST = await parseFixture(
      'with-fill-in-the-blank-two-sentences.md'
    );
    mockFillInTheBlankBadSentence = await parseFixture(
      'with-fill-in-the-blank-bad-sentence.md'
    );
    mockFillInTheBlankBadParagraph = await parseFixture(
      'with-fill-in-the-blank-bad-paragraph.md'
    );
    mockFillInTheBlankMultipleBlanks = await parseFixture(
      'with-fill-in-the-blank-many-blanks.md'
    );
    mockChineseFillInTheBlankAST = await parseFixture(
      'with-chinese-fill-in-the-blank.md'
    );
    mockChineseFillInTheBlankNoPinyinAST = await parseFixture(
      'with-chinese-fill-in-the-blank-no-pinyin.md'
    );
    mockChineseFillInTheBlankNoHanziAST = await parseFixture(
      'with-chinese-fill-in-the-blank-no-hanzi.md'
    );
    mockChineseFillInTheBlankWrongAnswerFormatAST = await parseFixture(
      'with-chinese-fill-in-the-blank-wrong-answer-format.md'
    );
    mockChineseFillInTheBlankBlankAnswerMismatchAST = await parseFixture(
      'with-chinese-fill-in-the-blank-blank-answer-mismatch.md'
    );
    mockChineseFillInTheBlankLatinAST = await parseFixture(
      'with-chinese-fill-in-the-blank-latin.md'
    );
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `fillInTheBlank` property to `file.data`', () => {
    plugin(mockFillInTheBlankAST, file);
    expect('fillInTheBlank' in file.data).toBe(true);
  });

  it('should generate a fillInTheBlank object from a fill-in-the-blank challenge AST', () => {
    plugin(mockFillInTheBlankAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(Object.keys(testObject).length).toBe(2);
    expect(testObject).toHaveProperty('sentence');
    expect(typeof testObject.sentence).toBe('string');
    expect(testObject).toHaveProperty('blanks');
    expect(Array.isArray(testObject.blanks)).toBe(true);
    expect(testObject.blanks.length).toBe(3);
    expect(testObject.blanks[0]).toHaveProperty('answer');
    expect(testObject.blanks[0].answer).toEqual('are');
    expect(testObject.blanks[0]).toHaveProperty('feedback');
    expect(typeof testObject.blanks[0].feedback).toBe('string');
    expect(testObject.blanks[1]).toHaveProperty('answer');
    expect(testObject.blanks[1].answer).toEqual('right');
    expect(testObject.blanks[1]).toHaveProperty('feedback');
    expect(typeof testObject.blanks[1].feedback).toBe('string');
    expect(testObject.blanks[2]).toHaveProperty('answer');
    expect(testObject.blanks[2].answer).toEqual('Nice');
    expect(testObject.blanks[2]).toHaveProperty('feedback');
    expect(testObject.blanks[2].feedback).toBeNull();
  });

  it('should convert feedback markdown into html', () => {
    plugin(mockFillInTheBlankAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.blanks[0]).toStrictEqual({
      answer: 'are',
      feedback:
        '<p>The verb <code>to be</code> is an irregular verb. ' +
        'When conjugated with the pronoun <code>you</code>, <code>be</code> ' +
        'becomes <code>are</code>. For example: <code>You are an English learner.</code></p>'
    });

    expect(testObject.blanks[1]).toStrictEqual({
      answer: 'right',
      feedback: '<p>Feedback 2</p>'
    });

    expect(testObject.blanks[2]).toStrictEqual({
      answer: 'Nice',
      feedback: null
    });
  });

  it('should extract the sentence from the surrounding inline code block', () => {
    plugin(mockFillInTheBlankAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.sentence).toBe(
      '<p>Hello, You BLANK the new graphic designer, BLANK? BLANK to meet you!</p>'
    );
  });

  it('should extract sentences from multiple inline code blocks', () => {
    plugin(mockFillInTheBlankTwoSentencesAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.sentence).toBe(
      `<p>A sentence BLANK paragraph 1</p>
<p>Sentence in BLANK 2</p>`
    );
  });

  it('should throw if a sentence is not inside an inline code block', () => {
    expect(() => {
      plugin(mockFillInTheBlankBadSentence, file);
    }).toThrow(
      `Each paragraph in the fillInTheBlank sentence section must be inside an inline code block
Example of bad formatting:
## --sentence--

This is a sentence

Example of good formatting:
## --sentence--

\`This is a sentence\`

`
    );
  });

  it('should throw if there are multiple inline code blocks in the same paragraph', () => {
    expect(() => {
      plugin(mockFillInTheBlankBadParagraph, file);
    }).toThrow(
      `Each inline code block in the fillInTheBlank sentence section must in its own paragraph
If you have more than one code block, check that they're separated by a blank line
Example of bad formatting:
\`too close\`
\`to each other\`

Example of good formatting:
\`separated\`

\`by a blank line\`

`
    );
  });

  it('should throw if there are multiple --blanks-- sections', () => {
    // TODO: Check if this is too wordy
    expect(() => {
      plugin(mockFillInTheBlankMultipleBlanks, file);
    }).toThrow(
      `There should only be one --blanks-- section in the fillInTheBlank challenge`
    );
  });

  it('should handle one blank', () => {
    plugin(mockFillInTheBlankYouAreAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.blanks[0]).toStrictEqual({
      answer: 'are',
      feedback:
        '<p>The verb <code>to be</code> is an irregular verb. When conjugated with the pronoun <code>you</code>, <code>be</code> becomes <code>are</code>. For example: <code>You are an English learner.</code></p>'
    });
  });

  it('should parse Chinese fill-in-the-blank sentence and answer correctly if they are in `hanzi (pinyin)` format', () => {
    file.data.lang = 'zh-CN';
    file.data.inputType = 'pinyin-to-hanzi';
    plugin(mockChineseFillInTheBlankAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.inputType).toBe('pinyin-to-hanzi');

    expect(testObject.sentence).toBe(
      '<p>BLANK BLANK，BLANK <ruby>是王华<rp>(</rp><rt>shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby> BLANK <ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby>？</p>'
    );
    expect(testObject.blanks.length).toBe(4);

    expect(testObject.blanks[0].answer).toEqual('你 (nǐ)');
    expect(testObject.blanks[0].feedback).toBe(
      '<p>Feedback text containing <ruby>汉字<rp>(</rp><rt>hàn zì</rt><rp>)</rp></ruby>.</p>'
    );

    expect(testObject.blanks[1].answer).toEqual('好 (hǎo)');
    expect(testObject.blanks[1].feedback).toBe(
      '<p>This means "good" or "well".</p>'
    );

    expect(testObject.blanks[2].answer).toEqual('我 (wǒ)');
    expect(testObject.blanks[2].feedback).toBe('<p>This means "I".</p>');

    expect(testObject.blanks[3].answer).toEqual('叫 (jiào)');
    expect(testObject.blanks[3].feedback).toBe(
      '<p>This means "to be called".</p>'
    );
  });

  it('should return sentence as plain text when sentence does not contain pinyin', () => {
    file.data.lang = 'zh-CN';
    plugin(mockChineseFillInTheBlankNoPinyinAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.sentence).toBe('<p>BLANK好</p>');
    expect(testObject.blanks[0].answer).toEqual('你 (nǐ)');
  });

  it('should return sentence as plain text when sentence does not contain hanzi', () => {
    file.data.lang = 'zh-CN';
    plugin(mockChineseFillInTheBlankNoHanziAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.sentence).toBe('<p>BLANK hǎo</p>');
    expect(testObject.blanks[0].answer).toEqual('nǐ');
  });

  it("should throw if the number of blanks in the sentence doesn't match the number of answers", () => {
    file.data.lang = 'zh-CN';
    expect(() => {
      plugin(mockChineseFillInTheBlankBlankAnswerMismatchAST, file);
    }).toThrow(`Number of BLANKs doesn't match the number of answers.`);
  });

  it('should throw error when inputType is pinyin-to-hanzi but answer is not in hanzi-pinyin format', () => {
    file.data.lang = 'zh-CN';
    file.data.inputType = 'pinyin-to-hanzi';

    expect(() => {
      plugin(mockChineseFillInTheBlankWrongAnswerFormatAST, file);
    }).toThrow(
      "When inputType is 'pinyin-to-hanzi', all answers must be in 'hanzi (pinyin)' format."
    );
  });

  it('should separate BLANK and adjacent Latin text in Chinese sentences', () => {
    file.data.lang = 'zh-CN';
    plugin(mockChineseFillInTheBlankLatinAST, file);
    const testObject = file.data.fillInTheBlank;

    expect(testObject.sentence).toBe(
      '<p><ruby>我<rp>(</rp><rt>wǒ</rt><rp>)</rp></ruby> BLANK UI <ruby>设计师<rp>(</rp><rt>shè jì shī</rt><rp>)</rp></ruby> 。</p>'
    );
    expect(testObject.blanks.length).toBe(1);

    expect(testObject.blanks[0].answer).toEqual('是 (shì)');
    expect(testObject.blanks[0].feedback).toBe('<p>Feedback text.</p>');
  });
});
