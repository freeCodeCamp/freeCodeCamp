import React from 'react';
import { Link } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';

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
  // dayNumber = 0 -> render nothing
  if (dayNumber === 0) return <div></div>;

  if (!isAvailable)
    return (
      <div className='calendar-day'>
        <span className='calendar-day-number'>{dayNumber}</span>
      </div>
    );

  // isAvailable -> render link to challenge
  return (
    <Link
      to={`/learn/daily-coding-challenge?date=${date}`}
      className='calendar-day'
    >
      <span className='calendar-day-number'>{dayNumber}</span>

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
