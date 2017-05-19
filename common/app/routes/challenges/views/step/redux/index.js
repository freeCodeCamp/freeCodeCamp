import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import noop from 'lodash/noop';

import stepChallengeEpic from './step-challenge-epic.js';
import ns from '../ns.json';
import { types as challenges } from '../../../redux';

export const epics = [
  stepChallengeEpic
];

export const types = createTypes([
  'stepForward',
  'stepBackward',
  'goToStep',
  'completeAction',
  'clickOnImage',
  'closeLightBoxImage',
  'updateUnlockedSteps'
], ns);

export const stepForward = createAction(
  types.stepForward,
  noop
);
export const stepBackward = createAction(
  types.stepBackward,
  noop
);
export const goToStep = createAction(
  types.goToStep,
  (step, isUnlocked) => ({ step, isUnlocked })
);
export const completeAction = createAction(
  types.completeAction,
  noop
);
export const updateUnlockedSteps = createAction(types.updateUnlockedSteps);
export const clickOnImage = createAction(types.clickOnImage);
export const closeLightBoxImage = createAction(types.closeLightBoxImage);

const initialState = {
  // step index tracing
  currentIndex: 0,
  previousIndex: -1,
  // step action
  isActionCompleted: false,
  isLightBoxOpen: false,
  unlockedSteps: []
};

export const getNS = state => state[ns];
export const currentIndexSelector = state => getNS(state).currentIndex;
export const previousIndexSelector = state => getNS(state).previousIndex;
export const unlockedStepsSelector = state => getNS(state).unlockedSteps;
export const lightBoxSelector = state => getNS(state).isLightBoxOpen;
export const actionCompletedSelector = state => getNS(state).isActionCompleted;

export default function createReducers() {
  const reducer = handleActions({
    [challenges.challengeUpdated]: () => {
      console.log('updating step ui');
      return initialState;
    },
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
    [types.clickOnImage]: state => ({
      ...state,
      isLightBoxOpen: true
    }),
    [types.closeLightBoxImage]: state => ({
      ...state,
      isLightBoxOpen: false
    })
  }, initialState);

  reducer.toString = () => ns;
  return [ reducer ];
}
