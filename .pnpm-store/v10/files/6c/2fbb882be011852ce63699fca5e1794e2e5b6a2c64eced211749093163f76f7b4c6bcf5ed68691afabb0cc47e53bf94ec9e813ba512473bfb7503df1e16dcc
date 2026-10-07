import type {
  DateArg,
  Day,
  Era,
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  Month,
  Quarter,
  WeekOptions,
} from "../types.js";
/**
 * The locale object with all functions and data needed to parse and format
 * dates. This is what each locale implements and exports.
 */
export interface Locale {
  /** The locale code (ISO 639-1 + optional country code) */
  code: string;
  /** The function to format distance */
  formatDistance: FormatDistanceFn;
  /** The function to relative time */
  formatRelative: FormatRelativeFn;
  /** The object with functions used to localize various values */
  localize: Localize;
  /** The object with functions that return localized formats */
  formatLong: FormatLong;
  /** The object with functions used to match and parse various localized values */
  match: Match;
  /** An object with locale options */
  options?: LocaleOptions;
}
/**
 * The locale options.
 */
export interface LocaleOptions
  extends WeekOptions,
    FirstWeekContainsDateOptions {}
/**
 * The function that takes a token (i.e. halfAMinute) passed by `formatDistance`
 * or `formatDistanceStrict` and payload, and returns localized distance.
 *
 * @param token - The token to localize
 * @param count - The distance number
 * @param options - The object with options
 *
 * @returns The localized distance in words
 */
export type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: FormatDistanceFnOptions,
) => string;
/**
 * The {@link FormatDistanceFn} function options.
 */
export interface FormatDistanceFnOptions {
  /** Add "X ago"/"in X" in the locale language */
  addSuffix?: boolean;
  /** The distance vector. -1 represents past and 1 future. Tells which suffix
   * to use. */
  comparison?: -1 | 0 | 1;
}
/**
 * The function used inside the {@link FormatDistanceFn} function, implementing
 * formatting for a particular token.
 */
export type FormatDistanceTokenFn = (
  /** The distance as number to format */
  count: number,
  /** The object with options */
  options?: FormatDistanceFnOptions,
) => string;
/**
 * The tokens map to string templates used in the format distance function.
 * It looks like this:
 *
 *   const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
 *     lessThanXSeconds: 'តិចជាង {{count}} វិនាទី',
 *     xSeconds: '{{count}} វិនាទី',
 *     // ...
 *   }
 *
 * @typeParam Template - The property value type.
 */
export type FormatDistanceLocale<Template> = {
  [Token in FormatDistanceToken]: Template;
};
/**
 * The token used in the format distance function. Represents the distance unit
 * with prespecified precision.
 */
export type FormatDistanceToken =
  | "lessThanXSeconds"
  | "xSeconds"
  | "halfAMinute"
  | "lessThanXMinutes"
  | "xMinutes"
  | "aboutXHours"
  | "xHours"
  | "xDays"
  | "aboutXWeeks"
  | "xWeeks"
  | "aboutXMonths"
  | "xMonths"
  | "aboutXYears"
  | "xYears"
  | "overXYears"
  | "almostXYears";
/**
 * The locale function that does the work for the `formatRelative` function.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param token - The token to localize
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - The object with options
 *
 * @returns The localized relative date format
 */
export type FormatRelativeFn = <DateType extends Date>(
  token: FormatRelativeToken,
  date: DateType,
  baseDate: DateType,
  options?: FormatRelativeFnOptions,
) => string;
/**
 * The {@link FormatRelativeFn} function options.
 */
export interface FormatRelativeFnOptions
  extends WeekOptions,
    LocalizedOptions<"options" | "formatRelative"> {}
/**
 * The locale function used inside the {@link FormatRelativeFn} function
 * implementing formatting for a particular token.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - The object with options
 */
export type FormatRelativeTokenFn = <DateType extends Date>(
  date: DateArg<DateType>,
  baseDate: DateArg<DateType>,
  options?: FormatRelativeTokenFnOptions,
) => string;
/**
 * The {@link FormatRelativeTokenFn} function options.
 */
export interface FormatRelativeTokenFnOptions extends WeekOptions {}
/**
 * The token used in format relative function. Represents the time unit.
 */
export type FormatRelativeToken =
  | "lastWeek"
  | "yesterday"
  | "today"
  | "tomorrow"
  | "nextWeek"
  | "other";
/**
 * A format part that represents a token or string literal, used by format parser/tokenizer
 */
export interface FormatPart {
  /** If the part is a format token. */
  isToken: boolean;
  /** The format part value (i.e. `"do"`). */
  value: string;
}
/**
 * The object with functions used to localize various values. Part of the public
 * locale API.
 */
export interface Localize {
  /** The function that localizes an ordinal number */
  ordinalNumber: LocalizeFn<number>;
  /** The function that localized the era */
  era: LocalizeFn<Era>;
  /** The function that localizes the quarter */
  quarter: LocalizeFn<Quarter>;
  /** The function that localizes the month */
  month: LocalizeFn<Month>;
  /** The function that localizes the day of the week */
  day: LocalizeFn<Day>;
  /** The function that localizes the day period */
  dayPeriod: LocalizeFn<LocaleDayPeriod>;
  /** The function that can preprocess parts/tokens **/
  preprocessor?: <DateType extends Date>(
    date: DateType,
    parts: FormatPart[],
  ) => FormatPart[];
}
/**
 * Individual localize function. Part of {@link Localize}.
 *
 * @typeParam Value - The value type to localize.
 *
 * @param value - The value to localize
 * @param options - The object with options
 *
 * @returns The localized string
 */
export type LocalizeFn<Value extends LocaleUnitValue | number> = (
  value: Value,
  options?: LocalizeFnOptions,
) => string;
/**
 * The {@link LocalizeFn} function options.
 */
export interface LocalizeFnOptions {
  /** The width to use formatting the value, defines how short or long
   * the formatted string might be. */
  width?: LocaleWidth;
  /** The context where the formatted value is used - standalone: the result
   * should make grammatical sense as is and formatting: the result is a part
   * of the formatted string. See: https://date-fns.org/docs/I18n-Contribution-Guide */
  context?: "formatting" | "standalone";
  /** The unit to format */
  unit?: LocaleUnit;
}
/**
 * The object with functions used to match and parse various localized values.
 */
export interface Match {
  /** The function that parses a localized ordinal number. */
  ordinalNumber: MatchFn<
    number,
    {
      unit: LocaleUnit;
    }
  >;
  /** The function that parses a localized era. */
  era: MatchFn<Era>;
  /** The function that parses a localized quarter. */
  quarter: MatchFn<Quarter>;
  /** The function that parses a localized month. */
  month: MatchFn<Month>;
  /** The function that parses a localized day of the week. */
  day: MatchFn<Day>;
  /** The function that parses a localized time of the day. */
  dayPeriod: MatchFn<LocaleDayPeriod>;
}
/**
 * The match function. Part of {@link Match}. Implements matcher for particular
 * unit type.
 *
 * @typeParam Result - The matched value type.
 * @typeParam ExtraOptions - The the extra options type.
 *
 * @param str - The string to match
 * @param options - The object with options
 *
 * @returns The match result or null if match failed
 */
export type MatchFn<Result, ExtraOptions = Record<string, unknown>> = (
  str: string,
  options?: MatchFnOptions<Result> & ExtraOptions,
) => MatchFnResult<Result> | null;
/**
 * The {@link MatchFn} function options.
 *
 * @typeParam Result - The matched value type.
 */
export interface MatchFnOptions<Result> {
  /** The width to use matching the value, defines how short or long
   * the matched string might be. */
  width?: LocaleWidth;
  /**
   * @deprecated Map the value manually instead.
   * @example
   * const matchResult = locale.match.ordinalNumber('1st')
   * if (matchResult) {
   *   matchResult.value = valueCallback(matchResult.value)
   * }
   */
  valueCallback?: MatchValueCallback<string, Result>;
}
/**
 * The function that allows to map the matched value to the actual type.
 *
 * @typeParam Arg - The argument type.
 * @typeParam Result - The matched value type.
 *
 * @param arg - The value to match
 *
 * @returns The matched value
 */
export type MatchValueCallback<Arg, Result> = (value: Arg) => Result;
/**
 * The {@link MatchFn} function result.
 *
 * @typeParam Result - The matched value type.
 */
export interface MatchFnResult<Result> {
  /** The matched value parsed as the corresponding unit type */
  value: Result;
  /** The remaining string after parsing */
  rest: string;
}
/**
 * The object with functions that return localized formats. Long stands for
 * sequence of tokens (i.e. PPpp) that allows to define how format both date
 * and time at once. Part of the public locale API.
 */
export interface FormatLong {
  /** The function that returns a localized long date format */
  date: FormatLongFn;
  /** The function that returns a localized long time format */
  time: FormatLongFn;
  /** The function that returns a localized format of date and time combined */
  dateTime: FormatLongFn;
}
/**
 * The format long function. Formats date, time or both.
 *
 * @param options - The object with options
 *
 * @returns The localized string
 */
export type FormatLongFn = (options: FormatLongFnOptions) => string;
/**
 * The {@link FormatLongFn} function options.
 */
export interface FormatLongFnOptions {
  /** Format width to set */
  width?: FormatLongWidth;
}
/**
 * The format long width token, defines how short or long the formnatted value
 * might be. The actual result length is defined by the locale.
 */
export type FormatLongWidth = "full" | "long" | "medium" | "short" | "any";
/**
 * The formatting unit value, represents the raw value that can be formatted.
 */
export type LocaleUnitValue = Era | Quarter | Month | Day | LocaleDayPeriod;
/**
 * The format width. Defines how short or long the formatted string might be.
 * The actual result length depends on the locale.
 */
export type LocaleWidth = "narrow" | "short" | "abbreviated" | "wide" | "any";
/**
 * Token representing particular period of the day.
 */
export type LocaleDayPeriod =
  | "am"
  | "pm"
  | "midnight"
  | "noon"
  | "morning"
  | "afternoon"
  | "evening"
  | "night";
/**
 * The units commonly used in the date formatting or parsing.
 */
export type LocaleUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "dayOfYear"
  | "date"
  | "week"
  | "month"
  | "quarter"
  | "year";
