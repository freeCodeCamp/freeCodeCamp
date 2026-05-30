import { describe, expect, it } from 'vitest';

import {
  reducer,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery
} from './index';

describe('search redux reducer', () => {
  const initialState = reducer(undefined, { type: '@@INIT' });

  it('returns the initial state', () => {
    expect(initialState).toEqual({
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: true,
      isSearchBarFocused: false
    });
  });

  describe('toggleSearchDropdown', () => {
    it('sets isSearchDropdownEnabled from a boolean payload', () => {
      const state = reducer(initialState, toggleSearchDropdown(false));

      expect(state).toEqual({
        ...initialState,
        isSearchDropdownEnabled: false
      });
    });

    it('toggles isSearchDropdownEnabled when payload is undefined', () => {
      const state = reducer(initialState, toggleSearchDropdown());

      expect(state).toEqual({
        ...initialState,
        isSearchDropdownEnabled: false
      });
    });

    it('toggles isSearchDropdownEnabled when payload is not a boolean', () => {
      const state = reducer(initialState, toggleSearchDropdown('invalid'));

      expect(state).toEqual({
        ...initialState,
        isSearchDropdownEnabled: false
      });
    });
  });

  describe('toggleSearchFocused', () => {
    it('sets isSearchBarFocused to true', () => {
      const state = reducer(initialState, toggleSearchFocused(true));

      expect(state).toEqual({
        ...initialState,
        isSearchBarFocused: true
      });
    });

    it('sets isSearchBarFocused to false', () => {
      const focusedState = {
        ...initialState,
        isSearchBarFocused: true
      };

      const state = reducer(focusedState, toggleSearchFocused(false));

      expect(state).toEqual({
        ...initialState,
        isSearchBarFocused: false
      });
    });

    it('returns the same state when payload matches the current focus state', () => {
      const state = reducer(initialState, toggleSearchFocused(false));

      expect(state).toBe(initialState);
    });

    it('stores a non-boolean payload as-is', () => {
      const state = reducer(initialState, toggleSearchFocused('focused'));

      expect(state).toEqual({
        ...initialState,
        isSearchBarFocused: 'focused'
      });
    });
  });

  describe('updateSearchQuery', () => {
    it('updates query from the payload', () => {
      const state = reducer(initialState, updateSearchQuery('javascript'));

      expect(state).toEqual({
        ...initialState,
        query: 'javascript'
      });
    });
  });
});