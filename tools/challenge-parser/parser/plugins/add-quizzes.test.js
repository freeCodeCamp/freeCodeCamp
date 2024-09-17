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

  //   it('should convert questions and options markdown into html', () => {
  //     plugin(mockQuizzesAST, file);
  //     const question = file.data.quizzes[0][0];

  //     expect(Object.keys(testObject).length).toBe(3);
  //     expect(testObject.text).toBe(
  //       '<p>Question line 1</p>\n' +
  //         `<pre><code class="language-js">  var x = 'y';\n` +
  //         '</code></pre>'
  //     );
  //     expect(testObject.solution).toBe(3);
  //     expect(testObject.answers[0]).toStrictEqual({
  //       answer: '<p>Some inline <code>code</code></p>',
  //       feedback: '<p>That is not correct.</p>'
  //     });
  //     expect(testObject.answers[1]).toStrictEqual({
  //       answer: `<p>Some <em>italics</em></p>
  // <p>A second answer paragraph.</p>`,
  //       feedback: null
  //     });
  //     expect(testObject.answers[2]).toStrictEqual({
  //       answer: '<p><code> code in </code> code tags</p>',
  //       feedback: null
  //     });
  //   });

  // TODO: consider testing for more specific messages.  Ideally we them to say
  // 'The md is missing "x"', so it's obvious how to fix things.
  // it('should throw if the subheadings are outside the question heading', () => {
  //   expect.assertions(1);
  //   expect(() => plugin(videoOutOfOrderAST)).toThrow();
  // });

  // it('should NOT throw if there is no question', () => {
  //   expect.assertions(1);
  //   expect(() => plugin(simpleAST)).not.toThrow();
  // });

  it('should match the quizzes snapshot', () => {
    plugin(mockQuizzesAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
