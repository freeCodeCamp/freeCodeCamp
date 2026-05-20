import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ProfilePrivacy } from './profile-privacy';

const defaultProfileUI = {
  isLocked: false,
  showName: true,
  showLocation: true,
  showAbout: true,
  showPoints: true,
  showHeatMap: true,
  showCerts: true,
  showPortfolio: true,
  showExperience: true,
  showTimeLine: true,
  showDonation: true
};

function makeStore(overrides: Partial<typeof defaultProfileUI> = {}) {
  return createStore(() => ({
    app: {
      user: {
        sessionUser: { profileUI: { ...defaultProfileUI, ...overrides } }
      }
    }
  }));
}

// The header toggle button has the exact accessible name 'settings.headings.privacy'.
// The save submit button's accessible name starts with 'buttons.save'.
const TOGGLE_BTN_NAME = 'settings.headings.privacy';
const SAVE_BTN_NAME = /buttons\.save/;

describe('<ProfilePrivacy />', () => {
  it('renders the privacy section heading', () => {
    render(
      <Provider store={makeStore()}>
        <ProfilePrivacy />
      </Provider>
    );
    expect(screen.getByText('settings.headings.privacy')).toBeInTheDocument();
  });

  it('starts collapsed (aria-expanded=false) when isLocked is false', () => {
    render(
      <Provider store={makeStore({ isLocked: false })}>
        <ProfilePrivacy />
      </Provider>
    );
    const button = screen.getByRole('button', { name: TOGGLE_BTN_NAME });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('starts expanded (aria-expanded=true) when isLocked is true', () => {
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    const button = screen.getByRole('button', { name: TOGGLE_BTN_NAME });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles expanded state when the header button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    const button = screen.getByRole('button', { name: TOGGLE_BTN_NAME });
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('shows the privacy form controls when expanded', () => {
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    // Expanded (isLocked=true), so the privacy group div is visible
    expect(
      screen.getByRole('group', { name: 'settings.headings.privacy' })
    ).toBeInTheDocument();
  });

  it('hides the privacy form controls when collapsed', () => {
    render(
      <Provider store={makeStore({ isLocked: false })}>
        <ProfilePrivacy />
      </Provider>
    );
    // Collapsed (isLocked=false), so the form group is not visible
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
  });

  it('save button is aria-disabled when no changes have been made', () => {
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    // Already expanded (isLocked=true)
    const saveButton = screen.getByRole('button', { name: SAVE_BTN_NAME });
    expect(saveButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('save button is not aria-disabled after a privacy toggle is changed', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    // Already expanded (isLocked=true)
    const saveButton = screen.getByRole('button', { name: SAVE_BTN_NAME });
    expect(saveButton).toHaveAttribute('aria-disabled', 'true');

    // Click the second radio in the first toggle group (public option for isLocked)
    const radios = screen.getAllByRole('radio');
    await user.click(radios[1]);

    expect(saveButton).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('save button becomes aria-disabled again after saving', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={makeStore({ isLocked: true })}>
        <ProfilePrivacy />
      </Provider>
    );
    const saveButton = screen.getByRole('button', { name: SAVE_BTN_NAME });

    // Make a change
    const radios = screen.getAllByRole('radio');
    await user.click(radios[1]);
    expect(saveButton).not.toHaveAttribute('aria-disabled', 'true');

    // Submit the form
    await user.click(saveButton);
    expect(saveButton).toHaveAttribute('aria-disabled', 'true');
  });
});
