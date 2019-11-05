/* global jest, expect */
import React from 'react';
import 'jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { apiLocation } from '../../config/env.json';

import { ShowSettings } from './ShowSettings';

describe('<ShowSettings />', () => {
  it('renders to the DOM when user is logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ShowSettings {...loggedInProps} />);
    expect(navigate).toHaveBeenCalledTimes(0);
    const result = shallow.getRenderOutput();
    expect(result.type.toString()).toBe('Symbol(react.fragment)');
    // Renders Helmet component rather than Loader
    expect(result.props.children[0].props.title).toEqual(
      'Settings | freeCodeCamp.org'
    );
  });

  it('redirects to sign in page when user is not logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ShowSettings {...loggedOutProps} />);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(
      `${apiLocation}/signin?returnTo=settings`
    );
    const result = shallow.getRenderOutput();
    // Renders Loader rather than ShowSettings
    expect(result.type.displayName).toBe('Loader');
  });
});

const navigate = jest.fn();
const loggedInProps = {
  createFlashMessage: jest.fn(),
  hardGoTo: jest.fn(),
  isSignedIn: true,
  navigate: navigate,
  showLoading: false,
  submitNewAbout: jest.fn(),
  toggleNightMode: jest.fn(),
  updateInternetSettings: jest.fn(),
  updateIsHonest: jest.fn(),
  updatePortfolio: jest.fn(),
  updateQuincyEmail: jest.fn(),
  user: {
    about: '',
    completedChallenges: []
  },
  verifyCert: jest.fn()
};
const loggedOutProps = { ...loggedInProps };
loggedOutProps.isSignedIn = false;
