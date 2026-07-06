/* eslint-disable jsdoc/require-description-complete-sentence */
// TODO: enable this, since strings don't make good errors.
import {
  ExamEnvironmentAnswer,
  ExamEnvironmentExam,
  ExamEnvironmentExamAttempt,
  ExamEnvironmentExamModerationStatus,
  ExamEnvironmentGeneratedExam,
  ExamEnvironmentGeneratedMultipleChoiceQuestion,
  ExamEnvironmentMultipleChoiceQuestion,
  ExamEnvironmentMultipleChoiceQuestionAttempt,
  ExamEnvironmentQuestionSet,
  ExamEnvironmentQuestionSetAttempt
} from '@prisma/client';
import type { FastifyBaseLogger, FastifyInstance } from 'fastify';
import { type Static } from '@fastify/type-provider-typebox';
import { omit } from 'lodash-es';
import * as schemas from '../schemas/index.js';
import { mapErr } from '../../utils/index.js';
import { ExamAttemptStatus } from '../schemas/exam-environment-exam-attempt.js';
import { ERRORS } from './errors.js';

interface PartialUser {
  completedChallenges: { id: string }[];
  isHonest: boolean | null;
}

/**
 * Checks if all exam prerequisites have been met by the user:
 * - completed challenges linked to exam
 * - user is required to have accepted the academic honesty policy
 */
export function checkPrerequisites(
  user: PartialUser,
  prerequisites: ExamEnvironmentExam['prerequisites']
) {
  return (
    user.isHonest &&
    prerequisites.every(p => user.completedChallenges.some(c => c.id === p))
  );
}

export type UserExam = Omit<
  ExamEnvironmentExam,
  'questionSets' | 'config' | 'id' | 'prerequisites' | 'deprecated' | 'version'
> & {
  config: Omit<ExamEnvironmentExam['config'], 'tags' | 'questionSets'>;
  questionSets: (Omit<ExamEnvironmentQuestionSet, 'questions'> & {
    questions: (Omit<
      ExamEnvironmentMultipleChoiceQuestion,
      'answers' | 'tags' | 'deprecated'
    > & {
      answers: Omit<ExamEnvironmentAnswer, 'isCorrect'>[];
    })[];
  })[];
} & { generatedExamId: string; examId: string };

/**
 * Takes the generated exam and the original exam, and creates the user-facing exam.
 */
export function constructUserExam(
  generatedExam: ExamEnvironmentGeneratedExam,
  exam: ExamEnvironmentExam
): UserExam {
  // Map generated exam to user exam (a.k.a. public exam information for user)
  const userQuestionSets = generatedExam.questionSets.map(gqs => {
    // Get matching question from `exam`, but remove `is_correct` from `exam.questions[].answers[]`
    const examQuestionSet = exam.questionSets.find(eqs => eqs.id === gqs.id);
    if (!examQuestionSet) {
      throw new Error(
        `Unreachable. Generated question set id ${gqs.id} not found in exam ${exam.id}.`
      );
    }

    const { questions } = examQuestionSet;

    const userQuestions = gqs.questions.map(gq => {
      const examQuestion = questions.find(eq => eq.id === gq.id);
      if (!examQuestion) {
        throw new Error(
          `Unreachable. Generated question id ${gq.id} not found in exam question set ${examQuestionSet.id}.`
        );
      }

      // Remove `isCorrect` from question answers
      const answers = gq.answers.map(generatedAnswerId => {
        const examAnswer = examQuestion.answers.find(
          ea => ea.id === generatedAnswerId
        );
        if (!examAnswer) {
          throw new Error(
            `Unreachable. Generated answer id ${generatedAnswerId} not found in exam question ${examQuestion.id}.`
          );
        }

        const { isCorrect: _, ...answer } = examAnswer;
        return answer;
      });

      // NOTE: Shuffling here means when saved attempt is re-fetched, answers will be in different order.
      const shuffledAnswers = shuffleArray(answers);

      return {
        id: examQuestion.id,
        audio: examQuestion.audio,
        text: examQuestion.text,
        answers: shuffledAnswers
      };
    });

    const userQuestionSet = {
      type: examQuestionSet.type,
      questions: userQuestions,
      id: examQuestionSet.id,
      context: examQuestionSet.context
    };
    return userQuestionSet;
  });

  // Order questionSets in same order as original exam
  const orderedUserQuestionSets = userQuestionSets.sort((a, b) => {
    return (
      exam.questionSets.findIndex(qs => qs.id === a.id) -
      exam.questionSets.findIndex(qs => qs.id === b.id)
    );
  });

  const config = {
    totalTimeInS: exam.config.totalTimeInS,
    name: exam.config.name,
    note: exam.config.note,
    retakeTimeInS: exam.config.retakeTimeInS,
    passingPercent: exam.config.passingPercent
  };

  const userExam: UserExam = {
    examId: exam.id,
    generatedExamId: generatedExam.id,
    config,
    questionSets: orderedUserQuestionSets
  };

  return userExam;
}

/**
 * Ensures all questions and answers in the attempt are from the generated exam.
 */
export function validateAttempt(
  generatedExam: ExamEnvironmentGeneratedExam,
  questionSets: ExamEnvironmentExamAttempt['questionSets']
) {
  for (const attemptQuestionSet of questionSets) {
    const generatedQuestionSet = generatedExam.questionSets.find(
      qt => qt.id === attemptQuestionSet.id
    );
    if (!generatedQuestionSet) {
      throw new Error(
        `Question type ${attemptQuestionSet.id} not found in generated exam.`
      );
    }

    for (const attemptQuestion of attemptQuestionSet.questions) {
      const generatedQuestion = generatedQuestionSet.questions.find(
        q => q.id === attemptQuestion.id
      );
      if (!generatedQuestion) {
        throw new Error(
          `Question ${attemptQuestion.id} not found in generated exam.`
        );
      }

      for (const attemptAnswer of attemptQuestion.answers) {
        const generatedAnswer = generatedQuestion.answers.find(
          a => a === attemptAnswer
        );
        if (!generatedAnswer) {
          throw new Error(
            `Answer ${attemptAnswer} not found in generated exam.`
          );
        }
      }
    }
  }

  return true;
}

/**
 * Checks all question sets and questions in the generated exam are in the attempt.
 *
 * TODO: Consider throwing with specific issue.
 *
 * @param questionSets An exam attempt.
 * @param generatedExam The corresponding generated exam.
 * @returns Whether or not the attempt can be considered finished.
 */
export function checkAttemptAgainstGeneratedExam(
  questionSets: ExamEnvironmentQuestionSetAttempt[],
  generatedExam: Pick<ExamEnvironmentGeneratedExam, 'questionSets'>
): boolean {
  // Check all question sets and questions are in generated exam
  for (const generatedQuestionSet of generatedExam.questionSets) {
    const attemptQuestionSet = questionSets.find(
      q => q.id === generatedQuestionSet.id
    );
    if (!attemptQuestionSet) {
      return false;
    }

    for (const generatedQuestion of generatedQuestionSet.questions) {
      const attemptQuestion = attemptQuestionSet.questions.find(
        q => q.id === generatedQuestion.id
      );
      if (!attemptQuestion) {
        return false;
      }

      const atLeastOneAnswer = attemptQuestion.answers.length > 0;
      if (!atLeastOneAnswer) {
        return false;
      }

      // All answers in attempt must be in generated exam
      const allAnswersInGeneratedExam = attemptQuestion.answers.every(a =>
        generatedQuestion.answers.includes(a)
      );
      if (!allAnswersInGeneratedExam) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Adds the current time submission time to all questions in the attempt if the question answer has changed.
 */
export function userAttemptToDatabaseAttemptQuestionSets(
  userAttempt: Static<
    typeof schemas.examEnvironmentPostExamAttempt.body.properties.attempt
  >,
  latestAttempt: ExamEnvironmentExamAttempt
): ExamEnvironmentExamAttempt['questionSets'] {
  const databaseAttemptQuestionSets: ExamEnvironmentExamAttempt['questionSets'] =
    [];

  for (const questionSet of userAttempt.questionSets) {
    const latestQuestionSet = latestAttempt.questionSets.find(
      qs => qs.id === questionSet.id
    );

    // If no latest attempt, add submission time to all questions
    if (!latestQuestionSet) {
      databaseAttemptQuestionSets.push({
        ...questionSet,
        questions: questionSet.questions.map(q => {
          return {
            ...q,
            submissionTime: new Date()
          };
        })
      });
    } else {
      const databaseAttemptQuestionSet = {
        ...questionSet,
        questions: questionSet.questions.map(q => {
          const latestQuestion = latestQuestionSet.questions.find(
            lq => lq.id === q.id
          );

          // If no latest question, add submission time
          if (!latestQuestion) {
            return {
              ...q,
              submissionTime: new Date()
            };
          }

          // If answers have changed, add submission time
          if (
            JSON.stringify(q.answers) !== JSON.stringify(latestQuestion.answers)
          ) {
            return {
              ...q,
              submissionTime: new Date()
            };
          }

          return latestQuestion;
        })
      };

      databaseAttemptQuestionSets.push(databaseAttemptQuestionSet);
    }
  }

  return databaseAttemptQuestionSets;
}

/**
 * Calculates the number of correct questions over the number of the total questions given for an attempt.
 * @returns The score of the exam attempt as a percentage.
 */
export function calculateScore(
  exam: ExamEnvironmentExam,
  generatedExam: ExamEnvironmentGeneratedExam,
  attempt: ExamEnvironmentExamAttempt
) {
  const attemptQuestionSets = attempt.questionSets;
  const generatedQuestionSets = generatedExam.questionSets;

  const totalQuestions = generatedQuestionSets.reduce(
    (total, attemptQuestionSet) => total + attemptQuestionSet.questions.length,
    0
  );
  let correctQuestions = 0;
  for (const attemptQuestionSet of attemptQuestionSets) {
    const examQuestionSet = exam.questionSets.find(
      ({ id }) => id === attemptQuestionSet.id
    );
    if (!examQuestionSet) {
      throw new Error(
        `Attempt question set ${attemptQuestionSet.id} must exist in exam ${exam.id}`
      );
    }

    const generatedQuestionSet = generatedQuestionSets.find(
      ({ id }) => id === attemptQuestionSet.id
    );
    if (!generatedQuestionSet) {
      throw new Error(
        `Generated question set ${attemptQuestionSet.id} must exist in generated exam ${generatedExam.id}`
      );
    }

    const attemptQuestions = attemptQuestionSet.questions;
    const examQuestions = examQuestionSet.questions;
    const generatedQuestions = generatedQuestionSet.questions;
    for (const attemptQuestion of attemptQuestions) {
      const examQuestion = examQuestions.find(
        ({ id }) => id === attemptQuestion.id
      );
      if (!examQuestion) {
        throw new Error(
          `Attempt question ${attemptQuestion.id} must exist in exam ${exam.id}`
        );
      }

      const generatedQuestion = generatedQuestions.find(
        ({ id }) => id === attemptQuestion.id
      );
      if (!generatedQuestion) {
        throw new Error(
          `Generated question ${attemptQuestion.id} must exist in generated exam ${generatedExam.id}`
        );
      }

      const isQuestionCorrect = compareAnswers(
        examQuestion.answers,
        generatedQuestion.answers,
        attemptQuestion.answers
      );

      if (isQuestionCorrect) {
        correctQuestions += 1;
      }
    }
  }

  return (correctQuestions / totalQuestions) * 100;
}

/**
 * NOTE: The answers of an attempt is an array for future-proofing when
 * checkbox questions are needed.
 *
 * This calculation takes x / y , x < y as wholey incorrect.
 */
export function compareAnswers(
  examAnswers: ExamEnvironmentAnswer[],
  generatedAnswers: ExamEnvironmentGeneratedMultipleChoiceQuestion['answers'],
  attemptAnswers: ExamEnvironmentMultipleChoiceQuestionAttempt['answers']
): boolean {
  const correctGeneratedAnswers = generatedAnswers.filter(generatedAnswer => {
    return examAnswers.some(
      examAnswer => examAnswer.isCorrect && examAnswer.id === generatedAnswer
    );
  });
  // Check every attempt question answer == every generated question answer
  const isQuestionCorrect =
    correctGeneratedAnswers.every(correctAnswer =>
      attemptAnswers.includes(correctAnswer)
    ) && correctGeneratedAnswers.length == attemptAnswers.length;

  return isQuestionCorrect;
}

/* eslint-disable jsdoc/require-description-complete-sentence */
/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * https://bost.ocks.org/mike/shuffle/
 */
export function shuffleArray<T>(array: Array<T>) {
  const arr = structuredClone(array);
  let m = arr.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m]!;
    arr[m] = arr[i]!;
    arr[i] = t;
  }

  return arr;
}
/* eslint-enable jsdoc/require-description-complete-sentence */

/**
 * From an exam attempt, construct the attempt with result (if ready).
 *
 * @param fastify - Fastify instance.
 * @param attempt - The exam attempt.
 * @param logger - Logger instance.
 * @returns The exam attempt with result or an error.
 */
export async function constructEnvExamAttempt(
  fastify: FastifyInstance,
  attempt: ExamEnvironmentExamAttempt,
  logger: FastifyBaseLogger
) {
  const maybeExam = await mapErr(
    fastify.prisma.examEnvironmentExam.findUnique({
      where: {
        id: attempt.examId
      }
    })
  );

  if (maybeExam.hasError) {
    fastify.Sentry?.captureException(maybeExam.error);
    logger.error(
      { err: maybeExam.error, attemptId: attempt.id, examId: attempt.examId },
      'Unable to query exam.'
    );
    return {
      error: {
        code: 500,
        data: ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
      }
    };
  }

  const exam = maybeExam.data;

  if (exam === null) {
    fastify.Sentry?.captureException({
      data: { examId: attempt.examId, attemptId: attempt.id },
      message: 'Unreachable. Invalid exam id in attempt.'
    });
    logger.error(
      { examId: attempt.examId, attemptId: attempt.id },
      'Unreachable. Invalid exam id in attempt.'
    );

    return {
      error: {
        code: 500,
        data: ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM(
          'Unreachable. Invalid exam id in attempt.'
        )
      }
    };
  }

  // If attempt is still in progress, return without result
  const attemptStartTimeInMS = attempt.startTime.getTime();
  const examTotalTimeInMS = exam.config.totalTimeInS * 1000;
  const isAttemptExpired =
    attemptStartTimeInMS + examTotalTimeInMS < Date.now();
  if (!isAttemptExpired) {
    return {
      examEnvironmentExamAttempt: {
        ...omitAttemptReferenceIds(attempt),
        result: null,
        status: ExamAttemptStatus.InProgress
      },
      error: null
    };
  }

  const maybeMod = await mapErr(
    fastify.prisma.examEnvironmentExamModeration.findFirst({
      where: {
        examAttemptId: attempt.id
      }
    })
  );

  if (maybeMod.hasError) {
    fastify.Sentry?.captureException(maybeMod.error);
    logger.error(
      { err: maybeMod.error, attemptId: attempt.id },
      'Unable to query exam moderation.'
    );
    return {
      error: {
        code: 500,
        data: ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeMod.error))
      }
    };
  }

  const moderation = maybeMod.data;

  // Attempt has expired, but moderation record does not exist
  if (moderation === null) {
    return {
      examEnvironmentExamAttempt: {
        ...omitAttemptReferenceIds(attempt),
        result: null,
        status: ExamAttemptStatus.Expired
      },
      error: null
    };
  }

  // If attempt is completed, but has not been graded, return without result
  if (moderation.status === ExamEnvironmentExamModerationStatus.Pending) {
    return {
      examEnvironmentExamAttempt: {
        ...omitAttemptReferenceIds(attempt),
        result: null,
        status: ExamAttemptStatus.PendingModeration
      },
      error: null
    };
  }

  // If attempt is completed, but has been determined to need a retake
  // TODO: Send moderation.feedback?
  if (moderation.status === ExamEnvironmentExamModerationStatus.Denied) {
    return {
      examEnvironmentExamAttempt: {
        ...omitAttemptReferenceIds(attempt),
        result: null,
        status: ExamAttemptStatus.Denied
      },
      error: null
    };
  }

  const maybeGeneratedExam = await mapErr(
    fastify.prisma.examEnvironmentGeneratedExam.findUnique({
      where: {
        id: attempt.generatedExamId
      }
    })
  );

  if (maybeGeneratedExam.hasError) {
    fastify.Sentry?.captureException(maybeGeneratedExam.error);
    logger.error(
      { err: maybeGeneratedExam.error, attemptId: attempt.id },
      'Unable to query generated exam.'
    );
    return {
      error: {
        code: 500,
        data: ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
          JSON.stringify(maybeGeneratedExam.error)
        )
      }
    };
  }

  const generatedExam = maybeGeneratedExam.data;

  if (!generatedExam) {
    fastify.Sentry?.captureException({
      data: {
        attemptId: attempt.id,
        generatedExamId: attempt.generatedExamId
      },
      message:
        'Unreachable. Unable to find generated exam associated with exam attempt'
    });
    logger.error(
      { attemptId: attempt.id, generatedExamId: attempt.generatedExamId },
      'Unreachable. Unable to find generated exam associated with exam attempt.'
    );
    return {
      error: {
        code: 500,
        data: ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
          'Unreachable. Unable to find generated exam associated with exam attempt'
        )
      }
    };
  }

  const score = calculateScore(exam, generatedExam, attempt);

  const result = {
    score,
    passingPercent: exam.config.passingPercent
  };

  const examEnvironmentExamAttempt = {
    ...omitAttemptReferenceIds(attempt),
    result,
    status: ExamAttemptStatus.Approved
  };
  return { error: null, examEnvironmentExamAttempt };
}

function omitAttemptReferenceIds(attempt: ExamEnvironmentExamAttempt) {
  return omit(attempt, ['generatedExamId', 'userId']);
}
