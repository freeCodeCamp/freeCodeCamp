/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas';
import { mapErr, syncMapErr, UpdateReqType } from '../../utils';
import { JWT_SECRET } from '../../utils/env';
import {
  checkPrerequisites,
  createUserExam,
  generateExam,
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
    // TODO: Is there any reason to delete the token without generating a new one?
    fastify.post(
      '/exam-environment/exam/generate',
      {
        schema: schemas.examEnvironmentPostExamGenerate
      },
      postExamGenerateHandler
    );
    fastify.post('/exam-environment/exam/attempt', {}, postExamAttemptHandler);
    fastify.post('/exam-environment/screenshot', {}, postScreenshotHandler);
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
    void reply.code(403);
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
      data: 'Token verified.'
    });
  }
}

/**
 * Generates an exam for the user.
 *
 * Requires token to be validated.
 */
async function postExamGenerateHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostExamGenerate>,
  reply: FastifyReply
) {
  // Get exam from DB
  const examId = req.body.examId;
  const exam = await this.prisma.newExam.findUnique({
    where: {
      id: examId
    }
  });
  if (!exam) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM('Invalid exam id given.')
    );
  }

  // Check user has completed prerequisites
  const { user } = req;
  if (!user) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT('Unreachable. User not authenticated.')
    );
  }
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
  const examAttempts = await this.prisma.newExamAttempt.findMany({
    where: {
      user_id: user.id
    }
  });

  const lastAttempt = examAttempts.find(attempt => attempt.exam_id === exam.id);

  if (lastAttempt) {
    // If exam is not submitted, use exam start time + time allocated for exam
    const effectiveSubmissionTime =
      lastAttempt.submission_time ??
      lastAttempt.start_time + exam.config.total_time;
    const coolDown = Date.now() - 24 * 60 * 60 * 1000;

    if (effectiveSubmissionTime > coolDown) {
      void reply.code(403);
      // TOOD: Consider sending last completed time
      return reply.send(
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_PREREQUISITES(
          'User has completed exam too recently to retake.'
        )
      );
    } else {
      // Camper has started an attempt, but not submitted it, and there is still time left to complete it.
      // This is most likely to happen if the Camper's app closes and is reopened.
      // Send the Camper back to the exam they were working on.
      const { error, data: generatedExam } = await mapErr(
        this.prisma.generatedExam.findFirst({
          where: {
            id: lastAttempt.generated_exam_id
          }
        })
      );

      if (error !== null) {
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(error))
        );
      }

      // This should be unreachable
      if (generatedExam === null) {
        void reply.code(500);
        return reply.send(
          ERRORS.FCC_ERR_EXAM_ENVIRONMENT('Generated exam not found.')
        );
      }

      const userExam = createUserExam(generatedExam, exam);

      return reply.send({
        data: {
          exam: userExam,
          examAttempt: lastAttempt
        }
      });
    }
  }

  // Generate exam for user, and store in db for later validation against submission
  const generatedExamContent = generateExam(exam);

  const maybeGeneratedExam = await mapErr(
    this.prisma.generatedExam.create({
      data: generatedExamContent
    })
  );

  if (maybeGeneratedExam.error !== null) {
    void reply.code(500);
    return reply.send(
      // TODO: Consider more specific code
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        'Unable to generate exam, due to: ' +
          JSON.stringify(maybeGeneratedExam.error)
      )
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  const { error, data: examAttempt } = await mapErr(
    this.prisma.newExamAttempt.create({
      data: {
        user_id: user.id,
        exam_id: exam.id,
        generated_exam_id: generatedExam.id,
        start_time: Date.now(),
        question_types: [],
        needs_retake: false
      }
    })
  );

  if (error !== null) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT(JSON.stringify(error))
    );
  }
  // NOTE: Anything that goes wrong after this point needs to unwind the exam attempt.

  const maybeUserExam = syncMapErr(() => createUserExam(generatedExam, exam));

  if (maybeUserExam.error !== null) {
    await this.prisma.newExamAttempt.delete({
      where: {
        id: examAttempt.id
      }
    });
    await this.prisma.generatedExam.delete({
      where: {
        id: generatedExam.id
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
      examAttempt
    }
  });
}

/**
 * Handles the submission of an exam attempt.
 *
 * Requires token to be validated.
 *
 * TODO: Consider validating req.user.id == attempt.user_id?
 */
async function postExamAttemptHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.examEnvironmentPostExamAttempt>,
  reply: FastifyReply
) {
  const { attempt } = req.body;

  // Get generated exam from database
  const maybeGeneratedExam = await mapErr(
    this.prisma.generatedExam.findUnique({
      where: {
        id: attempt.generated_exam_id
      }
    })
  );

  if (maybeGeneratedExam.error !== null) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeGeneratedExam.error))
    );
  }

  const generatedExam = maybeGeneratedExam.data;

  if (generatedExam === null) {
    void reply.code(404);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT('Generated exam not found.')
    );
  }
  // Ensure attempt matches generated exam
  const maybeValidExamAttempt = syncMapErr(() =>
    validateAttempt(generatedExam, attempt)
  );

  // Update attempt in database
  const maybeUpdatedAttempt = await mapErr(
    this.prisma.newExamAttempt.update({
      where: {
        id: attempt.id
      },
      data: {
        submission_time: Date.now(),
        question_types: attempt.question_types,
        // If attempt is not valid, immediately flag attempt as needing retake
        needs_retake: maybeValidExamAttempt.error ? true : false
      }
    })
  );

  if (maybeValidExamAttempt.error !== null) {
    void reply.code(400);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        JSON.stringify(maybeValidExamAttempt.error)
      )
    );
  }

  if (maybeUpdatedAttempt.error !== null) {
    void reply.code(500);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(JSON.stringify(maybeUpdatedAttempt.error))
    );
  }

  return reply.code(200);
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
