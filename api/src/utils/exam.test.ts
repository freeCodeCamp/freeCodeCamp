import { Exam, Question } from '@prisma/client';
import {
  examJson,
  userExam1,
  userExam2,
  userExam3,
  userExam4,
  mockResults1,
  mockResults2,
  mockResults3,
  mockResults4
} from '../../__mocks__/exam';
import { generateRandomExam, createExamResults } from './exam';
import { GeneratedExam } from './exam-types';

describe('Exam helpers', () => {
  describe('generateRandomExam()', () => {
    const randomizedExam: GeneratedExam = generateRandomExam(examJson as Exam);

    it('should have three questions', () => {
      expect(randomizedExam.length).toBe(3);
    });

    it('should have five answers per question', () => {
      randomizedExam.forEach(question => {
        expect(question.answers.length).toBe(5);
      });
    });

    it('should have exactly one correct answer per question', () => {
      randomizedExam.forEach(question => {
        const originalQuestion = examJson.questions.find(
          q => q.id === question.id
        ) as Question;
        const originalCorrectAnswer = originalQuestion.correctAnswers;
        const correctIds = originalCorrectAnswer.map(a => a.id);

        const numberOfCorrectAnswers = question.answers.filter(a =>
          correctIds.includes(a.id)
        );

        expect(numberOfCorrectAnswers).toHaveLength(1);
      });
    });
  });

  describe('createExamResults()', () => {
    const examResults1 = createExamResults(userExam1, examJson as Exam);
    const examResults2 = createExamResults(userExam2, examJson as Exam);
    const examResults3 = createExamResults(userExam3, examJson as Exam);
    const examResults4 = createExamResults(userExam4, examJson as Exam);

    it('failing exam should return correct results', () => {
      expect(examResults1).toEqual(mockResults1);
    });

    it('passing exam should return correct results', () => {
      expect(examResults2).toEqual(mockResults2);
      expect(examResults3).toEqual(mockResults3);
      expect(examResults4).toEqual(mockResults4);
    });
  });
});
