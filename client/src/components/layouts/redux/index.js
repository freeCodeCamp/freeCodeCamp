import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/createTypes';

export const ns = 'guideNav';

const initialState = {
  displaySideNav: false,
  expandedState: {}
};

const types = createTypes(['toggleExpandedState', 'toggleDisplaySideNav'], ns);

export const toggleExpandedState = createAction(types.toggleExpandedState);
export const toggleDisplaySideNav = createAction(types.toggleDisplaySideNav);

export const reducer = handleActions(
  {
    [types.toggleExpandedState]: (state, { payload }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        [payload]: !state.expandedState[payload]
      }
    }),
    [types.toggleDisplaySideNav]: state => ({
      ...state,
      displaySideNav: !state.displaySideNav
    })
  },
  initialState
);
