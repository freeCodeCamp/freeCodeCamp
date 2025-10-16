import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { ObjectId } from 'mongodb';
import { FastifyInstance, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';

import * as schemas from '../../schemas.js';
import * as examEnvironmentSchemas from '../../exam-environment/schemas/index.js';
import { createResetProperties } from '../../utils/create-user.js';
import { customNanoid } from '../../utils/ids.js';
import { encodeUserToken } from '../../utils/tokens.js';
import { trimTags } from '../../utils/validation.js';
import { generateReportEmail } from '../../utils/email-templates.js';
import { splitUser } from '../helpers/user-utils.js';
import {
  normalizeChallenges,
  normalizeFlags,
  normalizeProfileUI,
  normalizeSurveys,
  normalizeTwitter,
  normalizeBluesky,
  removeNulls
} from '../../utils/normalize.js';
import { mapErr, type UpdateReqType } from '../../utils/index.js';
import {
  getCalendar,
  getPoints,
  ProgressTimestamp
} from '../../utils/progress.js';
import { DEPLOYMENT_ENV, JWT_SECRET } from '../../utils/env.js';
import {
  getExamAttemptHandler,
  getExamAttemptsByExamIdHandler,
  getExamAttemptsHandler
} from '../../exam-environment/routes/exam-environment.js';
import { ERRORS } from '../../exam-environment/utils/errors.js';

/**
 * Helper function to get the api url from the shared transcript link.
 * Example msTranscriptUrl: https://learn.microsoft.com/en-us/users/mot01/transcript/8u6awert43q1plo.
 *
 * @param msTranscript Shared transcript link.
 * @returns Microsoft transcript api url.
 */
export function getMsTranscriptApiUrl(msTranscript: string) {
  try {
    const url = new URL(msTranscript);
    const transcriptUrlRegex = /\/transcript\/([^/]+)\/?/;
    const id = transcriptUrlRegex.exec(url.pathname)?.[1];
    if (!id) {
      return { error: `Invalid transcript URL: ${msTranscript}`, data: null };
    }
    return {
      error: null,
      data: `https://learn.microsoft.com/api/profiles/transcript/share/${id}`
    };
  } catch (e) {
    return {
      error: `Invalid transcript URL: ${msTranscript}\n${JSON.stringify(e)}`,
      data: null
    };
  }
}

/**
 * Wrapper for endpoints related to user account management,
 * such as account deletion.
 *
 * @param fastify The Fastify instance.
 * @param _options Fastify options I guess?
 * @param done Callback to signal that the logic has completed.
 */
export const userRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/account/delete',
    {
      schema: schemas.deleteMyAccount
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} requested account deletion`);
      await fastify.prisma.userToken.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.msUsername.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.survey.deleteMany({
        where: { userId: req.user!.id }
      });
      try {
        await fastify.prisma.user.delete({
          where: { id: req.user!.id }
        });
      } catch (err) {
        if (
          err instanceof PrismaClientKnownRequestError &&
          err.code === 'P2025'
        ) {
          logger.warn(
            err,
            `User with id ${req.user?.id} not found for deletion.`
          );
        } else {
          logger.error(err, 'Error deleting user account');
          throw err;
        }
      }
      reply.clearOurCookies();

      return {};
    }
  );

  fastify.delete(
    '/users/:userId',
    {
      schema: schemas.deleteUser
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      const { userId } = req.params;

      if (userId !== req.user?.id) {
        logger.warn(
          { requestedUserId: userId, authUserId: req.user?.id },
          'User attempted to delete an account they do not have authorization to.'
        );
        void reply.code(403);
        return { type: 'error', message: 'forbidden' } as const;
      }

      logger.info(`User ${req.user.id} requested account deletion`);
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.user.id }
        });
        await fastify.prisma.msUsername.deleteMany({
          where: { userId: req.user.id }
        });
        await fastify.prisma.survey.deleteMany({
          where: { userId: req.user.id }
        });
        await fastify.prisma.user.delete({
          where: { id: req.user.id }
        });
      } catch (err) {
        // Whilst this is behind auth, this should never happen
        if (
          err instanceof PrismaClientKnownRequestError &&
          err.code === 'P2025'
        ) {
          logger.warn(
            err,
            `User with id ${req.user?.id} not found for deletion.`
          );
          return reply.code(404).send({ type: 'error', message: 'not found' });
        } else {
          logger.error(err, 'Error deleting user account');
          throw err;
        }
      }
      reply.clearOurCookies();

      return reply.code(204).send();
    }
  );

  fastify.post(
    '/account/reset-progress',
    {
      schema: schemas.resetMyProgress
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} requested progress reset`);
      await fastify.prisma.userToken.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.msUsername.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.survey.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.user.update({
        where: { id: req.user!.id },
        data: createResetProperties()
      });

      return {};
    }
  );
  // TODO(Post-MVP): POST -> PUT
  fastify.post('/user/user-token', async (req, reply) => {
    const logger = fastify.log.child({ req, res: reply });
    logger.info(`User ${req.user?.id} requested a new user token`);

    await fastify.prisma.userToken.deleteMany({
      where: { userId: req.user?.id }
    });

    const token = await fastify.prisma.userToken.create({
      data: {
        created: new Date(),
        id: customNanoid(),
        userId: req.user!.id,
        // TODO(Post-MVP): expire after ttl has passed.
        ttl: 77760000000 // 900 * 24 * 60 * 60 * 1000
      }
    });

    return {
      userToken: encodeUserToken(token.id)
    };
  });

  fastify.delete(
    '/user/user-token',
    {
      schema: schemas.deleteUserToken
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} requested token deletion`);

      const { count } = await fastify.prisma.userToken.deleteMany({
        where: { userId: req.user?.id }
      });

      if (count === 0) {
        logger.warn('No userToken found for deletion');
        void reply.code(404);
        return {
          message: 'userToken not found',
          type: 'info'
        } as const;
      }
      return { userToken: null };
    }
  );

  fastify.post(
    '/user/report-user',
    {
      schema: schemas.reportUser,
      preHandler: (req, _reply, done) => {
        req.body.reportDescription = trimTags(req.body.reportDescription);
        done();
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} reported user ${req.body.username}`);

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id }
      });

      if (!user.email) {
        logger.warn('User has no email');
        void reply.code(403);
        return reply.send({
          type: 'danger',
          message: 'flash.report-error'
        });
      }

      const { username, reportDescription: report } = req.body;

      // TODO: `findUnique` once db migration forces unique usernames
      const maybeReportedUsers = await mapErr(
        fastify.prisma.user.findMany({
          where: { username }
        })
      );

      if (maybeReportedUsers.hasError) {
        logger.error(
          { error: maybeReportedUsers.error, username },
          'Error finding reported user.'
        );
        fastify.Sentry.captureException(maybeReportedUsers.error);
        void reply.code(500);
        return {
          type: 'danger',
          message: 'flash.generic-error'
        } as const;
      }

      const reportedUsers = maybeReportedUsers.data;

      if (reportedUsers.length !== 1) {
        logger.warn({ username }, 'Reported user not found');
        void reply.code(404);
        return {
          type: 'danger',
          message: 'flash.report-error'
        } as const;
      }

      const reportedUser = reportedUsers[0]!;

      await fastify.sendEmail({
        from: 'team@freecodecamp.org',
        to: 'support@freecodecamp.org',
        cc: user.email,
        subject: `Abuse Report : Reporting ${reportedUser.username}'s profile.`,
        text: generateReportEmail(user, reportedUser, report)
      });

      reply.send({
        type: 'info',
        message: 'flash.report-sent',
        variables: { email: user.email }
      });
    }
  );

  fastify.delete(
    '/user/ms-username',
    {
      schema: schemas.deleteMsUsername
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} requested unlinking of msUsername`);

      try {
        await fastify.prisma.msUsername.deleteMany({
          where: { userId: req.user?.id }
        });

        // TODO(Post-MVP): return a generic success message.
        return { msUsername: null };
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
        void reply.code(500);
        void reply.send({
          message: 'flash.ms.transcript.unlink-err',
          type: 'error'
        });
      }
    }
  );

  fastify.post(
    '/user/ms-username',
    {
      schema: schemas.postMsUsername,
      errorHandler(error, req, reply) {
        const logger = fastify.log.child({ req, res: reply });
        if (error.validation) {
          logger.warn({ validationError: error.validation });
          void reply.code(400).send({
            message: 'flash.ms.transcript.link-err-1',
            type: 'error'
          });
        } else {
          fastify.errorHandler(error, req, reply);
        }
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(
        `User ${req.user?.id} requested linking of msUsername "${req.body.msTranscriptUrl}"`
      );

      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.user?.id }
        });

        const maybeTranscriptUrl = getMsTranscriptApiUrl(
          req.body.msTranscriptUrl
        );

        if (maybeTranscriptUrl.error !== null) {
          logger.warn(
            { error: maybeTranscriptUrl.error },
            'Unable to parse Microsoft transcript URL'
          );
          return reply
            .status(400)
            .send({ type: 'error', message: 'flash.ms.transcript.link-err-1' });
        }

        const transcriptUrl = maybeTranscriptUrl.data;

        const msApiRes = await fetch(transcriptUrl);

        if (!msApiRes.ok) {
          logger.warn(
            { status: msApiRes.status },
            "Unable to fetch user's Microsoft transcript"
          );
          return reply
            .status(404)
            .send({ type: 'error', message: 'flash.ms.transcript.link-err-2' });
        }

        const { userName } = (await msApiRes.json()) as { userName: string };

        if (!userName) {
          logger.warn('No userName found in msApiRes');
          return reply.status(500).send({
            type: 'error',
            message: 'flash.ms.transcript.link-err-3'
          });
        }

        // TODO(Post-MVP): make msUsername unique, then we can simply try to
        // create the record and catch the error.
        const usernameUsed = !!(await fastify.prisma.msUsername.findFirst({
          where: {
            msUsername: userName
          }
        }));

        if (usernameUsed) {
          logger.warn('msUsername already in use');
          return reply.status(403).send({
            type: 'error',
            message: 'flash.ms.transcript.link-err-4'
          });
        }

        // TODO(Post-MVP): do we need to store tll in the database? We aren't
        // storing the creation date, so we can't expire it.

        // 900 days in ms
        const ttl = 900 * 24 * 60 * 60 * 1000;

        // TODO(Post-MVP): make userId unique and then we can upsert.

        await fastify.prisma.msUsername.deleteMany({
          where: { userId: user.id }
        });

        await fastify.prisma.msUsername.create({
          data: {
            msUsername: userName,
            ttl,
            userId: user.id
          }
        });

        return { msUsername: userName };
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
        return reply.code(500).send({
          type: 'error',
          message: 'flash.ms.transcript.link-err-6'
        });
      }
    }
  );

  fastify.post(
    '/user/submit-survey',
    {
      schema: schemas.submitSurvey,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400).send({
            type: 'error',
            message: 'flash.survey.err-1'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const logger = fastify.log.child({ req, res: reply });
      logger.info(`User ${req.user?.id} submitted a survey`);
      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.user?.id }
        });
        const { surveyResults } = req.body;
        const { title } = surveyResults;

        const completedSurveys = await fastify.prisma.survey.findMany({
          where: { userId: user.id }
        });

        const surveyAlreadyTaken = completedSurveys.some(
          s => s.title === title
        );
        if (surveyAlreadyTaken) {
          logger.warn('Survey already taken');
          return reply.code(400).send({
            type: 'error',
            message: 'flash.survey.err-2'
          });
        }

        const newSurvey = {
          ...surveyResults,
          userId: user.id
        };

        await fastify.prisma.survey.create({
          data: newSurvey
        });

        return {
          type: 'success',
          message: 'flash.survey.success'
        } as const;
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
        void reply.code(500);
        return {
          type: 'error',
          message: 'flash.survey.err-3'
        } as const;
      }
    }
  );

  fastify.post(
    '/user/exam-environment/token',
    {
      schema: schemas.userExamEnvironmentToken
    },
    examEnvironmentTokenHandler
  );

  fastify.get(
    '/user/exam-environment/exam/attempts',
    {
      schema: examEnvironmentSchemas.examEnvironmentGetExamAttempts
    },
    getExamAttemptsHandler
  );
  fastify.get(
    '/user/exam-environment/exam/attempt/:attemptId',
    {
      schema: examEnvironmentSchemas.examEnvironmentGetExamAttempt
    },
    getExamAttemptHandler
  );
  fastify.get(
    '/user/exam-environment/exams/:examId/attempts',
    {
      schema: examEnvironmentSchemas.examEnvironmentGetExamAttemptsByExamId
    },
    getExamAttemptsByExamIdHandler
  );

  done();
};

// eslint-disable-next-line jsdoc/require-param, jsdoc/require-returns
/**
 * Generate a new authorization token for the given user, and invalidates any existing tokens.
 *
 * Requires the user to be authenticated.
 */
async function examEnvironmentTokenHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof schemas.userExamEnvironmentToken>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info(`User ${req.user?.id} requested a new exam environment token`);
  const userId = req.user?.id;
  if (!userId) {
    throw new Error('Unreachable. User should be authenticated.');
  }

  // In non-production environments, only staff are allowed to generate a token
  if (
    DEPLOYMENT_ENV !== 'production' &&
    (!req.user?.email?.endsWith('@freecodecamp.org') ||
      !req.user?.emailVerified)
  ) {
    logger.info(
      `User not allowed to generate authorization token on ${DEPLOYMENT_ENV}.`
    );
    void reply.code(403);
    return reply.send(
      ERRORS.FCC_ERR_EXAM_ENVIRONMENT(
        `User not allowed to generate authorization token in ${DEPLOYMENT_ENV} environment.`
      )
    );
  }

  // Delete (invalidate) any existing tokens for the user.
  await this.prisma.examEnvironmentAuthorizationToken.deleteMany({
    where: {
      userId
    }
  });

  const ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

  const token = await this.prisma.examEnvironmentAuthorizationToken.create({
    data: {
      expireAt: new Date(Date.now() + ONE_YEAR_IN_MS),
      userId
    }
  });

  const examEnvironmentAuthorizationToken = jwt.sign(
    { examEnvironmentAuthorizationToken: token.id },
    JWT_SECRET
  );

  void reply.code(201);
  void reply.send({
    examEnvironmentAuthorizationToken
  });
}

/**
 * Plugin containing GET routes for user account management. They are kept
 * separate because they do not require CSRF protection.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const userGetRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/user/get-session-user',
    {
      schema: schemas.getSessionUser
    },
    async (req, res) => {
      const logger = fastify.log.child({ req, res });
      // This is one of the most requested routes. To avoid spamming the logs
      // with this route, we'll log requests at the debug level.
      logger.debug({ userId: req.user?.id });
      try {
        const userTokenP = fastify.prisma.userToken.findFirst({
          where: { userId: req.user!.id }
        });

        const userP = fastify.prisma.user.findUnique({
          where: { id: req.user!.id },
          select: {
            about: true,
            acceptedPrivacyTerms: true,
            completedChallenges: true,
            completedDailyCodingChallenges: true,
            completedExams: true,
            currentChallengeId: true,
            quizAttempts: true,
            email: true,
            emailVerified: true,
            githubProfile: true,
            id: true,
            is2018DataVisCert: true,
            is2018FullStackCert: true,
            isApisMicroservicesCert: true,
            isBackEndCert: true,
            isCheater: true,
            isCollegeAlgebraPyCertV8: true,
            isDataAnalysisPyCertV7: true,
            isDataVisCert: true,
            isDonating: true,
            isFoundationalCSharpCertV8: true,
            isFrontEndCert: true,
            isFrontEndLibsCert: true,
            isFullStackCert: true,
            isHonest: true,
            isInfosecCertV7: true,
            isInfosecQaCert: true,
            isJavascriptCertV9: true,
            isJsAlgoDataStructCert: true,
            isJsAlgoDataStructCertV8: true,
            isMachineLearningPyCertV7: true,
            isQaCertV7: true,
            isRelationalDatabaseCertV8: true,
            isRespWebDesignCert: true,
            isRespWebDesignCertV9: true,
            isSciCompPyCertV7: true,
            keyboardShortcuts: true,
            linkedin: true,
            location: true,
            name: true,
            partiallyCompletedChallenges: true,
            picture: true,
            portfolio: true,
            profileUI: true,
            progressTimestamps: true,
            savedChallenges: true,
            sendQuincyEmail: true,
            theme: true,
            twitter: true,
            bluesky: true,
            username: true,
            usernameDisplay: true,
            website: true,
            yearsTopContributor: true
          }
        });

        const completedSurveysP = fastify.prisma.survey.findMany({
          where: { userId: req.user!.id }
        });

        const msUsernameP = fastify.prisma.msUsername.findFirst({
          where: { userId: req.user?.id }
        });

        const [userToken, user, completedSurveys, msUsername] =
          await Promise.all([
            userTokenP,
            userP,
            completedSurveysP,
            msUsernameP
          ]);

        if (!user?.username) {
          logger.error(`User ${req.user?.id} has no username`);
          void res.code(500);
          return { user: {}, result: '' };
        }
        // TODO: DRY this (the creation of the response body) and
        // get-public-profile's response body creation.

        const encodedToken = userToken
          ? encodeUserToken(userToken.id)
          : undefined;

        const [flags, rest] = splitUser(user);

        const {
          email,
          emailVerified,
          username,
          usernameDisplay,
          completedChallenges,
          completedDailyCodingChallenges,
          progressTimestamps,
          twitter,
          bluesky,
          profileUI,
          currentChallengeId,
          location,
          name,
          theme,
          ...publicUser
        } = rest;

        await res.send({
          user: {
            [username]: {
              ...removeNulls(publicUser),
              sendQuincyEmail: publicUser.sendQuincyEmail,
              ...normalizeFlags(flags),
              picture: publicUser.picture ?? '',
              email: email ?? '',
              currentChallengeId: currentChallengeId ?? '',
              completedChallenges: normalizeChallenges(completedChallenges),
              completedChallengeCount: completedChallenges.length,
              completedDailyCodingChallenges,
              // This assertion is necessary until the database is normalized.
              calendar: getCalendar(
                progressTimestamps as ProgressTimestamp[] | null
              ),
              emailVerified: !!emailVerified,
              // This assertion is necessary until the database is normalized.
              points: getPoints(
                progressTimestamps as ProgressTimestamp[] | null
              ),
              profileUI: normalizeProfileUI(profileUI),
              // TODO(Post-MVP) remove this and just use emailVerified
              isEmailVerified: !!emailVerified,
              joinDate: new ObjectId(user.id).getTimestamp().toISOString(),
              location: location ?? '',
              name: name ?? '',
              theme: theme ?? 'default',
              twitter: normalizeTwitter(twitter),
              bluesky: normalizeBluesky(bluesky),
              username,
              usernameDisplay: usernameDisplay || username,
              userToken: encodedToken,
              completedSurveys: normalizeSurveys(completedSurveys),
              msUsername: msUsername?.msUsername
            }
          },
          result: user.username
        });
      } catch (err) {
        logger.error(err);
        fastify.Sentry.captureException(err);
        void res.code(500);
        return { user: {}, result: '' };
      }
    }
  );

  done();
};
