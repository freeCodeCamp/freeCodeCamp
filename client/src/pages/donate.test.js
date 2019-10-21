/* global jest, expect */
import React from 'react';
import 'jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { apiLocation } from '../../config/env.json';

import { DonatePage } from './donate';

describe('<DonatePage />', () => {
  it('redirects to signin page when user not logged in', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<DonatePage {...loggedOutProps} />);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(
      `${apiLocation}/signin?returnTo=donate`
    );
    const result = shallow.getRenderOutput();
    expect(result.type.displayName).toBe('Loader');
  });
});

const navigate = jest.fn();
const loggedOutProps = {
  createFlashMessage: () => {},
  isSignedIn: false,
  showLoading: false,
  navigate: navigate
};
