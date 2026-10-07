"use strict";
exports.setQuarter = setQuarter;
var _index = require("./setMonth.cjs");
var _index2 = require("./toDate.cjs");

/**
 * The {@link setQuarter} function options.
 */

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 * @param options - The options
 *
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(date, quarter, options) {
  const date_ = (0, _index2.toDate)(date, options?.in);
  const oldQuarter = Math.trunc(date_.getMonth() / 3) + 1;
  const diff = quarter - oldQuarter;
  return (0, _index.setMonth)(date_, date_.getMonth() + diff * 3);
}
