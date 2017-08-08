import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import noop from 'lodash/noop';

import ns from '../ns.json';

export const types = createTypes([
  'nextQuestion',
  'selectChoice',
  'incrementCorrect',
  'resetQuiz',
  'resetChoice'
], ns);

export const nextQuestion = createAction(
  types.nextQuestion,
  noop
);

export const selectChoice = createAction(
  types.selectChoice,
  (selectedChoice) => ({ selectedChoice })
);

export const incrementCorrect = createAction(
  types.incrementCorrect,
  noop
);

export const resetQuiz = createAction(
  types.resetQuiz,
  noop
);

export const resetChoice = createAction(
  types.resetChoice,
  noop
);

const initialState = {
  currentIndex: 0,
  selectedChoice: null,
  correct: 0
};

export const getNS = state => state[ns];
export const currentIndexSelector = state => getNS(state).currentIndex;
export const selectedChoiceSelector = state => getNS(state).selectedChoice;
export const correctSelector = state => getNS(state).correct;

export default function createReducers() {
  const reducer = handleActions({
    [types.nextQuestion]: state => ({
      ...state,
      currentIndex: state.currentIndex + 1
    }),
    [types.selectChoice]: (state, {payload}) => ({
      ...state,
      selectedChoice: payload.selectedChoice
    }),
    [types.incrementCorrect]: state => ({
      ...state,
      correct: state.correct + 1
    }),
    [types.resetQuiz]: state => ({
      ...state,
      currentIndex: 0,
      correct: 0,
      selectedChoice: null
    }),
    [types.resetChoice]: state => ({
      ...state,
      selectedChoice: null
    })
  }, initialState);

  reducer.toString = () => ns;
  return [ reducer ];
}
