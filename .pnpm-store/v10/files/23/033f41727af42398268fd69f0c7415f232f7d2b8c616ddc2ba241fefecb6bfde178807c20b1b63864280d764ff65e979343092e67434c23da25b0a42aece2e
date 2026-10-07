import { millisecondsInSecond } from "./constants.js";

/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 milliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
export function millisecondsToSeconds(milliseconds) {
  const seconds = milliseconds / millisecondsInSecond;
  return Math.trunc(seconds);
}

// Fallback for modularized imports:
export default millisecondsToSeconds;
