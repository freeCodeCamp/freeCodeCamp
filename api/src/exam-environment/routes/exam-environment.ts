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
    fastify.setErrorHandler((error, req, res) => {
      // If the error does not match the format {code: string; message: string}, coerce into:
      if (
        !Object.hasOwnProperty.call(error, 'code') ||
        !Object.hasOwnProperty.call(error, 'message')
      ) {
        fastify.Sentry?.captureException(error);
        req.log.error(error, 'Unhandled error in exam environment routes.');
        const str = JSON.stringify(error);
        res.code(500);
        res.send(ERRORS.FCC_ERR_UNKNOWN_STATE(str));
      }
    });

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
  const { 'exam-environment-authorization-token': encodedToken } = req.headers;
  req.log.debug('Received exam environment token meta request.');

  let payload: JwtPayload;
  try {
    payload = jwt.verify(encodedToken, JWT_SECRET) as JwtPayload;
  } catch (e) {
    // Server refuses to brew (verify) coffee (jwts) with a teapot (random strings)
    req.log.warn(e, 'Invalid token provided.');
    void reply.code(418);
    return reply.send(
      ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(JSON.stringify(e))
    );
  }

  if (!isObjectID(payload.examEnvironmentAuthorizationToken)) {
    req.log.warn('Token is not an object id.');
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
    req.log.warn('Token does not appear to exist.');
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
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }

  req.log.debug('Generating exam for user.');
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
      req.log.warn(maybeExam.error, 'Invalid exam id given.');
      void reply.code(400);
      return reply.send(ERRORS.FCC_EINVAL_EXAM_ID(maybeExam.error.message));
    }

    this.Sentry?.captureException(maybeExam.error);
    req.log.error(maybeExam.error, 'Unable to query exam.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (!exam) {
    req.log.warn({ examId }, 'No exam with given id.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  // Check user has completed prerequisites
  const isExamPrerequisitesMet = checkPrerequisites(user, exam.prerequisites);

  if (!isExamPrerequisitesMet) {
    req.log.warn(
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
    this.Sentry?.captureException(maybeExamAttempts.error);
    req.log.error(maybeExamAttempts.error, 'Unable to query exam attempts.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExamAttempts.error))
    );
  }

  const examAttempts = maybeExamAttempts.data;

  const lastAttempt = examAttempts.length
    ? examAttempts.reduce((latest, current) => {
        const latestStartTime = latest.startTime;
        const currentStartTime = current.startTime;
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
      this.Sentry?.captureException(maybeMod.error);
      req.log.error(maybeMod.error, 'Unable to query exam moderation.');
      void reply.code(500);
      return reply.send(
        ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeMod.error))
      );
    }

    const moderation = maybeMod.data;

    if (moderation !== null) {
      req.log.warn(
        { examAttemptId: lastAttempt.id },
        'User has an exam attempt awaiting grading.'
      );
      this.Sentry?.metrics?.count('exam.attempt_blocked_pending_moderation', 1);
      void reply.code(403);
      return reply.send(
        // TODO: Better error type
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
          'User has an exam attempt awaiting grading.'
        )
      );
    }

    const lastAttemptStartTime = lastAttempt.startTime.getTime();
    const examTotalTimeInMS = exam.config.totalTimeInS * 1000;
    const examExpirationTime = lastAttemptStartTime + examTotalTimeInMS;

    if (examExpirationTime < Date.now()) {
      const examRetakeTimeInMS = exam.config.retakeTimeInS * 1000;
      const retakeAllowed =
        examExpirationTime + examRetakeTimeInMS < Date.now();

      if (!retakeAllowed) {
        req.log.warn(
          { examExpirationTime },
          'User has completed exam too recently to retake.'
        );
        this.Sentry?.metrics?.count('exam.retake_cooldown_blocked', 1);
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
        this.Sentry?.captureException(generated.error);
        req.log.error(generated.error, 'Unable to query generated exam.');
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(generated.error))
        );
      }

      if (generated.data === null) {
        this.Sentry?.captureException({
          generatedExamId: lastAttempt.generatedExamId
        });
        req.log.error(
          { generatedExamId: lastAttempt.generatedExamId },
          'Unreachable. Generated exam not found.'
        );
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
            'Unreachable. Generated exam not found.'
          )
        );
      }

      const userExam = constructUserExam(generated.data, exam);

      this.Sentry?.metrics?.count('exam.attempt_resumed', 1);
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
    this.Sentry?.captureException(maybeGeneratedExams.error);
    req.log.error(
      maybeGeneratedExams.error,
      'Unable to query generated exams.'
    );
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(maybeGeneratedExams.error)
    );
  }

  const generatedExams = maybeGeneratedExams.data;

  if (generatedExams.length === 0) {
    const message =
      'Unable to provide a generated exam. Either no generations exist, or all generated exams are deprecated.';
    this.Sentry?.captureException({ data: { examId: exam.id }, message });
    req.log.error({ examId: exam.id }, message);
    this.Sentry?.metrics?.count('exam.generated_exam_pool_exhausted', 1);
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_EXAM_ENVIRONMENT(message));
  }

  // Randomly pick an exam from available generations, prioritising generations not already taken
  const untakenGeneratedExams = generatedExams.filter(
    ge => !examAttempts.find(ea => ea.generatedExamId === ge.id)
  );
  let randomGeneratedExamId: string;
  if (untakenGeneratedExams.length === 0) {
    this.Sentry?.metrics?.count('exam.generated_exam_reused', 1, {
      attributes: { examId: exam.id }
    });
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
    this.Sentry?.captureException(maybeGeneratedExam.error);
    req.log.error(maybeGeneratedExam.error, 'Unable to query generated exam.');
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
    this.Sentry?.captureException({
      data: { generatedExamId: randomGeneratedExamId },
      message: 'Unreachable. Generated exam not found.'
    });
    req.log.error(
      { generatedExamId: randomGeneratedExamId },
      'Unreachable. Generated exam not found.'
    );
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT('Unreachable. Generated exam not found.')
    );
  }

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  const attempt = await mapErr(
    this.prisma.examEnvironmentExamAttempt.create({
      data: {
        userId: user.id,
        examId: exam.id,
        generatedExamId: generatedExam.id,
        examModerationId: null,
        startTime: new Date(),
        questionSets: []
      }
    })
  );

  if (attempt.hasError) {
    this.Sentry?.captureException(attempt.error);
    req.log.error(attempt.error, 'Unable to create exam attempt.');
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
    this.Sentry?.captureException(maybeUserExam.error);
    req.log.error(maybeUserExam.error, 'Unable to construct user exam.');
    // TODO: Consider handling this failing
    await this.prisma.examEnvironmentExamAttempt.delete({
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

  this.Sentry?.metrics?.count('exam.attempt_created', 1);
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
 * Theoretically, this is fine. Practically, it is unclear when that would be useful.
 */
async function postExamAttemptHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostExamAttempt>,
  reply: FastifyReply
) {
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }

  req.log.debug('Updating exam attempt for user.');

  const { attempt } = req.body;

  const maybeAttempts = await mapErr(
    this.prisma.examEnvironmentExamAttempt.findMany({
      where: {
        examId: attempt.examId,
        userId: user.id
      }
    })
  );

  if (maybeAttempts.hasError) {
    this.Sentry?.captureException(maybeAttempts.error);
    req.log.error(maybeAttempts.error, 'Unable to query exam attempts.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  if (attempts.length === 0) {
    req.log.warn({ examId: attempt.examId }, 'No attempts found for user.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_EXAM_ATTEMPT(
        `No attempts found for user '${user.id}' with attempt id '${attempt.examId}'.`
      )
    );
  }

  const latestAttempt = attempts.reduce((latest, current) => {
    const latestStartTime = latest.startTime;
    const currentStartTime = current.startTime;
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
    this.Sentry?.captureException(maybeExam.error);
    req.log.error(maybeExam.error, 'Unable to query exam.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeExam.error))
    );
  }

  const exam = maybeExam.data;

  if (exam === null) {
    req.log.warn({ examId: attempt.examId }, 'Invalid exam id given.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  const latestAttemptStartTime = latestAttempt.startTime.getTime();
  const examTotalTimeInMS = exam.config.totalTimeInS * 1000;
  const isAttemptExpired =
    latestAttemptStartTime + examTotalTimeInMS < Date.now();

  if (isAttemptExpired) {
    req.log.warn(
      { examAttemptId: latestAttempt.id },
      'Attempt has exceeded submission time.'
    );
    this.Sentry?.metrics?.count('exam.attempt_submission_expired', 1);
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
    this.Sentry?.captureException(maybeGeneratedExam.error);
    req.log.error(maybeGeneratedExam.error, 'Unable to query generated exam.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeGeneratedExam.error))
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  if (generatedExam === null) {
    req.log.warn(
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
    const message =
      maybeValidExamAttempt.error instanceof Error
        ? maybeValidExamAttempt.error.message
        : 'Unknown attempt validation error';
    req.log.warn({ validExamAttemptError: message }, 'Invalid exam attempt.');
    // As attempt is invalid, create moderation record to investigate or update existing record
    const moderation = await this.prisma.examEnvironmentExamModeration.upsert({
      where: { examAttemptId: latestAttempt.id },
      create: {
        examAttemptId: latestAttempt.id,
        status: ExamEnvironmentExamModerationStatus.Pending,
        feedback: message
      },
      update: {
        feedback: message
      }
    });

    this.Sentry?.metrics?.count('exam.moderation_flagged', 1);

    // Link attempt with moderation id if it has not already been done
    await this.prisma.examEnvironmentExamAttempt.updateMany({
      where: {
        id: latestAttempt.id,
        examModerationId: null
      },
      data: {
        examModerationId: moderation.id
      }
    });

    void reply.code(400);
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
    this.Sentry?.captureException(maybeUpdatedAttempt.error);
    req.log.error(maybeUpdatedAttempt.error, 'Unable to update exam attempt.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUpdatedAttempt.error))
    );
  }

  this.Sentry?.metrics?.count('exam.attempt_updated', 1, {
    attributes: { attemptId: latestAttempt.id }
  });
  return reply.code(200).send();
}

/**
 * Get all the public information about all exams.
 * @returns Public information about exams + whether Camper may take the exam or not.
 */
export async function getExams(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentExams>,
  reply: FastifyReply
) {
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }

  req.log.debug('Fetching available exams for user.');

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
    this.Sentry?.captureException(maybeExams.error);
    req.log.error(maybeExams.error, 'Unable to query exams.');
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
        startTime: true
      }
    })
  );

  if (maybeAttempts.hasError) {
    this.Sentry?.captureException(maybeAttempts.error);
    req.log.error(maybeAttempts.error, 'Unable to query exam attempts.');
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
        totalTimeInS: exam.config.totalTimeInS,
        retakeTimeInS: exam.config.retakeTimeInS,
        passingPercent: exam.config.passingPercent
      },
      canTake: false,
      prerequisites: exam.prerequisites
    };

    const isExamPrerequisitesMet = checkPrerequisites(user, exam.prerequisites);
    req.log.debug(
      { examId: exam.id, isExamPrerequisitesMet },
      'Evaluated exam prerequisites.'
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
          const latestStartTime = latest.startTime;
          const currentStartTime = current.startTime;
          return latestStartTime > currentStartTime ? latest : current;
        })
      : null;

    if (!lastAttempt) {
      req.log.debug({ examId: exam.id }, 'No prior attempts for exam.');
      availableExam.canTake = true;
      availableExams.push(availableExam);
      continue;
    }

    const lastAttemptStartTime = lastAttempt.startTime.getTime();
    const examTotalTimeInMS = exam.config.totalTimeInS * 1000;
    const examRetakeTimeInMS = exam.config.retakeTimeInS * 1000;
    const retakeDateInMS =
      lastAttemptStartTime + examTotalTimeInMS + examRetakeTimeInMS;

    const lastAttemptExpired =
      Date.now() > lastAttemptStartTime + examTotalTimeInMS;
    if (!lastAttemptExpired) {
      req.log.debug({ examId: exam.id }, 'Exam in progress.');
      availableExam.canTake = true;
      availableExams.push(availableExam);
      continue;
    }

    const isRetakeTimePassed = Date.now() > retakeDateInMS;
    if (!isRetakeTimePassed) {
      req.log.debug(
        { examId: exam.id, retakeInMs: retakeDateInMS - Date.now() },
        'Exam retake time has not yet passed.'
      );
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
      this.Sentry?.captureException(maybeModerations.error);
      req.log.error(
        maybeModerations.error,
        'Unable to query exam moderations.'
      );
      void reply.code(500);
      return reply.send(
        ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeModerations.error))
      );
    }

    const moderations = maybeModerations.data;

    if (moderations.length > 0) {
      req.log.debug(
        { examId: exam.id, count: moderations.length },
        'Exam moderation records found.'
      );
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
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }

  req.log.debug('Fetching exam attempts for user.');

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
    this.Sentry?.captureException(maybeAttempts.error);
    req.log.error(maybeAttempts.error, 'Unable to query exam attempts.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempts.error))
    );
  }

  const attempts = maybeAttempts.data;

  if (!attempts.length) {
    req.log.warn('No exam attempts found.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_EXAM_ATTEMPT('No exam attempt found.')
    );
  }

  for (const attempt of attempts) {
    const { error, examEnvironmentExamAttempt } = await constructEnvExamAttempt(
      this,
      attempt,
      req.log
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
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }
  req.log.debug('Fetching exam attempt for user.');

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
    this.Sentry?.captureException(maybeAttempt.error);
    req.log.error(maybeAttempt.error, 'Unable to query exam attempt.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeAttempt.error))
    );
  }

  const attempt = maybeAttempt.data;

  if (!attempt) {
    req.log.warn({ attemptId }, 'No exam attempt found.');
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_EXAM_ATTEMPT('No exam attempt found.')
    );
  }

  const { error, examEnvironmentExamAttempt } = await constructEnvExamAttempt(
    this,
    attempt,
    req.log
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
  const user = req.user;

  if (!user) {
    this.Sentry?.captureException('No user found in request.');
    req.log.error('No user found in request.');
    void reply.code(500);
    return reply.send(ERRORS.FCC_ERR_UNKNOWN_STATE('No user found.'));
  }

  const { examId } = req.params;

  req.log.debug({ examId }, 'Fetching exam attempts by exam id.');

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
    this.Sentry?.captureException(maybeAttempts.error);
    req.log.error(maybeAttempts.error, 'Unable to query exam attempts.');
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
      req.log
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
  const { challengeId, examId } = req.query;

  req.log.debug({ challengeId, examId }, 'Fetching exam challenge relations.');

  if (!challengeId && !examId) {
    req.log.warn('No challenge or exam id provided.');
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
    this.Sentry?.captureException(maybeData.error);
    req.log.error(maybeData.error, 'Unable to query exam challenge relations.');
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeData.error))
    );
  }

  const data = maybeData.data;

  return reply.send(data);
}
