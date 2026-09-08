import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import EmailOptions from './email-options';

function renderEmailOptions(isSignedIn: boolean) {
  return render(
    <EmailOptions
      isSignedIn={isSignedIn}
      updateQuincyEmail={vi.fn()}
      isPage={true}
    />
  );
}

describe('<EmailOptions />', () => {
  it('renders the signed-out state with heading, copy, and sign-in button', () => {
    renderEmailOptions(false);

    expect(
      screen.getByRole('heading', { level: 1, name: 'misc.email-signup' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.email-blast')).toBeInTheDocument();
    expect(
      screen.getByText('misc.email-signup-not-signed-in')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'buttons.sign-in' })
    ).toHaveAttribute('href', 'http://localhost:3000/signin');
  });

  it('renders the signed-in state with heading, copy, and yes/no buttons', () => {
    renderEmailOptions(true);

    expect(
      screen.getByRole('heading', { level: 1, name: 'misc.email-signup' })
    ).toBeInTheDocument();
    expect(screen.getByText('misc.email-blast')).toBeInTheDocument();
    expect(screen.getByText('misc.quincy')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.yes-please' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.no-thanks' })
    ).toBeInTheDocument();
  });
});
