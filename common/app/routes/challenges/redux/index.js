import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import bugEpic from './bug-epic';
import completionEpic from './completion-epic';
import nextChallengeEpic from './next-challenge-epic';
import resetChallengeEpic from './reset-challenge-epic';
import stepChallengeEpic from './step-challenge-epic';


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
import { bonfire, html, js } from '../../../utils/challengeTypes';
import blockNameify from '../../../utils/blockNameify';
import { createPoly, setContent } from '../../../../utils/polyvinyl';

export projectNormalizer from './project-normalizer';

export const epics = [
  bugEpic,
  completionEpic,
  nextChallengeEpic,
  resetChallengeEpic,
  stepChallengeEpic
];

export const types = createTypes([
  // step
  'stepForward',
  'stepBackward',
  'goToStep',
  'completeAction',
  'openLightBoxImage',
  'closeLightBoxImage',
  'updateUnlockedSteps',

  // challenges
  'fetchChallenge',
  'fetchChallenges',
  'fetchChallengeCompleted',
  'fetchChallengesCompleted',
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

  // video challenges
  'toggleQuestionView',
  'grabQuestion',
  'releaseQuestion',
  'moveQuestion',

  'answerQuestion',

  'startShake',
  'endShake',

  'primeNextQuestion',
  'goToNextQuestion',
  'transitionVideo',
  'videoCompleted',

  // bug
  'openBugModal',
  'closeBugModal',
  'openIssueSearch',
  'createIssue'
], ns);

// step
export const stepForward = createAction(types.stepForward);
export const stepBackward = createAction(types.stepBackward);
export const goToStep = createAction(
  types.goToStep,
  (step, isUnlocked) => ({ step, isUnlocked })
);
export const completeAction = createAction(types.completeAction);
export const updateUnlockedSteps = createAction(types.updateUnlockedSteps);
export const openLightBoxImage = createAction(types.openLightBoxImage);
export const closeLightBoxImage = createAction(types.closeLightBoxImage);

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
  hintIndex: 0,
  // step index tracing
  currentIndex: 0,
  previousIndex: -1,
  // step action
  isActionCompleted: false,
  isLightBoxOpen: false,
  // project is ready to submit
  isSubmitting: false,
  output: null,
  // video
  // 1 indexed
  currentQuestion: 1,
  // [ xPosition, yPosition ]
  mouse: [ 0, 0 ],
  // change in mouse position since pressed
  // [ xDelta, yDelta ]
  delta: [ 0, 0 ],
  isPressed: false,
  isCorrect: false,
  shouldShakeQuestion: false,
  shouldShowQuestions: false,
  isChallengeModalOpen: false,
  successMessage: 'Happy Coding!',
  unlockedSteps: []
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
    [types.fetchChallengeCompleted]: (state, { payload = '' }) => ({
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
    [types.goToStep]: (state, { payload: { step = 0, isUnlocked }}) => ({
      ...state,
      currentIndex: step,
      previousIndex: state.currentIndex,
      isActionCompleted: isUnlocked
    }),
    [types.completeAction]: state => ({
      ...state,
      isActionCompleted: true
    }),
    [types.updateUnlockedSteps]: (state, { payload }) => ({
      ...state,
      unlockedSteps: payload
    }),
    [types.openLightBoxImage]: state => ({
      ...state,
      isLightBoxOpen: true
    }),
    [types.closeLightBoxImage]: state => ({
      ...state,
      isLightBoxOpen: false
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
    // video
    [types.toggleQuestionView]: state => ({
      ...state,
      shouldShowQuestions: !state.shouldShowQuestions,
      currentQuestion: 1
    }),

    [types.grabQuestion]: (state, { payload: { delta, mouse } }) => ({
      ...state,
      isPressed: true,
      delta,
      mouse
    }),

    [types.releaseQuestion]: state => ({
      ...state,
      isPressed: false,
      mouse: [ 0, 0 ]
    }),

    [types.moveQuestion]: (state, { payload: mouse }) => ({ ...state, mouse }),
    [types.startShake]: state => ({ ...state, shouldShakeQuestion: true }),
    [types.endShake]: state => ({ ...state, shouldShakeQuestion: false }),

    [types.primeNextQuestion]: (state, { payload: userAnswer }) => ({
      ...state,
      currentQuestion: state.currentQuestion + 1,
      mouse: [ userAnswer ? 1000 : -1000, 0],
      isPressed: false
    }),

    [types.goToNextQuestion]: state => ({
      ...state,
      mouse: [ 0, 0 ]
    }),

    [types.videoCompleted]: (state, { payload: userAnswer }) => ({
      ...state,
      isCorrect: true,
      isPressed: false,
      delta: [ 0, 0 ],
      mouse: [ userAnswer ? 1000 : -1000, 0]
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
