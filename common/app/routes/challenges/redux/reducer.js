import { handleActions } from 'redux-actions';

import types from './types';
import { setChallenge, fetchChallengeCompleted } from '../../../redux/types';

const initialState = {
  challenge: '',
  currentStep: 0,
  previousStep: -1,
  filter: '',
  content: null,
  superBlocks: []
};

function arrayToNewLineString(seedData = []) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

function buildSeed({ challengeSeed = [] } = {}) {
  return arrayToNewLineString(challengeSeed);
}

export default handleActions(
  {
    [fetchChallengeCompleted]: (state, { payload = '' }) => ({
      ...state,
      challenge: payload
    }),
    [setChallenge]: (state, { payload: challenge }) => ({
      ...state,
      challenge: challenge.dashedName,
      content: buildSeed(challenge)
    }),

    // map
    [types.updateFilter]: (state, { payload = ''}) => ({
      ...state,
      filter: payload
    }),
    [types.clearFilter]: (state) => ({
      ...state,
      filter: ''
    }),
    [types.fetchChallengesCompleted]: (state, { payload = [] }) => ({
      ...state,
      superBlocks: payload
    }),

    // step
    [types.resetStep]: () => initialState,
    [types.goToStep]: (state, { payload: step = 0 }) => ({
      ...state,
      currentStep: step,
      previousStep: state.currentStep
    })
  },
  initialState
);
