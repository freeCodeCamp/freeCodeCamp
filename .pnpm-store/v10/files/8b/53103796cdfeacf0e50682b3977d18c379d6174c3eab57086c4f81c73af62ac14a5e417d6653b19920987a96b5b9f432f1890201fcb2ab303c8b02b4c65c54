// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  (a: A): R
}

interface CurriedFn2<A, B, R> {
  (a: A): CurriedFn1<B, R>
  (a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  (a: A): CurriedFn2<B, C, R>
  (a: A, b: B): CurriedFn1<C, R>
  (a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  (a: A): CurriedFn3<B, C, D, R>
  (a: A, b: B): CurriedFn2<C, D, R>
  (a: A, b: B, c: C): CurriedFn1<D, R>
  (a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | number
  end: Date | number
}
type IntervalAliased = Interval

type Locale = {
  code?: string
  formatDistance?: (...args: Array<any>) => any
  formatRelative?: (...args: Array<any>) => any
  localize?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  formatLong?: {
    date: (...args: Array<any>) => any
    time: (...args: Array<any>) => any
    dateTime: (...args: Array<any>) => any
  }
  match?: {
    ordinalNumber: (...args: Array<any>) => any
    era: (...args: Array<any>) => any
    quarter: (...args: Array<any>) => any
    month: (...args: Array<any>) => any
    day: (...args: Array<any>) => any
    dayPeriod: (...args: Array<any>) => any
  }
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }
}
type LocaleAliased = Locale

type Duration = {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}
type DurationAliased = Duration

type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6
type DayAliased = Day

// Exported Type Aliases

declare module 'date-fns' {
  export type Interval = IntervalAliased

  export type Locale = LocaleAliased

  export type Duration = DurationAliased

  export type Day = DayAliased
}

// Regular Functions

declare module 'date-fns' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function clamp(date: Date | number, interval: Interval): Date
  namespace clamp {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function daysToWeeks(days: number): number
  namespace daysToWeeks {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachHourOfInterval {}

  function eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachMinuteOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachQuarterOfInterval(interval: Interval): Date[]
  namespace eachQuarterOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string
  namespace formatDuration {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getDefaultOptions(): Object
  namespace getDefaultOptions {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function hoursToMilliseconds(hours: number): number
  namespace hoursToMilliseconds {}

  function hoursToMinutes(hours: number): number
  namespace hoursToMinutes {}

  function hoursToSeconds(hours: number): number
  namespace hoursToSeconds {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string
  namespace intlFormat {}

  function intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string
  namespace intlFormatDistance {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
  namespace isMatch {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function milliseconds(duration: Duration): number
  namespace milliseconds {}

  function millisecondsToHours(milliseconds: number): number
  namespace millisecondsToHours {}

  function millisecondsToMinutes(milliseconds: number): number
  namespace millisecondsToMinutes {}

  function millisecondsToSeconds(milliseconds: number): number
  namespace millisecondsToSeconds {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function minutesToHours(minutes: number): number
  namespace minutesToHours {}

  function minutesToMilliseconds(minutes: number): number
  namespace minutesToMilliseconds {}

  function minutesToSeconds(minutes: number): number
  namespace minutesToSeconds {}

  function monthsToQuarters(months: number): number
  namespace monthsToQuarters {}

  function monthsToYears(months: number): number
  namespace monthsToYears {}

  function nextDay(date: Date | number, day: Day): Date
  namespace nextDay {}

  function nextFriday(date: Date | number): Date
  namespace nextFriday {}

  function nextMonday(date: Date | number): Date
  namespace nextMonday {}

  function nextSaturday(date: Date | number): Date
  namespace nextSaturday {}

  function nextSunday(date: Date | number): Date
  namespace nextSunday {}

  function nextThursday(date: Date | number): Date
  namespace nextThursday {}

  function nextTuesday(date: Date | number): Date
  namespace nextTuesday {}

  function nextWednesday(date: Date | number): Date
  namespace nextWednesday {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function previousDay(date: Date | number, day: number): Date
  namespace previousDay {}

  function previousFriday(date: Date | number): Date
  namespace previousFriday {}

  function previousMonday(date: Date | number): Date
  namespace previousMonday {}

  function previousSaturday(date: Date | number): Date
  namespace previousSaturday {}

  function previousSunday(date: Date | number): Date
  namespace previousSunday {}

  function previousThursday(date: Date | number): Date
  namespace previousThursday {}

  function previousTuesday(date: Date | number): Date
  namespace previousTuesday {}

  function previousWednesday(date: Date | number): Date
  namespace previousWednesday {}

  function quartersToMonths(quarters: number): number
  namespace quartersToMonths {}

  function quartersToYears(quarters: number): number
  namespace quartersToYears {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
      roundingMethod?: string
    }
  ): Date
  namespace roundToNearestMinutes {}

  function secondsToHours(seconds: number): number
  namespace secondsToHours {}

  function secondsToMilliseconds(seconds: number): number
  namespace secondsToMilliseconds {}

  function secondsToMinutes(seconds: number): number
  namespace secondsToMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void
  namespace setDefaultOptions {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  function weeksToDays(weeks: number): number
  namespace weeksToDays {}

  function yearsToMonths(years: number): number
  namespace yearsToMonths {}

  function yearsToQuarters(years: number): number
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/constants' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/constants/index.js' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns/add' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/addBusinessDays' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/clamp' {
  import { clamp } from 'date-fns'
  export default clamp
}

declare module 'date-fns/closestIndexTo' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/daysToWeeks' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
}

declare module 'date-fns/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
}

declare module 'date-fns/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
}

declare module 'date-fns/endOfDay' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
}

declare module 'date-fns/fromUnixTime' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
}

declare module 'date-fns/getHours' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
}

declare module 'date-fns/isAfter' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isExists' {
  import { isExists } from 'date-fns'
  export default isExists
}

declare module 'date-fns/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMatch' {
  import { isMatch } from 'date-fns'
  export default isMatch
}

declare module 'date-fns/isMonday' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/milliseconds' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set' {
  import { set } from 'date-fns'
  export default set
}

declare module 'date-fns/setDate' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
}

declare module 'date-fns/setHours' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/sub' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
}

declare module 'date-fns/subDays' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate' {
  import { toDate } from 'date-fns'
  export default toDate
}

declare module 'date-fns/weeksToDays' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}

declare module 'date-fns/add/index' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays/index' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours/index' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes/index' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths/index' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters/index' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds/index' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks/index' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears/index' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/clamp/index' {
  import { clamp } from 'date-fns'
  export default clamp
}

declare module 'date-fns/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo/index' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc/index' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc/index' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
}

declare module 'date-fns/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours/index' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears/index' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
}

declare module 'date-fns/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
}

declare module 'date-fns/endOfDay/index' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade/index' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour/index' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth/index' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond/index' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday/index' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek/index' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear/index' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format/index' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration/index' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO/index' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration/index' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative/index' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
}

declare module 'date-fns/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate/index' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay/index' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade/index' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
}

declare module 'date-fns/getHours/index' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay/index' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek/index' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes/index' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth/index' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds/index' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime/index' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime/index' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek/index' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear/index' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat/index' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
}

declare module 'date-fns/isAfter/index' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore/index' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate/index' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual/index' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isExists/index' {
  import { isExists } from 'date-fns'
  export default isExists
}

declare module 'date-fns/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture/index' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMatch/index' {
  import { isMatch } from 'date-fns'
  export default isMatch
}

declare module 'date-fns/isMonday/index' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast/index' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay/index' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour/index' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth/index' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond/index' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek/index' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear/index' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday/index' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour/index' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute/index' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth/index' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond/index' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek/index' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear/index' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday/index' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday/index' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow/index' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday/index' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid/index' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday/index' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend/index' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday/index' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat/index' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max/index' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/milliseconds/index' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min/index' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours/index' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears/index' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay/index' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday/index' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday/index' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday/index' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday/index' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday/index' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday/index' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday/index' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse/index' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON/index' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay/index' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday/index' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday/index' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday/index' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday/index' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday/index' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday/index' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday/index' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears/index' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours/index' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set/index' {
  import { set } from 'date-fns'
  export default set
}

declare module 'date-fns/setDate/index' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay/index' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
}

declare module 'date-fns/setHours/index' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay/index' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek/index' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes/index' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth/index' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter/index' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds/index' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek/index' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear/index' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear/index' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay/index' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade/index' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour/index' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth/index' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond/index' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday/index' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek/index' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear/index' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/sub/index' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
}

declare module 'date-fns/subDays/index' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours/index' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes/index' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths/index' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters/index' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds/index' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks/index' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears/index' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate/index' {
  import { toDate } from 'date-fns'
  export default toDate
}

declare module 'date-fns/weeksToDays/index' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}

declare module 'date-fns/add/index.js' {
  import { add } from 'date-fns'
  export default add
}

declare module 'date-fns/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns'
  export default addBusinessDays
}

declare module 'date-fns/addDays/index.js' {
  import { addDays } from 'date-fns'
  export default addDays
}

declare module 'date-fns/addHours/index.js' {
  import { addHours } from 'date-fns'
  export default addHours
}

declare module 'date-fns/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns'
  export default addISOWeekYears
}

declare module 'date-fns/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns'
  export default addMilliseconds
}

declare module 'date-fns/addMinutes/index.js' {
  import { addMinutes } from 'date-fns'
  export default addMinutes
}

declare module 'date-fns/addMonths/index.js' {
  import { addMonths } from 'date-fns'
  export default addMonths
}

declare module 'date-fns/addQuarters/index.js' {
  import { addQuarters } from 'date-fns'
  export default addQuarters
}

declare module 'date-fns/addSeconds/index.js' {
  import { addSeconds } from 'date-fns'
  export default addSeconds
}

declare module 'date-fns/addWeeks/index.js' {
  import { addWeeks } from 'date-fns'
  export default addWeeks
}

declare module 'date-fns/addYears/index.js' {
  import { addYears } from 'date-fns'
  export default addYears
}

declare module 'date-fns/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns'
  export default areIntervalsOverlapping
}

declare module 'date-fns/clamp/index.js' {
  import { clamp } from 'date-fns'
  export default clamp
}

declare module 'date-fns/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns'
  export default closestIndexTo
}

declare module 'date-fns/closestTo/index.js' {
  import { closestTo } from 'date-fns'
  export default closestTo
}

declare module 'date-fns/compareAsc/index.js' {
  import { compareAsc } from 'date-fns'
  export default compareAsc
}

declare module 'date-fns/compareDesc/index.js' {
  import { compareDesc } from 'date-fns'
  export default compareDesc
}

declare module 'date-fns/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns'
  export default daysToWeeks
}

declare module 'date-fns/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns'
  export default differenceInBusinessDays
}

declare module 'date-fns/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns'
  export default differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns'
  export default differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns'
  export default differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns'
  export default differenceInDays
}

declare module 'date-fns/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns'
  export default differenceInHours
}

declare module 'date-fns/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns'
  export default differenceInISOWeekYears
}

declare module 'date-fns/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns'
  export default differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns'
  export default differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns'
  export default differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns'
  export default differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns'
  export default differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns'
  export default differenceInWeeks
}

declare module 'date-fns/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns'
  export default differenceInYears
}

declare module 'date-fns/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns'
  export default eachDayOfInterval
}

declare module 'date-fns/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns'
  export default eachHourOfInterval
}

declare module 'date-fns/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns'
  export default eachMinuteOfInterval
}

declare module 'date-fns/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns'
  export default eachMonthOfInterval
}

declare module 'date-fns/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns'
  export default eachQuarterOfInterval
}

declare module 'date-fns/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns'
  export default eachWeekendOfInterval
}

declare module 'date-fns/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns'
  export default eachWeekendOfMonth
}

declare module 'date-fns/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns'
  export default eachWeekendOfYear
}

declare module 'date-fns/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns'
  export default eachWeekOfInterval
}

declare module 'date-fns/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns'
  export default eachYearOfInterval
}

declare module 'date-fns/endOfDay/index.js' {
  import { endOfDay } from 'date-fns'
  export default endOfDay
}

declare module 'date-fns/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns'
  export default endOfDecade
}

declare module 'date-fns/endOfHour/index.js' {
  import { endOfHour } from 'date-fns'
  export default endOfHour
}

declare module 'date-fns/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns'
  export default endOfISOWeek
}

declare module 'date-fns/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns'
  export default endOfISOWeekYear
}

declare module 'date-fns/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns'
  export default endOfMinute
}

declare module 'date-fns/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns'
  export default endOfMonth
}

declare module 'date-fns/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns'
  export default endOfQuarter
}

declare module 'date-fns/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns'
  export default endOfSecond
}

declare module 'date-fns/endOfToday/index.js' {
  import { endOfToday } from 'date-fns'
  export default endOfToday
}

declare module 'date-fns/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns'
  export default endOfTomorrow
}

declare module 'date-fns/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns'
  export default endOfWeek
}

declare module 'date-fns/endOfYear/index.js' {
  import { endOfYear } from 'date-fns'
  export default endOfYear
}

declare module 'date-fns/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns'
  export default endOfYesterday
}

declare module 'date-fns/format/index.js' {
  import { format } from 'date-fns'
  export default format
}

declare module 'date-fns/formatDistance/index.js' {
  import { formatDistance } from 'date-fns'
  export default formatDistance
}

declare module 'date-fns/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns'
  export default formatDistanceStrict
}

declare module 'date-fns/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns'
  export default formatDistanceToNow
}

declare module 'date-fns/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/formatDuration/index.js' {
  import { formatDuration } from 'date-fns'
  export default formatDuration
}

declare module 'date-fns/formatISO/index.js' {
  import { formatISO } from 'date-fns'
  export default formatISO
}

declare module 'date-fns/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns'
  export default formatISO9075
}

declare module 'date-fns/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns'
  export default formatISODuration
}

declare module 'date-fns/formatRelative/index.js' {
  import { formatRelative } from 'date-fns'
  export default formatRelative
}

declare module 'date-fns/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns'
  export default formatRFC3339
}

declare module 'date-fns/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns'
  export default formatRFC7231
}

declare module 'date-fns/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns'
  export default fromUnixTime
}

declare module 'date-fns/getDate/index.js' {
  import { getDate } from 'date-fns'
  export default getDate
}

declare module 'date-fns/getDay/index.js' {
  import { getDay } from 'date-fns'
  export default getDay
}

declare module 'date-fns/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns'
  export default getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns'
  export default getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns'
  export default getDaysInYear
}

declare module 'date-fns/getDecade/index.js' {
  import { getDecade } from 'date-fns'
  export default getDecade
}

declare module 'date-fns/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns'
  export default getDefaultOptions
}

declare module 'date-fns/getHours/index.js' {
  import { getHours } from 'date-fns'
  export default getHours
}

declare module 'date-fns/getISODay/index.js' {
  import { getISODay } from 'date-fns'
  export default getISODay
}

declare module 'date-fns/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns'
  export default getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns'
  export default getISOWeeksInYear
}

declare module 'date-fns/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns'
  export default getISOWeekYear
}

declare module 'date-fns/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns'
  export default getMilliseconds
}

declare module 'date-fns/getMinutes/index.js' {
  import { getMinutes } from 'date-fns'
  export default getMinutes
}

declare module 'date-fns/getMonth/index.js' {
  import { getMonth } from 'date-fns'
  export default getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index.js' {
  import { getQuarter } from 'date-fns'
  export default getQuarter
}

declare module 'date-fns/getSeconds/index.js' {
  import { getSeconds } from 'date-fns'
  export default getSeconds
}

declare module 'date-fns/getTime/index.js' {
  import { getTime } from 'date-fns'
  export default getTime
}

declare module 'date-fns/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns'
  export default getUnixTime
}

declare module 'date-fns/getWeek/index.js' {
  import { getWeek } from 'date-fns'
  export default getWeek
}

declare module 'date-fns/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns'
  export default getWeekOfMonth
}

declare module 'date-fns/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns'
  export default getWeeksInMonth
}

declare module 'date-fns/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns'
  export default getWeekYear
}

declare module 'date-fns/getYear/index.js' {
  import { getYear } from 'date-fns'
  export default getYear
}

declare module 'date-fns/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns'
  export default hoursToMilliseconds
}

declare module 'date-fns/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns'
  export default hoursToMinutes
}

declare module 'date-fns/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns'
  export default hoursToSeconds
}

declare module 'date-fns/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns'
  export default intervalToDuration
}

declare module 'date-fns/intlFormat/index.js' {
  import { intlFormat } from 'date-fns'
  export default intlFormat
}

declare module 'date-fns/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns'
  export default intlFormatDistance
}

declare module 'date-fns/isAfter/index.js' {
  import { isAfter } from 'date-fns'
  export default isAfter
}

declare module 'date-fns/isBefore/index.js' {
  import { isBefore } from 'date-fns'
  export default isBefore
}

declare module 'date-fns/isDate/index.js' {
  import { isDate } from 'date-fns'
  export default isDate
}

declare module 'date-fns/isEqual/index.js' {
  import { isEqual } from 'date-fns'
  export default isEqual
}

declare module 'date-fns/isExists/index.js' {
  import { isExists } from 'date-fns'
  export default isExists
}

declare module 'date-fns/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns'
  export default isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index.js' {
  import { isFriday } from 'date-fns'
  export default isFriday
}

declare module 'date-fns/isFuture/index.js' {
  import { isFuture } from 'date-fns'
  export default isFuture
}

declare module 'date-fns/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns'
  export default isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns'
  export default isLeapYear
}

declare module 'date-fns/isMatch/index.js' {
  import { isMatch } from 'date-fns'
  export default isMatch
}

declare module 'date-fns/isMonday/index.js' {
  import { isMonday } from 'date-fns'
  export default isMonday
}

declare module 'date-fns/isPast/index.js' {
  import { isPast } from 'date-fns'
  export default isPast
}

declare module 'date-fns/isSameDay/index.js' {
  import { isSameDay } from 'date-fns'
  export default isSameDay
}

declare module 'date-fns/isSameHour/index.js' {
  import { isSameHour } from 'date-fns'
  export default isSameHour
}

declare module 'date-fns/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns'
  export default isSameISOWeek
}

declare module 'date-fns/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns'
  export default isSameISOWeekYear
}

declare module 'date-fns/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns'
  export default isSameMinute
}

declare module 'date-fns/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns'
  export default isSameMonth
}

declare module 'date-fns/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns'
  export default isSameQuarter
}

declare module 'date-fns/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns'
  export default isSameSecond
}

declare module 'date-fns/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns'
  export default isSameWeek
}

declare module 'date-fns/isSameYear/index.js' {
  import { isSameYear } from 'date-fns'
  export default isSameYear
}

declare module 'date-fns/isSaturday/index.js' {
  import { isSaturday } from 'date-fns'
  export default isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import { isSunday } from 'date-fns'
  export default isSunday
}

declare module 'date-fns/isThisHour/index.js' {
  import { isThisHour } from 'date-fns'
  export default isThisHour
}

declare module 'date-fns/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns'
  export default isThisISOWeek
}

declare module 'date-fns/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns'
  export default isThisMinute
}

declare module 'date-fns/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns'
  export default isThisMonth
}

declare module 'date-fns/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns'
  export default isThisQuarter
}

declare module 'date-fns/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns'
  export default isThisSecond
}

declare module 'date-fns/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns'
  export default isThisWeek
}

declare module 'date-fns/isThisYear/index.js' {
  import { isThisYear } from 'date-fns'
  export default isThisYear
}

declare module 'date-fns/isThursday/index.js' {
  import { isThursday } from 'date-fns'
  export default isThursday
}

declare module 'date-fns/isToday/index.js' {
  import { isToday } from 'date-fns'
  export default isToday
}

declare module 'date-fns/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns'
  export default isTomorrow
}

declare module 'date-fns/isTuesday/index.js' {
  import { isTuesday } from 'date-fns'
  export default isTuesday
}

declare module 'date-fns/isValid/index.js' {
  import { isValid } from 'date-fns'
  export default isValid
}

declare module 'date-fns/isWednesday/index.js' {
  import { isWednesday } from 'date-fns'
  export default isWednesday
}

declare module 'date-fns/isWeekend/index.js' {
  import { isWeekend } from 'date-fns'
  export default isWeekend
}

declare module 'date-fns/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns'
  export default isWithinInterval
}

declare module 'date-fns/isYesterday/index.js' {
  import { isYesterday } from 'date-fns'
  export default isYesterday
}

declare module 'date-fns/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns'
  export default lastDayOfDecade
}

declare module 'date-fns/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns'
  export default lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns'
  export default lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns'
  export default lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns'
  export default lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns'
  export default lastDayOfYear
}

declare module 'date-fns/lightFormat/index.js' {
  import { lightFormat } from 'date-fns'
  export default lightFormat
}

declare module 'date-fns/max/index.js' {
  import { max } from 'date-fns'
  export default max
}

declare module 'date-fns/milliseconds/index.js' {
  import { milliseconds } from 'date-fns'
  export default milliseconds
}

declare module 'date-fns/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns'
  export default millisecondsToHours
}

declare module 'date-fns/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns'
  export default millisecondsToMinutes
}

declare module 'date-fns/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns'
  export default millisecondsToSeconds
}

declare module 'date-fns/min/index.js' {
  import { min } from 'date-fns'
  export default min
}

declare module 'date-fns/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns'
  export default minutesToHours
}

declare module 'date-fns/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns'
  export default minutesToMilliseconds
}

declare module 'date-fns/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns'
  export default minutesToSeconds
}

declare module 'date-fns/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns'
  export default monthsToQuarters
}

declare module 'date-fns/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns'
  export default monthsToYears
}

declare module 'date-fns/nextDay/index.js' {
  import { nextDay } from 'date-fns'
  export default nextDay
}

declare module 'date-fns/nextFriday/index.js' {
  import { nextFriday } from 'date-fns'
  export default nextFriday
}

declare module 'date-fns/nextMonday/index.js' {
  import { nextMonday } from 'date-fns'
  export default nextMonday
}

declare module 'date-fns/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns'
  export default nextSaturday
}

declare module 'date-fns/nextSunday/index.js' {
  import { nextSunday } from 'date-fns'
  export default nextSunday
}

declare module 'date-fns/nextThursday/index.js' {
  import { nextThursday } from 'date-fns'
  export default nextThursday
}

declare module 'date-fns/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns'
  export default nextTuesday
}

declare module 'date-fns/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns'
  export default nextWednesday
}

declare module 'date-fns/parse/index.js' {
  import { parse } from 'date-fns'
  export default parse
}

declare module 'date-fns/parseISO/index.js' {
  import { parseISO } from 'date-fns'
  export default parseISO
}

declare module 'date-fns/parseJSON/index.js' {
  import { parseJSON } from 'date-fns'
  export default parseJSON
}

declare module 'date-fns/previousDay/index.js' {
  import { previousDay } from 'date-fns'
  export default previousDay
}

declare module 'date-fns/previousFriday/index.js' {
  import { previousFriday } from 'date-fns'
  export default previousFriday
}

declare module 'date-fns/previousMonday/index.js' {
  import { previousMonday } from 'date-fns'
  export default previousMonday
}

declare module 'date-fns/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns'
  export default previousSaturday
}

declare module 'date-fns/previousSunday/index.js' {
  import { previousSunday } from 'date-fns'
  export default previousSunday
}

declare module 'date-fns/previousThursday/index.js' {
  import { previousThursday } from 'date-fns'
  export default previousThursday
}

declare module 'date-fns/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns'
  export default previousTuesday
}

declare module 'date-fns/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns'
  export default previousWednesday
}

declare module 'date-fns/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns'
  export default quartersToMonths
}

declare module 'date-fns/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns'
  export default quartersToYears
}

declare module 'date-fns/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns'
  export default roundToNearestMinutes
}

declare module 'date-fns/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns'
  export default secondsToHours
}

declare module 'date-fns/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns'
  export default secondsToMilliseconds
}

declare module 'date-fns/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns'
  export default secondsToMinutes
}

declare module 'date-fns/set/index.js' {
  import { set } from 'date-fns'
  export default set
}

declare module 'date-fns/setDate/index.js' {
  import { setDate } from 'date-fns'
  export default setDate
}

declare module 'date-fns/setDay/index.js' {
  import { setDay } from 'date-fns'
  export default setDay
}

declare module 'date-fns/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns'
  export default setDayOfYear
}

declare module 'date-fns/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns'
  export default setDefaultOptions
}

declare module 'date-fns/setHours/index.js' {
  import { setHours } from 'date-fns'
  export default setHours
}

declare module 'date-fns/setISODay/index.js' {
  import { setISODay } from 'date-fns'
  export default setISODay
}

declare module 'date-fns/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns'
  export default setISOWeek
}

declare module 'date-fns/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns'
  export default setISOWeekYear
}

declare module 'date-fns/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns'
  export default setMilliseconds
}

declare module 'date-fns/setMinutes/index.js' {
  import { setMinutes } from 'date-fns'
  export default setMinutes
}

declare module 'date-fns/setMonth/index.js' {
  import { setMonth } from 'date-fns'
  export default setMonth
}

declare module 'date-fns/setQuarter/index.js' {
  import { setQuarter } from 'date-fns'
  export default setQuarter
}

declare module 'date-fns/setSeconds/index.js' {
  import { setSeconds } from 'date-fns'
  export default setSeconds
}

declare module 'date-fns/setWeek/index.js' {
  import { setWeek } from 'date-fns'
  export default setWeek
}

declare module 'date-fns/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns'
  export default setWeekYear
}

declare module 'date-fns/setYear/index.js' {
  import { setYear } from 'date-fns'
  export default setYear
}

declare module 'date-fns/startOfDay/index.js' {
  import { startOfDay } from 'date-fns'
  export default startOfDay
}

declare module 'date-fns/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns'
  export default startOfDecade
}

declare module 'date-fns/startOfHour/index.js' {
  import { startOfHour } from 'date-fns'
  export default startOfHour
}

declare module 'date-fns/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns'
  export default startOfISOWeek
}

declare module 'date-fns/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns'
  export default startOfISOWeekYear
}

declare module 'date-fns/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns'
  export default startOfMinute
}

declare module 'date-fns/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns'
  export default startOfMonth
}

declare module 'date-fns/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns'
  export default startOfQuarter
}

declare module 'date-fns/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns'
  export default startOfSecond
}

declare module 'date-fns/startOfToday/index.js' {
  import { startOfToday } from 'date-fns'
  export default startOfToday
}

declare module 'date-fns/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns'
  export default startOfTomorrow
}

declare module 'date-fns/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns'
  export default startOfWeek
}

declare module 'date-fns/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns'
  export default startOfWeekYear
}

declare module 'date-fns/startOfYear/index.js' {
  import { startOfYear } from 'date-fns'
  export default startOfYear
}

declare module 'date-fns/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns'
  export default startOfYesterday
}

declare module 'date-fns/sub/index.js' {
  import { sub } from 'date-fns'
  export default sub
}

declare module 'date-fns/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns'
  export default subBusinessDays
}

declare module 'date-fns/subDays/index.js' {
  import { subDays } from 'date-fns'
  export default subDays
}

declare module 'date-fns/subHours/index.js' {
  import { subHours } from 'date-fns'
  export default subHours
}

declare module 'date-fns/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns'
  export default subISOWeekYears
}

declare module 'date-fns/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns'
  export default subMilliseconds
}

declare module 'date-fns/subMinutes/index.js' {
  import { subMinutes } from 'date-fns'
  export default subMinutes
}

declare module 'date-fns/subMonths/index.js' {
  import { subMonths } from 'date-fns'
  export default subMonths
}

declare module 'date-fns/subQuarters/index.js' {
  import { subQuarters } from 'date-fns'
  export default subQuarters
}

declare module 'date-fns/subSeconds/index.js' {
  import { subSeconds } from 'date-fns'
  export default subSeconds
}

declare module 'date-fns/subWeeks/index.js' {
  import { subWeeks } from 'date-fns'
  export default subWeeks
}

declare module 'date-fns/subYears/index.js' {
  import { subYears } from 'date-fns'
  export default subYears
}

declare module 'date-fns/toDate/index.js' {
  import { toDate } from 'date-fns'
  export default toDate
}

declare module 'date-fns/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns'
  export default weeksToDays
}

declare module 'date-fns/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns'
  export default yearsToMonths
}

declare module 'date-fns/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns'
  export default yearsToQuarters
}

// FP Functions

declare module 'date-fns/fp' {
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const clamp: CurriedFn2<Interval, Date | number, Date>
  namespace clamp {}

  const closestIndexTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    number | undefined
  >
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    Date | undefined
  >
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const daysToWeeks: CurriedFn1<number, number>
  namespace daysToWeeks {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachHourOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachHourOfInterval {}

  const eachHourOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachHourOfIntervalWithOptions {}

  const eachMinuteOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMinuteOfInterval {}

  const eachMinuteOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachMinuteOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachQuarterOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachQuarterOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatDuration: CurriedFn1<Duration, string>
  namespace formatDuration {}

  const formatDurationWithOptions: CurriedFn2<
    {
      locale?: Locale
      delimiter?: string
      zero?: boolean
      format?: string[]
    },
    Duration,
    string
  >
  namespace formatDurationWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const hoursToMilliseconds: CurriedFn1<number, number>
  namespace hoursToMilliseconds {}

  const hoursToMinutes: CurriedFn1<number, number>
  namespace hoursToMinutes {}

  const hoursToSeconds: CurriedFn1<number, number>
  namespace hoursToSeconds {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const intlFormat: CurriedFn3<
    {
      locale?: string | string[]
    },
    {
      timeZone?: string
      hour12?: boolean
      formatMatcher?: 'basic' | 'best fit'
      timeZoneName?: 'short' | 'long'
      second?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      day?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      era?: 'narrow' | 'short' | 'long'
      weekday?: 'narrow' | 'short' | 'long'
      localeMatcher?: 'lookup' | 'best fit'
    },
    Date | number,
    string
  >
  namespace intlFormat {}

  const intlFormatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace intlFormatDistance {}

  const intlFormatDistanceWithOptions: CurriedFn3<
    {
      style?: string
      numeric?: string
      localeMatcher?: string
      locale?: string | string[]
      unit?: string
    },
    Date | number,
    Date | number,
    string
  >
  namespace intlFormatDistanceWithOptions {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMatch: CurriedFn2<string, string, boolean>
  namespace isMatch {}

  const isMatchWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    string,
    boolean
  >
  namespace isMatchWithOptions {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const milliseconds: CurriedFn1<Duration, number>
  namespace milliseconds {}

  const millisecondsToHours: CurriedFn1<number, number>
  namespace millisecondsToHours {}

  const millisecondsToMinutes: CurriedFn1<number, number>
  namespace millisecondsToMinutes {}

  const millisecondsToSeconds: CurriedFn1<number, number>
  namespace millisecondsToSeconds {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const minutesToHours: CurriedFn1<number, number>
  namespace minutesToHours {}

  const minutesToMilliseconds: CurriedFn1<number, number>
  namespace minutesToMilliseconds {}

  const minutesToSeconds: CurriedFn1<number, number>
  namespace minutesToSeconds {}

  const monthsToQuarters: CurriedFn1<number, number>
  namespace monthsToQuarters {}

  const monthsToYears: CurriedFn1<number, number>
  namespace monthsToYears {}

  const nextDay: CurriedFn2<Day, Date | number, Date>
  namespace nextDay {}

  const nextFriday: CurriedFn1<Date | number, Date>
  namespace nextFriday {}

  const nextMonday: CurriedFn1<Date | number, Date>
  namespace nextMonday {}

  const nextSaturday: CurriedFn1<Date | number, Date>
  namespace nextSaturday {}

  const nextSunday: CurriedFn1<Date | number, Date>
  namespace nextSunday {}

  const nextThursday: CurriedFn1<Date | number, Date>
  namespace nextThursday {}

  const nextTuesday: CurriedFn1<Date | number, Date>
  namespace nextTuesday {}

  const nextWednesday: CurriedFn1<Date | number, Date>
  namespace nextWednesday {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const previousDay: CurriedFn2<number, Date | number, Date>
  namespace previousDay {}

  const previousFriday: CurriedFn1<Date | number, Date>
  namespace previousFriday {}

  const previousMonday: CurriedFn1<Date | number, Date>
  namespace previousMonday {}

  const previousSaturday: CurriedFn1<Date | number, Date>
  namespace previousSaturday {}

  const previousSunday: CurriedFn1<Date | number, Date>
  namespace previousSunday {}

  const previousThursday: CurriedFn1<Date | number, Date>
  namespace previousThursday {}

  const previousTuesday: CurriedFn1<Date | number, Date>
  namespace previousTuesday {}

  const previousWednesday: CurriedFn1<Date | number, Date>
  namespace previousWednesday {}

  const quartersToMonths: CurriedFn1<number, number>
  namespace quartersToMonths {}

  const quartersToYears: CurriedFn1<number, number>
  namespace quartersToYears {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      roundingMethod?: string
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const secondsToHours: CurriedFn1<number, number>
  namespace secondsToHours {}

  const secondsToMilliseconds: CurriedFn1<number, number>
  namespace secondsToMilliseconds {}

  const secondsToMinutes: CurriedFn1<number, number>
  namespace secondsToMinutes {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const weeksToDays: CurriedFn1<number, number>
  namespace weeksToDays {}

  const yearsToMonths: CurriedFn1<number, number>
  namespace yearsToMonths {}

  const yearsToQuarters: CurriedFn1<number, number>
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/fp/add' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/fp'
  export default addBusinessDays
}

declare module 'date-fns/fp/addDays' {
  import { addDays } from 'date-fns/fp'
  export default addDays
}

declare module 'date-fns/fp/addHours' {
  import { addHours } from 'date-fns/fp'
  export default addHours
}

declare module 'date-fns/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/fp'
  export default addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/fp'
  export default addMilliseconds
}

declare module 'date-fns/fp/addMinutes' {
  import { addMinutes } from 'date-fns/fp'
  export default addMinutes
}

declare module 'date-fns/fp/addMonths' {
  import { addMonths } from 'date-fns/fp'
  export default addMonths
}

declare module 'date-fns/fp/addQuarters' {
  import { addQuarters } from 'date-fns/fp'
  export default addQuarters
}

declare module 'date-fns/fp/addSeconds' {
  import { addSeconds } from 'date-fns/fp'
  export default addSeconds
}

declare module 'date-fns/fp/addWeeks' {
  import { addWeeks } from 'date-fns/fp'
  export default addWeeks
}

declare module 'date-fns/fp/addYears' {
  import { addYears } from 'date-fns/fp'
  export default addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/clamp' {
  import { clamp } from 'date-fns/fp'
  export default clamp
}

declare module 'date-fns/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/fp'
  export default closestIndexTo
}

declare module 'date-fns/fp/closestTo' {
  import { closestTo } from 'date-fns/fp'
  export default closestTo
}

declare module 'date-fns/fp/compareAsc' {
  import { compareAsc } from 'date-fns/fp'
  export default compareAsc
}

declare module 'date-fns/fp/compareDesc' {
  import { compareDesc } from 'date-fns/fp'
  export default compareDesc
}

declare module 'date-fns/fp/daysToWeeks' {
  import { daysToWeeks } from 'date-fns/fp'
  export default daysToWeeks
}

declare module 'date-fns/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns/fp'
  export default differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions' {
  import { differenceInHoursWithOptions } from 'date-fns/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/fp'
  export default differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions' {
  import { differenceInMinutesWithOptions } from 'date-fns/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/fp'
  export default differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/fp'
  export default differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions' {
  import { differenceInQuartersWithOptions } from 'date-fns/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/fp'
  export default differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions' {
  import { differenceInSecondsWithOptions } from 'date-fns/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/fp'
  export default differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions' {
  import { differenceInWeeksWithOptions } from 'date-fns/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns/fp'
  export default differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/fp/eachHourOfIntervalWithOptions' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/fp/eachMinuteOfIntervalWithOptions' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/fp/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/fp/endOfDay' {
  import { endOfDay } from 'date-fns/fp'
  export default endOfDay
}

declare module 'date-fns/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns/fp'
  export default endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour' {
  import { endOfHour } from 'date-fns/fp'
  export default endOfHour
}

declare module 'date-fns/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/fp'
  export default endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns/fp'
  export default endOfMinute
}

declare module 'date-fns/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns/fp'
  export default endOfMonth
}

declare module 'date-fns/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/fp'
  export default endOfQuarter
}

declare module 'date-fns/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns/fp'
  export default endOfSecond
}

declare module 'date-fns/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns/fp'
  export default endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear' {
  import { endOfYear } from 'date-fns/fp'
  export default endOfYear
}

declare module 'date-fns/fp/format' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatDuration' {
  import { formatDuration } from 'date-fns/fp'
  export default formatDuration
}

declare module 'date-fns/fp/formatDurationWithOptions' {
  import { formatDurationWithOptions } from 'date-fns/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/fp/formatISO' {
  import { formatISO } from 'date-fns/fp'
  export default formatISO
}

declare module 'date-fns/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns/fp'
  export default formatISO9075
}

declare module 'date-fns/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns/fp'
  export default formatISODuration
}

declare module 'date-fns/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/fp/formatRelative' {
  import { formatRelative } from 'date-fns/fp'
  export default formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns/fp'
  export default formatRFC3339
}

declare module 'date-fns/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns/fp'
  export default formatRFC7231
}

declare module 'date-fns/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/fp'
  export default fromUnixTime
}

declare module 'date-fns/fp/getDate' {
  import { getDate } from 'date-fns/fp'
  export default getDate
}

declare module 'date-fns/fp/getDay' {
  import { getDay } from 'date-fns/fp'
  export default getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/fp'
  export default getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/fp'
  export default getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/fp'
  export default getDaysInYear
}

declare module 'date-fns/fp/getDecade' {
  import { getDecade } from 'date-fns/fp'
  export default getDecade
}

declare module 'date-fns/fp/getHours' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/getISODay' {
  import { getISODay } from 'date-fns/fp'
  export default getISODay
}

declare module 'date-fns/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns/fp'
  export default getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/fp'
  export default getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/fp'
  export default getMilliseconds
}

declare module 'date-fns/fp/getMinutes' {
  import { getMinutes } from 'date-fns/fp'
  export default getMinutes
}

declare module 'date-fns/fp/getMonth' {
  import { getMonth } from 'date-fns/fp'
  export default getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter' {
  import { getQuarter } from 'date-fns/fp'
  export default getQuarter
}

declare module 'date-fns/fp/getSeconds' {
  import { getSeconds } from 'date-fns/fp'
  export default getSeconds
}

declare module 'date-fns/fp/getTime' {
  import { getTime } from 'date-fns/fp'
  export default getTime
}

declare module 'date-fns/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns/fp'
  export default getUnixTime
}

declare module 'date-fns/fp/getWeek' {
  import { getWeek } from 'date-fns/fp'
  export default getWeek
}

declare module 'date-fns/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns/fp'
  export default getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear' {
  import { getYear } from 'date-fns/fp'
  export default getYear
}

declare module 'date-fns/fp/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/fp/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns/fp'
  export default hoursToMinutes
}

declare module 'date-fns/fp/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns/fp'
  export default hoursToSeconds
}

declare module 'date-fns/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns/fp'
  export default intervalToDuration
}

declare module 'date-fns/fp/intlFormat' {
  import { intlFormat } from 'date-fns/fp'
  export default intlFormat
}

declare module 'date-fns/fp/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns/fp'
  export default intlFormatDistance
}

declare module 'date-fns/fp/intlFormatDistanceWithOptions' {
  import { intlFormatDistanceWithOptions } from 'date-fns/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/fp/isAfter' {
  import { isAfter } from 'date-fns/fp'
  export default isAfter
}

declare module 'date-fns/fp/isBefore' {
  import { isBefore } from 'date-fns/fp'
  export default isBefore
}

declare module 'date-fns/fp/isDate' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isEqual' {
  import { isEqual } from 'date-fns/fp'
  export default isEqual
}

declare module 'date-fns/fp/isExists' {
  import { isExists } from 'date-fns/fp'
  export default isExists
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday' {
  import { isFriday } from 'date-fns/fp'
  export default isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns/fp'
  export default isLeapYear
}

declare module 'date-fns/fp/isMatch' {
  import { isMatch } from 'date-fns/fp'
  export default isMatch
}

declare module 'date-fns/fp/isMatchWithOptions' {
  import { isMatchWithOptions } from 'date-fns/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/fp/isMonday' {
  import { isMonday } from 'date-fns/fp'
  export default isMonday
}

declare module 'date-fns/fp/isSameDay' {
  import { isSameDay } from 'date-fns/fp'
  export default isSameDay
}

declare module 'date-fns/fp/isSameHour' {
  import { isSameHour } from 'date-fns/fp'
  export default isSameHour
}

declare module 'date-fns/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/fp'
  export default isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns/fp'
  export default isSameMinute
}

declare module 'date-fns/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns/fp'
  export default isSameMonth
}

declare module 'date-fns/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/fp'
  export default isSameQuarter
}

declare module 'date-fns/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns/fp'
  export default isSameSecond
}

declare module 'date-fns/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns/fp'
  export default isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear' {
  import { isSameYear } from 'date-fns/fp'
  export default isSameYear
}

declare module 'date-fns/fp/isSaturday' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isThursday' {
  import { isThursday } from 'date-fns/fp'
  export default isThursday
}

declare module 'date-fns/fp/isTuesday' {
  import { isTuesday } from 'date-fns/fp'
  export default isTuesday
}

declare module 'date-fns/fp/isValid' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/isWednesday' {
  import { isWednesday } from 'date-fns/fp'
  export default isWednesday
}

declare module 'date-fns/fp/isWeekend' {
  import { isWeekend } from 'date-fns/fp'
  export default isWeekend
}

declare module 'date-fns/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/fp'
  export default isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/fp'
  export default lastDayOfYear
}

declare module 'date-fns/fp/lightFormat' {
  import { lightFormat } from 'date-fns/fp'
  export default lightFormat
}

declare module 'date-fns/fp/max' {
  import { max } from 'date-fns/fp'
  export default max
}

declare module 'date-fns/fp/milliseconds' {
  import { milliseconds } from 'date-fns/fp'
  export default milliseconds
}

declare module 'date-fns/fp/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns/fp'
  export default millisecondsToHours
}

declare module 'date-fns/fp/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/fp/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/fp/min' {
  import { min } from 'date-fns/fp'
  export default min
}

declare module 'date-fns/fp/minutesToHours' {
  import { minutesToHours } from 'date-fns/fp'
  export default minutesToHours
}

declare module 'date-fns/fp/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/fp/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns/fp'
  export default minutesToSeconds
}

declare module 'date-fns/fp/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns/fp'
  export default monthsToQuarters
}

declare module 'date-fns/fp/monthsToYears' {
  import { monthsToYears } from 'date-fns/fp'
  export default monthsToYears
}

declare module 'date-fns/fp/nextDay' {
  import { nextDay } from 'date-fns/fp'
  export default nextDay
}

declare module 'date-fns/fp/nextFriday' {
  import { nextFriday } from 'date-fns/fp'
  export default nextFriday
}

declare module 'date-fns/fp/nextMonday' {
  import { nextMonday } from 'date-fns/fp'
  export default nextMonday
}

declare module 'date-fns/fp/nextSaturday' {
  import { nextSaturday } from 'date-fns/fp'
  export default nextSaturday
}

declare module 'date-fns/fp/nextSunday' {
  import { nextSunday } from 'date-fns/fp'
  export default nextSunday
}

declare module 'date-fns/fp/nextThursday' {
  import { nextThursday } from 'date-fns/fp'
  export default nextThursday
}

declare module 'date-fns/fp/nextTuesday' {
  import { nextTuesday } from 'date-fns/fp'
  export default nextTuesday
}

declare module 'date-fns/fp/nextWednesday' {
  import { nextWednesday } from 'date-fns/fp'
  export default nextWednesday
}

declare module 'date-fns/fp/parse' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseJSON' {
  import { parseJSON } from 'date-fns/fp'
  export default parseJSON
}

declare module 'date-fns/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/previousDay' {
  import { previousDay } from 'date-fns/fp'
  export default previousDay
}

declare module 'date-fns/fp/previousFriday' {
  import { previousFriday } from 'date-fns/fp'
  export default previousFriday
}

declare module 'date-fns/fp/previousMonday' {
  import { previousMonday } from 'date-fns/fp'
  export default previousMonday
}

declare module 'date-fns/fp/previousSaturday' {
  import { previousSaturday } from 'date-fns/fp'
  export default previousSaturday
}

declare module 'date-fns/fp/previousSunday' {
  import { previousSunday } from 'date-fns/fp'
  export default previousSunday
}

declare module 'date-fns/fp/previousThursday' {
  import { previousThursday } from 'date-fns/fp'
  export default previousThursday
}

declare module 'date-fns/fp/previousTuesday' {
  import { previousTuesday } from 'date-fns/fp'
  export default previousTuesday
}

declare module 'date-fns/fp/previousWednesday' {
  import { previousWednesday } from 'date-fns/fp'
  export default previousWednesday
}

declare module 'date-fns/fp/quartersToMonths' {
  import { quartersToMonths } from 'date-fns/fp'
  export default quartersToMonths
}

declare module 'date-fns/fp/quartersToYears' {
  import { quartersToYears } from 'date-fns/fp'
  export default quartersToYears
}

declare module 'date-fns/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/secondsToHours' {
  import { secondsToHours } from 'date-fns/fp'
  export default secondsToHours
}

declare module 'date-fns/fp/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/fp/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns/fp'
  export default secondsToMinutes
}

declare module 'date-fns/fp/set' {
  import { set } from 'date-fns/fp'
  export default set
}

declare module 'date-fns/fp/setDate' {
  import { setDate } from 'date-fns/fp'
  export default setDate
}

declare module 'date-fns/fp/setDay' {
  import { setDay } from 'date-fns/fp'
  export default setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/fp'
  export default setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns/fp'
  export default setDayWithOptions
}

declare module 'date-fns/fp/setHours' {
  import { setHours } from 'date-fns/fp'
  export default setHours
}

declare module 'date-fns/fp/setISODay' {
  import { setISODay } from 'date-fns/fp'
  export default setISODay
}

declare module 'date-fns/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns/fp'
  export default setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/fp'
  export default setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/fp'
  export default setMilliseconds
}

declare module 'date-fns/fp/setMinutes' {
  import { setMinutes } from 'date-fns/fp'
  export default setMinutes
}

declare module 'date-fns/fp/setMonth' {
  import { setMonth } from 'date-fns/fp'
  export default setMonth
}

declare module 'date-fns/fp/setQuarter' {
  import { setQuarter } from 'date-fns/fp'
  export default setQuarter
}

declare module 'date-fns/fp/setSeconds' {
  import { setSeconds } from 'date-fns/fp'
  export default setSeconds
}

declare module 'date-fns/fp/setWeek' {
  import { setWeek } from 'date-fns/fp'
  export default setWeek
}

declare module 'date-fns/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns/fp'
  export default setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear' {
  import { setYear } from 'date-fns/fp'
  export default setYear
}

declare module 'date-fns/fp/startOfDay' {
  import { startOfDay } from 'date-fns/fp'
  export default startOfDay
}

declare module 'date-fns/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns/fp'
  export default startOfDecade
}

declare module 'date-fns/fp/startOfHour' {
  import { startOfHour } from 'date-fns/fp'
  export default startOfHour
}

declare module 'date-fns/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/fp'
  export default startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns/fp'
  export default startOfMinute
}

declare module 'date-fns/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns/fp'
  export default startOfMonth
}

declare module 'date-fns/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/fp'
  export default startOfQuarter
}

declare module 'date-fns/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns/fp'
  export default startOfSecond
}

declare module 'date-fns/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns/fp'
  export default startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/fp'
  export default startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear' {
  import { startOfYear } from 'date-fns/fp'
  export default startOfYear
}

declare module 'date-fns/fp/sub' {
  import { sub } from 'date-fns/fp'
  export default sub
}

declare module 'date-fns/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns/fp'
  export default subBusinessDays
}

declare module 'date-fns/fp/subDays' {
  import { subDays } from 'date-fns/fp'
  export default subDays
}

declare module 'date-fns/fp/subHours' {
  import { subHours } from 'date-fns/fp'
  export default subHours
}

declare module 'date-fns/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/fp'
  export default subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/fp'
  export default subMilliseconds
}

declare module 'date-fns/fp/subMinutes' {
  import { subMinutes } from 'date-fns/fp'
  export default subMinutes
}

declare module 'date-fns/fp/subMonths' {
  import { subMonths } from 'date-fns/fp'
  export default subMonths
}

declare module 'date-fns/fp/subQuarters' {
  import { subQuarters } from 'date-fns/fp'
  export default subQuarters
}

declare module 'date-fns/fp/subSeconds' {
  import { subSeconds } from 'date-fns/fp'
  export default subSeconds
}

declare module 'date-fns/fp/subWeeks' {
  import { subWeeks } from 'date-fns/fp'
  export default subWeeks
}

declare module 'date-fns/fp/subYears' {
  import { subYears } from 'date-fns/fp'
  export default subYears
}

declare module 'date-fns/fp/toDate' {
  import { toDate } from 'date-fns/fp'
  export default toDate
}

declare module 'date-fns/fp/weeksToDays' {
  import { weeksToDays } from 'date-fns/fp'
  export default weeksToDays
}

declare module 'date-fns/fp/yearsToMonths' {
  import { yearsToMonths } from 'date-fns/fp'
  export default yearsToMonths
}

declare module 'date-fns/fp/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns/fp'
  export default yearsToQuarters
}

declare module 'date-fns/fp/add/index' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/fp'
  export default addBusinessDays
}

declare module 'date-fns/fp/addDays/index' {
  import { addDays } from 'date-fns/fp'
  export default addDays
}

declare module 'date-fns/fp/addHours/index' {
  import { addHours } from 'date-fns/fp'
  export default addHours
}

declare module 'date-fns/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/fp'
  export default addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/fp'
  export default addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns/fp'
  export default addMinutes
}

declare module 'date-fns/fp/addMonths/index' {
  import { addMonths } from 'date-fns/fp'
  export default addMonths
}

declare module 'date-fns/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns/fp'
  export default addQuarters
}

declare module 'date-fns/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns/fp'
  export default addSeconds
}

declare module 'date-fns/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns/fp'
  export default addWeeks
}

declare module 'date-fns/fp/addYears/index' {
  import { addYears } from 'date-fns/fp'
  export default addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/clamp/index' {
  import { clamp } from 'date-fns/fp'
  export default clamp
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/fp'
  export default closestIndexTo
}

declare module 'date-fns/fp/closestTo/index' {
  import { closestTo } from 'date-fns/fp'
  export default closestTo
}

declare module 'date-fns/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns/fp'
  export default compareAsc
}

declare module 'date-fns/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns/fp'
  export default compareDesc
}

declare module 'date-fns/fp/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns/fp'
  export default daysToWeeks
}

declare module 'date-fns/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/fp'
  export default differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index' {
  import { differenceInHoursWithOptions } from 'date-fns/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/fp'
  export default differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index' {
  import { differenceInMinutesWithOptions } from 'date-fns/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/fp'
  export default differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/fp'
  export default differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index' {
  import { differenceInQuartersWithOptions } from 'date-fns/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/fp'
  export default differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index' {
  import { differenceInSecondsWithOptions } from 'date-fns/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/fp'
  export default differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index' {
  import { differenceInWeeksWithOptions } from 'date-fns/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/fp'
  export default differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/fp/eachHourOfIntervalWithOptions/index' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/fp/eachMinuteOfIntervalWithOptions/index' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/fp/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns/fp'
  export default endOfDay
}

declare module 'date-fns/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/fp'
  export default endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns/fp'
  export default endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/fp'
  export default endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/fp'
  export default endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/fp'
  export default endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/fp'
  export default endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/fp'
  export default endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/fp'
  export default endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns/fp'
  export default endOfYear
}

declare module 'date-fns/fp/format/index' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatDuration/index' {
  import { formatDuration } from 'date-fns/fp'
  export default formatDuration
}

declare module 'date-fns/fp/formatDurationWithOptions/index' {
  import { formatDurationWithOptions } from 'date-fns/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/fp/formatISO/index' {
  import { formatISO } from 'date-fns/fp'
  export default formatISO
}

declare module 'date-fns/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns/fp'
  export default formatISO9075
}

declare module 'date-fns/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns/fp'
  export default formatISODuration
}

declare module 'date-fns/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns/fp'
  export default formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns/fp'
  export default formatRFC3339
}

declare module 'date-fns/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns/fp'
  export default formatRFC7231
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/fp'
  export default fromUnixTime
}

declare module 'date-fns/fp/getDate/index' {
  import { getDate } from 'date-fns/fp'
  export default getDate
}

declare module 'date-fns/fp/getDay/index' {
  import { getDay } from 'date-fns/fp'
  export default getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/fp'
  export default getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/fp'
  export default getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/fp'
  export default getDaysInYear
}

declare module 'date-fns/fp/getDecade/index' {
  import { getDecade } from 'date-fns/fp'
  export default getDecade
}

declare module 'date-fns/fp/getHours/index' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/getISODay/index' {
  import { getISODay } from 'date-fns/fp'
  export default getISODay
}

declare module 'date-fns/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/fp'
  export default getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/fp'
  export default getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/fp'
  export default getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns/fp'
  export default getMinutes
}

declare module 'date-fns/fp/getMonth/index' {
  import { getMonth } from 'date-fns/fp'
  export default getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns/fp'
  export default getQuarter
}

declare module 'date-fns/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns/fp'
  export default getSeconds
}

declare module 'date-fns/fp/getTime/index' {
  import { getTime } from 'date-fns/fp'
  export default getTime
}

declare module 'date-fns/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/fp'
  export default getUnixTime
}

declare module 'date-fns/fp/getWeek/index' {
  import { getWeek } from 'date-fns/fp'
  export default getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/fp'
  export default getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index' {
  import { getYear } from 'date-fns/fp'
  export default getYear
}

declare module 'date-fns/fp/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/fp/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns/fp'
  export default hoursToMinutes
}

declare module 'date-fns/fp/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns/fp'
  export default hoursToSeconds
}

declare module 'date-fns/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns/fp'
  export default intervalToDuration
}

declare module 'date-fns/fp/intlFormat/index' {
  import { intlFormat } from 'date-fns/fp'
  export default intlFormat
}

declare module 'date-fns/fp/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns/fp'
  export default intlFormatDistance
}

declare module 'date-fns/fp/intlFormatDistanceWithOptions/index' {
  import { intlFormatDistanceWithOptions } from 'date-fns/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/fp/isAfter/index' {
  import { isAfter } from 'date-fns/fp'
  export default isAfter
}

declare module 'date-fns/fp/isBefore/index' {
  import { isBefore } from 'date-fns/fp'
  export default isBefore
}

declare module 'date-fns/fp/isDate/index' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isEqual/index' {
  import { isEqual } from 'date-fns/fp'
  export default isEqual
}

declare module 'date-fns/fp/isExists/index' {
  import { isExists } from 'date-fns/fp'
  export default isExists
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index' {
  import { isFriday } from 'date-fns/fp'
  export default isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/fp'
  export default isLeapYear
}

declare module 'date-fns/fp/isMatch/index' {
  import { isMatch } from 'date-fns/fp'
  export default isMatch
}

declare module 'date-fns/fp/isMatchWithOptions/index' {
  import { isMatchWithOptions } from 'date-fns/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/fp/isMonday/index' {
  import { isMonday } from 'date-fns/fp'
  export default isMonday
}

declare module 'date-fns/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns/fp'
  export default isSameDay
}

declare module 'date-fns/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns/fp'
  export default isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/fp'
  export default isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/fp'
  export default isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/fp'
  export default isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/fp'
  export default isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/fp'
  export default isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/fp'
  export default isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns/fp'
  export default isSameYear
}

declare module 'date-fns/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isThursday/index' {
  import { isThursday } from 'date-fns/fp'
  export default isThursday
}

declare module 'date-fns/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns/fp'
  export default isTuesday
}

declare module 'date-fns/fp/isValid/index' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns/fp'
  export default isWednesday
}

declare module 'date-fns/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns/fp'
  export default isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/fp'
  export default isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/fp'
  export default lastDayOfYear
}

declare module 'date-fns/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns/fp'
  export default lightFormat
}

declare module 'date-fns/fp/max/index' {
  import { max } from 'date-fns/fp'
  export default max
}

declare module 'date-fns/fp/milliseconds/index' {
  import { milliseconds } from 'date-fns/fp'
  export default milliseconds
}

declare module 'date-fns/fp/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns/fp'
  export default millisecondsToHours
}

declare module 'date-fns/fp/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/fp/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/fp/min/index' {
  import { min } from 'date-fns/fp'
  export default min
}

declare module 'date-fns/fp/minutesToHours/index' {
  import { minutesToHours } from 'date-fns/fp'
  export default minutesToHours
}

declare module 'date-fns/fp/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/fp/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns/fp'
  export default minutesToSeconds
}

declare module 'date-fns/fp/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns/fp'
  export default monthsToQuarters
}

declare module 'date-fns/fp/monthsToYears/index' {
  import { monthsToYears } from 'date-fns/fp'
  export default monthsToYears
}

declare module 'date-fns/fp/nextDay/index' {
  import { nextDay } from 'date-fns/fp'
  export default nextDay
}

declare module 'date-fns/fp/nextFriday/index' {
  import { nextFriday } from 'date-fns/fp'
  export default nextFriday
}

declare module 'date-fns/fp/nextMonday/index' {
  import { nextMonday } from 'date-fns/fp'
  export default nextMonday
}

declare module 'date-fns/fp/nextSaturday/index' {
  import { nextSaturday } from 'date-fns/fp'
  export default nextSaturday
}

declare module 'date-fns/fp/nextSunday/index' {
  import { nextSunday } from 'date-fns/fp'
  export default nextSunday
}

declare module 'date-fns/fp/nextThursday/index' {
  import { nextThursday } from 'date-fns/fp'
  export default nextThursday
}

declare module 'date-fns/fp/nextTuesday/index' {
  import { nextTuesday } from 'date-fns/fp'
  export default nextTuesday
}

declare module 'date-fns/fp/nextWednesday/index' {
  import { nextWednesday } from 'date-fns/fp'
  export default nextWednesday
}

declare module 'date-fns/fp/parse/index' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO/index' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns/fp'
  export default parseJSON
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/previousDay/index' {
  import { previousDay } from 'date-fns/fp'
  export default previousDay
}

declare module 'date-fns/fp/previousFriday/index' {
  import { previousFriday } from 'date-fns/fp'
  export default previousFriday
}

declare module 'date-fns/fp/previousMonday/index' {
  import { previousMonday } from 'date-fns/fp'
  export default previousMonday
}

declare module 'date-fns/fp/previousSaturday/index' {
  import { previousSaturday } from 'date-fns/fp'
  export default previousSaturday
}

declare module 'date-fns/fp/previousSunday/index' {
  import { previousSunday } from 'date-fns/fp'
  export default previousSunday
}

declare module 'date-fns/fp/previousThursday/index' {
  import { previousThursday } from 'date-fns/fp'
  export default previousThursday
}

declare module 'date-fns/fp/previousTuesday/index' {
  import { previousTuesday } from 'date-fns/fp'
  export default previousTuesday
}

declare module 'date-fns/fp/previousWednesday/index' {
  import { previousWednesday } from 'date-fns/fp'
  export default previousWednesday
}

declare module 'date-fns/fp/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns/fp'
  export default quartersToMonths
}

declare module 'date-fns/fp/quartersToYears/index' {
  import { quartersToYears } from 'date-fns/fp'
  export default quartersToYears
}

declare module 'date-fns/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/secondsToHours/index' {
  import { secondsToHours } from 'date-fns/fp'
  export default secondsToHours
}

declare module 'date-fns/fp/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/fp/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns/fp'
  export default secondsToMinutes
}

declare module 'date-fns/fp/set/index' {
  import { set } from 'date-fns/fp'
  export default set
}

declare module 'date-fns/fp/setDate/index' {
  import { setDate } from 'date-fns/fp'
  export default setDate
}

declare module 'date-fns/fp/setDay/index' {
  import { setDay } from 'date-fns/fp'
  export default setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/fp'
  export default setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns/fp'
  export default setDayWithOptions
}

declare module 'date-fns/fp/setHours/index' {
  import { setHours } from 'date-fns/fp'
  export default setHours
}

declare module 'date-fns/fp/setISODay/index' {
  import { setISODay } from 'date-fns/fp'
  export default setISODay
}

declare module 'date-fns/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/fp'
  export default setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/fp'
  export default setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/fp'
  export default setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns/fp'
  export default setMinutes
}

declare module 'date-fns/fp/setMonth/index' {
  import { setMonth } from 'date-fns/fp'
  export default setMonth
}

declare module 'date-fns/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns/fp'
  export default setQuarter
}

declare module 'date-fns/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns/fp'
  export default setSeconds
}

declare module 'date-fns/fp/setWeek/index' {
  import { setWeek } from 'date-fns/fp'
  export default setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/fp'
  export default setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index' {
  import { setYear } from 'date-fns/fp'
  export default setYear
}

declare module 'date-fns/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns/fp'
  export default startOfDay
}

declare module 'date-fns/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/fp'
  export default startOfDecade
}

declare module 'date-fns/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns/fp'
  export default startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/fp'
  export default startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/fp'
  export default startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/fp'
  export default startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/fp'
  export default startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/fp'
  export default startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/fp'
  export default startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/fp'
  export default startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns/fp'
  export default startOfYear
}

declare module 'date-fns/fp/sub/index' {
  import { sub } from 'date-fns/fp'
  export default sub
}

declare module 'date-fns/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns/fp'
  export default subBusinessDays
}

declare module 'date-fns/fp/subDays/index' {
  import { subDays } from 'date-fns/fp'
  export default subDays
}

declare module 'date-fns/fp/subHours/index' {
  import { subHours } from 'date-fns/fp'
  export default subHours
}

declare module 'date-fns/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/fp'
  export default subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/fp'
  export default subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns/fp'
  export default subMinutes
}

declare module 'date-fns/fp/subMonths/index' {
  import { subMonths } from 'date-fns/fp'
  export default subMonths
}

declare module 'date-fns/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns/fp'
  export default subQuarters
}

declare module 'date-fns/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns/fp'
  export default subSeconds
}

declare module 'date-fns/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns/fp'
  export default subWeeks
}

declare module 'date-fns/fp/subYears/index' {
  import { subYears } from 'date-fns/fp'
  export default subYears
}

declare module 'date-fns/fp/toDate/index' {
  import { toDate } from 'date-fns/fp'
  export default toDate
}

declare module 'date-fns/fp/weeksToDays/index' {
  import { weeksToDays } from 'date-fns/fp'
  export default weeksToDays
}

declare module 'date-fns/fp/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns/fp'
  export default yearsToMonths
}

declare module 'date-fns/fp/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns/fp'
  export default yearsToQuarters
}

declare module 'date-fns/fp/add/index.js' {
  import { add } from 'date-fns/fp'
  export default add
}

declare module 'date-fns/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/fp'
  export default addBusinessDays
}

declare module 'date-fns/fp/addDays/index.js' {
  import { addDays } from 'date-fns/fp'
  export default addDays
}

declare module 'date-fns/fp/addHours/index.js' {
  import { addHours } from 'date-fns/fp'
  export default addHours
}

declare module 'date-fns/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/fp'
  export default addISOWeekYears
}

declare module 'date-fns/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/fp'
  export default addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/fp'
  export default addMinutes
}

declare module 'date-fns/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns/fp'
  export default addMonths
}

declare module 'date-fns/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/fp'
  export default addQuarters
}

declare module 'date-fns/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/fp'
  export default addSeconds
}

declare module 'date-fns/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/fp'
  export default addWeeks
}

declare module 'date-fns/fp/addYears/index.js' {
  import { addYears } from 'date-fns/fp'
  export default addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/fp/clamp/index.js' {
  import { clamp } from 'date-fns/fp'
  export default clamp
}

declare module 'date-fns/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/fp'
  export default closestIndexTo
}

declare module 'date-fns/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns/fp'
  export default closestTo
}

declare module 'date-fns/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/fp'
  export default compareAsc
}

declare module 'date-fns/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/fp'
  export default compareDesc
}

declare module 'date-fns/fp/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns/fp'
  export default daysToWeeks
}

declare module 'date-fns/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/fp'
  export default differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/fp'
  export default differenceInHours
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index.js' {
  import { differenceInHoursWithOptions } from 'date-fns/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/fp'
  export default differenceInMinutes
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index.js' {
  import { differenceInMinutesWithOptions } from 'date-fns/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/fp'
  export default differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/fp'
  export default differenceInQuarters
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index.js' {
  import { differenceInQuartersWithOptions } from 'date-fns/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/fp'
  export default differenceInSeconds
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index.js' {
  import { differenceInSecondsWithOptions } from 'date-fns/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/fp'
  export default differenceInWeeks
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index.js' {
  import { differenceInWeeksWithOptions } from 'date-fns/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/fp'
  export default differenceInYears
}

declare module 'date-fns/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/fp/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/fp/eachHourOfIntervalWithOptions/index.js' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/fp/eachMinuteOfIntervalWithOptions/index.js' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/fp/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/fp'
  export default endOfDay
}

declare module 'date-fns/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/fp'
  export default endOfDecade
}

declare module 'date-fns/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/fp'
  export default endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/fp'
  export default endOfISOWeek
}

declare module 'date-fns/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/fp'
  export default endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/fp'
  export default endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/fp'
  export default endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/fp'
  export default endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/fp'
  export default endOfWeek
}

declare module 'date-fns/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/fp'
  export default endOfYear
}

declare module 'date-fns/fp/format/index.js' {
  import { format } from 'date-fns/fp'
  export default format
}

declare module 'date-fns/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/fp'
  export default formatDistance
}

declare module 'date-fns/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/fp/formatDuration/index.js' {
  import { formatDuration } from 'date-fns/fp'
  export default formatDuration
}

declare module 'date-fns/fp/formatDurationWithOptions/index.js' {
  import { formatDurationWithOptions } from 'date-fns/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns/fp'
  export default formatISO
}

declare module 'date-fns/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns/fp'
  export default formatISO9075
}

declare module 'date-fns/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns/fp'
  export default formatISODuration
}

declare module 'date-fns/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/fp'
  export default formatRelative
}

declare module 'date-fns/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns/fp'
  export default formatRFC3339
}

declare module 'date-fns/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns/fp'
  export default formatRFC7231
}

declare module 'date-fns/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/fp'
  export default formatWithOptions
}

declare module 'date-fns/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/fp'
  export default fromUnixTime
}

declare module 'date-fns/fp/getDate/index.js' {
  import { getDate } from 'date-fns/fp'
  export default getDate
}

declare module 'date-fns/fp/getDay/index.js' {
  import { getDay } from 'date-fns/fp'
  export default getDay
}

declare module 'date-fns/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/fp'
  export default getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/fp'
  export default getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/fp'
  export default getDaysInYear
}

declare module 'date-fns/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns/fp'
  export default getDecade
}

declare module 'date-fns/fp/getHours/index.js' {
  import { getHours } from 'date-fns/fp'
  export default getHours
}

declare module 'date-fns/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns/fp'
  export default getISODay
}

declare module 'date-fns/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/fp'
  export default getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/fp'
  export default getISOWeekYear
}

declare module 'date-fns/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/fp'
  export default getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/fp'
  export default getMinutes
}

declare module 'date-fns/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns/fp'
  export default getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/fp'
  export default getQuarter
}

declare module 'date-fns/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/fp'
  export default getSeconds
}

declare module 'date-fns/fp/getTime/index.js' {
  import { getTime } from 'date-fns/fp'
  export default getTime
}

declare module 'date-fns/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/fp'
  export default getUnixTime
}

declare module 'date-fns/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns/fp'
  export default getWeek
}

declare module 'date-fns/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/fp'
  export default getWeekYear
}

declare module 'date-fns/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/fp/getYear/index.js' {
  import { getYear } from 'date-fns/fp'
  export default getYear
}

declare module 'date-fns/fp/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/fp/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns/fp'
  export default hoursToMinutes
}

declare module 'date-fns/fp/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns/fp'
  export default hoursToSeconds
}

declare module 'date-fns/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns/fp'
  export default intervalToDuration
}

declare module 'date-fns/fp/intlFormat/index.js' {
  import { intlFormat } from 'date-fns/fp'
  export default intlFormat
}

declare module 'date-fns/fp/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns/fp'
  export default intlFormatDistance
}

declare module 'date-fns/fp/intlFormatDistanceWithOptions/index.js' {
  import { intlFormatDistanceWithOptions } from 'date-fns/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns/fp'
  export default isAfter
}

declare module 'date-fns/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns/fp'
  export default isBefore
}

declare module 'date-fns/fp/isDate/index.js' {
  import { isDate } from 'date-fns/fp'
  export default isDate
}

declare module 'date-fns/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns/fp'
  export default isEqual
}

declare module 'date-fns/fp/isExists/index.js' {
  import { isExists } from 'date-fns/fp'
  export default isExists
}

declare module 'date-fns/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns/fp'
  export default isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/fp'
  export default isLeapYear
}

declare module 'date-fns/fp/isMatch/index.js' {
  import { isMatch } from 'date-fns/fp'
  export default isMatch
}

declare module 'date-fns/fp/isMatchWithOptions/index.js' {
  import { isMatchWithOptions } from 'date-fns/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns/fp'
  export default isMonday
}

declare module 'date-fns/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/fp'
  export default isSameDay
}

declare module 'date-fns/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/fp'
  export default isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/fp'
  export default isSameISOWeek
}

declare module 'date-fns/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/fp'
  export default isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/fp'
  export default isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/fp'
  export default isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/fp'
  export default isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/fp'
  export default isSameWeek
}

declare module 'date-fns/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/fp'
  export default isSameYear
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/fp'
  export default isSaturday
}

declare module 'date-fns/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/fp'
  export default isSunday
}

declare module 'date-fns/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns/fp'
  export default isThursday
}

declare module 'date-fns/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/fp'
  export default isTuesday
}

declare module 'date-fns/fp/isValid/index.js' {
  import { isValid } from 'date-fns/fp'
  export default isValid
}

declare module 'date-fns/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/fp'
  export default isWednesday
}

declare module 'date-fns/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/fp'
  export default isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/fp'
  export default isWithinInterval
}

declare module 'date-fns/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/fp'
  export default lastDayOfYear
}

declare module 'date-fns/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/fp'
  export default lightFormat
}

declare module 'date-fns/fp/max/index.js' {
  import { max } from 'date-fns/fp'
  export default max
}

declare module 'date-fns/fp/milliseconds/index.js' {
  import { milliseconds } from 'date-fns/fp'
  export default milliseconds
}

declare module 'date-fns/fp/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns/fp'
  export default millisecondsToHours
}

declare module 'date-fns/fp/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/fp/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/fp/min/index.js' {
  import { min } from 'date-fns/fp'
  export default min
}

declare module 'date-fns/fp/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns/fp'
  export default minutesToHours
}

declare module 'date-fns/fp/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/fp/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns/fp'
  export default minutesToSeconds
}

declare module 'date-fns/fp/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns/fp'
  export default monthsToQuarters
}

declare module 'date-fns/fp/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns/fp'
  export default monthsToYears
}

declare module 'date-fns/fp/nextDay/index.js' {
  import { nextDay } from 'date-fns/fp'
  export default nextDay
}

declare module 'date-fns/fp/nextFriday/index.js' {
  import { nextFriday } from 'date-fns/fp'
  export default nextFriday
}

declare module 'date-fns/fp/nextMonday/index.js' {
  import { nextMonday } from 'date-fns/fp'
  export default nextMonday
}

declare module 'date-fns/fp/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns/fp'
  export default nextSaturday
}

declare module 'date-fns/fp/nextSunday/index.js' {
  import { nextSunday } from 'date-fns/fp'
  export default nextSunday
}

declare module 'date-fns/fp/nextThursday/index.js' {
  import { nextThursday } from 'date-fns/fp'
  export default nextThursday
}

declare module 'date-fns/fp/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns/fp'
  export default nextTuesday
}

declare module 'date-fns/fp/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns/fp'
  export default nextWednesday
}

declare module 'date-fns/fp/parse/index.js' {
  import { parse } from 'date-fns/fp'
  export default parse
}

declare module 'date-fns/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/fp'
  export default parseISO
}

declare module 'date-fns/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns/fp'
  export default parseJSON
}

declare module 'date-fns/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/fp'
  export default parseWithOptions
}

declare module 'date-fns/fp/previousDay/index.js' {
  import { previousDay } from 'date-fns/fp'
  export default previousDay
}

declare module 'date-fns/fp/previousFriday/index.js' {
  import { previousFriday } from 'date-fns/fp'
  export default previousFriday
}

declare module 'date-fns/fp/previousMonday/index.js' {
  import { previousMonday } from 'date-fns/fp'
  export default previousMonday
}

declare module 'date-fns/fp/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns/fp'
  export default previousSaturday
}

declare module 'date-fns/fp/previousSunday/index.js' {
  import { previousSunday } from 'date-fns/fp'
  export default previousSunday
}

declare module 'date-fns/fp/previousThursday/index.js' {
  import { previousThursday } from 'date-fns/fp'
  export default previousThursday
}

declare module 'date-fns/fp/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns/fp'
  export default previousTuesday
}

declare module 'date-fns/fp/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns/fp'
  export default previousWednesday
}

declare module 'date-fns/fp/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns/fp'
  export default quartersToMonths
}

declare module 'date-fns/fp/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns/fp'
  export default quartersToYears
}

declare module 'date-fns/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/fp/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns/fp'
  export default secondsToHours
}

declare module 'date-fns/fp/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/fp/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns/fp'
  export default secondsToMinutes
}

declare module 'date-fns/fp/set/index.js' {
  import { set } from 'date-fns/fp'
  export default set
}

declare module 'date-fns/fp/setDate/index.js' {
  import { setDate } from 'date-fns/fp'
  export default setDate
}

declare module 'date-fns/fp/setDay/index.js' {
  import { setDay } from 'date-fns/fp'
  export default setDay
}

declare module 'date-fns/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/fp'
  export default setDayOfYear
}

declare module 'date-fns/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns/fp'
  export default setDayWithOptions
}

declare module 'date-fns/fp/setHours/index.js' {
  import { setHours } from 'date-fns/fp'
  export default setHours
}

declare module 'date-fns/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns/fp'
  export default setISODay
}

declare module 'date-fns/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/fp'
  export default setISOWeek
}

declare module 'date-fns/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/fp'
  export default setISOWeekYear
}

declare module 'date-fns/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/fp'
  export default setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/fp'
  export default setMinutes
}

declare module 'date-fns/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns/fp'
  export default setMonth
}

declare module 'date-fns/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/fp'
  export default setQuarter
}

declare module 'date-fns/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/fp'
  export default setSeconds
}

declare module 'date-fns/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns/fp'
  export default setWeek
}

declare module 'date-fns/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/fp'
  export default setWeekYear
}

declare module 'date-fns/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/fp/setYear/index.js' {
  import { setYear } from 'date-fns/fp'
  export default setYear
}

declare module 'date-fns/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/fp'
  export default startOfDay
}

declare module 'date-fns/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/fp'
  export default startOfDecade
}

declare module 'date-fns/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/fp'
  export default startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/fp'
  export default startOfISOWeek
}

declare module 'date-fns/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/fp'
  export default startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/fp'
  export default startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/fp'
  export default startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/fp'
  export default startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/fp'
  export default startOfWeek
}

declare module 'date-fns/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/fp'
  export default startOfWeekYear
}

declare module 'date-fns/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/fp'
  export default startOfYear
}

declare module 'date-fns/fp/sub/index.js' {
  import { sub } from 'date-fns/fp'
  export default sub
}

declare module 'date-fns/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns/fp'
  export default subBusinessDays
}

declare module 'date-fns/fp/subDays/index.js' {
  import { subDays } from 'date-fns/fp'
  export default subDays
}

declare module 'date-fns/fp/subHours/index.js' {
  import { subHours } from 'date-fns/fp'
  export default subHours
}

declare module 'date-fns/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/fp'
  export default subISOWeekYears
}

declare module 'date-fns/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/fp'
  export default subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/fp'
  export default subMinutes
}

declare module 'date-fns/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns/fp'
  export default subMonths
}

declare module 'date-fns/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/fp'
  export default subQuarters
}

declare module 'date-fns/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/fp'
  export default subSeconds
}

declare module 'date-fns/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/fp'
  export default subWeeks
}

declare module 'date-fns/fp/subYears/index.js' {
  import { subYears } from 'date-fns/fp'
  export default subYears
}

declare module 'date-fns/fp/toDate/index.js' {
  import { toDate } from 'date-fns/fp'
  export default toDate
}

declare module 'date-fns/fp/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns/fp'
  export default weeksToDays
}

declare module 'date-fns/fp/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns/fp'
  export default yearsToMonths
}

declare module 'date-fns/fp/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns/fp'
  export default yearsToQuarters
}

// ECMAScript Module Functions

declare module 'date-fns/esm' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function clamp(date: Date | number, interval: Interval): Date
  namespace clamp {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function daysToWeeks(days: number): number
  namespace daysToWeeks {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachHourOfInterval {}

  function eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachMinuteOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachQuarterOfInterval(interval: Interval): Date[]
  namespace eachQuarterOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string
  namespace formatDuration {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getDefaultOptions(): Object
  namespace getDefaultOptions {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function hoursToMilliseconds(hours: number): number
  namespace hoursToMilliseconds {}

  function hoursToMinutes(hours: number): number
  namespace hoursToMinutes {}

  function hoursToSeconds(hours: number): number
  namespace hoursToSeconds {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string
  namespace intlFormat {}

  function intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string
  namespace intlFormatDistance {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
  namespace isMatch {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function milliseconds(duration: Duration): number
  namespace milliseconds {}

  function millisecondsToHours(milliseconds: number): number
  namespace millisecondsToHours {}

  function millisecondsToMinutes(milliseconds: number): number
  namespace millisecondsToMinutes {}

  function millisecondsToSeconds(milliseconds: number): number
  namespace millisecondsToSeconds {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function minutesToHours(minutes: number): number
  namespace minutesToHours {}

  function minutesToMilliseconds(minutes: number): number
  namespace minutesToMilliseconds {}

  function minutesToSeconds(minutes: number): number
  namespace minutesToSeconds {}

  function monthsToQuarters(months: number): number
  namespace monthsToQuarters {}

  function monthsToYears(months: number): number
  namespace monthsToYears {}

  function nextDay(date: Date | number, day: Day): Date
  namespace nextDay {}

  function nextFriday(date: Date | number): Date
  namespace nextFriday {}

  function nextMonday(date: Date | number): Date
  namespace nextMonday {}

  function nextSaturday(date: Date | number): Date
  namespace nextSaturday {}

  function nextSunday(date: Date | number): Date
  namespace nextSunday {}

  function nextThursday(date: Date | number): Date
  namespace nextThursday {}

  function nextTuesday(date: Date | number): Date
  namespace nextTuesday {}

  function nextWednesday(date: Date | number): Date
  namespace nextWednesday {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function previousDay(date: Date | number, day: number): Date
  namespace previousDay {}

  function previousFriday(date: Date | number): Date
  namespace previousFriday {}

  function previousMonday(date: Date | number): Date
  namespace previousMonday {}

  function previousSaturday(date: Date | number): Date
  namespace previousSaturday {}

  function previousSunday(date: Date | number): Date
  namespace previousSunday {}

  function previousThursday(date: Date | number): Date
  namespace previousThursday {}

  function previousTuesday(date: Date | number): Date
  namespace previousTuesday {}

  function previousWednesday(date: Date | number): Date
  namespace previousWednesday {}

  function quartersToMonths(quarters: number): number
  namespace quartersToMonths {}

  function quartersToYears(quarters: number): number
  namespace quartersToYears {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
      roundingMethod?: string
    }
  ): Date
  namespace roundToNearestMinutes {}

  function secondsToHours(seconds: number): number
  namespace secondsToHours {}

  function secondsToMilliseconds(seconds: number): number
  namespace secondsToMilliseconds {}

  function secondsToMinutes(seconds: number): number
  namespace secondsToMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void
  namespace setDefaultOptions {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  function weeksToDays(weeks: number): number
  namespace weeksToDays {}

  function yearsToMonths(years: number): number
  namespace yearsToMonths {}

  function yearsToQuarters(years: number): number
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/esm/add' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/clamp' {
  import { clamp } from 'date-fns/esm'
  export default clamp
}

declare module 'date-fns/esm/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/daysToWeeks' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
}

declare module 'date-fns/esm/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/endOfDay' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
}

declare module 'date-fns/esm/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
}

declare module 'date-fns/esm/getHours' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
}

declare module 'date-fns/esm/isAfter' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isExists' {
  import { isExists } from 'date-fns/esm'
  export default isExists
}

declare module 'date-fns/esm/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMatch' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
}

declare module 'date-fns/esm/isMonday' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/milliseconds' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set' {
  import { set } from 'date-fns/esm'
  export default set
}

declare module 'date-fns/esm/setDate' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
}

declare module 'date-fns/esm/setHours' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/sub' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
}

declare module 'date-fns/esm/subDays' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/weeksToDays' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}

declare module 'date-fns/esm/add/index' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays/index' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/clamp/index' {
  import { clamp } from 'date-fns/esm'
  export default clamp
}

declare module 'date-fns/esm/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
}

declare module 'date-fns/esm/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/endOfDay/index' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour/index' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday/index' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format/index' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration/index' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO/index' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration/index' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
}

declare module 'date-fns/esm/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate/index' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade/index' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
}

declare module 'date-fns/esm/getHours/index' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek/index' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat/index' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
}

declare module 'date-fns/esm/isAfter/index' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isExists/index' {
  import { isExists } from 'date-fns/esm'
  export default isExists
}

declare module 'date-fns/esm/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture/index' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMatch/index' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
}

declare module 'date-fns/esm/isMonday/index' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast/index' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay/index' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour/index' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute/index' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth/index' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond/index' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek/index' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear/index' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday/index' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday/index' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow/index' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday/index' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday/index' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat/index' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max/index' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/milliseconds/index' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min/index' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours/index' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears/index' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay/index' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday/index' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday/index' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday/index' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday/index' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday/index' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday/index' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday/index' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse/index' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON/index' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay/index' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday/index' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday/index' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday/index' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday/index' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday/index' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday/index' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday/index' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears/index' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours/index' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set/index' {
  import { set } from 'date-fns/esm'
  export default set
}

declare module 'date-fns/esm/setDate/index' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
}

declare module 'date-fns/esm/setHours/index' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour/index' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday/index' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/sub/index' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
}

declare module 'date-fns/esm/subDays/index' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/weeksToDays/index' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}

declare module 'date-fns/esm/add/index.js' {
  import { add } from 'date-fns/esm'
  export default add
}

declare module 'date-fns/esm/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/esm'
  export default addBusinessDays
}

declare module 'date-fns/esm/addDays/index.js' {
  import { addDays } from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index.js' {
  import { addHours } from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/esm'
  export default addISOWeekYears
}

declare module 'date-fns/esm/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index.js' {
  import { addMonths } from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index.js' {
  import { addYears } from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/clamp/index.js' {
  import { clamp } from 'date-fns/esm'
  export default clamp
}

declare module 'date-fns/esm/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index.js' {
  import { closestTo } from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns/esm'
  export default daysToWeeks
}

declare module 'date-fns/esm/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns/esm'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns/esm'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/esm'
  export default endOfDecade
}

declare module 'date-fns/esm/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfToday/index.js' {
  import { endOfToday } from 'date-fns/esm'
  export default endOfToday
}

declare module 'date-fns/esm/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns/esm'
  export default endOfTomorrow
}

declare module 'date-fns/esm/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns/esm'
  export default endOfYesterday
}

declare module 'date-fns/esm/format/index.js' {
  import { format } from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm'
  export default formatDistance
}

declare module 'date-fns/esm/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/esm'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns/esm'
  export default formatDistanceToNow
}

declare module 'date-fns/esm/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns/esm/formatDuration/index.js' {
  import { formatDuration } from 'date-fns/esm'
  export default formatDuration
}

declare module 'date-fns/esm/formatISO/index.js' {
  import { formatISO } from 'date-fns/esm'
  export default formatISO
}

declare module 'date-fns/esm/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns/esm'
  export default formatISO9075
}

declare module 'date-fns/esm/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns/esm'
  export default formatISODuration
}

declare module 'date-fns/esm/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm'
  export default formatRelative
}

declare module 'date-fns/esm/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns/esm'
  export default formatRFC3339
}

declare module 'date-fns/esm/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns/esm'
  export default formatRFC7231
}

declare module 'date-fns/esm/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/esm'
  export default fromUnixTime
}

declare module 'date-fns/esm/getDate/index.js' {
  import { getDate } from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index.js' {
  import { getDay } from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getDecade/index.js' {
  import { getDecade } from 'date-fns/esm'
  export default getDecade
}

declare module 'date-fns/esm/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns/esm'
  export default getDefaultOptions
}

declare module 'date-fns/esm/getHours/index.js' {
  import { getHours } from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index.js' {
  import { getISODay } from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/esm'
  export default getISOWeekYear
}

declare module 'date-fns/esm/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index.js' {
  import { getMonth } from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index.js' {
  import { getTime } from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/esm'
  export default getUnixTime
}

declare module 'date-fns/esm/getWeek/index.js' {
  import { getWeek } from 'date-fns/esm'
  export default getWeek
}

declare module 'date-fns/esm/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/esm'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/esm'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/esm'
  export default getWeekYear
}

declare module 'date-fns/esm/getYear/index.js' {
  import { getYear } from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns/esm'
  export default hoursToMinutes
}

declare module 'date-fns/esm/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns/esm'
  export default hoursToSeconds
}

declare module 'date-fns/esm/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns/esm'
  export default intervalToDuration
}

declare module 'date-fns/esm/intlFormat/index.js' {
  import { intlFormat } from 'date-fns/esm'
  export default intlFormat
}

declare module 'date-fns/esm/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns/esm'
  export default intlFormatDistance
}

declare module 'date-fns/esm/isAfter/index.js' {
  import { isAfter } from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index.js' {
  import { isBefore } from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index.js' {
  import { isDate } from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index.js' {
  import { isEqual } from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isExists/index.js' {
  import { isExists } from 'date-fns/esm'
  export default isExists
}

declare module 'date-fns/esm/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index.js' {
  import { isFriday } from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isFuture/index.js' {
  import { isFuture } from 'date-fns/esm'
  export default isFuture
}

declare module 'date-fns/esm/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMatch/index.js' {
  import { isMatch } from 'date-fns/esm'
  export default isMatch
}

declare module 'date-fns/esm/isMonday/index.js' {
  import { isMonday } from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isPast/index.js' {
  import { isPast } from 'date-fns/esm'
  export default isPast
}

declare module 'date-fns/esm/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThisHour/index.js' {
  import { isThisHour } from 'date-fns/esm'
  export default isThisHour
}

declare module 'date-fns/esm/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns/esm'
  export default isThisISOWeek
}

declare module 'date-fns/esm/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns/esm'
  export default isThisMinute
}

declare module 'date-fns/esm/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns/esm'
  export default isThisMonth
}

declare module 'date-fns/esm/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns/esm'
  export default isThisQuarter
}

declare module 'date-fns/esm/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns/esm'
  export default isThisSecond
}

declare module 'date-fns/esm/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns/esm'
  export default isThisWeek
}

declare module 'date-fns/esm/isThisYear/index.js' {
  import { isThisYear } from 'date-fns/esm'
  export default isThisYear
}

declare module 'date-fns/esm/isThursday/index.js' {
  import { isThursday } from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isToday/index.js' {
  import { isToday } from 'date-fns/esm'
  export default isToday
}

declare module 'date-fns/esm/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns/esm'
  export default isTomorrow
}

declare module 'date-fns/esm/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index.js' {
  import { isValid } from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/isYesterday/index.js' {
  import { isYesterday } from 'date-fns/esm'
  export default isYesterday
}

declare module 'date-fns/esm/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/esm'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/esm'
  export default lightFormat
}

declare module 'date-fns/esm/max/index.js' {
  import { max } from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/milliseconds/index.js' {
  import { milliseconds } from 'date-fns/esm'
  export default milliseconds
}

declare module 'date-fns/esm/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns/esm'
  export default millisecondsToHours
}

declare module 'date-fns/esm/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/min/index.js' {
  import { min } from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns/esm'
  export default minutesToHours
}

declare module 'date-fns/esm/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns/esm'
  export default minutesToSeconds
}

declare module 'date-fns/esm/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns/esm'
  export default monthsToQuarters
}

declare module 'date-fns/esm/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns/esm'
  export default monthsToYears
}

declare module 'date-fns/esm/nextDay/index.js' {
  import { nextDay } from 'date-fns/esm'
  export default nextDay
}

declare module 'date-fns/esm/nextFriday/index.js' {
  import { nextFriday } from 'date-fns/esm'
  export default nextFriday
}

declare module 'date-fns/esm/nextMonday/index.js' {
  import { nextMonday } from 'date-fns/esm'
  export default nextMonday
}

declare module 'date-fns/esm/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns/esm'
  export default nextSaturday
}

declare module 'date-fns/esm/nextSunday/index.js' {
  import { nextSunday } from 'date-fns/esm'
  export default nextSunday
}

declare module 'date-fns/esm/nextThursday/index.js' {
  import { nextThursday } from 'date-fns/esm'
  export default nextThursday
}

declare module 'date-fns/esm/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns/esm'
  export default nextTuesday
}

declare module 'date-fns/esm/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns/esm'
  export default nextWednesday
}

declare module 'date-fns/esm/parse/index.js' {
  import { parse } from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm'
  export default parseISO
}

declare module 'date-fns/esm/parseJSON/index.js' {
  import { parseJSON } from 'date-fns/esm'
  export default parseJSON
}

declare module 'date-fns/esm/previousDay/index.js' {
  import { previousDay } from 'date-fns/esm'
  export default previousDay
}

declare module 'date-fns/esm/previousFriday/index.js' {
  import { previousFriday } from 'date-fns/esm'
  export default previousFriday
}

declare module 'date-fns/esm/previousMonday/index.js' {
  import { previousMonday } from 'date-fns/esm'
  export default previousMonday
}

declare module 'date-fns/esm/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns/esm'
  export default previousSaturday
}

declare module 'date-fns/esm/previousSunday/index.js' {
  import { previousSunday } from 'date-fns/esm'
  export default previousSunday
}

declare module 'date-fns/esm/previousThursday/index.js' {
  import { previousThursday } from 'date-fns/esm'
  export default previousThursday
}

declare module 'date-fns/esm/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns/esm'
  export default previousTuesday
}

declare module 'date-fns/esm/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns/esm'
  export default previousWednesday
}

declare module 'date-fns/esm/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns/esm'
  export default quartersToMonths
}

declare module 'date-fns/esm/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns/esm'
  export default quartersToYears
}

declare module 'date-fns/esm/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns/esm'
  export default secondsToHours
}

declare module 'date-fns/esm/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns/esm'
  export default secondsToMinutes
}

declare module 'date-fns/esm/set/index.js' {
  import { set } from 'date-fns/esm'
  export default set
}

declare module 'date-fns/esm/setDate/index.js' {
  import { setDate } from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index.js' {
  import { setDay } from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns/esm'
  export default setDefaultOptions
}

declare module 'date-fns/esm/setHours/index.js' {
  import { setHours } from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index.js' {
  import { setISODay } from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/esm'
  export default setISOWeekYear
}

declare module 'date-fns/esm/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index.js' {
  import { setMonth } from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setWeek/index.js' {
  import { setWeek } from 'date-fns/esm'
  export default setWeek
}

declare module 'date-fns/esm/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/esm'
  export default setWeekYear
}

declare module 'date-fns/esm/setYear/index.js' {
  import { setYear } from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/esm'
  export default startOfDecade
}

declare module 'date-fns/esm/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfToday/index.js' {
  import { startOfToday } from 'date-fns/esm'
  export default startOfToday
}

declare module 'date-fns/esm/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns/esm'
  export default startOfTomorrow
}

declare module 'date-fns/esm/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/esm'
  export default startOfWeekYear
}

declare module 'date-fns/esm/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns/esm'
  export default startOfYesterday
}

declare module 'date-fns/esm/sub/index.js' {
  import { sub } from 'date-fns/esm'
  export default sub
}

declare module 'date-fns/esm/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns/esm'
  export default subBusinessDays
}

declare module 'date-fns/esm/subDays/index.js' {
  import { subDays } from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index.js' {
  import { subHours } from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/esm'
  export default subISOWeekYears
}

declare module 'date-fns/esm/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index.js' {
  import { subMonths } from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index.js' {
  import { subYears } from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index.js' {
  import { toDate } from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns/esm'
  export default weeksToDays
}

declare module 'date-fns/esm/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns/esm'
  export default yearsToMonths
}

declare module 'date-fns/esm/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns/esm'
  export default yearsToQuarters
}

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const clamp: CurriedFn2<Interval, Date | number, Date>
  namespace clamp {}

  const closestIndexTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    number | undefined
  >
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    Date | undefined
  >
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const daysToWeeks: CurriedFn1<number, number>
  namespace daysToWeeks {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachHourOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachHourOfInterval {}

  const eachHourOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachHourOfIntervalWithOptions {}

  const eachMinuteOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMinuteOfInterval {}

  const eachMinuteOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachMinuteOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachQuarterOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachQuarterOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatDuration: CurriedFn1<Duration, string>
  namespace formatDuration {}

  const formatDurationWithOptions: CurriedFn2<
    {
      locale?: Locale
      delimiter?: string
      zero?: boolean
      format?: string[]
    },
    Duration,
    string
  >
  namespace formatDurationWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const hoursToMilliseconds: CurriedFn1<number, number>
  namespace hoursToMilliseconds {}

  const hoursToMinutes: CurriedFn1<number, number>
  namespace hoursToMinutes {}

  const hoursToSeconds: CurriedFn1<number, number>
  namespace hoursToSeconds {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const intlFormat: CurriedFn3<
    {
      locale?: string | string[]
    },
    {
      timeZone?: string
      hour12?: boolean
      formatMatcher?: 'basic' | 'best fit'
      timeZoneName?: 'short' | 'long'
      second?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      day?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      era?: 'narrow' | 'short' | 'long'
      weekday?: 'narrow' | 'short' | 'long'
      localeMatcher?: 'lookup' | 'best fit'
    },
    Date | number,
    string
  >
  namespace intlFormat {}

  const intlFormatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace intlFormatDistance {}

  const intlFormatDistanceWithOptions: CurriedFn3<
    {
      style?: string
      numeric?: string
      localeMatcher?: string
      locale?: string | string[]
      unit?: string
    },
    Date | number,
    Date | number,
    string
  >
  namespace intlFormatDistanceWithOptions {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMatch: CurriedFn2<string, string, boolean>
  namespace isMatch {}

  const isMatchWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    string,
    boolean
  >
  namespace isMatchWithOptions {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const milliseconds: CurriedFn1<Duration, number>
  namespace milliseconds {}

  const millisecondsToHours: CurriedFn1<number, number>
  namespace millisecondsToHours {}

  const millisecondsToMinutes: CurriedFn1<number, number>
  namespace millisecondsToMinutes {}

  const millisecondsToSeconds: CurriedFn1<number, number>
  namespace millisecondsToSeconds {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const minutesToHours: CurriedFn1<number, number>
  namespace minutesToHours {}

  const minutesToMilliseconds: CurriedFn1<number, number>
  namespace minutesToMilliseconds {}

  const minutesToSeconds: CurriedFn1<number, number>
  namespace minutesToSeconds {}

  const monthsToQuarters: CurriedFn1<number, number>
  namespace monthsToQuarters {}

  const monthsToYears: CurriedFn1<number, number>
  namespace monthsToYears {}

  const nextDay: CurriedFn2<Day, Date | number, Date>
  namespace nextDay {}

  const nextFriday: CurriedFn1<Date | number, Date>
  namespace nextFriday {}

  const nextMonday: CurriedFn1<Date | number, Date>
  namespace nextMonday {}

  const nextSaturday: CurriedFn1<Date | number, Date>
  namespace nextSaturday {}

  const nextSunday: CurriedFn1<Date | number, Date>
  namespace nextSunday {}

  const nextThursday: CurriedFn1<Date | number, Date>
  namespace nextThursday {}

  const nextTuesday: CurriedFn1<Date | number, Date>
  namespace nextTuesday {}

  const nextWednesday: CurriedFn1<Date | number, Date>
  namespace nextWednesday {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const previousDay: CurriedFn2<number, Date | number, Date>
  namespace previousDay {}

  const previousFriday: CurriedFn1<Date | number, Date>
  namespace previousFriday {}

  const previousMonday: CurriedFn1<Date | number, Date>
  namespace previousMonday {}

  const previousSaturday: CurriedFn1<Date | number, Date>
  namespace previousSaturday {}

  const previousSunday: CurriedFn1<Date | number, Date>
  namespace previousSunday {}

  const previousThursday: CurriedFn1<Date | number, Date>
  namespace previousThursday {}

  const previousTuesday: CurriedFn1<Date | number, Date>
  namespace previousTuesday {}

  const previousWednesday: CurriedFn1<Date | number, Date>
  namespace previousWednesday {}

  const quartersToMonths: CurriedFn1<number, number>
  namespace quartersToMonths {}

  const quartersToYears: CurriedFn1<number, number>
  namespace quartersToYears {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      roundingMethod?: string
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const secondsToHours: CurriedFn1<number, number>
  namespace secondsToHours {}

  const secondsToMilliseconds: CurriedFn1<number, number>
  namespace secondsToMilliseconds {}

  const secondsToMinutes: CurriedFn1<number, number>
  namespace secondsToMinutes {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const weeksToDays: CurriedFn1<number, number>
  namespace weeksToDays {}

  const yearsToMonths: CurriedFn1<number, number>
  namespace yearsToMonths {}

  const yearsToQuarters: CurriedFn1<number, number>
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns/esm/fp/add' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
}

declare module 'date-fns/esm/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/daysToWeeks' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns/esm/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/fp/endOfDay' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatDuration' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns/esm/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/esm/fp/isAfter' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isExists' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMatch' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/esm/fp/isMonday' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/milliseconds' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
}

declare module 'date-fns/esm/fp/parse' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseJSON' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set' {
  import { set } from 'date-fns/esm/fp'
  export default set
}

declare module 'date-fns/esm/fp/setDate' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/sub' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns/esm/fp/subDays' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/weeksToDays' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns/esm/fp/add/index' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays/index' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp/index' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
}

declare module 'date-fns/esm/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns/esm/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions/index' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions/index' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatDuration/index' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions/index' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO/index' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns/esm/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate/index' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade/index' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours/index' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek/index' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat/index' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions/index' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/esm/fp/isAfter/index' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isExists/index' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMatch/index' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions/index' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/esm/fp/isMonday/index' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max/index' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/milliseconds/index' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min/index' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours/index' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears/index' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay/index' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday/index' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday/index' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday/index' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday/index' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday/index' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday/index' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday/index' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
}

declare module 'date-fns/esm/fp/parse/index' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay/index' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday/index' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday/index' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday/index' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday/index' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday/index' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday/index' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday/index' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears/index' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours/index' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set/index' {
  import { set } from 'date-fns/esm/fp'
  export default set
}

declare module 'date-fns/esm/fp/setDate/index' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek/index' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/sub/index' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns/esm/fp/subDays/index' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/weeksToDays/index' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns/esm/fp/add/index.js' {
  import { add } from 'date-fns/esm/fp'
  export default add
}

declare module 'date-fns/esm/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns/esm/fp/addDays/index.js' {
  import { addDays } from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index.js' {
  import { addHours } from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index.js' {
  import { addYears } from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns/esm/fp/clamp/index.js' {
  import { clamp } from 'date-fns/esm/fp'
  export default clamp
}

declare module 'date-fns/esm/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns/esm/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index.js' {
  import { differenceInHoursWithOptions } from 'date-fns/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns/esm/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index.js' {
  import { differenceInMinutesWithOptions } from 'date-fns/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns/esm/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index.js' {
  import { differenceInQuartersWithOptions } from 'date-fns/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns/esm/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index.js' {
  import { differenceInSecondsWithOptions } from 'date-fns/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns/esm/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index.js' {
  import { differenceInWeeksWithOptions } from 'date-fns/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns/esm/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns/esm/fp/eachHourOfIntervalWithOptions/index.js' {
  import { eachHourOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns/esm/fp/eachMinuteOfIntervalWithOptions/index.js' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns/esm/fp/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns/esm/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns/esm/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns/esm/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns/esm/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns/esm/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns/esm/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns/esm/fp'
  export default endOfDecade
}

declare module 'date-fns/esm/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns/esm/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns/esm/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns/esm/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index.js' {
  import { format } from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns/esm/fp'
  export default formatDistance
}

declare module 'date-fns/esm/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns/esm/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns/esm/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns/esm/fp/formatDuration/index.js' {
  import { formatDuration } from 'date-fns/esm/fp'
  export default formatDuration
}

declare module 'date-fns/esm/fp/formatDurationWithOptions/index.js' {
  import { formatDurationWithOptions } from 'date-fns/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns/esm/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns/esm/fp'
  export default formatISO
}

declare module 'date-fns/esm/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns/esm/fp'
  export default formatISO9075
}

declare module 'date-fns/esm/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns/esm/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns/esm/fp'
  export default formatISODuration
}

declare module 'date-fns/esm/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns/esm/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns/esm/fp'
  export default formatRelative
}

declare module 'date-fns/esm/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns/esm/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns/esm/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns/esm/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns/esm/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns/esm/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns/esm/fp/getDate/index.js' {
  import { getDate } from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index.js' {
  import { getDay } from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns/esm/fp'
  export default getDecade
}

declare module 'date-fns/esm/fp/getHours/index.js' {
  import { getHours } from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index.js' {
  import { getTime } from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns/esm/fp'
  export default getUnixTime
}

declare module 'date-fns/esm/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns/esm/fp'
  export default getWeek
}

declare module 'date-fns/esm/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns/esm/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns/esm/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns/esm/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns/esm/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns/esm/fp'
  export default getWeekYear
}

declare module 'date-fns/esm/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns/esm/fp/getYear/index.js' {
  import { getYear } from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns/esm/fp/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns/esm/fp/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns/esm/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns/esm/fp/intlFormat/index.js' {
  import { intlFormat } from 'date-fns/esm/fp'
  export default intlFormat
}

declare module 'date-fns/esm/fp/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns/esm/fp/intlFormatDistanceWithOptions/index.js' {
  import { intlFormatDistanceWithOptions } from 'date-fns/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns/esm/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index.js' {
  import { isDate } from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isExists/index.js' {
  import { isExists } from 'date-fns/esm/fp'
  export default isExists
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMatch/index.js' {
  import { isMatch } from 'date-fns/esm/fp'
  export default isMatch
}

declare module 'date-fns/esm/fp/isMatchWithOptions/index.js' {
  import { isMatchWithOptions } from 'date-fns/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns/esm/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns/esm/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns/esm/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index.js' {
  import { isValid } from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns/esm/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns/esm/fp'
  export default lightFormat
}

declare module 'date-fns/esm/fp/max/index.js' {
  import { max } from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/milliseconds/index.js' {
  import { milliseconds } from 'date-fns/esm/fp'
  export default milliseconds
}

declare module 'date-fns/esm/fp/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns/esm/fp/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns/esm/fp/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns/esm/fp/min/index.js' {
  import { min } from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns/esm/fp'
  export default minutesToHours
}

declare module 'date-fns/esm/fp/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns/esm/fp/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns/esm/fp/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns/esm/fp/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns/esm/fp'
  export default monthsToYears
}

declare module 'date-fns/esm/fp/nextDay/index.js' {
  import { nextDay } from 'date-fns/esm/fp'
  export default nextDay
}

declare module 'date-fns/esm/fp/nextFriday/index.js' {
  import { nextFriday } from 'date-fns/esm/fp'
  export default nextFriday
}

declare module 'date-fns/esm/fp/nextMonday/index.js' {
  import { nextMonday } from 'date-fns/esm/fp'
  export default nextMonday
}

declare module 'date-fns/esm/fp/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns/esm/fp'
  export default nextSaturday
}

declare module 'date-fns/esm/fp/nextSunday/index.js' {
  import { nextSunday } from 'date-fns/esm/fp'
  export default nextSunday
}

declare module 'date-fns/esm/fp/nextThursday/index.js' {
  import { nextThursday } from 'date-fns/esm/fp'
  export default nextThursday
}

declare module 'date-fns/esm/fp/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns/esm/fp'
  export default nextTuesday
}

declare module 'date-fns/esm/fp/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns/esm/fp'
  export default nextWednesday
}

declare module 'date-fns/esm/fp/parse/index.js' {
  import { parse } from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns/esm/fp'
  export default parseISO
}

declare module 'date-fns/esm/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns/esm/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns/esm/fp'
  export default parseJSON
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns/esm/fp/previousDay/index.js' {
  import { previousDay } from 'date-fns/esm/fp'
  export default previousDay
}

declare module 'date-fns/esm/fp/previousFriday/index.js' {
  import { previousFriday } from 'date-fns/esm/fp'
  export default previousFriday
}

declare module 'date-fns/esm/fp/previousMonday/index.js' {
  import { previousMonday } from 'date-fns/esm/fp'
  export default previousMonday
}

declare module 'date-fns/esm/fp/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns/esm/fp'
  export default previousSaturday
}

declare module 'date-fns/esm/fp/previousSunday/index.js' {
  import { previousSunday } from 'date-fns/esm/fp'
  export default previousSunday
}

declare module 'date-fns/esm/fp/previousThursday/index.js' {
  import { previousThursday } from 'date-fns/esm/fp'
  export default previousThursday
}

declare module 'date-fns/esm/fp/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns/esm/fp'
  export default previousTuesday
}

declare module 'date-fns/esm/fp/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns/esm/fp'
  export default previousWednesday
}

declare module 'date-fns/esm/fp/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns/esm/fp/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns/esm/fp'
  export default quartersToYears
}

declare module 'date-fns/esm/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns/esm/fp/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns/esm/fp'
  export default secondsToHours
}

declare module 'date-fns/esm/fp/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns/esm/fp/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns/esm/fp/set/index.js' {
  import { set } from 'date-fns/esm/fp'
  export default set
}

declare module 'date-fns/esm/fp/setDate/index.js' {
  import { setDate } from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index.js' {
  import { setDay } from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns/esm/fp/setHours/index.js' {
  import { setHours } from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns/esm/fp'
  export default setWeek
}

declare module 'date-fns/esm/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns/esm/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns/esm/fp'
  export default setWeekYear
}

declare module 'date-fns/esm/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns/esm/fp/setYear/index.js' {
  import { setYear } from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns/esm/fp'
  export default startOfDecade
}

declare module 'date-fns/esm/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns/esm/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns/esm/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns/esm/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns/esm/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/sub/index.js' {
  import { sub } from 'date-fns/esm/fp'
  export default sub
}

declare module 'date-fns/esm/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns/esm/fp/subDays/index.js' {
  import { subDays } from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index.js' {
  import { subHours } from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index.js' {
  import { subYears } from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index.js' {
  import { toDate } from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns/esm/fp'
  export default weeksToDays
}

declare module 'date-fns/esm/fp/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns/esm/fp/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns/esm/fp'
  export default yearsToQuarters
}

// Regular Locales

declare module 'date-fns/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const arEG: Locale
  namespace arEG {}

  const arMA: Locale
  namespace arMA {}

  const arSA: Locale
  namespace arSA {}

  const arTN: Locale
  namespace arTN {}

  const az: Locale
  namespace az {}

  const be: Locale
  namespace be {}

  const beTarask: Locale
  namespace beTarask {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const bs: Locale
  namespace bs {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const deAT: Locale
  namespace deAT {}

  const el: Locale
  namespace el {}

  const enAU: Locale
  namespace enAU {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enIE: Locale
  namespace enIE {}

  const enIN: Locale
  namespace enIN {}

  const enNZ: Locale
  namespace enNZ {}

  const enUS: Locale
  namespace enUS {}

  const enZA: Locale
  namespace enZA {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const eu: Locale
  namespace eu {}

  const faIR: Locale
  namespace faIR {}

  const fi: Locale
  namespace fi {}

  const fr: Locale
  namespace fr {}

  const frCA: Locale
  namespace frCA {}

  const frCH: Locale
  namespace frCH {}

  const fy: Locale
  namespace fy {}

  const gd: Locale
  namespace gd {}

  const gl: Locale
  namespace gl {}

  const gu: Locale
  namespace gu {}

  const he: Locale
  namespace he {}

  const hi: Locale
  namespace hi {}

  const hr: Locale
  namespace hr {}

  const ht: Locale
  namespace ht {}

  const hu: Locale
  namespace hu {}

  const hy: Locale
  namespace hy {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const itCH: Locale
  namespace itCH {}

  const ja: Locale
  namespace ja {}

  const jaHira: Locale
  namespace jaHira {}

  const ka: Locale
  namespace ka {}

  const kk: Locale
  namespace kk {}

  const km: Locale
  namespace km {}

  const kn: Locale
  namespace kn {}

  const ko: Locale
  namespace ko {}

  const lb: Locale
  namespace lb {}

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

  const mk: Locale
  namespace mk {}

  const mn: Locale
  namespace mn {}

  const ms: Locale
  namespace ms {}

  const mt: Locale
  namespace mt {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const nn: Locale
  namespace nn {}

  const oc: Locale
  namespace oc {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sl: Locale
  namespace sl {}

  const sq: Locale
  namespace sq {}

  const sr: Locale
  namespace sr {}

  const srLatn: Locale
  namespace srLatn {}

  const sv: Locale
  namespace sv {}

  const ta: Locale
  namespace ta {}

  const te: Locale
  namespace te {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

  const uk: Locale
  namespace uk {}

  const uz: Locale
  namespace uz {}

  const uzCyrl: Locale
  namespace uzCyrl {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhHK: Locale
  namespace zhHK {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns/locale/af' {
  import { af } from 'date-fns/locale'
  export default af
}

declare module 'date-fns/locale/ar' {
  import { ar } from 'date-fns/locale'
  export default ar
}

declare module 'date-fns/locale/ar-DZ' {
  import { arDZ } from 'date-fns/locale'
  export default arDZ
}

declare module 'date-fns/locale/ar-EG' {
  import { arEG } from 'date-fns/locale'
  export default arEG
}

declare module 'date-fns/locale/ar-MA' {
  import { arMA } from 'date-fns/locale'
  export default arMA
}

declare module 'date-fns/locale/ar-SA' {
  import { arSA } from 'date-fns/locale'
  export default arSA
}

declare module 'date-fns/locale/ar-TN' {
  import { arTN } from 'date-fns/locale'
  export default arTN
}

declare module 'date-fns/locale/az' {
  import { az } from 'date-fns/locale'
  export default az
}

declare module 'date-fns/locale/be' {
  import { be } from 'date-fns/locale'
  export default be
}

declare module 'date-fns/locale/be-tarask' {
  import { beTarask } from 'date-fns/locale'
  export default beTarask
}

declare module 'date-fns/locale/bg' {
  import { bg } from 'date-fns/locale'
  export default bg
}

declare module 'date-fns/locale/bn' {
  import { bn } from 'date-fns/locale'
  export default bn
}

declare module 'date-fns/locale/bs' {
  import { bs } from 'date-fns/locale'
  export default bs
}

declare module 'date-fns/locale/ca' {
  import { ca } from 'date-fns/locale'
  export default ca
}

declare module 'date-fns/locale/cs' {
  import { cs } from 'date-fns/locale'
  export default cs
}

declare module 'date-fns/locale/cy' {
  import { cy } from 'date-fns/locale'
  export default cy
}

declare module 'date-fns/locale/da' {
  import { da } from 'date-fns/locale'
  export default da
}

declare module 'date-fns/locale/de' {
  import { de } from 'date-fns/locale'
  export default de
}

declare module 'date-fns/locale/de-AT' {
  import { deAT } from 'date-fns/locale'
  export default deAT
}

declare module 'date-fns/locale/el' {
  import { el } from 'date-fns/locale'
  export default el
}

declare module 'date-fns/locale/en-AU' {
  import { enAU } from 'date-fns/locale'
  export default enAU
}

declare module 'date-fns/locale/en-CA' {
  import { enCA } from 'date-fns/locale'
  export default enCA
}

declare module 'date-fns/locale/en-GB' {
  import { enGB } from 'date-fns/locale'
  export default enGB
}

declare module 'date-fns/locale/en-IE' {
  import { enIE } from 'date-fns/locale'
  export default enIE
}

declare module 'date-fns/locale/en-IN' {
  import { enIN } from 'date-fns/locale'
  export default enIN
}

declare module 'date-fns/locale/en-NZ' {
  import { enNZ } from 'date-fns/locale'
  export default enNZ
}

declare module 'date-fns/locale/en-US' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/en-ZA' {
  import { enZA } from 'date-fns/locale'
  export default enZA
}

declare module 'date-fns/locale/eo' {
  import { eo } from 'date-fns/locale'
  export default eo
}

declare module 'date-fns/locale/es' {
  import { es } from 'date-fns/locale'
  export default es
}

declare module 'date-fns/locale/et' {
  import { et } from 'date-fns/locale'
  export default et
}

declare module 'date-fns/locale/eu' {
  import { eu } from 'date-fns/locale'
  export default eu
}

declare module 'date-fns/locale/fa-IR' {
  import { faIR } from 'date-fns/locale'
  export default faIR
}

declare module 'date-fns/locale/fi' {
  import { fi } from 'date-fns/locale'
  export default fi
}

declare module 'date-fns/locale/fr' {
  import { fr } from 'date-fns/locale'
  export default fr
}

declare module 'date-fns/locale/fr-CA' {
  import { frCA } from 'date-fns/locale'
  export default frCA
}

declare module 'date-fns/locale/fr-CH' {
  import { frCH } from 'date-fns/locale'
  export default frCH
}

declare module 'date-fns/locale/fy' {
  import { fy } from 'date-fns/locale'
  export default fy
}

declare module 'date-fns/locale/gd' {
  import { gd } from 'date-fns/locale'
  export default gd
}

declare module 'date-fns/locale/gl' {
  import { gl } from 'date-fns/locale'
  export default gl
}

declare module 'date-fns/locale/gu' {
  import { gu } from 'date-fns/locale'
  export default gu
}

declare module 'date-fns/locale/he' {
  import { he } from 'date-fns/locale'
  export default he
}

declare module 'date-fns/locale/hi' {
  import { hi } from 'date-fns/locale'
  export default hi
}

declare module 'date-fns/locale/hr' {
  import { hr } from 'date-fns/locale'
  export default hr
}

declare module 'date-fns/locale/ht' {
  import { ht } from 'date-fns/locale'
  export default ht
}

declare module 'date-fns/locale/hu' {
  import { hu } from 'date-fns/locale'
  export default hu
}

declare module 'date-fns/locale/hy' {
  import { hy } from 'date-fns/locale'
  export default hy
}

declare module 'date-fns/locale/id' {
  import { id } from 'date-fns/locale'
  export default id
}

declare module 'date-fns/locale/is' {
  import { is } from 'date-fns/locale'
  export default is
}

declare module 'date-fns/locale/it' {
  import { it } from 'date-fns/locale'
  export default it
}

declare module 'date-fns/locale/it-CH' {
  import { itCH } from 'date-fns/locale'
  export default itCH
}

declare module 'date-fns/locale/ja' {
  import { ja } from 'date-fns/locale'
  export default ja
}

declare module 'date-fns/locale/ja-Hira' {
  import { jaHira } from 'date-fns/locale'
  export default jaHira
}

declare module 'date-fns/locale/ka' {
  import { ka } from 'date-fns/locale'
  export default ka
}

declare module 'date-fns/locale/kk' {
  import { kk } from 'date-fns/locale'
  export default kk
}

declare module 'date-fns/locale/km' {
  import { km } from 'date-fns/locale'
  export default km
}

declare module 'date-fns/locale/kn' {
  import { kn } from 'date-fns/locale'
  export default kn
}

declare module 'date-fns/locale/ko' {
  import { ko } from 'date-fns/locale'
  export default ko
}

declare module 'date-fns/locale/lb' {
  import { lb } from 'date-fns/locale'
  export default lb
}

declare module 'date-fns/locale/lt' {
  import { lt } from 'date-fns/locale'
  export default lt
}

declare module 'date-fns/locale/lv' {
  import { lv } from 'date-fns/locale'
  export default lv
}

declare module 'date-fns/locale/mk' {
  import { mk } from 'date-fns/locale'
  export default mk
}

declare module 'date-fns/locale/mn' {
  import { mn } from 'date-fns/locale'
  export default mn
}

declare module 'date-fns/locale/ms' {
  import { ms } from 'date-fns/locale'
  export default ms
}

declare module 'date-fns/locale/mt' {
  import { mt } from 'date-fns/locale'
  export default mt
}

declare module 'date-fns/locale/nb' {
  import { nb } from 'date-fns/locale'
  export default nb
}

declare module 'date-fns/locale/nl' {
  import { nl } from 'date-fns/locale'
  export default nl
}

declare module 'date-fns/locale/nl-BE' {
  import { nlBE } from 'date-fns/locale'
  export default nlBE
}

declare module 'date-fns/locale/nn' {
  import { nn } from 'date-fns/locale'
  export default nn
}

declare module 'date-fns/locale/oc' {
  import { oc } from 'date-fns/locale'
  export default oc
}

declare module 'date-fns/locale/pl' {
  import { pl } from 'date-fns/locale'
  export default pl
}

declare module 'date-fns/locale/pt' {
  import { pt } from 'date-fns/locale'
  export default pt
}

declare module 'date-fns/locale/pt-BR' {
  import { ptBR } from 'date-fns/locale'
  export default ptBR
}

declare module 'date-fns/locale/ro' {
  import { ro } from 'date-fns/locale'
  export default ro
}

declare module 'date-fns/locale/ru' {
  import { ru } from 'date-fns/locale'
  export default ru
}

declare module 'date-fns/locale/sk' {
  import { sk } from 'date-fns/locale'
  export default sk
}

declare module 'date-fns/locale/sl' {
  import { sl } from 'date-fns/locale'
  export default sl
}

declare module 'date-fns/locale/sq' {
  import { sq } from 'date-fns/locale'
  export default sq
}

declare module 'date-fns/locale/sr' {
  import { sr } from 'date-fns/locale'
  export default sr
}

declare module 'date-fns/locale/sr-Latn' {
  import { srLatn } from 'date-fns/locale'
  export default srLatn
}

declare module 'date-fns/locale/sv' {
  import { sv } from 'date-fns/locale'
  export default sv
}

declare module 'date-fns/locale/ta' {
  import { ta } from 'date-fns/locale'
  export default ta
}

declare module 'date-fns/locale/te' {
  import { te } from 'date-fns/locale'
  export default te
}

declare module 'date-fns/locale/th' {
  import { th } from 'date-fns/locale'
  export default th
}

declare module 'date-fns/locale/tr' {
  import { tr } from 'date-fns/locale'
  export default tr
}

declare module 'date-fns/locale/ug' {
  import { ug } from 'date-fns/locale'
  export default ug
}

declare module 'date-fns/locale/uk' {
  import { uk } from 'date-fns/locale'
  export default uk
}

declare module 'date-fns/locale/uz' {
  import { uz } from 'date-fns/locale'
  export default uz
}

declare module 'date-fns/locale/uz-Cyrl' {
  import { uzCyrl } from 'date-fns/locale'
  export default uzCyrl
}

declare module 'date-fns/locale/vi' {
  import { vi } from 'date-fns/locale'
  export default vi
}

declare module 'date-fns/locale/zh-CN' {
  import { zhCN } from 'date-fns/locale'
  export default zhCN
}

declare module 'date-fns/locale/zh-HK' {
  import { zhHK } from 'date-fns/locale'
  export default zhHK
}

declare module 'date-fns/locale/zh-TW' {
  import { zhTW } from 'date-fns/locale'
  export default zhTW
}

declare module 'date-fns/locale/af/index' {
  import { af } from 'date-fns/locale'
  export default af
}

declare module 'date-fns/locale/ar/index' {
  import { ar } from 'date-fns/locale'
  export default ar
}

declare module 'date-fns/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns/locale'
  export default arDZ
}

declare module 'date-fns/locale/ar-EG/index' {
  import { arEG } from 'date-fns/locale'
  export default arEG
}

declare module 'date-fns/locale/ar-MA/index' {
  import { arMA } from 'date-fns/locale'
  export default arMA
}

declare module 'date-fns/locale/ar-SA/index' {
  import { arSA } from 'date-fns/locale'
  export default arSA
}

declare module 'date-fns/locale/ar-TN/index' {
  import { arTN } from 'date-fns/locale'
  export default arTN
}

declare module 'date-fns/locale/az/index' {
  import { az } from 'date-fns/locale'
  export default az
}

declare module 'date-fns/locale/be/index' {
  import { be } from 'date-fns/locale'
  export default be
}

declare module 'date-fns/locale/be-tarask/index' {
  import { beTarask } from 'date-fns/locale'
  export default beTarask
}

declare module 'date-fns/locale/bg/index' {
  import { bg } from 'date-fns/locale'
  export default bg
}

declare module 'date-fns/locale/bn/index' {
  import { bn } from 'date-fns/locale'
  export default bn
}

declare module 'date-fns/locale/bs/index' {
  import { bs } from 'date-fns/locale'
  export default bs
}

declare module 'date-fns/locale/ca/index' {
  import { ca } from 'date-fns/locale'
  export default ca
}

declare module 'date-fns/locale/cs/index' {
  import { cs } from 'date-fns/locale'
  export default cs
}

declare module 'date-fns/locale/cy/index' {
  import { cy } from 'date-fns/locale'
  export default cy
}

declare module 'date-fns/locale/da/index' {
  import { da } from 'date-fns/locale'
  export default da
}

declare module 'date-fns/locale/de/index' {
  import { de } from 'date-fns/locale'
  export default de
}

declare module 'date-fns/locale/de-AT/index' {
  import { deAT } from 'date-fns/locale'
  export default deAT
}

declare module 'date-fns/locale/el/index' {
  import { el } from 'date-fns/locale'
  export default el
}

declare module 'date-fns/locale/en-AU/index' {
  import { enAU } from 'date-fns/locale'
  export default enAU
}

declare module 'date-fns/locale/en-CA/index' {
  import { enCA } from 'date-fns/locale'
  export default enCA
}

declare module 'date-fns/locale/en-GB/index' {
  import { enGB } from 'date-fns/locale'
  export default enGB
}

declare module 'date-fns/locale/en-IE/index' {
  import { enIE } from 'date-fns/locale'
  export default enIE
}

declare module 'date-fns/locale/en-IN/index' {
  import { enIN } from 'date-fns/locale'
  export default enIN
}

declare module 'date-fns/locale/en-NZ/index' {
  import { enNZ } from 'date-fns/locale'
  export default enNZ
}

declare module 'date-fns/locale/en-US/index' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/en-ZA/index' {
  import { enZA } from 'date-fns/locale'
  export default enZA
}

declare module 'date-fns/locale/eo/index' {
  import { eo } from 'date-fns/locale'
  export default eo
}

declare module 'date-fns/locale/es/index' {
  import { es } from 'date-fns/locale'
  export default es
}

declare module 'date-fns/locale/et/index' {
  import { et } from 'date-fns/locale'
  export default et
}

declare module 'date-fns/locale/eu/index' {
  import { eu } from 'date-fns/locale'
  export default eu
}

declare module 'date-fns/locale/fa-IR/index' {
  import { faIR } from 'date-fns/locale'
  export default faIR
}

declare module 'date-fns/locale/fi/index' {
  import { fi } from 'date-fns/locale'
  export default fi
}

declare module 'date-fns/locale/fr/index' {
  import { fr } from 'date-fns/locale'
  export default fr
}

declare module 'date-fns/locale/fr-CA/index' {
  import { frCA } from 'date-fns/locale'
  export default frCA
}

declare module 'date-fns/locale/fr-CH/index' {
  import { frCH } from 'date-fns/locale'
  export default frCH
}

declare module 'date-fns/locale/fy/index' {
  import { fy } from 'date-fns/locale'
  export default fy
}

declare module 'date-fns/locale/gd/index' {
  import { gd } from 'date-fns/locale'
  export default gd
}

declare module 'date-fns/locale/gl/index' {
  import { gl } from 'date-fns/locale'
  export default gl
}

declare module 'date-fns/locale/gu/index' {
  import { gu } from 'date-fns/locale'
  export default gu
}

declare module 'date-fns/locale/he/index' {
  import { he } from 'date-fns/locale'
  export default he
}

declare module 'date-fns/locale/hi/index' {
  import { hi } from 'date-fns/locale'
  export default hi
}

declare module 'date-fns/locale/hr/index' {
  import { hr } from 'date-fns/locale'
  export default hr
}

declare module 'date-fns/locale/ht/index' {
  import { ht } from 'date-fns/locale'
  export default ht
}

declare module 'date-fns/locale/hu/index' {
  import { hu } from 'date-fns/locale'
  export default hu
}

declare module 'date-fns/locale/hy/index' {
  import { hy } from 'date-fns/locale'
  export default hy
}

declare module 'date-fns/locale/id/index' {
  import { id } from 'date-fns/locale'
  export default id
}

declare module 'date-fns/locale/is/index' {
  import { is } from 'date-fns/locale'
  export default is
}

declare module 'date-fns/locale/it/index' {
  import { it } from 'date-fns/locale'
  export default it
}

declare module 'date-fns/locale/it-CH/index' {
  import { itCH } from 'date-fns/locale'
  export default itCH
}

declare module 'date-fns/locale/ja/index' {
  import { ja } from 'date-fns/locale'
  export default ja
}

declare module 'date-fns/locale/ja-Hira/index' {
  import { jaHira } from 'date-fns/locale'
  export default jaHira
}

declare module 'date-fns/locale/ka/index' {
  import { ka } from 'date-fns/locale'
  export default ka
}

declare module 'date-fns/locale/kk/index' {
  import { kk } from 'date-fns/locale'
  export default kk
}

declare module 'date-fns/locale/km/index' {
  import { km } from 'date-fns/locale'
  export default km
}

declare module 'date-fns/locale/kn/index' {
  import { kn } from 'date-fns/locale'
  export default kn
}

declare module 'date-fns/locale/ko/index' {
  import { ko } from 'date-fns/locale'
  export default ko
}

declare module 'date-fns/locale/lb/index' {
  import { lb } from 'date-fns/locale'
  export default lb
}

declare module 'date-fns/locale/lt/index' {
  import { lt } from 'date-fns/locale'
  export default lt
}

declare module 'date-fns/locale/lv/index' {
  import { lv } from 'date-fns/locale'
  export default lv
}

declare module 'date-fns/locale/mk/index' {
  import { mk } from 'date-fns/locale'
  export default mk
}

declare module 'date-fns/locale/mn/index' {
  import { mn } from 'date-fns/locale'
  export default mn
}

declare module 'date-fns/locale/ms/index' {
  import { ms } from 'date-fns/locale'
  export default ms
}

declare module 'date-fns/locale/mt/index' {
  import { mt } from 'date-fns/locale'
  export default mt
}

declare module 'date-fns/locale/nb/index' {
  import { nb } from 'date-fns/locale'
  export default nb
}

declare module 'date-fns/locale/nl/index' {
  import { nl } from 'date-fns/locale'
  export default nl
}

declare module 'date-fns/locale/nl-BE/index' {
  import { nlBE } from 'date-fns/locale'
  export default nlBE
}

declare module 'date-fns/locale/nn/index' {
  import { nn } from 'date-fns/locale'
  export default nn
}

declare module 'date-fns/locale/oc/index' {
  import { oc } from 'date-fns/locale'
  export default oc
}

declare module 'date-fns/locale/pl/index' {
  import { pl } from 'date-fns/locale'
  export default pl
}

declare module 'date-fns/locale/pt/index' {
  import { pt } from 'date-fns/locale'
  export default pt
}

declare module 'date-fns/locale/pt-BR/index' {
  import { ptBR } from 'date-fns/locale'
  export default ptBR
}

declare module 'date-fns/locale/ro/index' {
  import { ro } from 'date-fns/locale'
  export default ro
}

declare module 'date-fns/locale/ru/index' {
  import { ru } from 'date-fns/locale'
  export default ru
}

declare module 'date-fns/locale/sk/index' {
  import { sk } from 'date-fns/locale'
  export default sk
}

declare module 'date-fns/locale/sl/index' {
  import { sl } from 'date-fns/locale'
  export default sl
}

declare module 'date-fns/locale/sq/index' {
  import { sq } from 'date-fns/locale'
  export default sq
}

declare module 'date-fns/locale/sr/index' {
  import { sr } from 'date-fns/locale'
  export default sr
}

declare module 'date-fns/locale/sr-Latn/index' {
  import { srLatn } from 'date-fns/locale'
  export default srLatn
}

declare module 'date-fns/locale/sv/index' {
  import { sv } from 'date-fns/locale'
  export default sv
}

declare module 'date-fns/locale/ta/index' {
  import { ta } from 'date-fns/locale'
  export default ta
}

declare module 'date-fns/locale/te/index' {
  import { te } from 'date-fns/locale'
  export default te
}

declare module 'date-fns/locale/th/index' {
  import { th } from 'date-fns/locale'
  export default th
}

declare module 'date-fns/locale/tr/index' {
  import { tr } from 'date-fns/locale'
  export default tr
}

declare module 'date-fns/locale/ug/index' {
  import { ug } from 'date-fns/locale'
  export default ug
}

declare module 'date-fns/locale/uk/index' {
  import { uk } from 'date-fns/locale'
  export default uk
}

declare module 'date-fns/locale/uz/index' {
  import { uz } from 'date-fns/locale'
  export default uz
}

declare module 'date-fns/locale/uz-Cyrl/index' {
  import { uzCyrl } from 'date-fns/locale'
  export default uzCyrl
}

declare module 'date-fns/locale/vi/index' {
  import { vi } from 'date-fns/locale'
  export default vi
}

declare module 'date-fns/locale/zh-CN/index' {
  import { zhCN } from 'date-fns/locale'
  export default zhCN
}

declare module 'date-fns/locale/zh-HK/index' {
  import { zhHK } from 'date-fns/locale'
  export default zhHK
}

declare module 'date-fns/locale/zh-TW/index' {
  import { zhTW } from 'date-fns/locale'
  export default zhTW
}

declare module 'date-fns/locale/af/index.js' {
  import { af } from 'date-fns/locale'
  export default af
}

declare module 'date-fns/locale/ar/index.js' {
  import { ar } from 'date-fns/locale'
  export default ar
}

declare module 'date-fns/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns/locale'
  export default arDZ
}

declare module 'date-fns/locale/ar-EG/index.js' {
  import { arEG } from 'date-fns/locale'
  export default arEG
}

declare module 'date-fns/locale/ar-MA/index.js' {
  import { arMA } from 'date-fns/locale'
  export default arMA
}

declare module 'date-fns/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns/locale'
  export default arSA
}

declare module 'date-fns/locale/ar-TN/index.js' {
  import { arTN } from 'date-fns/locale'
  export default arTN
}

declare module 'date-fns/locale/az/index.js' {
  import { az } from 'date-fns/locale'
  export default az
}

declare module 'date-fns/locale/be/index.js' {
  import { be } from 'date-fns/locale'
  export default be
}

declare module 'date-fns/locale/be-tarask/index.js' {
  import { beTarask } from 'date-fns/locale'
  export default beTarask
}

declare module 'date-fns/locale/bg/index.js' {
  import { bg } from 'date-fns/locale'
  export default bg
}

declare module 'date-fns/locale/bn/index.js' {
  import { bn } from 'date-fns/locale'
  export default bn
}

declare module 'date-fns/locale/bs/index.js' {
  import { bs } from 'date-fns/locale'
  export default bs
}

declare module 'date-fns/locale/ca/index.js' {
  import { ca } from 'date-fns/locale'
  export default ca
}

declare module 'date-fns/locale/cs/index.js' {
  import { cs } from 'date-fns/locale'
  export default cs
}

declare module 'date-fns/locale/cy/index.js' {
  import { cy } from 'date-fns/locale'
  export default cy
}

declare module 'date-fns/locale/da/index.js' {
  import { da } from 'date-fns/locale'
  export default da
}

declare module 'date-fns/locale/de/index.js' {
  import { de } from 'date-fns/locale'
  export default de
}

declare module 'date-fns/locale/de-AT/index.js' {
  import { deAT } from 'date-fns/locale'
  export default deAT
}

declare module 'date-fns/locale/el/index.js' {
  import { el } from 'date-fns/locale'
  export default el
}

declare module 'date-fns/locale/en-AU/index.js' {
  import { enAU } from 'date-fns/locale'
  export default enAU
}

declare module 'date-fns/locale/en-CA/index.js' {
  import { enCA } from 'date-fns/locale'
  export default enCA
}

declare module 'date-fns/locale/en-GB/index.js' {
  import { enGB } from 'date-fns/locale'
  export default enGB
}

declare module 'date-fns/locale/en-IE/index.js' {
  import { enIE } from 'date-fns/locale'
  export default enIE
}

declare module 'date-fns/locale/en-IN/index.js' {
  import { enIN } from 'date-fns/locale'
  export default enIN
}

declare module 'date-fns/locale/en-NZ/index.js' {
  import { enNZ } from 'date-fns/locale'
  export default enNZ
}

declare module 'date-fns/locale/en-US/index.js' {
  import { enUS } from 'date-fns/locale'
  export default enUS
}

declare module 'date-fns/locale/en-ZA/index.js' {
  import { enZA } from 'date-fns/locale'
  export default enZA
}

declare module 'date-fns/locale/eo/index.js' {
  import { eo } from 'date-fns/locale'
  export default eo
}

declare module 'date-fns/locale/es/index.js' {
  import { es } from 'date-fns/locale'
  export default es
}

declare module 'date-fns/locale/et/index.js' {
  import { et } from 'date-fns/locale'
  export default et
}

declare module 'date-fns/locale/eu/index.js' {
  import { eu } from 'date-fns/locale'
  export default eu
}

declare module 'date-fns/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns/locale'
  export default faIR
}

declare module 'date-fns/locale/fi/index.js' {
  import { fi } from 'date-fns/locale'
  export default fi
}

declare module 'date-fns/locale/fr/index.js' {
  import { fr } from 'date-fns/locale'
  export default fr
}

declare module 'date-fns/locale/fr-CA/index.js' {
  import { frCA } from 'date-fns/locale'
  export default frCA
}

declare module 'date-fns/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns/locale'
  export default frCH
}

declare module 'date-fns/locale/fy/index.js' {
  import { fy } from 'date-fns/locale'
  export default fy
}

declare module 'date-fns/locale/gd/index.js' {
  import { gd } from 'date-fns/locale'
  export default gd
}

declare module 'date-fns/locale/gl/index.js' {
  import { gl } from 'date-fns/locale'
  export default gl
}

declare module 'date-fns/locale/gu/index.js' {
  import { gu } from 'date-fns/locale'
  export default gu
}

declare module 'date-fns/locale/he/index.js' {
  import { he } from 'date-fns/locale'
  export default he
}

declare module 'date-fns/locale/hi/index.js' {
  import { hi } from 'date-fns/locale'
  export default hi
}

declare module 'date-fns/locale/hr/index.js' {
  import { hr } from 'date-fns/locale'
  export default hr
}

declare module 'date-fns/locale/ht/index.js' {
  import { ht } from 'date-fns/locale'
  export default ht
}

declare module 'date-fns/locale/hu/index.js' {
  import { hu } from 'date-fns/locale'
  export default hu
}

declare module 'date-fns/locale/hy/index.js' {
  import { hy } from 'date-fns/locale'
  export default hy
}

declare module 'date-fns/locale/id/index.js' {
  import { id } from 'date-fns/locale'
  export default id
}

declare module 'date-fns/locale/is/index.js' {
  import { is } from 'date-fns/locale'
  export default is
}

declare module 'date-fns/locale/it/index.js' {
  import { it } from 'date-fns/locale'
  export default it
}

declare module 'date-fns/locale/it-CH/index.js' {
  import { itCH } from 'date-fns/locale'
  export default itCH
}

declare module 'date-fns/locale/ja/index.js' {
  import { ja } from 'date-fns/locale'
  export default ja
}

declare module 'date-fns/locale/ja-Hira/index.js' {
  import { jaHira } from 'date-fns/locale'
  export default jaHira
}

declare module 'date-fns/locale/ka/index.js' {
  import { ka } from 'date-fns/locale'
  export default ka
}

declare module 'date-fns/locale/kk/index.js' {
  import { kk } from 'date-fns/locale'
  export default kk
}

declare module 'date-fns/locale/km/index.js' {
  import { km } from 'date-fns/locale'
  export default km
}

declare module 'date-fns/locale/kn/index.js' {
  import { kn } from 'date-fns/locale'
  export default kn
}

declare module 'date-fns/locale/ko/index.js' {
  import { ko } from 'date-fns/locale'
  export default ko
}

declare module 'date-fns/locale/lb/index.js' {
  import { lb } from 'date-fns/locale'
  export default lb
}

declare module 'date-fns/locale/lt/index.js' {
  import { lt } from 'date-fns/locale'
  export default lt
}

declare module 'date-fns/locale/lv/index.js' {
  import { lv } from 'date-fns/locale'
  export default lv
}

declare module 'date-fns/locale/mk/index.js' {
  import { mk } from 'date-fns/locale'
  export default mk
}

declare module 'date-fns/locale/mn/index.js' {
  import { mn } from 'date-fns/locale'
  export default mn
}

declare module 'date-fns/locale/ms/index.js' {
  import { ms } from 'date-fns/locale'
  export default ms
}

declare module 'date-fns/locale/mt/index.js' {
  import { mt } from 'date-fns/locale'
  export default mt
}

declare module 'date-fns/locale/nb/index.js' {
  import { nb } from 'date-fns/locale'
  export default nb
}

declare module 'date-fns/locale/nl/index.js' {
  import { nl } from 'date-fns/locale'
  export default nl
}

declare module 'date-fns/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns/locale'
  export default nlBE
}

declare module 'date-fns/locale/nn/index.js' {
  import { nn } from 'date-fns/locale'
  export default nn
}

declare module 'date-fns/locale/oc/index.js' {
  import { oc } from 'date-fns/locale'
  export default oc
}

declare module 'date-fns/locale/pl/index.js' {
  import { pl } from 'date-fns/locale'
  export default pl
}

declare module 'date-fns/locale/pt/index.js' {
  import { pt } from 'date-fns/locale'
  export default pt
}

declare module 'date-fns/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns/locale'
  export default ptBR
}

declare module 'date-fns/locale/ro/index.js' {
  import { ro } from 'date-fns/locale'
  export default ro
}

declare module 'date-fns/locale/ru/index.js' {
  import { ru } from 'date-fns/locale'
  export default ru
}

declare module 'date-fns/locale/sk/index.js' {
  import { sk } from 'date-fns/locale'
  export default sk
}

declare module 'date-fns/locale/sl/index.js' {
  import { sl } from 'date-fns/locale'
  export default sl
}

declare module 'date-fns/locale/sq/index.js' {
  import { sq } from 'date-fns/locale'
  export default sq
}

declare module 'date-fns/locale/sr/index.js' {
  import { sr } from 'date-fns/locale'
  export default sr
}

declare module 'date-fns/locale/sr-Latn/index.js' {
  import { srLatn } from 'date-fns/locale'
  export default srLatn
}

declare module 'date-fns/locale/sv/index.js' {
  import { sv } from 'date-fns/locale'
  export default sv
}

declare module 'date-fns/locale/ta/index.js' {
  import { ta } from 'date-fns/locale'
  export default ta
}

declare module 'date-fns/locale/te/index.js' {
  import { te } from 'date-fns/locale'
  export default te
}

declare module 'date-fns/locale/th/index.js' {
  import { th } from 'date-fns/locale'
  export default th
}

declare module 'date-fns/locale/tr/index.js' {
  import { tr } from 'date-fns/locale'
  export default tr
}

declare module 'date-fns/locale/ug/index.js' {
  import { ug } from 'date-fns/locale'
  export default ug
}

declare module 'date-fns/locale/uk/index.js' {
  import { uk } from 'date-fns/locale'
  export default uk
}

declare module 'date-fns/locale/uz/index.js' {
  import { uz } from 'date-fns/locale'
  export default uz
}

declare module 'date-fns/locale/uz-Cyrl/index.js' {
  import { uzCyrl } from 'date-fns/locale'
  export default uzCyrl
}

declare module 'date-fns/locale/vi/index.js' {
  import { vi } from 'date-fns/locale'
  export default vi
}

declare module 'date-fns/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns/locale'
  export default zhCN
}

declare module 'date-fns/locale/zh-HK/index.js' {
  import { zhHK } from 'date-fns/locale'
  export default zhHK
}

declare module 'date-fns/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns/locale'
  export default zhTW
}

// ECMAScript Module Locales

declare module 'date-fns/esm/locale' {
  const af: Locale
  namespace af {}

  const ar: Locale
  namespace ar {}

  const arDZ: Locale
  namespace arDZ {}

  const arEG: Locale
  namespace arEG {}

  const arMA: Locale
  namespace arMA {}

  const arSA: Locale
  namespace arSA {}

  const arTN: Locale
  namespace arTN {}

  const az: Locale
  namespace az {}

  const be: Locale
  namespace be {}

  const beTarask: Locale
  namespace beTarask {}

  const bg: Locale
  namespace bg {}

  const bn: Locale
  namespace bn {}

  const bs: Locale
  namespace bs {}

  const ca: Locale
  namespace ca {}

  const cs: Locale
  namespace cs {}

  const cy: Locale
  namespace cy {}

  const da: Locale
  namespace da {}

  const de: Locale
  namespace de {}

  const deAT: Locale
  namespace deAT {}

  const el: Locale
  namespace el {}

  const enAU: Locale
  namespace enAU {}

  const enCA: Locale
  namespace enCA {}

  const enGB: Locale
  namespace enGB {}

  const enIE: Locale
  namespace enIE {}

  const enIN: Locale
  namespace enIN {}

  const enNZ: Locale
  namespace enNZ {}

  const enUS: Locale
  namespace enUS {}

  const enZA: Locale
  namespace enZA {}

  const eo: Locale
  namespace eo {}

  const es: Locale
  namespace es {}

  const et: Locale
  namespace et {}

  const eu: Locale
  namespace eu {}

  const faIR: Locale
  namespace faIR {}

  const fi: Locale
  namespace fi {}

  const fr: Locale
  namespace fr {}

  const frCA: Locale
  namespace frCA {}

  const frCH: Locale
  namespace frCH {}

  const fy: Locale
  namespace fy {}

  const gd: Locale
  namespace gd {}

  const gl: Locale
  namespace gl {}

  const gu: Locale
  namespace gu {}

  const he: Locale
  namespace he {}

  const hi: Locale
  namespace hi {}

  const hr: Locale
  namespace hr {}

  const ht: Locale
  namespace ht {}

  const hu: Locale
  namespace hu {}

  const hy: Locale
  namespace hy {}

  const id: Locale
  namespace id {}

  const is: Locale
  namespace is {}

  const it: Locale
  namespace it {}

  const itCH: Locale
  namespace itCH {}

  const ja: Locale
  namespace ja {}

  const jaHira: Locale
  namespace jaHira {}

  const ka: Locale
  namespace ka {}

  const kk: Locale
  namespace kk {}

  const km: Locale
  namespace km {}

  const kn: Locale
  namespace kn {}

  const ko: Locale
  namespace ko {}

  const lb: Locale
  namespace lb {}

  const lt: Locale
  namespace lt {}

  const lv: Locale
  namespace lv {}

  const mk: Locale
  namespace mk {}

  const mn: Locale
  namespace mn {}

  const ms: Locale
  namespace ms {}

  const mt: Locale
  namespace mt {}

  const nb: Locale
  namespace nb {}

  const nl: Locale
  namespace nl {}

  const nlBE: Locale
  namespace nlBE {}

  const nn: Locale
  namespace nn {}

  const oc: Locale
  namespace oc {}

  const pl: Locale
  namespace pl {}

  const pt: Locale
  namespace pt {}

  const ptBR: Locale
  namespace ptBR {}

  const ro: Locale
  namespace ro {}

  const ru: Locale
  namespace ru {}

  const sk: Locale
  namespace sk {}

  const sl: Locale
  namespace sl {}

  const sq: Locale
  namespace sq {}

  const sr: Locale
  namespace sr {}

  const srLatn: Locale
  namespace srLatn {}

  const sv: Locale
  namespace sv {}

  const ta: Locale
  namespace ta {}

  const te: Locale
  namespace te {}

  const th: Locale
  namespace th {}

  const tr: Locale
  namespace tr {}

  const ug: Locale
  namespace ug {}

  const uk: Locale
  namespace uk {}

  const uz: Locale
  namespace uz {}

  const uzCyrl: Locale
  namespace uzCyrl {}

  const vi: Locale
  namespace vi {}

  const zhCN: Locale
  namespace zhCN {}

  const zhHK: Locale
  namespace zhHK {}

  const zhTW: Locale
  namespace zhTW {}
}

declare module 'date-fns/esm/locale/af' {
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-EG' {
  import { arEG } from 'date-fns/esm/locale'
  export default arEG
}

declare module 'date-fns/esm/locale/ar-MA' {
  import { arMA } from 'date-fns/esm/locale'
  export default arMA
}

declare module 'date-fns/esm/locale/ar-SA' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/ar-TN' {
  import { arTN } from 'date-fns/esm/locale'
  export default arTN
}

declare module 'date-fns/esm/locale/az' {
  import { az } from 'date-fns/esm/locale'
  export default az
}

declare module 'date-fns/esm/locale/be' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/be-tarask' {
  import { beTarask } from 'date-fns/esm/locale'
  export default beTarask
}

declare module 'date-fns/esm/locale/bg' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/bs' {
  import { bs } from 'date-fns/esm/locale'
  export default bs
}

declare module 'date-fns/esm/locale/ca' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/de-AT' {
  import { deAT } from 'date-fns/esm/locale'
  export default deAT
}

declare module 'date-fns/esm/locale/el' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-AU' {
  import { enAU } from 'date-fns/esm/locale'
  export default enAU
}

declare module 'date-fns/esm/locale/en-CA' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-IE' {
  import { enIE } from 'date-fns/esm/locale'
  export default enIE
}

declare module 'date-fns/esm/locale/en-IN' {
  import { enIN } from 'date-fns/esm/locale'
  export default enIN
}

declare module 'date-fns/esm/locale/en-NZ' {
  import { enNZ } from 'date-fns/esm/locale'
  export default enNZ
}

declare module 'date-fns/esm/locale/en-US' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/en-ZA' {
  import { enZA } from 'date-fns/esm/locale'
  export default enZA
}

declare module 'date-fns/esm/locale/eo' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/eu' {
  import { eu } from 'date-fns/esm/locale'
  export default eu
}

declare module 'date-fns/esm/locale/fa-IR' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fr' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CA' {
  import { frCA } from 'date-fns/esm/locale'
  export default frCA
}

declare module 'date-fns/esm/locale/fr-CH' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/fy' {
  import { fy } from 'date-fns/esm/locale'
  export default fy
}

declare module 'date-fns/esm/locale/gd' {
  import { gd } from 'date-fns/esm/locale'
  export default gd
}

declare module 'date-fns/esm/locale/gl' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/gu' {
  import { gu } from 'date-fns/esm/locale'
  export default gu
}

declare module 'date-fns/esm/locale/he' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hi' {
  import { hi } from 'date-fns/esm/locale'
  export default hi
}

declare module 'date-fns/esm/locale/hr' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/ht' {
  import { ht } from 'date-fns/esm/locale'
  export default ht
}

declare module 'date-fns/esm/locale/hu' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/hy' {
  import { hy } from 'date-fns/esm/locale'
  export default hy
}

declare module 'date-fns/esm/locale/id' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/it-CH' {
  import { itCH } from 'date-fns/esm/locale'
  export default itCH
}

declare module 'date-fns/esm/locale/ja' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ja-Hira' {
  import { jaHira } from 'date-fns/esm/locale'
  export default jaHira
}

declare module 'date-fns/esm/locale/ka' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/kk' {
  import { kk } from 'date-fns/esm/locale'
  export default kk
}

declare module 'date-fns/esm/locale/km' {
  import { km } from 'date-fns/esm/locale'
  export default km
}

declare module 'date-fns/esm/locale/kn' {
  import { kn } from 'date-fns/esm/locale'
  export default kn
}

declare module 'date-fns/esm/locale/ko' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lb' {
  import { lb } from 'date-fns/esm/locale'
  export default lb
}

declare module 'date-fns/esm/locale/lt' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/mn' {
  import { mn } from 'date-fns/esm/locale'
  export default mn
}

declare module 'date-fns/esm/locale/ms' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/mt' {
  import { mt } from 'date-fns/esm/locale'
  export default mt
}

declare module 'date-fns/esm/locale/nb' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/oc' {
  import { oc } from 'date-fns/esm/locale'
  export default oc
}

declare module 'date-fns/esm/locale/pl' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sq' {
  import { sq } from 'date-fns/esm/locale'
  export default sq
}

declare module 'date-fns/esm/locale/sr' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sr-Latn' {
  import { srLatn } from 'date-fns/esm/locale'
  export default srLatn
}

declare module 'date-fns/esm/locale/sv' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/ta' {
  import { ta } from 'date-fns/esm/locale'
  export default ta
}

declare module 'date-fns/esm/locale/te' {
  import { te } from 'date-fns/esm/locale'
  export default te
}

declare module 'date-fns/esm/locale/th' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/uz' {
  import { uz } from 'date-fns/esm/locale'
  export default uz
}

declare module 'date-fns/esm/locale/uz-Cyrl' {
  import { uzCyrl } from 'date-fns/esm/locale'
  export default uzCyrl
}

declare module 'date-fns/esm/locale/vi' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-HK' {
  import { zhHK } from 'date-fns/esm/locale'
  export default zhHK
}

declare module 'date-fns/esm/locale/zh-TW' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index' {
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-EG/index' {
  import { arEG } from 'date-fns/esm/locale'
  export default arEG
}

declare module 'date-fns/esm/locale/ar-MA/index' {
  import { arMA } from 'date-fns/esm/locale'
  export default arMA
}

declare module 'date-fns/esm/locale/ar-SA/index' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/ar-TN/index' {
  import { arTN } from 'date-fns/esm/locale'
  export default arTN
}

declare module 'date-fns/esm/locale/az/index' {
  import { az } from 'date-fns/esm/locale'
  export default az
}

declare module 'date-fns/esm/locale/be/index' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/be-tarask/index' {
  import { beTarask } from 'date-fns/esm/locale'
  export default beTarask
}

declare module 'date-fns/esm/locale/bg/index' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn/index' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/bs/index' {
  import { bs } from 'date-fns/esm/locale'
  export default bs
}

declare module 'date-fns/esm/locale/ca/index' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy/index' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da/index' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/de-AT/index' {
  import { deAT } from 'date-fns/esm/locale'
  export default deAT
}

declare module 'date-fns/esm/locale/el/index' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-AU/index' {
  import { enAU } from 'date-fns/esm/locale'
  export default enAU
}

declare module 'date-fns/esm/locale/en-CA/index' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-IE/index' {
  import { enIE } from 'date-fns/esm/locale'
  export default enIE
}

declare module 'date-fns/esm/locale/en-IN/index' {
  import { enIN } from 'date-fns/esm/locale'
  export default enIN
}

declare module 'date-fns/esm/locale/en-NZ/index' {
  import { enNZ } from 'date-fns/esm/locale'
  export default enNZ
}

declare module 'date-fns/esm/locale/en-US/index' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/en-ZA/index' {
  import { enZA } from 'date-fns/esm/locale'
  export default enZA
}

declare module 'date-fns/esm/locale/eo/index' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/eu/index' {
  import { eu } from 'date-fns/esm/locale'
  export default eu
}

declare module 'date-fns/esm/locale/fa-IR/index' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi/index' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fr/index' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CA/index' {
  import { frCA } from 'date-fns/esm/locale'
  export default frCA
}

declare module 'date-fns/esm/locale/fr-CH/index' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/fy/index' {
  import { fy } from 'date-fns/esm/locale'
  export default fy
}

declare module 'date-fns/esm/locale/gd/index' {
  import { gd } from 'date-fns/esm/locale'
  export default gd
}

declare module 'date-fns/esm/locale/gl/index' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/gu/index' {
  import { gu } from 'date-fns/esm/locale'
  export default gu
}

declare module 'date-fns/esm/locale/he/index' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hi/index' {
  import { hi } from 'date-fns/esm/locale'
  export default hi
}

declare module 'date-fns/esm/locale/hr/index' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/ht/index' {
  import { ht } from 'date-fns/esm/locale'
  export default ht
}

declare module 'date-fns/esm/locale/hu/index' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/hy/index' {
  import { hy } from 'date-fns/esm/locale'
  export default hy
}

declare module 'date-fns/esm/locale/id/index' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/it-CH/index' {
  import { itCH } from 'date-fns/esm/locale'
  export default itCH
}

declare module 'date-fns/esm/locale/ja/index' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ja-Hira/index' {
  import { jaHira } from 'date-fns/esm/locale'
  export default jaHira
}

declare module 'date-fns/esm/locale/ka/index' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/kk/index' {
  import { kk } from 'date-fns/esm/locale'
  export default kk
}

declare module 'date-fns/esm/locale/km/index' {
  import { km } from 'date-fns/esm/locale'
  export default km
}

declare module 'date-fns/esm/locale/kn/index' {
  import { kn } from 'date-fns/esm/locale'
  export default kn
}

declare module 'date-fns/esm/locale/ko/index' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lb/index' {
  import { lb } from 'date-fns/esm/locale'
  export default lb
}

declare module 'date-fns/esm/locale/lt/index' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv/index' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk/index' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/mn/index' {
  import { mn } from 'date-fns/esm/locale'
  export default mn
}

declare module 'date-fns/esm/locale/ms/index' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/mt/index' {
  import { mt } from 'date-fns/esm/locale'
  export default mt
}

declare module 'date-fns/esm/locale/nb/index' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn/index' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/oc/index' {
  import { oc } from 'date-fns/esm/locale'
  export default oc
}

declare module 'date-fns/esm/locale/pl/index' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl/index' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sq/index' {
  import { sq } from 'date-fns/esm/locale'
  export default sq
}

declare module 'date-fns/esm/locale/sr/index' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sr-Latn/index' {
  import { srLatn } from 'date-fns/esm/locale'
  export default srLatn
}

declare module 'date-fns/esm/locale/sv/index' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/ta/index' {
  import { ta } from 'date-fns/esm/locale'
  export default ta
}

declare module 'date-fns/esm/locale/te/index' {
  import { te } from 'date-fns/esm/locale'
  export default te
}

declare module 'date-fns/esm/locale/th/index' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug/index' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk/index' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/uz/index' {
  import { uz } from 'date-fns/esm/locale'
  export default uz
}

declare module 'date-fns/esm/locale/uz-Cyrl/index' {
  import { uzCyrl } from 'date-fns/esm/locale'
  export default uzCyrl
}

declare module 'date-fns/esm/locale/vi/index' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-HK/index' {
  import { zhHK } from 'date-fns/esm/locale'
  export default zhHK
}

declare module 'date-fns/esm/locale/zh-TW/index' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

declare module 'date-fns/esm/locale/af/index.js' {
  import { af } from 'date-fns/esm/locale'
  export default af
}

declare module 'date-fns/esm/locale/ar/index.js' {
  import { ar } from 'date-fns/esm/locale'
  export default ar
}

declare module 'date-fns/esm/locale/ar-DZ/index.js' {
  import { arDZ } from 'date-fns/esm/locale'
  export default arDZ
}

declare module 'date-fns/esm/locale/ar-EG/index.js' {
  import { arEG } from 'date-fns/esm/locale'
  export default arEG
}

declare module 'date-fns/esm/locale/ar-MA/index.js' {
  import { arMA } from 'date-fns/esm/locale'
  export default arMA
}

declare module 'date-fns/esm/locale/ar-SA/index.js' {
  import { arSA } from 'date-fns/esm/locale'
  export default arSA
}

declare module 'date-fns/esm/locale/ar-TN/index.js' {
  import { arTN } from 'date-fns/esm/locale'
  export default arTN
}

declare module 'date-fns/esm/locale/az/index.js' {
  import { az } from 'date-fns/esm/locale'
  export default az
}

declare module 'date-fns/esm/locale/be/index.js' {
  import { be } from 'date-fns/esm/locale'
  export default be
}

declare module 'date-fns/esm/locale/be-tarask/index.js' {
  import { beTarask } from 'date-fns/esm/locale'
  export default beTarask
}

declare module 'date-fns/esm/locale/bg/index.js' {
  import { bg } from 'date-fns/esm/locale'
  export default bg
}

declare module 'date-fns/esm/locale/bn/index.js' {
  import { bn } from 'date-fns/esm/locale'
  export default bn
}

declare module 'date-fns/esm/locale/bs/index.js' {
  import { bs } from 'date-fns/esm/locale'
  export default bs
}

declare module 'date-fns/esm/locale/ca/index.js' {
  import { ca } from 'date-fns/esm/locale'
  export default ca
}

declare module 'date-fns/esm/locale/cs/index.js' {
  import { cs } from 'date-fns/esm/locale'
  export default cs
}

declare module 'date-fns/esm/locale/cy/index.js' {
  import { cy } from 'date-fns/esm/locale'
  export default cy
}

declare module 'date-fns/esm/locale/da/index.js' {
  import { da } from 'date-fns/esm/locale'
  export default da
}

declare module 'date-fns/esm/locale/de/index.js' {
  import { de } from 'date-fns/esm/locale'
  export default de
}

declare module 'date-fns/esm/locale/de-AT/index.js' {
  import { deAT } from 'date-fns/esm/locale'
  export default deAT
}

declare module 'date-fns/esm/locale/el/index.js' {
  import { el } from 'date-fns/esm/locale'
  export default el
}

declare module 'date-fns/esm/locale/en-AU/index.js' {
  import { enAU } from 'date-fns/esm/locale'
  export default enAU
}

declare module 'date-fns/esm/locale/en-CA/index.js' {
  import { enCA } from 'date-fns/esm/locale'
  export default enCA
}

declare module 'date-fns/esm/locale/en-GB/index.js' {
  import { enGB } from 'date-fns/esm/locale'
  export default enGB
}

declare module 'date-fns/esm/locale/en-IE/index.js' {
  import { enIE } from 'date-fns/esm/locale'
  export default enIE
}

declare module 'date-fns/esm/locale/en-IN/index.js' {
  import { enIN } from 'date-fns/esm/locale'
  export default enIN
}

declare module 'date-fns/esm/locale/en-NZ/index.js' {
  import { enNZ } from 'date-fns/esm/locale'
  export default enNZ
}

declare module 'date-fns/esm/locale/en-US/index.js' {
  import { enUS } from 'date-fns/esm/locale'
  export default enUS
}

declare module 'date-fns/esm/locale/en-ZA/index.js' {
  import { enZA } from 'date-fns/esm/locale'
  export default enZA
}

declare module 'date-fns/esm/locale/eo/index.js' {
  import { eo } from 'date-fns/esm/locale'
  export default eo
}

declare module 'date-fns/esm/locale/es/index.js' {
  import { es } from 'date-fns/esm/locale'
  export default es
}

declare module 'date-fns/esm/locale/et/index.js' {
  import { et } from 'date-fns/esm/locale'
  export default et
}

declare module 'date-fns/esm/locale/eu/index.js' {
  import { eu } from 'date-fns/esm/locale'
  export default eu
}

declare module 'date-fns/esm/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns/esm/locale'
  export default faIR
}

declare module 'date-fns/esm/locale/fi/index.js' {
  import { fi } from 'date-fns/esm/locale'
  export default fi
}

declare module 'date-fns/esm/locale/fr/index.js' {
  import { fr } from 'date-fns/esm/locale'
  export default fr
}

declare module 'date-fns/esm/locale/fr-CA/index.js' {
  import { frCA } from 'date-fns/esm/locale'
  export default frCA
}

declare module 'date-fns/esm/locale/fr-CH/index.js' {
  import { frCH } from 'date-fns/esm/locale'
  export default frCH
}

declare module 'date-fns/esm/locale/fy/index.js' {
  import { fy } from 'date-fns/esm/locale'
  export default fy
}

declare module 'date-fns/esm/locale/gd/index.js' {
  import { gd } from 'date-fns/esm/locale'
  export default gd
}

declare module 'date-fns/esm/locale/gl/index.js' {
  import { gl } from 'date-fns/esm/locale'
  export default gl
}

declare module 'date-fns/esm/locale/gu/index.js' {
  import { gu } from 'date-fns/esm/locale'
  export default gu
}

declare module 'date-fns/esm/locale/he/index.js' {
  import { he } from 'date-fns/esm/locale'
  export default he
}

declare module 'date-fns/esm/locale/hi/index.js' {
  import { hi } from 'date-fns/esm/locale'
  export default hi
}

declare module 'date-fns/esm/locale/hr/index.js' {
  import { hr } from 'date-fns/esm/locale'
  export default hr
}

declare module 'date-fns/esm/locale/ht/index.js' {
  import { ht } from 'date-fns/esm/locale'
  export default ht
}

declare module 'date-fns/esm/locale/hu/index.js' {
  import { hu } from 'date-fns/esm/locale'
  export default hu
}

declare module 'date-fns/esm/locale/hy/index.js' {
  import { hy } from 'date-fns/esm/locale'
  export default hy
}

declare module 'date-fns/esm/locale/id/index.js' {
  import { id } from 'date-fns/esm/locale'
  export default id
}

declare module 'date-fns/esm/locale/is/index.js' {
  import { is } from 'date-fns/esm/locale'
  export default is
}

declare module 'date-fns/esm/locale/it/index.js' {
  import { it } from 'date-fns/esm/locale'
  export default it
}

declare module 'date-fns/esm/locale/it-CH/index.js' {
  import { itCH } from 'date-fns/esm/locale'
  export default itCH
}

declare module 'date-fns/esm/locale/ja/index.js' {
  import { ja } from 'date-fns/esm/locale'
  export default ja
}

declare module 'date-fns/esm/locale/ja-Hira/index.js' {
  import { jaHira } from 'date-fns/esm/locale'
  export default jaHira
}

declare module 'date-fns/esm/locale/ka/index.js' {
  import { ka } from 'date-fns/esm/locale'
  export default ka
}

declare module 'date-fns/esm/locale/kk/index.js' {
  import { kk } from 'date-fns/esm/locale'
  export default kk
}

declare module 'date-fns/esm/locale/km/index.js' {
  import { km } from 'date-fns/esm/locale'
  export default km
}

declare module 'date-fns/esm/locale/kn/index.js' {
  import { kn } from 'date-fns/esm/locale'
  export default kn
}

declare module 'date-fns/esm/locale/ko/index.js' {
  import { ko } from 'date-fns/esm/locale'
  export default ko
}

declare module 'date-fns/esm/locale/lb/index.js' {
  import { lb } from 'date-fns/esm/locale'
  export default lb
}

declare module 'date-fns/esm/locale/lt/index.js' {
  import { lt } from 'date-fns/esm/locale'
  export default lt
}

declare module 'date-fns/esm/locale/lv/index.js' {
  import { lv } from 'date-fns/esm/locale'
  export default lv
}

declare module 'date-fns/esm/locale/mk/index.js' {
  import { mk } from 'date-fns/esm/locale'
  export default mk
}

declare module 'date-fns/esm/locale/mn/index.js' {
  import { mn } from 'date-fns/esm/locale'
  export default mn
}

declare module 'date-fns/esm/locale/ms/index.js' {
  import { ms } from 'date-fns/esm/locale'
  export default ms
}

declare module 'date-fns/esm/locale/mt/index.js' {
  import { mt } from 'date-fns/esm/locale'
  export default mt
}

declare module 'date-fns/esm/locale/nb/index.js' {
  import { nb } from 'date-fns/esm/locale'
  export default nb
}

declare module 'date-fns/esm/locale/nl/index.js' {
  import { nl } from 'date-fns/esm/locale'
  export default nl
}

declare module 'date-fns/esm/locale/nl-BE/index.js' {
  import { nlBE } from 'date-fns/esm/locale'
  export default nlBE
}

declare module 'date-fns/esm/locale/nn/index.js' {
  import { nn } from 'date-fns/esm/locale'
  export default nn
}

declare module 'date-fns/esm/locale/oc/index.js' {
  import { oc } from 'date-fns/esm/locale'
  export default oc
}

declare module 'date-fns/esm/locale/pl/index.js' {
  import { pl } from 'date-fns/esm/locale'
  export default pl
}

declare module 'date-fns/esm/locale/pt/index.js' {
  import { pt } from 'date-fns/esm/locale'
  export default pt
}

declare module 'date-fns/esm/locale/pt-BR/index.js' {
  import { ptBR } from 'date-fns/esm/locale'
  export default ptBR
}

declare module 'date-fns/esm/locale/ro/index.js' {
  import { ro } from 'date-fns/esm/locale'
  export default ro
}

declare module 'date-fns/esm/locale/ru/index.js' {
  import { ru } from 'date-fns/esm/locale'
  export default ru
}

declare module 'date-fns/esm/locale/sk/index.js' {
  import { sk } from 'date-fns/esm/locale'
  export default sk
}

declare module 'date-fns/esm/locale/sl/index.js' {
  import { sl } from 'date-fns/esm/locale'
  export default sl
}

declare module 'date-fns/esm/locale/sq/index.js' {
  import { sq } from 'date-fns/esm/locale'
  export default sq
}

declare module 'date-fns/esm/locale/sr/index.js' {
  import { sr } from 'date-fns/esm/locale'
  export default sr
}

declare module 'date-fns/esm/locale/sr-Latn/index.js' {
  import { srLatn } from 'date-fns/esm/locale'
  export default srLatn
}

declare module 'date-fns/esm/locale/sv/index.js' {
  import { sv } from 'date-fns/esm/locale'
  export default sv
}

declare module 'date-fns/esm/locale/ta/index.js' {
  import { ta } from 'date-fns/esm/locale'
  export default ta
}

declare module 'date-fns/esm/locale/te/index.js' {
  import { te } from 'date-fns/esm/locale'
  export default te
}

declare module 'date-fns/esm/locale/th/index.js' {
  import { th } from 'date-fns/esm/locale'
  export default th
}

declare module 'date-fns/esm/locale/tr/index.js' {
  import { tr } from 'date-fns/esm/locale'
  export default tr
}

declare module 'date-fns/esm/locale/ug/index.js' {
  import { ug } from 'date-fns/esm/locale'
  export default ug
}

declare module 'date-fns/esm/locale/uk/index.js' {
  import { uk } from 'date-fns/esm/locale'
  export default uk
}

declare module 'date-fns/esm/locale/uz/index.js' {
  import { uz } from 'date-fns/esm/locale'
  export default uz
}

declare module 'date-fns/esm/locale/uz-Cyrl/index.js' {
  import { uzCyrl } from 'date-fns/esm/locale'
  export default uzCyrl
}

declare module 'date-fns/esm/locale/vi/index.js' {
  import { vi } from 'date-fns/esm/locale'
  export default vi
}

declare module 'date-fns/esm/locale/zh-CN/index.js' {
  import { zhCN } from 'date-fns/esm/locale'
  export default zhCN
}

declare module 'date-fns/esm/locale/zh-HK/index.js' {
  import { zhHK } from 'date-fns/esm/locale'
  export default zhHK
}

declare module 'date-fns/esm/locale/zh-TW/index.js' {
  import { zhTW } from 'date-fns/esm/locale'
  export default zhTW
}

// dateFns Global Interface

interface dateFns {
  add(date: Date | number, duration: Duration): Date

  addBusinessDays(date: Date | number, amount: number): Date

  addDays(date: Date | number, amount: number): Date

  addHours(date: Date | number, amount: number): Date

  addISOWeekYears(date: Date | number, amount: number): Date

  addMilliseconds(date: Date | number, amount: number): Date

  addMinutes(date: Date | number, amount: number): Date

  addMonths(date: Date | number, amount: number): Date

  addQuarters(date: Date | number, amount: number): Date

  addSeconds(date: Date | number, amount: number): Date

  addWeeks(date: Date | number, amount: number): Date

  addYears(date: Date | number, amount: number): Date

  areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean

  clamp(date: Date | number, interval: Interval): Date

  closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined

  closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined

  compareAsc(dateLeft: Date | number, dateRight: Date | number): number

  compareDesc(dateLeft: Date | number, dateRight: Date | number): number

  daysToWeeks(days: number): number

  differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInDays(dateLeft: Date | number, dateRight: Date | number): number

  differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number

  differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number

  differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number

  differenceInMonths(dateLeft: Date | number, dateRight: Date | number): number

  differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number

  differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number

  differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number

  differenceInYears(dateLeft: Date | number, dateRight: Date | number): number

  eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]

  eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]

  eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]

  eachMonthOfInterval(interval: Interval): Date[]

  eachQuarterOfInterval(interval: Interval): Date[]

  eachWeekendOfInterval(interval: Interval): Date[]

  eachWeekendOfMonth(date: Date | number): Date[]

  eachWeekendOfYear(date: Date | number): Date[]

  eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]

  eachYearOfInterval(interval: Interval): Date[]

  endOfDay(date: Date | number): Date

  endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  endOfHour(date: Date | number): Date

  endOfISOWeek(date: Date | number): Date

  endOfISOWeekYear(date: Date | number): Date

  endOfMinute(date: Date | number): Date

  endOfMonth(date: Date | number): Date

  endOfQuarter(date: Date | number): Date

  endOfSecond(date: Date | number): Date

  endOfToday(): Date

  endOfTomorrow(): Date

  endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  endOfYear(date: Date | number): Date

  endOfYesterday(): Date

  format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string

  formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string

  formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string

  formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string

  formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string

  formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string

  formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string

  formatISODuration(duration: Duration): string

  formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string

  formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string

  formatRFC7231(date: Date | number): string

  fromUnixTime(unixTime: number): Date

  getDate(date: Date | number): number

  getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6

  getDayOfYear(date: Date | number): number

  getDaysInMonth(date: Date | number): number

  getDaysInYear(date: Date | number): number

  getDecade(date: Date | number): number

  getDefaultOptions(): Object

  getHours(date: Date | number): number

  getISODay(date: Date | number): number

  getISOWeek(date: Date | number): number

  getISOWeeksInYear(date: Date | number): number

  getISOWeekYear(date: Date | number): number

  getMilliseconds(date: Date | number): number

  getMinutes(date: Date | number): number

  getMonth(date: Date | number): number

  getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number

  getQuarter(date: Date | number): number

  getSeconds(date: Date | number): number

  getTime(date: Date | number): number

  getUnixTime(date: Date | number): number

  getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number

  getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number

  getYear(date: Date | number): number

  hoursToMilliseconds(hours: number): number

  hoursToMinutes(hours: number): number

  hoursToSeconds(hours: number): number

  intervalToDuration(interval: Interval): Duration

  intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string

  intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string

  isAfter(date: Date | number, dateToCompare: Date | number): boolean

  isBefore(date: Date | number, dateToCompare: Date | number): boolean

  isDate(value: any): boolean

  isEqual(dateLeft: Date | number, dateRight: Date | number): boolean

  isExists(year: number, month: number, day: number): boolean

  isFirstDayOfMonth(date: Date | number): boolean

  isFriday(date: Date | number): boolean

  isFuture(date: Date | number): boolean

  isLastDayOfMonth(date: Date | number): boolean

  isLeapYear(date: Date | number): boolean

  isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean

  isMonday(date: Date | number): boolean

  isPast(date: Date | number): boolean

  isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameHour(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeek(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameISOWeekYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMinute(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameMonth(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameQuarter(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameSecond(dateLeft: Date | number, dateRight: Date | number): boolean

  isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isSameYear(dateLeft: Date | number, dateRight: Date | number): boolean

  isSaturday(date: Date | number): boolean

  isSunday(date: Date | number): boolean

  isThisHour(date: Date | number): boolean

  isThisISOWeek(date: Date | number): boolean

  isThisMinute(date: Date | number): boolean

  isThisMonth(date: Date | number): boolean

  isThisQuarter(date: Date | number): boolean

  isThisSecond(date: Date | number): boolean

  isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean

  isThisYear(date: Date | number): boolean

  isThursday(date: Date | number): boolean

  isToday(date: Date | number): boolean

  isTomorrow(date: Date | number): boolean

  isTuesday(date: Date | number): boolean

  isValid(date: any): boolean

  isWednesday(date: Date | number): boolean

  isWeekend(date: Date | number): boolean

  isWithinInterval(date: Date | number, interval: Interval): boolean

  isYesterday(date: Date | number): boolean

  lastDayOfDecade(date: Date | number): Date

  lastDayOfISOWeek(date: Date | number): Date

  lastDayOfISOWeekYear(date: Date | number): Date

  lastDayOfMonth(date: Date | number): Date

  lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  lastDayOfYear(date: Date | number): Date

  lightFormat(date: Date | number, format: string): string

  max(datesArray: (Date | number)[]): Date

  milliseconds(duration: Duration): number

  millisecondsToHours(milliseconds: number): number

  millisecondsToMinutes(milliseconds: number): number

  millisecondsToSeconds(milliseconds: number): number

  min(datesArray: (Date | number)[]): Date

  minutesToHours(minutes: number): number

  minutesToMilliseconds(minutes: number): number

  minutesToSeconds(minutes: number): number

  monthsToQuarters(months: number): number

  monthsToYears(months: number): number

  nextDay(date: Date | number, day: Day): Date

  nextFriday(date: Date | number): Date

  nextMonday(date: Date | number): Date

  nextSaturday(date: Date | number): Date

  nextSunday(date: Date | number): Date

  nextThursday(date: Date | number): Date

  nextTuesday(date: Date | number): Date

  nextWednesday(date: Date | number): Date

  parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date

  parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date

  parseJSON(argument: string | number | Date): Date

  previousDay(date: Date | number, day: number): Date

  previousFriday(date: Date | number): Date

  previousMonday(date: Date | number): Date

  previousSaturday(date: Date | number): Date

  previousSunday(date: Date | number): Date

  previousThursday(date: Date | number): Date

  previousTuesday(date: Date | number): Date

  previousWednesday(date: Date | number): Date

  quartersToMonths(quarters: number): number

  quartersToYears(quarters: number): number

  roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
      roundingMethod?: string
    }
  ): Date

  secondsToHours(seconds: number): number

  secondsToMilliseconds(seconds: number): number

  secondsToMinutes(seconds: number): number

  set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date

  setDate(date: Date | number, dayOfMonth: number): Date

  setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  setDayOfYear(date: Date | number, dayOfYear: number): Date

  setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void

  setHours(date: Date | number, hours: number): Date

  setISODay(date: Date | number, day: number): Date

  setISOWeek(date: Date | number, isoWeek: number): Date

  setISOWeekYear(date: Date | number, isoWeekYear: number): Date

  setMilliseconds(date: Date | number, milliseconds: number): Date

  setMinutes(date: Date | number, minutes: number): Date

  setMonth(date: Date | number, month: number): Date

  setQuarter(date: Date | number, quarter: number): Date

  setSeconds(date: Date | number, seconds: number): Date

  setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  setYear(date: Date | number, year: number): Date

  startOfDay(date: Date | number): Date

  startOfDecade(date: Date | number): Date

  startOfHour(date: Date | number): Date

  startOfISOWeek(date: Date | number): Date

  startOfISOWeekYear(date: Date | number): Date

  startOfMinute(date: Date | number): Date

  startOfMonth(date: Date | number): Date

  startOfQuarter(date: Date | number): Date

  startOfSecond(date: Date | number): Date

  startOfToday(): Date

  startOfTomorrow(): Date

  startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date

  startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date

  startOfYear(date: Date | number): Date

  startOfYesterday(): Date

  sub(date: Date | number, duration: Duration): Date

  subBusinessDays(date: Date | number, amount: number): Date

  subDays(date: Date | number, amount: number): Date

  subHours(date: Date | number, amount: number): Date

  subISOWeekYears(date: Date | number, amount: number): Date

  subMilliseconds(date: Date | number, amount: number): Date

  subMinutes(date: Date | number, amount: number): Date

  subMonths(date: Date | number, amount: number): Date

  subQuarters(date: Date | number, amount: number): Date

  subSeconds(date: Date | number, amount: number): Date

  subWeeks(date: Date | number, amount: number): Date

  subYears(date: Date | number, amount: number): Date

  toDate(argument: Date | number): Date

  weeksToDays(weeks: number): number

  yearsToMonths(years: number): number

  yearsToQuarters(years: number): number

  daysInWeek: number

  daysInYear: number

  maxTime: number

  millisecondsInMinute: number

  millisecondsInHour: number

  millisecondsInSecond: number

  minTime: number

  minutesInHour: number

  monthsInQuarter: number

  monthsInYear: number

  quartersInYear: number

  secondsInHour: number

  secondsInMinute: number

  secondsInDay: number

  secondsInWeek: number

  secondsInYear: number

  secondsInMonth: number

  secondsInQuarter: number
}
