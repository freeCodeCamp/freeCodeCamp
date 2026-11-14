/* oxlint-disable filenames-simple/naming-convention */
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';

import { Head } from './[maybeUser]';

vi.mock('../client-only-routes/show-profile-or-four-oh-four', () => ({
  default: () => null
}));
vi.mock('../components/page-head', () => ({
  default: ({ title }: { title?: string }) => (
    <title>{title ?? 'Default title'}</title>
  )
}));

function makeState(pending: boolean, username: string | null = null) {
  return {
    app: {
      user: {
        sessionUser: null,
        otherUser: username ? { username } : null
      },
      userProfileFetchState: { pending }
    }
  };
}

describe('profile page Head', () => {
  it('updates the title when a fetched profile loads, and when another profile is missing', () => {
    const store = configureStore({
      reducer: (
        state: ReturnType<typeof makeState> = makeState(true),
        action: { type: string; payload?: ReturnType<typeof makeState> }
      ) =>
        action.type === 'replace-state' && action.payload
          ? action.payload
          : state
    });
    const { rerender } = render(
      <Provider store={store}>
        <Head params={{ maybeUser: 'Camper' }} />
      </Provider>
    );
    expect(screen.getByText('Default title')).toBeInTheDocument();

    act(() => {
      store.dispatch({
        type: 'replace-state',
        payload: makeState(false, 'camper')
      });
    });
    expect(
      screen.getByText('buttons.profile | freeCodeCamp.org')
    ).toBeInTheDocument();

    rerender(
      <Provider store={store}>
        <Head params={{ maybeUser: 'missing' }} />
      </Provider>
    );
    expect(
      screen.getByText('404.page-not-found | freeCodeCamp.org')
    ).toBeInTheDocument();
  });
});
