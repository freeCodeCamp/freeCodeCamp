import { render, cleanup, screen } from '@testing-library/react';
import React from 'react';

import Loader from './loader';

describe('<Loader />', () => {
  afterEach(cleanup);

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

  it('matches to the default render snapshot', () => {
    render(<Loader />);
    const fccLoader = screen.getByTestId('fcc-loader');
    expect(fccLoader).toMatchSnapshot();
  });

  it('matches the fullScreen render snapshot', () => {
    render(<Loader fullScreen={true} />);
    const fccLoader = screen.getByTestId('fcc-loader');
    expect(fccLoader).toMatchSnapshot();
  });
});
