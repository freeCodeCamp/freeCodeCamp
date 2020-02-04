import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatMap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
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
  // an issue with react-calendar-heatmap makes the days off by one
  // see this https://github.com/kevinsqi/react-calendar-heatmap/issues/112
  // I have added one day in the marked places to account for the offset

  // this logic adds a day to all the timestamps (remove if issue gets fixed)
  let tempCalendar = {};
  const secondsInADay = 60 * 60 * 24;
  for (let timestamp of Object.keys(calendar)) {
    tempCalendar[parseInt(timestamp, 10) + secondsInADay] = 1;
  }

  calendar = tempCalendar;

  // the addDays of 1 to startOfToday (remove if issue gets fixed)
  const startOfToday = addDays(startOfDay(Date.now()), 1);
  const sixMonthsAgo = addMonths(startOfToday, -6);
  const startOfCalendar = format(addDays(sixMonthsAgo, -1), 'YYYY-MM-DD');
  const endOfCalendar = format(startOfToday, 'YYYY-MM-DD');

  let calendarData = [];
  let dayCounter = sixMonthsAgo;

  // create a data point for each day of the calendar period (six months)
  while (dayCounter <= startOfToday) {
    // this is the format needed for react-calendar-heatmap
    const newDay = {
      date: format(dayCounter, 'YYYY-MM-DD'),
      count: 0
    };

    calendarData.push(newDay);
    dayCounter = addDays(dayCounter, 1);
  }

  // this adds one to the count of the day for each timestamp
  for (let timestamp of Object.keys(calendar)) {
    timestamp = Number(timestamp * 1000) || null;
    if (timestamp) {
      const startOfTimestampDay = format(startOfDay(timestamp), 'YYYY-MM-DD');
      const index = calendarData.findIndex(
        day => day.date === startOfTimestampDay
      );

      if (index >= 0) {
        calendarData[index].count++;
      }
    }
  }

  return (
    <FullWidthRow>
      <FullWidthRow>
        <CalendarHeatMap
          classForValue={value => {
            if (!value || value.count < 1) return 'color-empty';
            if (value.count < 4) return 'color-scale-1';
            if (value.count < 8) return 'color-scale-2';
            if (value.count >= 8) return 'color-scale-a-lot';
            return 'color-empty';
          }}
          endDate={endOfCalendar}
          startDate={startOfCalendar}
          tooltipDataAttrs={value => {
            let valueCount;
            if (value && value.count === 1) {
              valueCount = '1 point';
            } else if (value && value.count > 1) {
              valueCount = `${value.count} points`;
            } else {
              valueCount = 'No points';
            }
            return {
              'data-tip': `<b>${valueCount}</b> on ${new Date(
                value.date
              ).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}`
            };
          }}
          values={calendarData}
        />
        <ReactTooltip className='react-tooltip' effect='solid' html={true} />
      </FullWidthRow>
      <Spacer />
      <FullWidthRow>
        <div className='streak-container'>
          <span className='streak'>
            <b>Longest Streak:</b> {streak.longest || 0}
          </span>
          <span className='streak'>
            <b>Current Streak:</b> {streak.current || 0}
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
