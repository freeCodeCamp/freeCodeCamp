/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs//90001488-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param duration - The duration to format
 *
 * @returns The ISO 8601 duration string
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */
export function formatISODuration(duration) {
  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
}

// Fallback for modularized imports:
export default formatISODuration;
