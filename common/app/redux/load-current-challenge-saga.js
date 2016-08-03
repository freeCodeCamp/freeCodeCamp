import { Observable } from 'rx';
import { push } from 'react-router-redux';

import types from './types';
import {
  userSelector,
  firstChallengeSelector
} from './selectors';
import getActionsOfType from '../../utils/get-actions-of-type';
import { updateCurrentChallenge } from '../routes/challenges/redux/actions';

export default function loadCurrentChallengeSaga(actions, getState) {
  return getActionsOfType(actions, types.loadCurrentChallenge)
    .flatMap(() => {
      let finalChallenge;
      const state = getState();
      const {
        entities: { challenge: challengeMap, challengeIdToName },
        challengesApp: { id: currentlyLoadedChallengeId }
      } = state;
      const firstChallenge = firstChallengeSelector(state);
      const { user: { currentChallengeId } } = userSelector(state);
      if (!currentChallengeId) {
        finalChallenge = firstChallenge;
      } else {
        finalChallenge = challengeMap[
          challengeIdToName[ currentChallengeId ]
        ];
      }
      if (finalChallenge.id === currentlyLoadedChallengeId) {
        // don't reload if the challenge is already loaded.
        // This may change to toast to avoid user confusion
        return Observable.empty();
      }
      return Observable.of(
        updateCurrentChallenge(finalChallenge),
        push(
          `/challenges/${finalChallenge.block}/${finalChallenge.dashedName}`
        )
      );
    });
}
