export { escapeStringForRegex } from '../vendor/escapeStringForRegex';
/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
export declare function truncate(str: string, max?: number): string;
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
export declare function snipLine(line: string, colno: number): string;
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
export declare function safeJoin(input: unknown[], delimiter?: string): string;
/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */
export declare function isMatchingPattern(value: string, pattern: RegExp | string | ((value: string) => boolean), requireExactStringMatch?: boolean): boolean;
/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */
export declare function stringMatchesSomePattern(testString: string, patterns?: Array<string | RegExp | ((value: string) => boolean)> | Set<string | RegExp | ((value: string) => boolean)>, requireExactStringMatch?: boolean): boolean;
//# sourceMappingURL=string.d.ts.map