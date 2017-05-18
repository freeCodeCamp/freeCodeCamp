import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import noop from 'lodash/noop';

import ns from '../ns.json';
import stepChallengeEpic from './step-challenge-epic.js';

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

const reducer = handleActions({
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
export default reducer;
