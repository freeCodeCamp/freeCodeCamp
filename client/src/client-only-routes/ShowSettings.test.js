/* global jest, expect */
import React from 'react';
import 'jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { apiLocation } from '../../config/env.json';

import { ShowSettings } from './ShowSettings';

describe('<ShowSettings />', () => {
  it('redirects to signin page when user not logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ShowSettings {...loggedOutProps} />);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(`${apiLocation}/signin`);
    expect(true).toBeTruthy();
  });
});

const navigate = jest.fn();
const loggedOutProps = {
  createFlashMessage: jest.fn(),
  hardGoTo: jest.fn(),
  isSignedIn: false,
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
