"use strict";
exports.set = set;
var _index = require("./constructFrom.cjs");
var _index2 = require("./setMonth.cjs");
var _index3 = require("./toDate.cjs");

/**
 * The {@link set} function options.
 */

/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 * @param options - The options
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(date, values, options) {
  let _date = (0, _index3.toDate)(date, options?.in);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) return (0, _index.constructFrom)(options?.in || date, NaN);

  if (values.year != null) _date.setFullYear(values.year);
  if (values.month != null) _date = (0, _index2.setMonth)(_date, values.month);
  if (values.date != null) _date.setDate(values.date);
  if (values.hours != null) _date.setHours(values.hours);
  if (values.minutes != null) _date.setMinutes(values.minutes);
  if (values.seconds != null) _date.setSeconds(values.seconds);
  if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);

  return _date;
}
