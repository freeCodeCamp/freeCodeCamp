import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { Link } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';
import JavaScriptIcon from '../../assets/icons/javascript';
import PythonIcon from '../../assets/icons/python';
import { formatDisplayDate } from './helpers';

interface CalendarDayProps {
  dayNumber: number;
  date?: string;
  challengeNumber?: number;
  completedLanguages?: string[];
  isAvailable?: boolean;
  title?: string;
}

function Checkmark({ completed }: { completed: boolean }): JSX.Element {
  return completed ? (
    <span
      className='dc-checkmark dc-small-checkmark completed'
      data-playwright-test-label='calendar-day-completed'
    >
      <GreenPass />
    </span>
  ) : (
    <span
      className='dc-checkmark dc-small-checkmark not-completed'
      data-playwright-test-label='calendar-day-not-completed'
    >
      <GreenNotCompleted />
    </span>
  );
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

      <div className='dc-number'>#{challengeNumber}</div>

      <div className='dc-info'>
        <div className='dc-title'>{title}</div>

        {completedLanguages.length === 2 ? (
          <span className='dc-checkmark dc-big-checkmark completed'>
            <span className='dc-spacer'>
              <Spacer size='s' />
            </span>
            <GreenPass />
          </span>
        ) : (
          <div className='dc-languages'>
            <hr />
            <div className='dc-language'>
              <div className='dc-language-icon'>
                <JavaScriptIcon />
              </div>
              <div className='dc-language-name'>JavaScript</div>
              <Checkmark
                completed={completedLanguages.includes('javascript')}
              />
            </div>

            <div className='dc-language'>
              <div className='dc-language-icon'>
                <PythonIcon />
              </div>
              <div className='dc-language-name'>Python</div>
              <Checkmark completed={completedLanguages.includes('python')} />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

DailyCodingChallengeCalendarDay.displayName = 'DailyCodingChallengeCalendarDay';

export default DailyCodingChallengeCalendarDay;
