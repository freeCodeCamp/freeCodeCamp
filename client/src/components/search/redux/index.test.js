import { describe, it, expect } from 'vitest';

import {
  reducer,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery
} from './index';

describe('search reducer', () => {
  it('toggles search dropdown when payload is undefined', () => {
    const state = reducer(undefined, toggleSearchDropdown());
    expect(state.isSearchDropdownEnabled).toBe(false);
  });

  it('sets dropdown when boolean payload is provided', () => {
    const state = reducer(undefined, toggleSearchDropdown(false));
    expect(state.isSearchDropdownEnabled).toBe(false);
  });

  it('updates search query', () => {
    const state = reducer(undefined, updateSearchQuery('react'));
    expect(state.query).toBe('react');
  });

  it('updates focus state', () => {
    const state = reducer(undefined, toggleSearchFocused(true));
    expect(state.isSearchBarFocused).toBe(true);
  });

  it('supports non-boolean focus payload', () => {
    const state = reducer(undefined, toggleSearchFocused('banana'));
    expect(state.isSearchBarFocused).toBe('banana');
  });

  it('returns same state when focus value does not change', () => {
    const first = reducer(undefined, toggleSearchFocused(false));
    const second = reducer(first, toggleSearchFocused(false));

    expect(second).toBe(first);
  });
});
