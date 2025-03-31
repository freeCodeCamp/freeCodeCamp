import React, { useEffect, useState } from 'react';
import { Button, Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';
import CalendarDay from './calendar-day';

import './calendar.css';

const { dailyChallengeApiLocation } = envData;

const getMonthInfo = (monthIndex: number, year: number) => {
  // month - 1 = month index, 1 = the first of the month
  const date = new Date(year, monthIndex, 1);
  const firstOfMonthWeekdayIndex = date.getDay();
  const numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

  const days: JSX.Element[] = [];

  // add empty days before the first of the month
  for (let i = 0; i < firstOfMonthWeekdayIndex; i++) {
    days.push(<CalendarDay key={`empty-${i}`} dayNumber={0} />);
  }

  // add all the actual days of the month
  for (let day = 1; day <= numberOfDays; day++) {
    days.push(
      <CalendarDay
        key={`day-${day}`}
        dayNumber={day}
        isCompleted={day > 20}
        isAvailable={true}
      />
    );
  }

  return {
    days,
    index: date.getMonth(),
    name: date.toLocaleString('en-US', { month: 'long' }),
    year: date.getFullYear()
  };
};

function DailyCodingChallengeCalendar(): JSX.Element {
  const { t } = useTranslation();

  const today = new Date();

  const monthIndex =
    parseInt(
      today.toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        month: '2-digit'
      }),
      10
    ) - 1;

  const year = parseInt(
    today.toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      year: 'numeric'
    }),
    10
  );

  // Initial month info for today US Central because challenges
  // are released at midnight US Central - so don't show the
  // local month, show the US Central month
  const initialMonthInfo = getMonthInfo(monthIndex, year);
  const [monthInfo, setMonthInfo] = useState(initialMonthInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [dailyChallenges, setDailyChallenges] = useState([]);

  // we just need to change the month, the year can stay the same
  // because it just rolls over, e.g. 12, 2024 will be Jan, 2025
  const nextMonth = () => {
    setMonthInfo(prev => getMonthInfo(prev.index + 1, prev.year));
  };

  const prevMonth = () => {
    setMonthInfo(prev => getMonthInfo(prev.index - 1, prev.year));
  };

  const fetchChallenges = async () => {
    try {
      console.log('fetching challenges...');
      const response = await fetch(
        `${dailyChallengeApiLocation}/api/daily-challenge/all`
      );
      const challenges = await response.json();

      // Todo: validate challenge data

      if (challenges) {
        console.log(challenges);
        setDailyChallenges(dailyChallenges);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchChallenges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className='text-center'>
        <Button
          aria-label={t('aria.previous-month')}
          // disabled={pageNo === 1}
          onClick={prevMonth}
        >
          &lt;
        </Button>

        <h2 className='text-center'>{monthInfo.name}</h2>
        <Button
          aria-label={t('aria.next-month')}
          // disabled={pageNo === 1}
          onClick={nextMonth}
        >
          &gt;
        </Button>
      </div>
      <Spacer size='m' />
      <div className='calendar-weekday-labels'>
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <Spacer size='s' />
      <div className='calendar-grid'>{monthInfo.days}</div>
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default DailyCodingChallengeCalendar;
