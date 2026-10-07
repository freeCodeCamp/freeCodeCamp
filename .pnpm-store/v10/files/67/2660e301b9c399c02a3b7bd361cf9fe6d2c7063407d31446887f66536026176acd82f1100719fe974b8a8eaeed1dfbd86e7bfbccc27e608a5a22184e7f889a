"use strict";
exports.isThisQuarter = isThisQuarter;
var _index = require("./constructFrom.cjs");
var _index2 = require("./constructNow.cjs");
var _index3 = require("./isSameQuarter.cjs");

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
function isThisQuarter(date, options) {
  return (0, _index3.isSameQuarter)(
    (0, _index.constructFrom)(options?.in || date, date),
    (0, _index2.constructNow)(options?.in || date),
  );
}
