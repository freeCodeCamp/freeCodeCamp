import toDate from "../toDate/index.js";
import requiredArgs from "../_lib/requiredArgs/index.js";
/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
export default function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}