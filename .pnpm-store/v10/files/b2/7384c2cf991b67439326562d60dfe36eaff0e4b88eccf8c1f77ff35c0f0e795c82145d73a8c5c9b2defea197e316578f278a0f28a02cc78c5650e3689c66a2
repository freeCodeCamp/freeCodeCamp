import { normalizeDates } from "./_lib/normalizeDates.js";
import { addDays } from "./addDays.js";
import { differenceInCalendarDays } from "./differenceInCalendarDays.js";
import { isSameDay } from "./isSameDay.js";
import { isValid } from "./isValid.js";
import { isWeekend } from "./isWeekend.js";

/**
 * The {@link differenceInBusinessDays} function options.
 */

/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that aren't in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of business days
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 30 November 2021 and 1 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 30),
 *   new Date(2021, 10, 1)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> -22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */
export function differenceInBusinessDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  if (!isValid(laterDate_) || !isValid(earlierDate_)) return NaN;

  const diff = differenceInCalendarDays(laterDate_, earlierDate_);
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);

  let result = weeks * 5;
  let movingDate = addDays(earlierDate_, weeks * 7);

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!isSameDay(laterDate_, movingDate)) {
    // sign is used to account for both negative and positive differences
    result += isWeekend(movingDate, options) ? 0 : sign;
    movingDate = addDays(movingDate, sign);
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Fallback for modularized imports:
export default differenceInBusinessDays;
