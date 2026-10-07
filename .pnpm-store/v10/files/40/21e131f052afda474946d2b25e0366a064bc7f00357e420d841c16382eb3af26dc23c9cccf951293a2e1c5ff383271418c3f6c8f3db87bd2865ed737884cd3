/**
 * @name getTimezoneOffset
 * @category Time Zone Helpers
 * @summary Gets the offset in milliseconds between the time zone and Universal Coordinated Time (UTC)
 *
 * @description
 * Returns the time zone offset from UTC time in milliseconds for IANA time zones as well
 * as other time zone offset string formats.
 *
 * For time zones where daylight savings time is applicable a `Date` should be passed on
 * the second parameter to ensure the offset correctly accounts for DST at that time of
 * year. When omitted, the current date is used.
 *
 * @param timeZone the time zone of this local time, can be an offset or IANA time zone
 * @param date the date with values representing the local time
 *
 * @example
 * const result = getTimezoneOffset('-07:00')
 *   //=> -18000000 (-7 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('Africa/Johannesburg')
 *   //=> 7200000 (2 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('America/New_York', new Date(2016, 0, 1))
 *   //=> -18000000 (-5 * 60 * 60 * 1000)
 * const result = getTimezoneOffset('America/New_York', new Date(2016, 6, 1))
 *   //=> -14400000 (-4 * 60 * 60 * 1000)
 */
export declare function getTimezoneOffset(timeZone: string, date?: Date | number): number;
