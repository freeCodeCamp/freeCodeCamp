import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import { push } from 'react-router-redux';

import { types } from './';
import {
  updateCurrentChallenge,

  userSelector,
  firstChallengeSelector,
  challengeSelector
} from '../../redux';
// not ideal but will fix in next commit
import { getNS as entitesSelector } from '../../redux/entities-reducer.js';

export default function loadCurrentChallengeEpic(actions, { getState }) {
  return actions::ofType(types.clickOnLogo)
    .flatMap(() => {
      let finalChallenge;
      const state = getState();
      const { id: currentlyLoadedChallengeId } = challengeSelector(state);
      const {
        challenge: challengeMap,
        challengeIdToName
      } = entitesSelector(state);
      const {
        routing: {
          locationBeforeTransition: { pathname } = {}
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
      if (
        // data might not be there yet, ignore for now
        !finalChallenge ||
        // are we already on that challenge?
        (isOnAChallenge && finalChallenge.id === currentlyLoadedChallengeId)
      ) {
        // don't reload if the challenge is already loaded.
        // This may change to toast to avoid user confusion
        return Observable.empty();
      }
      return Observable.of(
        updateCurrentChallenge(finalChallenge.dashedName),
        push(
          `/challenges/${finalChallenge.block}/${finalChallenge.dashedName}`
        )
      );
    });
}
