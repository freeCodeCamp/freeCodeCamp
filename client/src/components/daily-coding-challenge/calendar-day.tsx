import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';
import { formatDisplayDate } from './helpers';

interface CalendarDayProps {
  dayNumber: number;
  date?: string;
  isCompleted?: boolean;
  isAvailable?: boolean;
}

// Todo: Change this to render checkmarks for JS and Python

function DailyCodingChallengeCalendarDay({
  dayNumber,
  date,
  isCompleted = false,
  isAvailable = false
}: CalendarDayProps): JSX.Element {
  const { t } = useTranslation();
  // dayNumber = 0 -> render nothing
  if (dayNumber === 0) return <div></div>;

  if (!isAvailable)
    return (
      <button
        disabled
        className='calendar-day not-available'
        aria-label={`${date && formatDisplayDate(date)}, (${t('aria.not-available')})`}
      >
        <span className='calendar-day-number' aria-hidden='true'>
          {dayNumber}
        </span>
      </button>
    );

  // isAvailable -> render link to challenge
  return (
    <Link
      to={`/learn/daily-coding-challenge?date=${date}`}
      className='calendar-day available'
      aria-label={`${date && formatDisplayDate(date)}`}
    >
      <span className='calendar-day-number' aria-hidden='true'>
        {dayNumber}
      </span>

      {isCompleted ? (
        <span className='completed'>
          <GreenPass />
        </span>
      ) : (
        <span className='not-completed'>
          <GreenNotCompleted />
        </span>
      )}
    </Link>
  );
}

DailyCodingChallengeCalendarDay.displayName = 'DailyCodingChallengeCalendarDay';

export default DailyCodingChallengeCalendarDay;
