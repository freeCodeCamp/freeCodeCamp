import React from 'react';
import { render, screen } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import DailyCodingChallengeWidget from './widget';

describe('<DailyCodingChallengeWidget />', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-07-15T12:00:00.000Z'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('renders only the today challenge link on the landing page', () => {
    render(<DailyCodingChallengeWidget forLanding={true} />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'daily-coding-challenges.map-title'
      })
    ).toHaveClass('big-heading');

    expect(
      screen.getByRole('link', { name: 'buttons.go-to-dcc-today' })
    ).toHaveAttribute('href', '/learn/daily-coding-challenge/07-15');

    expect(
      screen.queryByRole('link', { name: 'buttons.go-to-dcc-archive' })
    ).not.toBeInTheDocument();
  });

  it('renders both today and archive links on the curriculum map', () => {
    render(<DailyCodingChallengeWidget forLanding={false} />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'daily-coding-challenges.map-title'
      })
    ).not.toHaveClass('big-heading');

    expect(
      screen.getByRole('link', { name: 'buttons.go-to-dcc-today' })
    ).toHaveAttribute('href', '/learn/daily-coding-challenge/07-15');

    expect(
      screen.getByRole('link', { name: 'buttons.go-to-dcc-archive' })
    ).toHaveAttribute('href', '/learn/daily-coding-challenge/archive');
  });
});
