import { Experience, Portfolio } from '@prisma/client';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { ObjectId } from 'bson';
import { omit } from 'lodash-es';

import { isRestricted } from '../helpers/is-restricted.js';
import * as schemas from '../../schemas.js';
import { splitUser } from '../helpers/user-utils.js';
import {
  normalizeChallenges,
  type NormalizedChallenge,
  normalizeFlags,
  normalizeProfileUI,
  normalizeTwitter,
  normalizeBluesky,
  removeNulls,
  type NoNullProperties
} from '../../utils/normalize.js';
import {
  Calendar,
  getCalendar,
  getPoints,
  ProgressTimestamp
} from '../../utils/progress.js';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

type ExamResults = {
  numberOfCorrectAnswers: number;
  numberOfQuestionsInExam: number;
  percentCorrect: number;
  passingPercent: number;
  passed: boolean;
  examTimeInSeconds: number;
};

type PublicExamResults = {
  passed: boolean;
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
  showExperience: boolean;
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
  experience: NoNullProperties<Experience>[];
  profileUI: ProfileUI;
};

/**
 * Filters exam results to show only pass/fail status for public viewers.
 * This ensures detailed exam statistics (scores, time, correct answers) remain private.
 * @param examResults The full exam results object.
 * @returns A filtered object containing only the 'passed' field.
 */
const filterExamResultsForPublic = (
  examResults: ExamResults
): PublicExamResults => {
  return {
    passed: examResults.passed
  };
};

/**
 * Filters exam results in completed challenges for public viewers.
 * Preserves the challenge structure but removes detailed exam statistics.
 * @param challenges Array of completed challenges.
 * @param isSessionUser Whether the viewer is the owner of the profile.
 * @returns Challenges with filtered exam results for public viewers.
 */
const filterChallengesExamResults = (
  challenges: NormalizedChallenge[],
  isSessionUser: boolean
): NormalizedChallenge[] => {
  if (isSessionUser) {
    // Session user can see all their own exam results
    return challenges;
  }

  // Public viewers only see pass/fail status
  return challenges.map(challenge => {
    if (challenge.examResults) {
      return {
        ...challenge,
        examResults: filterExamResultsForPublic(challenge.examResults)
      };
    }
    return challenge;
  });
};

/**
 * Filters exam results in the completedExams array for public viewers.
 * @param completedExams Array of completed exams.
 * @param isSessionUser Whether the viewer is the owner of the profile.
 * @returns Exams with filtered results for public viewers.
 */
const filterCompletedExamsResults = (
  completedExams: Array<{
    id: string;
    completedDate: number;
    challengeType?: number;
    examResults: ExamResults;
  }>,
  isSessionUser: boolean
) => {
  if (isSessionUser) {
    // Session user can see all their own exam results
    return completedExams;
  }

  // Public viewers only see pass/fail status
  return completedExams.map(exam => ({
    ...exam,
    examResults: filterExamResultsForPublic(exam.examResults)
  }));
};

/**
 * Creates an object with the properties that are shared with the public.
 * @param user The raw user object.
 * @param isSessionUser Whether the viewer is the owner of the profile.
 * @returns The shared user object.
 */
export const replacePrivateData = (user: RawUser, isSessionUser = false) => {
  const {
    showAbout,
    showHeatMap,
    showCerts,
    showDonation,
    showLocation,
    showName,
    showPoints,
    showPortfolio,
    showExperience,
    showTimeLine
  } = user.profileUI;

  const completedChallenges = showTimeLine
    ? showCerts
      ? user.completedChallenges
      : user.completedChallenges.filter(
          c => c.challengeType !== challengeTypes.step
        )
    : [];

  return {
    about: showAbout ? user.about : '',
    calendar: showHeatMap ? user.calendar : {},
    completedChallenges: filterChallengesExamResults(
      completedChallenges,
      isSessionUser
    ),
    isDonating: showDonation ? user.isDonating : null,
    joinDate: showAbout ? user.joinDate : '',
    location: showLocation ? user.location : '',
    name: showName ? user.name : '',
    points: showPoints ? user.points : null,
    portfolio: showPortfolio ? user.portfolio : [],
    experience: showExperience ? user.experience : []
  };
};

const blockedUserAgentParts = ['python', 'google-apps-script', 'curl'];
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
    '/users/get-public-profile',
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
      req.log.debug(
        { username: req.query.username },
        'Fetching public profile'
      );
      // TODO(Post-MVP): look for duplicates unless we can make username unique in the db.
      const user = await fastify.prisma.user.findFirst({
        where: { username: req.query.username }
        // TODO: only select desired fields, then stop 'omit'ing the undesired
        // ones.
      });

      if (!user) {
        req.log.warn('User not found');
        void reply.code(404);
        return reply.send({});
      }

      const [flags, rest] = splitUser(user);

      const publicUser = omit(rest, [
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
        'isBanned'
      ]);

      const normalizedProfileUI = normalizeProfileUI(user.profileUI);

      // Determine if the viewer is the profile owner (used for filtering exam results)
      const isSessionUser = req.user?.id === user.id;

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
                username: user.username,
                usernameDisplay: user.usernameDisplay || user.username
              }
            }
          },
          result: user.username
        });
      } else {
        const progressTimestamps = user.progressTimestamps as
          | ProgressTimestamp[]
          | null;

        const sharedUser = replacePrivateData(
          {
            ...user,
            calendar: getCalendar(progressTimestamps),
            completedChallenges: normalizeChallenges(user.completedChallenges),
            location: user.location ?? '',
            joinDate: new ObjectId(user.id).getTimestamp().toISOString(),
            name: user.name ?? '',
            points: getPoints(progressTimestamps),
            profileUI: normalizedProfileUI,
            experience: user.experience.map(removeNulls) ?? []
          },
          isSessionUser
        );

        // Filter completedExams to hide detailed exam results from public viewers
        const filteredPublicUser = {
          ...publicUser,
          completedExams: filterCompletedExamsResults(
            publicUser.completedExams,
            isSessionUser
          )
        };

        const returnedUser = {
          ...removeNulls(filteredPublicUser),
          ...normalizeFlags(flags),
          ...sharedUser,
          picture: user.picture ?? '',
          profileUI: normalizedProfileUI,
          // TODO: should this always be returned? Shouldn't some privacy
          // setting control it? Same applies to website, githubProfile,
          // and linkedin.
          twitter: normalizeTwitter(user.twitter),
          bluesky: normalizeBluesky(user.bluesky),
          yearsTopContributor: user.yearsTopContributor,
          usernameDisplay: user.usernameDisplay || user.username
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
    '/users/exists',
    {
      schema: schemas.userExists,
      attachValidation: true
    },
    async (req, reply) => {
      if (req.validationError) {
        void reply.code(400);
        req.log.warn('Validation error: No username provided');
        return await reply.send({
          type: 'danger',
          message: 'username parameter is required'
        });
      }

      const username = req.query.username.toLowerCase();

      if (isRestricted(username)) {
        req.log.debug({ username }, 'Restricted username');
        return await reply.send({ exists: true });
      }

      const exists =
        (await fastify.prisma.user.count({
          where: { username }
        })) > 0;

      if (exists) {
        req.log.debug({ username }, 'User exists for username');
      } else {
        req.log.debug({ username }, 'User does not exist for username');
      }
      await reply.send({ exists });
    }
  );

  done();
};
