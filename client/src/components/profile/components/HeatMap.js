import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CalendarHeatMap from 'react-calendar-heatmap';
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

const now = Date.now();
const today = new Date(now);
const sixMonthsInMillseconds = 15780000000;
const sixMonthsAgoInMilliseconds = now - sixMonthsInMillseconds;
const sixMonthsAgo = startOfMonth(sixMonthsAgoInMilliseconds);

function HeatMap({ calendar, streak }) {
  const dateValueMap = Object.keys(calendar)
    .map(ts => Number(ts * 1000) || null)
    .filter(Boolean)
    .reduce((map, current) => {
      const startOfCurrent = format(startOfDay(current), 'YYYY-MM-DD');
      if (startOfCurrent in map) {
        map[startOfCurrent] = map[startOfCurrent] + 1;
      } else {
        map[startOfCurrent] = 1;
      }
      return map;
    }, {});

  const calendarValues = Object.keys(dateValueMap).map(key => ({
    date: key,
    count: dateValueMap[key]
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
            if (!value) {
              return 'colour-empty';
            }
            if (value.count > 4) {
              return 'colour-scale-a-lot';
            }
            return `colour-scale-${value.count}`;
          }}
          endDate={today}
          startDate={sixMonthsAgo}
          values={calendarValues}
        />
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
