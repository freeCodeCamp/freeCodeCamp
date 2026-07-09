import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import ChallengeTitle from './challenge-title';

vi.mock('i18next', () => ({
  default: {
    t: (key: string) =>
      ({
        'links:help-translate-link-url': 'https://example.com/help-translate',
        'misc.translation-pending': 'Help us translate'
      })[key] ?? key
  }
}));

const baseProps = {
  children: 'What Role Does HTML Play on the Web?',
  isCompleted: false,
  translationPending: false
};

describe('<ChallengeTitle/>', () => {
  it('renders the challenge title without a completion icon', () => {
    render(<ChallengeTitle {...baseProps} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'What Role Does HTML Play on the Web?'
      })
    ).toBeInTheDocument();
    expect(screen.queryByTestId('green-pass')).not.toBeInTheDocument();
  });

  it('renders the completion icon when the challenge is completed', () => {
    render(<ChallengeTitle {...baseProps} isCompleted={true} />);

    expect(screen.getByTestId('green-pass')).toBeInTheDocument();
  });

  it('renders the translation link when translation is pending', () => {
    render(<ChallengeTitle {...baseProps} translationPending={true} />);

    expect(
      screen.getByRole('link', { name: 'Help us translate' })
    ).toHaveAttribute('href', 'https://example.com/help-translate');
  });

  it('does not render the translation link when translation is not pending', () => {
    render(<ChallengeTitle {...baseProps} />);

    expect(
      screen.queryByRole('link', { name: 'Help us translate' })
    ).not.toBeInTheDocument();
  });
});
