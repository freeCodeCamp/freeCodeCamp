
import { omit, pick } from 'lodash';
import { user } from '@prisma/client';
import { FastifyInstance } from 'fastify';
// import { SavedChallenge } from '../../../client/src/redux/prop-types';
import { getChallenges } from './get-challenges';

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

const savableChallenges = getChallenges()
    .filter(challenge => challenge.challengeType === 14)
    .map(challenge => challenge.id);

type SavedChallengeFile = {
    key: string;
    ext: string;
    name: string;
    history?: string[];
    contents: string;
};

type CompletedChallenge = {
  id: string;
  solution?: string | null;
  githubLink?: string | null;
  challengeType?: number | null;
  completedDate: number;
  isManuallyApproved?: boolean | null;
  files?: SavedChallengeFile[];
}

export async function buildUserUpdate(
    fastify: FastifyInstance,
    user: user,
    challengeId: string,
    _userCompletedChallenge: CompletedChallenge,
    timezone?: string,
) {
    const { files, completedDate: newProgressTimeStamp = Date.now() } = _userCompletedChallenge;
    
    let completedChallenge: CompletedChallenge;
    
    if (
        jsCertProjectIds.includes(challengeId) ||
        multifileCertProjectIds.includes(challengeId)
    ) {
        completedChallenge = {
            ..._userCompletedChallenge,
            files: files?.map(file =>
                pick(file, ['contents', 'key', 'index', 'name', 'path', 'ext']) as SavedChallengeFile
            )
        };
    } else {
        completedChallenge = omit(_userCompletedChallenge, ['files']);
    }
    let finalChallenge = {} as CompletedChallenge;

    // Since these values are destuctured for easier updating, collectively update before returning
    const {
        timezone: userTimezone,
        completedChallenges = [],
        needsModeration = false,
        savedChallenges = [],
        progressTimestamps = [],
        partiallyCompletedChallenges = []
    }:{
        timezone: string | null;
        completedChallenges?: CompletedChallenge[];
        needsModeration: boolean | null;
        savedChallenges?: SavedChallengeFile[];
        progressTimestamps?: number[];
        partiallyCompletedChallenges?: CompletedChallenge[];
    } = user;

    const oldIndex = completedChallenges.findIndex(
        ({ id }) => challengeId === id
    );

    const alreadyCompleted = oldIndex !== -1;
    const oldChallenge = alreadyCompleted ? completedChallenges[oldIndex] : null;

    if (alreadyCompleted && oldChallenge) {
        const challenges = completedChallenges;
        const challengeWithOldDate = challenges[oldIndex];

        if (challengeWithOldDate) {
            challengeWithOldDate.completedDate = oldChallenge.completedDate;
            finalChallenge = challengeWithOldDate;  
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
        // $push.progressTimestamps = completedDate;
        if (progressTimestamps && Array.isArray(progressTimestamps)) {
            progressTimestamps.push(newProgressTimeStamp);
        }
        // $push.completedChallenges = finalChallenge;
        completedChallenges.push(finalChallenge);
        await fastify.prisma.user.update({
            where: { id: user.id },
            data: {
                progressTimestamps: progressTimestamps,
                completedChallenges: completedChallenges
            }
        });
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
            // $set[`savedChallenges.${savedIndex}`] = challengeToSave;
            savedChallenges[savedIndex] = challengeToSave;
        } else {
            // $push.savedChallenges = challengeToSave;
            savedChallenges.push(challengeToSave);
        }
    }

    // remove from partiallyCompleted on submit
    // $pull.partiallyCompletedChallenges = { id: challengeId };
    partiallyCompletedChallenges.filter((challenge) => challenge.id !== challengeId)

    if (
        timezone &&
        timezone !== 'UTC' &&
        (!userTimezone || userTimezone === 'UTC')
    ) {
        timezone = userTimezone;
        await fastify.prisma.user.update({
            where: { id: user.id },
            data: {
                timezone
            }
        });
    }

    // Doesnt make sense as if false it wont be executed and when true sets "true" again
    // if (needsModeration) {
    //     await fastify.prisma.user.update({
    //         where: { id: user.id },
    //         data: {
    //             needsModeration: true
    //         }
    //     });
    // }

    await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
        completedChallenges,
        needsModeration,
        savedChallenges,
        progressTimestamps,
        partiallyCompletedChallenges
    }});

    const updateData = {};

    return {
        alreadyCompleted,
        updateData,
        completedDate: finalChallenge.completedDate,
        savedChallenges
    };
}
