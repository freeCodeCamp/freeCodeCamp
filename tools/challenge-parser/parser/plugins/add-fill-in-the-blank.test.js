const parseFixture = require('../__fixtures__/parse-fixture');
const addFillInTheBlankQuestion = require('./add-fill-in-the-blank');

describe('fill-in-the-blanks plugin', () => {
  let mockFillInTheBlankAST,
    mockFillInTheBlankYouAreAST,
    mockFillInTheBlankTwoSentencesAST,
    mockFillInTheBlankBadSentence,
    mockFillInTheBlankBadParagraph,
    mockFillInTheBlankMultipleBlanks;
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
    expect(typeof testObject.blanks[0].answer).toBe('string');
    expect(testObject.blanks[0]).toHaveProperty('feedback');
    expect(typeof testObject.blanks[0].feedback).toBe('string');
    expect(testObject.blanks[1]).toHaveProperty('answer');
    expect(typeof testObject.blanks[1].answer).toBe('string');
    expect(testObject.blanks[1]).toHaveProperty('feedback');
    expect(typeof testObject.blanks[1].feedback).toBe('string');
    expect(testObject.blanks[2]).toHaveProperty('answer');
    expect(typeof testObject.blanks[2].answer).toBe('string');
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
});
