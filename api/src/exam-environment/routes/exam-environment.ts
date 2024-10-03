/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas';
import { mapErr, syncMapErr, UpdateReqType } from '../../utils';
import { JWT_SECRET } from '../../utils/env';
import {
  checkAttemptAgainstGeneratedExam,
  checkPrerequisites,
  constructUserExam,
  userAttemptToDatabaseAttemptQuestionSets,
  validateAttempt
} from '../utils/exam';
import { ERRORS } from '../utils/errors';

/**
 * Wrapper for endpoints related to the exam environment desktop app.
 *
 * Requires exam environment authorization token to be validated.
 */
export const examEnvironmentValidatedTokenRoutes: FastifyPluginCallbackTypebox =
  (fastify, _options, done) => {
    fastify.post(
      '/exam-environment/exam/generated-exam',
      {
        schema: schemas.examEnvironmentPostExamGeneratedExam
      },
      postExamGeneratedExamHandler
    );
    fastify.post(
      '/exam-environment/exam/attempt',
      {
        schema: schemas.examEnvironmentPostExamAttempt
      },
      postExamAttemptHandler
    );
    fastify.post(
      '/exam-environment/screenshot',
      {
        schema: schemas.examEnvironmentPostScreenshot
      },
      postScreenshotHandler
    );
    done();
  };

/**
 * Wrapper for endpoints related to the exam environment desktop app.
 *
 * Does not require exam environment authorization token to be validated.
 */
export const examEnvironmentOpenRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/exam-environment/token/verify',
    {
      schema: schemas.examEnvironmentTokenVerify
    },
    tokenVerifyHandler
  );
  done();
};

interface JwtPayload {
  examEnvironmentAuthorizationToken: string;
}

/**
 * Verify an authorization token has been generated for a user.
 *
 * Does not require any authentication.
 *
 * **Note**: This has no guarantees of which user the token is for. Just that one exists in the database.
 */
async function tokenVerifyHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentTokenVerify>,
  reply: FastifyReply
) {
  const { 'exam-environment-authorization-token': encodedToken } = req.headers;

  try {
    jwt.verify(encodedToken, JWT_SECRET);
  } catch (e) {
    // TODO: What to send back here? Request is valid, but token is not?
    void reply.code(200);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(JSON.stringify(e))
    );
  }

  const payload = jwt.decode(encodedToken) as JwtPayload;

  const examEnvironmentAuthorizationToken =
    payload.examEnvironmentAuthorizationToken;

  const token = await this.prisma.examEnvironmentAuthorizationToken.findFirst({
    where: {
      id: examEnvironmentAuthorizationToken
    }
  });

  if (!token) {
    void reply.code(200);
    return reply.send({
      data: 'Token does not appear to have been created.'
    });
  } else {
    void reply.code(200);
    return reply.send({
      data: {
        createdDate: token.createdDate
      }
    });
  }
}

/**
 * Generates an exam for the user.
 *
 * Requires token to be validated and TODO: live longer than the exam attempt.
 */
async function postExamGeneratedExamHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostExamGeneratedExam>,
  reply: FastifyReply
) {
  // Get exam from DB
  const examId = req.body.examId;
  const maybeExam = await mapErr(
    this.prisma.envExam.findUnique({
      where: {
        id: examId
      }
    })
  );
  if (maybeExam.hasError) {
    if (maybeExam.error instanceof PrismaClientValidationError) {
      void reply.code(400);
      return reply.send(ERRORS.FCC_EINVAL_EXAM_ID(maybeExam.error.message));
    }

    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (!exam) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  // Check user has completed prerequisites
  const user = req.user!;
  const isExamPrerequisitesMet = checkPrerequisites(user, true);

  if (!isExamPrerequisitesMet) {
    void reply.code(403);
    // TODO: Consider sending unmet prerequisites
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_PREREQUISITES(
        'User has not completed prerequisites.'
      )
    );
  }

  // Check user has not completed exam in last 24 hours
  const maybeExamAttempts = await mapErr(
    this.prisma.envExamAttempt.findMany({
      where: {
        userId: user.id,
        examId: exam.id
      }
    })
  );

  if (maybeExamAttempts.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExamAttempts.error))
    );
  }

  const examAttempts = maybeExamAttempts.data;

  const lastAttempt = examAttempts.length
    ? examAttempts.reduce((latest, current) =>
        latest.startTimeInMS > current.startTimeInMS ? latest : current
      )
    : null;

  if (lastAttempt) {
    const attemptIsExpired =
      lastAttempt.startTimeInMS + exam.config.totalTimeInMS < Date.now();
    if (attemptIsExpired) {
      // If exam is not submitted, use exam start time + time allocated for exam
      const effectiveSubmissionTime =
        lastAttempt.submissionTimeInMS ??
        lastAttempt.startTimeInMS + exam.config.totalTimeInMS;
      const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;

      if (effectiveSubmissionTime > twentyFourHoursAgo) {
        void reply.code(429);
        // TODO: Consider sending last completed time
        return reply.send(
          ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_PREREQUISITES(
            'User has completed exam too recently to retake.'
          )
        );
      }
    } else {
      // Camper has started an attempt, but not submitted it, and there is still time left to complete it.
      // This is most likely to happen if the Camper's app closes and is reopened.
      // Send the Camper back to the exam they were working on.
      const generated = await mapErr(
        this.prisma.envGeneratedExam.findFirst({
          where: {
            id: lastAttempt.generatedExamId
          }
        })
      );

      if (generated.hasError) {
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(generated.error))
        );
      }

      if (generated.data === null) {
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
            'Unreachable. Generated exam not found.'
          )
        );
      }

      const userExam = constructUserExam(generated.data, exam);

      return reply.send({
        data: {
          exam: userExam,
          examAttempt: lastAttempt
        }
      });
    }
  }

  // Randomly pick a generated exam for user
  const maybeGeneratedExams = await mapErr(
    this.prisma.envGeneratedExam.findMany({
      where: {
        // Find generated exams user has not already seen
        examId: exam.id,
        id: {
          notIn: examAttempts.map(a => a.generatedExamId)
        },
        deprecated: false
      },
      select: {
        id: true
      }
    })
  );

  if (maybeGeneratedExams.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(maybeGeneratedExams.error)
    );
  }

  const generatedExams = maybeGeneratedExams.data;

  if (generatedExams.length === 0) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        `Unable to provide a generated exam. Either all generated exams have been exhausted, or all generated exams are deprecated.`
      )
    );
  }

  const randomGeneratedExam =
    generatedExams[Math.floor(Math.random() * generatedExams.length)]!;

  const maybeGeneratedExam = await mapErr(
    this.prisma.envGeneratedExam.findFirst({
      where: {
        id: randomGeneratedExam.id
      }
    })
  );

  if (maybeGeneratedExam.hasError) {
    void reply.code(500);
    return reply.send(
      // TODO: Consider more specific code
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        'Unable to query generated exam, due to: ' +
          JSON.stringify(maybeGeneratedExam.error)
      )
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  if (generatedExam === null) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(`Unable to locate generated exam.`)
    );
  }

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  const attempt = await mapErr(
    this.prisma.envExamAttempt.create({
      data: {
        userId: user.id,
        examId: exam.id,
        generatedExamId: generatedExam.id,
        startTimeInMS: Date.now(),
        questionSets: [],
        needsRetake: false
      }
    })
  );

  if (attempt.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT(
        JSON.stringify(attempt.error)
      )
    );
  }
  // NOTE: Anything that goes wrong after this point needs to unwind the exam attempt.

  const maybeUserExam = syncMapErr(() =>
    constructUserExam(generatedExam, exam)
  );

  if (maybeUserExam.hasError) {
    await this.prisma.envExamAttempt.delete({
      where: {
        id: attempt.data.id
      }
    });
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUserExam.error))
    );
  }

  const userExam = maybeUserExam.data;

  void reply.code(200);
  return reply.send({
    data: {
      exam: userExam,
      examAttempt: attempt.data
    }
  });
}

/**
 * Handles updates to an exam attempt.
 *
 * Requires token to be validated.
 *
 * TODO: Consider validating req.user.id == lastAttempt.user_id?
 *
 * NOTE: Currently, questions can be _unanswered_ - taken away from a previous attempt submission.
 * Theorectically, this is fine. Practically, it is unclear when that would be useful.
 */
async function postExamAttemptHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostExamAttempt>,
  reply: FastifyReply
) {
  const { attempt } = req.body;

  const user = req.user!;

  const maybeAttempts = await mapErr(
    this.prisma.envExamAttempt.findMany({
      where: {
        examId: attempt.examId,
        userId: user.id
      }
    })
  );

  if (maybeAttempts.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  if (attempts.length === 0) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        `No attempts found for user '${user.id}' with attempt id '${attempt.examId}'.`
      )
    );
  }

  const latestAttempt = attempts.reduce((latest, current) =>
    latest.startTimeInMS > current.startTimeInMS ? latest : current
  );

  // TODO: Currently, submission time is set when all questions have been answered.
  //       This might not necessarily be fully submitted. So, provided there is time
  //       left on the clock, the attempt should still be updated, even if the submission
  //       time is set.
  //       The submission time just needs to be updated.
  // if (latestAttempt.submissionTimeInMS !== null) {
  //   void reply.code(403);
  //   return reply.send(
  //     ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
  //       'Attempt has already been submitted.'
  //     )
  //   );
  // }

  const maybeExam = await mapErr(
    this.prisma.envExam.findUnique({
      where: {
        id: attempt.examId
      }
    })
  );

  if (maybeExam.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (exam === null) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  const isAttemptExpired =
    latestAttempt.startTimeInMS + exam.config.totalTimeInMS < Date.now();

  if (isAttemptExpired) {
    void reply.code(403);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        'Attempt has exceeded submission time.'
      )
    );
  }

  // Get generated exam from database
  const maybeGeneratedExam = await mapErr(
    this.prisma.envGeneratedExam.findUnique({
      where: {
        id: latestAttempt.generatedExamId
      }
    })
  );

  if (maybeGeneratedExam.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeGeneratedExam.error))
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  if (generatedExam === null) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_GENERATED_EXAM(
        'Generated exam not found.'
      )
    );
  }

  const databaseAttemptQuestionSets = userAttemptToDatabaseAttemptQuestionSets(
    attempt,
    latestAttempt
  );
  // Ensure attempt matches generated exam
  const maybeValidExamAttempt = syncMapErr(() =>
    validateAttempt(generatedExam, databaseAttemptQuestionSets)
  );

  // If all questions have been answered, add submission time
  const allQuestionsAnswered = checkAttemptAgainstGeneratedExam(
    databaseAttemptQuestionSets,
    generatedExam
  );

  // Update attempt in database
  const maybeUpdatedAttempt = await mapErr(
    this.prisma.envExamAttempt.update({
      where: {
        id: latestAttempt.id
      },
      data: {
        // NOTE: submission time is set to null, because it just depends on whether all questions have been answered.
        submissionTimeInMS: allQuestionsAnswered ? Date.now() : null,
        questionSets: databaseAttemptQuestionSets,
        // If attempt is not valid, immediately flag attempt as needing retake
        // TODO: If `needsRetake`, prevent further submissions?
        needsRetake: maybeValidExamAttempt.hasError ? true : undefined
      }
    })
  );

  if (maybeValidExamAttempt.hasError) {
    void reply.code(400);
    const message =
      maybeValidExamAttempt.error instanceof Error
        ? maybeValidExamAttempt.error.message
        : 'Unknown attempt validation error';
    return reply.send(ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(message));
  }

  if (maybeUpdatedAttempt.hasError) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUpdatedAttempt.error))
    );
  }

  return reply.code(200).send();
}

/**
 * Handles screenshots, sending them to the screenshot service for storage.
 *
 * Requires token to be validated.
 */
async function postScreenshotHandler(
  this: FastifyInstance,
  _req: UpdateReqType<typeof schemas.examEnvironmentPostScreenshot>,
  reply: FastifyReply
) {
  return reply.code(418);
}
