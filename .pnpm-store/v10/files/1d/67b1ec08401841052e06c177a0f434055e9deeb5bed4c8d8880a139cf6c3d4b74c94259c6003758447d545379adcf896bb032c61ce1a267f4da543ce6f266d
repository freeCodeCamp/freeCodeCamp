import * as Context from "./Context.js";
import * as Effect from "./Effect.js";
import { dual } from "./Function.js";
import * as Internal from "./internal/dateTime.js";
import * as Layer from "./Layer.js";
/**
 * @since 3.6.0
 * @category type ids
 */
export const TypeId = Internal.TypeId;
/**
 * @since 3.6.0
 * @category type ids
 */
export const TimeZoneTypeId = Internal.TimeZoneTypeId;
// =============================================================================
// guards
// =============================================================================
/**
 * @since 3.6.0
 * @category guards
 */
export const isDateTime = Internal.isDateTime;
/**
 * @since 3.6.0
 * @category guards
 */
export const isTimeZone = Internal.isTimeZone;
/**
 * @since 3.6.0
 * @category guards
 */
export const isTimeZoneOffset = Internal.isTimeZoneOffset;
/**
 * @since 3.6.0
 * @category guards
 */
export const isTimeZoneNamed = Internal.isTimeZoneNamed;
/**
 * @since 3.6.0
 * @category guards
 */
export const isUtc = Internal.isUtc;
/**
 * @since 3.6.0
 * @category guards
 */
export const isZoned = Internal.isZoned;
// =============================================================================
// instances
// =============================================================================
/**
 * @since 3.6.0
 * @category instances
 */
export const Equivalence = Internal.Equivalence;
/**
 * @since 3.6.0
 * @category instances
 */
export const Order = Internal.Order;
/**
 * @since 3.6.0
 */
export const clamp = Internal.clamp;
// =============================================================================
// constructors
// =============================================================================
/**
 * Create a `DateTime` from a `Date`.
 *
 * If the `Date` is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category constructors
 */
export const unsafeFromDate = Internal.unsafeFromDate;
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
export const unsafeMake = Internal.unsafeMake;
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
export const unsafeMakeZoned = Internal.unsafeMakeZoned;
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
export const makeZoned = Internal.makeZoned;
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
export const make = Internal.make;
/**
 * Create a `DateTime.Zoned` from a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category constructors
 */
export const makeZonedFromString = Internal.makeZonedFromString;
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
export const now = Internal.now;
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
export const nowAsDate = Internal.nowAsDate;
/**
 * Get the current time using `Date.now`.
 *
 * @since 3.6.0
 * @category constructors
 */
export const unsafeNow = Internal.unsafeNow;
// =============================================================================
// time zones
// =============================================================================
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
export const toUtc = Internal.toUtc;
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
export const setZone = Internal.setZone;
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
export const setZoneOffset = Internal.setZoneOffset;
/**
 * Attempt to create a named time zone from a IANA time zone identifier.
 *
 * If the time zone is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneUnsafeMakeNamed = Internal.zoneUnsafeMakeNamed;
/**
 * Create a fixed offset time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneMakeOffset = Internal.zoneMakeOffset;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneMakeNamed = Internal.zoneMakeNamed;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, it will fail with an `IllegalArgumentException`.
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneMakeNamedEffect = Internal.zoneMakeNamedEffect;
/**
 * Create a named time zone from the system's local time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneMakeLocal = Internal.zoneMakeLocal;
/**
 * Try parse a TimeZone from a string
 *
 * @since 3.6.0
 * @category time zones
 */
export const zoneFromString = Internal.zoneFromString;
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
export const zoneToString = Internal.zoneToString;
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
export const setZoneNamed = Internal.setZoneNamed;
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
export const unsafeSetZoneNamed = Internal.unsafeSetZoneNamed;
// =============================================================================
// comparisons
// =============================================================================
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
export const distance = Internal.distance;
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
export const distanceDurationEither = Internal.distanceDurationEither;
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
export const distanceDuration = Internal.distanceDuration;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const min = Internal.min;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const max = Internal.max;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const greaterThan = Internal.greaterThan;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const greaterThanOrEqualTo = Internal.greaterThanOrEqualTo;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const lessThan = Internal.lessThan;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const lessThanOrEqualTo = Internal.lessThanOrEqualTo;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const between = Internal.between;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const isFuture = Internal.isFuture;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const unsafeIsFuture = Internal.unsafeIsFuture;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const isPast = Internal.isPast;
/**
 * @since 3.6.0
 * @category comparisons
 */
export const unsafeIsPast = Internal.unsafeIsPast;
// =============================================================================
// conversions
// =============================================================================
/**
 * Get the UTC `Date` of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
export const toDateUtc = Internal.toDateUtc;
/**
 * Convert a `DateTime` to a `Date`, applying the time zone first.
 *
 * @since 3.6.0
 * @category conversions
 */
export const toDate = Internal.toDate;
/**
 * Calculate the time zone offset of a `DateTime.Zoned` in milliseconds.
 *
 * @since 3.6.0
 * @category conversions
 */
export const zonedOffset = Internal.zonedOffset;
/**
 * Calculate the time zone offset of a `DateTime` in milliseconds.
 *
 * The offset is formatted as "±HH:MM".
 *
 * @since 3.6.0
 * @category conversions
 */
export const zonedOffsetIso = Internal.zonedOffsetIso;
/**
 * Get the milliseconds since the Unix epoch of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
export const toEpochMillis = Internal.toEpochMillis;
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
export const removeTime = Internal.removeTime;
// =============================================================================
// parts
// =============================================================================
/**
 * Get the different parts of a `DateTime` as an object.
 *
 * The parts will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 */
export const toParts = Internal.toParts;
/**
 * Get the different parts of a `DateTime` as an object.
 *
 * The parts will be in UTC.
 *
 * @since 3.6.0
 * @category parts
 */
export const toPartsUtc = Internal.toPartsUtc;
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
export const getPartUtc = Internal.getPartUtc;
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
export const getPart = Internal.getPart;
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * The Date will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 */
export const setParts = Internal.setParts;
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * @since 3.6.0
 * @category parts
 */
export const setPartsUtc = Internal.setPartsUtc;
// =============================================================================
// current time zone
// =============================================================================
/**
 * @since 3.11.0
 * @category current time zone
 */
export class CurrentTimeZone extends /*#__PURE__*/Context.Tag("effect/DateTime/CurrentTimeZone")() {}
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
export const setZoneCurrent = self => Effect.map(CurrentTimeZone, zone => setZone(self, zone));
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
export const withCurrentZone = /*#__PURE__*/dual(2, (effect, zone) => Effect.provideService(effect, CurrentTimeZone, zone));
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
export const withCurrentZoneLocal = effect => Effect.provideServiceEffect(effect, CurrentTimeZone, Effect.sync(zoneMakeLocal));
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
export const withCurrentZoneOffset = /*#__PURE__*/dual(2, (effect, offset) => Effect.provideService(effect, CurrentTimeZone, zoneMakeOffset(offset)));
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
export const withCurrentZoneNamed = /*#__PURE__*/dual(2, (effect, zone) => Effect.provideServiceEffect(effect, CurrentTimeZone, zoneMakeNamedEffect(zone)));
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
export const nowInCurrentZone = /*#__PURE__*/Effect.flatMap(now, setZoneCurrent);
// =============================================================================
// mapping
// =============================================================================
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
export const mutate = Internal.mutate;
/**
 * Modify a `DateTime` by applying a function to a cloned UTC `Date` instance.
 *
 * @since 3.6.0
 * @category mapping
 */
export const mutateUtc = Internal.mutateUtc;
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
export const mapEpochMillis = Internal.mapEpochMillis;
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
export const withDate = Internal.withDate;
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
export const withDateUtc = Internal.withDateUtc;
/**
 * @since 3.6.0
 * @category mapping
 */
export const match = Internal.match;
// =============================================================================
// math
// =============================================================================
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
export const addDuration = Internal.addDuration;
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
export const subtractDuration = Internal.subtractDuration;
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
export const add = Internal.add;
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
export const subtract = Internal.subtract;
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
export const startOf = Internal.startOf;
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
export const endOf = Internal.endOf;
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
export const nearest = Internal.nearest;
// =============================================================================
// formatting
// =============================================================================
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
export const format = Internal.format;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * It will use the system's local time zone & locale.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatLocal = Internal.formatLocal;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * This forces the time zone to be UTC.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatUtc = Internal.formatUtc;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIntl = Internal.formatIntl;
/**
 * Format a `DateTime` as a UTC ISO string.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIso = Internal.formatIso;
/**
 * Format a `DateTime` as a time zone adjusted ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIsoDate = Internal.formatIsoDate;
/**
 * Format a `DateTime` as a UTC ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIsoDateUtc = Internal.formatIsoDateUtc;
/**
 * Format a `DateTime.Zoned` as a ISO string with an offset.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIsoOffset = Internal.formatIsoOffset;
/**
 * Format a `DateTime.Zoned` as a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category formatting
 */
export const formatIsoZoned = Internal.formatIsoZoned;
/**
 * Create a Layer from the given time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
export const layerCurrentZone = zone => Layer.succeed(CurrentTimeZone, zone);
/**
 * Create a Layer from the given time zone offset.
 *
 * @since 3.6.0
 * @category current time zone
 */
export const layerCurrentZoneOffset = offset => Layer.succeed(CurrentTimeZone, Internal.zoneMakeOffset(offset));
/**
 * Create a Layer from the given IANA time zone identifier.
 *
 * @since 3.6.0
 * @category current time zone
 */
export const layerCurrentZoneNamed = zoneId => Layer.effect(CurrentTimeZone, Internal.zoneMakeNamedEffect(zoneId));
/**
 * Create a Layer from the systems local time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
export const layerCurrentZoneLocal = /*#__PURE__*/Layer.sync(CurrentTimeZone, zoneMakeLocal);
//# sourceMappingURL=DateTime.js.map