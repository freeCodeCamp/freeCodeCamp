import React from 'react';
import { Spacer } from '@freecodecamp/ui';
import CalendarDay from './calendar-day';

import './calendar.css';

const now = new Date();

// Month in "02" format (e.g., "02" for February)
const monthNumber = new Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  timeZone: 'America/Chicago'
}).format(now);

// Month in full name format (e.g., "February")
const monthFull = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  timeZone: 'America/Chicago'
}).format(now);

// Month in abbreviated name format (e.g., "Feb")
// const monthShort = new Intl.DateTimeFormat('en-US', {
//   month: 'short',
//   timeZone: 'America/Chicago'
// }).format(now);

// Year in "YYYY" format (e.g., "2025")
const year = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  timeZone: 'America/Chicago'
}).format(now);

// Day of the week in full name (e.g., "Friday")
// const dayOfWeekFull = new Intl.DateTimeFormat('en-US', {
//   weekday: 'long',
//   timeZone: 'America/Chicago'
// }).format(now);

// Day of the week in abbreviated name (e.g., "Fri")
// const dayOfWeekShort = new Intl.DateTimeFormat('en-US', {
//   weekday: 'short',
//   timeZone: 'America/Chicago'
// }).format(now);

// Day of the week in the first two letters (e.g., "Fr")
// const dayOfWeekMin = dayOfWeekShort.slice(0, 2); // First 2 letters, e.g., Mo, Tu

// Day of the month in "DD" format (e.g., "28")
// const dayNumber = new Intl.DateTimeFormat('en-US', {
//   day: '2-digit',
//   timeZone: 'America/Chicago'
// }).format(now);

// Day of the week as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeekNumber = new Date(now).getDay();

// Total number of days in the current month (e.g., 28 for February)
const yearNumber = parseInt(year, 10);
const monthIndex = parseInt(monthNumber, 10) - 1; // JS months are 0-based
const daysInMonth = new Date(yearNumber, monthIndex + 1, 0).getDate();

function DailyCodingChallengeCalendar(): JSX.Element {
  const days: JSX.Element[] = [];
  for (let i = 0; i <= dayOfWeekNumber; i++) {
    days.push(<CalendarDay key={i} dayNumber={0} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <CalendarDay
        key={day}
        dayNumber={day}
        isCompleted={day > 20}
        isAvailable={true}
      />
    );
  }

  return (
    <>
      <h2 className='text-center'>{monthFull}</h2>
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
      <div className='calendar-grid'>{days}</div>
    </>
  );
}

DailyCodingChallengeCalendar.displayName = 'DailyCodingChallengeCalendar';

export default DailyCodingChallengeCalendar;
