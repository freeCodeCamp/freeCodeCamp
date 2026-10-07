/**
 * @since 3.6.0
 */
import type { IllegalArgumentException } from "./Cause.js";
import * as Context from "./Context.js";
import type * as Duration from "./Duration.js";
import * as Effect from "./Effect.js";
import type * as Either from "./Either.js";
import type * as equivalence from "./Equivalence.js";
import { type LazyArg } from "./Function.js";
import type { Inspectable } from "./Inspectable.js";
import * as Layer from "./Layer.js";
import type * as Option from "./Option.js";
import type * as order from "./Order.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * @since 3.6.0
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 3.6.0
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * A `DateTime` represents a point in time. It can optionally have a time zone
 * associated with it.
 *
 * @since 3.6.0
 * @category models
 */
export type DateTime = Utc | Zoned;
/**
 * @since 3.6.0
 * @category models
 */
export interface Utc extends DateTime.Proto {
    readonly _tag: "Utc";
    readonly epochMillis: number;
    partsUtc: DateTime.PartsWithWeekday | undefined;
}
/**
 * @since 3.6.0
 * @category models
 */
export interface Zoned extends DateTime.Proto {
    readonly _tag: "Zoned";
    readonly epochMillis: number;
    readonly zone: TimeZone;
    adjustedEpochMillis: number | undefined;
    partsAdjusted: DateTime.PartsWithWeekday | undefined;
    partsUtc: DateTime.PartsWithWeekday | undefined;
}
/**
 * @since 3.6.0
 * @category models
 */
export declare namespace DateTime {
    /**
     * @since 3.6.0
     * @category models
     */
    type Input = DateTime | Partial<Parts> | Date | number | string;
    /**
     * @since 3.6.0
     * @category models
     */
    type PreserveZone<A extends DateTime.Input> = A extends Zoned ? Zoned : Utc;
    /**
     * @since 3.6.0
     * @category models
     */
    type Unit = UnitSingular | UnitPlural;
    /**
     * @since 3.6.0
     * @category models
     */
    type UnitSingular = "milli" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
    /**
     * @since 3.6.0
     * @category models
     */
    type UnitPlural = "millis" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";
    /**
     * @since 3.6.0
     * @category models
     */
    interface PartsWithWeekday {
        readonly millis: number;
        readonly seconds: number;
        readonly minutes: number;
        readonly hours: number;
        readonly day: number;
        readonly weekDay: number;
        readonly month: number;
        readonly year: number;
    }
    /**
     * @since 3.6.0
     * @category models
     */
    interface Parts {
        readonly millis: number;
        readonly seconds: number;
        readonly minutes: number;
        readonly hours: number;
        readonly day: number;
        readonly month: number;
        readonly year: number;
    }
    /**
     * @since 3.6.0
     * @category models
     */
    interface PartsForMath {
        readonly millis: number;
        readonly seconds: number;
        readonly minutes: number;
        readonly hours: number;
        readonly days: number;
        readonly weeks: number;
        readonly months: number;
        readonly years: number;
    }
    /**
     * @since 3.6.0
     * @category models
     */
    interface Proto extends Pipeable, Inspectable {
        readonly [TypeId]: TypeId;
    }
}
/**
 * @since 3.6.0
 * @category type ids
 */
export declare const TimeZoneTypeId: unique symbol;
/**
 * @since 3.6.0
 * @category type ids
 */
export type TimeZoneTypeId = typeof TimeZoneTypeId;
/**
 * @since 3.6.0
 * @category models
 */
export type TimeZone = TimeZone.Offset | TimeZone.Named;
/**
 * @since 3.6.0
 * @category models
 */
export declare namespace TimeZone {
    /**
     * @since 3.6.0
     * @category models
     */
    interface Proto extends Inspectable {
        readonly [TimeZoneTypeId]: TimeZoneTypeId;
    }
    /**
     * @since 3.6.0
     * @category models
     */
    interface Offset extends Proto {
        readonly _tag: "Offset";
        readonly offset: number;
    }
    /**
     * @since 3.6.0
     * @category models
     */
    interface Named extends Proto {
        readonly _tag: "Named";
        readonly id: string;
    }
}
/**
 * A `Disambiguation` is used to resolve ambiguities when a `DateTime` is
 * ambiguous, such as during a daylight saving time transition.
 *
 * For more information, see the [Temporal documentation](https://tc39.es/proposal-temporal/docs/timezone.html#ambiguity-due-to-dst-or-other-time-zone-offset-changes)
 *
 * - `"compatible"`: (default) Behavior matching Temporal API and legacy JavaScript Date and moment.js.
 *   For repeated times, chooses the earlier occurrence. For gap times, chooses the later interpretation.
 *
 * - `"earlier"`: For repeated times, always choose the earlier occurrence.
 *   For gap times, choose the time before the gap.
 *
 * - `"later"`: For repeated times, always choose the later occurrence.
 *   For gap times, choose the time after the gap.
 *
 * - `"reject"`: Throw an `RangeError` when encountering ambiguous or non-existent times.
 *
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // Fall-back example: 01:30 on Nov 2, 2025 in New York happens twice
 * const ambiguousTime = { year: 2025, month: 11, day: 2, hours: 1, minutes: 30 }
 * const timeZone = DateTime.zoneUnsafeMakeNamed("America/New_York")
 *
 * DateTime.makeZoned(ambiguousTime, { timeZone, adjustForTimeZone: true, disambiguation: "earlier" })
 * // Earlier occurrence (DST time): 2025-11-02T05:30:00.000Z
 *
 * DateTime.makeZoned(ambiguousTime, { timeZone, adjustForTimeZone: true, disambiguation: "later" })
 * // Later occurrence (standard time): 2025-11-02T06:30:00.000Z
 *
 * // Gap example: 02:30 on Mar 9, 2025 in New York doesn't exist
 * const gapTime = { year: 2025, month: 3, day: 9, hours: 2, minutes: 30 }
 *
 * DateTime.makeZoned(gapTime, { timeZone, adjustForTimeZone: true, disambiguation: "earlier" })
 * // Time before gap: 2025-03-09T06:30:00.000Z (01:30 EST)
 *
 * DateTime.makeZoned(gapTime, { timeZone, adjustForTimeZone: true, disambiguation: "later" })
 * // Time after gap: 2025-03-09T07:30:00.000Z (03:30 EDT)
 * ```
 *
 * @since 3.18.0
 * @category models
 */
export type Disambiguation = "compatible" | "earlier" | "later" | "reject";
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isDateTime: (u: unknown) => u is DateTime;
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isTimeZone: (u: unknown) => u is TimeZone;
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isTimeZoneOffset: (u: unknown) => u is TimeZone.Offset;
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isTimeZoneNamed: (u: unknown) => u is TimeZone.Named;
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isUtc: (self: DateTime) => self is Utc;
/**
 * @since 3.6.0
 * @category guards
 */
export declare const isZoned: (self: DateTime) => self is Zoned;
/**
 * @since 3.6.0
 * @category instances
 */
export declare const Equivalence: equivalence.Equivalence<DateTime>;
/**
 * @since 3.6.0
 * @category instances
 */
export declare const Order: order.Order<DateTime>;
/**
 * @since 3.6.0
 */
export declare const clamp: {
    /**
     * @since 3.6.0
     */
    <Min extends DateTime, Max extends DateTime>(options: {
        readonly minimum: Min;
        readonly maximum: Max;
    }): <A extends DateTime>(self: A) => A | Min | Max;
    /**
     * @since 3.6.0
     */
    <A extends DateTime, Min extends DateTime, Max extends DateTime>(self: A, options: {
        readonly minimum: Min;
        readonly maximum: Max;
    }): A | Min | Max;
};
/**
 * Create a `DateTime` from a `Date`.
 *
 * If the `Date` is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category constructors
 */
export declare const unsafeFromDate: (date: Date) => Utc;
/**
 * Create a `DateTime` from one of the following:
 *
 * - A `DateTime`
 * - A `Date` instance (invalid dates will throw an `IllegalArgumentException`)
 * - The `number` of milliseconds since the Unix epoch
 * - An object with the parts of a date
 * - A `string` that can be parsed by `Date.parse`
 *
 * @since 3.6.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // from Date
 * DateTime.unsafeMake(new Date())
 *
 * // from parts
 * DateTime.unsafeMake({ year: 2024 })
 *
 * // from string
 * DateTime.unsafeMake("2024-01-01")
 * ```
 */
export declare const unsafeMake: <A extends DateTime.Input>(input: A) => DateTime.PreserveZone<A>;
/**
 * Create a `DateTime.Zoned` using `DateTime.unsafeMake` and a time zone.
 *
 * The input is treated as UTC and then the time zone is attached, unless
 * `adjustForTimeZone` is set to `true`. In that case, the input is treated as
 * already in the time zone.
 *
 * When `adjustForTimeZone` is true and ambiguous times occur during DST transitions,
 * the `disambiguation` option controls how to resolve the ambiguity:
 * - `compatible` (default): Choose earlier time for repeated times, later for gaps
 * - `earlier`: Always choose the earlier of two possible times
 * - `later`: Always choose the later of two possible times
 * - `reject`: Throw an error when ambiguous times are encountered
 *
 * @since 3.6.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * DateTime.unsafeMakeZoned(new Date(), { timeZone: "Europe/London" })
 * ```
 */
export declare const unsafeMakeZoned: (input: DateTime.Input, options?: {
    readonly timeZone?: number | string | TimeZone | undefined;
    readonly adjustForTimeZone?: boolean | undefined;
    readonly disambiguation?: Disambiguation | undefined;
}) => Zoned;
/**
 * Create a `DateTime.Zoned` using `DateTime.make` and a time zone.
 *
 * The input is treated as UTC and then the time zone is attached, unless
 * `adjustForTimeZone` is set to `true`. In that case, the input is treated as
 * already in the time zone.
 *
 * When `adjustForTimeZone` is true and ambiguous times occur during DST transitions,
 * the `disambiguation` option controls how to resolve the ambiguity:
 * - `compatible` (default): Choose earlier time for repeated times, later for gaps
 * - `earlier`: Always choose the earlier of two possible times
 * - `later`: Always choose the later of two possible times
 * - `reject`: Throw an error when ambiguous times are encountered
 *
 * If the date time input or time zone is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * DateTime.makeZoned(new Date(), { timeZone: "Europe/London" })
 * ```
 */
export declare const makeZoned: (input: DateTime.Input, options?: {
    readonly timeZone?: number | string | TimeZone | undefined;
    readonly adjustForTimeZone?: boolean | undefined;
    readonly disambiguation?: Disambiguation | undefined;
}) => Option.Option<Zoned>;
/**
 * Create a `DateTime` from one of the following:
 *
 * - A `DateTime`
 * - A `Date` instance (invalid dates will throw an `IllegalArgumentException`)
 * - The `number` of milliseconds since the Unix epoch
 * - An object with the parts of a date
 * - A `string` that can be parsed by `Date.parse`
 *
 * If the input is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // from Date
 * DateTime.make(new Date())
 *
 * // from parts
 * DateTime.make({ year: 2024 })
 *
 * // from string
 * DateTime.make("2024-01-01")
 * ```
 */
export declare const make: <A extends DateTime.Input>(input: A) => Option.Option<DateTime.PreserveZone<A>>;
/**
 * Create a `DateTime.Zoned` from a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category constructors
 */
export declare const makeZonedFromString: (input: string) => Option.Option<Zoned>;
/**
 * Get the current time using the `Clock` service and convert it to a `DateTime`.
 *
 * @since 3.6.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 * })
 * ```
 */
export declare const now: Effect.Effect<Utc>;
/**
 * Get the current time using the `Clock` service.
 *
 * @since 3.14.0
 * @category constructors
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.nowAsDate
 * })
 * ```
 */
export declare const nowAsDate: Effect.Effect<Date>;
/**
 * Get the current time using `Date.now`.
 *
 * @since 3.6.0
 * @category constructors
 */
export declare const unsafeNow: LazyArg<Utc>;
/**
 * For a `DateTime` returns a new `DateTime.Utc`.
 *
 * @since 3.13.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * const now = DateTime.unsafeMakeZoned({ year: 2024 }, { timeZone: "Europe/London" })
 *
 * // set as UTC
 * const utc: DateTime.Utc = DateTime.toUtc(now)
 * ```
 */
export declare const toUtc: (self: DateTime) => Utc;
/**
 * Set the time zone of a `DateTime`, returning a new `DateTime.Zoned`.
 *
 * @since 3.6.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
 *
 *   // set the time zone
 *   const zoned: DateTime.Zoned = DateTime.setZone(now, zone)
 * })
 * ```
 */
export declare const setZone: {
    /**
     * Set the time zone of a `DateTime`, returning a new `DateTime.Zoned`.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
     *
     *   // set the time zone
     *   const zoned: DateTime.Zoned = DateTime.setZone(now, zone)
     * })
     * ```
     */
    (zone: TimeZone, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): (self: DateTime) => Zoned;
    /**
     * Set the time zone of a `DateTime`, returning a new `DateTime.Zoned`.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
     *
     *   // set the time zone
     *   const zoned: DateTime.Zoned = DateTime.setZone(now, zone)
     * })
     * ```
     */
    (self: DateTime, zone: TimeZone, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): Zoned;
};
/**
 * Add a fixed offset time zone to a `DateTime`.
 *
 * The offset is in milliseconds.
 *
 * @since 3.6.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *
 *   // set the offset time zone in milliseconds
 *   const zoned: DateTime.Zoned = DateTime.setZoneOffset(now, 3 * 60 * 60 * 1000)
 * })
 * ```
 */
export declare const setZoneOffset: {
    /**
     * Add a fixed offset time zone to a `DateTime`.
     *
     * The offset is in milliseconds.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *
     *   // set the offset time zone in milliseconds
     *   const zoned: DateTime.Zoned = DateTime.setZoneOffset(now, 3 * 60 * 60 * 1000)
     * })
     * ```
     */
    (offset: number, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): (self: DateTime) => Zoned;
    /**
     * Add a fixed offset time zone to a `DateTime`.
     *
     * The offset is in milliseconds.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *
     *   // set the offset time zone in milliseconds
     *   const zoned: DateTime.Zoned = DateTime.setZoneOffset(now, 3 * 60 * 60 * 1000)
     * })
     * ```
     */
    (self: DateTime, offset: number, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): Zoned;
};
/**
 * Attempt to create a named time zone from a IANA time zone identifier.
 *
 * If the time zone is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneUnsafeMakeNamed: (zoneId: string) => TimeZone.Named;
/**
 * Create a fixed offset time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneMakeOffset: (offset: number) => TimeZone.Offset;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneMakeNamed: (zoneId: string) => Option.Option<TimeZone.Named>;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, it will fail with an `IllegalArgumentException`.
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneMakeNamedEffect: (zoneId: string) => Effect.Effect<TimeZone.Named, IllegalArgumentException>;
/**
 * Create a named time zone from the system's local time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneMakeLocal: () => TimeZone.Named;
/**
 * Try parse a TimeZone from a string
 *
 * @since 3.6.0
 * @category time zones
 */
export declare const zoneFromString: (zone: string) => Option.Option<TimeZone>;
/**
 * Format a `TimeZone` as a string.
 *
 * @since 3.6.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * // Outputs "+03:00"
 * DateTime.zoneToString(DateTime.zoneMakeOffset(3 * 60 * 60 * 1000))
 *
 * // Outputs "Europe/London"
 * DateTime.zoneToString(DateTime.zoneUnsafeMakeNamed("Europe/London"))
 * ```
 */
export declare const zoneToString: (self: TimeZone) => string;
/**
 * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
 * time zone is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   // set the time zone, returns an Option
 *   DateTime.setZoneNamed(now, "Europe/London")
 * })
 * ```
 */
export declare const setZoneNamed: {
    /**
     * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
     * time zone is invalid, `None` will be returned.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   // set the time zone, returns an Option
     *   DateTime.setZoneNamed(now, "Europe/London")
     * })
     * ```
     */
    (zoneId: string, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): (self: DateTime) => Option.Option<Zoned>;
    /**
     * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
     * time zone is invalid, `None` will be returned.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   // set the time zone, returns an Option
     *   DateTime.setZoneNamed(now, "Europe/London")
     * })
     * ```
     */
    (self: DateTime, zoneId: string, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): Option.Option<Zoned>;
};
/**
 * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
 * time zone is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category time zones
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   // set the time zone
 *   DateTime.unsafeSetZoneNamed(now, "Europe/London")
 * })
 * ```
 */
export declare const unsafeSetZoneNamed: {
    /**
     * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
     * time zone is invalid, an `IllegalArgumentException` will be thrown.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   // set the time zone
     *   DateTime.unsafeSetZoneNamed(now, "Europe/London")
     * })
     * ```
     */
    (zoneId: string, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): (self: DateTime) => Zoned;
    /**
     * Set the time zone of a `DateTime` from an IANA time zone identifier. If the
     * time zone is invalid, an `IllegalArgumentException` will be thrown.
     *
     * @since 3.6.0
     * @category time zones
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   // set the time zone
     *   DateTime.unsafeSetZoneNamed(now, "Europe/London")
     * })
     * ```
     */
    (self: DateTime, zoneId: string, options?: {
        readonly adjustForTimeZone?: boolean | undefined;
        readonly disambiguation?: Disambiguation | undefined;
    }): Zoned;
};
/**
 * Calulate the difference between two `DateTime` values, returning the number
 * of milliseconds the `other` DateTime is from `self`.
 *
 * If `other` is *after* `self`, the result will be a positive number.
 *
 * @since 3.6.0
 * @category comparisons
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   const other = DateTime.add(now, { minutes: 1 })
 *
 *   // returns 60000
 *   DateTime.distance(now, other)
 * })
 * ```
 */
export declare const distance: {
    /**
     * Calulate the difference between two `DateTime` values, returning the number
     * of milliseconds the `other` DateTime is from `self`.
     *
     * If `other` is *after* `self`, the result will be a positive number.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns 60000
     *   DateTime.distance(now, other)
     * })
     * ```
     */
    (other: DateTime): (self: DateTime) => number;
    /**
     * Calulate the difference between two `DateTime` values, returning the number
     * of milliseconds the `other` DateTime is from `self`.
     *
     * If `other` is *after* `self`, the result will be a positive number.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns 60000
     *   DateTime.distance(now, other)
     * })
     * ```
     */
    (self: DateTime, other: DateTime): number;
};
/**
 * Calulate the difference between two `DateTime` values.
 *
 * If the `other` DateTime is before `self`, the result will be a negative
 * `Duration`, returned as a `Left`.
 *
 * If the `other` DateTime is after `self`, the result will be a positive
 * `Duration`, returned as a `Right`.
 *
 * @since 3.6.0
 * @category comparisons
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   const other = DateTime.add(now, { minutes: 1 })
 *
 *   // returns Either.right(Duration.minutes(1))
 *   DateTime.distanceDurationEither(now, other)
 *
 *   // returns Either.left(Duration.minutes(1))
 *   DateTime.distanceDurationEither(other, now)
 * })
 * ```
 */
export declare const distanceDurationEither: {
    /**
     * Calulate the difference between two `DateTime` values.
     *
     * If the `other` DateTime is before `self`, the result will be a negative
     * `Duration`, returned as a `Left`.
     *
     * If the `other` DateTime is after `self`, the result will be a positive
     * `Duration`, returned as a `Right`.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns Either.right(Duration.minutes(1))
     *   DateTime.distanceDurationEither(now, other)
     *
     *   // returns Either.left(Duration.minutes(1))
     *   DateTime.distanceDurationEither(other, now)
     * })
     * ```
     */
    (other: DateTime): (self: DateTime) => Either.Either<Duration.Duration, Duration.Duration>;
    /**
     * Calulate the difference between two `DateTime` values.
     *
     * If the `other` DateTime is before `self`, the result will be a negative
     * `Duration`, returned as a `Left`.
     *
     * If the `other` DateTime is after `self`, the result will be a positive
     * `Duration`, returned as a `Right`.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns Either.right(Duration.minutes(1))
     *   DateTime.distanceDurationEither(now, other)
     *
     *   // returns Either.left(Duration.minutes(1))
     *   DateTime.distanceDurationEither(other, now)
     * })
     * ```
     */
    (self: DateTime, other: DateTime): Either.Either<Duration.Duration, Duration.Duration>;
};
/**
 * Calulate the distance between two `DateTime` values.
 *
 * @since 3.6.0
 * @category comparisons
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *   const other = DateTime.add(now, { minutes: 1 })
 *
 *   // returns Duration.minutes(1)
 *   DateTime.distanceDuration(now, other)
 * })
 * ```
 */
export declare const distanceDuration: {
    /**
     * Calulate the distance between two `DateTime` values.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns Duration.minutes(1)
     *   DateTime.distanceDuration(now, other)
     * })
     * ```
     */
    (other: DateTime): (self: DateTime) => Duration.Duration;
    /**
     * Calulate the distance between two `DateTime` values.
     *
     * @since 3.6.0
     * @category comparisons
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.now
     *   const other = DateTime.add(now, { minutes: 1 })
     *
     *   // returns Duration.minutes(1)
     *   DateTime.distanceDuration(now, other)
     * })
     * ```
     */
    (self: DateTime, other: DateTime): Duration.Duration;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const min: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    <That extends DateTime>(that: That): <Self extends DateTime>(self: Self) => Self | That;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    <Self extends DateTime, That extends DateTime>(self: Self, that: That): Self | That;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const max: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    <That extends DateTime>(that: That): <Self extends DateTime>(self: Self) => Self | That;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    <Self extends DateTime, That extends DateTime>(self: Self, that: That): Self | That;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const greaterThan: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (that: DateTime): (self: DateTime) => boolean;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (self: DateTime, that: DateTime): boolean;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const greaterThanOrEqualTo: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (that: DateTime): (self: DateTime) => boolean;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (self: DateTime, that: DateTime): boolean;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const lessThan: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (that: DateTime): (self: DateTime) => boolean;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (self: DateTime, that: DateTime): boolean;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const lessThanOrEqualTo: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (that: DateTime): (self: DateTime) => boolean;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (self: DateTime, that: DateTime): boolean;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const between: {
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (options: {
        minimum: DateTime;
        maximum: DateTime;
    }): (self: DateTime) => boolean;
    /**
     * @since 3.6.0
     * @category comparisons
     */
    (self: DateTime, options: {
        minimum: DateTime;
        maximum: DateTime;
    }): boolean;
};
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const isFuture: (self: DateTime) => Effect.Effect<boolean>;
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const unsafeIsFuture: (self: DateTime) => boolean;
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const isPast: (self: DateTime) => Effect.Effect<boolean>;
/**
 * @since 3.6.0
 * @category comparisons
 */
export declare const unsafeIsPast: (self: DateTime) => boolean;
/**
 * Get the UTC `Date` of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
export declare const toDateUtc: (self: DateTime) => Date;
/**
 * Convert a `DateTime` to a `Date`, applying the time zone first.
 *
 * @since 3.6.0
 * @category conversions
 */
export declare const toDate: (self: DateTime) => Date;
/**
 * Calculate the time zone offset of a `DateTime.Zoned` in milliseconds.
 *
 * @since 3.6.0
 * @category conversions
 */
export declare const zonedOffset: (self: Zoned) => number;
/**
 * Calculate the time zone offset of a `DateTime` in milliseconds.
 *
 * The offset is formatted as "±HH:MM".
 *
 * @since 3.6.0
 * @category conversions
 */
export declare const zonedOffsetIso: (self: Zoned) => string;
/**
 * Get the milliseconds since the Unix epoch of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
export declare const toEpochMillis: (self: DateTime) => number;
/**
 * Remove the time aspect of a `DateTime`, first adjusting for the time
 * zone. It will return a `DateTime.Utc` only containing the date.
 *
 * @since 3.6.0
 * @category conversions
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // returns "2024-01-01T00:00:00Z"
 * DateTime.unsafeMakeZoned("2024-01-01T05:00:00Z", {
 *   timeZone: "Pacific/Auckland",
 *   adjustForTimeZone: true
 * }).pipe(
 *   DateTime.removeTime,
 *   DateTime.formatIso
 * )
 * ```
 */
export declare const removeTime: (self: DateTime) => Utc;
/**
 * Get the different parts of a `DateTime` as an object.
 *
 * The parts will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 */
export declare const toParts: (self: DateTime) => DateTime.PartsWithWeekday;
/**
 * Get the different parts of a `DateTime` as an object.
 *
 * The parts will be in UTC.
 *
 * @since 3.6.0
 * @category parts
 */
export declare const toPartsUtc: (self: DateTime) => DateTime.PartsWithWeekday;
/**
 * Get a part of a `DateTime` as a number.
 *
 * The part will be in the UTC time zone.
 *
 * @since 3.6.0
 * @category parts
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { DateTime } from "effect"
 *
 * const now = DateTime.unsafeMake({ year: 2024 })
 * const year = DateTime.getPartUtc(now, "year")
 * assert.strictEqual(year, 2024)
 * ```
 */
export declare const getPartUtc: {
    /**
     * Get a part of a `DateTime` as a number.
     *
     * The part will be in the UTC time zone.
     *
     * @since 3.6.0
     * @category parts
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { DateTime } from "effect"
     *
     * const now = DateTime.unsafeMake({ year: 2024 })
     * const year = DateTime.getPartUtc(now, "year")
     * assert.strictEqual(year, 2024)
     * ```
     */
    (part: keyof DateTime.PartsWithWeekday): (self: DateTime) => number;
    /**
     * Get a part of a `DateTime` as a number.
     *
     * The part will be in the UTC time zone.
     *
     * @since 3.6.0
     * @category parts
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { DateTime } from "effect"
     *
     * const now = DateTime.unsafeMake({ year: 2024 })
     * const year = DateTime.getPartUtc(now, "year")
     * assert.strictEqual(year, 2024)
     * ```
     */
    (self: DateTime, part: keyof DateTime.PartsWithWeekday): number;
};
/**
 * Get a part of a `DateTime` as a number.
 *
 * The part will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { DateTime } from "effect"
 *
 * const now = DateTime.unsafeMakeZoned({ year: 2024 }, { timeZone: "Europe/London" })
 * const year = DateTime.getPart(now, "year")
 * assert.strictEqual(year, 2024)
 * ```
 */
export declare const getPart: {
    /**
     * Get a part of a `DateTime` as a number.
     *
     * The part will be time zone adjusted.
     *
     * @since 3.6.0
     * @category parts
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { DateTime } from "effect"
     *
     * const now = DateTime.unsafeMakeZoned({ year: 2024 }, { timeZone: "Europe/London" })
     * const year = DateTime.getPart(now, "year")
     * assert.strictEqual(year, 2024)
     * ```
     */
    (part: keyof DateTime.PartsWithWeekday): (self: DateTime) => number;
    /**
     * Get a part of a `DateTime` as a number.
     *
     * The part will be time zone adjusted.
     *
     * @since 3.6.0
     * @category parts
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { DateTime } from "effect"
     *
     * const now = DateTime.unsafeMakeZoned({ year: 2024 }, { timeZone: "Europe/London" })
     * const year = DateTime.getPart(now, "year")
     * assert.strictEqual(year, 2024)
     * ```
     */
    (self: DateTime, part: keyof DateTime.PartsWithWeekday): number;
};
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * The Date will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 */
export declare const setParts: {
    /**
     * Set the different parts of a `DateTime` as an object.
     *
     * The Date will be time zone adjusted.
     *
     * @since 3.6.0
     * @category parts
     */
    (parts: Partial<DateTime.PartsWithWeekday>): <A extends DateTime>(self: A) => A;
    /**
     * Set the different parts of a `DateTime` as an object.
     *
     * The Date will be time zone adjusted.
     *
     * @since 3.6.0
     * @category parts
     */
    <A extends DateTime>(self: A, parts: Partial<DateTime.PartsWithWeekday>): A;
};
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * @since 3.6.0
 * @category parts
 */
export declare const setPartsUtc: {
    /**
     * Set the different parts of a `DateTime` as an object.
     *
     * @since 3.6.0
     * @category parts
     */
    (parts: Partial<DateTime.PartsWithWeekday>): <A extends DateTime>(self: A) => A;
    /**
     * Set the different parts of a `DateTime` as an object.
     *
     * @since 3.6.0
     * @category parts
     */
    <A extends DateTime>(self: A, parts: Partial<DateTime.PartsWithWeekday>): A;
};
declare const CurrentTimeZone_base: Context.TagClass<CurrentTimeZone, "effect/DateTime/CurrentTimeZone", TimeZone>;
/**
 * @since 3.11.0
 * @category current time zone
 */
export declare class CurrentTimeZone extends CurrentTimeZone_base {
}
/**
 * Set the time zone of a `DateTime` to the current time zone, which is
 * determined by the `CurrentTimeZone` service.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.now
 *
 *   // set the time zone to "Europe/London"
 *   const zoned = yield* DateTime.setZoneCurrent(now)
 * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))
 * ```
 */
export declare const setZoneCurrent: (self: DateTime) => Effect.Effect<Zoned, never, CurrentTimeZone>;
/**
 * Provide the `CurrentTimeZone` to an effect.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
 *
 * Effect.gen(function* () {
 *   const now = yield* DateTime.nowInCurrentZone
 * }).pipe(DateTime.withCurrentZone(zone))
 * ```
 */
export declare const withCurrentZone: {
    /**
     * Provide the `CurrentTimeZone` to an effect.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZone(zone))
     * ```
     */
    (zone: TimeZone): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, CurrentTimeZone>>;
    /**
     * Provide the `CurrentTimeZone` to an effect.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * const zone = DateTime.zoneUnsafeMakeNamed("Europe/London")
     *
     * Effect.gen(function* () {
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZone(zone))
     * ```
     */
    <A, E, R>(effect: Effect.Effect<A, E, R>, zone: TimeZone): Effect.Effect<A, E, Exclude<R, CurrentTimeZone>>;
};
/**
 * Provide the `CurrentTimeZone` to an effect, using the system's local time
 * zone.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   // will use the system's local time zone
 *   const now = yield* DateTime.nowInCurrentZone
 * }).pipe(DateTime.withCurrentZoneLocal)
 * ```
 */
export declare const withCurrentZoneLocal: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, CurrentTimeZone>>;
/**
 * Provide the `CurrentTimeZone` to an effect, using a offset.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   // will use the system's local time zone
 *   const now = yield* DateTime.nowInCurrentZone
 * }).pipe(DateTime.withCurrentZoneOffset(3 * 60 * 60 * 1000))
 * ```
 */
export declare const withCurrentZoneOffset: {
    /**
     * Provide the `CurrentTimeZone` to an effect, using a offset.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   // will use the system's local time zone
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZoneOffset(3 * 60 * 60 * 1000))
     * ```
     */
    (offset: number): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, CurrentTimeZone>>;
    /**
     * Provide the `CurrentTimeZone` to an effect, using a offset.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   // will use the system's local time zone
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZoneOffset(3 * 60 * 60 * 1000))
     * ```
     */
    <A, E, R>(effect: Effect.Effect<A, E, R>, offset: number): Effect.Effect<A, E, Exclude<R, CurrentTimeZone>>;
};
/**
 * Provide the `CurrentTimeZone` to an effect using an IANA time zone
 * identifier.
 *
 * If the time zone is invalid, it will fail with an `IllegalArgumentException`.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   // will use the "Europe/London" time zone
 *   const now = yield* DateTime.nowInCurrentZone
 * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))
 * ```
 */
export declare const withCurrentZoneNamed: {
    /**
     * Provide the `CurrentTimeZone` to an effect using an IANA time zone
     * identifier.
     *
     * If the time zone is invalid, it will fail with an `IllegalArgumentException`.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   // will use the "Europe/London" time zone
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))
     * ```
     */
    (zone: string): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E | IllegalArgumentException, Exclude<R, CurrentTimeZone>>;
    /**
     * Provide the `CurrentTimeZone` to an effect using an IANA time zone
     * identifier.
     *
     * If the time zone is invalid, it will fail with an `IllegalArgumentException`.
     *
     * @since 3.6.0
     * @category current time zone
     * @example
     * ```ts
     * import { DateTime, Effect } from "effect"
     *
     * Effect.gen(function* () {
     *   // will use the "Europe/London" time zone
     *   const now = yield* DateTime.nowInCurrentZone
     * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))
     * ```
     */
    <A, E, R>(effect: Effect.Effect<A, E, R>, zone: string): Effect.Effect<A, E | IllegalArgumentException, Exclude<R, CurrentTimeZone>>;
};
/**
 * Get the current time as a `DateTime.Zoned`, using the `CurrentTimeZone`.
 *
 * @since 3.6.0
 * @category current time zone
 * @example
 * ```ts
 * import { DateTime, Effect } from "effect"
 *
 * Effect.gen(function* () {
 *   // will use the "Europe/London" time zone
 *   const now = yield* DateTime.nowInCurrentZone
 * }).pipe(DateTime.withCurrentZoneNamed("Europe/London"))
 * ```
 */
export declare const nowInCurrentZone: Effect.Effect<Zoned, never, CurrentTimeZone>;
/**
 * Modify a `DateTime` by applying a function to a cloned `Date` instance.
 *
 * The `Date` will first have the time zone applied if possible, and then be
 * converted back to a `DateTime` within the same time zone.
 *
 * Supports `disambiguation` when the new wall clock time is ambiguous.
 *
 * @since 3.6.0
 * @category mapping
 */
export declare const mutate: {
    /**
     * Modify a `DateTime` by applying a function to a cloned `Date` instance.
     *
     * The `Date` will first have the time zone applied if possible, and then be
     * converted back to a `DateTime` within the same time zone.
     *
     * Supports `disambiguation` when the new wall clock time is ambiguous.
     *
     * @since 3.6.0
     * @category mapping
     */
    (f: (date: Date) => void, options?: {
        readonly disambiguation?: Disambiguation | undefined;
    }): <A extends DateTime>(self: A) => A;
    /**
     * Modify a `DateTime` by applying a function to a cloned `Date` instance.
     *
     * The `Date` will first have the time zone applied if possible, and then be
     * converted back to a `DateTime` within the same time zone.
     *
     * Supports `disambiguation` when the new wall clock time is ambiguous.
     *
     * @since 3.6.0
     * @category mapping
     */
    <A extends DateTime>(self: A, f: (date: Date) => void, options?: {
        readonly disambiguation?: Disambiguation | undefined;
    }): A;
};
/**
 * Modify a `DateTime` by applying a function to a cloned UTC `Date` instance.
 *
 * @since 3.6.0
 * @category mapping
 */
export declare const mutateUtc: {
    /**
     * Modify a `DateTime` by applying a function to a cloned UTC `Date` instance.
     *
     * @since 3.6.0
     * @category mapping
     */
    (f: (date: Date) => void): <A extends DateTime>(self: A) => A;
    /**
     * Modify a `DateTime` by applying a function to a cloned UTC `Date` instance.
     *
     * @since 3.6.0
     * @category mapping
     */
    <A extends DateTime>(self: A, f: (date: Date) => void): A;
};
/**
 * Transform a `DateTime` by applying a function to the number of milliseconds
 * since the Unix epoch.
 *
 * @since 3.6.0
 * @category mapping
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // add 10 milliseconds
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.mapEpochMillis((millis) => millis + 10)
 * )
 * ```
 */
export declare const mapEpochMillis: {
    /**
     * Transform a `DateTime` by applying a function to the number of milliseconds
     * since the Unix epoch.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 10 milliseconds
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.mapEpochMillis((millis) => millis + 10)
     * )
     * ```
     */
    (f: (millis: number) => number): <A extends DateTime>(self: A) => A;
    /**
     * Transform a `DateTime` by applying a function to the number of milliseconds
     * since the Unix epoch.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 10 milliseconds
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.mapEpochMillis((millis) => millis + 10)
     * )
     * ```
     */
    <A extends DateTime>(self: A, f: (millis: number) => number): A;
};
/**
 * Using the time zone adjusted `Date`, apply a function to the `Date` and
 * return the result.
 *
 * @since 3.6.0
 * @category mapping
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // get the time zone adjusted date in milliseconds
 * DateTime.unsafeMakeZoned(0, { timeZone: "Europe/London" }).pipe(
 *   DateTime.withDate((date) => date.getTime())
 * )
 * ```
 */
export declare const withDate: {
    /**
     * Using the time zone adjusted `Date`, apply a function to the `Date` and
     * return the result.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // get the time zone adjusted date in milliseconds
     * DateTime.unsafeMakeZoned(0, { timeZone: "Europe/London" }).pipe(
     *   DateTime.withDate((date) => date.getTime())
     * )
     * ```
     */
    <A>(f: (date: Date) => A): (self: DateTime) => A;
    /**
     * Using the time zone adjusted `Date`, apply a function to the `Date` and
     * return the result.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // get the time zone adjusted date in milliseconds
     * DateTime.unsafeMakeZoned(0, { timeZone: "Europe/London" }).pipe(
     *   DateTime.withDate((date) => date.getTime())
     * )
     * ```
     */
    <A>(self: DateTime, f: (date: Date) => A): A;
};
/**
 * Using the time zone adjusted `Date`, apply a function to the `Date` and
 * return the result.
 *
 * @since 3.6.0
 * @category mapping
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // get the date in milliseconds
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.withDateUtc((date) => date.getTime())
 * )
 * ```
 */
export declare const withDateUtc: {
    /**
     * Using the time zone adjusted `Date`, apply a function to the `Date` and
     * return the result.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // get the date in milliseconds
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.withDateUtc((date) => date.getTime())
     * )
     * ```
     */
    <A>(f: (date: Date) => A): (self: DateTime) => A;
    /**
     * Using the time zone adjusted `Date`, apply a function to the `Date` and
     * return the result.
     *
     * @since 3.6.0
     * @category mapping
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // get the date in milliseconds
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.withDateUtc((date) => date.getTime())
     * )
     * ```
     */
    <A>(self: DateTime, f: (date: Date) => A): A;
};
/**
 * @since 3.6.0
 * @category mapping
 */
export declare const match: {
    /**
     * @since 3.6.0
     * @category mapping
     */
    <A, B>(options: {
        readonly onUtc: (_: Utc) => A;
        readonly onZoned: (_: Zoned) => B;
    }): (self: DateTime) => A | B;
    /**
     * @since 3.6.0
     * @category mapping
     */
    <A, B>(self: DateTime, options: {
        readonly onUtc: (_: Utc) => A;
        readonly onZoned: (_: Zoned) => B;
    }): A | B;
};
/**
 * Add the given `Duration` to a `DateTime`.
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // add 5 minutes
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.addDuration("5 minutes")
 * )
 * ```
 */
export declare const addDuration: {
    /**
     * Add the given `Duration` to a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.addDuration("5 minutes")
     * )
     * ```
     */
    (duration: Duration.DurationInput): <A extends DateTime>(self: A) => A;
    /**
     * Add the given `Duration` to a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.addDuration("5 minutes")
     * )
     * ```
     */
    <A extends DateTime>(self: A, duration: Duration.DurationInput): A;
};
/**
 * Subtract the given `Duration` from a `DateTime`.
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // subtract 5 minutes
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.subtractDuration("5 minutes")
 * )
 * ```
 */
export declare const subtractDuration: {
    /**
     * Subtract the given `Duration` from a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // subtract 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.subtractDuration("5 minutes")
     * )
     * ```
     */
    (duration: Duration.DurationInput): <A extends DateTime>(self: A) => A;
    /**
     * Subtract the given `Duration` from a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // subtract 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.subtractDuration("5 minutes")
     * )
     * ```
     */
    <A extends DateTime>(self: A, duration: Duration.DurationInput): A;
};
/**
 * Add the given `amount` of `unit`'s to a `DateTime`.
 *
 * The time zone is taken into account when adding days, weeks, months, and
 * years.
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // add 5 minutes
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.add({ minutes: 5 })
 * )
 * ```
 */
export declare const add: {
    /**
     * Add the given `amount` of `unit`'s to a `DateTime`.
     *
     * The time zone is taken into account when adding days, weeks, months, and
     * years.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.add({ minutes: 5 })
     * )
     * ```
     */
    (parts: Partial<DateTime.PartsForMath>): <A extends DateTime>(self: A) => A;
    /**
     * Add the given `amount` of `unit`'s to a `DateTime`.
     *
     * The time zone is taken into account when adding days, weeks, months, and
     * years.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // add 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.add({ minutes: 5 })
     * )
     * ```
     */
    <A extends DateTime>(self: A, parts: Partial<DateTime.PartsForMath>): A;
};
/**
 * Subtract the given `amount` of `unit`'s from a `DateTime`.
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // subtract 5 minutes
 * DateTime.unsafeMake(0).pipe(
 *   DateTime.subtract({ minutes: 5 })
 * )
 * ```
 */
export declare const subtract: {
    /**
     * Subtract the given `amount` of `unit`'s from a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // subtract 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.subtract({ minutes: 5 })
     * )
     * ```
     */
    (parts: Partial<DateTime.PartsForMath>): <A extends DateTime>(self: A) => A;
    /**
     * Subtract the given `amount` of `unit`'s from a `DateTime`.
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // subtract 5 minutes
     * DateTime.unsafeMake(0).pipe(
     *   DateTime.subtract({ minutes: 5 })
     * )
     * ```
     */
    <A extends DateTime>(self: A, parts: Partial<DateTime.PartsForMath>): A;
};
/**
 * Converts a `DateTime` to the start of the given `part`.
 *
 * If the part is `week`, the `weekStartsOn` option can be used to specify the
 * day of the week that the week starts on. The default is 0 (Sunday).
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // returns "2024-01-01T00:00:00Z"
 * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
 *   DateTime.startOf("day"),
 *   DateTime.formatIso
 * )
 * ```
 */
export declare const startOf: {
    /**
     * Converts a `DateTime` to the start of the given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-01T00:00:00Z"
     * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
     *   DateTime.startOf("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    (part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): <A extends DateTime>(self: A) => A;
    /**
     * Converts a `DateTime` to the start of the given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-01T00:00:00Z"
     * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
     *   DateTime.startOf("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    <A extends DateTime>(self: A, part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): A;
};
/**
 * Converts a `DateTime` to the end of the given `part`.
 *
 * If the part is `week`, the `weekStartsOn` option can be used to specify the
 * day of the week that the week starts on. The default is 0 (Sunday).
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // returns "2024-01-01T23:59:59.999Z"
 * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
 *   DateTime.endOf("day"),
 *   DateTime.formatIso
 * )
 * ```
 */
export declare const endOf: {
    /**
     * Converts a `DateTime` to the end of the given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-01T23:59:59.999Z"
     * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
     *   DateTime.endOf("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    (part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): <A extends DateTime>(self: A) => A;
    /**
     * Converts a `DateTime` to the end of the given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-01T23:59:59.999Z"
     * DateTime.unsafeMake("2024-01-01T12:00:00Z").pipe(
     *   DateTime.endOf("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    <A extends DateTime>(self: A, part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): A;
};
/**
 * Converts a `DateTime` to the nearest given `part`.
 *
 * If the part is `week`, the `weekStartsOn` option can be used to specify the
 * day of the week that the week starts on. The default is 0 (Sunday).
 *
 * @since 3.6.0
 * @category math
 * @example
 * ```ts
 * import { DateTime } from "effect"
 *
 * // returns "2024-01-02T00:00:00Z"
 * DateTime.unsafeMake("2024-01-01T12:01:00Z").pipe(
 *   DateTime.nearest("day"),
 *   DateTime.formatIso
 * )
 * ```
 */
export declare const nearest: {
    /**
     * Converts a `DateTime` to the nearest given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-02T00:00:00Z"
     * DateTime.unsafeMake("2024-01-01T12:01:00Z").pipe(
     *   DateTime.nearest("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    (part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): <A extends DateTime>(self: A) => A;
    /**
     * Converts a `DateTime` to the nearest given `part`.
     *
     * If the part is `week`, the `weekStartsOn` option can be used to specify the
     * day of the week that the week starts on. The default is 0 (Sunday).
     *
     * @since 3.6.0
     * @category math
     * @example
     * ```ts
     * import { DateTime } from "effect"
     *
     * // returns "2024-01-02T00:00:00Z"
     * DateTime.unsafeMake("2024-01-01T12:01:00Z").pipe(
     *   DateTime.nearest("day"),
     *   DateTime.formatIso
     * )
     * ```
     */
    <A extends DateTime>(self: A, part: DateTime.UnitSingular, options?: {
        readonly weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    }): A;
};
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * The `timeZone` option is set to the offset of the time zone.
 *
 * Note: On Node versions < 22, fixed "Offset" zones will set the time zone to
 * "UTC" and use the adjusted `Date`.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const format: {
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * The `timeZone` option is set to the offset of the time zone.
     *
     * Note: On Node versions < 22, fixed "Offset" zones will set the time zone to
     * "UTC" and use the adjusted `Date`.
     *
     * @since 3.6.0
     * @category formatting
     */
    (options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): (self: DateTime) => string;
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * The `timeZone` option is set to the offset of the time zone.
     *
     * Note: On Node versions < 22, fixed "Offset" zones will set the time zone to
     * "UTC" and use the adjusted `Date`.
     *
     * @since 3.6.0
     * @category formatting
     */
    (self: DateTime, options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): string;
};
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * It will use the system's local time zone & locale.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatLocal: {
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * It will use the system's local time zone & locale.
     *
     * @since 3.6.0
     * @category formatting
     */
    (options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): (self: DateTime) => string;
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * It will use the system's local time zone & locale.
     *
     * @since 3.6.0
     * @category formatting
     */
    (self: DateTime, options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): string;
};
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * This forces the time zone to be UTC.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatUtc: {
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * This forces the time zone to be UTC.
     *
     * @since 3.6.0
     * @category formatting
     */
    (options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): (self: DateTime) => string;
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * This forces the time zone to be UTC.
     *
     * @since 3.6.0
     * @category formatting
     */
    (self: DateTime, options?: Intl.DateTimeFormatOptions & {
        readonly locale?: Intl.LocalesArgument;
    } | undefined): string;
};
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIntl: {
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * @since 3.6.0
     * @category formatting
     */
    (format: Intl.DateTimeFormat): (self: DateTime) => string;
    /**
     * Format a `DateTime` as a string using the `DateTimeFormat` API.
     *
     * @since 3.6.0
     * @category formatting
     */
    (self: DateTime, format: Intl.DateTimeFormat): string;
};
/**
 * Format a `DateTime` as a UTC ISO string.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIso: (self: DateTime) => string;
/**
 * Format a `DateTime` as a time zone adjusted ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIsoDate: (self: DateTime) => string;
/**
 * Format a `DateTime` as a UTC ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIsoDateUtc: (self: DateTime) => string;
/**
 * Format a `DateTime.Zoned` as a ISO string with an offset.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIsoOffset: (self: DateTime) => string;
/**
 * Format a `DateTime.Zoned` as a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category formatting
 */
export declare const formatIsoZoned: (self: Zoned) => string;
/**
 * Create a Layer from the given time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
export declare const layerCurrentZone: (zone: TimeZone) => Layer.Layer<CurrentTimeZone>;
/**
 * Create a Layer from the given time zone offset.
 *
 * @since 3.6.0
 * @category current time zone
 */
export declare const layerCurrentZoneOffset: (offset: number) => Layer.Layer<CurrentTimeZone>;
/**
 * Create a Layer from the given IANA time zone identifier.
 *
 * @since 3.6.0
 * @category current time zone
 */
export declare const layerCurrentZoneNamed: (zoneId: string) => Layer.Layer<CurrentTimeZone, IllegalArgumentException>;
/**
 * Create a Layer from the systems local time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
export declare const layerCurrentZoneLocal: Layer.Layer<CurrentTimeZone>;
export {};
//# sourceMappingURL=DateTime.d.ts.map