import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import callGA from '../analytics/call-ga';
import EmailOptions from './email-options';

vi.mock('../analytics/call-ga', () => ({
  default: vi.fn()
}));

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
});
