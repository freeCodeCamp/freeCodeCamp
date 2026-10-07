"use strict";
exports.intervalToDuration = intervalToDuration;
var _index = require("./_lib/normalizeInterval.cjs");
var _index2 = require("./add.cjs");
var _index3 = require("./differenceInDays.cjs");
var _index4 = require("./differenceInHours.cjs");
var _index5 = require("./differenceInMinutes.cjs");
var _index6 = require("./differenceInMonths.cjs");
var _index7 = require("./differenceInSeconds.cjs");
var _index8 = require("./differenceInYears.cjs");

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
function intervalToDuration(interval, options) {
  const { start, end } = (0, _index.normalizeInterval)(options?.in, interval);
  const duration = {};

  const years = (0, _index8.differenceInYears)(end, start);
  if (years) duration.years = years;

  const remainingMonths = (0, _index2.add)(start, { years: duration.years });
  const months = (0, _index6.differenceInMonths)(end, remainingMonths);
  if (months) duration.months = months;

  const remainingDays = (0, _index2.add)(remainingMonths, {
    months: duration.months,
  });
  const days = (0, _index3.differenceInDays)(end, remainingDays);
  if (days) duration.days = days;

  const remainingHours = (0, _index2.add)(remainingDays, {
    days: duration.days,
  });
  const hours = (0, _index4.differenceInHours)(end, remainingHours);
  if (hours) duration.hours = hours;

  const remainingMinutes = (0, _index2.add)(remainingHours, {
    hours: duration.hours,
  });
  const minutes = (0, _index5.differenceInMinutes)(end, remainingMinutes);
  if (minutes) duration.minutes = minutes;

  const remainingSeconds = (0, _index2.add)(remainingMinutes, {
    minutes: duration.minutes,
  });
  const seconds = (0, _index7.differenceInSeconds)(end, remainingSeconds);
  if (seconds) duration.seconds = seconds;

  return duration;
}
