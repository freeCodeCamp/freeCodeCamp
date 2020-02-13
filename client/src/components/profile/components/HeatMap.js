import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatMap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

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

const months = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// this is displayed in the tooltip e.g. "Dec 1, 2020"
function getTooltipString(date) {
  date = date.split('-');
  return `${months[date[1]]} ${date[2]}, ${date[0]}`;
}

// this formats a timestamp to YYYY-MM-DD e.g. "2020-12-1"
// for the UTC day of that timestamp
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  return `${year}-${month}-${day}`;
}

function HeatMap({ calendar, streak }) {
  const msInDay = 1000 * 60 * 60 * 24;
  const msInWeek = msInDay * 7;

  const today = Date.now();
  const halfYearAgo = today - msInWeek * 26;
  const startOfCalendar = formatDate(halfYearAgo);
  const endOfCalendar = formatDate(today);

  let calendarData = [];
  let dayCounter = halfYearAgo;

  // create a data point for each day of the calendar period (half a year)
  while (dayCounter <= today) {
    // this is the format needed for react-calendar-heatmap
    const newDay = {
      date: formatDate(dayCounter),
      count: 0
    };

    calendarData.push(newDay);
    dayCounter += msInDay;
  }

  // this adds one to the count of the day for each timestamp
  for (let timestamp of Object.keys(calendar)) {
    timestamp = Number(timestamp * 1000) || null;
    if (timestamp) {
      const timestampDay = formatDate(timestamp);
      const index = calendarData.findIndex(day => day.date === timestampDay);

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
          showWeekdayLabels={true}
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
              'data-tip': `<b>${valueCount}</b> on ${getTooltipString(
                value.date
              )}`
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
