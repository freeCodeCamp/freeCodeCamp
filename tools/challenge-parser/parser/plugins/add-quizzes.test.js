import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from './../__fixtures__/parse-fixture';
import addQuizzes from './add-quizzes';

describe('add-quizzes plugin', () => {
  let mockQuizzesAST;
  let chineseQuizzesAST;
  const plugin = addQuizzes();
  let file = { data: {} };

  beforeAll(async () => {
    mockQuizzesAST = await parseFixture('with-quizzes.md');
    chineseQuizzesAST = await parseFixture('with-chinese-quizzes.md');
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

  it('should render Chinese hanzi (pinyin) in quizzes when lang is zh-CN and the text contains hanzi (pinyin) format', () => {
    const zhFile = { data: { lang: 'zh-CN' } };
    plugin(chineseQuizzesAST, zhFile);
    const quizzes = zhFile.data.quizzes;
    expect(Array.isArray(quizzes)).toBe(true);
    expect(quizzes.length).toBe(1);

    const firstQuiz = quizzes[0];
    const firstQuestion = firstQuiz.questions[0];

    // Quiz 1, Question 1
    expect(firstQuestion.text).toBe(
      '<p>Quiz 1, question 1 with <ruby>中文<rp>(</rp><rt>zhōng wén</rt><rp>)</rp></ruby></p>'
    );
    expect(firstQuestion.distractors[0]).toBe(
      '<p>Quiz 1, question 1, distractor 1 with <ruby>中文<rp>(</rp><rt>zhōng wén</rt><rp>)</rp></ruby></p>'
    );
    expect(firstQuestion.distractors[1]).toBe(
      '<p>Quiz 1, question 1, distractor 2 with <ruby>中文<rp>(</rp><rt>zhōng wén</rt><rp>)</rp></ruby></p>'
    );
    expect(firstQuestion.distractors[2]).toBe(
      '<p>Quiz 1, question 1, distractor 3 with <ruby>中文<rp>(</rp><rt>zhōng wén</rt><rp>)</rp></ruby></p>'
    );
    expect(firstQuestion.answer).toBe(
      '<p>Quiz 1, question 1, answer with <ruby>中文<rp>(</rp><rt>zhōng wén</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should render Chinese in quizzes when lang is zh-CN and the text does not contain hanzi (pinyin) format', () => {
    const zhFile = { data: { lang: 'zh-CN' } };
    plugin(chineseQuizzesAST, zhFile);
    const quizzes = zhFile.data.quizzes;

    const firstQuiz = quizzes[0];
    const secondQuestion = firstQuiz.questions[1];
    const thirdQuestion = firstQuiz.questions[2];

    // Quiz 1, Question 2
    expect(secondQuestion.text).toBe(
      '<p>Quiz 1, question 2 with <code>中文</code></p>'
    );
    expect(secondQuestion.distractors[0]).toBe(
      '<p>Quiz 1, question 2, distractor 1 with <code>中文</code></p>'
    );
    expect(secondQuestion.distractors[1]).toBe(
      '<p>Quiz 1, question 2, distractor 2 with <code>中文</code></p>'
    );
    expect(secondQuestion.distractors[2]).toBe(
      '<p>Quiz 1, question 2, distractor 3 with <code>中文</code></p>'
    );
    expect(secondQuestion.answer).toBe(
      '<p>Quiz 1, question 2, answer with <code>中文</code></p>'
    );

    // Quiz 1, Question 3
    expect(thirdQuestion.text).toBe(
      '<p>Quiz 1, question 3 with <code>zhōng wén</code></p>'
    );
    expect(thirdQuestion.distractors[0]).toBe(
      '<p>Quiz 1, question 3, distractor 1 with <code>zhōng wén</code></p>'
    );
    expect(thirdQuestion.distractors[1]).toBe(
      '<p>Quiz 1, question 3, distractor 2 with <code>zhōng wén</code></p>'
    );
    expect(thirdQuestion.distractors[2]).toBe(
      '<p>Quiz 1, question 3, distractor 3 with <code>zhōng wén</code></p>'
    );
    expect(thirdQuestion.answer).toBe(
      '<p>Quiz 1, question 3, answer with <code>zhōng wén</code></p>'
    );
  });
});
