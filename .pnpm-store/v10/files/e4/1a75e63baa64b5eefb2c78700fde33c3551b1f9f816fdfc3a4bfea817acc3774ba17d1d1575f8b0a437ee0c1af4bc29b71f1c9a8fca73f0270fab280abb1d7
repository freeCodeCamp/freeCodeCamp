"use strict";
exports.setDate = setDate;
var _index = require("./toDate.cjs");

/**
 * The {@link setDate} function options.
 */

/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param dayOfMonth - The day of the month of the new date
 * @param options - The options
 *
 * @returns The new date with the day of the month set
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate(date, dayOfMonth, options) {
  const _date = (0, _index.toDate)(date, options?.in);
  _date.setDate(dayOfMonth);
  return _date;
}
