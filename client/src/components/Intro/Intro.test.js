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
  it('has no blockquotes when loggedOut', () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedOutProps} />
    ).root;

    /**
     * This rules had to be disabled because the new lint rules are throwing false positives here.
     * They were interpreting react-test-renderer functions as @testing-library/react functions.
     */
    // eslint-disable-next-line testing-library/await-async-query
    expect(container.findAllByType('blockquote').length === 0).toBeTruthy();

    /**
     * This rules had to be disabled because the new lint rules are throwing false positives here.
     * They were interpreting react-test-renderer functions as @testing-library/react functions.
     */
    // eslint-disable-next-line testing-library/await-async-query
    expect(container.findAllByType('h1').length === 1).toBeTruthy();
  });

  it('has a blockquote when loggedIn', () => {
    const container = rendererCreateWithRedux(
      <Intro {...loggedInProps} />
    ).root;

    /**
     * This rules had to be disabled because the new lint rules are throwing false positives here.
     * They were interpreting react-test-renderer functions as @testing-library/react functions.
     */
    // eslint-disable-next-line testing-library/await-async-query
    expect(container.findAllByType('blockquote').length === 1).toBeTruthy();

    /**
     * This rules had to be disabled because the new lint rules are throwing false positives here.
     * They were interpreting react-test-renderer functions as @testing-library/react functions.
     */
    // eslint-disable-next-line testing-library/await-async-query
    expect(container.findAllByType('h1').length === 1).toBeTruthy();
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
