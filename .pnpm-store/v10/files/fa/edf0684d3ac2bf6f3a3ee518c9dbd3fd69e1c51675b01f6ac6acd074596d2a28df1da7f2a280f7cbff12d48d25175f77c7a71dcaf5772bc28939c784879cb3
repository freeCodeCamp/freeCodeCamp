import { getTimezoneOffsetInMilliseconds } from "./_lib/getTimezoneOffsetInMilliseconds.js";
import { normalizeDates } from "./_lib/normalizeDates.js";
import { millisecondsInWeek } from "./constants.js";
import { startOfISOWeek } from "./startOfISOWeek.js";

/**
 * The {@link differenceInCalendarISOWeeks} function options.
 */

/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6),
 * );
 * //=> 3
 */
export function differenceInCalendarISOWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const startOfISOWeekLeft = startOfISOWeek(laterDate_);
  const startOfISOWeekRight = startOfISOWeek(earlierDate_);

  const timestampLeft =
    +startOfISOWeekLeft - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
  const timestampRight =
    +startOfISOWeekRight - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / millisecondsInWeek);
}

// Fallback for modularized imports:
export default differenceInCalendarISOWeeks;
