import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../../../utils/createTypes';
import { createSideNavigationSaga } from './side-navigation-saga';

export const ns = 'guideNav';

const initialState = {
  displayMenu: false,
  expandedState: {}
};

const types = createTypes(['toggleExpandedState', 'toggleDisplayMenu'], ns);

export const sagas = [...createSideNavigationSaga(types)];

export const toggleExpandedState = createAction(types.toggleExpandedState);
export const toggleDisplayMenu = createAction(types.toggleDisplayMenu);

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
    [types.toggleDisplayMenu]: state => ({
      ...state,
      displayMenu: !state.displayMenu
    })
  },
  initialState
);
