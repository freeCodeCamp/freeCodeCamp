import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../utils/stateManagement';

export const ns = 'curriculumMap';

export const getNS = () => ns;

const initialState = {
  expandedState: {
    superBlock: {},
    block: {}
  }
};

const types = createTypes(
  ['resetExpansion', 'toggleSuperBlock', 'toggleBlock'],
  ns
);

export const resetExpansion = createAction(types.resetExpansion);
export const toggleBlock = createAction(types.toggleBlock);
export const toggleSuperBlock = createAction(types.toggleSuperBlock);

export const makeExpandedSuperBlockSelector = superBlock => state =>
  !!state[ns].expandedState.superBlock[superBlock];
export const makeExpandedBlockSelector = block => state =>
  !!state[ns].expandedState.block[block];

export const reducer = handleActions(
  {
    [types.resetExpansion]: state => ({
      ...state,
      expandedState: {
        superBlock: {},
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
    [types.toggleSuperBlock]: (state, { payload }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        superBlock: {
          ...state.expandedState.superBlock,
          [payload]: !state.expandedState.superBlock[payload]
        }
      }
    })
  },
  initialState
);
