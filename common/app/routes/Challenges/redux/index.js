import _ from 'lodash';
import {
  combineActions,
  combineReducers,
  createAction,
  createAsyncTypes,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import { createSelector } from 'reselect';
import noop from 'lodash/noop';
import { getValues } from 'redux-form';

import modalEpic from './modal-epic';
import completionEpic from './completion-epic.js';
import challengeEpic from './challenge-epic.js';
import executeChallengeEpic from './execute-challenge-epic.js';
import codeStorageEpic from './code-storage-epic.js';

import ns from '../ns.json';
import stepReducer, { epics as stepEpics } from '../views/step/redux';
import quizReducer from '../views/quiz/redux';
import projectReducer from '../views/project/redux';

import {
  createTests,
  loggerToStr,
  submitTypes,
  viewTypes,
  getFileKey,
  challengeToFiles
} from '../utils';
import {
  types as app,
  challengeSelector
} from '../../../redux';
import { html } from '../../../utils/challengeTypes.js';
import blockNameify from '../../../utils/blockNameify.js';
import { updateFileMetaCreator, createFilesMetaCreator } from '../../../files';

// this is not great but is ok until we move to a different form type
export projectNormalizer from '../views/project/redux';

const challengeToFilesMetaCreator =
  _.flow(challengeToFiles, createFilesMetaCreator);

export const epics = [
  modalEpic,
  challengeEpic,
  codeStorageEpic,
  completionEpic,
  executeChallengeEpic,
  ...stepEpics
];

export const types = createTypes([
  'onRouteChallengeRoot',
  'onRouteChallenges',
  'onRouteCurrentChallenge',
  // challenges
  // |- classic
  'classicEditorUpdated',
  'challengeUpdated',
  'clickOnReset',
  'updateHint',
  'unlockUntrustedCode',
  'closeChallengeModal',
  'openChallengeModal',
  'updateSuccessMessage',
  // |- modern
  'modernEditorUpdated',

  // rechallenge
  'executeChallenge',
  'updateOutput',
  'initOutput',
  'updateTests',
  'checkChallenge',
  createAsyncTypes('submitChallenge'),
  'moveToNextChallenge',
  'disableJSOnError',
  'checkForNextBlock',

  // help
  'openHelpModal',
  'closeHelpModal',
  'createQuestion',

  // panes
  'toggleClassicEditor',
  'toggleMain',
  'toggleMap',
  'togglePreview',
  'toggleSidePanel',
  'toggleStep',
  'toggleModernEditor',

  // code storage
  'storedCodeFound',
  'noStoredCodeFound',
  'previousSolutionFound'
], ns);

// routes
export const onRouteChallenges = createAction(types.onRouteChallenges);
export const onRouteCurrentChallenge =
  createAction(types.onRouteCurrentChallenge);

// classic
export const classicEditorUpdated = createAction(
  types.classicEditorUpdated,
  null,
  updateFileMetaCreator
);
// modern
export const modernEditorUpdated = createAction(
  types.modernEditorUpdated,
  null,
  updateFileMetaCreator
);
// challenges
export const closeChallengeModal = createAction(types.closeChallengeModal);
export const openChallengeModal = createAction(types.openChallengeModal);
export const updateHint = createAction(types.updateHint);
export const unlockUntrustedCode = createAction(
  types.unlockUntrustedCode,
  _.noop
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);
export const challengeUpdated = createAction(
  types.challengeUpdated,
  challenge => ({ challenge }),
  challengeToFilesMetaCreator
);
export const clickOnReset = createAction(types.clickOnReset);

// rechallenge
export const executeChallenge = createAction(
  types.executeChallenge,
  noop,
);

export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const submitChallenge = createAction(types.submitChallenge);
export const submitChallengeComplete = createAction(
  types.submitChallenge.complete,
  (username, points, challengeInfo) => ({ username, points, challengeInfo })
);

export const moveToNextChallenge = createAction(types.moveToNextChallenge);
export const checkForNextBlock = createAction(types.checkForNextBlock);

export const disableJSOnError = createAction(types.disableJSOnError);

// help
export const openHelpModal = createAction(types.openHelpModal);
export const closeHelpModal = createAction(types.closeHelpModal);
export const createQuestion = createAction(types.createQuestion);

// code storage
export const storedCodeFound = createAction(
  types.storedCodeFound,
  null,
  challengeToFilesMetaCreator,
);
export const noStoredCodeFound = createAction(types.noStoredCodeFound);
export const previousSolutionFound = createAction(
  types.previousSolutionFound,
  null,
  challengeToFilesMetaCreator
);

const initialUiState = {
  output: null,
  isChallengeModalOpen: false,
  isBugOpen: false,
  isHelpOpen: false,
  successMessage: 'Happy Coding!'
};

const initialState = {
  isCodeLocked: false,
  isJSEnabled: true,
  id: '',
  challenge: '',
  helpChatRoom: 'Help',
  // old code storage key
  legacyKey: '',
  // map
  superBlocks: [],
  // misc
  ...initialUiState
};

export const getNS = state => state[ns];
export const keySelector = state => getNS(state).key;
export const testsSelector = state => getNS(state).tests;

export const outputSelector = state => getNS(state).output;
export const successMessageSelector = state => getNS(state).successMessage;
export const hintIndexSelector = state => getNS(state).hintIndex;
export const codeLockedSelector = state => getNS(state).isCodeLocked;
export const isCodeLockedSelector = state => getNS(state).isCodeLocked;
export const isJSEnabledSelector = state => getNS(state).isJSEnabled;
export const chatRoomSelector = state => getNS(state).helpChatRoom;
export const challengeModalSelector =
  state => getNS(state).isChallengeModalOpen;

export const helpModalSelector = state => getNS(state).isHelpOpen;
export const guideURLSelector = state =>
  `https://guide.freecodecamp.org/certificates/${getNS(state).challenge}`;

export const challengeRequiredSelector = state =>
  challengeSelector(state).required || [];
export const challengeMetaSelector = createSelector(
  // use closure to get around circular deps
  (...args) => challengeSelector(...args),
  challenge => {
    if (!challenge.id) {
      return {};
    }
    const challengeType = challenge && challenge.challengeType;
    const type = challenge && challenge.type;
    const viewType = viewTypes[type] || viewTypes[challengeType] || 'classic';
    const blockName = blockNameify(challenge.block);
    const title = blockName && challenge.title ?
      `${blockName}: ${challenge.title}` :
      challenge.title;
    return {
      type,
      title,
      viewType,
      submitType:
        submitTypes[challengeType] ||
        submitTypes[challenge && challenge.type] ||
        'tests',
      showPreview: (
        challengeType === html ||
        type === 'modern'
      ),
      mode: challenge && challengeType === html ?
        'text/html' :
        'javascript'
    };
  }
);

export const showPreviewSelector = state =>
  !!challengeMetaSelector(state).showPreview;
export const challengeTypeSelector = state =>
  challengeMetaSelector(state).type || '';
export const challengeTemplateSelector = state =>
  challengeSelector(state).template || null;

export const backendFormValuesSelector = state =>
  getValues(state.form.BackEndChallenge);
export const frontendProjectFormValuesSelector = state =>
  getValues(state.form.NewFrontEndProject) || {};
export const backendProjectFormValuesSelector = state =>
  getValues(state.form.NewBackEndProject) || {};

export default combineReducers(
  handleActions(
    () => ({
      [
        combineActions(
          types.challengeUpdated,
          app.fetchChallenge.complete
        )
      ]: (state, { payload: { challenge } }) => {
        return {
          ...state,
          ...initialUiState,
          id: challenge.id,
          challenge: challenge.dashedName,
          key: getFileKey(challenge),
          tests: createTests(challenge),
          helpChatRoom: challenge.helpRoom || 'Help'
        };
      },
      [types.updateTests]: (state, { payload: tests }) => ({
        ...state,
        tests,
        isChallengeModalOpen: (
          tests.length > 0 &&
          tests.every(test => test.pass && !test.err)
        )
      }),
      [types.openChallengeModal]: state => ({
        ...state,
        isChallengeModalOpen: true
      }),
      [types.closeChallengeModal]: state => ({
        ...state,
        isChallengeModalOpen: false
      }),
      [types.updateSuccessMessage]: (state, { payload }) => ({
        ...state,
        successMessage: payload
      }),
      [types.storedCodeFound]: state => ({
        ...state,
        isJSEnabled: false,
        isCodeLocked: true
      }),
      [types.unlockUntrustedCode]: state => ({
        ...state,
        isCodeLocked: false
      }),
      [types.executeChallenge]: state => ({
        ...state,
        isJSEnabled: true,
        tests: state.tests.map(test => ({ ...test, err: false, pass: false }))
      }),
      [
        combineActions(
          types.classicEditorUpdated,
          types.disableJSOnError,
          types.modernEditorUpdated
        )
      ]: state => ({
        ...state,
        isJSEnabled: false
      }),

      // classic/modern
      [types.initOutput]: (state, { payload: output }) => ({
        ...state,
        output
      }),
      [types.updateOutput]: (state, { payload: output }) => ({
        ...state,
        output: (state.output || '') + output
      }),
      [types.openHelpModal]: state => ({ ...state, isHelpOpen: true }),
      [types.closeHelpModal]: state => ({ ...state, isHelpOpen: false })
    }),
    initialState,
    ns
  ),
  stepReducer,
  quizReducer,
  projectReducer
);
