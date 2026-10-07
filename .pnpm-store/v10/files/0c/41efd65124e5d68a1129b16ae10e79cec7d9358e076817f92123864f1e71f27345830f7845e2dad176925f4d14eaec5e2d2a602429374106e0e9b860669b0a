import { constructFrom } from "./constructFrom.js";
import { getISOWeekYear } from "./getISOWeekYear.js";
import { startOfISOWeek } from "./startOfISOWeek.js";

/**
 * The {@link endOfISOWeekYear} function options.
 */

/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
export function endOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuaryOfNextYear = constructFrom(options?.in || date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const _date = startOfISOWeek(fourthOfJanuaryOfNextYear, options);
  _date.setMilliseconds(_date.getMilliseconds() - 1);
  return _date;
}

// Fallback for modularized imports:
export default endOfISOWeekYear;
