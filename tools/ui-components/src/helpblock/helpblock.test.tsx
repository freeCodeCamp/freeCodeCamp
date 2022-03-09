import { render, screen } from '@testing-library/react';
import React from 'react';
import { HelpBlock } from './helpblock';

describe('Render the helpblock component', () => {
  it('should render the helpblock component', () => {
    render(<HelpBlock />);
    expect(screen.getByTestId('help-block')).toBeInTheDocument();
    expect(screen.getByTestId('help-block')).toHaveClass(
      'block mt-5 mb-10 text-default-foreground-quaternary',
      { exact: true }
    );
  });
});
