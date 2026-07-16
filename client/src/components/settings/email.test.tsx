import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { describe, expect, it, vi } from 'vitest';

import EmailSettings from './email';

const originalEmail = 'foo@bar.com';
const newEmail = 'foo-update@bar.com';

function renderEmailSettings(
  props: Partial<React.ComponentProps<typeof EmailSettings>> = {}
) {
  const store = createStore(() => ({}));
  return render(
    <Provider store={store}>
      <EmailSettings
        email={originalEmail}
        isEmailVerified={true}
        sendQuincyEmail={false}
        updateQuincyEmail={vi.fn()}
        {...props}
      />
    </Provider>
  );
}

describe('<EmailSettings />', () => {
  it('renders current email and subscription state', () => {
    renderEmailSettings();

    expect(
      screen.getByRole('heading', { name: 'settings.email.heading' })
    ).toBeInTheDocument();
    expect(screen.getByText(originalEmail)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: 'buttons.save settings.email.heading'
      })
    ).toHaveAttribute('aria-disabled', 'true');
    expect(
      screen.getByRole('group', { name: 'settings.email.weekly' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    ).toHaveAttribute('aria-pressed', 'false');
    expect(
      screen.getByRole('button', { name: 'buttons.no-thanks' })
    ).toHaveAttribute('aria-pressed', 'true');
  });

  it('shows validation errors for invalid email input', async () => {
    const user = userEvent.setup();
    renderEmailSettings();

    await user.type(
      screen.getByLabelText('settings.email.new', { exact: true }),
      newEmail
    );
    await user.type(
      screen.getByLabelText('settings.email.confirm'),
      originalEmail
    );

    expect(screen.getByText('validation.email-mismatch')).toBeInTheDocument();

    await user.clear(
      screen.getByLabelText('settings.email.new', { exact: true })
    );
    await user.type(
      screen.getByLabelText('settings.email.new', { exact: true }),
      originalEmail
    );

    expect(screen.getByText('validation.same-email')).toBeInTheDocument();
  });

  it('toggles the weekly email subscription', async () => {
    const user = userEvent.setup();
    const updateQuincyEmail = vi.fn();
    renderEmailSettings({ updateQuincyEmail });

    await user.click(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    );

    expect(updateQuincyEmail).toHaveBeenCalledWith(true);
  });
});
