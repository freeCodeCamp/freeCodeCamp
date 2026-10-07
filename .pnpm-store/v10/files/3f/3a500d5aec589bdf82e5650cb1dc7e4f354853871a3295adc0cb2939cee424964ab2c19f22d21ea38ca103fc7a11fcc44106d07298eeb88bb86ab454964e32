"use strict";
exports.isThisHour = isThisHour;
var _index = require("./constructNow.cjs");
var _index2 = require("./isSameHour.cjs");
var _index3 = require("./toDate.cjs");

/**
 * The {@link isThisHour} function options.
 */

/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour(date, options) {
  return (0, _index2.isSameHour)(
    (0, _index3.toDate)(date, options?.in),
    (0, _index.constructNow)(options?.in || date),
  );
}
