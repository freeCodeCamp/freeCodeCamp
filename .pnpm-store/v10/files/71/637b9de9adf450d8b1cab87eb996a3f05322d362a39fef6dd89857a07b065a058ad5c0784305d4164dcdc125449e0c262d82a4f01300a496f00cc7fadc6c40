import { constructFrom } from "./constructFrom.js";
import { constructNow } from "./constructNow.js";
import { isSameQuarter } from "./isSameQuarter.js";

/**
 * The {@link isThisQuarter} function options.
 */

/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
export function isThisQuarter(date, options) {
  return isSameQuarter(
    constructFrom(options?.in || date, date),
    constructNow(options?.in || date),
  );
}

// Fallback for modularized imports:
export default isThisQuarter;
