import React from 'react';
import { render, screen } from '@testing-library/react';
import Helmet from 'react-helmet';
import { describe, expect, test } from 'vitest';

import BlockedPage from './blocked';

describe('BlockedPage', () => {
  test('renders the access denied page', () => {
    render(<BlockedPage />);

    expect(Helmet.peek().title).toBe('Access Denied | freeCodeCamp.org');
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
