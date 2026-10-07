/**
 * @since 2.0.0
 */
import * as Arr from "./Array.js"
import * as Data from "./Data.js"
import type * as DateTime from "./DateTime.js"
import * as Either from "./Either.js"
import * as Equal from "./Equal.js"
import * as equivalence from "./Equivalence.js"
import { constVoid, dual, identity, pipe } from "./Function.js"
import * as Hash from "./Hash.js"
import { format, type Inspectable, NodeInspectSymbol } from "./Inspectable.js"
import * as dateTime from "./internal/dateTime.js"
import * as N from "./Number.js"
import * as Option from "./Option.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import { hasProperty } from "./Predicate.js"
import * as String from "./String.js"
import type { Mutable } from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TypeId: unique symbol = Symbol.for("effect/Cron")

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Cron extends Pipeable, Equal.Equal, Inspectable {
  readonly [TypeId]: TypeId
  readonly tz: Option.Option<DateTime.TimeZone>
  readonly seconds: ReadonlySet<number>
  readonly minutes: ReadonlySet<number>
  readonly hours: ReadonlySet<number>
  readonly days: ReadonlySet<number>
  readonly months: ReadonlySet<number>
  readonly weekdays: ReadonlySet<number>
  /** @internal */
  readonly first: {
    readonly second: number
    readonly minute: number
    readonly hour: number
    readonly day: number
    readonly month: number
    readonly weekday: number
  }
  /** @internal */
  readonly last: {
    readonly second: number
    readonly minute: number
    readonly hour: number
    readonly day: number
    readonly month: number
    readonly weekday: number
  }
  /** @internal */
  readonly next: {
    readonly second: ReadonlyArray<number | undefined>
    readonly minute: ReadonlyArray<number | undefined>
    readonly hour: ReadonlyArray<number | undefined>
    readonly day: ReadonlyArray<number | undefined>
    readonly month: ReadonlyArray<number | undefined>
    readonly weekday: ReadonlyArray<number | undefined>
  }
  /** @internal */
  readonly prev: {
    readonly second: ReadonlyArray<number | undefined>
    readonly minute: ReadonlyArray<number | undefined>
    readonly hour: ReadonlyArray<number | undefined>
    readonly day: ReadonlyArray<number | undefined>
    readonly month: ReadonlyArray<number | undefined>
    readonly weekday: ReadonlyArray<number | undefined>
  }
}

const CronProto = {
  [TypeId]: TypeId,
  [Equal.symbol](this: Cron, that: unknown) {
    return isCron(that) && equals(this, that)
  },
  [Hash.symbol](this: Cron): number {
    return pipe(
      Hash.hash(this.tz),
      Hash.combine(Hash.array(Arr.fromIterable(this.seconds))),
      Hash.combine(Hash.array(Arr.fromIterable(this.minutes))),
      Hash.combine(Hash.array(Arr.fromIterable(this.hours))),
      Hash.combine(Hash.array(Arr.fromIterable(this.days))),
      Hash.combine(Hash.array(Arr.fromIterable(this.months))),
      Hash.combine(Hash.array(Arr.fromIterable(this.weekdays))),
      Hash.cached(this)
    )
  },
  toString(this: Cron) {
    return format(this.toJSON())
  },
  toJSON(this: Cron) {
    return {
      _id: "Cron",
      tz: this.tz,
      seconds: Arr.fromIterable(this.seconds),
      minutes: Arr.fromIterable(this.minutes),
      hours: Arr.fromIterable(this.hours),
      days: Arr.fromIterable(this.days),
      months: Arr.fromIterable(this.months),
      weekdays: Arr.fromIterable(this.weekdays)
    }
  },
  [NodeInspectSymbol](this: Cron) {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/**
 * Checks if a given value is a `Cron` instance.
 *
 * @since 2.0.0
 * @category guards
 */
export const isCron = (u: unknown): u is Cron => hasProperty(u, TypeId)

/**
 * Creates a `Cron` instance.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = (values: {
  readonly seconds?: Iterable<number> | undefined
  readonly minutes: Iterable<number>
  readonly hours: Iterable<number>
  readonly days: Iterable<number>
  readonly months: Iterable<number>
  readonly weekdays: Iterable<number>
  readonly tz?: DateTime.TimeZone | undefined
}): Cron => {
  const o: Mutable<Cron> = Object.create(CronProto)
  o.seconds = new Set(Arr.sort(values.seconds ?? [0], N.Order))
  o.minutes = new Set(Arr.sort(values.minutes, N.Order))
  o.hours = new Set(Arr.sort(values.hours, N.Order))
  o.days = new Set(Arr.sort(values.days, N.Order))
  o.months = new Set(Arr.sort(values.months, N.Order))
  o.weekdays = new Set(Arr.sort(values.weekdays, N.Order))
  o.tz = Option.fromNullable(values.tz)

  const seconds = Array.from(o.seconds)
  const minutes = Array.from(o.minutes)
  const hours = Array.from(o.hours)
  const days = Array.from(o.days)
  const months = Array.from(o.months)
  const weekdays = Array.from(o.weekdays)

  o.first = {
    second: seconds[0] ?? 0,
    minute: minutes[0] ?? 0,
    hour: hours[0] ?? 0,
    day: days[0] ?? 1,
    month: (months[0] ?? 1) - 1,
    weekday: weekdays[0] ?? 0
  }

  o.last = {
    second: seconds[seconds.length - 1] ?? 59,
    minute: minutes[minutes.length - 1] ?? 59,
    hour: hours[hours.length - 1] ?? 23,
    day: days[days.length - 1] ?? 31,
    month: (months[months.length - 1] ?? 12) - 1,
    weekday: weekdays[weekdays.length - 1] ?? 6
  }

  o.next = {
    second: lookupTable(seconds, 60, "next"),
    minute: lookupTable(minutes, 60, "next"),
    hour: lookupTable(hours, 24, "next"),
    day: lookupTable(days, 32, "next"),
    month: lookupTable(months, 13, "next"),
    weekday: lookupTable(weekdays, 7, "next")
  }

  o.prev = {
    second: lookupTable(seconds, 60, "prev"),
    minute: lookupTable(minutes, 60, "prev"),
    hour: lookupTable(hours, 24, "prev"),
    day: lookupTable(days, 32, "prev"),
    month: lookupTable(months, 13, "prev"),
    weekday: lookupTable(weekdays, 7, "prev")
  }

  return o
}

const lookupTable = (
  values: ReadonlyArray<number>,
  size: number,
  dir: "next" | "prev"
): Array<number | undefined> => {
  const result = new Array(size).fill(undefined)
  if (values.length === 0) {
    return result
  }

  let current: number | undefined = undefined

  if (dir === "next") {
    let index = values.length - 1
    for (let i = size - 1; i >= 0; i--) {
      while (index >= 0 && values[index] >= i) {
        current = values[index--]
      }
      result[i] = current
    }
  } else {
    let index = 0
    for (let i = 0; i < size; i++) {
      while (index < values.length && values[index] <= i) {
        current = values[index++]
      }
      result[i] = current
    }
  }

  return result
}

/**
 * @since 2.0.0
 * @category symbol
 */
export const ParseErrorTypeId: unique symbol = Symbol.for("effect/Cron/errors/ParseError")

/**
 * @since 2.0.0
 * @category symbols
 */
export type ParseErrorTypeId = typeof ParseErrorTypeId

/**
 * Represents a checked exception which occurs when decoding fails.
 *
 * @since 2.0.0
 * @category models
 */
export class ParseError extends Data.TaggedError("CronParseError")<{
  readonly message: string
  readonly input?: string
}> {
  /**
   * @since 2.0.0
   */
  readonly [ParseErrorTypeId] = ParseErrorTypeId
}

/**
 * Returns `true` if the specified value is an `ParseError`, `false` otherwise.
 *
 * @since 2.0.0
 * @category guards
 */
export const isParseError = (u: unknown): u is ParseError => hasProperty(u, ParseErrorTypeId)

/**
 * Parses a cron expression into a `Cron` instance.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * // At 04:00 on every day-of-month from 8 through 14.
 * assert.deepStrictEqual(Cron.parse("0 0 4 8-14 * *"), Either.right(Cron.make({
 *   seconds: [0],
 *   minutes: [0],
 *   hours: [4],
 *   days: [8, 9, 10, 11, 12, 13, 14],
 *   months: [],
 *   weekdays: []
 * })))
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const parse = (cron: string, tz?: DateTime.TimeZone | string): Either.Either<Cron, ParseError> => {
  const segments = cron.split(" ").filter(String.isNonEmpty)
  if (segments.length !== 5 && segments.length !== 6) {
    return Either.left(
      new ParseError({
        message: `Invalid number of segments in cron expression`,
        input: cron
      })
    )
  }

  if (segments.length === 5) {
    segments.unshift("0")
  }

  const [seconds, minutes, hours, days, months, weekdays] = segments
  const zone = tz === undefined || dateTime.isTimeZone(tz) ?
    Either.right(tz) :
    Either.fromOption(dateTime.zoneFromString(tz), () =>
      new ParseError({
        message: `Invalid time zone in cron expression`,
        input: tz
      }))

  return Either.all({
    tz: zone,
    seconds: parseSegment(seconds, secondOptions),
    minutes: parseSegment(minutes, minuteOptions),
    hours: parseSegment(hours, hourOptions),
    days: parseSegment(days, dayOptions),
    months: parseSegment(months, monthOptions),
    weekdays: parseSegment(weekdays, weekdayOptions)
  }).pipe(Either.map(make))
}

/**
 * Parses a cron expression into a `Cron` instance.
 *
 * **Details**
 *
 * This function takes a cron expression as a string and attempts to parse it
 * into a `Cron` instance. If the expression is valid, the resulting `Cron`
 * instance will represent the schedule defined by the cron expression.
 *
 * If the expression is invalid, the function throws a `ParseError`.
 *
 * You can optionally provide a time zone (`tz`) to interpret the cron
 * expression in a specific time zone. If no time zone is provided, the cron
 * expression will use the default time zone.
 *
 * @example
 * ```ts
 * import { Cron } from "effect"
 *
 * // At 04:00 on every day-of-month from 8 through 14.
 * console.log(Cron.unsafeParse("0 4 8-14 * *"))
 * // Output:
 * // {
 * //   _id: 'Cron',
 * //   tz: { _id: 'Option', _tag: 'None' },
 * //   seconds: [ 0 ],
 * //   minutes: [ 0 ],
 * //   hours: [ 4 ],
 * //   days: [
 * //      8,  9, 10, 11,
 * //     12, 13, 14
 * //   ],
 * //   months: [],
 * //   weekdays: []
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const unsafeParse = (cron: string, tz?: DateTime.TimeZone | string): Cron =>
  Either.getOrThrowWith(parse(cron, tz), identity)

/**
 * Checks if a given `Date` falls within an active `Cron` time window.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.match(cron, new Date("2021-01-08 04:00:00")), true)
 * assert.deepStrictEqual(Cron.match(cron, new Date("2021-01-08 05:00:00")), false)
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 *
 * @since 2.0.0
 */
export const match = (cron: Cron, date: DateTime.DateTime.Input): boolean => {
  const parts = dateTime.unsafeMakeZoned(date, {
    timeZone: Option.getOrUndefined(cron.tz)
  }).pipe(dateTime.toParts)

  if (cron.seconds.size !== 0 && !cron.seconds.has(parts.seconds)) {
    return false
  }

  if (cron.minutes.size !== 0 && !cron.minutes.has(parts.minutes)) {
    return false
  }

  if (cron.hours.size !== 0 && !cron.hours.has(parts.hours)) {
    return false
  }

  if (cron.months.size !== 0 && !cron.months.has(parts.month)) {
    return false
  }

  if (cron.days.size === 0 && cron.weekdays.size === 0) {
    return true
  }

  if (cron.weekdays.size === 0) {
    return cron.days.has(parts.day)
  }

  if (cron.days.size === 0) {
    return cron.weekdays.has(parts.weekDay)
  }

  return cron.days.has(parts.day) || cron.weekdays.has(parts.weekDay)
}

const daysInMonth = (date: Date): number =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate()

/**
 * Returns the next run `Date` for the given `Cron` instance.
 *
 * Uses the current time as a starting point if no value is provided for `startFrom`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const after = new Date("2021-01-01 00:00:00")
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.next(cron, after), new Date("2021-01-08 04:00:00"))
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 * @throws `Error` if the next run date cannot be found within 10,000 iterations.
 *
 * @since 2.0.0
 */
export const next = (cron: Cron, startFrom?: DateTime.DateTime.Input): Date => {
  return stepCron(cron, startFrom, "next")
}

/**
 * Returns the previous run `Date` for the given `Cron` instance.
 *
 * Uses the current time as a starting point if no value is provided for `startFrom`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Cron, Either } from "effect"
 *
 * const before = new Date("2021-01-15 00:00:00")
 * const cron = Either.getOrThrow(Cron.parse("0 4 8-14 * *"))
 * assert.deepStrictEqual(Cron.prev(cron, before), new Date("2021-01-14 04:00:00"))
 * ```
 *
 * @throws `IllegalArgumentException` if the given `DateTime.Input` is invalid.
 * @throws `Error` if the previous run date cannot be found within 10,000 iterations.
 *
 * @since 3.20.0
 */
export const prev = (cron: Cron, startFrom?: DateTime.DateTime.Input): Date => {
  return stepCron(cron, startFrom, "prev")
}

/** @internal */
const stepCron = (cron: Cron, startFrom: DateTime.DateTime.Input | undefined, direction: "next" | "prev"): Date => {
  const tz = Option.getOrUndefined(cron.tz)
  const zoned = dateTime.unsafeMakeZoned(startFrom ?? new Date(), {
    timeZone: tz
  })

  const prev = direction === "prev"
  const tick = prev ? -1 : 1
  const table = cron[direction]
  const boundary = prev ? cron.last : cron.first

  const needsStep = prev
    ? (next: number, current: number) => next < current
    : (next: number, current: number) => next > current

  const utc = tz !== undefined && dateTime.isTimeZoneNamed(tz) && tz.id === "UTC"
  const adjustDst = utc ? constVoid : (current: Date) => {
    const adjusted = dateTime.unsafeMakeZoned(current, {
      timeZone: zoned.zone,
      adjustForTimeZone: true,
      disambiguation: prev ? "later" : undefined
    }).pipe(dateTime.toDate)

    const drift = current.getTime() - adjusted.getTime()
    if (prev ? drift !== 0 : drift > 0) {
      current.setTime(adjusted.getTime())
    }
  }

  const result = dateTime.mutate(zoned, (current) => {
    current.setUTCSeconds(current.getUTCSeconds() + tick, 0)

    for (let i = 0; i < 10_000; i++) {
      if (cron.seconds.size !== 0) {
        const currentSecond = current.getUTCSeconds()
        const nextSecond = table.second[currentSecond]
        if (nextSecond === undefined) {
          current.setUTCMinutes(current.getUTCMinutes() + tick, boundary.second)
          adjustDst(current)
          continue
        }
        if (needsStep(nextSecond, currentSecond)) {
          current.setUTCSeconds(nextSecond)
          adjustDst(current)
          continue
        }
      }

      if (cron.minutes.size !== 0) {
        const currentMinute = current.getUTCMinutes()
        const nextMinute = table.minute[currentMinute]
        if (nextMinute === undefined) {
          current.setUTCHours(current.getUTCHours() + tick, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
        if (needsStep(nextMinute, currentMinute)) {
          current.setUTCMinutes(nextMinute, boundary.second)
          adjustDst(current)
          continue
        }
      }

      if (cron.hours.size !== 0) {
        const currentHour = current.getUTCHours()
        const nextHour = table.hour[currentHour]
        if (nextHour === undefined) {
          current.setUTCDate(current.getUTCDate() + tick)
          current.setUTCHours(boundary.hour, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
        if (needsStep(nextHour, currentHour)) {
          current.setUTCHours(nextHour, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
      }

      if (cron.weekdays.size !== 0 || cron.days.size !== 0) {
        let a: number = prev ? -Infinity : Infinity
        let b: number = prev ? -Infinity : Infinity

        if (cron.weekdays.size !== 0) {
          const currentWeekday = current.getUTCDay()
          const nextWeekday = table.weekday[currentWeekday]
          if (nextWeekday === undefined) {
            a = prev
              ? currentWeekday - 7 + boundary.weekday
              : 7 - currentWeekday + boundary.weekday
          } else {
            a = nextWeekday - currentWeekday
          }
        }

        // Only check day-of-month if weekday constraint not already satisfied (they're OR'd)
        if (cron.days.size !== 0 && a !== 0) {
          const currentDay = current.getUTCDate()
          const nextDay = table.day[currentDay]
          if (nextDay === undefined) {
            if (prev) {
              // When wrapping to previous month, calculate days back:
              // Current day offset + gap from end of prev month to target day
              // Example: June 3 → May 20 with boundary.day=20: -(3 + (31 - 20)) = -14
              const prevMonthDays = daysInMonth(
                new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth(), 0))
              )
              b = -(currentDay + (prevMonthDays - boundary.day))
            } else {
              b = daysInMonth(current) - currentDay + boundary.day
            }
          } else {
            b = nextDay - currentDay
          }
        }

        const addDays = prev ? Math.max(a, b) : Math.min(a, b)
        if (addDays !== 0) {
          current.setUTCDate(current.getUTCDate() + addDays)
          current.setUTCHours(boundary.hour, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
      }

      if (cron.months.size !== 0) {
        const currentMonth = current.getUTCMonth() + 1
        const nextMonth = table.month[currentMonth]
        const clampBoundaryDay = (targetMonthIndex: number): number => {
          if (cron.days.size !== 0) {
            return boundary.day
          }
          const maxDayInMonth = daysInMonth(new Date(Date.UTC(current.getUTCFullYear(), targetMonthIndex, 1)))
          return Math.min(boundary.day, maxDayInMonth)
        }
        if (nextMonth === undefined) {
          current.setUTCFullYear(current.getUTCFullYear() + tick)
          current.setUTCMonth(boundary.month, clampBoundaryDay(boundary.month))
          current.setUTCHours(boundary.hour, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
        if (needsStep(nextMonth, currentMonth)) {
          const targetMonthIndex = nextMonth - 1
          current.setUTCMonth(targetMonthIndex, clampBoundaryDay(targetMonthIndex))
          current.setUTCHours(boundary.hour, boundary.minute, boundary.second)
          adjustDst(current)
          continue
        }
      }

      return
    }

    throw new Error("Unable to find next cron date")
  })

  return dateTime.toDateUtc(result)
}

/**
 * Returns an `IterableIterator` which yields the sequence of `Date`s that match the `Cron` instance.
 *
 * @since 2.0.0
 */
export const sequence = function*(cron: Cron, startFrom?: DateTime.DateTime.Input): IterableIterator<Date> {
  while (true) {
    yield startFrom = next(cron, startFrom)
  }
}

/**
 * Returns an `IterableIterator` which yields the sequence of `Date`s that match the `Cron` instance,
 * in reverse direction.
 *
 * @since 3.20.0
 */
export const sequenceReverse = function*(cron: Cron, startFrom?: DateTime.DateTime.Input): IterableIterator<Date> {
  while (true) {
    yield startFrom = prev(cron, startFrom)
  }
}

/**
 * @category instances
 * @since 2.0.0
 */
export const Equivalence: equivalence.Equivalence<Cron> = equivalence.make((self, that) =>
  restrictionsEquals(self.seconds, that.seconds) &&
  restrictionsEquals(self.minutes, that.minutes) &&
  restrictionsEquals(self.hours, that.hours) &&
  restrictionsEquals(self.days, that.days) &&
  restrictionsEquals(self.months, that.months) &&
  restrictionsEquals(self.weekdays, that.weekdays)
)

const restrictionsArrayEquals = equivalence.array(equivalence.number)
const restrictionsEquals = (self: ReadonlySet<number>, that: ReadonlySet<number>): boolean =>
  restrictionsArrayEquals(Arr.fromIterable(self), Arr.fromIterable(that))

/**
 * Checks if two `Cron`s are equal.
 *
 * @since 2.0.0
 * @category predicates
 */
export const equals: {
  /**
   * Checks if two `Cron`s are equal.
   *
   * @since 2.0.0
   * @category predicates
   */
  (that: Cron): (self: Cron) => boolean
  /**
   * Checks if two `Cron`s are equal.
   *
   * @since 2.0.0
   * @category predicates
   */
  (self: Cron, that: Cron): boolean
} = dual(2, (self: Cron, that: Cron): boolean => Equivalence(self, that))

interface SegmentOptions {
  min: number
  max: number
  aliases?: Record<string, number> | undefined
}

const secondOptions: SegmentOptions = {
  min: 0,
  max: 59
}

const minuteOptions: SegmentOptions = {
  min: 0,
  max: 59
}

const hourOptions: SegmentOptions = {
  min: 0,
  max: 23
}

const dayOptions: SegmentOptions = {
  min: 1,
  max: 31
}

const monthOptions: SegmentOptions = {
  min: 1,
  max: 12,
  aliases: {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12
  }
}

const weekdayOptions: SegmentOptions = {
  min: 0,
  max: 6,
  aliases: {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
  }
}

const parseSegment = (
  input: string,
  options: SegmentOptions
): Either.Either<ReadonlySet<number>, ParseError> => {
  const capacity = options.max - options.min + 1
  const values = new Set<number>()
  const fields = input.split(",")

  for (const field of fields) {
    const [raw, step] = splitStep(field)
    if (raw === "*" && step === undefined) {
      return Either.right(new Set())
    }

    if (step !== undefined) {
      if (!Number.isInteger(step)) {
        return Either.left(new ParseError({ message: `Expected step value to be a positive integer`, input }))
      }
      if (step < 1) {
        return Either.left(new ParseError({ message: `Expected step value to be greater than 0`, input }))
      }
      if (step > options.max) {
        return Either.left(new ParseError({ message: `Expected step value to be less than ${options.max}`, input }))
      }
    }

    if (raw === "*") {
      for (let i = options.min; i <= options.max; i += step ?? 1) {
        values.add(i)
      }
    } else {
      const [left, right] = splitRange(raw, options.aliases)
      if (!Number.isInteger(left)) {
        return Either.left(new ParseError({ message: `Expected a positive integer`, input }))
      }
      if (left < options.min || left > options.max) {
        return Either.left(
          new ParseError({ message: `Expected a value between ${options.min} and ${options.max}`, input })
        )
      }

      if (right === undefined) {
        values.add(left)
      } else {
        if (!Number.isInteger(right)) {
          return Either.left(new ParseError({ message: `Expected a positive integer`, input }))
        }
        if (right < options.min || right > options.max) {
          return Either.left(
            new ParseError({ message: `Expected a value between ${options.min} and ${options.max}`, input })
          )
        }
        if (left > right) {
          return Either.left(new ParseError({ message: `Invalid value range`, input }))
        }

        for (let i = left; i <= right; i += step ?? 1) {
          values.add(i)
        }
      }
    }

    if (values.size >= capacity) {
      return Either.right(new Set())
    }
  }

  return Either.right(values)
}

const splitStep = (input: string): [string, number | undefined] => {
  const seperator = input.indexOf("/")
  if (seperator !== -1) {
    return [input.slice(0, seperator), Number(input.slice(seperator + 1))]
  }

  return [input, undefined]
}

const splitRange = (input: string, aliases?: Record<string, number>): [number, number | undefined] => {
  const seperator = input.indexOf("-")
  if (seperator !== -1) {
    return [aliasOrValue(input.slice(0, seperator), aliases), aliasOrValue(input.slice(seperator + 1), aliases)]
  }

  return [aliasOrValue(input, aliases), undefined]
}

function aliasOrValue(field: string, aliases?: Record<string, number>): number {
  return aliases?.[field.toLocaleLowerCase()] ?? Number(field)
}
