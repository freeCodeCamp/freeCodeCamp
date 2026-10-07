"use strict";
exports.differenceInISOWeekYears = differenceInISOWeekYears;
var _index = require("./_lib/normalizeDates.cjs");
var _index2 = require("./compareAsc.cjs");
var _index3 = require("./differenceInCalendarISOWeekYears.cjs");
var _index4 = require("./subISOWeekYears.cjs");

/**
 * The {@link differenceInISOWeekYears} function options.
 */

/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * // => 1
 */
function differenceInISOWeekYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = (0, _index.normalizeDates)(
    options?.in,
    laterDate,
    earlierDate,
  );

  const sign = (0, _index2.compareAsc)(laterDate_, earlierDate_);
  const diff = Math.abs(
    (0, _index3.differenceInCalendarISOWeekYears)(
      laterDate_,
      earlierDate_,
      options,
    ),
  );

  const adjustedDate = (0, _index4.subISOWeekYears)(
    laterDate_,
    sign * diff,
    options,
  );

  const isLastISOWeekYearNotFull = Number(
    (0, _index2.compareAsc)(adjustedDate, earlierDate_) === -sign,
  );
  const result = sign * (diff - isLastISOWeekYearNotFull);

  // Prevent negative zero
  return result === 0 ? 0 : result;
}
