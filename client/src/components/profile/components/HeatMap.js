import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeatMap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import startOfDay from 'date-fns/start_of_day';
import isEqual from 'date-fns/is_equal';

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
  const endOfCalendar = startOfDay(Date.now());
  const startOfCalendar = addMonths(endOfCalendar, -6);

  let calendarData = [];
  let dayCounter = startOfCalendar;

  // create a data point for each day of the calendar period (six months)
  while (dayCounter <= endOfCalendar) {
    // this is the format needed for react-calendar-heatmap
    const newDay = {
      date: startOfDay(dayCounter),
      count: 0
    };

    calendarData.push(newDay);
    dayCounter = addDays(dayCounter, 1);
  }

  for (let timestamp of Object.keys(calendar)) {
    timestamp = Number(timestamp * 1000) || null;
    if (timestamp) {
      const index = calendarData.findIndex(day =>
        isEqual(day.date, startOfDay(timestamp))
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
            const dateFormatted = value.date
              ? 'on ' +
                value.date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })
              : '';
            return {
              'data-tip': `<b>${valueCount}</b> ${dateFormatted}`
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
