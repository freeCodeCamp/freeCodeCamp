/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-dom/extend-expect';
import { IndexPage } from '../../pages';

import Welcome from './';

describe('<Welcome />', () => {
  it('renders when visiting index page and logged in', () => {
    const container = renderer
      .create(<IndexPage {...loggedInProps} />)
      .toTree();
    expect(container.rendered.type.displayName === 'Welcome').toBeTruthy();
  });

  it('has four links', () => {
    const container = renderer.create(<Welcome name={'developmentuser'} />)
      .root;
    expect(container.findAllByType('a').length === 4).toBeTruthy();
  });
});

const loggedInProps = {
  fetchState: {
    complete: true,
    error: null,
    errored: false,
    pending: false
  },
  isSignedIn: true,
  user: {
    acceptedPrivacyTerms: true,
    username: 'developmentuser'
  }
};
