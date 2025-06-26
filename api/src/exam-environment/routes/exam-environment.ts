/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import fastifyMultipart from '@fastify/multipart';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import { EnvExamModerationStatus } from '@prisma/client';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas';
import { mapErr, syncMapErr, UpdateReqType } from '../../utils';
import { JWT_SECRET, SCREENSHOT_SERVICE_LOCATION } from '../../utils/env';
import {
  checkPrerequisites,
  constructEnvExamAttempt,
  constructUserExam,
  userAttemptToDatabaseAttemptQuestionSets,
  validateAttempt
} from '../utils/exam';
import { ERRORS } from '../utils/errors';
import { isObjectID } from '../../utils/validation';

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

    done();
  };

/**
 * Wrapper for endpoints related to the exam environment desktop app.
 *
 * Requires multipart form data to be supported.
 */
export const examEnvironmentMultipartRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  void fastify.register(fastifyMultipart);

  fastify.post(
    '/exam-environment/screenshot',
    {
      schema: schemas.examEnvironmentPostScreenshot
      // bodyLimit: 1024 * 1024 * 5 // 5MiB
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
  fastify.get(
    '/exam-environment/token-meta',
    {
      schema: schemas.examEnvironmentTokenMeta
    },
    tokenMetaHandler
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
    this.prisma.envExam.findUnique({
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
    this.prisma.envExamAttempt.findMany({
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
    ? examAttempts.reduce((latest, current) =>
        latest.startTimeInMS > current.startTimeInMS ? latest : current
      )
    : null;

  if (lastAttempt) {
    // Camper may not take the exam again, until the previous attempt is graded.
    const maybeMod = await mapErr(
      this.prisma.envExamModeration.findFirst({
        where: {
          examAttemptId: lastAttempt.id,
          status: EnvExamModerationStatus.Pending
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

    const examExpirationTime =
      lastAttempt.startTimeInMS + exam.config.totalTimeInMS;
    if (examExpirationTime < Date.now()) {
      const retakeAllowed =
        examExpirationTime + exam.config.retakeTimeInMS < Date.now();

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
        this.prisma.envGeneratedExam.findFirst({
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
      message: `Unable to provide a generated exam. Either all generated exams have been exhausted, or all generated exams are deprecated.`
    };
    logger.error(error.data, error.message);
    this.Sentry.captureException(error);
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(error.message));
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
      data: { generatedExamId: randomGeneratedExam.id },
      message: 'Unreachable. Generated exam not found.'
    };
    logger.error(error.data, 'Unreachable. Generated exam not found.');
    this.Sentry.captureException(error);
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(error.message));
  }

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  const attempt = await mapErr(
    this.prisma.envExamAttempt.create({
      data: {
        userId: user.id,
        examId: exam.id,
        generatedExamId: generatedExam.id,
        startTimeInMS: Date.now(),
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
    await this.prisma.envExamAttempt.delete({
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
    this.prisma.envExamAttempt.findMany({
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

  const latestAttempt = attempts.reduce((latest, current) =>
    latest.startTimeInMS > current.startTimeInMS ? latest : current
  );

  const maybeExam = await mapErr(
    this.prisma.envExam.findUnique({
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

  const isAttemptExpired =
    latestAttempt.startTimeInMS + exam.config.totalTimeInMS < Date.now();

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
    this.prisma.envGeneratedExam.findUnique({
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
    await this.prisma.envExamModeration.create({
      data: {
        examAttemptId: latestAttempt.id,
        status: EnvExamModerationStatus.Pending
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
    this.prisma.envExamAttempt.update({
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

/**
 * Handles screenshots, sending them to the screenshot service for storage.
 *
 * Requires token to be validated.
 */
async function postScreenshotHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostScreenshot>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ userId: req.user?.id });
  const isMultipart = req.isMultipart();

  if (!isMultipart) {
    logger.warn('Request is not multipart form data.');
    void reply.code(400);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_SCREENSHOT(
        'Request is not multipart form data.'
      )
    );
  }

  const user = req.user!;
  const imgData = await req.file();

  if (!imgData) {
    logger.warn('No image provided.');
    void reply.code(400);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_SCREENSHOT('No image provided.')
    );
  }

  const maybeAttempts = await mapErr(
    this.prisma.envExamAttempt.findMany({
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

  if (attempts.length === 0) {
    logger.warn('No exam attempts found for user.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        `No exam attempts found for user '${user.id}'.`
      )
    );
  }

  const latestAttempt = attempts.reduce((latest, current) =>
    latest.startTimeInMS > current.startTimeInMS ? latest : current
  );

  const maybeExam = await mapErr(
    this.prisma.envExam.findUnique({
      where: {
        id: latestAttempt.examId
      },
      select: {
        id: true,
        config: true
      }
    })
  );

  if (maybeExam.hasError) {
    logger.error(maybeExam.error);
    this.Sentry.captureException(maybeExam.error);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (exam === null) {
    const error = {
      data: {
        examId: latestAttempt.examId,
        attemptId: latestAttempt.id
      },
      message: 'Unreachable. Attempt could not be related to an exam.'
    };
    logger.error(error.data, error.message);
    this.Sentry.captureException(error.data);
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM(error.message)
    );
  }

  const isAttemptExpired =
    latestAttempt.startTimeInMS + exam.config.totalTimeInMS < Date.now();
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

  const imgBinary = await imgData.toBuffer();

  // Verify image is JPG using magic number
  if (imgBinary[0] !== 0xff || imgBinary[1] !== 0xd8 || imgBinary[2] !== 0xff) {
    logger.warn('Invalid image format');
    void reply.code(400);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_SCREENSHOT('Invalid image format.')
    );
  }

  void reply.code(200).send();

  const uploadData = {
    image: imgBinary.toString('base64'),
    examAttemptId: latestAttempt.id
  };

  await fetch(`${SCREENSHOT_SERVICE_LOCATION}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(uploadData)
  });
}

async function getExams(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentExams>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ user: req.user });

  const user = req.user!;
  const maybeExams = await mapErr(
    this.prisma.envExam.findMany({
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

  const availableExams = exams.map(exam => {
    const isExamPrerequisitesMet = checkPrerequisites(user, exam.prerequisites);

    return {
      id: exam.id,
      config: {
        name: exam.config.name,
        note: exam.config.note,
        totalTimeInMS: exam.config.totalTimeInMS,
        retakeTimeInMS: exam.config.retakeTimeInMS,
        passingPercent: exam.config.passingPercent
      },
      canTake: isExamPrerequisitesMet
    };
  });

  return reply.send({
    exams: availableExams
  });
}

/**
 * Gets all exam attempts owned by authz user.
 *
 * If an attempt is completed, the result is included.
 */
async function getExamAttemptsHandler(
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
    this.prisma.envExamAttempt.findMany({
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
    const { error, envExamAttempt } = await constructEnvExamAttempt(
      this,
      attempt,
      logger
    );
    if (error) {
      void reply.code(error.code);
      return reply.send(error.data);
    }
    envExamAttempts.push(envExamAttempt);
  }

  return reply.send(envExamAttempts);
}

/**
 * Gets the requested exam attempt by id owned by authz user.
 *
 * If the attempt is completed, the result is included.
 */
async function getExamAttemptHandler(
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
    this.prisma.envExamAttempt.findUnique({
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

  const { error, envExamAttempt } = await constructEnvExamAttempt(
    this,
    attempt,
    logger
  );

  if (error) {
    void reply.code(error.code);
    return reply.send(error.data);
  }

  return reply.send(envExamAttempt);
}
