import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ChallengeDescription from './challenge-description';

describe('<ChallengeDescription />', () => {
  test('renders description links with their attributes', () => {
    render(
      <ChallengeDescription
        block='write-your-first-code-using-c-sharp'
        challengeId='647f85d407d29547b3bee1bb'
        description='View <a href="https://learn.microsoft.com/users/me/achievements#trophies-section" target="_blank" rel="noreferrer">your achievements page</a>.'
      />
    );

    expect(screen.getByText(/View/)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'your achievements page' })
    ).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/users/me/achievements#trophies-section'
    );
    expect(
      screen.getByRole('link', { name: 'your achievements page' })
    ).toHaveAttribute('target', '_blank');
    expect(
      screen.getByRole('link', { name: 'your achievements page' })
    ).toHaveAttribute('rel', 'noreferrer');
  });
});
