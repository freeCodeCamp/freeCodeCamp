import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Link from './link';

describe('<Link />', () => {
  it('renders to the DOM', () => {
    render(<Link to='/home' />);
    expect(screen.getByRole('link')).toBeTruthy();
  });

  it('sets target for external links', () => {
    render(<Link external={true} to='/home' />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('does not specify target in gatsbyLink', () => {
    render(<Link to='/home' />);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });
});
