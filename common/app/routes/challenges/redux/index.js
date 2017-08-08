import { createTypes } from 'redux-create-types';
import { createAction, combineActions, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import noop from 'lodash/noop';

import bugEpic from './bug-epic';
import completionEpic from './completion-epic.js';
import challengeEpic from './challenge-epic.js';
import editorEpic from './editor-epic.js';

import ns from '../ns.json';
import {
  arrayToString,
  buildSeed,
  createTests,
  getFileKey,
  getPreFile,
  loggerToStr,
  submitTypes,
  viewTypes
} from '../utils';
import {
  types as app,
  challengeSelector
} from '../../../redux';
import { bonfire, html, js } from '../../../utils/challengeTypes';
import blockNameify from '../../../utils/blockNameify';
import { createPoly, setContent } from '../../../../utils/polyvinyl';
import createStepReducer, { epics as stepEpics } from '../views/step/redux';
import createQuizReducer from '../views/quiz/redux';
import createProjectReducer from '../views/project/redux';

// this is not great but is ok until we move to a different form type
export projectNormalizer from '../views/project/redux';

export const epics = [
  bugEpic,
  completionEpic,
  challengeEpic,
  editorEpic,
  ...stepEpics
];

export const types = createTypes([
  // challenges
  // |- classic
  'classicEditorUpdated',
  'challengeUpdated',
  'resetChallenge',
  'updateHint',
  'lockUntrustedCode',
  'unlockUntrustedCode',
  'closeChallengeModal',
  'updateSuccessMessage',

  // files
  'updateFile',
  'updateFiles',

  // rechallenge
  'executeChallenge',
  'updateMain',
  'runTests',
  'frameMain',
  'frameTests',
  'updateOutput',
  'initOutput',
  'updateTests',
  'checkChallenge',
  'submitChallenge',
  'moveToNextChallenge',

  // code storage
  'saveCode',
  'loadCode',
  'savedCodeFound',
  'clearSavedCode',

  // bug
  'openBugModal',
  'closeBugModal',
  'openIssueSearch',
  'createIssue',

  // panes
  'toggleClassicEditor',
  'toggleMain',
  'toggleMap',
  'togglePreview',
  'toggleSidePanel',
  'toggleStep'
], ns);

// classic
export const classicEditorUpdated = createAction(types.classicEditorUpdated);
// challenges
export const closeChallengeModal = createAction(types.closeChallengeModal);
export const updateHint = createAction(types.updateHint);
export const lockUntrustedCode = createAction(types.lockUntrustedCode);
export const unlockUntrustedCode = createAction(
  types.unlockUntrustedCode,
  () => null
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);
export const challengeUpdated = createAction(
  types.challengeUpdated,
  challenge => ({ challenge })
);
export const resetChallenge = createAction(types.resetChallenge);
// files
export const updateFile = createAction(types.updateFile);
export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(
  types.executeChallenge,
  noop,
);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const submitChallenge = createAction(types.submitChallenge);
export const moveToNextChallenge = createAction(types.moveToNextChallenge);

// code storage
export const saveCode = createAction(types.saveCode);
export const loadCode = createAction(types.loadCode);
export const savedCodeFound = createAction(
  types.savedCodeFound,
  (files, challenge) => ({ files, challenge })
);
export const clearSavedCode = createAction(types.clearSavedCode);

// bug
export const openBugModal = createAction(types.openBugModal);
export const closeBugModal = createAction(types.closeBugModal);
export const openIssueSearch = createAction(types.openIssueSearch);
export const createIssue = createAction(types.createIssue);

const initialUiState = {
  output: null,
  isChallengeModalOpen: false,
  isBugOpen: false,
  successMessage: 'Happy Coding!',
  hintIndex: 0,
  numOfHints: 0
};

const initialState = {
  isCodeLocked: false,
  id: '',
  challenge: '',
  helpChatRoom: 'Help',
  // old code storage key
  legacyKey: '',
  files: {},
  // map
  superBlocks: [],
  // misc
  ...initialUiState
};

export const getNS = state => state[ns];
export const keySelector = state => getNS(state).key;
export const filesSelector = state => getNS(state).files;
export const testsSelector = state => getNS(state).tests;

export const outputSelector = state => getNS(state).output;
export const successMessageSelector = state => getNS(state).successMessage;
export const hintIndexSelector = state => getNS(state).hintIndex;
export const codeLockedSelector = state => getNS(state).isCodeLocked;
export const chatRoomSelector = state => getNS(state).helpChatRoom;
export const challengeModalSelector =
  state => getNS(state).isChallengeModalOpen;

export const bugModalSelector = state => getNS(state).isBugOpen;

export const challengeMetaSelector = createSelector(
  challengeSelector,
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
      title,
      viewType,
      submitType:
        submitTypes[challengeType] ||
        submitTypes[challenge && challenge.type] ||
        'tests',
      showPreview: challengeType === html,
      mode: challenge && challengeType === html ?
        'text/html' :
        'javascript'
    };
  }
);

export default function createReducers() {
  const setChallengeType = combineActions(
    types.challengeUpdated,
    app.fetchChallenge.complete
  );

  const mainReducer = handleActions(
    {
      [setChallengeType]: (state, { payload: { challenge } }) => {
        return {
          ...state,
          ...initialUiState,
          id: challenge.id,
          challenge: challenge.dashedName,
          key: getFileKey(challenge),
          tests: createTests(challenge),
          helpChatRoom: challenge.helpRoom || 'Help',
          numOfHints: Array.isArray(challenge.hints) ?
            challenge.hints.length :
            0
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
      [types.closeChallengeModal]: state => ({
        ...state,
        isChallengeModalOpen: false
      }),
      [types.updateSuccessMessage]: (state, { payload }) => ({
        ...state,
        successMessage: payload
      }),
      [types.updateHint]: state => ({
        ...state,
        hintIndex: state.hintIndex + 1 >= state.numOfHints ?
        0 :
        state.hintIndex + 1
      }),
      [types.lockUntrustedCode]: state => ({
        ...state,
        isCodeLocked: true
      }),
      [types.unlockUntrustedCode]: state => ({
        ...state,
        isCodeLocked: false
      }),
      [types.executeChallenge]: state => ({
        ...state,
        tests: state.tests.map(test => ({ ...test, err: false, pass: false }))
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

      [types.openBugModal]: state => ({ ...state, isBugOpen: true }),
      [types.closeBugModal]: state => ({ ...state, isBugOpen: false })
    },
    initialState
  );

  const filesReducer = handleActions(
    {
      [types.updateFile]: (state, { payload: { key, content }}) => ({
        ...state,
        [key]: setContent(content, state[key])
      }),
      [types.updateFiles]: (state, { payload: files }) => {
        return files
          .reduce((files, file) => {
            files[file.key] = file;
            return files;
          }, { ...state });
      },
      [types.savedCodeFound]: (state, { payload: { files, challenge } }) => {
        if (challenge.type === 'mod') {
          // this may need to change to update head/tail
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
          [preFile.key]: createPoly({
            ...files[preFile.key],
            // make sure head/tail are always fresh
            head: arrayToString(challenge.head),
            tail: arrayToString(challenge.tail)
          })
        };
      },
      [setChallengeType]: (state, { payload: { challenge } }) => {
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

  function reducer(state, action) {
    const newState = mainReducer(state, action);
    const files = filesReducer(state && state.files || {}, action);
    if (newState.files !== files) {
      return { ...newState, files };
    }
    return newState;
  }

  reducer.toString = () => ns;
  return [
    reducer,
    ...createStepReducer(),
    ...createProjectReducer(),
    ...createQuizReducer()
  ];
}
