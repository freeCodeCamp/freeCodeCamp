import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createStore } from '../../redux/create-store';

import Intro from '.';

jest.mock('../../analytics');

function rendererCreateWithRedux(ui: JSX.Element) {
  return renderer.create(<Provider store={createStore()}>{ui}</Provider>);
}

describe('<Intro />', () => {
  it('has no blockquotes when loggedOut', () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedOutProps} />
    ).root;

    expect(container.findAllByType('blockquote').length === 0).toBeTruthy();

    expect(container.findAllByType('h1').length === 1).toBeTruthy();
  });

  it('has a blockquote when loggedIn', () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedInProps} />
    ).root;

    expect(container.findAllByType('blockquote').length === 1).toBeTruthy();

    expect(container.findAllByType('h1').length === 1).toBeTruthy();
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
