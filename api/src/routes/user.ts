import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { ObjectId } from 'mongodb';
import { customAlphabet } from 'nanoid';

import { schemas } from '../schemas';
import {
  normalizeChallenges,
  normalizeProfileUI,
  normalizeTwitter,
  removeNulls
} from '../utils/normalize';
import {
  getCalendar,
  getPoints,
  type ProgressTimestamp
} from '../utils/progress';
import { encodeUserToken } from '../utils/user-token';
import { trimTags } from '../utils/validation';
import { generateReportEmail } from '../utils/email-templates';

// Loopback creates a 64 character string for the user id, this customizes
// nanoid to do the same.  Any unique key _should_ be fine, though.
const nanoid = customAlphabet(
  '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64
);

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
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/account/delete',
    {
      schema: schemas.deleteMyAccount
    },
    async (req, reply) => {
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });
        await fastify.prisma.user.delete({
          where: { id: req.session.user.id }
        });
        await req.session.destroy();
        void reply.clearCookie('sessionId');

        return {};
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        };
      }
    }
  );

  fastify.post(
    '/account/reset-progress',
    {
      schema: schemas.resetMyProgress
    },
    async (req, reply) => {
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            progressTimestamps: [Date.now()],
            currentChallengeId: '',
            isRespWebDesignCert: false,
            is2018DataVisCert: false,
            isFrontEndLibsCert: false,
            isJsAlgoDataStructCert: false,
            isApisMicroservicesCert: false,
            isInfosecQaCert: false,
            isQaCertV7: false,
            isInfosecCertV7: false,
            is2018FullStackCert: false,
            isFrontEndCert: false,
            isBackEndCert: false,
            isDataVisCert: false,
            isFullStackCert: false,
            isSciCompPyCertV7: false,
            isDataAnalysisPyCertV7: false,
            isMachineLearningPyCertV7: false,
            isRelationalDatabaseCertV8: false,
            isCollegeAlgebraPyCertV8: false,
            completedChallenges: [],
            savedChallenges: [],
            partiallyCompletedChallenges: [],
            needsModeration: false
          }
        });

        return {};
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        };
      }
    }
  );
  // TODO(Post-MVP): POST -> PUT
  fastify.post('/user/user-token', async req => {
    await fastify.prisma.userToken.deleteMany({
      where: { userId: req.session.user.id }
    });

    const token = await fastify.prisma.userToken.create({
      data: {
        created: new Date(),
        id: nanoid(),
        userId: req.session.user.id,
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
      try {
        const { count } = await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });

        if (count === 0) {
          void reply.code(404);
          return {
            message: 'userToken not found',
            type: 'info'
          } as const;
        }
        return { userToken: null };
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          type: 'danger',
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        } as const;
      }
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
      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.session.user.id }
        });
        const { username, reportDescription: report } = req.body;

        if (!username || !report || report === '') {
          // NOTE: Do we want to log these instances?
          void reply.code(400);
          return {
            type: 'danger',
            message: 'flash.provide-username'
          } as const;
        }

        await fastify.sendEmail({
          from: 'team@freecodecamp.org',
          to: 'support@freecodecamp.org',
          cc: user.email,
          subject: `Abuse Report: Reporting ${username}'s profile`,
          text: generateReportEmail(user, username, report)
        });

        return {
          type: 'info',
          message: 'flash.report-sent',
          variables: { email: user.email }
        } as const;
      } catch (err) {
        fastify.log.error(err);
        // TODO: redirect to the reported user's profile if there's an error
        void reply.code(500);
        return {
          type: 'danger',
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
        } as const;
      }
    }
  );

  done();
};

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
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.get(
    '/user/get-session-user',
    {
      schema: schemas.getSessionUser
    },
    async (req, res) => {
      try {
        const userTokenP = fastify.prisma.userToken.findFirst({
          where: { userId: req.session.user.id }
        });

        const userP = fastify.prisma.user.findUnique({
          where: { id: req.session.user.id },
          select: {
            about: true,
            acceptedPrivacyTerms: true,
            completedChallenges: true,
            currentChallengeId: true,
            email: true,
            emailVerified: true,
            githubProfile: true,
            id: true,
            is2018DataVisCert: true,
            isApisMicroservicesCert: true,
            isBackEndCert: true,
            isCheater: true,
            isCollegeAlgebraPyCertV8: true,
            isDataAnalysisPyCertV7: true,
            isDataVisCert: true,
            isDonating: true,
            isFrontEndCert: true,
            isFrontEndLibsCert: true,
            isFullStackCert: true,
            isHonest: true,
            isInfosecCertV7: true,
            isInfosecQaCert: true,
            isJsAlgoDataStructCert: true,
            isMachineLearningPyCertV7: true,
            isQaCertV7: true,
            isRelationalDatabaseCertV8: true,
            isRespWebDesignCert: true,
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
            username: true,
            usernameDisplay: true,
            website: true,
            yearsTopContributor: true
          }
        });

        const [userToken, user] = await Promise.all([userTokenP, userP]);

        if (!user?.username) {
          void res.code(500);
          return { user: {}, result: '' };
        }

        const encodedToken = userToken
          ? encodeUserToken(userToken.id)
          : undefined;

        const {
          username,
          usernameDisplay,
          completedChallenges,
          progressTimestamps,
          twitter,
          profileUI,
          ...publicUser
        } = user;

        return {
          user: {
            [username]: {
              ...removeNulls(publicUser),
              completedChallenges: normalizeChallenges(completedChallenges),
              completedChallengeCount: completedChallenges.length,
              // This assertion is necessary until the database is normalized.
              calendar: getCalendar(
                progressTimestamps as ProgressTimestamp[] | null
              ),
              // This assertion is necessary until the database is normalized.
              points: getPoints(
                progressTimestamps as ProgressTimestamp[] | null
              ),
              profileUI: normalizeProfileUI(profileUI),
              // TODO(Post-MVP) remove this and just use emailVerified
              isEmailVerified: user.emailVerified,
              joinDate: new ObjectId(user.id).getTimestamp().toISOString(),
              twitter: normalizeTwitter(twitter),
              username: usernameDisplay || username,
              userToken: encodedToken
            }
          },
          result: user.username
        };
      } catch (err) {
        fastify.log.error(err);
        void res.code(500);
        return { user: {}, result: '' };
      }
    }
  );

  done();
};
