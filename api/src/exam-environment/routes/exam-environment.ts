/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { PrismaClientValidationError } from '@prisma/client/runtime/library.js';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import { ExamEnvironmentExamModerationStatus } from '@prisma/client';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas/index.js';
import { mapErr, syncMapErr, UpdateReqType } from '../../utils/index.js';
import { JWT_SECRET } from '../../utils/env.js';
import {
  checkPrerequisites,
  constructEnvExamAttempt,
  constructUserExam,
  userAttemptToDatabaseAttemptQuestionSets,
  validateAttempt
} from '../utils/exam-environment.js';
import { ERRORS } from '../utils/errors.js';
import { isObjectID } from '../../utils/validation.js';

/**
 * Wrapper for endpoints related to the exam environment desktop app.
 *
 * Requires exam environment authorization token to be validated.
 */
export const examEnvironmentValidatedTokenRoutes: FastifyPluginCallbackTypebox =
  (fastify, _options, done) => {
    fastify.get(
      '/exam-environment/exams',
      {
        schema: schemas.examEnvironmentExams
      },
      getExams
    );
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
    fastify.get(
      '/exam-environment/exam/attempts',
      {
        schema: schemas.examEnvironmentGetExamAttempts
      },
      getExamAttemptsHandler
    );
    fastify.get(
      '/exam-environment/exam/attempt/:attemptId',
      {
        schema: schemas.examEnvironmentGetExamAttempt
      },
      getExamAttemptHandler
    );
    fastify.get(
      '/exam-environment/exams/:examId/attempts',
      {
        schema: schemas.examEnvironmentGetExamAttemptsByExamId
      },
      getExamAttemptsByExamIdHandler
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
  fastify.get(
    '/exam-environment/token-meta',
    {
      schema: schemas.examEnvironmentTokenMeta
    },
    tokenMetaHandler
  );
  fastify.get(
    '/exam-environment/exam-challenge',
    {
      schema: schemas.examEnvironmentGetExamChallenge
    },
    getExamChallenge
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
async function tokenMetaHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentTokenMeta>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  const { 'exam-environment-authorization-token': encodedToken } = req.headers;
  logger.info({ encodedToken });

  let payload: JwtPayload;
  try {
    payload = jwt.verify(encodedToken, JWT_SECRET) as JwtPayload;
  } catch (e) {
    // Server refuses to brew (verify) coffee (jwts) with a teapot (random strings)
    logger.warn(
      { examEnvironmentAuthorizationTokenError: e },
      'Invalid token provided.'
    );
    void reply.code(418);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(JSON.stringify(e))
    );
  }

  if (!isObjectID(payload.examEnvironmentAuthorizationToken)) {
    logger.warn(
      {
        examEnvironmentAuthorizationToken:
          payload.examEnvironmentAuthorizationToken
      },
      'Token is not an object id.'
    );
    void reply.code(418);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
        'Token is not valid'
      )
    );
  }

  const token = await this.prisma.examEnvironmentAuthorizationToken.findUnique({
    where: {
      id: payload.examEnvironmentAuthorizationToken
    }
  });

  if (!token) {
    // Endpoint is valid, but resource does not exists
    logger.warn('Token does not appear to exist.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
        'Token does not appear to exist'
      )
    );
  } else {
    void reply.code(200);
    return reply.send({
      expireAt: token.expireAt
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
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });
  // Get exam from DB
  const examId = req.body.examId;
  const maybeExam = await mapErr(
    this.prisma.examEnvironmentExam.findUnique({
      where: {
        id: examId
      }
    })
  );
  if (maybeExam.hasError) {
    if (maybeExam.error instanceof PrismaClientValidationError) {
      logger.warn(maybeExam.error, 'Invalid exam id given.');
      void reply.code(400);
      return reply.send(ERRORS.FCC_EINVAL_EXAM_ID(maybeExam.error.message));
    }

    logger.error(maybeExam.error);
    this.Sentry.captureException(maybeExam.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (!exam) {
    logger.warn({ examId }, 'No exam with given id.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  // Check user has completed prerequisites
  const user = req.user!;
  const isExamPrerequisitesMet = checkPrerequisites(user, exam.prerequisites);

  if (!isExamPrerequisitesMet) {
    logger.warn(
      { examId: exam.id },
      'User has not completed prerequisites to take exam.'
    );
    void reply.code(403);
    // TODO: Consider sending unmet prerequisites
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_PREREQUISITES(
        'User has not completed prerequisites.'
      )
    );
  }

  // Check user has not completed exam within cooldown period, and
  // user does not have an existing attempt awaiting grading
  const maybeExamAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        userId: user.id,
        examId: exam.id
      }
    })
  );

  if (maybeExamAttempts.hasError) {
    logger.error(maybeExamAttempts.error, 'Unable to query exam attempts.');
    this.Sentry.captureException(maybeExamAttempts.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExamAttempts.error))
    );
  }

  const examAttempts = maybeExamAttempts.data;

  const lastAttempt = examAttempts.length
    ? examAttempts.reduce((latest, current) => {
        const latestStartTime =
          latest.startTime?.getTime() ?? latest.startTimeInMS;
        const currentStartTime =
          current.startTime?.getTime() ?? current.startTimeInMS;
        return latestStartTime > currentStartTime ? latest : current;
      })
    : null;

  if (lastAttempt) {
    // Camper may not take the exam again, until the previous attempt is graded.
    const maybeMod = await mapErr(
      this.prisma.examEnvironmentExamModeration.findFirst({
        where: {
          examAttemptId: lastAttempt.id,
          status: ExamEnvironmentExamModerationStatus.Pending
        }
      })
    );

    if (maybeMod.hasError) {
      logger.error(maybeMod.error);
      this.Sentry.captureException(maybeMod.error);
      void reply.code(500);
      return reply.send(
        ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeMod.error))
      );
    }

    const moderation = maybeMod.data;

    if (moderation !== null) {
      logger.warn(
        { examAttemptId: lastAttempt.id },
        'User has an exam attempt awaiting grading.'
      );
      void reply.code(403);
      return reply.send(
        // TODO: Better error type
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
          'User has an exam attempt awaiting grading.'
        )
      );
    }

    const lastAttemptStartTime =
      lastAttempt.startTime?.getTime() ?? lastAttempt.startTimeInMS;
    const examTotalTimeInMS = exam.config.totalTimeInS
      ? exam.config.totalTimeInS * 1000
      : exam.config.totalTimeInMS;
    const examExpirationTime = lastAttemptStartTime + examTotalTimeInMS;

    if (examExpirationTime < Date.now()) {
      const examRetakeTimeInMS = exam.config.retakeTimeInS
        ? exam.config.retakeTimeInS * 1000
        : exam.config.retakeTimeInMS;
      const retakeAllowed =
        examExpirationTime + examRetakeTimeInMS < Date.now();

      if (!retakeAllowed) {
        logger.warn(
          { examExpirationTime },
          'User has completed exam too recently to retake.'
        );
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
        this.prisma.examEnvironmentGeneratedExam.findFirst({
          where: {
            id: lastAttempt.generatedExamId
          }
        })
      );

      if (generated.hasError) {
        logger.error(generated.error, 'Unable to query generated exam.');
        this.Sentry.captureException(generated.error);
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(generated.error))
        );
      }

      if (generated.data === null) {
        const error = {
          data: { generatedExamId: lastAttempt.generatedExamId },
          message: 'Unreachable. Generated exam not found.'
        };
        logger.error(error.data, error.message);
        this.Sentry.captureException(error.data);
        void reply.code(500);
        return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(error.message));
      }

      const userExam = constructUserExam(generated.data, exam);

      return reply.send({
        exam: userExam,
        examAttempt: lastAttempt
      });
    }
  }

  // Randomly pick a generated exam for user
  const maybeGeneratedExams = await mapErr(
    this.prisma.examEnvironmentGeneratedExam.findMany({
      where: {
        examId: exam.id,
        deprecated: false
      },
      select: {
        id: true
      }
    })
  );

  if (maybeGeneratedExams.hasError) {
    logger.error(maybeGeneratedExams.error);
    this.Sentry.captureException(maybeGeneratedExams.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(maybeGeneratedExams.error)
    );
  }

  const generatedExams = maybeGeneratedExams.data;

  if (generatedExams.length === 0) {
    const error = {
      data: { examId: exam.id },
      message: `Unable to provide a generated exam. Either no generations exist, or all generated exams are deprecated.`
    };
    logger.error(error.data, error.message);
    this.Sentry.captureException(error);
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(error.message));
  }

  // Randomly pick an exam from available generations, prioritising generations not already taken
  const untakenGeneratedExams = generatedExams.filter(
    ge => !examAttempts.find(ea => ea.generatedExamId === ge.id)
  );
  let randomGeneratedExamId: string;
  if (untakenGeneratedExams.length === 0) {
    logger.info(
      `User has taken all generated exams. Reusing previously taken generated exams.`
    );
    randomGeneratedExamId =
      generatedExams[Math.floor(Math.random() * generatedExams.length)]!.id;
  } else {
    randomGeneratedExamId =
      untakenGeneratedExams[
        Math.floor(Math.random() * untakenGeneratedExams.length)
      ]!.id;
  }

  const maybeGeneratedExam = await mapErr(
    this.prisma.examEnvironmentGeneratedExam.findFirst({
      where: {
        id: randomGeneratedExamId
      }
    })
  );

  if (maybeGeneratedExam.hasError) {
    logger.error(maybeGeneratedExam.error);
    this.Sentry.captureException(maybeGeneratedExam.error);
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
    const error = {
      data: { generatedExamId: randomGeneratedExamId },
      message: 'Unreachable. Generated exam not found.'
    };
    logger.error(error.data, 'Unreachable. Generated exam not found.');
    this.Sentry.captureException(error);
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(error.message));
  }

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  const attempt = await mapErr(
    this.prisma.examEnvironmentExamAttempt.create({
      data: {
        userId: user.id,
        examId: exam.id,
        generatedExamId: generatedExam.id,
        startTimeInMS: Date.now(),
        startTime: new Date(),
        questionSets: []
      }
    })
  );

  if (attempt.hasError) {
    logger.error(attempt.error);
    this.Sentry.captureException(attempt.error);
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
    logger.error(maybeUserExam.error);
    // TODO: Consider handling this failing
    await this.prisma.examEnvironmentExamAttempt.delete({
      where: {
        id: attempt.data.id
      }
    });
    this.Sentry.captureException(maybeUserExam.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUserExam.error))
    );
  }

  const userExam = maybeUserExam.data;

  void reply.code(200);
  return reply.send({
    exam: userExam,
    examAttempt: attempt.data
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
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });
  const { attempt } = req.body;

  const user = req.user!;

  const maybeAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        examId: attempt.examId,
        userId: user.id
      }
    })
  );

  if (maybeAttempts.hasError) {
    logger.error(maybeAttempts.error);
    this.Sentry.captureException(maybeAttempts.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  if (attempts.length === 0) {
    logger.warn({ examId: attempt.examId }, 'No attempts found for user.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        `No attempts found for user '${user.id}' with attempt id '${attempt.examId}'.`
      )
    );
  }

  const latestAttempt = attempts.reduce((latest, current) => {
    const latestStartTime = latest.startTime?.getTime() ?? latest.startTimeInMS;
    const currentStartTime =
      current.startTime?.getTime() ?? current.startTimeInMS;
    return latestStartTime > currentStartTime ? latest : current;
  });

  const maybeExam = await mapErr(
    this.prisma.examEnvironmentExam.findUnique({
      where: {
        id: attempt.examId
      },
      select: {
        config: true
      }
    })
  );

  if (maybeExam.hasError) {
    logger.error(maybeExam.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (exam === null) {
    logger.warn({ examId: attempt.examId }, 'Invalid exam id given.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  const latestAttemptStartTime =
    latestAttempt.startTime?.getTime() ?? latestAttempt.startTimeInMS;
  const examTotalTimeInMS = exam.config.totalTimeInS
    ? exam.config.totalTimeInS * 1000
    : exam.config.totalTimeInMS;
  const isAttemptExpired =
    latestAttemptStartTime + examTotalTimeInMS < Date.now();

  if (isAttemptExpired) {
    logger.warn(
      { examAttemptId: latestAttempt.id },
      'Attempt has exceeded submission time.'
    );
    void reply.code(403);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        'Attempt has exceeded submission time.'
      )
    );
  }

  // Get generated exam from database
  const maybeGeneratedExam = await mapErr(
    this.prisma.examEnvironmentGeneratedExam.findUnique({
      where: {
        id: latestAttempt.generatedExamId
      }
    })
  );

  if (maybeGeneratedExam.hasError) {
    logger.error(maybeGeneratedExam.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeGeneratedExam.error))
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  if (generatedExam === null) {
    logger.warn(
      { generatedExamId: latestAttempt.generatedExamId },
      'Generated exam not found.'
    );
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

  if (maybeValidExamAttempt.hasError) {
    logger.warn(
      { validExamAttemptError: maybeValidExamAttempt.error },
      'Invalid exam attempt.'
    );
    // As attempt is invalid, create moderation record to investigate
    await this.prisma.examEnvironmentExamModeration.create({
      data: {
        examAttemptId: latestAttempt.id,
        status: ExamEnvironmentExamModerationStatus.Pending
      }
    });

    void reply.code(400);
    const message =
      maybeValidExamAttempt.error instanceof Error
        ? maybeValidExamAttempt.error.message
        : 'Unknown attempt validation error';
    return reply.send(ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(message));
  }

  // Update attempt in database
  const maybeUpdatedAttempt = await mapErr(
    this.prisma.examEnvironmentExamAttempt.update({
      where: {
        id: latestAttempt.id
      },
      data: {
        questionSets: databaseAttemptQuestionSets
      }
    })
  );

  if (maybeUpdatedAttempt.hasError) {
    logger.error({ updatedAttemptError: maybeUpdatedAttempt.error });
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUpdatedAttempt.error))
    );
  }

  return reply.code(200).send();
}

async function getExams(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentExams>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });

  const user = req.user!;
  const maybeExams = await mapErr(
    this.prisma.examEnvironmentExam.findMany({
      where: {
        deprecated: false
      },
      select: {
        id: true,
        config: true,
        prerequisites: true
      }
    })
  );

  if (maybeExams.hasError) {
    logger.error(maybeExams.error);
    this.Sentry.captureException(maybeExams.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExams.error))
    );
  }

  const exams = maybeExams.data;

  const maybeAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        userId: user.id
      },
      select: {
        id: true,
        examId: true,
        startTimeInMS: true,
        startTime: true
      }
    })
  );

  if (maybeAttempts.hasError) {
    logger.error(maybeAttempts.error);
    this.Sentry.captureException(maybeAttempts.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  const availableExams = [];

  for (const exam of exams) {
    const availableExam = {
      id: exam.id,
      config: {
        name: exam.config.name,
        note: exam.config.note,
        totalTimeInMS: exam.config.totalTimeInMS,
        totalTimeInS: exam.config.totalTimeInS,
        retakeTimeInMS: exam.config.retakeTimeInMS,
        retakeTimeInS: exam.config.retakeTimeInS,
        passingPercent: exam.config.passingPercent
      },
      canTake: false
    };

    const isExamPrerequisitesMet = checkPrerequisites(user, exam.prerequisites);
    logger.info(
      `Prerequisites for exam ${exam.id} ${isExamPrerequisitesMet ? 'met' : 'unmet'}.`
    );

    if (!isExamPrerequisitesMet) {
      availableExam.canTake = false;
      availableExams.push(availableExam);
      continue;
    }
    // Latest attempt must be:
    // a) Moderated
    // b) Past exam config retake time
    const attemptsForExam = attempts.filter(a => a.examId === exam.id);

    const lastAttempt = attemptsForExam.length
      ? attemptsForExam.reduce((latest, current) => {
          const latestStartTime =
            latest.startTime?.getTime() ?? latest.startTimeInMS;
          const currentStartTime =
            current.startTime?.getTime() ?? current.startTimeInMS;
          return latestStartTime > currentStartTime ? latest : current;
        })
      : null;

    if (!lastAttempt) {
      logger.info(`No prior attempts for exam ${exam.id}`);
      availableExam.canTake = true;
      availableExams.push(availableExam);
      continue;
    }

    const lastAttemptStartTime =
      lastAttempt.startTime?.getTime() ?? lastAttempt.startTimeInMS;
    const examTotalTimeInMS = exam.config.totalTimeInS
      ? exam.config.totalTimeInS * 1000
      : exam.config.totalTimeInMS;
    const examRetakeTimeInMS = exam.config.retakeTimeInS
      ? exam.config.retakeTimeInS * 1000
      : exam.config.retakeTimeInMS;
    const retakeDateInMS =
      lastAttemptStartTime + examTotalTimeInMS + examRetakeTimeInMS;
    const isRetakeTimePassed = Date.now() > retakeDateInMS;

    if (!isRetakeTimePassed) {
      logger.info(`Time until retake: ${retakeDateInMS - Date.now()} [ms]`);
      availableExam.canTake = false;
      availableExams.push(availableExam);
      continue;
    }

    const maybeModerations = await mapErr(
      this.prisma.examEnvironmentExamModeration.findMany({
        where: {
          examAttemptId: { in: attemptsForExam.map(a => a.id) },
          status: ExamEnvironmentExamModerationStatus.Pending
        }
      })
    );

    if (maybeModerations.hasError) {
      logger.error(maybeModerations.error);
      this.Sentry.captureException(maybeModerations.error);
      void reply.code(500);
      return reply.send(
        ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeModerations.error))
      );
    }

    const moderations = maybeModerations.data;

    if (moderations.length > 0) {
      logger.info(`Exam Moderation records found: ${moderations.length}`);
      availableExam.canTake = false;
      availableExams.push(availableExam);
      continue;
    }

    availableExam.canTake = true;
    availableExams.push(availableExam);
  }

  return reply.send(availableExams);
}

/**
 * Gets all exam attempts owned by authz user.
 *
 * If an attempt is completed, the result is included.
 */
export async function getExamAttemptsHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentGetExamAttempts>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });

  const user = req.user!;

  // Send all relevant exam attempts
  const envExamAttempts = [];
  const maybeAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        userId: user.id
      }
    })
  );

  if (maybeAttempts.hasError) {
    logger.error(maybeAttempts.error);
    this.Sentry.captureException(maybeAttempts.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  if (!attempts.length) {
    logger.warn({ userId: user.id }, 'No exam attempts found.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_EXAM_ATTEMPT('No exam attempt found.')
    );
  }

  for (const attempt of attempts) {
    const { error, examEnvironmentExamAttempt } = await constructEnvExamAttempt(
      this,
      attempt,
      logger
    );
    if (error) {
      void reply.code(error.code);
      return reply.send(error.data);
    }
    envExamAttempts.push(examEnvironmentExamAttempt);
  }

  return reply.send(envExamAttempts);
}

/**
 * Gets the requested exam attempt by id owned by authz user.
 *
 * If the attempt is completed, the result is included.
 */
export async function getExamAttemptHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentGetExamAttempt>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });

  const user = req.user!;
  const { attemptId } = req.params;

  // If attempt id is given, only return that attempt
  const maybeAttempt = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findUnique({
      where: {
        id: attemptId,
        userId: user.id
      }
    })
  );

  if (maybeAttempt.hasError) {
    logger.error(maybeAttempt.error);
    this.Sentry.captureException(maybeAttempt.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempt.error))
    );
  }

  const attempt = maybeAttempt.data;

  if (!attempt) {
    logger.warn({ attemptId }, 'No exam attempt found.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_EXAM_ATTEMPT('No exam attempt found.')
    );
  }

  const { error, examEnvironmentExamAttempt } = await constructEnvExamAttempt(
    this,
    attempt,
    logger
  );

  if (error) {
    void reply.code(error.code);
    return reply.send(error.data);
  }

  return reply.send(examEnvironmentExamAttempt);
}

/**
 * Gets the requested exam attempt by id owned by authz user.
 *
 * If the attempt is completed, the result is included.
 */
export async function getExamAttemptsByExamIdHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentGetExamAttemptsByExamId>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });

  const user = req.user!;
  const { examId } = req.params;

  logger.info({ examId, userId: user.id });

  // If attempt id is given, only return that attempt
  const maybeAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        examId: examId,
        userId: user.id
      }
    })
  );

  if (maybeAttempts.hasError) {
    logger.error(maybeAttempts.error);
    this.Sentry.captureException(maybeAttempts.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  const examEnvironmentExamAttempts = [];
  for (const attempt of attempts) {
    const { error, examEnvironmentExamAttempt } = await constructEnvExamAttempt(
      this,
      attempt,
      logger
    );

    if (error) {
      void reply.code(error.code);
      return reply.send(error.data);
    }

    examEnvironmentExamAttempts.push(examEnvironmentExamAttempt);
  }

  return reply.send(examEnvironmentExamAttempts);
}

/**
 * Gets all the relations for a given challenge and exam(s).
 */
export async function getExamChallenge(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentGetExamChallenge>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  const { challengeId, examId } = req.query;

  logger.info({ challengeId, examId });

  if (!challengeId && !examId) {
    logger.warn('No challenge or exam id provided.');
    void reply.code(400);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        'Must provide either a challengeId or examId.'
      )
    );
  }

  const maybeData = await mapErr(
    this.prisma.examEnvironmentChallenge.findMany({
      where: {
        challengeId: challengeId ?? undefined,
        examId: examId ?? undefined
      }
    })
  );

  if (maybeData.hasError) {
    logger.error(maybeData.error);
    this.Sentry.captureException(maybeData.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeData.error))
    );
  }

  const data = maybeData.data;

  return reply.send(data);
}
