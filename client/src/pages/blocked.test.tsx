import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import BlockedPage, { Head } from './blocked';

vi.mock('../components/page-head', () => ({
  default: ({ title }: { title: string }) => <title>{title}</title>
}));

describe('BlockedPage', () => {
  test('exports the access denied page title', () => {
    render(<Head />);
    expect(
      screen.getByText('Access Denied | freeCodeCamp.org')
    ).toBeInTheDocument();
  });

  test('renders the access denied page', () => {
    render(<BlockedPage />);

    expect(
      screen.getByRole('heading', { name: "We can't log you in." })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /United States export control and economic sanctions rules/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The situation may change in the future\./)
    ).toBeInTheDocument();

    const learnMoreLink = screen.getByRole('link', {
      name: 'learn more about these restrictions'
    });
    expect(learnMoreLink).toHaveAttribute(
      'href',
      'https://www.okta.com/blocked'
    );
  });
});
