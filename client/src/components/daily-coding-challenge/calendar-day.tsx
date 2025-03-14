import React from 'react';
import { Link } from '../helpers';
// import GreenPass from '../../assets/icons/green-pass';
import CheckMark from '../../templates/Introduction/components/check-mark';

// import './calendar-day.css';

interface CalendarDayProps {
  dayNumber: number;
  isCompleted?: boolean;
  isAvailable?: boolean;
}

// so we need to have a list of days with challenges for the current month
// if daily challenge doesn't exist, display nothing
// if day is past today, display nothing

function DailyCodingChallengeCalendarDay({
  dayNumber,
  isCompleted = false,
  isAvailable
}: CalendarDayProps): JSX.Element {
  return dayNumber === 0 ? (
    // dayNumber === 0 -> render nothing
    <div></div>
  ) : isAvailable ? (
    // isAvailable -> render link to challenge
    <Link
      to='/learn/daily-coding-challenge?date=03-03-2025&level=Beginner'
      className='calendar-day'
    >
      <span className='calendar-day-number'>{dayNumber}</span>
      {
        // isComplete ? (
        //   // isComplete -> render checkmark
        //   <GreenPass />
        // ) : (
        //   // !isComplete -> render empty circle
        //   <div className='empty-cirle' aria-label='Incomplete'></div>
        // )
      }
      <span className={isCompleted ? 'completed' : 'not-completed'}>
        <CheckMark isCompleted={isCompleted} />
      </span>
    </Link>
  ) : (
    // render non-link calendar day (daily challenge doesn't exist for that day)
    <div className='calendar-day'>
      <span className='calendar-day-number'>{dayNumber}</span>
    </div>
  );
}

DailyCodingChallengeCalendarDay.displayName = 'DailyCodingChallengeCalendarDay';

export default DailyCodingChallengeCalendarDay;
