import * as challengeTypes from '../../../utils/challengeTypes';
import { createSelector } from 'reselect';

const viewTypes = {
  [ challengeTypes.HTML ]: 'classic',
  [ challengeTypes.JS ]: 'classic',
  [ challengeTypes.BONFIRE ]: 'classic',
  [ challengeTypes.ZIPLINE ]: 'project',
  [ challengeTypes.BASEJUMP ]: 'project',
  // might not be used anymore
  [ challengeTypes.OLDVIDEO ]: 'video',
  // formally hikes
  [ challengeTypes.VIDEO ]: 'video',
  [ challengeTypes.STEP ]: 'step'
};

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
      viewType: viewTypes[challenge.challengeType] || 'classic',

      showPreview: challenge &&
        challenge.challengeType === challengeTypes.HTML,

      mode: challenge && challenge.challengeType === challengeTypes.HTML ?
        'text/html' :
        'javascript'
    };
  }
);
