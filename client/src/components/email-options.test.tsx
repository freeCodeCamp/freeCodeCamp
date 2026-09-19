import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import callGA from '../analytics/call-ga';
import EmailOptions from './email-options';

vi.mock('../analytics/call-ga', () => ({
  default: vi.fn()
}));

function renderEmailOptions(isSignedIn: boolean) {
  return render(
    <EmailOptions
      isSignedIn={isSignedIn}
      updateQuincyEmail={vi.fn()}
      isPage={true}
    />
  );
}

describe('<EmailOptions />', () => {
  afterEach(() => {
    vi.mocked(callGA).mockClear();
  });

  it('tracks the choice and its source when rendered as a page', async () => {
    const user = userEvent.setup();
    const updateQuincyEmail = vi.fn();
    render(
      <EmailOptions
        isSignedIn={true}
        updateQuincyEmail={updateQuincyEmail}
        isPage={true}
      />
    );

    await user.click(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    );

    expect(callGA).toHaveBeenCalledWith({
      event: 'email_sign_up_choice',
      choice: 'yes',
      source: 'page'
    });
    expect(updateQuincyEmail).toHaveBeenCalledWith(true);
  });

  it('tracks the choice and its source when rendered as an alert', async () => {
    const user = userEvent.setup();
    const updateQuincyEmail = vi.fn();
    render(
      <EmailOptions isSignedIn={true} updateQuincyEmail={updateQuincyEmail} />
    );

    await user.click(screen.getByRole('button', { name: 'buttons.no-thanks' }));

    expect(callGA).toHaveBeenCalledWith({
      event: 'email_sign_up_choice',
      choice: 'no',
      source: 'alert'
    });
    expect(updateQuincyEmail).toHaveBeenCalledWith(false);
  });

  it('does not track anything for signed-out visitors', () => {
    render(
      <EmailOptions
        isSignedIn={false}
        updateQuincyEmail={vi.fn()}
        isPage={true}
      />
    );

    expect(callGA).not.toHaveBeenCalled();
  });

  it('renders the signed-out state with heading, copy, and sign-in button', () => {
    renderEmailOptions(false);

    expect(
      screen.getByRole('heading', { level: 1, name: 'misc.email-signup' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.email-blast')).toBeInTheDocument();
    expect(
      screen.getByText('misc.email-signup-not-signed-in')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.sign-in' })
    ).toHaveAttribute('href', 'http://localhost:3000/signin');
  });

  it('renders the signed-in state with heading, copy, and yes/no buttons', () => {
    renderEmailOptions(true);

    expect(
      screen.getByRole('heading', { level: 1, name: 'misc.email-signup' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.email-blast')).toBeInTheDocument();
    expect(screen.getByText('misc.quincy')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.no-thanks' })
    ).toBeInTheDocument();
  });
});
