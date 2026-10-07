import type { Nullable } from '../utils';
/**
 * Parse a cookie date string into a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date | Date}. Parses according to
 * {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.1 | RFC6265 - Section 5.1.1}, not
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse | Date.parse()}.
 *
 * @remarks
 *
 * ### RFC6265 - 5.1.1. Dates
 *
 * The user agent MUST use an algorithm equivalent to the following
 * algorithm to parse a cookie-date.  Note that the various boolean
 * flags defined as a part of the algorithm (i.e., found-time, found-
 * day-of-month, found-month, found-year) are initially "not set".
 *
 * 1.  Using the grammar below, divide the cookie-date into date-tokens.
 *
 * ```
 *     cookie-date     = *delimiter date-token-list *delimiter
 *     date-token-list = date-token *( 1*delimiter date-token )
 *     date-token      = 1*non-delimiter
 *
 *     delimiter       = %x09 / %x20-2F / %x3B-40 / %x5B-60 / %x7B-7E
 *     non-delimiter   = %x00-08 / %x0A-1F / DIGIT / ":" / ALPHA / %x7F-FF
 *     non-digit       = %x00-2F / %x3A-FF
 *
 *     day-of-month    = 1*2DIGIT ( non-digit *OCTET )
 *     month           = ( "jan" / "feb" / "mar" / "apr" /
 *                        "may" / "jun" / "jul" / "aug" /
 *                        "sep" / "oct" / "nov" / "dec" ) *OCTET
 *     year            = 2*4DIGIT ( non-digit *OCTET )
 *     time            = hms-time ( non-digit *OCTET )
 *     hms-time        = time-field ":" time-field ":" time-field
 *     time-field      = 1*2DIGIT
 * ```
 *
 * 2. Process each date-token sequentially in the order the date-tokens
 *     appear in the cookie-date:
 *
 *     1. If the found-time flag is not set and the token matches the
 *         time production, set the found-time flag and set the hour-
 *         value, minute-value, and second-value to the numbers denoted
 *         by the digits in the date-token, respectively.  Skip the
 *         remaining sub-steps and continue to the next date-token.
 *
 *     2. If the found-day-of-month flag is not set and the date-token
 *         matches the day-of-month production, set the found-day-of-
 *         month flag and set the day-of-month-value to the number
 *         denoted by the date-token.  Skip the remaining sub-steps and
 *         continue to the next date-token.
 *
 *     3. If the found-month flag is not set and the date-token matches
 *         the month production, set the found-month flag and set the
 *         month-value to the month denoted by the date-token.  Skip the
 *         remaining sub-steps and continue to the next date-token.
 *
 *     4. If the found-year flag is not set and the date-token matches
 *         the year production, set the found-year flag and set the
 *         year-value to the number denoted by the date-token.  Skip the
 *         remaining sub-steps and continue to the next date-token.
 *
 *  3. If the year-value is greater than or equal to 70 and less than or
 *      equal to 99, increment the year-value by 1900.
 *
 *  4. If the year-value is greater than or equal to 0 and less than or
 *      equal to 69, increment the year-value by 2000.
 *
 *      1. NOTE: Some existing user agents interpret two-digit years differently.
 *
 *  5. Abort these steps and fail to parse the cookie-date if:
 *
 *      - at least one of the found-day-of-month, found-month, found-
 *          year, or found-time flags is not set,
 *
 *      - the day-of-month-value is less than 1 or greater than 31,
 *
 *      - the year-value is less than 1601,
 *
 *      - the hour-value is greater than 23,
 *
 *      - the minute-value is greater than 59, or
 *
 *      - the second-value is greater than 59.
 *
 *      (Note that leap seconds cannot be represented in this syntax.)
 *
 *  6. Let the parsed-cookie-date be the date whose day-of-month, month,
 *      year, hour, minute, and second (in UTC) are the day-of-month-
 *      value, the month-value, the year-value, the hour-value, the
 *      minute-value, and the second-value, respectively.  If no such
 *      date exists, abort these steps and fail to parse the cookie-date.
 *
 *  7. Return the parsed-cookie-date as the result of this algorithm.
 *
 * @example
 * ```
 * parseDate('Wed, 09 Jun 2021 10:18:14 GMT')
 * ```
 *
 * @param cookieDate - the cookie date string
 * @public
 */
export declare function parseDate(cookieDate: Nullable<string>): Date | undefined;
