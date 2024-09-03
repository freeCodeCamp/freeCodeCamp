import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Portfolio } from '@prisma/client';
import { ObjectId } from 'mongodb';
import _ from 'lodash';

import * as schemas from '../schemas';
// Loopback creates a 64 character string for the user id, this customizes
// nanoid to do the same.  Any unique key _should_ be fine, though.
import { customNanoid } from '../utils/ids';
import {
  normalizeChallenges,
  normalizeFlags,
  normalizeProfileUI,
  normalizeTwitter,
  removeNulls,
  normalizeSurveys,
  NormalizedChallenge
} from '../utils/normalize';
import {
  Calendar,
  getCalendar,
  getPoints,
  type ProgressTimestamp
} from '../utils/progress';
import { encodeUserToken } from '../utils/tokens';
import { trimTags } from '../utils/validation';
import { generateReportEmail } from '../utils/email-templates';
import { createResetProperties } from '../utils/create-user';
import { challengeTypes } from '../../../shared/config/challenge-types';
import { isRestricted } from './helpers/is-restricted';

// user flags that the api-server returns as false if they're missing in the
// user document. Since Prisma returns null for missing fields, we need to
// normalize them to false.
// TODO(Post-MVP): remove this when the database is normalized.
const nullableFlags = [
  'is2018DataVisCert',
  'is2018FullStackCert',
  'isApisMicroservicesCert',
  'isBackEndCert',
  'isCheater',
  'isCollegeAlgebraPyCertV8',
  'isDataAnalysisPyCertV7',
  'isDataVisCert',
  // isDonating doesn't need fixing because it's not nullable
  'isFoundationalCSharpCertV8',
  'isFrontEndCert',
  'isFullStackCert',
  'isFrontEndLibsCert',
  'isHonest',
  'isInfosecCertV7',
  'isInfosecQaCert',
  'isJsAlgoDataStructCert',
  'isJsAlgoDataStructCertV8',
  'isMachineLearningPyCertV7',
  'isQaCertV7',
  'isRelationalDatabaseCertV8',
  'isRespWebDesignCert',
  'isSciCompPyCertV7',
  'isDataAnalysisPyCertV7',
  // isUpcomingPythonCertV8 exists in the db, but is not returned by the api-server
  // TODO(Post-MVP): delete it from the db?
  'keyboardShortcuts'
] as const;

const blockedUserAgentParts = ['python', 'google-apps-script', 'curl'];

type NullableFlag = (typeof nullableFlags)[number];

/**
 * Helper function to get the api url from the shared transcript link.
 *
 * @param msTranscript Shared transcript link.
 * @returns Microsoft transcript api url.
 */
export const getMsTranscriptApiUrl = (msTranscript: string) => {
  // example msTranscriptUrl: https://learn.microsoft.com/en-us/users/mot01/transcript/8u6awert43q1plo
  const url = new URL(msTranscript);

  // TODO(Post-MVP): throw if it doesn't match?
  const transcriptUrlRegex = /\/transcript\/([^/]+)\/?/;
  const id = transcriptUrlRegex.exec(url.pathname)?.[1];
  return `https://learn.microsoft.com/api/profiles/transcript/share/${
    id ?? ''
  }`;
};

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
      await fastify.prisma.userToken.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.msUsername.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.survey.deleteMany({
        where: { userId: req.user!.id }
      });
      await fastify.prisma.user.delete({
        where: { id: req.user!.id }
      });
      reply.clearOurCookies();

      return {};
    }
  );

  fastify.post(
    '/account/reset-progress',
    {
      schema: schemas.resetMyProgress
    },
    async req => {
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
  fastify.post('/user/user-token', async req => {
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
      const { count } = await fastify.prisma.userToken.deleteMany({
        where: { userId: req.user?.id }
      });

      if (count === 0) {
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
      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id }
      });
      const { username, reportDescription: report } = req.body;

      if (!username || !report) {
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
        subject: `Abuse Report : Reporting ${username}'s profile.`,
        text: generateReportEmail(user, username, report)
      });

      return {
        type: 'info',
        message: 'flash.report-sent',
        variables: { email: user.email }
      } as const;
    }
  );

  fastify.delete(
    '/user/ms-username',
    {
      schema: schemas.deleteMsUsername
    },
    async (req, reply) => {
      try {
        await fastify.prisma.msUsername.deleteMany({
          where: { userId: req.user?.id }
        });

        // TODO(Post-MVP): return a generic success message.
        return { msUsername: null };
      } catch (err) {
        fastify.log.error(err);
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
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400).send({
            message: 'flash.ms.transcript.link-err-1',
            type: 'error'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      try {
        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.user?.id }
        });

        const msApiRes = await fetch(
          getMsTranscriptApiUrl(req.body.msTranscriptUrl)
        );

        if (!msApiRes.ok) {
          return reply
            .status(404)
            .send({ type: 'error', message: 'flash.ms.transcript.link-err-2' });
        }

        const { userName } = (await msApiRes.json()) as { userName: string };

        if (!userName) {
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
        fastify.log.error(err);
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
        fastify.log.error(err);
        fastify.Sentry.captureException(err);
        void reply.code(500);
        return {
          type: 'error',
          message: 'flash.survey.err-3'
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
  fastify.get(
    '/user/get-session-user',
    {
      schema: schemas.getSessionUser
    },
    async (req, res) => {
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
            completedExams: true,
            currentChallengeId: true,
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
            isJsAlgoDataStructCert: true,
            isJsAlgoDataStructCertV8: true,
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
          void res.code(500);
          return { user: {}, result: '' };
        }
        // TODO: DRY this (the creation of the response body) and
        // get-public-profile's response body creation.

        const encodedToken = userToken
          ? encodeUserToken(userToken.id)
          : undefined;

        const flags = _.pick<typeof user, NullableFlag>(user, nullableFlags);
        const rest = _.omit<typeof user, NullableFlag>(user, nullableFlags);

        const {
          username,
          usernameDisplay,
          completedChallenges,
          progressTimestamps,
          twitter,
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
              ...normalizeFlags(flags),
              currentChallengeId: currentChallengeId ?? '',
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
              location: location ?? '',
              name: name ?? '',
              theme: theme ?? 'default',
              twitter: normalizeTwitter(twitter),
              username: usernameDisplay || username,
              userToken: encodedToken,
              completedSurveys: normalizeSurveys(completedSurveys),
              msUsername: msUsername?.msUsername
            }
          },
          result: user.username
        });
      } catch (err) {
        fastify.log.error(err);
        fastify.Sentry.captureException(err);
        void res.code(500);
        return { user: {}, result: '' };
      }
    }
  );

  done();
};

type ProfileUI = Partial<{
  isLocked: boolean;
  showAbout: boolean;
  showCerts: boolean;
  showDonation: boolean;
  showHeatMap: boolean;
  showLocation: boolean;
  showName: boolean;
  showPoints: boolean;
  showPortfolio: boolean;
  showTimeLine: boolean;
}>;

type RawUser = {
  about: string;
  completedChallenges: NormalizedChallenge[];
  calendar: Calendar;
  id: string;
  isDonating: boolean;
  joinDate: string;
  location: string;
  name: string;
  points: number;
  portfolio: Portfolio[];
  profileUI: ProfileUI;
};

/**
 * Creates an object with the properties that are shared with the public.
 * @param user The raw user object.
 * @returns The shared user object.
 */
export const replacePrivateData = (user: RawUser) => {
  const {
    showAbout,
    showHeatMap,
    showCerts,
    showDonation,
    showLocation,
    showName,
    showPoints,
    showPortfolio,
    showTimeLine
  } = user.profileUI;

  return {
    about: showAbout ? user.about : '',
    calendar: showHeatMap ? user.calendar : {},
    completedChallenges: showTimeLine
      ? showCerts
        ? user.completedChallenges
        : user.completedChallenges.filter(
            c => c.challengeType !== challengeTypes.step
          )
      : [],
    isDonating: showDonation ? user.isDonating : null,
    joinDate: showAbout ? user.joinDate : '',
    location: showLocation ? user.location : '',
    name: showName ? user.name : '',
    points: showPoints ? user.points : null,
    portfolio: showPortfolio ? user.portfolio : []
  };
};

/**
 * Plugin containing public GET routes for user account management. They are kept
 * separate because they do not require CSRF protection or authorization.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const userPublicGetRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/api/users/get-public-profile',
    {
      schema: schemas.getPublicProfile,
      onRequest: (req, reply, done) => {
        const userAgent = req.headers['user-agent'];

        if (
          userAgent &&
          blockedUserAgentParts.some(ua => userAgent.toLowerCase().includes(ua))
        ) {
          void reply.code(400);
          void reply.send(
            'This endpoint is no longer available outside of the freeCodeCamp ecosystem'
          );
        }
        done();
      }
    },
    async (req, reply) => {
      // TODO(Post-MVP): look for duplicates unless we can make username unique in the db.
      const user = await fastify.prisma.user.findFirst({
        where: { username: req.query.username }
        // TODO: only select desired fields, then stop 'omit'ing the undesired
        // ones.
      });

      if (!user) {
        void reply.code(404);
        return reply.send({});
      }

      const flags = _.pick<typeof user, NullableFlag>(user, nullableFlags);
      const rest = _.omit<typeof user, NullableFlag>(user, nullableFlags);

      const publicUser = _.omit(rest, [
        'currentChallengeId',
        'email',
        'emailVerified',
        'sendQuincyEmail',
        'theme',
        // keyboardShortcuts is included in flags.
        // 'keyboardShortcuts',
        'acceptedPrivacyTerms',
        'progressTimestamps',
        'unsubscribeId',
        'donationEmails',
        'externalId',
        'usernameDisplay',
        'isBanned'
      ]);

      const normalizedProfileUI = normalizeProfileUI(user.profileUI);

      void reply.code(200);
      if (normalizedProfileUI.isLocked) {
        // TODO(Post-MVP): just return isLocked: true and either a null user
        // or no user at all. (see other TODO in the else branch below)
        return reply.send({
          entities: {
            user: {
              [user.username]: {
                isLocked: true,
                profileUI: normalizedProfileUI,
                username: user.username
              }
            }
          },
          result: user.username
        });
      } else {
        const progressTimestamps = user.progressTimestamps as
          | ProgressTimestamp[]
          | null;
        const sharedUser = replacePrivateData({
          ...user,
          calendar: getCalendar(progressTimestamps),
          completedChallenges: normalizeChallenges(user.completedChallenges),
          location: user.location ?? '',
          joinDate: new ObjectId(user.id).getTimestamp().toISOString(),
          name: user.name ?? '',
          points: getPoints(progressTimestamps),
          profileUI: normalizedProfileUI
        });

        const returnedUser = {
          ...removeNulls(publicUser),
          ...normalizeFlags(flags),
          ...sharedUser,
          profileUI: normalizedProfileUI,
          // TODO: should this always be returned? Shouldn't some privacy
          // setting control it? Same applies to website, githubProfile,
          // and linkedin.
          twitter: normalizeTwitter(user.twitter),
          yearsTopContributor: user.yearsTopContributor
        };
        return reply.send({
          // TODO(Post-MVP): just return a user object (i.e. returnedUser) and
          // isLocked: false. The there should be no need for Type.Union in the
          // schema. Alternatively, have the user object be nullable and don't
          // bother with isLocked.
          entities: {
            user: { [user.username]: returnedUser }
          },
          result: user.username
        });
      }
    }
  );

  fastify.get(
    '/api/users/exists',
    {
      schema: schemas.userExists,
      attachValidation: true
    },
    async (req, reply) => {
      if (req.validationError) {
        void reply.code(400);
        // TODO(Post-MVP): return a message telling the requester that their
        // request was malformed.
        return await reply.send({ exists: true });
      }

      const username = req.query.username.toLowerCase();

      if (isRestricted(username)) return await reply.send({ exists: true });

      const exists =
        (await fastify.prisma.user.count({
          where: { username }
        })) > 0;

      await reply.send({ exists });
    }
  );

  done();
};
