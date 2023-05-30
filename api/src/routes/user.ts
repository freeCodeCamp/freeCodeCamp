import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { isArray, isEmpty, isObject, pick } from 'lodash';
import { ObjectId } from 'bson';
import { CompletedChallenge, Prisma } from '@prisma/client';
import { schemas } from '../schemas';

export const userRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.addHook('onRequest', fastify.authenticateSession);

  // TODO: DELETE /account
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

  // TODO (PMVP): PUT /account/reset-progress
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

  // TODO (PMVP): GET /user/session-user
  fastify.get('/user/get-session-user', async (_req, _reply) => {
    let encodedUserToken;

    // NOTE: LB API tested truthiness of `username` here.
    //       This appeared to be entirely LB-related, so it is not done here.
    if (!_req.session.user) {
      // TODO (PMVP): Return error
      return {
        user: {},
        result: ''
      };
    }

    try {
      const userToken = await fastify.prisma.userToken.findFirst({
        where: { userId: _req.session.user.id }
      });
      if (userToken) {
        encodedUserToken = userToken.id;
      }
    } catch (e) {
      fastify.log.error(e);
      void _reply.code(500);
      return {
        message: 'flash.unexpected-error',
        type: 'danger'
      } as const;
    }

    try {
      const users = await fastify.prisma.user.findMany({
        where: { id: _req.session.user.id }
      });

      if (users.length > 1) {
        // TODO (PMVP): Send email to Kris
        return {
          message: 'flash.duplicate-account',
          type: 'danger'
        } as const;
      }

      if (isEmpty(users)) {
        // TODO (PMVP): Return error
        return {
          user: {},
          result: ''
        } as const;
      }

      // Safety: `users` is not empty, therefore `users[0]` is not undefined.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const user = users[0]!;

      // NOTE: LB API also had: conpletedChallengeCount, completedProjectCount, completedCertCount, completedLegacyCertCount - which do not exist on current user, and are not used on the client
      const {
        username,
        progressTimestamps,
        usernameDisplay,
        emailVerified,
        id,
        currentChallengeId,
        email,
        sendQuincyEmail,
        theme,
        sound,
        keyboardShortcuts,
        acceptedPrivacyTerms,
        donationEmails,
        about,
        completedChallenges,
        githubProfile,
        isApisMicroservicesCert,
        isBackEndCert,
        isCheater,
        isDonating,
        is2018DataVisCert,
        isDataVisCert,
        isFrontEndCert,
        isFullStackCert,
        isFrontEndLibsCert,
        isHonest,
        isInfosecCertV7,
        isInfosecQaCert,
        isQaCertV7,
        isJsAlgoDataStructCert,
        isRelationalDatabaseCertV8,
        isRespWebDesignCert,
        isSciCompPyCertV7,
        isDataAnalysisPyCertV7,
        isMachineLearningPyCertV7,
        isCollegeAlgebraPyCertV8,
        linkedin,
        location,
        name,
        partiallyCompletedChallenges,
        portfolio,
        profileUI,
        savedChallenges,
        twitter,
        website,
        yearsTopContributor
      } = user;

      const calendar = timestampsToCalendar(progressTimestamps);
      const points =
        isArray(progressTimestamps) && !isEmpty(progressTimestamps)
          ? progressTimestamps
          : [];

      const normalizedPartiallyCompletedChallenges =
        normalizePartiallyCompletedChallenges(partiallyCompletedChallenges);

      const normalizedSavedChallenges =
        normalizeSavedChallenges(savedChallenges);
      const response = {
        user: {
          [username]: {
            about,
            acceptedPrivacyTerms,
            // TODO: Once DB is normalized, this can be removed
            completedChallenges: completedChallenges.map(obj =>
              pick(obj, [
                'id',
                'completedDate',
                'solution',
                'githubLink',
                'challengeType',
                'files',
                'isManuallyApproved'
              ])
            ),
            currentChallengeId,
            donationEmails,
            email,
            emailVerified,
            githubProfile,
            isApisMicroservicesCert,
            isBackEndCert,
            isCheater,
            isDonating,
            is2018DataVisCert,
            isDataVisCert,
            isFrontEndCert,
            isFullStackCert,
            isFrontEndLibsCert,
            isHonest,
            isInfosecCertV7,
            isInfosecQaCert,
            isQaCertV7,
            isJsAlgoDataStructCert,
            isRelationalDatabaseCertV8,
            isRespWebDesignCert,
            isSciCompPyCertV7,
            isDataAnalysisPyCertV7,
            isMachineLearningPyCertV7,
            isCollegeAlgebraPyCertV8,
            keyboardShortcuts,
            linkedin,
            location,
            name,
            partiallyCompletedChallenges:
              normalizedPartiallyCompletedChallenges,
            portfolio,
            profileUI,
            sendQuincyEmail,
            theme,
            twitter,
            website,
            yearsTopContributor,
            sound,

            calendar,
            isEmailVerified: !!emailVerified,
            joinDate: new ObjectId(id).getTimestamp(),
            points,
            savedChallenges: normalizedSavedChallenges,
            username: usernameDisplay || username,
            userToken: encodedUserToken
          }
        },
        result: username
      };
      return response;
    } catch (e) {
      fastify.log.error(e);
      void _reply.code(500);
      return {
        message: 'flash.unexpected-error',
        type: 'danger'
      } as const;
    }
  });

  done();
};

// TODO: Once `progressTimestamps` is normalized in DB, this can be removed
function timestampsToCalendar(
  progressTimestamps: Prisma.JsonValue
): Record<number, number> {
  if (!isArray(progressTimestamps)) {
    return {};
  }

  const calendar = progressTimestamps.reduce((acc, timestamp) => {
    if (!timestamp) {
      return acc;
    }

    // @ts-expect-error - `timestamp` is at least not undefined
    const { timestamp: destructuredTimestamp } = timestamp;
    if (typeof timestamp === 'number') {
      // @ts-expect-error - `timestamp` is a number, and `acc` is a Record<number, number>
      acc[Math.floor(timestamp / 1000)] = 1;
    } else if (destructuredTimestamp) {
      const t = Math.floor(destructuredTimestamp / 1000);
      // @ts-expect-error - `timestamp` is a number, and `acc` is a Record<number, number>
      acc[t] = 1;
    }
    return acc;
  }, {} as Record<number, number>);

  // @ts-expect-error - Reduce reduces to Record<number, number>
  return calendar;
}

function normalizePartiallyCompletedChallenges(
  partiallyCompletedChallenges: Prisma.JsonValue
): Pick<CompletedChallenge, 'id' | 'completedDate'>[] {
  if (!isArray(partiallyCompletedChallenges)) {
    return [];
  }

  const npcc = partiallyCompletedChallenges.reduce((acc, challenge) => {
    if (!challenge) {
      return acc;
    }

    if (!isArray(acc)) {
      return [];
    }

    if (
      isObject(challenge) &&
      !isArray(challenge) &&
      challenge.id &&
      challenge.completedDate
    ) {
      const normalizedChallenge = {
        id: challenge.id,
        completedDate: challenge.completedDate
      };
      acc.push(normalizedChallenge);
    }

    return acc;
  }, []);

  // @ts-expect-error - Reduce reduces to Pick<CompletedChallenge, 'id' | 'completedDate'>[]
  return npcc;
}

type SavedChallenge = {
  id: string;
  files: {
    contents: string;
    ext: string;
    history: string[];
    key: string;
    name: string;
  };
  lastSaved: number;
};
function normalizeSavedChallenges(
  savedChallenges: Prisma.JsonValue
): SavedChallenge[] {
  if (!isArray(savedChallenges)) {
    return [];
  }

  const nsc = savedChallenges.reduce((acc, challenge) => {
    if (!challenge) {
      return acc;
    }

    if (!isArray(acc)) {
      return [];
    }

    if (
      isObject(challenge) &&
      !isArray(challenge) &&
      challenge.id &&
      challenge.files &&
      challenge.lastSaved
    ) {
      const normalizedChallenge = {
        id: challenge.id,
        files: challenge.files,
        lastSaved: challenge.lastSaved
      };
      acc.push(normalizedChallenge);
    }

    return acc;
  }, []);

  // @ts-expect-error - Reduce reduces to []
  return nsc;
}
