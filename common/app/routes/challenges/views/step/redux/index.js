import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

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
  'openLightBoxImage',
  'closeLightBoxImage',
  'updateUnlockedSteps'
], ns);

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

const initialState = {
  // step index tracing
  currentIndex: 0,
  previousIndex: -1,
  // step action
  isActionCompleted: false,
  isLightBoxOpen: false,
  unlockedSteps: []
};

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
  [types.openLightBoxImage]: state => ({
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
