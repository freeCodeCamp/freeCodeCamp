/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */
/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
export declare const daysInWeek = 7;
/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
export declare const daysInYear = 365.2425;
/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
export declare const maxTime: number;
/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
export declare const minTime: number;
/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
export declare const millisecondsInWeek = 604800000;
/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
export declare const millisecondsInDay = 86400000;
/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
export declare const millisecondsInMinute = 60000;
/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
export declare const millisecondsInHour = 3600000;
/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
export declare const millisecondsInSecond = 1000;
/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
export declare const minutesInYear = 525600;
/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
export declare const minutesInMonth = 43200;
/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
export declare const minutesInDay = 1440;
/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
export declare const minutesInHour = 60;
/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
export declare const monthsInQuarter = 3;
/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
export declare const monthsInYear = 12;
/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
export declare const quartersInYear = 4;
/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
export declare const secondsInHour = 3600;
/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
export declare const secondsInMinute = 60;
/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
export declare const secondsInDay: number;
/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
export declare const secondsInWeek: number;
/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
export declare const secondsInYear: number;
/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
export declare const secondsInMonth: number;
/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
export declare const secondsInQuarter: number;
/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
export declare const constructFromSymbol: unique symbol;
