import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';

import type { User } from '../../../redux/prop-types';
import Internet from './internet';

const baseUser = {
  githubProfile: '',
  linkedin: '',
  twitter: '',
  bluesky: '',
  website: ''
} as User;

const socialFields = [
  {
    label: 'GitHub',
    url: 'https://github.com/certified-user',
    checkTestId: 'internet-github-check'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/certified-user',
    checkTestId: 'internet-linkedin-check'
  },
  {
    label: 'X',
    url: 'https://x.com/certified-user',
    checkTestId: 'internet-twitter-check'
  },
  {
    label: 'Bluesky',
    url: 'https://bsky.app/profile/certified-user.bsky.social',
    checkTestId: 'internet-bluesky-check'
  },
  {
    label: 'settings.labels.personal',
    url: 'https://certified-user.com',
    checkTestId: 'internet-website-check'
  }
];

function makeStore() {
  return configureStore({
    reducer: (state: Record<string, never> = {}) => state
  });
}

function renderInternet(userOverrides: Partial<User> = {}) {
  const store = makeStore();

  return render(
    <Provider store={store}>
      <Internet
        setIsEditing={vi.fn()}
        user={{ ...baseUser, ...userOverrides }}
      />
    </Provider>
  );
}

function queryCheckmark(container: HTMLElement, testId: string) {
  return container.querySelector(`[data-playwright-test-label="${testId}"]`);
}

describe('<Internet />', () => {
  it('renders the internet presence form with a disabled save button', () => {
    const { container } = renderInternet();

    expect(
      screen.getByRole('heading', { name: 'settings.headings.internet' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('group', { name: 'settings.headings.internet' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /buttons\.save/ })
    ).toHaveAttribute('aria-disabled', 'true');

    socialFields.forEach(({ checkTestId }) => {
      expect(queryCheckmark(container, checkTestId)).not.toBeInTheDocument();
    });
  });

  it('shows a checkmark for each valid social URL', async () => {
    const user = userEvent.setup();
    const { container } = renderInternet();

    for (const { label, url, checkTestId } of socialFields) {
      await user.type(screen.getByRole('textbox', { name: label }), url);

      expect(queryCheckmark(container, checkTestId)).toBeInTheDocument();
    }

    expect(
      screen.getByRole('button', { name: /buttons\.save/ })
    ).not.toHaveAttribute('aria-disabled', 'true');
  });
});
