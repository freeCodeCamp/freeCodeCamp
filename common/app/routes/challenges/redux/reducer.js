import { handleActions } from 'redux-actions';
import { createPoly } from '../../../../utils/polyvinyl';

import types from './types';
import { bonfire, html, js } from '../../../utils/challengeTypes';
import {
  arrayToString,
  buildSeed,
  createTests,
  getPreFile,
  getFileKey
} from '../utils';

const initialUiState = {
  currentIndex: 0,
  previousIndex: -1,
  isActionCompleted: false,
  isSubmitting: true
};
const initialState = {
  id: '',
  challenge: '',
  // old code storage key
  legacyKey: '',
  files: {},
  // map
  filter: '',
  superBlocks: [],
  // misc
  toast: 0,
  ...initialUiState
};

const mainReducer = handleActions(
  {
    [types.fetchChallengeCompleted]: (state, { payload = '' }) => ({
      ...state,
      challenge: payload
    }),
    [types.updateCurrentChallenge]: (state, { payload: challenge }) => ({
      ...state,
      id: challenge.id,
      // used mainly to find code storage
      legacyKey: challenge.name,
      challenge: challenge.dashedName,
      key: getFileKey(challenge),
      tests: createTests(challenge)
    }),
    [types.updateTests]: (state, { payload: tests }) => ({
      ...state,
      tests
    }),
    [types.executeChallenge]: state => ({
      ...state,
      tests: state.tests.map(test => ({ ...test, err: false, pass: false }))
    }),
    [types.showChallengeComplete]: (state, { payload: toast }) => ({
      ...state,
      toast
    }),
    [types.showProjectSubmit]: state => ({
      ...state,
      isSubmitting: true
    }),
    [types.resetUi]: (state) => ({
      ...state,
      ...initialUiState
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
    [types.goToStep]: (state, { payload: step = 0 }) => ({
      ...state,
      currentIndex: step,
      previousIndex: state.currentIndex,
      isActionCompleted: false
    }),

    [types.completeAction]: state => ({
      ...state,
      isActionCompleted: true
    }),

    // classic/modern
    [types.initOutput]: (state, { payload: output }) => ({
      ...state,
      output
    }),
    [types.updateOutput]: (state, { payload: output }) => ({
      ...state,
      output: (state.output || '') + output
    })
  },
  initialState
);

const filesReducer = handleActions(
  {
    [types.updateFile]: (state, { payload: file }) => ({
      ...state,
      [file.key]: file
    }),
    [types.updateFiles]: (state, { payload: files }) => {
      return files
        .reduce((files, file) => {
          files[file.key] = file;
          return files;
        }, { ...state });
    },
    [types.savedCodeFound]: (state, { payload: files }) => ({
      ...files
    }),
    [types.updateCurrentChallenge]: (state, { payload: challenge }) => {
      if (challenge.type === 'mod') {
        return challenge.files;
      }
      if (
        challenge.challengeType !== html &&
        challenge.challengeType !== js &&
        challenge.challengeType !== bonfire
      ) {
        return {};
      }
      // classic challenge to modern format
      const preFile = getPreFile(challenge);
      return {
        ...state,
        [preFile.key]: createPoly({
          ...preFile,
          contents: buildSeed(challenge),
          head: arrayToString(challenge.head),
          tail: arrayToString(challenge.tail)
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
