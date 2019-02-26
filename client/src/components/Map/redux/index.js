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

const types = createTypes(['toggleSuperBlock', 'toggleBlock'], ns);

export const toggleBlock = createAction(
  types.toggleBlock,
  (block, expanded) => ({ block, expanded })
);
export const toggleSuperBlock = createAction(
  types.toggleSuperBlock,
  (superBlock, expanded) => ({ superBlock, expanded })
);

// The expandedState tracks if the user has manually toggled the (super)block
// and, if so, which state they want it to be in.
export const makeExpandedSuperBlockSelector = superBlock => state =>
  state[ns].expandedState.superBlock[superBlock];
export const makeExpandedBlockSelector = block => state =>
  state[ns].expandedState.block[block];

export const reducer = handleActions(
  {
    [types.toggleBlock]: (state, { payload }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        block: {
          ...state.expandedState.block,
          [payload.block]: !!payload.expanded
        }
      }
    }),
    [types.toggleSuperBlock]: (state, { payload }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        superBlock: {
          ...state.expandedState.superBlock,
          [payload.superBlock]: !!payload.expanded
        }
      }
    })
  },
  initialState
);
