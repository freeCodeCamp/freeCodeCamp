import React from 'react';
import { render } from '@testing-library/react';

import { TabPane } from '.';

describe('<TabPane />', () => {
  it('should render correctly', () => {
    render(<TabPane eventKey='test'></TabPane>);
  });
});
