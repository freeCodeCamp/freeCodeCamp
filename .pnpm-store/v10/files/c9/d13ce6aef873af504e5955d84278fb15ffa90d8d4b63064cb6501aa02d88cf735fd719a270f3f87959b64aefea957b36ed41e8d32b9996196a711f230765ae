/**
 * @internal
 *
 * Builds a proper UTC HttpDate timestamp from a Date object
 * since not all environments will have this as the expected
 * format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString}
 * - Prior to ECMAScript 2018, the format of the return value
 * - varied according to the platform. The most common return
 * - value was an RFC-1123 formatted date stamp, which is a
 * - slightly updated version of RFC-822 date stamps.
 */
export declare function dateToUtcString(date: Date): string;
/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 3339 date.
 *
 * Input strings must conform to RFC3339 section 5.6, and cannot have a UTC
 * offset. Fractional precision is supported.
 *
 * @see {@link https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export declare const parseRfc3339DateTime: (value: unknown) => Date | undefined;
/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 3339 date.
 *
 * Input strings must conform to RFC3339 section 5.6, and can have a UTC
 * offset. Fractional precision is supported.
 *
 * @see {@link https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export declare const parseRfc3339DateTimeWithOffset: (value: unknown) => Date | undefined;
/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a string that can be parsed
 * as an RFC 7231 IMF-fixdate or obs-date.
 *
 * Input strings must conform to RFC7231 section 7.1.1.1. Fractional seconds are supported.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc7231.html#section-7.1.1.1}
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export declare const parseRfc7231DateTime: (value: unknown) => Date | undefined;
/**
 * @internal
 *
 * Parses a value into a Date. Returns undefined if the input is null or
 * undefined, throws an error if the input is not a number or a parseable string.
 *
 * Input strings must be an integer or floating point number. Fractional seconds are supported.
 *
 * @param value - the value to parse
 * @returns a Date or undefined
 */
export declare const parseEpochTimestamp: (value: unknown) => Date | undefined;
