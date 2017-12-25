import _ from 'lodash';
import { ofType } from 'redux-epic';

import { types } from './';
import {
  userSelector,
  firstChallengeSelector,
  challengeSelector
} from '../../redux';
import { onRouteChallenges } from '../../routes/Challenges/redux';
import { entitiesSelector } from '../../entities';
import { langSelector, pathnameSelector } from '../../Router/redux';

export default function loadCurrentChallengeEpic(actions, { getState }) {
  return actions::ofType(types.clickOnLogo, types.clickOnMap)
    .debounce(500)
    .map(getState)
    .map(state => {
      let finalChallenge;
      const lang = langSelector(state);
      const { id: currentlyLoadedChallengeId } = challengeSelector(state);
      const {
        challenge: challengeMap,
        challengeIdToName
      } = entitiesSelector(state);
      const pathname = pathnameSelector(state);
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
        ..._.pick(finalChallenge, ['id', 'block', 'dashedName']),
        lang,
        isOnAChallenge,
        currentlyLoadedChallengeId
      };
    })
    .filter(({
      id,
      isOnAChallenge,
      currentlyLoadedChallengeId
    }) => (
      // data might not be there yet, filter out for now
      !!id &&
      // are we already on that challenge? if not load challenge
      (!isOnAChallenge || id !== currentlyLoadedChallengeId)
      // don't reload if the challenge is already loaded.
      // This may change to toast to avoid user confusion
    ))
    .map(onRouteChallenges);
}
