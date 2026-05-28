import { describe, it, expect } from 'vitest';
import {
  reducer,
  toggleSearchFocused,
  toggleSearchDropdown,
  updateSearchQuery
} from './index';

const initialState = {
  query: '',
  indexName: 'news',
  isSearchDropdownEnabled: true,
  isSearchBarFocused: false
};

describe('search reducer', () => {
  describe('toggleSearchDropdown', () => {
    it('sets dropdown to false when payload is false', () => {
      const result = reducer(initialState, toggleSearchDropdown(false));
      expect(result.isSearchDropdownEnabled).toBe(false);
    });

    it('toggles dropdown when payload is not a boolean', () => {
      const result = reducer(initialState, toggleSearchDropdown(undefined));
      expect(result.isSearchDropdownEnabled).toBe(false);
    });
  });

  describe('toggleSearchFocused', () => {
    it('updates isSearchBarFocused when payload differs from current state', () => {
      const result = reducer(initialState, toggleSearchFocused(true));
      expect(result.isSearchBarFocused).toBe(true);
    });

    it('returns same state reference when payload matches current state', () => {
      const result = reducer(initialState, toggleSearchFocused(false));
      expect(result).toBe(initialState);
    });

    it('does not deduplicate when non-boolean truthy payload is passed', () => {
      const focusedState = { ...initialState, isSearchBarFocused: true };
      const result = reducer(focusedState, toggleSearchFocused(1));
      expect(result).toBe(focusedState);
    });
  });

  describe('updateSearchQuery', () => {
    it('updates the query string', () => {
      const result = reducer(initialState, updateSearchQuery('javascript'));
      expect(result.query).toBe('javascript');
    });

    it('resets query to empty string', () => {
      const state = { ...initialState, query: 'react' };
      const result = reducer(state, updateSearchQuery(''));
      expect(result.query).toBe('');
    });
  });
});
