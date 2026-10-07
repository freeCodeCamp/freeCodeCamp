import requiredArgs from "../_lib/requiredArgs/index.js";
import previousDay from "../previousDay/index.js";
/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */
export default function previousWednesday(date) {
  requiredArgs(1, arguments);
  return previousDay(date, 3);
}