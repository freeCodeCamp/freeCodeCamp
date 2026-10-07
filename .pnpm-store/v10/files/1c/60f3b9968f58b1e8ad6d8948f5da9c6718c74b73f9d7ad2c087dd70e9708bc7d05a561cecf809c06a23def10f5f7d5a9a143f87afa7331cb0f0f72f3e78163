import { normalizeInterval } from "./_lib/normalizeInterval.js";
import { add } from "./add.js";
import { differenceInDays } from "./differenceInDays.js";
import { differenceInHours } from "./differenceInHours.js";
import { differenceInMinutes } from "./differenceInMinutes.js";
import { differenceInMonths } from "./differenceInMonths.js";
import { differenceInSeconds } from "./differenceInSeconds.js";
import { differenceInYears } from "./differenceInYears.js";

/**
 * The {@link intervalToDuration} function options.
 */

/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert an interval object to a duration object.
 *
 * @param interval - The interval to convert to duration
 * @param options - The context options
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * });
 * //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
export function intervalToDuration(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  const duration = {};

  const years = differenceInYears(end, start);
  if (years) duration.years = years;

  const remainingMonths = add(start, { years: duration.years });
  const months = differenceInMonths(end, remainingMonths);
  if (months) duration.months = months;

  const remainingDays = add(remainingMonths, { months: duration.months });
  const days = differenceInDays(end, remainingDays);
  if (days) duration.days = days;

  const remainingHours = add(remainingDays, { days: duration.days });
  const hours = differenceInHours(end, remainingHours);
  if (hours) duration.hours = hours;

  const remainingMinutes = add(remainingHours, { hours: duration.hours });
  const minutes = differenceInMinutes(end, remainingMinutes);
  if (minutes) duration.minutes = minutes;

  const remainingSeconds = add(remainingMinutes, { minutes: duration.minutes });
  const seconds = differenceInSeconds(end, remainingSeconds);
  if (seconds) duration.seconds = seconds;

  return duration;
}

// Fallback for modularized imports:
export default intervalToDuration;
