import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Col, Spacer } from '@freecodecamp/ui';
import { completedDailyCodingChallengesSelector } from '../../redux/selectors';
import { CompletedDailyCodingChallenge } from '../../redux/prop-types';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';
import CalendarDay from './calendar-day';

import './calendar.css';
import { formatDateUsCentral } from './helpers';

const { dailyChallengeApiLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  completedDailyCodingChallenges: completedDailyCodingChallengesSelector(
    state
  ) as CompletedDailyCodingChallenge
});

const getMonthInfo = (
  monthIndex: number,
  year: number,
  dailyChallengesMap: Map<string, DailyChallengeMap>
) => {
  const date = new Date(year, monthIndex, 1);
  const firstOfMonthWeekdayIndex = date.getDay();
  const numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

  const days: JSX.Element[] = [];

  for (let i = 0; i < firstOfMonthWeekdayIndex; i++) {
    days.push(<CalendarDay key={`empty-${i}`} dayNumber={0} />);
  }

  for (let day = 1; day <= numberOfDays; day++) {
    const challengeDate = `${(monthIndex + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
    console.log('challengeDate');
    console.log(challengeDate);
    const challengeData = dailyChallengesMap.get(challengeDate);
    const isCompleted = challengeData?.isCompleted || false;
    const isAvailable = challengeData !== undefined;

    days.push(
      <CalendarDay
        key={`day-${day}`}
        date={challengeDate}
        dayNumber={day}
        isCompleted={isCompleted}
        isAvailable={isAvailable}
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

  // Initial month info for today US Central because challenges
  // are released at midnight US Central - so don't show the
  // local month, show the US Central month
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dailyChallengesMap, setDailyChallengesMap] =
    useState<DailyChallengesMap>(new Map());
  const [monthInfo, setMonthInfo] = useState<MonthInfo | null>(null);

  // we just need to change the month, the year can stay the same
  // because it just rolls over, e.g. 12, 2024 will be Jan, 2025
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

  const fetchChallenges = async () => {
    try {
      const response = await fetch(
        `${dailyChallengeApiLocation}/api/daily-challenge/all`
      );
      const challenges = (await response.json()) as DailyChallenge[];

      if (Array.isArray(challenges)) {
        const newDailyChallengesMap = new Map() as DailyChallengesMap;

        challenges.forEach(c => {
          newDailyChallengesMap.set(c.date, {
            ...c,
            isCompleted: completedDailyCodingChallengeIds.includes(
              c.challengeId
            )
          });
        });

        setDailyChallengesMap(newDailyChallengesMap);

        // After getting the challenges and creating the map, set the initial month info

        // todays month (US Central)
        const monthIndex =
          parseInt(
            today.toLocaleString('en-US', {
              timeZone: 'America/Chicago',
              month: '2-digit'
            }),
            10
          ) - 1;

        // todays year (US Central)
        const year = parseInt(
          today.toLocaleString('en-US', {
            timeZone: 'America/Chicago',
            year: 'numeric'
          }),
          10
        );

        const initialMonthInfo = getMonthInfo(
          monthIndex,
          year,
          newDailyChallengesMap
        );
        console.log('initialMonthInfo');
        console.log(initialMonthInfo);
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

  // const hasOlderChallenges = dailyChallenges.some(
  //   ch => new Date(ch.date).getMonth() < monthInfo.index
  // );

  // const hasNewerChallenges = dailyChallenges.some(
  //   ch => new Date(ch.date).getMonth() > monthInfo.index
  // );

  if (isLoading) return <Loader />;
  if (error || !monthInfo) return <div>ERROR!</div>;

  return (
    <>
      <div className='calendar-head'>
        <Button
          aria-label={t('aria.previous-month')}
          // disabled={!hasOlderChallenges}
          onClick={prevMonth}
        >
          &lt;
        </Button>

        <h2 className='text-center'>
          {monthInfo.name} {monthInfo.year}
        </h2>
        <Button
          aria-label={t('aria.next-month')}
          // disabled={!hasNewerChallenges}
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
      <Spacer size='l' />
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <Button
          block={true}
          href={`/learn/daily-coding-challenge?date=${todayUsCentral}`}
        >
          Go To Todays Challenge
        </Button>
      </Col>
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default connect(mapStateToProps, null)(DailyCodingChallengeCalendar);
// export default DailyCodingChallengeCalendar;
