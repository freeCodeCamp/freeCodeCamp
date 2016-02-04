import { handleActions } from 'redux-actions';
import types from './types';
import { findNextHike } from './utils';

const initialState = {
  hikes: {
    results: [],
    entities: {}
  },
  // ui
  // hike dashedName
  currentHike: '',
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

export default handleActions(
  {
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

    [types.resetHike]: state => ({
      ...state,
      currentQuestion: 1,
      shouldShowQuestions: false,
      mouse: [0, 0],
      delta: [0, 0]
    }),

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

    [types.hikeCompleted]: (state, { payload: userAnswer } ) => ({
      ...state,
      isCorrect: true,
      isPressed: false,
      delta: [ 0, 0 ],
      mouse: [ userAnswer ? 1000 : -1000, 0]
    }),

    [types.goToNextHike]: state => ({
      ...state,
      currentHike: findNextHike(state.hikes, state.currentHike),
      showQuestions: false,
      currentQuestion: 1,
      mouse: [ 0, 0 ]
    }),

    [types.fetchHikesCompleted]: (state, { payload }) => {
      const { hikes, currentHike } = payload;

      return {
        ...state,
        hikes,
        currentHike
      };
    }
  },
  initialState
);
