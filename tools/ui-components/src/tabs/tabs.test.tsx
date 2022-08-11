import React from 'react';
import { render } from '@testing-library/react';

import { Tabs } from '.';

describe('<Tabs />', () => {
  it('should render correctly', () => {
    render(
      <Tabs id={'uncontrolled-tab-example'} defaultActiveKey={'Code'}></Tabs>
    );
    // TODO: add test
  });
});
