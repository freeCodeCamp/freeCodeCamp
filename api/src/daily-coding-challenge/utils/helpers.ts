import { getTimezoneOffset } from 'date-fns-tz';

/**
 * @returns Now US Central time.
 */
export function getNowUsCentral() {
  const offset = getTimezoneOffset('America/Chicago', new Date());
  return new Date(Date.now() + offset);
}

/**
 * Returns a Date object set to UTC midnight of the given date.
 * @param date - Date Object.
 * @returns UTC midnight of the given date.
 */
export function getUtcMidnight(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
}

/**
 * Parses a date string in the format "YYYY-MM-DD" and returns a Date object set to UTC midnight.
 * Returns null if the input is not in the correct format.
 * @param dateStr - Date string in "YYYY-MM-DD" format.
 * @returns Date object set to UTC midnight or null if invalid.
 */
export function dateStringToUtcMidnight(dateStr: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return null;
  }

  const [year, month, day] = dateStr.split('-').map(Number) as [
    number,
    number,
    number
  ];

  return new Date(Date.UTC(year, month - 1, day));
}

/**
 * Parses a date string in the format "MM-DD" and returns a UTC-midnight date
 * with a placeholder year.
 * @param monthDayStr - Date string in "MM-DD" format.
 * @returns Date object set to UTC midnight (placeholder year) or null if invalid.
 */
export function monthDayStringToUtcDate(monthDayStr: string): Date | null {
  if (!/^\d{2}-\d{2}$/.test(monthDayStr)) {
    return null;
  }

  const [month, day] = monthDayStr.split('-').map(Number) as [number, number];

  // 2000 is a leap year, so Date.UTC keeps "02-29" as Feb 29 instead of
  // silently rolling it over to Mar 1 the way a non-leap year would.
  const date = new Date(Date.UTC(2000, month - 1, day));

  // Date.UTC silently rolls over out-of-range values (e.g. month 13, or
  // day 45) instead of rejecting them - this catches that.
  if (date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return null;
  }

  return date;
}

// A single year of challenges from 2025-08-11 - 2026-08-10 was created.
const CYCLE_START_MONTH = 8; // August
const CYCLE_START_DAY = 11;
const CYCLE_START_YEAR = 2025; // Aug 11 - Dec 31 portion of the source range
const CYCLE_END_YEAR = 2026; // Jan 1 - Aug 10 portion of the source range

/**
 * Maps any UTC-midnight date to the equivalent date within the real
 * challenge range (2025-08-11 - 2026-08-10), matching on month/day.
 * @param date - UTC-midnight date.
 * @returns UTC-midnight date within the source challenge range.
 */
export function getSourceDate(date: Date): Date {
  const month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();

  // Feb 29 doesn't exist in the source range (2026 is not a leap year).
  // So we show the Feb 28 challenge for Feb 29 requests.
  if (month === 2 && day === 29) {
    day = 28;
  }

  const isOnOrAfterCycleStart =
    month > CYCLE_START_MONTH ||
    (month === CYCLE_START_MONTH && day >= CYCLE_START_DAY);

  const sourceYear = isOnOrAfterCycleStart ? CYCLE_START_YEAR : CYCLE_END_YEAR;

  return new Date(Date.UTC(sourceYear, month - 1, day));
}
