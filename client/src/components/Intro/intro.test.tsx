import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { createStore } from '../../redux/create-store';

import Intro from '.';

jest.mock('../../analytics');

function renderWithRedux(ui: JSX.Element) {
  return render(<Provider store={createStore()}>{ui}</Provider>);
}

describe('<Intro />', () => {
  it('has no blockquotes when loggedOut', () => {
    renderWithRedux(<Intro {...loggedOutProps} />);
    expect(screen.queryByTestId('quote-block')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }));
  });

  it('has a blockquote when loggedIn', () => {
    renderWithRedux(<Intro {...loggedInProps} />);
    expect(screen.getByTestId('quote-block')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

const loggedInProps = {
  complete: true,
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
  isSignedIn: false,
  name: '',
  navigate: () => jest.fn(),
  pending: false,
  slug: '/',
  username: '',
  isDonating: false,
  onLearnDonationAlertClick: () => jest.fn()
};
