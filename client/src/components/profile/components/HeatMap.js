import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CalendarHeatMap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import startOfMonth from 'date-fns/start_of_month';
import startOfDay from 'date-fns/start_of_day';
import format from 'date-fns/format';

import FullWidthRow from '../../helpers/FullWidthRow';
import Spacer from '../../helpers/Spacer';

import 'react-calendar-heatmap/dist/styles.css';
import './heatmap.css';

const propTypes = {
  calendar: PropTypes.object,
  streak: PropTypes.shape({
    current: PropTypes.number,
    longest: PropTypes.number
  })
};

function HeatMap({ calendar, streak }) {
  const now = Date.now();
  const startOfToday = startOfDay(now);
  const startOfThisMonth = startOfMonth(startOfToday);
  const startOfSixMonthsAgo = addMonths(startOfThisMonth, -6);
  const endOfCalendar = format(startOfToday, 'YYYY-MM-DD');
  const startOfCalendar = format(
    addDays(startOfSixMonthsAgo, -1),
    'YYYY-MM-DD'
  );

  let calendarData = {};
  let dayCounter = startOfSixMonthsAgo;

  while (dayCounter <= startOfToday) {
    calendarData[format(dayCounter, 'YYYY-MM-DD')] = 0;
    dayCounter = addDays(dayCounter, 1);
  }

  for (let timestamp in calendar) {
    if (calendar.hasOwnProperty(timestamp)) {
      timestamp = Number(timestamp * 1000) || null;
      const startOfTimestampDay = format(startOfDay(timestamp), 'YYYY-MM-DD');
      calendarData[startOfTimestampDay] =
        calendarData[startOfTimestampDay] + 1 || 1;
    }
  }

  const calendarValues = Object.keys(calendarData).map(key => ({
    date: key,
    count: calendarData[key]
  }));

  return (
    <FullWidthRow id='cal-heatmap-container'>
      <Helmet>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js'
          type='text/javascript'
        />
        <link href='/css/cal-heatmap.css' rel='stylesheet' />
      </Helmet>
      <FullWidthRow>
        <CalendarHeatMap
          classForValue={value => {
            if (value.count < 1) {
              return 'colour-empty';
            }
            if (value.count > 4) {
              return 'colour-scale-a-lot';
            }
            return `colour-scale-${value.count}`;
          }}
          endDate={endOfCalendar}
          startDate={startOfCalendar}
          tooltipDataAttrs={value => {
            let valueCount = '';
            if (value.count === 1) {
              valueCount = `${value.count} item on `;
            } else if (value.count > 1) {
              valueCount = `${value.count} items on `;
            }
            return {
              'data-tip': `${valueCount}${format(value.date, 'MMMM Do, YYYY')}`
            };
          }}
          values={calendarValues}
        />
        <ReactTooltip className='react-tooltip' />
      </FullWidthRow>
      <Spacer />
      <FullWidthRow>
        <div className='streak-container'>
          <span className='streak'>
            <strong>Longest Streak:</strong> {streak.longest || 1}
          </span>
          <span className='streak'>
            <strong>Current Streak:</strong> {streak.current || 1}
          </span>
        </div>
      </FullWidthRow>
      <Spacer />
      <hr />
    </FullWidthRow>
  );
}

HeatMap.displayName = 'HeatMap';
HeatMap.propTypes = propTypes;

export default HeatMap;
