import { Exam, Question } from '@prisma/client';
import {
  examJson,
  examWithZeroCorrect,
  examWithOneCorrect,
  examWithTwoCorrect,
  examWithAllCorrect,
  mockResultsZeroCorrect,
  mockResultsOneCorrect,
  mockResultsTwoCorrect,
  mockResultsAllCorrect
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
    const examResults1 = createExamResults(
      examWithZeroCorrect,
      examJson as Exam
    );
    const examResults2 = createExamResults(
      examWithOneCorrect,
      examJson as Exam
    );
    const examResults3 = createExamResults(
      examWithTwoCorrect,
      examJson as Exam
    );
    const examResults4 = createExamResults(
      examWithAllCorrect,
      examJson as Exam
    );

    it('failing exam should return correct results', () => {
      expect(examResults1).toEqual(mockResultsZeroCorrect);
    });

    it('passing exam should return correct results', () => {
      expect(examResults2).toEqual(mockResultsOneCorrect);
      expect(examResults3).toEqual(mockResultsTwoCorrect);
      expect(examResults4).toEqual(mockResultsAllCorrect);
    });
  });
});
