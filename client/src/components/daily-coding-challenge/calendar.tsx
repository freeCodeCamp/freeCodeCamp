import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Col, Spacer } from '@freecodecamp/ui';
import {
  completedDailyCodingChallengesSelector,
  isSignedInSelector
} from '../../redux/selectors';
import { CompletedDailyCodingChallenge } from '../../redux/prop-types';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';
import Login from '../Header/components/login';
import CalendarDay from './calendar-day';
import { getTodayUsCentral, formatDate } from './helpers';

import './calendar.css';

const { dailyChallengeApiLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  completedDailyCodingChallenges: completedDailyCodingChallengesSelector(
    state
  ) as CompletedDailyCodingChallenge[],
  isSignedIn: isSignedInSelector(state)
});

const getMonthInfo = (
  monthIndex: number,
  year: number,
  dailyChallengesMap: DailyChallengesMap
) => {
  // Create date for first of the month (handles rollover automatically)
  const firstOfMonth = new Date(Date.UTC(year, monthIndex, 1));
  const firstOfMonthWeekdayIndex = firstOfMonth.getUTCDay();
  const utcYear = firstOfMonth.getUTCFullYear();
  const utcMonthIndex = firstOfMonth.getUTCMonth();

  // Get number of days in the month (day 0 of next month = last day of current month)
  const numberOfDays = new Date(
    Date.UTC(utcYear, utcMonthIndex + 1, 0)
  ).getUTCDate();

  const days: JSX.Element[] = [];

  // push empty days to before the 1st of the month
  for (let i = 0; i < firstOfMonthWeekdayIndex; i++) {
    days.push(<CalendarDay key={`empty-${i}`} dayNumber={0} />);
  }

  for (let day = 1; day <= numberOfDays; day++) {
    const formattedDate = formatDate({
      month: utcMonthIndex + 1, // Convert back to 1-indexed
      day,
      year: utcYear
    });

    const challengeData = dailyChallengesMap.get(formattedDate);
    const isCompleted = challengeData?.isCompleted || false;
    const isAvailable = challengeData !== undefined;

    days.push(
      <CalendarDay
        key={`day-${day}`}
        date={formattedDate}
        dayNumber={day}
        isCompleted={isCompleted}
        isAvailable={isAvailable}
      />
    );
  }

  return {
    days,
    index: utcMonthIndex,
    name: firstOfMonth.toLocaleString('en-US', {
      timeZone: 'UTC',
      month: 'long'
    }),
    year: utcYear
  };
};

interface DailyCodingChallengeCalendarProps {
  completedDailyCodingChallenges: CompletedDailyCodingChallenge[];
  isSignedIn: boolean;
}

interface DailyChallengeFromDb {
  _id: string;
  date: string;
}

interface DailyChallengeMap {
  _id: string;
  date: string;
  isCompleted: boolean;
}

type DailyChallengesMap = Map<string, DailyChallengeMap>;

interface MonthInfo {
  days: JSX.Element[];
  index: number;
  name: string;
  year: number;
}

function DailyCodingChallengeCalendar({
  completedDailyCodingChallenges,
  isSignedIn
}: DailyCodingChallengeCalendarProps): JSX.Element {
  const { t } = useTranslation();

  const todayUsCentral = getTodayUsCentral();

  const completedDailyCodingChallengeIds = completedDailyCodingChallenges.map(
    c => c.id
  );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [monthInfo, setMonthInfo] = useState<MonthInfo | null>(null);
  const [dailyChallengesMap, setDailyChallengesMap] = useState(
    () => new Map<string, DailyChallengeMap>()
  );

  const fetchChallenges = async () => {
    try {
      const response = await fetch(
        `${dailyChallengeApiLocation}/api/daily-challenge/all`
      );
      const challenges = (await response.json()) as DailyChallengeFromDb[];

      if (Array.isArray(challenges)) {
        const newDailyChallengesMap = new Map() as DailyChallengesMap;

        challenges.forEach(c => {
          const [year, month, day] = c.date.split('T')[0].split('-');

          // parseInt to remove leading zero's
          const date = formatDate({
            month: parseInt(month, 10),
            day: parseInt(day, 10),
            year: parseInt(year, 10)
          });

          newDailyChallengesMap.set(date, {
            ...c,
            date,
            isCompleted: completedDailyCodingChallengeIds.includes(c._id)
          });
        });

        setDailyChallengesMap(newDailyChallengesMap);

        // After getting the challenges and creating the map, set the initial month info -
        // Display the month of the current US Central day because challenges are released
        // at midnight US Central - so don't show the local month, show the US Central month
        const [month, , year] = todayUsCentral.split('-').map(Number);
        const initialMonthInfo = getMonthInfo(
          month - 1, // Convert to 0-indexed month
          year,
          newDailyChallengesMap
        );

        setMonthInfo(initialMonthInfo);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchChallenges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // we just need to change the month, the year can stay the same
  // because it just rolls over, e.g. (index) 12, 2024 will be Jan, 2025
  const nextMonth = () => {
    setMonthInfo(
      m => m && getMonthInfo(m.index + 1, m.year, dailyChallengesMap)
    );
  };

  const prevMonth = () => {
    setMonthInfo(
      m => m && getMonthInfo(m.index - 1, m.year, dailyChallengesMap)
    );
  };

  const hasOlderChallenges = (
    map: DailyChallengesMap,
    monthInfo: MonthInfo
  ): boolean => {
    return Array.from(map.keys()).some(dateStr => {
      const [month, , year] = dateStr.split('-').map(Number);
      return (
        year < monthInfo.year ||
        (year === monthInfo.year && month - 1 < monthInfo.index)
      );
    });
  };

  const hasNewerChallenges = (
    map: DailyChallengesMap,
    monthInfo: MonthInfo
  ): boolean => {
    return Array.from(map.keys()).some(dateStr => {
      const [month, , year] = dateStr.split('-').map(Number);
      return (
        year > monthInfo.year ||
        (year === monthInfo.year && month - 1 > monthInfo.index)
      );
    });
  };

  const showPrevButton = monthInfo
    ? hasOlderChallenges(dailyChallengesMap, monthInfo)
    : false;

  const showNextButton = monthInfo
    ? hasNewerChallenges(dailyChallengesMap, monthInfo)
    : false;

  if (isLoading) return <Loader />;
  if (error || !monthInfo) return <div>ERROR!</div>;

  return (
    <>
      <div className='calendar-head'>
        <Button
          aria-label={t('aria.previous-month')}
          disabled={!showPrevButton}
          onClick={prevMonth}
        >
          &lt;
        </Button>

        <h2 className='text-center'>
          {monthInfo.name} {monthInfo.year}
        </h2>
        <Button
          aria-label={t('aria.next-month')}
          disabled={!showNextButton}
          onClick={nextMonth}
        >
          &gt;
        </Button>
      </div>
      <Spacer size='m' />
      <div className='calendar-weekday-labels'>
        <div aria-label={t('weekdays.long.sunday')}>
          {t('weekdays.short.sunday')}
        </div>
        <div aria-label={t('weekdays.long.monday')}>
          {t('weekdays.short.monday')}
        </div>
        <div aria-label={t('weekdays.long.tuesday')}>
          {t('weekdays.short.tuesday')}
        </div>
        <div aria-label={t('weekdays.long.wednesday')}>
          {t('weekdays.short.wednesday')}
        </div>
        <div aria-label={t('weekdays.long.thursday')}>
          {t('weekdays.short.thursday')}
        </div>
        <div aria-label={t('weekdays.long.friday')}>
          {t('weekdays.short.friday')}
        </div>
        <div aria-label={t('weekdays.long.saturday')}>
          {t('weekdays.short.saturday')}
        </div>
      </div>
      <Spacer size='s' />
      <div className='calendar-grid'>{monthInfo.days}</div>
      <Spacer size='l' />
      <p className='text-center'>{t('daily-coding-challenges.release-note')}</p>
      <Spacer size='m' />
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <Button
          block={true}
          href={`/learn/daily-coding-challenge?date=${todayUsCentral}`}
        >
          {t('buttons.go-to-today')}
        </Button>
        {!isSignedIn && (
          <div className='completion-modal-login-btn'>
            <Spacer size='xs' />
            <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
          </div>
        )}
      </Col>
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default connect(mapStateToProps)(DailyCodingChallengeCalendar);
