import { STEP, HTML } from '../../../utils/challengeTypes';
import { createSelector } from 'reselect';

export const challengeSelector = createSelector(
  state => state.challengesApp.challenge,
  state => state.entities.challenge,
  (challengeName, challengeMap) => {
    if (!challengeName || !challengeMap) {
      return {};
    }
    const challenge = challengeMap[challengeName];
    return {
      challenge: challenge,
      showPreview: !!challenge && challenge.challengeType === HTML,
      isStep: !!challenge && challenge.challengeType === STEP,
      mode: !!challenge && challenge.challengeType === HTML ?
        'text/html' :
        'javascript'
    };
  }
);
