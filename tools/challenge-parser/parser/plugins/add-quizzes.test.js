const mockQuizzesAST = require('../__fixtures__/ast-with-quizzes.json');
const addQuizzes = require('./add-quizzes');

describe('add-quizzes plugin', () => {
  const plugin = addQuizzes();
  let file = { data: {} };

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
    expect.assertions(47);
    plugin(mockQuizzesAST, file);

    const quizzes = file.data.quizzes;
    expect(quizzes.length).toBe(2);

    quizzes.forEach(quiz => {
      expect(quiz).toHaveProperty('questions');
      expect(Array.isArray(quiz.questions)).toBe(true);

      const questions = quiz.questions;
      expect(questions.length).toBe(2);

      questions.forEach(quizQuestion => {
        expect(quizQuestion).toHaveProperty('question');
        expect(typeof quizQuestion.question).toBe('string');
        expect(quizQuestion).toHaveProperty('solution');
        expect(typeof quizQuestion.solution).toBe('number');
        expect(quizQuestion).toHaveProperty('options');
        expect(Array.isArray(quizQuestion.options)).toBe(true);

        const options = quizQuestion.options;

        options.forEach(option => {
          expect(typeof option).toBe('string');
        });
      });
    });
  });

  it('should match the quizzes snapshot', () => {
    plugin(mockQuizzesAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
