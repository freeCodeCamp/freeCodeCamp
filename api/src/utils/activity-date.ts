/**
 * Checks whether a timezone is supported by Intl.
 * @param timezone IANA timezone name.
 * @returns Whether the timezone is valid.
 */
export function isValidTimeZone(timezone: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: timezone }).format();
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets the calendar date for an instant in a timezone.
 * @param date Instant to convert.
 * @param timezone IANA timezone name.
 * @returns Date in YYYY-MM-DD format.
 */
export function getActivityDate(date: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}
