import { createSelector } from 'reselect';
import { liveCerts } from '../../config/cert-and-project-map';
import {
  certSlugTypeMap,
  certToTitleMap
} from '../../../shared-dist/config/certification-settings.js';

import { randomBetween } from '../utils/random-between';
import { getSessionChallengeData } from '../utils/session-storage';
import { superBlockStructuresSelector } from '../templates/Introduction/redux';
import { ns as MainApp } from './action-types';

export const savedChallengesSelector = state =>
  userSelector(state)?.savedChallenges || [];
export const completedChallengesSelector = state =>
  userSelector(state)?.completedChallenges || [];
export const completedDailyCodingChallengesSelector = state =>
  userSelector(state)?.completedDailyCodingChallenges || [];
export const userIdSelector = state => userSelector(state)?.id;
export const partiallyCompletedChallengesSelector = state =>
  userSelector(state)?.partiallyCompletedChallenges || [];
export const currentChallengeIdSelector = state =>
  state[MainApp].currentChallengeId;
export const isRandomCompletionThresholdSelector = state =>
  state[MainApp].isRandomCompletionThreshold;
export const isDonatingSelector = state => userSelector(state)?.isDonating;
export const isOnlineSelector = state => state[MainApp].isOnline;
export const isServerOnlineSelector = state => state[MainApp].isServerOnline;
export const isSignedInSelector = state => !!userSelector(state);
export const isDonationModalOpenSelector = state =>
  state[MainApp].showDonationModal;
export const isSignoutModalOpenSelector = state =>
  state[MainApp].showSignoutModal;
export const donatableSectionRecentlyCompletedSelector = state => {
  const donatableSectionRecentlyCompletedState =
    state[MainApp].donatableSectionRecentlyCompleted;

  if (donatableSectionRecentlyCompletedState) {
    const { block, module, superBlock } =
      donatableSectionRecentlyCompletedState;

    if (superBlock !== 'daily-coding-challenge') {
      if (module) return { section: 'module', title: module, superBlock };
      else if (block) return { section: 'block', title: block, superBlock };
    }
  }

  return null;
};

export const donationFormStateSelector = state =>
  state[MainApp].donationFormState;
export const updateCardStateSelector = state => state[MainApp].updateCardState;
export const signInLoadingSelector = state =>
  userFetchStateSelector(state).pending;
export const showCertSelector = state => state[MainApp].showCert;
export const showCertFetchStateSelector = state =>
  state[MainApp].showCertFetchState;
export const shouldRequestDonationSelector = state => {
  const completedChallengeCount = completedChallengesSelector(state).length;
  const isDonating = isDonatingSelector(state);
  const donatableSectionRecentlyCompleted =
    donatableSectionRecentlyCompletedSelector(state);
  const isRandomCompletionThreshold =
    isRandomCompletionThresholdSelector(state);

  // don't request donation if already donating
  if (isDonating) return false;

  // donations only appear after the user has completed ten challenges (i.e.
  // not before the 11th challenge has mounted)
  if (completedChallengeCount < 10) return false;

  // a block or module has been completed
  if (donatableSectionRecentlyCompleted) return true;

  const sessionChallengeData = getSessionChallengeData();
  /*
    Different intervals need to be tested for optimization.
   */
  // the assumption is that we save the count when we request donations
  if (sessionChallengeData.isSaved) {
    // only request if sufficient challenges have been completed since last
    // request
    return sessionChallengeData.countSinceSave >= 20;
  }

  /*
   Show modal if user has completed 10 challanged in total
   and 3 or more in this session.
   The isRandomCompletionThreshold flag is used to AB test interval randomness
  */
  if (isRandomCompletionThreshold) {
    return sessionChallengeData.currentCount >= randomBetween(3, 7);
  } else {
    return sessionChallengeData.currentCount >= 3;
  }
};

export const userTokenSelector = state => userSelector(state)?.userToken;

export const examInProgressSelector = state => state[MainApp].examInProgress;

export const examResultsSelector = state => userSelector(state)?.examResults;

export const msUsernameSelector = state => userSelector(state)?.msUsername;

export const completedSurveysSelector = state =>
  userSelector(state)?.completedSurveys || [];

export const isProcessingSelector = state => {
  return state[MainApp].isProcessing;
};

export const createUserByNameSelector = username => state => {
  const sessionUser = userSelector(state);
  const otherUser = otherUserSelector(state);
  const isSessionUser = sessionUser?.username === username;
  const isOtherUser = otherUser?.username === username;
  const user = isSessionUser ? sessionUser : isOtherUser ? otherUser : null;
  return user;
};

export const userFetchStateSelector = state => state[MainApp].userFetchState;
export const allChallengesInfoSelector = state =>
  state[MainApp].allChallengesInfo;
export const getSuperBlockStructure = (state, superBlock) =>
  superBlockStructuresSelector(state)[superBlock];

export const completedChallengesIdsSelector = createSelector(
  completedChallengesSelector,
  completedChallenges => completedChallenges.map(node => node.id)
);

export const completedDailyCodingChallengesIdsSelector = createSelector(
  completedDailyCodingChallengesSelector,
  completedChallenges => completedChallenges.map(node => node.id)
);

export const completionStateSelector = createSelector(
  [
    allChallengesInfoSelector,
    completedChallengesIdsSelector,
    superBlockStructuresSelector,
    state => state.challenge.challengeMeta
  ],
  (
    allChallengesInfo,
    completedChallengesIds,
    superBlockStructures,
    challengeMeta
  ) => {
    const { challengeNodes } = allChallengesInfo;

    const structure = superBlockStructures[challengeMeta.superBlock];

    const chapters = structure?.chapters ?? [];

    const getCompletionState = ({
      chapters,
      challenges,
      completedChallengesIds
    }) => {
      const populateBlocks = blocks =>
        blocks.map(block => {
          const blockChallenges = challenges.filter(
            ({ block: blockName }) => blockName === block
          );

          const completedBlockChallenges = blockChallenges.every(({ id }) =>
            completedChallengesIds.includes(id)
          );

          return {
            name: block,
            isCompleted:
              completedBlockChallenges.length === blockChallenges.length
          };
        });

      const populateModules = modules =>
        modules.map(module => {
          const blocks = populateBlocks(module.blocks);
          const isCompleted = blocks.every(block => block.isCompleted === true);

          return {
            name: module.dashedName,
            blocks,
            isCompleted
          };
        });

      const allChapters = chapters.map(chapter => {
        const modules = populateModules(chapter.modules);
        const isCompleted = modules.every(
          module => module.isCompleted === true
        );

        return {
          name: chapter.dashedName,
          modules: populateModules(chapter.modules),
          isCompleted
        };
      });

      return allChapters;
    };

    return getCompletionState({
      chapters,
      challenges: challengeNodes.map(({ challenge }) => challenge),
      completedChallengesIds
    });
  }
);
export const userProfileFetchStateSelector = state =>
  state[MainApp].userProfileFetchState;
export const usernameSelector = state => userSelector(state)?.username ?? '';
export const themeSelector = state => state[MainApp].theme;
export const userThemeSelector = state => userSelector(state)?.theme;

export const userSelector = state => state[MainApp].user.sessionUser;
export const otherUserSelector = state => state[MainApp].user.otherUser;

export const renderStartTimeSelector = state => state[MainApp].renderStartTime;

export const claimableCertsSelector = createSelector([userSelector], user => {
  if (!user) return [];

  const completedChallengeIds = (user.completedChallenges || []).map(
    ({ id }) => id
  );

  const isClaimedByCert = Object.entries(certSlugTypeMap).reduce(
    (acc, [cert, userFlag]) => {
      acc[cert] = Boolean(user[userFlag]);
      return acc;
    },
    {}
  );

  const claimable = [];

  for (const { projects, certSlug } of liveCerts) {
    if (!projects) continue;
    if (isClaimedByCert[certSlug]) continue;

    const projectIds = projects.map(p => p.id);
    const allProjectsComplete = projectIds.every(id =>
      completedChallengeIds.includes(id)
    );

    const certTitle = certToTitleMap[certSlug];
    if (allProjectsComplete) {
      claimable.push({
        certTitle
      });
    }
  }

  return claimable;
});
