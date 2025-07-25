import { toZonedTime } from 'date-fns-tz';

/**
 * @returns Now US Central time.
 */
export function getNowUsCentral() {
  return toZonedTime(new Date(), 'America/Chicago');
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
