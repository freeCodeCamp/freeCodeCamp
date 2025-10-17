import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/create-types';

export const ns = 'curriculumMap';

const initialState = {
  expandedState: {
    block: {}
  },
  superBlockStructures: {}
};

const types = createTypes(
  ['resetExpansion', 'toggleBlock', 'updateSuperBlockStructures'],
  ns
);

export const resetExpansion = createAction(types.resetExpansion);
export const toggleBlock = createAction(types.toggleBlock);
export const updateSuperBlockStructures = createAction(
  types.updateSuperBlockStructures
);

export const makeExpandedBlockSelector = block => state =>
  !!state[ns].expandedState.block[block];
export const superBlockStructuresSelector = state =>
  state[ns].superBlockStructures || {};

export const reducer = handleActions(
  {
    [types.resetExpansion]: state => ({
      ...state,
      expandedState: {
        block: {}
      }
    }),
    [types.toggleBlock]: (state, { payload }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        block: {
          ...state.expandedState.block,
          [payload]: !state.expandedState.block[payload]
        }
      }
    }),
    [types.updateSuperBlockStructures]: (state, { payload }) => ({
      ...state,
      superBlockStructures: { ...payload }
    })
  },
  initialState
);
