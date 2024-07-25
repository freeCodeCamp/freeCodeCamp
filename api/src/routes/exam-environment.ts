/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas';
import { CODE, STATUS, UpdateReqType } from '../utils';
import { JWT_SECRET } from '../utils/env';

/**
 * Wrapper for endpoints related to the exam environment desktop app.
 *
 * Requires exam environment authorization token to be validated.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const examEnvironmentValidatedTokenRoutes: FastifyPluginCallbackTypebox =
  (fastify, _options, done) => {
    // TODO: Is there any reason to delete the token without generating a new one?
    fastify.post(
      '/exam-environment/exam/generate',
      {},
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
    return reply.send({
      message: {
        code: CODE.EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
        text: JSON.stringify(e)
      },
      status: STATUS.ERROR
    });
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
    void reply.send({
      message: {
        code: CODE.ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
        text: 'Token does not appear to have been created.'
      },
      status: STATUS.ERROR
    });
  } else {
    void reply.send({
      status: STATUS.SUCCESS
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
  _req: UpdateReqType<typeof schemas.examEnvironmentPostExamGenerate>,
  reply: FastifyReply
) {
  await reply.code(418);
}

/**
 * Handles the submission of an exam attempt.
 *
 * Requires token to be validated.
 */
async function postExamAttemptHandler(
  this: FastifyInstance,
  _req: UpdateReqType<typeof schemas.examEnvironmentPostExamAttempt>,
  reply: FastifyReply
) {
  await reply.code(418);
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
  await reply.code(418);
}
