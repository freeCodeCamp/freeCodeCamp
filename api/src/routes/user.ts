import _, { isEmpty } from 'lodash';
import { ObjectId } from 'mongodb';
import { customAlphabet } from 'nanoid';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { schemas } from '../schemas';
import {
  type ProgressTimestamp,
  getCalendar,
  getPoints
} from '../utils/progress';
import {
  normalizeTwitter,
  removeNulls,
  normalizeProfileUI,
  normalizeChallenges
} from '../utils/normalize';
import { encodeUserToken } from '../utils/user-token';

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
            sound: true,
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
          savedChallenges,
          partiallyCompletedChallenges,
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
              partiallyCompletedChallenges: isEmpty(
                partiallyCompletedChallenges
              )
                ? undefined
                : partiallyCompletedChallenges,
              // This assertion is necessary until the database is normalized.
              points: getPoints(
                progressTimestamps as ProgressTimestamp[] | null
              ),
              profileUI: normalizeProfileUI(profileUI),
              savedChallenges: isEmpty(savedChallenges)
                ? undefined
                : savedChallenges,
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

  done();
};
