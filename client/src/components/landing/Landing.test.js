import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import IndexPage from '../../pages';
import mockChallengeNodes from '../../__mocks__/challenge-nodes';

jest.mock('../../analytics');

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    const shallow = new ShallowRenderer();
    shallow.render(<IndexPage {...loggedOutProps} />);
    const view = shallow.getRenderOutput();
    expect(view.type.displayName === 'Landing').toBeTruthy();
  });
});

const loggedOutProps = {
  data: { allChallengeNode: { edges: mockChallengeNodes } },
  fetchState: {
    complete: true,
    error: null,
    errored: false,
    pending: false
  },
  isSignedIn: false,
  user: {}
};
