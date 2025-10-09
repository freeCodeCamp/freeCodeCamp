import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import { createStore } from '../../../redux/create-store';
import TwoButtonCTA from './two-button-cta';

vi.mock('../../../utils/get-words');

const renderWithStore = ({ isSignedIn }: { isSignedIn: boolean }) => {
  const preloadedState = {
    app: {
      user: {
        sessionUser: isSignedIn ? { id: 'user-id', username: 'fcc-user' } : null
      }
    }
  };

  const store = createStore(preloadedState);

  render(
    <Provider store={store}>
      <TwoButtonCTA />
    </Provider>
  );

  const googleCta = screen.getByRole('link', {
    name: 'buttons.sign-in-with-google'
  });
  const moreWaysCta = screen.getByRole('link', {
    name: 'buttons.more-ways-to-sign-in'
  });

  return { googleCta, moreWaysCta };
};

describe('Stacked landing CTA', () => {
  test('renders Google and More ways CTAs', () => {
    const { googleCta, moreWaysCta } = renderWithStore({ isSignedIn: false });

    expect(googleCta).toBeInTheDocument();
    expect(moreWaysCta).toBeInTheDocument();
  });

  test('links go to API when signed out', () => {
    const { googleCta, moreWaysCta } = renderWithStore({ isSignedIn: false });

    expect(googleCta).toHaveAttribute(
      'href',
      expect.stringMatching(/\/signin\/google$/)
    );
    expect(moreWaysCta).toHaveAttribute(
      'href',
      expect.stringMatching(/\/signin$/)
    );
  });

  test('links go to learn when signed in', () => {
    const { googleCta, moreWaysCta } = renderWithStore({ isSignedIn: true });

    expect(googleCta).toHaveAttribute(
      'href',
      expect.stringMatching(/\/learn$/)
    );
    expect(moreWaysCta).toHaveAttribute(
      'href',
      expect.stringMatching(/\/learn$/)
    );
  });
});
