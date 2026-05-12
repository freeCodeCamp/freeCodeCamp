import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ChallengeTitle from './challenge-title';

const baseProps = {
  children: 'title text',
  isCompleted: true,
  translationPending: false
};

describe('<ChallengeTitle/>', () => {
  it('renders heading and completion icon', () => {
    render(<ChallengeTitle {...baseProps} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'title text' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('green-pass')).toBeInTheDocument();
  });
});
