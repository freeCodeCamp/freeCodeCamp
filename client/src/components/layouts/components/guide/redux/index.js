import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../../utils/createTypes';

export const ns = 'guideNav';

const initialState = {
  displaySideNav: false,
  displayMenu: false,
  expandedState: {}
};

const types = createTypes(
  ['toggleExpandedState', 'toggleDisplaySideNav', 'toggleDisplayMenu'],
  ns
);

export const toggleExpandedState = createAction(types.toggleExpandedState);
export const toggleDisplaySideNav = createAction(types.toggleDisplaySideNav);
export const toggleDisplayMenu = createAction(types.toggleDisplayMenu);

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
      displayMenu: !state.displayMenu,
      displaySideNav: !state.displaySideNav
    }),
    [types.toggleDisplayMenu]: state => ({
      ...state,
      displayMenu: !state.displayMenu
    })
  },
  initialState
);
