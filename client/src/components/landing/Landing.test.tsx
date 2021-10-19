import React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import mockChallengeNodes from '../../__mocks__/challenge-nodes';
import IndexPage from '../../pages';

jest.mock('../../analytics');

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const shallow = ShallowRenderer.createRenderer();
    // @ts-expect-error Type definition mismatch
    shallow.render(<IndexPage {...loggedOutProps} />);
    const view = shallow.getRenderOutput();
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