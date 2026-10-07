"use strict";
exports.lastDayOfISOWeekYear = lastDayOfISOWeekYear;
var _index = require("./constructFrom.cjs");
var _index2 = require("./getISOWeekYear.cjs");
var _index3 = require("./startOfISOWeek.cjs");

/**
 * The {@link lastDayOfISOWeekYear} function options.
 */

/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * const result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOWeekYear(date, options) {
  const year = (0, _index2.getISOWeekYear)(date, options);
  const fourthOfJanuary = (0, _index.constructFrom)(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);

  const date_ = (0, _index3.startOfISOWeek)(fourthOfJanuary, options);
  date_.setDate(date_.getDate() - 1);
  return date_;
}
