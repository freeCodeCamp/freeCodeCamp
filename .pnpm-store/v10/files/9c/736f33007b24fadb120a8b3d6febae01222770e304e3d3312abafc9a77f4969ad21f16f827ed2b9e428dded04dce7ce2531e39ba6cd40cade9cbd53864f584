"use strict";
exports.milliseconds = milliseconds;
var _index = require("./constants.cjs");

/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * @returns The milliseconds
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */
function milliseconds({ years, months, weeks, days, hours, minutes, seconds }) {
  let totalDays = 0;

  if (years) totalDays += years * _index.daysInYear;
  if (months) totalDays += months * (_index.daysInYear / 12);
  if (weeks) totalDays += weeks * 7;
  if (days) totalDays += days;

  let totalSeconds = totalDays * 24 * 60 * 60;

  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;

  return Math.trunc(totalSeconds * 1000);
}
