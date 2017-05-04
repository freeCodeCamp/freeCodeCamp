import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import bugEpic from './bug-epic';
import completionEpic from './completion-epic';
import nextChallengeEpic from './next-challenge-epic';
import resetChallengeEpic from './reset-challenge-epic';

import ns from '../ns.json';
import { epics as stepEpics } from '../views/step/redux';
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
import { types as app } from '../../../redux';
import { bonfire, html, js } from '../../../utils/challengeTypes';
import blockNameify from '../../../utils/blockNameify';
import { createPoly, setContent } from '../../../../utils/polyvinyl';

export projectNormalizer from './project-normalizer';

export const epics = [
  bugEpic,
  completionEpic,
  nextChallengeEpic,
  resetChallengeEpic,
  ...stepEpics
];

export const types = createTypes([
  // challenges
  'updateCurrentChallenge',
  'resetChallenge',
  'replaceChallenge',
  'resetUi',
  'updateHint',
  'lockUntrustedCode',
  'unlockUntrustedCode',
  'closeChallengeModal',
  'updateSuccessMessage',

  // map
  'updateFilter',
  'clearFilter',
  'initMap',
  'toggleThisPanel',
  'collapseAll',
  'expandAll',

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
  'showChallengeComplete',
  'showProjectSubmit',
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
  'createIssue'
], ns);

// challenges
export const closeChallengeModal = createAction(types.closeChallengeModal);
export const resetUi = createAction(types.resetUi);
export const updateHint = createAction(types.updateHint);
export const lockUntrustedCode = createAction(types.lockUntrustedCode);
export const unlockUntrustedCode = createAction(
  types.unlockUntrustedCode,
  () => null
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);
export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);
export const resetChallenge = createAction(types.resetChallenge);
// replaceChallenge(dashedname) => Action
export const replaceChallenge = createAction(types.replaceChallenge);

// files
export const updateFile = createAction(
  types.updateFile,
  (content, file) => setContent(content, file)
);

export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(
  types.executeChallenge,
  () => null
);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const showProjectSubmit = createAction(types.showProjectSubmit);

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
  // project is ready to submit
  isSubmitting: false,
  output: null,
  isChallengeModalOpen: false,
  successMessage: 'Happy Coding!'
};

const initialState = {
  isCodeLocked: false,
  id: '',
  challenge: '',
  helpChatRoom: 'Help',
  isBugOpen: false,
  // old code storage key
  legacyKey: '',
  files: {},
  // map
  superBlocks: [],
  // misc
  toast: 0,
  ...initialUiState
};

export const challengeSelector = createSelector(
  state => state.challengesApp.challenge,
  state => state.entities.challenge,
  (challengeName, challengeMap) => {
    if (!challengeName || !challengeMap) {
      return {};
    }
    const challenge = challengeMap[challengeName];
    const challengeType = challenge && challenge.challengeType;
    const type = challenge && challenge.type;
    const viewType = viewTypes[type] || viewTypes[challengeType] || 'classic';
    const blockName = blockNameify(challenge.block);
    const title = blockName && challenge.title ?
      `${blockName}: ${challenge.title}` :
      challenge.title;

    return {
      challenge,
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

const mainReducer = handleActions(
  {
    [app.fetchChallengeCompleted]: (state, { payload = '' }) => ({
      ...state,
      challenge: payload
    }),
    [types.updateCurrentChallenge]: (state, { payload: challenge = {} }) => ({
      ...state,
      id: challenge.id,
      // used mainly to find code storage
      legacyKey: challenge.name,
      challenge: challenge.dashedName,
      key: getFileKey(challenge),
      tests: createTests(challenge),
      helpChatRoom: challenge.helpRoom || 'Help',
      numOfHints: Array.isArray(challenge.hints) ? challenge.hints.length : 0
    }),
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
    [types.updateCurrentChallenge]: (state, { payload: challenge = {} }) => {
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

export default function challengeReducers(state, action) {
  const newState = mainReducer(state, action);
  const files = filesReducer(state && state.files || {}, action);
  if (newState.files !== files) {
    return { ...newState, files };
  }
  return newState;
}
