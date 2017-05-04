import { handleActions } from 'redux-actions';
import { createPoly } from '../../../../utils/polyvinyl';

import types from './types';
import { bonfire, html, js } from '../../../utils/challengeTypes';
import {
  arrayToString,
  buildSeed,
  createTests,
  getPreFile,
  getFileKey,
  toggleThisPanel,
  collapseAllPanels,
  expandAllPanels
} from '../utils';

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
  mapUi: { isAllCollapsed: false },
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

// {
//   children: [...{
//     name: (superBlock: String),
//     isOpen: Boolean,
//     isHidden: Boolean,
//     children: [...{
//       name: (blockName: String),
//       isOpen: Boolean,
//       isHidden: Boolean,
//       children: [...{
//         name: (challengeName: String),
//         isHidden: Boolean
//       }]
//     }]
//   }
// }
const mapReducer = handleActions(
  {
    [types.initMap]: (state, { payload }) => payload,
    [types.toggleThisPanel]: (state, { payload: name }) => {
      return toggleThisPanel(state, name);
    },
    [types.collapseAll]: state => {
      const newState = collapseAllPanels(state);
      newState.isAllCollapsed = true;
      return newState;
    },
    [types.expandAll]: state => {
      const newState = expandAllPanels(state);
      newState.isAllCollapsed = false;
      return newState;
    }
  },
  initialState.mapUi
);

export default function challengeReducers(state, action) {
  const newState = mainReducer(state, action);
  const files = filesReducer(state && state.files || {}, action);
  if (newState.files !== files) {
    return { ...newState, files };
  }
  // map actions only effect this reducer;
  const mapUi = mapReducer(state && state.mapUi || {}, action);
  if (newState.mapUi !== mapUi) {
    return { ...newState, mapUi };
  }
  return newState;
}
