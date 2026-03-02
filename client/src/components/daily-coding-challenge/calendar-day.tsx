import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';
import JavaScriptIcon from '../../assets/icons/javascript';
import PythonIcon from '../../assets/icons/python';
import { formatDisplayDate, truncateTitle } from './helpers';

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
  title = '',
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

  // isAvailable -> render link to challenge
  return (
    <Link
      to={`/learn/daily-coding-challenge/${date}`}
      className='calendar-day available'
      data-playwright-test-label='calendar-day'
      aria-label={`${date && formatDisplayDate(date)}`}
    >
      <span className='calendar-day-number' aria-hidden='true'>
        {dayNumber}
      </span>

      <span className='dc-number'>#{challengeNumber}</span>

      <div className='dc-info'>
        <div className='dc-title-wrap'>
          <div className='dc-title'>{truncateTitle(title)}</div>
        </div>

        {completedLanguages.length > 0 ? (
          <>
            <span className='dc-checkmark completed'>
              <GreenPass />
            </span>

            <div className='dc-languages'>
              {completedLanguages.includes('javascript') && (
                <div className='dc-language-icon'>
                  <JavaScriptIcon />
                  <span className='sr-only'>JavaScript</span>
                </div>
              )}
              {completedLanguages.includes('python') && (
                <div className='dc-language-icon'>
                  <PythonIcon />
                  <span className='sr-only'>Python</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <span className='dc-checkmark not-completed'>
            <GreenNotCompleted />
          </span>
        )}
      </div>
    </Link>
  );
}

DailyCodingChallengeCalendarDay.displayName = 'DailyCodingChallengeCalendarDay';

export default DailyCodingChallengeCalendarDay;
