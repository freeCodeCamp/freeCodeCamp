import React, { useState, useEffect } from 'react';
import { startOfDay, addDays, isEqual } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { last } from 'lodash-es';
import { uniq } from 'lodash';

import { FullWidthRow } from '../../helpers';

import './stats.css';

interface StatsProps {
  points: number;
  calendar: Record<string, number>;
}

export const calculateStreaks = (calendar: Record<string, number>) => {
  const timestamps = Object.keys(calendar).map(
    stamp => Number.parseInt(stamp, 10) * 1000
  );

  const today = startOfDay(Date.now());

  const dayStamps = uniq(timestamps.map(stamp => startOfDay(stamp)));

  const { longestStreak, currentStreak } = dayStamps.reduce<{
    currentStreak: number;
    longestStreak: number;
    previousDay: Date | null;
  }>(
    (acc, day) => {
      if (!acc.previousDay) {
        return {
          ...acc,
          previousDay: day,
          currentStreak: 1,
          longestStreak: Math.max(1, acc.longestStreak)
        };
      } else {
        const isConsecutive = isEqual(addDays(acc.previousDay, 1), day);
        const currentStreak = isConsecutive ? acc.currentStreak + 1 : 1;
        const longestStreak = Math.max(acc.longestStreak, currentStreak);

        return {
          currentStreak,
          longestStreak,
          previousDay: day
        };
      }
    },
    { currentStreak: 0, longestStreak: 0, previousDay: null }
  );

  const lastDay = last(dayStamps);

  if (!lastDay || !isEqual(lastDay, today))
    return {
      longestStreak,
      currentStreak: 0
    };

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
