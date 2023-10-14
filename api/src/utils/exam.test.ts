import { Exam, Question } from '@prisma/client';
import {
  examJson,
  userExam1,
  userExam2,
  mockResults1,
  mockResults2
} from '../../__mocks__/exam';
import { generateRandomExam, createExamResults } from './exam';
import { GeneratedExam, GeneratedQuestion } from './exam-types';

describe('Exam helpers', () => {
  describe('generateRandomExam()', () => {
    const randomizedExam: GeneratedExam = generateRandomExam(examJson as Exam);

    it('should have one question', () => {
      expect(randomizedExam.length).toBe(1);
    });

    it('should have five answers', () => {
      const firstQuestion = randomizedExam[0] as GeneratedQuestion;
      expect(firstQuestion.answers.length).toBe(5);
    });

    it('should have exactly one correct answer', () => {
      const question = randomizedExam[0] as GeneratedQuestion;
      const questionId = question.id;
      const originalQuestion = examJson.questions.find(
        q => q.id === questionId
      ) as Question;
      const originalCorrectAnswer = originalQuestion.correctAnswers;
      const correctIds = originalCorrectAnswer.map(a => a.id);

      const numberOfCorrectAnswers = question.answers.filter(a =>
        correctIds.includes(a.id)
      );

      expect(numberOfCorrectAnswers).toHaveLength(1);
    });
  });

  describe('createExamResults()', () => {
    examJson.numberOfQuestionsInExam = 2;
    const examResults1 = createExamResults(userExam1, examJson as Exam);
    const examResults2 = createExamResults(userExam2, examJson as Exam);

    it('failing exam should return correct results', () => {
      expect(examResults1).toEqual(mockResults1);
    });

    it('passing exam should return correct results', () => {
      expect(examResults2).toEqual(mockResults2);
    });
  });
});
