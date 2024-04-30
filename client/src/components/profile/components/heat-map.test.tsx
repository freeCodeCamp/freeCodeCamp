import { render, screen } from '@testing-library/react';
import React from 'react';

import envData from '../../../../config/env.json';
import { getLangCode } from '../../../../../shared/config/i18n';
import HeatMap from './heat-map';

const { clientLocale } = envData;
const localeCode = getLangCode(clientLocale);

// offset is used to shift the dates so that the calendar renders (for testing
// purposes only) the same way in each timezone.
const offset = new Date().getTimezoneOffset() * 60;
const date1 = 1580497504 + offset;
const date2 = 1580597504 + offset;
const date3 = 1580729769 + offset;
const now = 1580729769714 + offset * 1000; // 2020-02-03T04:36:09.714Z

const props: { calendar: { [key: number]: number } } = {
  calendar: {}
};

props.calendar[date1] = 1;
props.calendar[date2] = 1;
props.calendar[date3] = 1;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let dateNowMockFn: jest.MockInstance<any, unknown[]>;

beforeEach(() => {
  dateNowMockFn = jest.spyOn(Date, 'now').mockImplementation(() => now);
});

afterEach(() => {
  dateNowMockFn.mockRestore();
});

describe('<HeatMap/>', () => {
  // Removing the snapshot matching, because they are different every time
  /*
  it('renders correctly', () => {
    const { container } = render(<HeatMap {...props} />);
    expect(container).toMatchSnapshot();
  });
  */

  it('displays the correct title', () => {
    render(<HeatMap {...props} />);

    const endDate = new Date(now);
    const startDate = new Date('2019-08-04T04:36:09.714Z'); // subtract 6 months and add 1 day from endDate
    const endOfCalendar = endDate.toLocaleDateString([localeCode, 'en-US'], {
      year: 'numeric',
      month: 'short'
    });
    const startOfCalendar = startDate.toLocaleDateString(
      [localeCode, 'en-US'],
      {
        year: 'numeric',
        month: 'short'
      }
    );

    expect(
      screen.getByText(`${startOfCalendar} - ${endOfCalendar}`)
    ).toBeInTheDocument();
  });
});
