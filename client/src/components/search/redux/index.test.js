import { describe, it, expect } from 'vitest';

import {
  reducer,
  toggleSearchDropdown,
  toggleSearchFocused,
  updateSearchQuery,
  ns
} from './index';

describe('search/redux reducer', () => {
  it('toggleSearchDropdown: sets enabled when payload is boolean', () => {
    const initialState = {
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: false,
      isSearchBarFocused: false
    };

    const next = reducer(initialState, toggleSearchDropdown(true));

    expect(next.isSearchDropdownEnabled).toBe(true);
    expect(next.isSearchBarFocused).toBe(false);
    expect(next.query).toBe('');
    expect(next.indexName).toBe('news');
  });

  it('toggleSearchDropdown: toggles enabled when payload is non-boolean', () => {
    const initialState = {
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: true,
      isSearchBarFocused: false
    };

    const next = reducer(initialState, toggleSearchDropdown(123));

    expect(next.isSearchDropdownEnabled).toBe(false);
  });

  it('toggleSearchFocused: sets focused when payload differs', () => {
    const initialState = {
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: true,
      isSearchBarFocused: false
    };

    const next = reducer(initialState, toggleSearchFocused(true));

    expect(next.isSearchBarFocused).toBe(true);
  });

  it('toggleSearchFocused: can store non-boolean payload (document type-mismatch behavior)', () => {
    const initialState = {
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: true,
      isSearchBarFocused: false
    };

    const next = reducer(initialState, toggleSearchFocused(1));

    expect(next.isSearchBarFocused).toBe(1);
  });

  it('updateSearchQuery: updates query', () => {
    const initialState = {
      query: '',
      indexName: 'news',
      isSearchDropdownEnabled: true,
      isSearchBarFocused: false
    };

    const next = reducer(initialState, updateSearchQuery('react redux'));

    expect(next.query).toBe('react redux');
  });

  it('exports namespace ns as "search"', () => {
    expect(ns).toBe('search');
  });
});

