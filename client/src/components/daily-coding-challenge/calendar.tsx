import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Col, Spacer } from '@freecodecamp/ui';
import { completedDailyCodingChallengesSelector } from '../../redux/selectors';
import { CompletedDailyCodingChallenge } from '../../redux/prop-types';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';
import CalendarDay from './calendar-day';
import {
  formatDateUsCentral,
  getUsCentralMonthIndex,
  getUsCentralYear,
  formatDate
} from './helpers';

import './calendar.css';

const { dailyChallengeApiLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  completedDailyCodingChallenges: completedDailyCodingChallengesSelector(
    state
  ) as CompletedDailyCodingChallenge[]
});

const getMonthInfo = (
  monthIndex: number,
  year: number,
  dailyChallengesMap: DailyChallengesMap
) => {
  // date is first of the month for selected month
  const date = new Date(Date.UTC(year, monthIndex, 1));
  const firstOfMonthWeekdayIndex = date.getUTCDay();

  // year is possibly incorrect since we sometimes pass monthIndex = 12 for example
  // to roll over to January, so we get the year again
  const utcYear = date.getUTCFullYear();

  // day number of last day of the month
  const numberOfDays = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();

  const days: JSX.Element[] = [];

  // push empty days to before the 1st of the month
  for (let i = 0; i < firstOfMonthWeekdayIndex; i++) {
    days.push(<CalendarDay key={`empty-${i}`} dayNumber={0} />);
  }

  for (let day = 1; day <= numberOfDays; day++) {
    const formattedDate = formatDate({
      month: monthIndex + 1,
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
    index: date.getUTCMonth(),
    name: date.toLocaleString('en-US', {
      timeZone: 'UTC',
      month: 'long'
    }),
    year: date.getUTCFullYear()
  };
};

interface DailyCodingChallengeCalendarProps {
  completedDailyCodingChallenges: CompletedDailyCodingChallenge[];
}

interface DailyChallenge {
  challengeId: string;
  date: string;
}

interface DailyChallengeMap {
  challengeId: string;
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
  completedDailyCodingChallenges
}: DailyCodingChallengeCalendarProps): JSX.Element {
  const { t } = useTranslation();

  const today = new Date();
  const todayUsCentral = formatDateUsCentral(today);

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
      const challenges = (await response.json()) as DailyChallenge[];

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
            isCompleted: completedDailyCodingChallengeIds.includes(
              c.challengeId
            )
          });
        });

        setDailyChallengesMap(newDailyChallengesMap);

        // After getting the challenges and creating the map, set the initial month info -
        // Display the calendar of the current US Central day because challenges are released
        // at midnight US Central - so don't show the local month, show the US Central month
        const usCentralMonthIndex = getUsCentralMonthIndex(today);
        const usCentralYear = getUsCentralYear(today);
        const initialMonthInfo = getMonthInfo(
          usCentralMonthIndex,
          usCentralYear,
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

  // Todo: these are hideous - revisit - maybe use date objects as dailyChallengeMap keys
  const hasOlderChallenges = (
    map: DailyChallengesMap,
    monthInfo: MonthInfo
  ): boolean => {
    const firstOfMonth = new Date(Date.UTC(monthInfo.year, monthInfo.index, 1));
    for (const dateStr of map.keys()) {
      const date = new Date(dateStr);
      if (date < firstOfMonth) return true;
    }
    return false;
  };

  const hasNewerChallenges = (
    map: DailyChallengesMap,
    monthInfo: MonthInfo
  ): boolean => {
    const lastOfMonth = new Date(
      Date.UTC(monthInfo.year, monthInfo.index + 1, 0)
    );
    for (const dateStr of map.keys()) {
      const date = new Date(dateStr);
      if (date > lastOfMonth) return true;
    }
    return false;
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
        {/* Todo: use long/short days based on window size */}
        <div>{t('weekdays.short.sunday')}</div>
        <div>{t('weekdays.short.monday')}</div>
        <div>{t('weekdays.short.tuesday')}</div>
        <div>{t('weekdays.short.wednesday')}</div>
        <div>{t('weekdays.short.thursday')}</div>
        <div>{t('weekdays.short.friday')}</div>
        <div>{t('weekdays.short.saturday')}</div>
      </div>
      <Spacer size='s' />
      <div className='calendar-grid'>{monthInfo.days}</div>
      <Spacer size='l' />
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <Button
          block={true}
          href={`/learn/daily-coding-challenge?date=${todayUsCentral}`}
        >
          {t('buttons.go-to-today')}
        </Button>
      </Col>
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default connect(mapStateToProps)(DailyCodingChallengeCalendar);
