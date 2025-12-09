import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import {
  ExamEnvironmentAnswer,
  ExamEnvironmentQuestionType
} from '@prisma/client';
import { type Static } from '@fastify/type-provider-typebox';
import {
  exam,
  examAttempt,
  generatedExam,
  oid
} from '../../../__mocks__/exam-environment-exam.js';
import * as schemas from '../schemas/index.js';
import { setupServer } from '../../../vitest.utils.js';
import {
  checkAttemptAgainstGeneratedExam,
  checkPrerequisites,
  constructUserExam,
  generateExam,
  userAttemptToDatabaseAttemptQuestionSets,
  validateAttempt,
  compareAnswers,
  shuffleArray
} from './exam-environment.js';

// NOTE: Whilst the tests could be run against a single generation of exam,
//       it is more useful to run the tests against a new generation each time.
//       This helps ensure the config/logic is _reasonably_ likely to be able to
//       generate a valid exam.
//       Another option is to call `generateExam` hundreds of times in a loop test :shrug:
describe('Exam Environment mocked Math.random', () => {
  let spy: ReturnType<typeof vi.spyOn>;
  beforeAll(() => {
    spy = vi.spyOn(Math, 'random').mockReturnValue(0.123456789);
  });
  afterAll(() => {
    spy.mockRestore();
  });
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

  describe('checkPrequisites()', () => {
    it("should return true if all items in the second argument exist in the first argument's `.completedChallenges[].id`", () => {
      const user = {
        completedChallenges: [{ id: '1' }, { id: '2' }]
      };
      const prerequisites = ['1', '2'];

      expect(checkPrerequisites(user, prerequisites)).toBe(true);
    });

    it("should return false if any items in the second argument do not exist in the first argument's `.completedChallenges[].id`", () => {
      const user = {
        completedChallenges: [{ id: '2' }]
      };
      const prerequisites = ['1', '2'];

      expect(checkPrerequisites(user, prerequisites)).toBe(false);
    });
  });

  describe('generateExam()', () => {
    it('should generate a randomized exam without throwing', () => {
      expect(() => generateExam(exam)).not.toThrow();
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
      expect(() => generateExam(invalidExam)).toThrow();
    });
  });

  describe('validateAttempt()', () => {
    it('should validate a correct attempt', () => {
      expect(() =>
        validateAttempt(generatedExam, examAttempt.questionSets)
      ).not.toThrow();
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
      expect(allQuestions.every(q => q.submissionTime)).toBe(true);
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
        qs.questions.map(q => q.submissionTime)
      );

      const sameAttempt = userAttemptToDatabaseAttemptQuestionSets(
        userAttempt,
        { ...latestAttempt, questionSets: databaseAttemptQuestionSets }
      );

      const sameSubmissionTimes = sameAttempt.flatMap(qs =>
        qs.questions.map(q => q.submissionTime)
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
        newAttemptQuestionSets[0]?.questions[0]?.submissionTime
      ).not.toEqual(
        databaseAttemptQuestionSets[0]?.questions[0]?.submissionTime
      );
    });
  });

  describe('compareAnswers()', () => {
    it('should return true when only all correct answers are attempted', () => {
      const examAnswers: ExamEnvironmentAnswer[] = [
        {
          id: '0',
          isCorrect: true,
          text: ''
        },
        {
          id: '1',
          isCorrect: true,
          text: ''
        },
        {
          id: '2',
          isCorrect: false,
          text: ''
        },
        {
          id: '3',
          isCorrect: false,
          text: ''
        }
      ];
      const generatedAnswers = ['0', '1', '2', '3'];
      const attemptAnswers = ['0', '1'];
      const isCorrect = compareAnswers(
        examAnswers,
        generatedAnswers,
        attemptAnswers
      );

      expect(isCorrect).toBe(true);
    });

    it('should return false when any incorrect answers are attempted', () => {
      const examAnswers: ExamEnvironmentAnswer[] = [
        {
          id: '0',
          isCorrect: true,
          text: ''
        },
        {
          id: '1',
          isCorrect: true,
          text: ''
        },
        {
          id: '2',
          isCorrect: false,
          text: ''
        },
        {
          id: '3',
          isCorrect: false,
          text: ''
        }
      ];
      const generatedAnswers = ['0', '1', '2', '3'];
      const attemptAnswers = ['0', '2'];
      const isCorrect = compareAnswers(
        examAnswers,
        generatedAnswers,
        attemptAnswers
      );

      expect(isCorrect).toBe(false);
    });
  });
});

describe('Exam Environment', () => {
  describe('constructUserExam()', () => {
    it('should not provide the answers', () => {
      const userExam = constructUserExam(generatedExam, exam);
      expect(userExam).not.toHaveProperty('answers.isCorrect');
    });
  });

  describe('shuffleArray()', () => {
    it('reasonably shuffles an array', () => {
      const unshuff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const shuff = shuffleArray(unshuff);

      expect(shuff).not.toEqual(unshuff);
    });

    it('does not mutate the input', () => {
      const unshuff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      shuffleArray(unshuff);

      expect(unshuff).toEqual(unshuff);
    });
  });
});

describe('Exam Environment Schema', () => {
  setupServer();
  describe('ExamEnvironmentExam', () => {
    afterAll(async () => {
      await fastifyTestInstance.prisma.examEnvironmentExam.deleteMany({});
    });

    // eslint-disable-next-line vitest/expect-expect
    it("If this test fails and you've deliberately altered the schema, then increment the `version` field by 1", async () => {
      const configQuestionSets = [
        {
          numberOfCorrectAnswers: 0,
          numberOfIncorrectAnswers: 0,
          numberOfQuestions: 0,
          numberOfSet: 0,
          type: ExamEnvironmentQuestionType.MultipleChoice
        }
      ];
      const tags = [
        {
          group: [''],
          numberOfQuestions: 0
        }
      ];
      const config = {
        name: '',
        note: '',
        passingPercent: 0.0,
        questionSets: configQuestionSets,
        retakeTimeInS: 0,
        tags,
        totalTimeInS: 0
      };

      const questions = [
        {
          answers: [
            {
              id: oid(),
              isCorrect: false,
              text: ''
            }
          ],
          audio: { captions: '', url: '' },
          deprecated: false,
          id: oid(),
          tags: [''],
          text: ''
        }
      ];
      const questionSets = [
        {
          context: '',
          id: oid(),
          questions,
          type: ExamEnvironmentQuestionType.MultipleChoice
        }
      ];
      const data = {
        config,
        deprecated: false,
        prerequisites: [oid()],
        questionSets
      };

      await fastifyTestInstance.prisma.examEnvironmentExam.create({
        data
      });
    });
  });
  describe('ExamEnvironmentGeneratedExam', () => {
    afterAll(async () => {
      await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.deleteMany(
        {}
      );
    });
    // eslint-disable-next-line vitest/expect-expect
    it("If this test fails and you've deliberately altered the schema, then increment the `version` field by 1", async () => {
      await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.create({
        data: {
          deprecated: false,
          examId: oid(),
          questionSets: [
            { id: oid(), questions: [{ answers: [oid()], id: oid() }] }
          ]
        }
      });
    });
  });
  describe('ExamEnvironmentExamAttempt', () => {
    afterAll(async () => {
      await fastifyTestInstance.prisma.examEnvironmentExamAttempt.deleteMany(
        {}
      );
    });
    // eslint-disable-next-line vitest/expect-expect
    it("If this test fails and you've deliberately altered the schema, then increment the `version` field by 1", async () => {
      await fastifyTestInstance.prisma.examEnvironmentExamAttempt.create({
        data: {
          examId: oid(),
          generatedExamId: oid(),
          examModerationId: null,
          questionSets: [
            {
              id: oid(),
              questions: [
                {
                  answers: [oid()],
                  id: oid(),
                  submissionTime: new Date()
                }
              ]
            }
          ],
          startTime: new Date(),
          userId: oid()
        }
      });
    });
  });
});
