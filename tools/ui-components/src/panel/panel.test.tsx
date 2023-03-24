import React from 'react';
import { render, screen } from '@testing-library/react';

import { Panel } from '.';

describe('<Panel />', () => {
  it('PanelHead should inherit bsStyle', () => {
    render(
      <Panel role='article' bsStyle='primary'>
        <Panel.Heading>Test</Panel.Heading>
      </Panel>
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByText('Test')).toHaveClass(
      'border-b-1 border-solid border-foreground-primary text-foreground-primary'
    );
  });
});
