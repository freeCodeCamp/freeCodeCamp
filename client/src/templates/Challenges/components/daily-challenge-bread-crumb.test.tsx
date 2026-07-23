import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import DailyChallengeBreadCrumb from './daily-challenge-bread-crumb';

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

describe('<DailyChallengeBreadCrumb />', () => {
  it('renders nothing when there is no param', () => {
    const { container } = render(<DailyChallengeBreadCrumb />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing for an invalid param', () => {
    const { container } = render(
      <DailyChallengeBreadCrumb dailyChallengeParam='not-a-date' />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing for a shape-valid but semantically invalid month-day', () => {
    const { container } = render(
      <DailyChallengeBreadCrumb dailyChallengeParam='13-45' />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('shows only the month and day for a full "yyyy-MM-dd" date, with no year', () => {
    render(<DailyChallengeBreadCrumb dailyChallengeParam='2026-07-15' />);

    expect(
      screen.getByRole('navigation', { name: 'aria.breadcrumb-nav' })
    ).toBeInTheDocument();
    expect(screen.getByText('July 15')).toBeInTheDocument();
    expect(screen.queryByText('2026')).not.toBeInTheDocument();
  });

  it('shows only the month and day for a year-agnostic "MM-DD" param', () => {
    render(<DailyChallengeBreadCrumb dailyChallengeParam='07-15' />);

    expect(screen.getByText('July 15')).toBeInTheDocument();
  });
});
