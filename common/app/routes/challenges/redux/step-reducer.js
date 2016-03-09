import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  currentStep: 0,
  previousStep: -1
};

export default handleActions(
  {
    [types.resetStep]: () => initialState,
    [types.goToStep]: (state, { payload: step = 0 }) => ({
      ...state,
      currentStep: step,
      previousStep: state.currentStep
    })
  },
  initialState
);
