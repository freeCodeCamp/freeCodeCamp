/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { type FastifyInstance, type FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

import * as schemas from '../schemas';
import { mapErr, UpdateReqType } from '../utils';
import { JWT_SECRET } from '../utils/env';
import { CODE, generateExam, UserExam } from '../utils/new-exam';

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
    void reply.code(403);
    return reply.send({
      code: CODE.EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
      message: JSON.stringify(e)
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
    void reply.code(200);
    void reply.send({
      code: CODE.ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN,
      message: 'Token does not appear to have been created.'
    });
  } else {
    void reply.send({
      code: CODE.EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN_VERIFIED
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
    return reply.send({
      code: CODE.ENOENT_EXAM_ENVIRONMENT_MISSING_EXAM,
      message: 'Invalid exam id given.'
    });
  }

  // Check user has completed prerequisites
  const { user } = req;
  if (!user) {
    throw new Error('Unreachable. User should be authenticated.');
  }
  const isExamPrerequisitesMet = true; // checkPrerequisites(user, prerequisites);

  if (!isExamPrerequisitesMet) {
    void reply.code(403);
    // TODO: Consider sending unmet prerequisites
    return reply.send({
      code: CODE.EINVAL_EXAM_ENVIRONMENT_PREREQUISITES,
      message: 'User has not completed prerequisites.'
    });
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
      return reply.send({
        code: CODE.EINVAL_EXAM_ENVIRONMENT_PREREQUISITES,
        message: 'User has completed exam too recently to retake.'
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
    return reply.send({
      // TODO: Consider more specific code
      code: CODE.ERR_EXAM_ENVIRONMENT,
      message:
        'Unable to generate exam, due to: ' +
        JSON.stringify(maybeGeneratedExam.error)
    });
  }

  const generatedExam = maybeGeneratedExam.data;

  // Create exam attempt so, even if user disconnects, their attempt is still recorded:
  try {
    await this.prisma.newExamAttempt.create({
      data: {
        user_id: user.id,
        exam_id: exam.id,
        generated_exam_id: generatedExam.id,
        start_time: Date.now(),
        questions: [],
        needs_retake: false
      }
    });
  } catch (e) {
    void reply.code(500);
    return reply.send({
      code: CODE.ERR_EXAM_ENVIRONMENT_CREATE_EXAM_ATTEMPT,
      message: JSON.stringify(e)
    });
  }
  // NOTE: Anything that goes wrong after this point needs to unwind the exam attempt.

  // Map generated exam to user exam (a.k.a. public exam information for user)
  const userQuestions = generatedExam.questions.map(q => {
    // Get matching question from `exam`, but remove `is_correct` from `exam.questions[].answers[]`
    const matchingQuestion = exam.questions.find(
      examQuestion => examQuestion.id === q.id
    );
    if (!matchingQuestion) {
      throw new Error('Unreachable. Matching question should exist.');
    }

    const { answers, ...question } = matchingQuestion;

    const userAnswers = q.answers.map(answerId => {
      const matchingAnswer = answers.find(
        examAnswer => examAnswer.id === answerId
      );

      if (!matchingAnswer) {
        throw new Error('Unreachable. Matching answer should exist.');
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { is_correct, ...rest } = matchingAnswer;
      return rest;
    });

    const userQuestion = {
      ...question,
      answers: userAnswers
    };
    return userQuestion;
  });

  const userExam: UserExam = {
    ...exam,
    generated_exam_id: generatedExam.id,
    questions: userQuestions
  };

  return reply.send({
    code: CODE.EXAM_ENVIRONMENT_EXAM_GENERATED,
    data: {
      exam: userExam
    }
  });
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
  void reply.code(418);
  return reply.send({
    code: CODE.EXAM_ENVIRONMENT_EXAM_ATTEMPT_SUBMITTED
  });
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
  void reply.code(418);
  return reply.send({
    code: CODE.EXAM_ENVIRONMENT_SCREENSHOT_STORED
  });
}
