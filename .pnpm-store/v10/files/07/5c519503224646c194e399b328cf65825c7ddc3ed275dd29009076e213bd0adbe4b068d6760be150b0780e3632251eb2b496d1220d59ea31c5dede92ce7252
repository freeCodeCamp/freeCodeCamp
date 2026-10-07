/// <reference path="./locale/index.d.ts" />

export = dayjs;

declare function dayjs (date?: dayjs.ConfigType): dayjs.Dayjs

declare function dayjs (date?: dayjs.ConfigType, format?: dayjs.OptionType, strict?: boolean): dayjs.Dayjs

declare function dayjs (date?: dayjs.ConfigType, format?: dayjs.OptionType, locale?: string, strict?: boolean): dayjs.Dayjs

declare namespace dayjs {
  interface ConfigTypeMap {
    default: string | number | Date | Dayjs | null | undefined
  }

  export type ConfigType = ConfigTypeMap[keyof ConfigTypeMap]

  export interface FormatObject { locale?: string, format?: string, utc?: boolean }

  export type OptionType = FormatObject | string | string[]

  export type UnitTypeShort = 'd' | 'D' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms'

  export type UnitTypeLong = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date'

  export type UnitTypeLongPlural = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years' | 'dates'
  
  export type UnitType = UnitTypeLong | UnitTypeLongPlural | UnitTypeShort;

  export type OpUnitType = UnitType | "week" | "weeks" | 'w';
  export type QUnitType = UnitType | "quarter" | "quarters" | 'Q';
  export type ManipulateType = Exclude<OpUnitType, 'date' | 'dates'>;
  class Dayjs {
    constructor (config?: ConfigType)
    /**
     * All Day.js objects are immutable. Still, `dayjs#clone` can create a clone of the current object if you need one.
     * ```
     * dayjs().clone()// => Dayjs
     * dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
     * ```
     * Docs: https://day.js.org/docs/en/parse/dayjs-clone
     */
    clone(): Dayjs
    /**
     * This returns a `boolean` indicating whether the Day.js object contains a valid date or not.
     * ```
     * dayjs().isValid()// => boolean
     * ```
     * Docs: https://day.js.org/docs/en/parse/is-valid
     */
    isValid(): boolean
    /**
     * Get the year.
     * ```
     * dayjs().year()// => 2020
     * ```
     * Docs: https://day.js.org/docs/en/get-set/year
     */
    year(): number
    /**
     * Set the year.
     * ```
     * dayjs().year(2000)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/year
     */
    year(value: number): Dayjs
    /**
     * Get the month.
     *
     * Months are zero indexed, so January is month 0.
     * ```
     * dayjs().month()// => 0-11
     * ```
     * Docs: https://day.js.org/docs/en/get-set/month
     */
    month(): number
    /**
     * Set the month.
     *
     * Months are zero indexed, so January is month 0.
     *
     * Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the next year.
     * ```
     * dayjs().month(0)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/month
     */
    month(value: number): Dayjs
    /**
     * Get the date of the month.
     * ```
     * dayjs().date()// => 1-31
     * ```
     * Docs: https://day.js.org/docs/en/get-set/date
     */
    date(): number
    /**
     * Set the date of the month.
     *
     * Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
     * ```
     * dayjs().date(1)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/date
     */
    date(value: number): Dayjs
    /**
     * Get the day of the week.
     *
     * Returns numbers from 0 (Sunday) to 6 (Saturday).
     * ```
     * dayjs().day()// 0-6
     * ```
     * Docs: https://day.js.org/docs/en/get-set/day
     */
    day(): 0 | 1 | 2 | 3 | 4 | 5 | 6
    /**
     * Set the day of the week.
     *
     * Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to next weeks.
     * ```
     * dayjs().day(0)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/day
     */
    day(value: number): Dayjs
    /**
     * Get the hour.
     * ```
     * dayjs().hour()// => 0-23
     * ```
     * Docs: https://day.js.org/docs/en/get-set/hour
     */
    hour(): number
    /**
     * Set the hour.
     *
     * Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
     * ```
     * dayjs().hour(12)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/hour
     */
    hour(value: number): Dayjs
    /**
     * Get the minutes.
     * ```
     * dayjs().minute()// => 0-59
     * ```
     * Docs: https://day.js.org/docs/en/get-set/minute
     */
    minute(): number
    /**
     * Set the minutes.
     *
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
     * ```
     * dayjs().minute(59)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/minute
     */
    minute(value: number): Dayjs
    /**
     * Get the seconds.
     * ```
     * dayjs().second()// => 0-59
     * ```
     * Docs: https://day.js.org/docs/en/get-set/second
     */
    second(): number
    /**
     * Set the seconds.
     *
     * Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
     * ```
     * dayjs().second(1)// Dayjs
     * ```
     */
    second(value: number): Dayjs
    /**
     * Get the milliseconds.
     * ```
     * dayjs().millisecond()// => 0-999
     * ```
     * Docs: https://day.js.org/docs/en/get-set/millisecond
     */
    millisecond(): number
    /**
     * Set the milliseconds.
     *
     * Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
     * ```
     * dayjs().millisecond(1)// => Dayjs
     * ```
     * Docs: https://day.js.org/docs/en/get-set/millisecond
     */
    millisecond(value: number): Dayjs
    /**
     * Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.
     *
     * In general:
     * ```
     * dayjs().set(unit, value) === dayjs()[unit](value)
     * ```
     * Units are case insensitive, and support plural and short forms.
     * ```
     * dayjs().set('date', 1)
     * dayjs().set('month', 3) // April
     * dayjs().set('second', 30)
     * ```
     * Docs: https://day.js.org/docs/en/get-set/set
     */
    set(unit: UnitType, value: number): Dayjs
    /**
     * String getter, returns the corresponding information getting from Day.js object.
     *
     * In general:
     * ```
     * dayjs().get(unit) === dayjs()[unit]()
     * ```
     * Units are case insensitive, and support plural and short forms.
     * ```
     * dayjs().get('year')
     * dayjs().get('month') // start 0
     * dayjs().get('date')
     * ```
     * Docs: https://day.js.org/docs/en/get-set/get
     */
    get(unit: UnitType): number
    /**
     * Returns a cloned Day.js object with a specified amount of time added.
     * ```
     * dayjs().add(7, 'day')// => Dayjs
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/add
     */
    add(value: number, unit?: ManipulateType): Dayjs
    /**
     * Returns a cloned Day.js object with a specified amount of time subtracted.
     * ```
     * dayjs().subtract(7, 'year')// => Dayjs
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/subtract
     */
    subtract(value: number, unit?: ManipulateType): Dayjs
    /**
     * Returns a cloned Day.js object and set it to the start of a unit of time.
     * ```
     * dayjs().startOf('year')// => Dayjs
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/start-of
     */
    startOf(unit: OpUnitType): Dayjs
    /**
     * Returns a cloned Day.js object and set it to the end of a unit of time.
     * ```
     * dayjs().endOf('month')// => Dayjs
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/manipulate/end-of
     */
    endOf(unit: OpUnitType): Dayjs
    /**
     * Get the formatted date according to the string of tokens passed in.
     *
     * To escape characters, wrap them in square brackets (e.g. [MM]).
     * ```
     * dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
     * dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
     * dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
     * ```
     * Docs: https://day.js.org/docs/en/display/format
     */
    format(template?: string): string
    /**
     * This indicates the difference between two date-time in the specified unit.
     *
     * To get the difference in milliseconds, use `dayjs#diff`
     * ```
     * const date1 = dayjs('2019-01-25')
     * const date2 = dayjs('2018-06-05')
     * date1.diff(date2) // 20214000000 default milliseconds
     * date1.diff() // milliseconds to current time
     * ```
     *
     * To get the difference in another unit of measurement, pass that measurement as the second argument.
     * ```
     * const date1 = dayjs('2019-01-25')
     * date1.diff('2018-06-05', 'month') // 7
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/display/difference
     */
    diff(date?: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean): number
    /**
     * This returns the number of **milliseconds** since the Unix Epoch of the Day.js object.
     * ```
     * dayjs('2019-01-25').valueOf() // 1548381600000
     * +dayjs(1548381600000) // 1548381600000
     * ```
     * To get a Unix timestamp (the number of seconds since the epoch) from a Day.js object, you should use Unix Timestamp `dayjs#unix()`.
     *
     * Docs: https://day.js.org/docs/en/display/unix-timestamp-milliseconds
     */
    valueOf(): number
    /**
     * This returns the Unix timestamp (the number of **seconds** since the Unix Epoch) of the Day.js object.
     * ```
     * dayjs('2019-01-25').unix() // 1548381600
     * ```
     * This value is floored to the nearest second, and does not include a milliseconds component.
     *
     * Docs: https://day.js.org/docs/en/display/unix-timestamp
     */
    unix(): number
    /**
     * Get the number of days in the current month.
     * ```
     * dayjs('2019-01-25').daysInMonth() // 31
     * ```
     * Docs: https://day.js.org/docs/en/display/days-in-month
     */
    daysInMonth(): number
    /**
     * To get a copy of the native `Date` object parsed from the Day.js object use `dayjs#toDate`.
     * ```
     * dayjs('2019-01-25').toDate()// => Date
     * ```
     */
    toDate(): Date
    /**
     * To serialize as an ISO 8601 string.
     * ```
     * dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
     * ```
     * Docs: https://day.js.org/docs/en/display/as-json
     */
    toJSON(): string
    /**
     * To format as an ISO 8601 string.
     * ```
     * dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
     * ```
     * Docs: https://day.js.org/docs/en/display/as-iso-string
     */
    toISOString(): string
    /**
     * Returns a string representation of the date.
     * ```
     * dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
     * ```
     * Docs: https://day.js.org/docs/en/display/as-string
     */
    toString(): string
    /**
     * Get the UTC offset in minutes.
     * ```
     * dayjs().utcOffset()
     * ```
     * Docs: https://day.js.org/docs/en/manipulate/utc-offset
     */
    utcOffset(): number
    /**
     * This indicates whether the Day.js object is before the other supplied date-time.
     * ```
     * dayjs().isBefore(dayjs('2011-01-01')) // default milliseconds
     * ```
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * ```
     * dayjs().isBefore('2011-01-01', 'year')// => boolean
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/query/is-before
     */
    isBefore(date?: ConfigType, unit?: OpUnitType): boolean
    /**
     * This indicates whether the Day.js object is the same as the other supplied date-time.
     * ```
     * dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
     * ```
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * ```
     * dayjs().isSame('2011-01-01', 'year')// => boolean
     * ```
     * Docs: https://day.js.org/docs/en/query/is-same
     */
    isSame(date?: ConfigType, unit?: OpUnitType): boolean
    /**
     * This indicates whether the Day.js object is after the other supplied date-time.
     * ```
     * dayjs().isAfter(dayjs('2011-01-01')) // default milliseconds
     * ```
     * If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
     * ```
     * dayjs().isAfter('2011-01-01', 'year')// => boolean
     * ```
     * Units are case insensitive, and support plural and short forms.
     *
     * Docs: https://day.js.org/docs/en/query/is-after
     */
    isAfter(date?: ConfigType, unit?: OpUnitType): boolean

    locale(): string

    locale(preset: string | ILocale, object?: Partial<ILocale>): Dayjs
  }

  export type PluginFunc<T = unknown> = (option: T, c: typeof Dayjs, d: typeof dayjs) => void

  export function extend<T = unknown>(plugin: PluginFunc<T>, option?: T): Dayjs

  export function locale(preset?: string | ILocale, object?: Partial<ILocale>, isLocal?: boolean): string

  export function isDayjs(d: any): d is Dayjs

  export function unix(t: number): Dayjs

  const Ls : { [key: string] :  ILocale }
}
