import { constructFrom } from "./constructFrom.js";
import { differenceInCalendarDays } from "./differenceInCalendarDays.js";
import { startOfISOWeekYear } from "./startOfISOWeekYear.js";
import { toDate } from "./toDate.js";

/**
 * The {@link setISOWeekYear} function options.
 */

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param weekYear - The ISO week-numbering year of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
export function setISOWeekYear(date, weekYear, options) {
  let _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(
    _date,
    startOfISOWeekYear(_date, options),
  );
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(weekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  _date = startOfISOWeekYear(fourthOfJanuary);
  _date.setDate(_date.getDate() + diff);
  return _date;
}

// Fallback for modularized imports:
export default setISOWeekYear;
