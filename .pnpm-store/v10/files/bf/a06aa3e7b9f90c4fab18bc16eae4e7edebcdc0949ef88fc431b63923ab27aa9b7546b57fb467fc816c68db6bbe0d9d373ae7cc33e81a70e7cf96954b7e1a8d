import { getTimezoneOffsetInMilliseconds } from "./_lib/getTimezoneOffsetInMilliseconds.js";
import { normalizeDates } from "./_lib/normalizeDates.js";
import { millisecondsInWeek } from "./constants.js";
import { startOfWeek } from "./startOfWeek.js";

/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
export function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfWeek = startOfWeek(laterDate_, options);
  const earlierStartOfWeek = startOfWeek(earlierDate_, options);

  const laterTimestamp =
    +laterStartOfWeek - getTimezoneOffsetInMilliseconds(laterStartOfWeek);
  const earlierTimestamp =
    +earlierStartOfWeek - getTimezoneOffsetInMilliseconds(earlierStartOfWeek);

  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInWeek);
}

// Fallback for modularized imports:
export default differenceInCalendarWeeks;
