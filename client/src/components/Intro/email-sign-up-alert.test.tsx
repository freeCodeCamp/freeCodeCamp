import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import EmailSignUpAlert from './email-sign-up-alert';

interface TestUser {
  completedChallenges: unknown[];
  sendQuincyEmail: boolean | null;
}

const baseUser: TestUser = {
  completedChallenges: [{}],
  sendQuincyEmail: null
};

function renderWithUser(user: TestUser | null) {
  const store = createStore(() => ({
    app: {
      user: {
        sessionUser: user
      }
    }
  }));

  renderWithStore(store);

  return store;
}

function renderWithStore(store: ReturnType<typeof createStore>) {
  render(
    <Provider store={store}>
      <EmailSignUpAlert />
    </Provider>
  );
}

describe('<EmailSignUpAlert />', () => {
  it('renders newsletter options for signed-in campers without a selection', () => {
    renderWithUser(baseUser);

    expect(
      screen.getByRole('heading', { level: 2, name: 'misc.email-signup' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.email-blast')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.no-thanks' })
    ).toBeInTheDocument();
  });

  it('does not render for new accounts', () => {
    renderWithUser({
      ...baseUser,
      completedChallenges: []
    });

    expect(screen.queryByText('misc.email-blast')).not.toBeInTheDocument();
  });

  it('does not render after the camper has made a selection', () => {
    renderWithUser({
      ...baseUser,
      sendQuincyEmail: false
    });

    expect(screen.queryByText('misc.email-blast')).not.toBeInTheDocument();
  });

  it('dispatches the selected newsletter preference', async () => {
    const user = userEvent.setup();
    const store = createStore(() => ({
      app: {
        user: {
          sessionUser: baseUser
        }
      }
    }));
    const dispatch = vi.spyOn(store, 'dispatch');
    renderWithStore(store);

    await user.click(screen.getByRole('button', { name: 'buttons.no-thanks' }));

    expect(dispatch).toHaveBeenCalledWith({
      type: 'settings.updateMyQuincyEmail',
      payload: { sendQuincyEmail: false }
    });
  });
});
