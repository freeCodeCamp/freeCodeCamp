import { type Static } from '@fastify/type-provider-typebox';
import { EnvExam } from '@prisma/client';
import { exam, examAttempt, generatedExam } from '../../../__mocks__/env-exam';
import * as schemas from '../schemas';
import {
  checkAttemptAgainstGeneratedExam,
  constructUserExam,
  generateExam,
  userAttemptToDatabaseAttemptQuestionSets,
  validateAttempt
} from './exam';

function timedoutGenerateExam(ex: EnvExam) {
  const TIMEOUT_IN_MS = 1_000;
  const START_TIME = Date.now();
  // eslint-disable-next-line
  while (true) {
    if (Date.now() - START_TIME > TIMEOUT_IN_MS) {
      throw `Unable to generate 1 valid exam in ${TIMEOUT_IN_MS}ms`;
    }
    try {
      const exam = generateExam(ex);
      return exam;
    } catch (_e) {
      //
    }
  }
}

// NOTE: Whilst the tests could be run against a single generation of exam,
//       it is more useful to run the tests against a new generation each time.
//       This helps ensure the config/logic is _reasonably_ likely to be able to
//       generate a valid exam.
//       Another option is to call `generateExam` hundreds of times in a loop test :shrug:
describe('Exam Environment', () => {
  describe('checkAttemptAgainstGeneratedExam()', () => {
    it('should return true if all questions are answered', () => {
      expect(
        checkAttemptAgainstGeneratedExam(
          examAttempt.questionSets,
          generatedExam
        )
      ).toBe(true);
    });

    it('should return false if one or more questions are not answered', () => {
      const badExamAttempt = structuredClone(examAttempt);

      badExamAttempt.questionSets[0]!.questions[0]!.answers = [];
      expect(
        checkAttemptAgainstGeneratedExam(
          badExamAttempt.questionSets,
          generatedExam
        )
      ).toBe(false);

      badExamAttempt.questionSets[0]!.questions[0]!.answers = ['bad-answer'];
      expect(
        checkAttemptAgainstGeneratedExam(
          badExamAttempt.questionSets,
          generatedExam
        )
      ).toBe(false);

      badExamAttempt.questionSets[0]!.questions = [];
      expect(
        checkAttemptAgainstGeneratedExam(
          badExamAttempt.questionSets,
          generatedExam
        )
      ).toBe(false);
    });
  });
  xdescribe('checkPrequisites()', () => {
    // TODO: Awaiting implementation
  });
  describe('constructUserExam()', () => {
    it('should not provide the answers', () => {
      const userExam = constructUserExam(generatedExam, exam);
      expect(userExam).not.toHaveProperty('answers.isCorrect');
    });
  });

  describe('generateExam()', () => {
    it('should generate a randomized exam without throwing', () => {
      const _randomizedExam = timedoutGenerateExam(exam);
    });

    it('should EVENTUALLY generate an exam matching with the correct number of question sets', () => {
      const generatedExam = timedoutGenerateExam(exam);

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
      const generatedExam = timedoutGenerateExam(exam);

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
      const generatedExam = timedoutGenerateExam(exam);

      const questionIds = generatedExam.questionSets.flatMap(qs =>
        qs.questions.map(q => q.id)
      );

      const duplicateQuestions = questionIds.filter(
        (id, index) => questionIds.indexOf(id) !== index
      );

      expect(duplicateQuestions).toHaveLength(0);
    });

    it('should not generate an exam with duplicate answers', () => {
      const generatedExam = timedoutGenerateExam(exam);

      const answerIds = generatedExam.questionSets.flatMap(qs =>
        qs.questions.flatMap(q => q.answers)
      );

      const duplicateAnswers = answerIds.filter(
        (id, index) => answerIds.indexOf(id) !== index
      );

      expect(duplicateAnswers).toHaveLength(0);
    });

    it('should throw if the exam config is invalid', () => {
      const invalidExam = {
        ...exam,
        config: {
          ...exam.config,
          tags: [
            {
              group: ['non-existant-tag'],
              numberOfQuestions: 1
            }
          ]
        }
      };
      expect(() => timedoutGenerateExam(invalidExam)).toThrow();
    });
  });

  describe('validateAttempt()', () => {
    it('should validate a correct attempt', () => {
      validateAttempt(generatedExam, examAttempt.questionSets);
    });

    it('should invalidate an incorrect attempt', () => {
      const badExamAttempt = structuredClone(examAttempt);
      badExamAttempt.questionSets[0]!.questions[0]!.answers = ['bad-answer'];
      expect(() =>
        validateAttempt(generatedExam, badExamAttempt.questionSets)
      ).toThrow();
    });
  });

  describe('userAttemptToDatabaseAttemptQuestionSets()', () => {
    it('should add submission time to all questions', () => {
      const userAttempt: Static<
        typeof schemas.examEnvironmentPostExamAttempt.body.properties.attempt
      > = {
        examId: '0',
        questionSets: [
          {
            id: '0',
            questions: [{ id: '00', answers: ['000'] }]
          },
          {
            id: '1',
            questions: [{ id: '10', answers: ['100'] }]
          }
        ]
      };
      const latestAttempt = structuredClone(examAttempt);
      latestAttempt.questionSets = [];

      const databaseAttemptQuestionSets =
        userAttemptToDatabaseAttemptQuestionSets(userAttempt, latestAttempt);

      const allQuestions = databaseAttemptQuestionSets.flatMap(
        qs => qs.questions
      );
      expect(allQuestions.every(q => q.submissionTimeInMS)).toBe(true);
    });

    it('should not change the submission time of any questions that have not changed', () => {
      const userAttempt: Static<
        typeof schemas.examEnvironmentPostExamAttempt.body.properties.attempt
      > = {
        examId: '0',
        questionSets: [
          {
            id: '0',
            questions: [{ id: '00', answers: ['000'] }]
          },
          {
            id: '1',
            questions: [{ id: '10', answers: ['100'] }]
          }
        ]
      };
      const latestAttempt = structuredClone(examAttempt);

      const databaseAttemptQuestionSets =
        userAttemptToDatabaseAttemptQuestionSets(userAttempt, latestAttempt);

      const submissionTimes = databaseAttemptQuestionSets.flatMap(qs =>
        qs.questions.map(q => q.submissionTimeInMS)
      );

      const sameAttempt = userAttemptToDatabaseAttemptQuestionSets(
        userAttempt,
        { ...latestAttempt, questionSets: databaseAttemptQuestionSets }
      );

      const sameSubmissionTimes = sameAttempt.flatMap(qs =>
        qs.questions.map(q => q.submissionTimeInMS)
      );

      expect(submissionTimes).toEqual(sameSubmissionTimes);
    });

    it('should change all submission times of questions that have changed', async () => {
      const userAttempt: Static<
        typeof schemas.examEnvironmentPostExamAttempt.body.properties.attempt
      > = {
        examId: '0',
        questionSets: [
          {
            id: '0',
            questions: [{ id: '00', answers: ['000'] }]
          },
          {
            id: '1',
            questions: [{ id: '10', answers: ['100'] }]
          }
        ]
      };
      const latestAttempt = structuredClone(examAttempt);

      const databaseAttemptQuestionSets =
        userAttemptToDatabaseAttemptQuestionSets(userAttempt, latestAttempt);
      userAttempt.questionSets[0]!.questions[0]!.answers = ['001'];

      // The `userAttemptToDatabaseAttemptQuestionSets` function uses `Date.now()`
      // to set the submission time, so we need to wait a bit to ensure differences.
      await new Promise(resolve => setTimeout(resolve, 10));

      const newAttemptQuestionSets = userAttemptToDatabaseAttemptQuestionSets(
        userAttempt,
        {
          ...latestAttempt,
          questionSets: databaseAttemptQuestionSets
        }
      );

      expect(
        newAttemptQuestionSets[0]?.questions[0]?.submissionTimeInMS
      ).not.toEqual(
        databaseAttemptQuestionSets[0]?.questions[0]?.submissionTimeInMS
      );
    });
  });
});
