import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Callout, Container, Col, Row, Spacer } from '@freecodecamp/ui';
import {
  completedDailyCodingChallengesSelector,
  isSignedInSelector
} from '../../redux/selectors';
import {
  CompletedDailyCodingChallenge,
  DailyCodingChallengeLanguages
} from '../../redux/prop-types';
import { Loader } from '../helpers';
import envData from '../../../config/env.json';
import Login from '../Header/components/login';
import CalendarDay from './calendar-day';
import {
  getTodayUsCentral,
  toMonthDay,
  formatDate,
  lastDailyChallengeIsReleased
} from './helpers';

import './calendar.css';
import DailyCodingChallengeNotFound from './not-found';

const { apiLocation } = envData;

const mapStateToProps = (state: unknown) => ({
  completedDailyCodingChallenges: completedDailyCodingChallengesSelector(
    state
  ) as CompletedDailyCodingChallenge[],
  isSignedIn: isSignedInSelector(state)
});

interface DailyCodingChallengeCalendarProps {
  completedDailyCodingChallenges: CompletedDailyCodingChallenge[];
  isSignedIn: boolean;
}

interface AllDailyChallengeFromDb {
  id: string;
  date: string;
  challengeNumber: number;
  title: string;
}

interface DailyChallengeMap {
  id: string;
  date: string;
  challengeNumber: number;
  title: string;
  completedLanguages: DailyCodingChallengeLanguages[];
}

type DailyChallengesMap = Map<string, DailyChallengeMap>;

interface MonthInfo {
  days: JSX.Element[];
  index: number;
  name: string;
  year: number;
}

const getMonthInfo = (
  year: number,
  monthIndex: number,
  dailyChallengesMap: DailyChallengesMap,
  hideDaysAfter?: number,
  hideDaysThrough?: number
) => {
  // Create date for first of the month (handles rollover automatically)
  const firstOfMonth = new Date(Date.UTC(year, monthIndex, 1));
  const utcYear = firstOfMonth.getUTCFullYear();
  const utcMonthIndex = firstOfMonth.getUTCMonth();

  // Get number of days in the month (day 0 of next month = last day of current month)
  const numberOfDays = new Date(
    Date.UTC(utcYear, utcMonthIndex + 1, 0)
  ).getUTCDate();

  const days: JSX.Element[] = [];

  for (let day = 1; day <= numberOfDays; day++) {
    const formattedDate = formatDate({
      month: utcMonthIndex + 1, // Convert back to 1-indexed
      day,
      year: utcYear
    });

    const challengeData = dailyChallengesMap.get(toMonthDay(formattedDate));
    const completedLanguages = challengeData?.completedLanguages || [];
    const title = challengeData?.title || '';
    const isAvailable =
      challengeData !== undefined &&
      (hideDaysAfter === undefined || day <= hideDaysAfter) &&
      (hideDaysThrough === undefined || day > hideDaysThrough);
    const challengeNumber = challengeData?.challengeNumber;

    days.push(
      <CalendarDay
        key={`day-${day}`}
        date={formattedDate}
        dayNumber={day}
        challengeNumber={challengeNumber}
        title={title}
        isAvailable={isAvailable}
        completedLanguages={completedLanguages}
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

function DailyCodingChallengeCalendar({
  completedDailyCodingChallenges,
  isSignedIn
}: DailyCodingChallengeCalendarProps): JSX.Element {
  const { t } = useTranslation();

  const todayUsCentral = getTodayUsCentral();
  const lastDailyChallengeReleased = lastDailyChallengeIsReleased();

  const [todayYear, todayMonth, todayDay] = todayUsCentral
    .split('-')
    .map(Number);

  const daysInCurrentMonth = new Date(
    Date.UTC(todayYear, todayMonth, 0)
  ).getUTCDate();
  const minMonthOffset = todayDay === daysInCurrentMonth ? -11 : -12;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);
  const [dailyChallengesMap, setDailyChallengesMap] = useState(
    () => new Map<string, DailyChallengeMap>()
  );

  const fetchChallenges = async () => {
    try {
      const response = await fetch(`${apiLocation}/daily-coding-challenge/all`);
      const challenges = (await response.json()) as AllDailyChallengeFromDb[];

      if (Array.isArray(challenges)) {
        // Todo: validate shape of challenges

        const newDailyChallengesMap = new Map() as DailyChallengesMap;

        challenges.forEach(c => {
          const date = c.date.split('T')[0];

          newDailyChallengesMap.set(toMonthDay(date), {
            ...c,
            date,
            completedLanguages:
              completedDailyCodingChallenges.find(ch => ch.id === c.id)
                ?.languages ?? []
          });
        });

        setDailyChallengesMap(newDailyChallengesMap);
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

  // The prev/next buttons are disabled outside the valid range, so these
  // don't need to clamp the offset themselves
  const nextMonth = () => setMonthOffset(offset => offset + 1);
  const prevMonth = () => setMonthOffset(offset => offset - 1);

  const hasOlderChallenges = (
    map: DailyChallengesMap,
    monthInfo: MonthInfo
  ): boolean => {
    return Array.from(map.values()).some(({ date }) => {
      const [year, month] = date.split('-').map(Number);
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
    return Array.from(map.values()).some(({ date }) => {
      const [year, month] = date.split('-').map(Number);
      return (
        year > monthInfo.year ||
        (year === monthInfo.year && month - 1 > monthInfo.index)
      );
    });
  };

  // The boundary month (the furthest back you can go) only shows the days
  // still hidden in the current month - the rest is already visible there
  const isBoundaryMonth = minMonthOffset === -12 && monthOffset === -12;

  // After the last challenge is released, the current month only shows
  // challenges through today, and the boundary month only shows the days
  // still hidden in the current month
  const displayedMonthInfo = getMonthInfo(
    todayYear,
    todayMonth - 1 + monthOffset,
    dailyChallengesMap,
    lastDailyChallengeReleased && monthOffset === 0 ? todayDay : undefined,
    lastDailyChallengeReleased && isBoundaryMonth ? todayDay : undefined
  );

  const showPrevButton = lastDailyChallengeReleased
    ? monthOffset > minMonthOffset
    : hasOlderChallenges(dailyChallengesMap, displayedMonthInfo);

  const showNextButton = lastDailyChallengeReleased
    ? monthOffset < 0
    : hasNewerChallenges(dailyChallengesMap, displayedMonthInfo);

  if (isLoading) return <Loader />;
  if (error) return <DailyCodingChallengeNotFound />;

  return (
    <>
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Callout variant='note' label={t('misc.note')}>
              {t('daily-coding-challenges.release-note')}
            </Callout>

            <Button
              block={true}
              href={`/learn/daily-coding-challenge/${toMonthDay(todayUsCentral)}`}
            >
              {t('buttons.go-to-dcc-today')}
            </Button>
          </Col>
        </Row>
      </Container>

      <Spacer size='l' />

      <div className='calendar-head'>
        <Button
          aria-label={t('aria.previous-month')}
          disabled={!showPrevButton}
          onClick={prevMonth}
        >
          &lt;
        </Button>

        <h2 className='text-center'>{displayedMonthInfo.name}</h2>
        <Button
          aria-label={t('aria.next-month')}
          disabled={!showNextButton}
          onClick={nextMonth}
        >
          &gt;
        </Button>
      </div>

      <Spacer size='m' />
      <div className='calendar-grid'>{displayedMonthInfo.days}</div>
      <Spacer size='l' />

      {!isSignedIn && (
        <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
          <Spacer size='m' />
          <div className='completion-modal-login-btn'>
            <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
          </div>
        </Col>
      )}
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default connect(mapStateToProps)(DailyCodingChallengeCalendar);
