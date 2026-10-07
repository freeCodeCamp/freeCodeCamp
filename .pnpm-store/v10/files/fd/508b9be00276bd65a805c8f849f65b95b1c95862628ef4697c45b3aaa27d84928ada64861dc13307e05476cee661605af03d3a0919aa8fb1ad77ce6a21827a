"use strict";
exports.startOfYesterday = startOfYesterday;
var _index = require("./constructNow.cjs");

/**
 * The {@link startOfYesterday} function options.
 */

/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday(options) {
  const now = (0, _index.constructNow)(options?.in);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const date = (0, _index.constructNow)(options?.in);
  date.setFullYear(year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
