"use strict";
exports.getWeekOfMonth = getWeekOfMonth;
var _index = require("./_lib/defaultOptions.cjs");
var _index2 = require("./getDate.cjs");
var _index3 = require("./getDay.cjs");
var _index4 = require("./startOfMonth.cjs");
var _index5 = require("./toDate.cjs");

/**
 * The {@link getWeekOfMonth} function options.
 */

/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
function getWeekOfMonth(date, options) {
  const defaultOptions = (0, _index.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const currentDayOfMonth = (0, _index2.getDate)(
    (0, _index5.toDate)(date, options?.in),
  );
  if (isNaN(currentDayOfMonth)) return NaN;

  const startWeekDay = (0, _index3.getDay)(
    (0, _index4.startOfMonth)(date, options),
  );

  let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;

  const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
