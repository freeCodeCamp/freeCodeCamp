import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../../utils/createTypes';
import { createSideNavigationSaga } from './side-navigation-saga';

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

export const sagas = [...createSideNavigationSaga(types)];

export const toggleExpandedState = createAction(types.toggleExpandedState);
export const toggleDisplaySideNav = createAction(types.toggleDisplaySideNav);
export const toggleDisplayMenu = createAction(types.toggleDisplayMenu);

export const displaySideNavSelector = state => state[ns].displaySideNav;
export const displayMenuSelector = state => state[ns].displayMenu;
export const expandedStateSelector = state => state[ns].expandedState;

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
