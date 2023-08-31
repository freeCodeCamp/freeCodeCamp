import { createAction, handleActions } from 'redux-actions';
import { createTypes } from '../../../utils/create-types';

type SearchState = {
  search: {
    query: string;
    indexName: string;
    isSearchDropdownEnabled: boolean;
    isSearchBarFocused: boolean;
  };
};

const initialState: SearchState = {
  search: {
    query: '',
    indexName: 'news',
    isSearchDropdownEnabled: true,
    isSearchBarFocused: false
  }
};

const types = createTypes(
  ['toggleSearchDropdown', 'toggleSearchFocused', 'updateSearchQuery'],
  'search'
);

export const toggleSearchDropdown = createAction<boolean>(
  types.toggleSearchDropdown
);
export const toggleSearchFocused = createAction<boolean>(
  types.toggleSearchFocused
);
export const updateSearchQuery = createAction<string>(types.updateSearchQuery);

export const isSearchDropdownEnabledSelector = (state: SearchState) => {
  return state.search.isSearchDropdownEnabled;
};
export const isSearchBarFocusedSelector = (state: SearchState) =>
  state.search.isSearchBarFocused;
export const searchQuerySelector = (state: SearchState) => state.search.query;

export const reducer = handleActions<SearchState>(
  {
    [types.toggleSearchDropdown]: (state, { payload }) => ({
      ...state,
      isSearchDropdownEnabled:
        typeof payload === 'boolean'
          ? payload
          : !state.search.isSearchDropdownEnabled
    }),
    [types.toggleSearchFocused]: (state, { payload }) => ({
      ...state,
      isSearchBarFocused: payload
    }),
    [types.updateSearchQuery]: (state, { payload }) => {
      return {
        ...state,
        query: payload
      };
    }
  },
  initialState
);
