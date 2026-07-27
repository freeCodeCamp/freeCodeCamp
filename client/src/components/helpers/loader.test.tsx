import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Loader from './loader';

describe('<Loader />', () => {
  it('renders to the DOM', () => {
    const { container } = render(<Loader />);
    expect(container).toBeTruthy();
  });

  it('adds the correct class when given a fullScreen prop', () => {
    render(<Loader fullScreen={true} />);
    const fccLoader = screen.getByTestId('fcc-loader');
    expect(fccLoader).toHaveClass('full-screen-wrapper');
  });

  /**
   * As we only wrap another library Component,
   * there is nothing much to test except snapshots
   */

  it('shows spinner in default state', () => {
    render(<Loader />);
    const fccLoader = screen.getByTestId('fcc-loader');
    expect(fccLoader).not.toHaveClass('full-screen-wrapper');
    expect(screen.getByText('Spinner')).toBeInTheDocument();
  });

  it('shows spinner in fullScreen state', () => {
    render(<Loader fullScreen={true} />);
    const fccLoader = screen.getByTestId('fcc-loader');
    expect(fccLoader).toHaveClass('full-screen-wrapper');
    expect(screen.getByText('Spinner')).toBeInTheDocument();
  });
});
