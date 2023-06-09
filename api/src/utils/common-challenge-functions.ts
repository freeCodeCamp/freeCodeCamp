
  import { isEmpty, omit, pick } from 'lodash';
  import { user } from '@prisma/client';
  import { FastifyInstance } from 'fastify';
  import { CompletedChallenge, SavedChallenge } from '../../../client/src/redux/prop-types';
  
  
  
  interface JwtPayload {
    userToken: string;
  }
  
  const jsCertProjectIds = [
    'aaa48de84e1ecc7c742e1124',
    'a7f4d8f2483413a6ce226cac',
    '56533eb9ac21ba0edf2244e2',
    'aff0395860f5d3034dc0bfc9',
    'aa2e6f85cab2ab736c9a9b24'
  ];
  
  const multifileCertProjectIds = getChallenges()
    .filter(challenge => challenge.challengeType === 14)
    .map(challenge => challenge.id);
  
  export async function buildUserUpdate(
    fastify: FastifyInstance,
    user: user,
    challengeId: string,
    _completedChallenge: CompletedChallenge,
    timezone?: string,
  ) {
    const { files, completedDate = Date.now() } = _completedChallenge;
    let completedChallenge = {};
    if (
      jsCertProjectIds.includes(challengeId) ||
      multifileCertProjectIds.includes(challengeId)
    ) {
      completedChallenge = {
        ..._completedChallenge,
        files: files?.map(file =>
          pick(file, ['contents', 'key', 'index', 'name', 'path', 'ext'])
        )
      };
    } else {
      completedChallenge = omit(_completedChallenge, ['files']);
    }
    let finalChallenge;
  
    const {
      timezone: userTimezone,
      completedChallenges = [],
      needsModeration = false,
      savedChallenges = []
    } = user;
  
    const oldIndex = completedChallenges.findIndex(
      ({ id }) => challengeId === id
    );
  
    const alreadyCompleted = oldIndex !== -1;
    const oldChallenge = alreadyCompleted ? completedChallenges[oldIndex] : null;
  
    if (alreadyCompleted && oldChallenge ) {
      finalChallenge = {
        ...completedChallenge,
        completedDate: oldChallenge.completedDate
      };
  
      const challenges = completedChallenges;
      const challenge = challenges[oldIndex];
  
      if(challenge){
        challenge.completedDate = oldChallenge.completedDate;
      }
  
      await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          completedChallenges: challenges
        }
      });
      
    } else {
      finalChallenge = {
        ...completedChallenge
      };
      $push.progressTimestamps = completedDate;
      $push.completedChallenges = finalChallenge;
    }
  
    if (savableChallenges.includes(challengeId)) {
      const challengeToSave: SavedChallenge = {
        id: challengeId,
        lastSavedDate: completedDate,
        files: files?.map(file =>
          pick(file, ['contents', 'key', 'name', 'e3xt', 'history'])
        )
      };
  
      const savedIndex = savedChallenges.findIndex(
        ({ id }) => challengeId === id
      );
  
      if (savedIndex >= 0) {
        $set[`savedChallenges.${savedIndex}`] = challengeToSave;
        savedChallenges[savedIndex] = challengeToSave;
      } else {
        $push.savedChallenges = challengeToSave;
        savedChallenges.push(challengeToSave);
      }
    }
  
    // remove from partiallyCompleted on submit
    $pull.partiallyCompletedChallenges = { id: challengeId };
  
    if (
      timezone &&
      timezone !== 'UTC' &&
      (!userTimezone || userTimezone === 'UTC')
    ) {
      $set.timezone = userTimezone;
    }
  
    if (needsModeration) $set.needsModeration = true;
  
    const updateData = {};
    if (!isEmpty($set)) updateData.$set = $set;
    if (!isEmpty($push)) updateData.$push = $push;
    if (!isEmpty($pull)) updateData.$pull = $pull;
  
    return {
      alreadyCompleted,
      updateData,
      completedDate: finalChallenge.completedDate,
      savedChallenges
    };
  }
  