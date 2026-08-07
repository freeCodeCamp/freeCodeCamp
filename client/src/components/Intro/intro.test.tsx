import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createStore } from '../../redux/create-store';

import Intro from '.';

vi.mock('../../analytics');
vi.mock('@growthbook/growthbook-react', () => ({
  useFeature: () => ({ on: false, value: undefined }),
  useFeatureIsOn: () => false
}));
vi.mock('../../utils/get-words');

function renderWithRedux(
  ui: JSX.Element,
  preloadedState: Record<string, unknown> = {}
) {
  return render(<Provider store={createStore(preloadedState)}>{ui}</Provider>);
}

describe('<Intro />', () => {
  it('has no blockquotes when loggedOut', () => {
    renderWithRedux(<Intro {...loggedOutProps} />);
    expect(screen.queryByTestId('quote-block')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('does not mount the email sign-up alert when logged out', () => {
    renderWithRedux(<Intro {...loggedOutProps} />);
    expect(screen.queryByText('misc.email-blast')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'buttons.yes-please' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'buttons.no-thanks' })
    ).not.toBeInTheDocument();
  });

  it('has a blockquote when loggedIn', () => {
    renderWithRedux(<Intro {...loggedInProps} />, signedInState);
    expect(screen.getByTestId('quote-block')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('links to the latest activity when one is available', () => {
    renderWithRedux(
      <Intro {...loggedInProps} resumeUrl='/learn/resume-this-challenge' />,
      signedInState
    );

    expect(
      screen.getByRole('link', { name: 'buttons.current-challenge' })
    ).toHaveAttribute('href', '/learn/resume-this-challenge');
  });

  it('does not show a resume link without an activity URL', () => {
    renderWithRedux(<Intro {...loggedInProps} />, signedInState);

    expect(
      screen.queryByRole('link', { name: 'buttons.current-challenge' })
    ).not.toBeInTheDocument();
  });
});

const signedInState = {
  app: {
    user: {
      sessionUser: {
        completedChallenges: [{}],
        sendQuincyEmail: null
      }
    }
  }
};

const loggedInProps = {
  complete: true,
  completedChallengeCount: 0,
  isSignedIn: true,
  name: 'Development User',
  navigate: () => vi.fn(),
  pending: false,
  slug: '/',
  username: 'DevelopmentUser',
  isDonating: false,
  onLearnDonationAlertClick: () => vi.fn()
};

const loggedOutProps = {
  complete: true,
  completedChallengeCount: 0,
  isSignedIn: false,
  name: '',
  navigate: () => vi.fn(),
  pending: false,
  slug: '/',
  username: '',
  isDonating: false,
  onLearnDonationAlertClick: () => vi.fn()
};
