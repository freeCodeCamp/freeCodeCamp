import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../utils/stateManagement';

export const ns = 'curriculumMap';

export const getNS = () => ns;

const initialState = {
  expandedState: {
    superBlock: {
      'Responsive Web Design': true
    },
    block: {
      'basic-html-and-html5': true
    }
  }
};

const types = createTypes(['toggleSuperBlock', 'toggleBlock'], ns);

export const toggleBlock = createAction(types.toggleBlock);
export const toggleSuperBlock = createAction(types.toggleSuperBlock);

export const makeExpandedSuperBlockSelector = superBlock => state =>
  !!state[ns].expandedState.superBlock[superBlock];
export const makeExpandedBlockSelector = block => state =>
  !!state[ns].expandedState.block[block];

export const reducer = handleActions(
  {
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
