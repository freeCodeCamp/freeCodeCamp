import React from 'react';
import Helmet from 'react-helmet';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ShowUnsubscribed from './show-unsubscribed';

describe('<ShowUnsubscribed />', () => {
  it('renders the unsubscribed content without a resubscribe link', () => {
    render(<ShowUnsubscribed />);

    const title = Helmet.peek().title;
    expect(Array.isArray(title) ? title.join('') : title).toBe(
      'metaTags:youre-unsubscribed | freeCodeCamp.org'
    );
    expect(
      screen.getByRole('heading', { name: 'misc.unsubscribed' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.keep-coding')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'buttons.resubscribe' })
    ).not.toBeInTheDocument();
  });

  it('renders a resubscribe link for an unsubscribe id', () => {
    const unsubscribeId = 'tBX8stC5jiustPBteF2mV';

    render(<ShowUnsubscribed unsubscribeId={unsubscribeId} />);

    expect(
      screen.getByRole('link', { name: 'buttons.resubscribe' })
    ).toHaveAttribute(
      'href',
      `http://localhost:3000/resubscribe/${unsubscribeId}`
    );
  });
});
