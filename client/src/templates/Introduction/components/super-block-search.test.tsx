import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import SuperBlockSearch from './super-block-search';

describe('SuperBlockSearch', () => {
  it('should render a search input', () => {
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={0}
        isSearching={false}
      />
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should not show a clear button when input is empty', () => {
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={0}
        isSearching={false}
      />
    );
    expect(
      screen.queryByRole('button', { name: /icons.input-reset/i })
    ).not.toBeInTheDocument();
  });

  it('should show a clear button when input has a value', async () => {
    const user = userEvent.setup();
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={0}
        isSearching={false}
      />
    );
    await user.type(screen.getByRole('searchbox'), 'html');
    expect(
      screen.getByRole('button', { name: /icons.input-reset/i })
    ).toBeInTheDocument();
  });

  it('should clear the input and call onSearch with empty string when clear button is clicked', async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();
    render(
      <SuperBlockSearch
        onSearch={onSearch}
        resultCount={0}
        isSearching={false}
      />
    );
    await user.type(screen.getByRole('searchbox'), 'html');
    await user.click(
      screen.getByRole('button', { name: /icons.input-reset/i })
    );
    expect(screen.getByRole('searchbox')).toHaveValue('');
    expect(onSearch).toHaveBeenLastCalledWith('');
  });

  it('should show a result count status message when searching with results', () => {
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={5}
        isSearching={true}
      />
    );
    const status = screen.getByText(/search-challenges-results/i);
    expect(status).toBeInTheDocument();
    expect(status).toHaveAttribute('aria-live', 'polite');
  });

  it('should show a no-results status message when searching with no results', () => {
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={0}
        isSearching={true}
      />
    );
    expect(
      screen.getByText(/search-challenges-no-results/i)
    ).toBeInTheDocument();
  });

  it('should show no status message when not searching', () => {
    render(
      <SuperBlockSearch
        onSearch={() => {}}
        resultCount={0}
        isSearching={false}
      />
    );
    expect(screen.queryByText(/search-challenges/i)).not.toBeInTheDocument();
  });
});
