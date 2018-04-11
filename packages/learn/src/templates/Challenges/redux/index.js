import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../utils/stateManagment';
import { createPoly } from '../utils/polyvinyl';
import challengeModalEpic from './challenge-modal-epic';
import completionEpic from './completion-epic';
import executeChallengeEpic from './execute-challenge-epic';
import codeLockEpic from './code-lock-epic';

const ns = 'challenge';

const initialState = {
  challengeFiles: {},
  challengeMeta: {
    id: '',
    nextChallengePath: '/'
  },
  challengeTests: [],
  consoleOut: '',
  isJSEnabled: true,
  modal: {
    completion: false,
    help: false
  },
  successMessage: 'Happy Coding!'
};

export const epics = [
  challengeModalEpic,
  codeLockEpic,
  completionEpic,
  executeChallengeEpic
];

export const types = createTypes(
  [
    'createFiles',
    'initTests',
    'initConsole',
    'updateConsole',
    'updateChallengeMeta',
    'updateFile',
    'updateJSEnabled',
    'updateSuccessMessage',
    'updateTests',

    'unlockCode',
    'disableJSOnError',

    'closeModal',
    'openModal',

    'checkChallenge',
    'executeChallenge',
    'submitChallenge'
  ],
  ns
);

export const createFiles = createAction(types.createFiles, challengeFiles =>
  Object.keys(challengeFiles)
    .filter(key => challengeFiles[key])
    .map(key => challengeFiles[key])
    .reduce(
      (challengeFiles, file) => ({
        ...challengeFiles,
        [file.key]: {
          ...createPoly(file),
          seed: file.contents.slice(0)
        }
      }),
      {}
    )
);
export const initTests = createAction(types.initTests);
export const updateTests = createAction(types.updateTests);

export const initConsole = createAction(types.initConsole);
export const updateChallengeMeta = createAction(types.updateChallengeMeta);
export const updateFile = createAction(types.updateFile);
export const updateConsole = createAction(types.updateConsole);
export const updateJSEnabled = createAction(types.updateJSEnabled);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);

export const unlockCode = createAction(types.unlockCode);
export const disableJSOnError = createAction(types.disableJSOnError, err => {
  console.error(err);
  return {};
});

export const closeModal = createAction(types.closeModal);
export const openModal = createAction(types.openModal);

export const checkChallenge = createAction(types.checkChallenge);
export const executeChallenge = createAction(types.executeChallenge);
export const submitChallenge = createAction(types.submitChallenge);

export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const isCompletionModalOpenSelector = state =>
  state[ns].modal.completion;
export const isJSEnabledSelector = state => state[ns].isJSEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const reducer = handleActions(
  {
    [types.createFiles]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload
    }),
    [types.initTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),
    [types.updateTests]: (state, { payload }) => ({
      ...state,
      challengeTests: payload
    }),
    [types.initConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: payload
    }),
    [types.updateChallengeMeta]: (state, { payload }) => ({
      ...state,
      challengeMeta: { ...payload }
    }),
    [types.updateConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut + '\n' + payload
    }),
    [types.updateFile]: (state, { payload: { key, editorValue } }) => ({
      ...state,
      challengeFiles: {
        ...state.challengeFiles,
        [key]: {
          ...state.challengeFiles[key],
          contents: editorValue
        }
      }
    }),
    [types.unlockCode]: state => ({
      ...state,
      isJSEnabled: true
    }),
    [types.disableJSOnError]: state => ({
      ...state,
      isJSEnabled: false
    }),
    [types.updateSuccessMessage]: (state, { payload }) => ({
      ...state,
      successMessage: payload
    }),
    [types.closeModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: false
      }
    }),
    [types.openModal]: (state, { payload }) => ({
      ...state,
      modal: {
        ...state.modal,
        [payload]: true
      }
    })
  },
  initialState
);
