import { render, screen } from '@testing-library/react';
import React from 'react';

import HeatMap from './heat-map';

// offset is used to shift the dates so that the calendar renders (for testing
// purposes only) the same way in each timezone.
const offset = new Date().getTimezoneOffset() * 60;
const date1 = 1580497504 + offset;
const date2 = 1580597504 + offset;
const date3 = 1580729769 + offset;

const props: { calendar: { [key: number]: number } } = {
  calendar: {}
};

props.calendar[date1] = 1;
props.calendar[date2] = 1;
props.calendar[date3] = 1;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let dateNowMockFn: jest.MockInstance<any, unknown[]>;

beforeEach(() => {
  dateNowMockFn = jest
    .spyOn(Date, 'now')
    .mockImplementation(() => 1580729769714 + offset * 1000);
});

afterEach(() => {
  dateNowMockFn.mockRestore();
});

describe('<HeatMap/>', () => {
  // Removing the snapshot matching, because they are different everytime
  /*
  it('renders correctly', () => {
    const { container } = render(<HeatMap {...props} />);
    expect(container).toMatchSnapshot();
  });
  */

  it('calculates the correct longest streak', () => {
    render(<HeatMap {...props} />);
    expect(screen.getByTestId('longest-streak')).toHaveTextContent(
      'profile.longest-streak'
    );
  });

  it('calculates the correct current streak', () => {
    render(<HeatMap {...props} />);
    expect(screen.getByTestId('current-streak')).toHaveTextContent(
      'profile.current-streak'
    );
  });
});
