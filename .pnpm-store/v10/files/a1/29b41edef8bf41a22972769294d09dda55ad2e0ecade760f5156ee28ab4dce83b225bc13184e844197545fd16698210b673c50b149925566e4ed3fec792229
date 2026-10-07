import { type constructFromSymbol } from "./constants.js";
import type { Locale } from "./locale/types.js";
export type * from "./fp/types.js";
export type * from "./locale/types.js";
/**
 * The argument type.
 */
export type DateArg<DateType extends Date> = DateType | number | string;
/**
 * Date extension interface that allows to transfer extra properties from
 * the reference date to the new date. It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 */
export interface ConstructableDate extends Date {
  [constructFromSymbol]: <DateType extends Date = Date>(
    value: DateArg<Date> & {},
  ) => DateType;
}
/**
 * The generic date constructor. Replicates the Date constructor. Used to build
 * generic functions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 */
export interface GenericDateConstructor<DateType extends Date = Date> {
  /**
   * The date constructor. Creates date with the current date and time.
   *
   * @returns The date instance
   */
  new (): DateType;
  /**
   * The date constructor. Creates date with the passed date, number of
   * milliseconds or string to parse.
   *
   * @param value - The date, number of milliseconds or string to parse
   *
   * @returns The date instance
   */
  new (value: DateArg<Date> & {}): DateType;
  /**
   * The date constructor. Creates date with the passed date values (year,
   * month, etc.) Note that the month is 0-indexed.
   *
   * @param year - The year
   * @param month - The month. Note that the month is 0-indexed.
   * @param date - The day of the month
   * @param hours - The hours
   * @param minutes - The minutes
   * @param seconds - The seconds
   * @param ms - The milliseconds
   *
   * @returns The date instance
   */
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  ): DateType;
}
/**
 * The duration object. Contains the duration in the units specified by the
 * object.
 */
export interface Duration {
  /** The number of years in the duration */
  years?: number;
  /** The number of months in the duration */
  months?: number;
  /** The number of weeks in the duration */
  weeks?: number;
  /** The number of days in the duration */
  days?: number;
  /** The number of hours in the duration */
  hours?: number;
  /** The number of minutes in the duration */
  minutes?: number;
  /** The number of seconds in the duration */
  seconds?: number;
}
/**
 * The duration unit type alias.
 */
export type DurationUnit = keyof Duration;
/**
 * An object that combines two dates to represent the time interval.
 *
 * @typeParam StartDate - The start `Date` type.
 * @typeParam EndDate - The end `Date` type.
 */
export interface Interval<
  StartType extends DateArg<Date> = DateArg<Date>,
  EndType extends DateArg<Date> = DateArg<Date>,
> {
  /** The start of the interval. */
  start: StartType;
  /** The end of the interval. */
  end: EndType;
}
/**
 * A version of {@link Interval} that has both start and end resolved to Date.
 */
export type NormalizedInterval<DateType extends Date = Date> = Interval<
  DateType,
  DateType
>;
/**
 * The era. Can be either 0 (AD - Anno Domini) or 1 (BC - Before Christ).
 */
export type Era = 0 | 1;
/**
 * The year quarter. Goes from 1 to 4.
 */
export type Quarter = 1 | 2 | 3 | 4;
/**
 * The day of the week type alias. Unlike the date (the number of days since
 * the beginning of the month), which begins with 1 and is dynamic (can go up to
 * 28, 30, or 31), the day starts with 0 and static (always ends at 6). Look at
 * it as an index in an array where Sunday is the first element and Saturday
 * is the last.
 */
export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * The month type alias. Goes from 0 to 11, where 0 is January and 11 is
 * December.
 */
export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
/**
 * FirstWeekContainsDate is used to determine which week is the first week of
 * the year, based on what day the January, 1 is in that week.
 *
 * The day in that week can only be 1 (Monday) or 4 (Thursday).
 *
 * Please see https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system for more information.
 */
export type FirstWeekContainsDate = 1 | 4;
/**
 * The date values, used to set or get date object values.
 */
export interface DateValues {
  /** The year */
  year?: number;
  /** The month */
  month?: number;
  /** The day of the month */
  date?: number;
  /** The hours */
  hours?: number;
  /** The minutes */
  minutes?: number;
  /** The seconds */
  seconds?: number;
  /** The milliseconds */
  milliseconds?: number;
}
/**
 * The number rounding method.
 */
export type RoundingMethod = "ceil" | "floor" | "round" | "trunc";
/**
 * The ISO string format.
 *
 * - basic: Minimal number of separators
 * - extended: With separators added to enhance human readability
 */
export type ISOStringFormat = "extended" | "basic";
/**
 * The ISO date representation. Represents which component the string includes,
 * date, time or both.
 */
export type ISOStringRepresentation = "complete" | "date" | "time";
/**
 * The step function options. Used to build function options.
 */
export interface StepOptions {
  /** The step to use when iterating */
  step?: number;
}
/**
 * The week function options. Used to build function options.
 */
export interface WeekOptions {
  /** Which day the week starts on. */
  weekStartsOn?: Day;
}
/**
 * The first week contains date options. Used to build function options.
 */
export interface FirstWeekContainsDateOptions {
  /** See {@link FirstWeekContainsDate} for more details. */
  firstWeekContainsDate?: FirstWeekContainsDate;
}
/**
 * The localized function options. Used to build function options.
 *
 * @typeParam LocaleFields - The locale fields used in the relevant function. Defines the minimum set of locale fields that must be provided.
 */
export interface LocalizedOptions<LocaleFields extends keyof Locale> {
  /** The locale to use in the function. */
  locale?: Pick<Locale, LocaleFields>;
}
/**
 * The ISO format function options. Used to build function options.
 */
export interface ISOFormatOptions {
  /** The format to use: basic with minimal number of separators or extended
   * with separators added to enhance human readability */
  format?: ISOStringFormat;
  /** The date representation - what component to format: date, time\
   * or both (complete) */
  representation?: ISOStringRepresentation;
}
/**
 * The rounding options. Used to build function options.
 */
export interface RoundingOptions {
  /** The rounding method to use */
  roundingMethod?: RoundingMethod;
}
/**
 * Additional tokens options. Used to build function options.
 */
export interface AdditionalTokensOptions {
  /** If true, allows usage of the week-numbering year tokens `YY` and `YYYY`.
   * See: https://date-fns.org/docs/Unicode-Tokens */
  useAdditionalWeekYearTokens?: boolean;
  /** If true, allows usage of the day of year tokens `D` and `DD`.
   * See: https://date-fns.org/docs/Unicode-Tokens */
  useAdditionalDayOfYearTokens?: boolean;
}
/**
 * Nearest minute type. Goes from 1 to 30, where 1 is the nearest minute and 30
 * is nearest half an hour.
 */
export type NearestMinutes =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30;
/**
 * Nearest hour type. Goes from 1 to 12, where 1 is the nearest hour and 12
 * is nearest half a day.
 */
export type NearestHours = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * The nearest minutes function options. Used to build function options.
 *
 * @deprecated Use {@link NearestToUnitOptions} instead.
 */
export type NearestMinutesOptions = NearestToUnitOptions<NearestMinutes>;
/**
 * The nearest unit function options. Used to build function options.
 */
export interface NearestToUnitOptions<Unit extends number> {
  /** The nearest unit to round to. E.g. for minutes `15` to round to quarter
   * hours. */
  nearestTo?: Unit;
}
/**
 * The context options. Used to build function options.
 */
export interface ContextOptions<DateType extends Date> {
  /**
   * The context to use in the function. It allows to normalize the arguments
   * to a specific date instance, which is useful for extensions like [`TZDate`](https://github.com/date-fns/tz).
   */
  in?: ContextFn<DateType> | undefined;
}
/**
  /**
   * The context function type. It's used to normalize the input arguments to
   * a specific date instance, which is useful for extensions like [`TZDate`](https://github.com/date-fns/tz).
   */
export type ContextFn<DateType extends Date> = (
  value: DateArg<Date> & {},
) => DateType;
/**
 * Resolves passed type or array of types.
 */
export type MaybeArray<Type> = Type | Type[];
