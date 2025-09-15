import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { createStore } from '../../redux/create-store';

import Intro from '.';

jest.mock('../../analytics');

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
    expect(screen.getByRole('heading', { level: 1 }));
  });

  it('has a blockquote when loggedIn', () => {
    // Provide a minimal preloaded state so connected components expecting a
    // sessionUser (e.g. EmailSignUpAlert) do not receive null.
    const preloadedState = {
      app: {
        user: {
          sessionUser: {
            completedChallenges: [{}],
            sendQuincyEmail: null
          }
        }
      }
    };
    renderWithRedux(<Intro {...loggedInProps} />, preloadedState);
    expect(screen.getByTestId('quote-block')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

const loggedInProps = {
  complete: true,
  completedChallengeCount: 0,
  isSignedIn: true,
  name: 'Development User',
  navigate: () => jest.fn(),
  pending: false,
  slug: '/',
  username: 'DevelopmentUser',
  isDonating: false,
  onLearnDonationAlertClick: () => jest.fn()
};

const loggedOutProps = {
  complete: true,
  completedChallengeCount: 0,
  isSignedIn: false,
  name: '',
  navigate: () => jest.fn(),
  pending: false,
  slug: '/',
  username: '',
  isDonating: false,
  onLearnDonationAlertClick: () => jest.fn()
};
