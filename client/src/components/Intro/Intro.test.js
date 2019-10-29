/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';

import 'jest-dom/extend-expect';

import Intro from './';

describe('<Intro />', () => {
  it('has no blockquotes when loggedOut', () => {
    const container = renderer.create(<Intro {...loggedOutProps} />).root;
    expect(container.findAllByType('blockquote').length === 0).toBeTruthy();
    expect(container.findAllByType('h1').length === 1).toBeTruthy();
  });

  it('has a blockquote when loggedIn', () => {
    const container = renderer.create(<Intro {...loggedInProps} />).root;
    expect(container.findAllByType('blockquote').length === 1).toBeTruthy();
    expect(container.findAllByType('h1').length === 1).toBeTruthy();
  });
});

const loggedInProps = {
  complete: true,
  isSignedIn: true,
  name: 'Developement User',
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
