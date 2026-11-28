import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import DailyCodingChallengeCalendarDay from './calendar-day';

describe('<DailyCodingChallengeCalendarDay />', () => {
  it('renders a disabled button with not-available label when unavailable', () => {
    render(
      <DailyCodingChallengeCalendarDay
        dayNumber={15}
        date='2026-07-15'
        isAvailable={false}
      />
    );

    const button = screen.getByRole('button', {
      name: 'July 15, (aria.not-available)'
    });
    expect(button).toBeDisabled();
    expect(screen.getByText('15')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders an available uncompleted day link with full accessible context', () => {
    const longTitle =
      'A Very Long Daily Coding Challenge Title Exceeding Limit';

    render(
      <DailyCodingChallengeCalendarDay
        dayNumber={11}
        date='2026-08-11'
        challengeNumber={42}
        title={longTitle}
        isAvailable={true}
        completedLanguages={[]}
      />
    );

    const link = screen.getByRole('link', { name: /August 11/ });
    expect(link).toHaveAttribute('href', '/learn/daily-coding-challenge/08-11');
    expect(link).toHaveAccessibleName(/#42/);
    expect(link).toHaveAccessibleName(new RegExp(longTitle));
    expect(link).toHaveAccessibleName(/icons\.not-passed/);
    expect(screen.getByTestId('green-not-completed')).toBeInTheDocument();
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
    expect(screen.queryByText('Python')).not.toBeInTheDocument();
  });

  it('renders completed language indicators for finished daily challenges', () => {
    render(
      <DailyCodingChallengeCalendarDay
        dayNumber={11}
        date='2026-08-11'
        challengeNumber={1}
        title='Vowel Balance'
        isAvailable={true}
        completedLanguages={['javascript', 'python']}
      />
    );

    const link = screen.getByRole('link', { name: /August 11/ });
    expect(link).toHaveAccessibleName(/Vowel Balance/);
    expect(link).toHaveAccessibleName(/icons\.passed/);
    expect(link).toHaveAccessibleName(/JavaScript/);
    expect(link).toHaveAccessibleName(/Python/);
    expect(screen.getByTestId('green-pass')).toBeInTheDocument();
  });
});
