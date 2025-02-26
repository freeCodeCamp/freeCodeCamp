import React, { useState, useEffect } from 'react';
import { startOfDay, addDays, addMonths, isEqual } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { FullWidthRow } from '../../helpers';

import './stats.css';

interface StatsProps {
  points: number;
  calendar: Record<string, number>;
}

interface CalendarData {
  date: Date;
  count: number;
}

const generateCalendarData = (endOfCalendar: Date): CalendarData[] => {
  const startOfCalendar = addDays(addMonths(endOfCalendar, -6), 1);
  let currentDay = startOfCalendar;
  const lastDay = endOfCalendar;
  const data: CalendarData[] = [];

  while (currentDay <= lastDay) {
    data.push({ date: startOfDay(currentDay), count: 0 });
    currentDay = addDays(currentDay, 1);
  }
  return data;
};

export const calculateStreaks = (calendar: Record<string, number>) => {
  const timestamps = Object.keys(calendar).map(
    stamp => Number.parseInt(stamp, 10) * 1000
  );

  const endOfCalendar = startOfDay(Date.now());

  const calendarData = generateCalendarData(endOfCalendar);

  let longestStreak = 0;
  let currentStreak = 0;
  let lastIndex = -1;

  timestamps.forEach(stamp => {
    const index = calendarData.findIndex(day =>
      isEqual(day.date, startOfDay(stamp))
    );

    if (index >= 0) {
      calendarData[index].count++;

      if (index !== lastIndex) {
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

  if (
    calendarData.length &&
    calendarData[calendarData.length - 1].count === 0
  ) {
    currentStreak = 0;
  }

  return { longestStreak, currentStreak };
};

function Stats({ points, calendar }: StatsProps): JSX.Element {
  const { t } = useTranslation();

  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const { longestStreak, currentStreak } = calculateStreaks(calendar);

    setLongestStreak(longestStreak);
    setCurrentStreak(currentStreak);
  }, [calendar]);

  return (
    <FullWidthRow>
      <section className='card'>
        <h2>{t('profile.stats')}</h2>
        <Spacer size='s' />
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
      </section>
    </FullWidthRow>
  );
}

export default Stats;
