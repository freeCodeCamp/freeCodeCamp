import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import IndexPage from '../../pages';

jest.mock('../../analytics');

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    const utils = createRenderer();
    // @ts-expect-error Type definition mismatch
    utils.render(<IndexPage {...loggedOutProps} />);
    const view = utils.getRenderOutput();
    // @ts-expect-error Type definition mismatch
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
