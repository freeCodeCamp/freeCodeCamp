import { createAction, handleActions } from 'redux-actions';
import { reducer as reduxFormReducer } from 'redux-form';

import { createTypes } from '../../../../utils/stateManagement';
import { createAsyncTypes } from '../../../utils/createTypes';

import { createPoly } from '../utils/polyvinyl';
import challengeModalEpic from './challenge-modal-epic';
import completionEpic from './completion-epic';
import executeChallengeEpic from './execute-challenge-epic';
import codeLockEpic from './code-lock-epic';
import createQuestionEpic from './create-question-epic';
import codeStorageEpic from './code-storage-epic';
import currentChallengeEpic from './current-challenge-epic';

import { createIdToNameMapSaga } from './id-to-name-map-saga';

const ns = 'challenge';
export const backendNS = 'backendChallenge';

const initialState = {
  challengeFiles: {},
  challengeIdToNameMap: {},
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
    video: false,
    reset: false
  },
  projectFormValues: {},
  successMessage: 'Happy Coding!'
};

export const types = createTypes(
  [
    'createFiles',
    'createQuestion',
    'initTests',
    'initConsole',
    'initLogs',
    'updateConsole',
    'updateChallengeMeta',
    'updateFile',
    'updateJSEnabled',
    'updateProjectFormValues',
    'updateSuccessMessage',
    'updateTests',
    'updateLogs',

    'logsToConsole',

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
    'submitComplete',

    ...createAsyncTypes('fetchIdToNameMap')
  ],
  ns
);

export const epics = [
  challengeModalEpic,
  codeLockEpic,
  completionEpic,
  createQuestionEpic,
  executeChallengeEpic,
  codeStorageEpic,
  currentChallengeEpic
];

export const sagas = [...createIdToNameMapSaga(types)];

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

export const fetchIdToNameMap = createAction(types.fetchIdToNameMap);
export const fetchIdToNameMapComplete = createAction(
  types.fetchIdToNameMapComplete
);
export const fetchIdToNameMapError = createAction(types.fetchIdToNameMapError);

export const createQuestion = createAction(types.createQuestion);
export const initTests = createAction(types.initTests);
export const updateTests = createAction(types.updateTests);

export const initConsole = createAction(types.initConsole);
export const initLogs = createAction(types.initLogs);
export const updateChallengeMeta = createAction(types.updateChallengeMeta);
export const updateFile = createAction(types.updateFile);
export const updateConsole = createAction(types.updateConsole);
export const updateLogs = createAction(types.updateLogs);
export const updateJSEnabled = createAction(types.updateJSEnabled);
export const updateProjectFormValues = createAction(
  types.updateProjectFormValues
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);

export const logsToConsole = createAction(types.logsToConsole);

export const lockCode = createAction(types.lockCode);
export const unlockCode = createAction(types.unlockCode);
export const disableJSOnError = createAction(types.disableJSOnError);
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

export const challengeFilesSelector = state => state[ns].challengeFiles;
export const challengeIdToNameMapSelector = state =>
  state[ns].challengeIdToNameMap;
export const challengeMetaSelector = state => state[ns].challengeMeta;
export const challengeTestsSelector = state => state[ns].challengeTests;
export const consoleOutputSelector = state => state[ns].consoleOut;
export const isCodeLockedSelector = state => state[ns].isCodeLocked;
export const isCompletionModalOpenSelector = state =>
  state[ns].modal.completion;
export const isHelpModalOpenSelector = state => state[ns].modal.help;
export const isVideoModalOpenSelector = state => state[ns].modal.video;
export const isResetModalOpenSelector = state => state[ns].modal.reset;
export const isJSEnabledSelector = state => state[ns].isJSEnabled;
export const successMessageSelector = state => state[ns].successMessage;

export const backendFormValuesSelector = state => state.form[backendNS];
export const projectFormValuesSelector = state =>
  state[ns].projectFormValues || {};

export const reducer = handleActions(
  {
    [types.fetchIdToNameMapComplete]: (state, { payload }) => ({
      ...state,
      challengeIdToNameMap: payload
    }),
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
    [types.initLogs]: state => ({
      ...state,
      logsOut: []
    }),
    [types.updateLogs]: (state, { payload }) => ({
      ...state,
      logsOut: [...state.logsOut, payload]
    }),
    [types.logsToConsole]: (state, { payload }) => ({
      ...state,
      consoleOut:
        state.consoleOut +
        (state.logsOut.length
          ? '\n' + payload + '\n' + state.logsOut.join('\n')
          : '')
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
    [types.updateProjectFormValues]: (state, { payload }) => ({
      ...state,
      projectFormValues: payload
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
    [types.disableJSOnError]: (state, { payload }) => ({
      ...state,
      consoleOut: state.consoleOut + ' \n' + payload,
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

const resetProjectFormValues = handleActions(
  {
    [types.updateProjectFormValues]: (state, { payload: { solution } }) => {
      if (!solution) {
        return {
          ...state,
          solution: {},
          githubLink: {}
        };
      }
      return state;
    }
  },
  {}
);

export const formReducer = reduxFormReducer.plugin({
  'frond-end-form': resetProjectFormValues,
  'back-end-form': resetProjectFormValues
});
