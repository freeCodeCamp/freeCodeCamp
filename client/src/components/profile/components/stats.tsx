import React from 'react';
import { useTranslation } from 'react-i18next';
import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import isEqual from 'date-fns/isEqual';
import startOfDay from 'date-fns/startOfDay';
import { User } from '../../../redux/prop-types';
import { FullWidthRow, Spacer } from '../../helpers';
import './stats.css';

interface StatsProps {
  points: number;
  calendar: User['calendar'];
}

function Stats({ points, calendar }: StatsProps): JSX.Element {
  const { t } = useTranslation();

  /**
   *  the following logic calculates streaks from the
   *  users calendar
   */

  interface PageData {
    startOfCalendar: Date;
    endOfCalendar: Date;
  }

  interface CalendarData {
    date: Date;
    count: number;
  }

  // create array of timestamps and turn into milliseconds
  const timestamps = Object.keys(calendar).map(
    stamp => Number.parseInt(stamp, 10) * 1000
  );
  const startOfTimestamps = startOfDay(new Date(timestamps[0]));
  let endOfCalendar = startOfDay(Date.now());
  let startOfCalendar;

  const pages: PageData[] = [];

  do {
    startOfCalendar = addDays(addMonths(endOfCalendar, -6), 1);

    const newPage = {
      startOfCalendar: startOfCalendar,
      endOfCalendar: endOfCalendar
    };

    pages.push(newPage);

    endOfCalendar = addDays(startOfCalendar, -1);
  } while (startOfTimestamps < startOfCalendar);

  pages.reverse();

  const calendarData: CalendarData[] = [];
  let dayCounter = pages[0].startOfCalendar;

  // create an object for each day of the calendar period
  while (dayCounter <= pages[pages.length - 1].endOfCalendar) {
    const newDay = {
      date: startOfDay(dayCounter),
      count: 0
    };

    calendarData.push(newDay);
    dayCounter = addDays(dayCounter, 1);
  }

  let longestStreak = 0;
  let currentStreak = 0;
  let lastIndex = -1;

  // add a point to each day with a completed timestamp and calculate streaks
  timestamps.forEach(stamp => {
    const index = calendarData.findIndex(day =>
      isEqual(day.date, startOfDay(stamp))
    );

    if (index >= 0) {
      // add one point for today
      calendarData[index].count++;

      // if timestamp is on a new day, deal with streaks
      if (index !== lastIndex) {
        // if yesterday has points
        if (calendarData[index - 1] && calendarData[index - 1].count > 0) {
          currentStreak++;
        } else {
          currentStreak = 1;
        }

        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      }

      lastIndex = index;
    }
  });

  // if today has no points
  if (
    calendarData[calendarData.length - 1] &&
    calendarData[calendarData.length - 1].count === 0
  ) {
    currentStreak = 0;
  }

  return (
    <FullWidthRow>
      <h2>{t('profile.stats')}</h2>
      <Spacer size='small' />
      <dl className='stats'>
        <div>
          <dt>
            <b data-testid='current-streak'>{t('profile.current-streak')}</b>
          </dt>
          <dd>{currentStreak || 0}</dd>
        </div>
        <div>
          <dt>
            <b>{t('profile.total-points')}</b>
          </dt>
          <dd>{points}</dd>
        </div>
        <div>
          <dt>
            <b data-testid='longest-streak'>{t('profile.longest-streak')}</b>
          </dt>
          <dd>{longestStreak || 0}</dd>
        </div>
      </dl>
      <hr />
    </FullWidthRow>
  );
}

export default Stats;
