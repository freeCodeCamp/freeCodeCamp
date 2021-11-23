import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import IndexPage from '../../pages';

jest.mock('../../analytics');

describe('<Landing />', () => {
  it('renders when visiting index page and logged out', () => {
    const utils = ShallowRenderer.createRenderer();
    utils.render(<IndexPage />);
    const type = utils.getRenderOutput().type as React.FunctionComponent;
    expect(type.displayName === 'Landing').toBeTruthy();
  });
});
