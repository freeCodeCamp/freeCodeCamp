import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import type { TFunction } from 'i18next';
import { describe, expect, it, vi } from 'vitest';

import { UsernameSettings } from './username';

const username = 'certifieduser';
const t = ((key: string) => key) as unknown as TFunction;

const getInput = () => screen.getByLabelText('settings.labels.username');
const getSaveButton = () =>
  screen.getByRole('button', { name: /buttons\.save/ });

function renderUsernameSettings({
  isValidUsername = false,
  validating = false
}: {
  isValidUsername?: boolean;
  validating?: boolean;
} = {}) {
  const submitNewUsername = vi.fn();
  const validateUsername = vi.fn();
  const setIsEditing = vi.fn();

  render(
    <UsernameSettings
      isValidUsername={isValidUsername}
      setIsEditing={setIsEditing}
      submitNewUsername={submitNewUsername}
      t={t}
      username={username}
      validateUsername={validateUsername}
      validating={validating}
    />
  );

  return { setIsEditing, submitNewUsername, validateUsername };
}

describe('<UsernameSettings />', () => {
  it('renders a disabled save button until the username changes', () => {
    renderUsernameSettings();

    expect(getInput()).toHaveValue(username);
    expect(getSaveButton()).toHaveAttribute('aria-disabled', 'true');
  });

  it.each([
    ['404', 'settings.username.is a reserved error code'],
    ['user!', 'settings.username.contains invalid characters'],
    ['us', 'settings.username.is too short']
  ])('shows the local validation error for %s', (value, error) => {
    const { validateUsername } = renderUsernameSettings();

    fireEvent.change(getInput(), { target: { value } });

    expect(screen.getByText(error)).toBeInTheDocument();
    expect(getSaveButton()).toHaveAttribute('aria-disabled', 'true');
    expect(validateUsername).not.toHaveBeenCalled();
  });

  it('shows an unavailable warning for a valid username rejected by the server', async () => {
    const user = userEvent.setup();
    const { validateUsername } = renderUsernameSettings();

    await user.clear(getInput());
    await user.type(getInput(), 'takenusername');

    expect(validateUsername).toHaveBeenLastCalledWith('takenusername');
    expect(
      screen.getByText('settings.username.unavailable')
    ).toBeInTheDocument();
    expect(getSaveButton()).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables saving after a valid username is available', async () => {
    const user = userEvent.setup();
    const { validateUsername } = renderUsernameSettings({
      isValidUsername: true
    });

    await user.clear(getInput());
    await user.type(getInput(), 'availableusername');

    expect(validateUsername).toHaveBeenLastCalledWith('availableusername');
    expect(screen.getByText('settings.username.available')).toBeInTheDocument();
    expect(getSaveButton()).not.toHaveAttribute('aria-disabled', 'true');
  });
});
