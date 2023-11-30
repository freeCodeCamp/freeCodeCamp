const mockFillInTheBlankAST = require('../__fixtures__/ast-fill-in-the-blank.json');
const mockFillInTheBlankYouAreAST = require('../__fixtures__/ast-fill-in-the-blank-one-blank.json');
const addFillInTheBlankQuestion = require('./add-fill-in-the-blank');

describe('fill-in-the-blanks plugin', () => {
  const plugin = addFillInTheBlankQuestion();
  let file = { data: {} };

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
