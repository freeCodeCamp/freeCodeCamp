import { normalizeDates } from "./_lib/normalizeDates.js";
import { closestIndexTo } from "./closestIndexTo.js";
import { constructFrom } from "./constructFrom.js";

/**
 * The {@link closestTo} function options.
 */

/**
 * The {@link closestTo} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateToCompare - Date to compare argument type.
 * @typeParam DatesType - Dates array argument type.
 * @typeParam Options - Options type.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
export function closestTo(dateToCompare, dates, options) {
  const [dateToCompare_, ...dates_] = normalizeDates(
    options?.in,
    dateToCompare,
    ...dates,
  );

  const index = closestIndexTo(dateToCompare_, dates_);

  if (typeof index === "number" && isNaN(index))
    return constructFrom(dateToCompare_, NaN);

  if (index !== undefined) return dates_[index];
}

// Fallback for modularized imports:
export default closestTo;
