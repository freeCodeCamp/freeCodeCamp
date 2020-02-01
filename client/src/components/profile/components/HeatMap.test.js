/* global expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import HeatMap from './HeatMap';

const props = {
  calendar: {
    1580393017: 1,
    1580397504: 1
  },
  streak: {
    current: 2,
    longest: 2
  }
};

describe('<HeatMap/>', () => {
  it('renders correctly', () => {
    const { container } = render(<HeatMap {...props} />);

    expect(container).toMatchSnapshot();
  });
});
