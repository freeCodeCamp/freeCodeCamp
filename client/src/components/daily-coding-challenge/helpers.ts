import { parse, isValid, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

interface formatDateProps {
  month: number;
  day: number;
  year: number;
}

// Format month, day, and year as "YYYY-MM-DD" with leading zeros
export function formatDate({ year, month, day }: formatDateProps) {
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Returns the current US Central date in yyyy-MM-dd
export function getTodayUsCentral(dateObj: Date = new Date()) {
  const zonedDate = toZonedTime(dateObj, 'America/Chicago');
  return format(zonedDate, 'yyyy-MM-dd');
}

const LAST_DAY_OF_NEW_DAILY_CHALLENGES = '2026-08-10';

export function lastDailyChallengeIsReleased() {
  return getTodayUsCentral() > LAST_DAY_OF_NEW_DAILY_CHALLENGES;
}

// Validate that dateString is in the format yyyy-MM-dd
// Leading zero's are accepted for single digit month/day
export function isValidDateString(dateString: string) {
  const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
  return isValid(parsedDate);
}

// Check if string is valid "MM-DD"
export function isValidMonthDayString(dayString: string) {
  if (!/^\d{2}-\d{2}$/.test(dayString)) {
    return false;
  }

  const [month, day] = dayString.split('-').map(Number) as [number, number];

  // 2000 is a leap year, so it keeps Feb 29 instead of rolling it over.
  const date = new Date(Date.UTC(2000, month - 1, day));
  // Date.UTC silently rolls over out-of-range values - this catches that.
  return date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

// Validate is "yyyy-MM-dd" or "MM-DD"
export function isValidDateOrMonthDayString(dateOrDayString: string) {
  return (
    isValidDateString(dateOrDayString) || isValidMonthDayString(dateOrDayString)
  );
}

// Get "MM-DD" from "yyyy-MM-dd" or "MM-DD" + map Feb 29 to Feb 28
export function toMonthDay(dateOrDayString: string) {
  const monthDay = isValidDateString(dateOrDayString)
    ? dateOrDayString.slice(5)
    : dateOrDayString;
  return monthDay === '02-29' ? '02-28' : monthDay;
}

// Get "MM-DD" today US Central
export function getMonthDayUsCentral() {
  return toMonthDay(getTodayUsCentral());
}

// Convert yyyy-MM-dd or MM-DD to display format (e.g: "January 1")
export function formatDisplayDate(dateString: string) {
  const monthDay = toMonthDay(dateString);
  const parsedDate = parse(monthDay, 'MM-dd', new Date(2000, 0, 1));
  if (!isValid(parsedDate)) {
    return 'Invalid date';
  }
  return format(parsedDate, 'MMMM d');
}

export function truncate(str: string, maxLength = 35) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
}
