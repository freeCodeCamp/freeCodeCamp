/* global jest, expect */
import React from 'react';
import 'jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { apiLocation } from '../../config/env.json';

import { DonatePage } from './donate';

describe('<DonatePage />', () => {
  it('renders to the DOM when user is logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<DonatePage {...loggedInProps} />);
    expect(navigate).toHaveBeenCalledTimes(0);
    const result = shallow.getRenderOutput();
    expect(result.type.toString()).toBe('Symbol(react.fragment)');
    // Renders Helmet component rather than Loader
    expect(result.props.children[0].props.title).toEqual(
      'Support our nonprofit | freeCodeCamp.org'
    );
  });

  it('redirects to sign in page when user is not logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<DonatePage {...loggedOutProps} />);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(
      `${apiLocation}/signin?returnTo=donate`
    );
    const result = shallow.getRenderOutput();
    // Renders Loader rather than DonatePage
    expect(result.type.displayName).toBe('Loader');
  });
});

const navigate = jest.fn();
const loggedInProps = {
  createFlashMessage: () => {},
  isSignedIn: true,
  showLoading: false,
  navigate: navigate
};
const loggedOutProps = { ...loggedInProps };
loggedOutProps.isSignedIn = false;
