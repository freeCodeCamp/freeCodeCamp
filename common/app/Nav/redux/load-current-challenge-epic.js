import { ofType } from 'redux-epic';

import { types } from './';
import {
  updateCurrentChallenge,

  userSelector,
  firstChallengeSelector,
  challengeSelector
} from '../../redux';
import { entitiesSelector } from '../../entities';

export default function loadCurrentChallengeEpic(actions, { getState }) {
  return actions::ofType(types.clickOnLogo, types.clickOnMap)
    .debounce(500)
    .map(() => {
      let finalChallenge;
      const state = getState();
      const { id: currentlyLoadedChallengeId } = challengeSelector(state);
      const {
        challenge: challengeMap,
        challengeIdToName
      } = entitiesSelector(state);
      const {
        routing: {
          locationBeforeTransitions: { pathname } = {}
        }
      } = state;
      const firstChallenge = firstChallengeSelector(state);
      const { currentChallengeId } = userSelector(state);
      const isOnAChallenge = (/^\/[^\/]{2,6}\/challenges/).test(pathname);

      if (!currentChallengeId) {
        finalChallenge = firstChallenge;
      } else {
        finalChallenge = challengeMap[
          challengeIdToName[ currentChallengeId ]
        ];
      }
      return {
        finalChallenge,
        isOnAChallenge,
        currentlyLoadedChallengeId
      };
    })
    .filter(({
      finalChallenge,
      isOnAChallenge,
      currentlyLoadedChallengeId
    }) => (
      // data might not be there yet, filter out for now
      !!finalChallenge &&
      // are we already on that challenge? if not load challenge
      (!isOnAChallenge || finalChallenge.id !== currentlyLoadedChallengeId)
      // don't reload if the challenge is already loaded.
      // This may change to toast to avoid user confusion
    ))
    .map(({ finalChallenge }) => {
      return updateCurrentChallenge(finalChallenge.dashedName);
    });
}
