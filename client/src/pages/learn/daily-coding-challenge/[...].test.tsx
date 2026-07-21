/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import DailyCodingChallengeAll from './[...]';

vi.mock('gatsby', () => ({
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
  const replaceStateSpy = vi.spyOn(window.history, 'replaceState');

  afterEach(() => {
    replaceStateSpy.mockClear();
  });

  it('redirects to the archive for an invalid param', () => {
    render(<DailyCodingChallengeAll params={{ '*': 'not-a-date' }} />);

    expect(screen.getByTestId('archive-redirect')).toBeInTheDocument();
    expect(replaceStateSpy).not.toHaveBeenCalled();
  });

  it('swaps a full "yyyy-MM-dd" date to its year-agnostic "MM-DD" form in the address bar', () => {
    render(<DailyCodingChallengeAll params={{ '*': '2027-07-01' }} />);

    expect(replaceStateSpy).toHaveBeenCalledWith(
      null,
      '',
      '/learn/daily-coding-challenge/07-01'
    );
    expect(screen.getByTestId('challenge')).toHaveTextContent('07-01');
  });

  it('renders the challenge directly for an already year-agnostic "MM-DD" param', () => {
    render(<DailyCodingChallengeAll params={{ '*': '07-01' }} />);

    expect(replaceStateSpy).not.toHaveBeenCalled();
    expect(screen.getByTestId('challenge')).toHaveTextContent('07-01');
  });
});
