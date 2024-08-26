import { EnvExamAttempt } from '@prisma/client';
import { exam, examAttempt, generatedExam } from '../../../__mocks__/env-exam';
import {
  checkAttemptAgainstGeneratedExam,
  constructUserExam,
  generateExam,
  validateAttempt
} from './exam';

// NOTE: Whilst the tests could be run against a single generation of exam,
//       it is more useful to run the tests against a new generation each time.
//       This helps ensure the config/logic is _reasonably_ likely to be able to
//       generate a valid exam.
//       Another option is to call `generateExam` hundreds of times in a loop test :shrug:
describe('Exam Environment', () => {
  describe('checkAttemptAgainstGeneratedExam()', () => {
    it('should return true if all questions are answered', () => {
      expect(checkAttemptAgainstGeneratedExam(examAttempt, generatedExam)).toBe(
        true
      );
    });

    it('should return false if one or more questions are not answered', () => {
      const badExamAttempt = JSON.parse(
        JSON.stringify(examAttempt)
      ) as EnvExamAttempt;

      badExamAttempt.questionSets[0]!.questions[0]!.answers = [];
      expect(
        checkAttemptAgainstGeneratedExam(badExamAttempt, generatedExam)
      ).toBe(false);

      badExamAttempt.questionSets[0]!.questions[0]!.answers = ['bad-answer'];
      expect(
        checkAttemptAgainstGeneratedExam(badExamAttempt, generatedExam)
      ).toBe(false);

      badExamAttempt.questionSets[0]!.questions = [];
      expect(
        checkAttemptAgainstGeneratedExam(badExamAttempt, generatedExam)
      ).toBe(false);
    });
  });
  xdescribe('checkPrequisites()', () => {});
  describe('constructUserExam()', () => {
    it('should not provide the answers', () => {
      const userExam = constructUserExam(generatedExam, exam);
      expect(userExam).not.toHaveProperty('answers.isCorrect');
    });
  });

  describe('generateExam()', () => {
    it('should generate a randomized exam without throwing', () => {
      const _randomizedExam = generateExam(exam);
    });

    it('should generate an exam matching with the correct number of question sets', () => {
      const generatedExam = generateExam(exam);

      // { [type]: numberOfType }
      // E.g. { MultipleChoice: 2, Dialogue: 1 }
      const generatedNumberOfSets = generatedExam.questionSets.reduce(
        (acc, curr) => {
          const eqs = exam.questionSets.find(eqs => eqs.id === curr.id);

          if (!eqs) {
            throw new Error('Generated question set not found in exam config');
          }

          return {
            ...acc,
            [eqs.type]: (acc[eqs.type] || 0) + 1
          };
        },
        {} as Record<string, number>
      );

      const configNumberOfSets = exam.config.questionSets.reduce(
        (acc, curr) => {
          return {
            ...acc,
            [curr.type]: (acc[curr.type] || 0) + curr.numberOfSet
          };
        },
        {} as Record<string, number>
      );

      expect(generatedNumberOfSets).toEqual(configNumberOfSets);
    });

    it('should not generate any deprecated questions', () => {
      const generatedExam = generateExam(exam);

      const allQuestions = exam.questionSets.flatMap(qs => qs.questions);

      const deprecatedQuestions = generatedExam.questionSets
        .flatMap(qs => qs.questions)
        .filter(q => {
          const eq = allQuestions.find(eq => eq.id === q.id);
          if (!eq) {
            throw new Error('Generated question not found in exam');
          }
          return eq.deprecated;
        });

      expect(deprecatedQuestions).toHaveLength(0);
    });

    it('should not generate an exam with duplicate questions', () => {
      const generatedExam = generateExam(exam);

      const questionIds = generatedExam.questionSets.flatMap(qs =>
        qs.questions.map(q => q.id)
      );

      const duplicateQuestions = questionIds.filter(
        (id, index) => questionIds.indexOf(id) !== index
      );

      expect(duplicateQuestions).toHaveLength(0);
    });

    it('should not generate an exam with duplicate answers', () => {
      const generatedExam = generateExam(exam);

      const answerIds = generatedExam.questionSets.flatMap(qs =>
        qs.questions.flatMap(q => q.answers)
      );

      const duplicateAnswers = answerIds.filter(
        (id, index) => answerIds.indexOf(id) !== index
      );

      expect(duplicateAnswers).toHaveLength(0);
    });
  });

  describe('validateAttempt()', () => {
    it('should validate a correct attempt', () => {
      validateAttempt(generatedExam, examAttempt);
    });

    it('should invalidate an incorrect attempt', () => {
      const badExamAttempt = JSON.parse(
        JSON.stringify(examAttempt)
      ) as EnvExamAttempt;
      badExamAttempt.questionSets[0]!.questions[0]!.answers = ['bad-answer'];
      expect(() => validateAttempt(generatedExam, badExamAttempt)).toThrow();
    });
  });
});
