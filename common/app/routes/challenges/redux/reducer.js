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
  hintIndex: 0,
  // step index tracing
  currentIndex: 0,
  previousIndex: -1,
  // step action
  isActionCompleted: false,
  isLightBoxOpen: false,
  // project is ready to submit
  isSubmitting: false,
  output: `/**
  * Any console.log()
  * statements will appear in
  * here console.
  */`,
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
  shouldShowQuestions: false
};
const initialState = {
  id: '',
  challenge: '',
  // old code storage key
  legacyKey: '',
  files: {},
  // map
  mapUi: {},
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
      tests: createTests(challenge),
      numOfHints: Array.isArray(challenge.hints) ? challenge.hints.length : 0
    }),
    [types.updateTests]: (state, { payload: tests }) => ({
      ...state,
      tests
    }),
    [types.updateHint]: state => ({
      ...state,
      hintIndex: state.hintIndex + 1 >= state.numOfHints ?
        0 :
        state.hintIndex + 1
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

    [types.videoCompleted]: (state, { payload: userAnswer } ) => ({
      ...state,
      isCorrect: true,
      isPressed: false,
      delta: [ 0, 0 ],
      mouse: [ userAnswer ? 1000 : -1000, 0]
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

// {
//   // show
//   [(super)BlockName]: { open: Boolean }
//   // do not show
//   [(super)BlockName]: null
// }
const mapReducer = handleActions(
  {
    [types.initMap]: (state, { payload }) => ({
      ...state,
      ...payload
    }),
    [types.toggleThisPanel]: (state, { payload }) => ({
      ...state,
      [payload]: !state[payload]
    })
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
