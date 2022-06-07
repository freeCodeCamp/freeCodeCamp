import { render, screen } from '@testing-library/react';
import React from 'react';
import { HelpBlock } from './help-block';

describe('Render the helpblock component', () => {
  it('should render the helpblock component', () => {
    render(<HelpBlock />);
    expect(screen.getByTestId('help-block')).toBeInTheDocument();
    expect(screen.getByTestId('help-block')).toHaveClass(
      'block mt-1 mb-2 text-foreground-quaternary',
      { exact: true }
    );
  });
});
