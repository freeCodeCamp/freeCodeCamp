import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import jwt from 'jsonwebtoken';
import { uniqBy } from 'lodash';
import { CompletedExam, ExamResults } from '@prisma/client';
import isURL from 'validator/lib/isURL';

import { challengeTypes } from '../../../shared/config/challenge-types';
import * as schemas from '../schemas';
import {
  jsCertProjectIds,
  multifileCertProjectIds,
  multifilePythonCertProjectIds,
  updateUserChallengeData,
  type CompletedChallenge,
  saveUserChallengeData,
  msTrophyChallenges
} from '../utils/common-challenge-functions';
import { JWT_SECRET } from '../utils/env';
import {
  formatCoderoadChallengeCompletedValidation,
  formatProjectCompletedValidation
} from '../utils/error-formatting';
import { getChallenges } from '../utils/get-challenges';
import { ProgressTimestamp, getPoints } from '../utils/progress';
import {
  validateExamFromDbSchema,
  validateGeneratedExamSchema,
  validateUserCompletedExamSchema,
  validateExamResultsSchema
} from '../utils/exam-schemas';
import { generateRandomExam, createExamResults } from '../utils/exam';
import {
  canSubmitCodeRoadCertProject,
  verifyTrophyWithMicrosoft
} from './helpers/challenge-helpers';

interface JwtPayload {
  userToken: string;
}

// TODO(Post-MVP): This could be narrowed down to only the fields needed by
// specific endpoints, but that means complicating the update helper.
const userChallengeSelect = {
  id: true,
  completedChallenges: true,
  partiallyCompletedChallenges: true,
  progressTimestamps: true,
  needsModeration: true,
  savedChallenges: true
};

/**
 * Plugin for the challenge submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const challenges = getChallenges();

  fastify.post(
    '/coderoad-challenge-completed',
    {
      schema: schemas.coderoadChallengeCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatCoderoadChallengeCompletedValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { 'coderoad-user-token': encodedUserToken } = req.headers;
      const { tutorialId } = req.body;

      let userToken;
      try {
        const payload = jwt.verify(encodedUserToken, JWT_SECRET) as JwtPayload;
        userToken = payload.userToken;
      } catch {
        void reply.code(400);
        return { type: 'error', msg: `invalid user token` } as const;
      }

      const tutorialRepo = tutorialId.split(':')[0];
      const tutorialOrg = tutorialRepo?.split('/')?.[0];

      if (tutorialOrg !== 'freeCodeCamp') {
        void reply.code(400);
        return {
          type: 'error',
          msg: `Tutorial not hosted on freeCodeCamp GitHub account`
        } as const;
      }

      const codeRoadChallenges = challenges.filter(
        ({ challengeType }) =>
          challengeType === challengeTypes.codeAllyPractice ||
          challengeType === challengeTypes.codeAllyCert
      );

      const challenge = codeRoadChallenges.find(challenge => {
        return tutorialRepo && challenge.url?.endsWith(tutorialRepo);
      });

      if (!challenge) {
        void reply.code(400);
        return { type: 'error', msg: 'Tutorial name is not valid' } as const;
      }

      const { id: challengeId, challengeType } = challenge;
      try {
        const tokenInfo = await fastify.prisma.userToken.findUnique({
          where: { id: userToken }
        });

        if (!tokenInfo) {
          void reply.code(400);
          return { type: 'error', msg: 'User token not found' } as const;
        }

        const { userId } = tokenInfo;

        const user = await fastify.prisma.user.findFirstOrThrow({
          where: { id: userId }
        });

        if (!user) {
          void reply.code(400);
          return {
            type: 'error',
            msg: 'User for user token not found'
          } as const;
        }

        const completedDate = Date.now();
        const { completedChallenges = [], partiallyCompletedChallenges = [] } =
          user;

        const isCompleted = completedChallenges.some(
          challenge => challenge.id === challengeId
        );

        if (challengeType === challengeTypes.codeAllyCert && !isCompleted) {
          const finalChallenge = {
            id: challengeId,
            completedDate
          };

          await fastify.prisma.user.update({
            where: { id: req.user?.id },
            data: {
              partiallyCompletedChallenges: uniqBy(
                [finalChallenge, ...partiallyCompletedChallenges],
                'id'
              )
            }
          });
        } else {
          await updateUserChallengeData(fastify, user, challengeId, {
            id: challengeId,
            completedDate
          });
        }
      } catch {
        // TODO(Post-MVP): don't catch, just let Sentry handle this.
        void reply.code(400);
        return {
          type: 'error',
          msg: 'An error occurred trying to submit the challenge'
        } as const;
      }
      return {
        type: 'success',
        msg: 'Successfully submitted challenge'
      } as const;
    }
  );

  fastify.post(
    '/project-completed',
    {
      schema: schemas.projectCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatProjectCompletedValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      // TODO: considering validation is determined by `challengeType`, it should not come from the client
      //       Determine `challengeType` by `id`
      const { id: projectId, challengeType, solution, githubLink } = req.body;
      const userId = req.user?.id;

      // If `backEndProject`:
      // - `solution` needs to exist, but does not have to be valid URL
      // - `githubLink` needs to exist and be valid URL
      if (challengeType === challengeTypes.backEndProject) {
        if (!solution || !isURL(githubLink + '')) {
          return void reply.code(403).send({
            type: 'error',
            message: 'That does not appear to be a valid challenge submission.'
          });
        }
      } else if (solution && !isURL(solution + '')) {
        return void reply.code(403).send({
          type: 'error',
          message: 'That does not appear to be a valid challenge submission.'
        });
      }

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: userChallengeSelect
      });

      if (
        challengeType === challengeTypes.codeAllyCert &&
        !canSubmitCodeRoadCertProject(projectId, user)
      ) {
        void reply.code(403);
        return {
          type: 'error',
          message:
            'You have to complete the project before you can submit a URL.'
        } as const;
      }

      const challenge = {
        challengeType,
        solution,
        githubLink,
        id: projectId,
        completedDate: Date.now()
      };
      const progressTimestamps = user.progressTimestamps as ProgressTimestamp[];
      const points = getPoints(progressTimestamps);

      const { alreadyCompleted, completedDate } = await updateUserChallengeData(
        fastify,
        user,
        projectId,
        challenge
      );

      return {
        alreadyCompleted,
        // TODO(Post-MVP): audit the client and remove this if the client does
        // not use it.
        completedDate,
        points: alreadyCompleted ? points : points + 1
      };
    }
  );

  fastify.post(
    '/backend-challenge-completed',
    {
      schema: schemas.backendChallengeCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatProjectCompletedValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async req => {
      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id },

        select: userChallengeSelect
      });
      const progressTimestamps = user.progressTimestamps as
        | ProgressTimestamp[]
        | null;
      const points = getPoints(progressTimestamps);

      const completedChallenge = {
        completedDate: Date.now(),
        ...req.body
      };

      const { alreadyCompleted } = await updateUserChallengeData(
        fastify,
        user,
        req.body.id,
        completedChallenge
      );

      return {
        alreadyCompleted,
        points: alreadyCompleted ? points : points + 1,
        completedDate: completedChallenge.completedDate
      };
    }
  );

  fastify.post(
    '/modern-challenge-completed',
    {
      schema: schemas.modernChallengeCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatProjectCompletedValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async req => {
      const { id, files, challengeType } = req.body;

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id },
        select: userChallengeSelect
      });
      const RawProgressTimestamp = user.progressTimestamps as
        | ProgressTimestamp[]
        | null;
      const points = getPoints(RawProgressTimestamp);

      const completedChallenge: CompletedChallenge = {
        id,
        files,
        completedDate: Date.now()
      };

      if (challengeType === challengeTypes.multifileCertProject) {
        completedChallenge.isManuallyApproved = false;
        user.needsModeration = true;
      }

      if (
        jsCertProjectIds.includes(id) ||
        multifileCertProjectIds.includes(id) ||
        multifilePythonCertProjectIds.includes(id)
      ) {
        completedChallenge.challengeType = challengeType;
      }

      const { alreadyCompleted, userSavedChallenges: savedChallenges } =
        await updateUserChallengeData(fastify, user, id, completedChallenge);

      return {
        alreadyCompleted,
        points: alreadyCompleted ? points : points + 1,
        completedDate: completedChallenge.completedDate,
        savedChallenges
      };
    }
  );

  fastify.post(
    '/save-challenge',
    {
      schema: schemas.saveChallenge,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return formatProjectCompletedValidation(error.validation);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { files, id: challengeId } = req.body;
      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id }
      });
      const challenge = {
        id: challengeId,
        files
      };

      if (
        !multifileCertProjectIds.includes(challengeId) &&
        !multifilePythonCertProjectIds.includes(challengeId)
      ) {
        void reply.code(403).send('That challenge type is not saveable.');
      }

      const userSavedChallenges = saveUserChallengeData(
        challengeId,
        user.savedChallenges,
        challenge
      );

      await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          savedChallenges: userSavedChallenges
        }
      });

      void reply.send({ savedChallenges: userSavedChallenges });
    }
  );

  fastify.get(
    '/exam/:id',
    {
      schema: schemas.exam,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return { error: `Valid 'id' not found in request parameters.` };
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { id } = req.params;

      const { completedChallenges } =
        await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.user?.id },
          select: { completedChallenges: true }
        });

      const examFromDb = await fastify.prisma.exam.findUnique({
        where: { id }
      });

      if (!examFromDb) {
        void reply.code(500);
        return {
          error: 'An error occurred trying to get the exam from the database.'
        };
      }

      const validExamFromDbSchema = validateExamFromDbSchema(examFromDb);

      if ('error' in validExamFromDbSchema) {
        void reply.code(500);
        return {
          error:
            'An error occurred validating the exam information from the database.'
        };
      }

      const { prerequisites, numberOfQuestionsInExam, title } = examFromDb;

      // Validate User has completed prerequisite challenges
      const prerequisiteIds = prerequisites.map(p => p.id);
      const completedPrerequisites = completedChallenges.filter(c =>
        prerequisiteIds.includes(c.id)
      );

      if (completedPrerequisites.length !== prerequisiteIds.length) {
        void reply.code(403);
        return {
          error: `You have not completed the required challenges to start the '${title}'.`
        };
      }

      const randomizedExam = generateRandomExam(examFromDb);
      const validGeneratedExamSchema = validateGeneratedExamSchema(
        randomizedExam,
        numberOfQuestionsInExam
      );

      if (validGeneratedExamSchema.error) {
        fastify.log.error(validGeneratedExamSchema.error);
        fastify.Sentry.captureException(validGeneratedExamSchema.error);
        void reply.code(500);
        return { error: 'An error occurred trying to randomize the exam.' };
      }

      return {
        generatedExam: randomizedExam
      };
    }
  );

  fastify.post(
    '/ms-trophy-challenge-completed',
    {
      schema: schemas.msTrophyChallengeCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          void reply.send({ type: 'error', message: 'flash.ms.trophy.err-2' });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      try {
        const challengeId = req.body.id;
        const challenge = msTrophyChallenges.find(
          challenge => challenge.id === challengeId
        );

        if (!challenge) {
          return reply
            .code(400)
            .send({ type: 'error', message: 'flash.ms.trophy.err-2' });
        }

        const msUser = await fastify.prisma.msUsername.findFirst({
          where: { userId: req.user?.id }
        });

        if (!msUser || !msUser.msUsername) {
          return reply
            .code(403)
            .send({ type: 'error', message: 'flash.ms.trophy.err-1' });
        }

        const { msUsername } = msUser;

        // TODO: log error if msTrophyId not found?
        const msTrophyId = challenge.msTrophyId ?? '';

        const msTrophyStatus = await verifyTrophyWithMicrosoft({
          msUsername,
          msTrophyId
        });

        if (msTrophyStatus.type === 'error') {
          return reply.code(403).send(msTrophyStatus);
        }

        const user = await fastify.prisma.user.findUniqueOrThrow({
          where: { id: req.user?.id },
          select: userChallengeSelect
        });

        const progressTimestamps =
          user.progressTimestamps as ProgressTimestamp[];

        const completedChallenge = {
          id: challengeId,
          solution: msTrophyStatus.msUserAchievementsApiUrl,
          completedDate: Date.now()
        };

        const { alreadyCompleted, completedDate } =
          await updateUserChallengeData(
            fastify,
            user,
            challengeId,
            completedChallenge
          );

        return {
          alreadyCompleted,
          points: getPoints(progressTimestamps) + (alreadyCompleted ? 0 : 1),
          completedDate
        };
      } catch (error) {
        fastify.log.error(error);
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return {
          type: 'error',
          message: 'flash.ms.trophy.err-5'
        } as const;
      }
    }
  );

  fastify.post(
    '/exam-challenge-completed',
    {
      schema: schemas.examChallengeCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          void reply.send({
            error: 'Valid request body not found in attempt to submit exam.'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      try {
        const userId = req.user?.id;
        const { userCompletedExam, id, challengeType } = req.body;

        const { completedChallenges, completedExams, progressTimestamps } =
          await fastify.prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: {
              completedChallenges: true,
              completedExams: true,
              progressTimestamps: true
            }
          });

        const examFromDb = await fastify.prisma.exam.findUnique({
          where: { id }
        });

        if (!examFromDb) {
          void reply.code(400);
          return {
            error: 'An error occurred trying to get the exam from the database.'
          };
        }

        const validExamFromDbSchema = validateExamFromDbSchema(examFromDb);
        if ('error' in validExamFromDbSchema) {
          void reply.code(500);
          return {
            error:
              'An error occurred validating the exam information from the database.'
          };
        }

        const { prerequisites, numberOfQuestionsInExam, title } = examFromDb;

        const prerequisiteIds = prerequisites.map(p => p.id);
        const completedPrerequisites = completedChallenges.filter(c =>
          prerequisiteIds.includes(c.id)
        );

        if (completedPrerequisites.length !== prerequisiteIds.length) {
          void reply.code(403);
          return {
            error: `You have not completed the required challenges to start the '${title}'.`
          };
        }

        const validUserCompletedExam = validateUserCompletedExamSchema(
          userCompletedExam,
          numberOfQuestionsInExam
        );
        if ('error' in validUserCompletedExam) {
          fastify.log.error(validUserCompletedExam.error);
          void reply.code(400);
          return {
            error: 'An error occurred validating the submitted exam.'
          };
        }

        const examResults = createExamResults(userCompletedExam, examFromDb);

        const validExamResults = validateExamResultsSchema(examResults);
        if ('error' in validExamResults) {
          fastify.log.error(validExamResults.error);
          void reply.code(500);
          return {
            error: 'An error occurred validating the submitted exam.'
          };
        }

        const newCompletedChallenges: CompletedChallenge[] =
          completedChallenges;
        const newCompletedExams: CompletedExam[] = completedExams;
        const newProgressTimeStamps = progressTimestamps as ProgressTimestamp[];
        const completedDate = Date.now();

        const newCompletedChallenge = {
          id,
          challengeType,
          completedDate,
          examResults
        };

        // Always push to completedExams[] to keep a record of all exams taken.
        newCompletedExams.push(newCompletedChallenge);

        let addPoint = false;

        const alreadyCompletedIndex = completedChallenges.findIndex(
          c => c.id === id
        );

        const alreadyCompleted = alreadyCompletedIndex >= 0;

        if (examResults.passed) {
          if (alreadyCompleted) {
            const { percentCorrect } = examResults;
            const oldChallenge = completedChallenges[
              alreadyCompletedIndex
            ] as CompletedChallenge;
            const oldResults = oldChallenge?.examResults as ExamResults;

            const newChallenge = oldChallenge;
            newChallenge ? (newChallenge.examResults = examResults) : null;

            // only update if it's a better result
            if (percentCorrect > oldResults.percentCorrect) {
              const updatedChallege = {
                id,
                challengeType: oldChallenge.challengeType,
                completedDate: oldChallenge.completedDate,
                examResults
              };

              newCompletedChallenges[alreadyCompletedIndex] = updatedChallege;

              // TODO(Post-MVP): Try to DRY the updates.
              // updateUserChallengeData, for all its faults, handles the
              // update/insert logic well.
              await fastify.prisma.user.update({
                where: { id: userId },
                data: {
                  completedExams: newCompletedExams,
                  completedChallenges: newCompletedChallenges
                }
              });
            } else {
              await fastify.prisma.user.update({
                where: { id: userId },
                data: {
                  completedExams: newCompletedExams
                }
              });
            }

            // not already completed, push to completedChallenges
          } else {
            addPoint = true;
            newCompletedChallenges.push(newCompletedChallenge);

            await fastify.prisma.user.update({
              where: { id: userId },
              data: {
                completedExams: newCompletedExams,
                completedChallenges: newCompletedChallenges,
                progressTimestamps: [
                  ...newProgressTimeStamps,
                  newCompletedChallenge.completedDate
                ]
              }
            });
          }

          // exam not passed
        } else {
          await fastify.prisma.user.update({
            where: { id: userId },
            data: {
              completedExams: newCompletedExams
            }
          });
        }

        const points = getPoints(newProgressTimeStamps);

        return {
          alreadyCompleted,
          points: addPoint ? points + 1 : points,
          completedDate,
          examResults
        };
      } catch (error) {
        fastify.log.error(error);
        fastify.Sentry.captureException(error);
        void reply.code(500);
        return {
          error: 'An error occurred trying to submit your exam.'
        };
      }
    }
  );

  done();
};
