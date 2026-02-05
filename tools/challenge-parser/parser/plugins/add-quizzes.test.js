import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from './../__fixtures__/parse-fixture';
import addQuizzes from './add-quizzes';

describe('add-quizzes plugin', () => {
  let mockQuizzesAST;
  let chineseQuizzesAST;
  let quizzesWithAudioAST;
  const plugin = addQuizzes();
  let file = { data: {} };

  beforeAll(async () => {
    mockQuizzesAST = await parseFixture('with-quizzes.md');
    chineseQuizzesAST = await parseFixture('with-chinese-quizzes.md');
    quizzesWithAudioAST = await parseFixture('with-quizzes-audio.md');
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
      '<p>Quiz 1, question 2 with <span class="highlighted-text">中文</span></p>'
    );
    expect(secondQuestion.distractors[0]).toBe(
      '<p>Quiz 1, question 2, distractor 1 with <span class="highlighted-text">中文</span></p>'
    );
    expect(secondQuestion.distractors[1]).toBe(
      '<p>Quiz 1, question 2, distractor 2 with <span class="highlighted-text">中文</span></p>'
    );
    expect(secondQuestion.distractors[2]).toBe(
      '<p>Quiz 1, question 2, distractor 3 with <span class="highlighted-text">中文</span></p>'
    );
    expect(secondQuestion.answer).toBe(
      '<p>Quiz 1, question 2, answer with <span class="highlighted-text">中文</span></p>'
    );

    // Quiz 1, Question 3
    expect(thirdQuestion.text).toBe(
      '<p>Quiz 1, question 3 with <span class="highlighted-text">zhōng wén</span></p>'
    );
    expect(thirdQuestion.distractors[0]).toBe(
      '<p>Quiz 1, question 3, distractor 1 with <span class="highlighted-text">zhōng wén</span></p>'
    );
    expect(thirdQuestion.distractors[1]).toBe(
      '<p>Quiz 1, question 3, distractor 2 with <span class="highlighted-text">zhōng wén</span></p>'
    );
    expect(thirdQuestion.distractors[2]).toBe(
      '<p>Quiz 1, question 3, distractor 3 with <span class="highlighted-text">zhōng wén</span></p>'
    );
    expect(thirdQuestion.answer).toBe(
      '<p>Quiz 1, question 3, answer with <span class="highlighted-text">zhōng wén</span></p>'
    );
  });

  it('should parse audio sections in quiz questions', () => {
    plugin(quizzesWithAudioAST, file);
    const quizzes = file.data.quizzes;

    expect(Array.isArray(quizzes)).toBe(true);
    expect(quizzes.length).toBe(1);

    const firstQuiz = quizzes[0];
    const firstQuestion = firstQuiz.questions[0];
    const secondQuestion = firstQuiz.questions[1];
    const thirdQuestion = firstQuiz.questions[2];

    // First question has audio with timestamps
    expect(firstQuestion).toHaveProperty('audioData');
    expect(firstQuestion.audioData.audio.filename).toBe(
      'audio-with-timestamps.mp3'
    );
    expect(firstQuestion.audioData.audio.startTime).toBe(1.5);
    expect(firstQuestion.audioData.audio.finishTime).toBe(3.8);
    expect(firstQuestion.audioData.transcript).toEqual([
      {
        character: 'Maria',
        text: 'Hello, how are you?'
      },
      {
        character: 'Tom',
        text: "I'm doing well, thank you."
      }
    ]);
    expect(firstQuestion.text).toBe(
      '<p>Quiz 1, question 1 with audio timestamps</p>'
    );
    expect(firstQuestion.distractors.length).toBe(3);
    expect(firstQuestion.answer).toBe('<p>Quiz 1, question 1, answer</p>');

    // Second question has audio without timestamps
    expect(secondQuestion).toHaveProperty('audioData');
    expect(secondQuestion.audioData.audio.filename).toBe('audio-full-file.mp3');
    expect(secondQuestion.audioData.audio.startTimestamp).toBeUndefined();
    expect(secondQuestion.audioData.audio.finishTimestamp).toBeUndefined();
    expect(secondQuestion.audioData.transcript).toEqual([
      {
        character: 'Speaker',
        text: 'This is the full audio transcript.'
      }
    ]);
    expect(secondQuestion.text).toBe(
      '<p>Quiz 1, question 2 with audio but no timestamps</p>'
    );

    // Third question has no audio
    expect(thirdQuestion.audioData).toBeUndefined();
    expect(thirdQuestion.text).toBe('<p>Quiz 1, question 3 without audio</p>');
  });
});
