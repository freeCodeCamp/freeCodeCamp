import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../../redux/create-store';
import TwoButtonCTA from './two-button-cta';

describe('TwoButtonCTA', () => {
  test('renders Google and More ways CTAs', () => {
    const store = createStore({ app: { user: { isSignedIn: false } } });
    render(
      <Provider store={store}>
        <TwoButtonCTA />
      </Provider>
    );

    expect(screen.getByTestId('landing-google-cta')).toBeInTheDocument();
    expect(screen.getByTestId('landing-more-ways-cta')).toBeInTheDocument();
  });

  test('links go to API when signed out', () => {
    const store = createStore({ app: { user: { isSignedIn: false } } });
    render(
      <Provider store={store}>
        <TwoButtonCTA />
      </Provider>
    );

    const google = screen.getByTestId('landing-google-cta');
    const moreWays = screen.getByTestId('landing-more-ways-cta');
    expect(google).toHaveAttribute(
      'href',
      expect.stringMatching(/\/signin\/google$/)
    );
    expect(moreWays).toHaveAttribute(
      'href',
      expect.stringMatching(/\/signin$/)
    );
  });

  test('links go to learn when signed in', () => {
    const store = createStore({ app: { user: { isSignedIn: true } } });
    render(
      <Provider store={store}>
        <TwoButtonCTA />
      </Provider>
    );

    const google = screen.getByTestId('landing-google-cta');
    const moreWays = screen.getByTestId('landing-more-ways-cta');
    expect(google).toHaveAttribute('href', expect.stringMatching(/\/learn$/));
    expect(moreWays).toHaveAttribute('href', expect.stringMatching(/\/learn$/));
  });
});
