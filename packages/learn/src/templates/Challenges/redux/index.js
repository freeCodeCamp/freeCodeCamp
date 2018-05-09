import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../utils/stateManagment';
import { createPoly } from '../utils/polyvinyl';
import challengeModalEpic from './challenge-modal-epic';
import completionEpic from './completion-epic';
import executeChallengeEpic from './execute-challenge-epic';
import codeLockEpic from './code-lock-epic';
import createQuestionEpic from './create-question-epic';
import codeStorageEpic from './code-storage-epic';

const ns = 'challenge';
export const backendNS = 'backendChallenge';

const initialState = {
  challengeFiles: {},
  challengeMeta: {
    id: '',
    nextChallengePath: '/'
  },
  challengeTests: [],
  consoleOut: '',
  isCodeLocked: false,
  isJSEnabled: true,
  modal: {
    completion: false,
    help: false,
    reset: false
  },
  successMessage: 'Happy Coding!'
};

export const epics = [
  challengeModalEpic,
  codeLockEpic,
  completionEpic,
  createQuestionEpic,
  executeChallengeEpic,
  codeStorageEpic
];

export const types = createTypes(
  [
    'createFiles',
    'createQuestion',
    'initTests',
    'initConsole',
    'updateConsole',
    'updateChallengeMeta',
    'updateFile',
    'updateJSEnabled',
    'updateSuccessMessage',
    'updateTests',

    'lockCode',
    'unlockCode',
    'disableJSOnError',
    'storedCodeFound',
    'noStoredCodeFound',

    'closeModal',
    'openModal',

    'challengeMounted',
    'checkChallenge',
    'executeChallenge',
    'resetChallenge',
    'submitChallenge',
    'submitComplete'
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
export const createQuestion = createAction(types.createQuestion);
export const initTests = createAction(types.initTests);
export const updateTests = createAction(types.updateTests);

export const initConsole = createAction(types.initConsole);
export const updateChallengeMeta = createAction(types.updateChallengeMeta);
export const updateFile = createAction(types.updateFile);
export const updateConsole = createAction(types.updateConsole);
export const updateJSEnabled = createAction(types.updateJSEnabled);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);

export const lockCode = createAction(types.lockCode);
export const unlockCode = createAction(types.unlockCode);
export const disableJSOnError = createAction(types.disableJSOnError, err => {
  console.error(err);
  return {};
});
export const storedCodeFound = createAction(types.storedCodeFound);
export const noStoredCodeFound = createAction(types.noStoredCodeFound);

export const closeModal = createAction(types.closeModal);
export const openModal = createAction(types.openModal);

export const challengeMounted = createAction(types.challengeMounted);
export const checkChallenge = createAction(types.checkChallenge);
export const executeChallenge = createAction(types.executeChallenge);
export const resetChallenge = createAction(types.resetChallenge);
export const submitChallenge = createAction(types.submitChallenge);
export const submitComplete = createAction(types.submitComplete);

export const backendFormValuesSelector = state => state.form[backendNS];
export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const isCodeLockedSelector = state => state[ns].isCodeLocked;
export const isCompletionModalOpenSelector = state =>
  state[ns].modal.completion;
export const isHelpModalOpenSelector = state => state[ns].modal.help;
export const isResetModalOpenSelector = state => state[ns].modal.reset;
export const isJSEnabledSelector = state => state[ns].isJSEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const reducer = handleActions(
  {
    [types.createFiles]: (state, { payload }) => ({
      ...state,
      challengeFiles: payload
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
    [types.storedCodeFound]: (state, { payload }) => ({
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
    [types.updateConsole]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut + '\n' + payload
    }),

    [types.updateChallengeMeta]: (state, { payload }) => ({
      ...state,
      challengeMeta: { ...payload }
    }),

    [types.resetChallenge]: state => ({
      ...state,
      challengeFiles: {
        ...Object.keys(state.challengeFiles)
          .map(key => state.challengeFiles[key])
          .reduce(
            (files, file) => ({
              ...files,
              [file.key]: {
                ...file,
                contents: file.seed.slice()
              }
            }),
            {}
          )
      },
      challengeTests: state.challengeTests.map(({ text, testString }) => ({
        text,
        testString
      })),
      consoleOut: ''
    }),

    [types.lockCode]: state => ({
      ...state,
      isCodeLocked: true
    }),
    [types.unlockCode]: state => ({
      ...state,
      isJSEnabled: true,
      isCodeLocked: false
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
