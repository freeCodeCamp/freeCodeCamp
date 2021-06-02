import { createAction, handleActions } from 'redux-actions';
import { createTypes } from '../../../utils/createTypes';

export const ns = 'search';
interface IHomeReducer {
  query: string;
  indexName: string;
  isSearchDropdownEnabled: boolean;
  isSearchBarFocused: boolean;
}
const initialState = {
  query: '',
  indexName: 'news',
  isSearchDropdownEnabled: true,
  isSearchBarFocused: false
};
type actionType = {
  toggleSearchDropdown: string;
  toggleSearchFocused: string;
  updateSearchIndexName: string;
  updateSearchQuery: string;
};

export const types = createTypes(
  [
    'toggleSearchDropdown',
    'toggleSearchFocused',
    'updateSearchIndexName',
    'updateSearchQuery'
  ],
  ns
) as actionType;

export const toggleSearchDropdown = createAction(types.toggleSearchDropdown);
export const toggleSearchFocused = createAction(types.toggleSearchFocused);
export const updateSearchIndexName = createAction(types.updateSearchIndexName);
export const updateSearchQuery = createAction(types.updateSearchQuery);

export const isSearchDropdownEnabledSelector = (state: {
  [x: string]: IHomeReducer;
}): boolean => state[ns].isSearchDropdownEnabled;
export const isSearchBarFocusedSelector = (state: {
  [x: string]: IHomeReducer;
}): boolean => state[ns].isSearchBarFocused;
export const searchIndexNameSelector = (state: {
  [x: string]: IHomeReducer;
}): string => state[ns].indexName;
export const searchQuerySelector = (state: {
  [x: string]: IHomeReducer;
}): string => state[ns].query;

export const reducer = handleActions<IHomeReducer, any>(
  {
    [types.toggleSearchDropdown]: (state, { payload }) => ({
      ...state,
      isSearchDropdownEnabled:
        typeof payload === 'boolean' ? payload : !state.isSearchDropdownEnabled
    }),
    [types.toggleSearchFocused]: (
      state,
      { payload }: { payload: boolean }
    ) => ({
      ...state,
      isSearchBarFocused: payload
    }),
    [types.updateSearchIndexName]: (
      state,
      { payload }: { payload: string }
    ) => ({
      ...state,
      indexName: payload
    }),
    [types.updateSearchQuery]: (state, { payload }: { payload: string }) => {
      return {
        ...state,
        query: payload
      };
    }
  },
  initialState
);
