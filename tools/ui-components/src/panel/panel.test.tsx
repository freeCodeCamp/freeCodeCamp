import React from 'react';
import { render, screen } from '@testing-library/react';

import { Panel } from '.';

describe('<Panel />', () => {
  it('PanelTitle should render', () => {
    render(<Panel.Title>Test Title</Panel.Title>);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });
  it('PanelHead should inherit bsStyle', () => {
    render(
      <Panel role='article' bsStyle='primary'>
        <Panel.Heading>Test</Panel.Heading>
        <Panel.Body>TestBody</Panel.Body>
      </Panel>
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByText('Test')).toHaveClass(
      'border-b-1 border-solid border-foreground-primary text-foreground-primary'
    );
    expect(screen.getByText('TestBody')).toBeInTheDocument();
  });
});
