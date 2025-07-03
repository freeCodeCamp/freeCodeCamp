const parseFixture = require('./../__fixtures__/parse-fixture');
const addQuizzes = require('./add-quizzes');

describe('add-quizzes plugin', () => {
  let mockQuizzesAST;
  const plugin = addQuizzes();
  let file = { data: {} };

  beforeAll(async () => {
    mockQuizzesAST = await parseFixture('with-quizzes.md');
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `quizzes` property to `file.data`', () => {
    plugin(mockQuizzesAST, file);

    expect('quizzes' in file.data).toBe(true);
  });

  it('should generate a quizzes array from a quizzes challenge AST', () => {
    expect.assertions(44);
    plugin(mockQuizzesAST, file);

    const quizzes = file.data.quizzes;
    expect(Array.isArray(quizzes)).toBe(true);
    expect(quizzes.length).toBe(2);

    quizzes.forEach(quiz => {
      expect(quiz).toHaveProperty('questions');
      expect(Array.isArray(quiz.questions)).toBe(true);

      const questions = quiz.questions;
      expect(questions.length).toBe(2);

      questions.forEach(question => {
        expect(question).toHaveProperty('text');
        expect(typeof question.text).toBe('string');
        expect(question).toHaveProperty('answer');
        expect(typeof question.answer).toBe('string');
        expect(question).toHaveProperty('distractors');
        expect(Array.isArray(question.distractors)).toBe(true);

        const distractors = question.distractors;

        distractors.forEach(distractor => {
          expect(typeof distractor).toBe('string');
        });
      });
    });
  });

  it('should match the quizzes snapshot', () => {
    plugin(mockQuizzesAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
