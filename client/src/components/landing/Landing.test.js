/* global expect */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { IndexPage } from '../../pages';

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<IndexPage {...loggedOutProps} />);
    const result = shallow.getRenderOutput();
    expect(result.type.displayName === 'Landing').toBeTruthy();
  });
});

const loggedOutProps = {
  fetchState: {
    complete: true,
    error: null,
    errored: false,
    pending: false
  },
  isSignedIn: false,
  user: {}
};
