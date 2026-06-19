/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import DailyCodingChallengeAll from './[...]';

const navigateMock = vi.hoisted(() => vi.fn());

vi.mock('gatsby', () => ({
  navigate: navigateMock,
  withPrefix: (path: string) => path
}));

vi.mock('../../../client-only-routes/show-daily-coding-challenge', () => ({
  default: ({ date }: { date: string }) => (
    <div data-testid='challenge'>{date}</div>
  )
}));

vi.mock('../../../components/redirect-daily-challenge-archive', () => ({
  default: () => <div data-testid='archive-redirect' />
}));

describe('DailyCodingChallengeAll', () => {
  afterEach(() => {
    navigateMock.mockClear();
  });

  it('redirects to the archive for an invalid param', () => {
    render(<DailyCodingChallengeAll params={{ '*': 'not-a-date' }} />);

    expect(screen.getByTestId('archive-redirect')).toBeInTheDocument();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it('redirects a full "yyyy-MM-dd" date to its year-agnostic "MM-DD" form', () => {
    render(<DailyCodingChallengeAll params={{ '*': '2027-07-01' }} />);

    expect(navigateMock).toHaveBeenCalledWith(
      '/learn/daily-coding-challenge/07-01',
      { replace: true }
    );
    expect(screen.queryByTestId('challenge')).not.toBeInTheDocument();
  });

  it('renders the challenge directly for an already year-agnostic "MM-DD" param', () => {
    render(<DailyCodingChallengeAll params={{ '*': '07-01' }} />);

    expect(navigateMock).not.toHaveBeenCalled();
    expect(screen.getByTestId('challenge')).toHaveTextContent('07-01');
  });
});
