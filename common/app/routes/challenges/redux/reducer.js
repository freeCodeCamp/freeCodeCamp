import { handleActions } from 'redux-actions';
import { createPoly } from '../../../../utils/polyvinyl';

import types from './types';
import { HTML, JS } from '../../../utils/challengeTypes';

const initialState = {
  challenge: '',
  currentStep: 0,
  previousStep: -1,
  filter: '',
  files: {},
  superBlocks: []
};

function arrayToNewLineString(seedData = []) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '');
}

function buildSeed({ challengeSeed = [] } = {}) {
  return arrayToNewLineString(challengeSeed);
}

const pathsMap = {
  [HTML]: 'main.html',
  [JS]: 'main.js'
};

function getPath({ challengeType }) {
  return pathsMap[challengeType] || 'main';
}

const mainReducer = handleActions(
  {
    [types.fetchChallengeCompleted]: (state, { payload = '' }) => ({
      ...state,
      challenge: payload
    }),
    [types.updateCurrentChallenge]: (state, { payload: challenge }) => ({
      ...state,
      challenge: challenge.dashedName,
      path: getPath(challenge)
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

const filesReducer = handleActions(
  {
    [types.updateFile]: (state, { payload: file }) => ({
      ...state,
      [file.path]: file
    }),
    [types.updateFiles]: (state, { payload: files }) => {
      return files
        .reduce((files, file) => {
          files[file.path] = file;
          return files;
        }, { ...state });
    },
    [types.updateCurrentChallenge]: (state, { payload: challenge }) => {
      if (challenge.type === 'mod') {
        return challenge.files;
      }
      if (
        challenge.challengeType !== HTML &&
        challenge.challengeType !== JS
      ) {
        return {};
      }
      const path = getPath(challenge);
      return {
        ...state,
        [path]: createPoly({
          path,
          contents: buildSeed(challenge)
        })
      };
    }
  },
  {}
);

export default function challengeReducers(state, action) {
  const newState = mainReducer(state, action);
  const files = filesReducer(state && state.files || {}, action);
  return newState.files !== files ? { ...newState, files } : newState;
}
