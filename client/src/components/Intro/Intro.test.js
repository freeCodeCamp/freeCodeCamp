import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/createStore';

import Intro from './';

jest.mock('../../analytics');

function rendererCreateWithRedux(ui) {
  return renderer.create(<Provider store={createStore()}>{ui}</Provider>);
}

describe('<Intro />', () => {
  it('has no blockquotes when loggedOut', async () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedOutProps} />
    ).root;
    const blockquote = await container.findAllByType('blockquote');
    expect(blockquote.length === 0).toBeTruthy();
    const h1 = await container.findAllByType('h1');
    expect(h1.length === 1).toBeTruthy();
  });

  it('has a blockquote when loggedIn', async () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedInProps} />
    ).root;
    const blockquote = await container.findAllByType('blockquote');
    expect(blockquote.length === 1).toBeTruthy();
    const h1 = await container.findAllByType('h1');
    expect(h1.length === 1).toBeTruthy();
  });
});

const loggedInProps = {
  complete: true,
  isSignedIn: true,
  name: 'Development User',
  navigate: () => {},
  pending: false,
  slug: '/',
  username: 'DevelopmentUser'
};

const loggedOutProps = {
  complete: true,
  isSignedIn: false,
  name: '',
  navigate: () => {},
  pending: false,
  slug: '/',
  username: ''
};
