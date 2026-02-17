import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';
import { formatDisplayDate } from './helpers';

interface CalendarDayProps {
  dayNumber: number;
  date?: string;
  challengeNumber?: number;
  completedLanguages?: string[];
  isAvailable?: boolean;
  title?: string;
}

function DailyCodingChallengeCalendarDay({
  dayNumber,
  date,
  isAvailable = false,
  title,
  completedLanguages = [],
  challengeNumber
}: CalendarDayProps): JSX.Element {
  const { t } = useTranslation();

  // dayNumber = 0 -> render nothing
  if (dayNumber === 0) return <div></div>;

  if (!isAvailable)
    return (
      <button
        disabled
        className='calendar-day not-available'
        data-playwright-test-label='calendar-day'
        aria-label={`${date && formatDisplayDate(date)}, (${t('aria.not-available')})`}
      >
        <span className='calendar-day-number' aria-hidden='true'>
          {dayNumber}
        </span>
      </button>
    );

  const isCompleted = completedLanguages.length > 0;
  const jsCompleted = completedLanguages.includes('javascript');
  const pyCompleted = completedLanguages.includes('python');

  const tooltipContent = `JavaScript: ${jsCompleted ? '\u2713' : '\u2717'}<br/>Python: ${pyCompleted ? '\u2713' : '\u2717'}`;

  // isAvailable -> render link to challenge
  return (
    <Link
      to={`/learn/daily-coding-challenge/${date}`}
      className='calendar-day available'
      data-playwright-test-label='calendar-day'
      aria-label={`${date && formatDisplayDate(date)}`}
      data-tip={tooltipContent}
      data-for='calendar-tooltip'
    >
      <span className='calendar-day-number' aria-hidden='true'>
        {dayNumber}
      </span>

      <div className='dc-number'>#{challengeNumber}</div>

      <div className='dc-info'>
        <div className='dc-title'>{title}</div>

        {isCompleted ? (
          <span
            className='dc-checkmark dc-day-checkmark completed'
            data-playwright-test-label='calendar-day-completed'
          >
            <GreenPass />
          </span>
        ) : (
          <span
            className='dc-checkmark dc-day-checkmark not-completed'
            data-playwright-test-label='calendar-day-not-completed'
          >
            <GreenNotCompleted />
          </span>
        )}
      </div>
    </Link>
  );
}

DailyCodingChallengeCalendarDay.displayName = 'DailyCodingChallengeCalendarDay';

export default DailyCodingChallengeCalendarDay;
