import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/create-types';

export const ns = 'search';

const initialState = {
  query: '',
  indexName: 'news',
  isSearchDropdownEnabled: true,
  isSearchBarFocused: false
};

const types = createTypes(
  ['toggleSearchDropdown', 'toggleSearchFocused', 'updateSearchQuery'],
  ns
);

export const toggleSearchDropdown = createAction(types.toggleSearchDropdown);
export const toggleSearchFocused = createAction(types.toggleSearchFocused);
export const updateSearchQuery = createAction(types.updateSearchQuery);

export const isSearchDropdownEnabledSelector = state =>
  state[ns].isSearchDropdownEnabled;
export const isSearchBarFocusedSelector = state => state[ns].isSearchBarFocused;
export const searchQuerySelector = state => state[ns].query;

export const reducer = handleActions(
  {
    [types.toggleSearchDropdown]: (state, { payload }) => ({
      ...state,
      isSearchDropdownEnabled:
        typeof payload === 'boolean' ? payload : !state.isSearchDropdownEnabled
    }),
    [types.toggleSearchFocused]: (state, { payload }) => {
      const focussed = state.isSearchBarFocused;
      return focussed === payload
        ? state
        : { ...state, isSearchBarFocused: payload };
    },
    [types.updateSearchQuery]: (state, { payload }) => ({
      ...state,
      query: payload
    })
  },
  initialState
);
