import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tabs } from '.';

describe('<Tabs />', () => {
  it('should render tabs component correctly', () => {
    render(
      <Tabs id={'uncontrolled-tab-example'} defaultActiveKey={'Test'}></Tabs>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
