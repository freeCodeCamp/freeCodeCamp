import { handleActions } from 'redux-actions';
import types from './types';
import { findNextHike } from './utils';

const initialState = {
  hikes: {
    results: [],
    entities: {}
  },
  // lecture state
  currentHike: '',
  showQuestions: false
};

export default handleActions(
  {
    [types.toggleQuestion]: state => ({
      ...state,
      showQuestions: !state.showQuestions,
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
      showQuestions: false,
      mouse: [0, 0],
      delta: [0, 0]
    }),

    [types.startShake]: state => ({ ...state, shake: true }),
    [types.endShake]: state => ({ ...state, shake: false }),

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
      currentHike: findNextHike(state.hikes, state.currentHike.id),
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
