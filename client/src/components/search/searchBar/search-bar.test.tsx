import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';

import { createStore } from '../../../redux/create-store';
import { SearchBar } from './search-bar';

vi.mock('../../../analytics');
vi.mock('../../../utils/get-words');

describe('<SearchBar />', () => {
  it('renders to the DOM', () => {
    const store = createStore();
    render(
      <Provider store={store}>
        <SearchBar {...searchBarProps} />
      </Provider>
    );
    expect(screen.getByTestId('fcc_searchBar')).toBeTruthy();
  });

  /* Todo: When e2e testing is in place,
  add tests to check that the search bar
  resets to -1 on change/input, redirects to a
  selected hit, and redirects to dev news if
  there's a query and no hit is selected */
});

const searchBarProps = {
  toggleSearchDropdown: vi.fn(),
  toggleSearchFocused: vi.fn(),
  updateSearchQuery: vi.fn()
};
