import { toDate } from "./toDate.js";

/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns An index of the date closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
export function closestIndexTo(dateToCompare, dates) {
  // [TODO] It would be better to return -1 here rather than undefined, as this
  // is how JS behaves, but it would be a breaking change, so we need
  // to consider it for v4.
  const timeToCompare = +toDate(dateToCompare);

  if (isNaN(timeToCompare)) return NaN;

  let result;
  let minDistance;
  dates.forEach((date, index) => {
    const date_ = toDate(date);

    if (isNaN(+date_)) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    const distance = Math.abs(timeToCompare - +date_);
    if (result == null || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });

  return result;
}

// Fallback for modularized imports:
export default closestIndexTo;
