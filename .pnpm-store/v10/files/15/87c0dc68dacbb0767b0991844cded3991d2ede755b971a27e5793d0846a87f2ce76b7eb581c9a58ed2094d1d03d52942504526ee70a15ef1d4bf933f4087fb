"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zonedOffsetIso = exports.zonedOffset = exports.zoneUnsafeMakeNamed = exports.zoneToString = exports.zoneMakeOffset = exports.zoneMakeNamedEffect = exports.zoneMakeNamed = exports.zoneMakeLocal = exports.zoneFromString = exports.withDateUtc = exports.withDate = exports.withCurrentZoneOffset = exports.withCurrentZoneNamed = exports.withCurrentZoneLocal = exports.withCurrentZone = exports.unsafeSetZoneNamed = exports.unsafeNow = exports.unsafeMakeZoned = exports.unsafeMake = exports.unsafeIsPast = exports.unsafeIsFuture = exports.unsafeFromDate = exports.toUtc = exports.toPartsUtc = exports.toParts = exports.toEpochMillis = exports.toDateUtc = exports.toDate = exports.subtractDuration = exports.subtract = exports.startOf = exports.setZoneOffset = exports.setZoneNamed = exports.setZoneCurrent = exports.setZone = exports.setPartsUtc = exports.setParts = exports.removeTime = exports.nowInCurrentZone = exports.nowAsDate = exports.now = exports.nearest = exports.mutateUtc = exports.mutate = exports.min = exports.max = exports.match = exports.mapEpochMillis = exports.makeZonedFromString = exports.makeZoned = exports.make = exports.lessThanOrEqualTo = exports.lessThan = exports.layerCurrentZoneOffset = exports.layerCurrentZoneNamed = exports.layerCurrentZoneLocal = exports.layerCurrentZone = exports.isZoned = exports.isUtc = exports.isTimeZoneOffset = exports.isTimeZoneNamed = exports.isTimeZone = exports.isPast = exports.isFuture = exports.isDateTime = exports.greaterThanOrEqualTo = exports.greaterThan = exports.getPartUtc = exports.getPart = exports.formatUtc = exports.formatLocal = exports.formatIsoZoned = exports.formatIsoOffset = exports.formatIsoDateUtc = exports.formatIsoDate = exports.formatIso = exports.formatIntl = exports.format = exports.endOf = exports.distanceDurationEither = exports.distanceDuration = exports.distance = exports.clamp = exports.between = exports.addDuration = exports.add = exports.TypeId = exports.TimeZoneTypeId = exports.Order = exports.Equivalence = exports.CurrentTimeZone = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var Effect = _interopRequireWildcard(require("./Effect.js"));
var _Function = require("./Function.js");
var Internal = _interopRequireWildcard(require("./internal/dateTime.js"));
var Layer = _interopRequireWildcard(require("./Layer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.6.0
 * @category type ids
 */
const TypeId = exports.TypeId = Internal.TypeId;
/**
 * @since 3.6.0
 * @category type ids
 */
const TimeZoneTypeId = exports.TimeZoneTypeId = Internal.TimeZoneTypeId;
// =============================================================================
// guards
// =============================================================================
/**
 * @since 3.6.0
 * @category guards
 */
const isDateTime = exports.isDateTime = Internal.isDateTime;
/**
 * @since 3.6.0
 * @category guards
 */
const isTimeZone = exports.isTimeZone = Internal.isTimeZone;
/**
 * @since 3.6.0
 * @category guards
 */
const isTimeZoneOffset = exports.isTimeZoneOffset = Internal.isTimeZoneOffset;
/**
 * @since 3.6.0
 * @category guards
 */
const isTimeZoneNamed = exports.isTimeZoneNamed = Internal.isTimeZoneNamed;
/**
 * @since 3.6.0
 * @category guards
 */
const isUtc = exports.isUtc = Internal.isUtc;
/**
 * @since 3.6.0
 * @category guards
 */
const isZoned = exports.isZoned = Internal.isZoned;
// =============================================================================
// instances
// =============================================================================
/**
 * @since 3.6.0
 * @category instances
 */
const Equivalence = exports.Equivalence = Internal.Equivalence;
/**
 * @since 3.6.0
 * @category instances
 */
const Order = exports.Order = Internal.Order;
/**
 * @since 3.6.0
 */
const clamp = exports.clamp = Internal.clamp;
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
const unsafeFromDate = exports.unsafeFromDate = Internal.unsafeFromDate;
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
const unsafeMake = exports.unsafeMake = Internal.unsafeMake;
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
const unsafeMakeZoned = exports.unsafeMakeZoned = Internal.unsafeMakeZoned;
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
const makeZoned = exports.makeZoned = Internal.makeZoned;
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
const make = exports.make = Internal.make;
/**
 * Create a `DateTime.Zoned` from a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category constructors
 */
const makeZonedFromString = exports.makeZonedFromString = Internal.makeZonedFromString;
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
const now = exports.now = Internal.now;
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
const nowAsDate = exports.nowAsDate = Internal.nowAsDate;
/**
 * Get the current time using `Date.now`.
 *
 * @since 3.6.0
 * @category constructors
 */
const unsafeNow = exports.unsafeNow = Internal.unsafeNow;
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
const toUtc = exports.toUtc = Internal.toUtc;
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
const setZone = exports.setZone = Internal.setZone;
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
const setZoneOffset = exports.setZoneOffset = Internal.setZoneOffset;
/**
 * Attempt to create a named time zone from a IANA time zone identifier.
 *
 * If the time zone is invalid, an `IllegalArgumentException` will be thrown.
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneUnsafeMakeNamed = exports.zoneUnsafeMakeNamed = Internal.zoneUnsafeMakeNamed;
/**
 * Create a fixed offset time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneMakeOffset = exports.zoneMakeOffset = Internal.zoneMakeOffset;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, `None` will be returned.
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneMakeNamed = exports.zoneMakeNamed = Internal.zoneMakeNamed;
/**
 * Create a named time zone from a IANA time zone identifier. If the time zone
 * is invalid, it will fail with an `IllegalArgumentException`.
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneMakeNamedEffect = exports.zoneMakeNamedEffect = Internal.zoneMakeNamedEffect;
/**
 * Create a named time zone from the system's local time zone.
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneMakeLocal = exports.zoneMakeLocal = Internal.zoneMakeLocal;
/**
 * Try parse a TimeZone from a string
 *
 * @since 3.6.0
 * @category time zones
 */
const zoneFromString = exports.zoneFromString = Internal.zoneFromString;
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
const zoneToString = exports.zoneToString = Internal.zoneToString;
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
const setZoneNamed = exports.setZoneNamed = Internal.setZoneNamed;
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
const unsafeSetZoneNamed = exports.unsafeSetZoneNamed = Internal.unsafeSetZoneNamed;
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
const distance = exports.distance = Internal.distance;
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
const distanceDurationEither = exports.distanceDurationEither = Internal.distanceDurationEither;
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
const distanceDuration = exports.distanceDuration = Internal.distanceDuration;
/**
 * @since 3.6.0
 * @category comparisons
 */
const min = exports.min = Internal.min;
/**
 * @since 3.6.0
 * @category comparisons
 */
const max = exports.max = Internal.max;
/**
 * @since 3.6.0
 * @category comparisons
 */
const greaterThan = exports.greaterThan = Internal.greaterThan;
/**
 * @since 3.6.0
 * @category comparisons
 */
const greaterThanOrEqualTo = exports.greaterThanOrEqualTo = Internal.greaterThanOrEqualTo;
/**
 * @since 3.6.0
 * @category comparisons
 */
const lessThan = exports.lessThan = Internal.lessThan;
/**
 * @since 3.6.0
 * @category comparisons
 */
const lessThanOrEqualTo = exports.lessThanOrEqualTo = Internal.lessThanOrEqualTo;
/**
 * @since 3.6.0
 * @category comparisons
 */
const between = exports.between = Internal.between;
/**
 * @since 3.6.0
 * @category comparisons
 */
const isFuture = exports.isFuture = Internal.isFuture;
/**
 * @since 3.6.0
 * @category comparisons
 */
const unsafeIsFuture = exports.unsafeIsFuture = Internal.unsafeIsFuture;
/**
 * @since 3.6.0
 * @category comparisons
 */
const isPast = exports.isPast = Internal.isPast;
/**
 * @since 3.6.0
 * @category comparisons
 */
const unsafeIsPast = exports.unsafeIsPast = Internal.unsafeIsPast;
// =============================================================================
// conversions
// =============================================================================
/**
 * Get the UTC `Date` of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
const toDateUtc = exports.toDateUtc = Internal.toDateUtc;
/**
 * Convert a `DateTime` to a `Date`, applying the time zone first.
 *
 * @since 3.6.0
 * @category conversions
 */
const toDate = exports.toDate = Internal.toDate;
/**
 * Calculate the time zone offset of a `DateTime.Zoned` in milliseconds.
 *
 * @since 3.6.0
 * @category conversions
 */
const zonedOffset = exports.zonedOffset = Internal.zonedOffset;
/**
 * Calculate the time zone offset of a `DateTime` in milliseconds.
 *
 * The offset is formatted as "±HH:MM".
 *
 * @since 3.6.0
 * @category conversions
 */
const zonedOffsetIso = exports.zonedOffsetIso = Internal.zonedOffsetIso;
/**
 * Get the milliseconds since the Unix epoch of a `DateTime`.
 *
 * @since 3.6.0
 * @category conversions
 */
const toEpochMillis = exports.toEpochMillis = Internal.toEpochMillis;
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
const removeTime = exports.removeTime = Internal.removeTime;
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
const toParts = exports.toParts = Internal.toParts;
/**
 * Get the different parts of a `DateTime` as an object.
 *
 * The parts will be in UTC.
 *
 * @since 3.6.0
 * @category parts
 */
const toPartsUtc = exports.toPartsUtc = Internal.toPartsUtc;
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
const getPartUtc = exports.getPartUtc = Internal.getPartUtc;
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
const getPart = exports.getPart = Internal.getPart;
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * The Date will be time zone adjusted.
 *
 * @since 3.6.0
 * @category parts
 */
const setParts = exports.setParts = Internal.setParts;
/**
 * Set the different parts of a `DateTime` as an object.
 *
 * @since 3.6.0
 * @category parts
 */
const setPartsUtc = exports.setPartsUtc = Internal.setPartsUtc;
// =============================================================================
// current time zone
// =============================================================================
/**
 * @since 3.11.0
 * @category current time zone
 */
class CurrentTimeZone extends /*#__PURE__*/Context.Tag("effect/DateTime/CurrentTimeZone")() {}
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
exports.CurrentTimeZone = CurrentTimeZone;
const setZoneCurrent = self => Effect.map(CurrentTimeZone, zone => setZone(self, zone));
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
exports.setZoneCurrent = setZoneCurrent;
const withCurrentZone = exports.withCurrentZone = /*#__PURE__*/(0, _Function.dual)(2, (effect, zone) => Effect.provideService(effect, CurrentTimeZone, zone));
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
const withCurrentZoneLocal = effect => Effect.provideServiceEffect(effect, CurrentTimeZone, Effect.sync(zoneMakeLocal));
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
exports.withCurrentZoneLocal = withCurrentZoneLocal;
const withCurrentZoneOffset = exports.withCurrentZoneOffset = /*#__PURE__*/(0, _Function.dual)(2, (effect, offset) => Effect.provideService(effect, CurrentTimeZone, zoneMakeOffset(offset)));
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
const withCurrentZoneNamed = exports.withCurrentZoneNamed = /*#__PURE__*/(0, _Function.dual)(2, (effect, zone) => Effect.provideServiceEffect(effect, CurrentTimeZone, zoneMakeNamedEffect(zone)));
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
const nowInCurrentZone = exports.nowInCurrentZone = /*#__PURE__*/Effect.flatMap(now, setZoneCurrent);
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
const mutate = exports.mutate = Internal.mutate;
/**
 * Modify a `DateTime` by applying a function to a cloned UTC `Date` instance.
 *
 * @since 3.6.0
 * @category mapping
 */
const mutateUtc = exports.mutateUtc = Internal.mutateUtc;
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
const mapEpochMillis = exports.mapEpochMillis = Internal.mapEpochMillis;
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
const withDate = exports.withDate = Internal.withDate;
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
const withDateUtc = exports.withDateUtc = Internal.withDateUtc;
/**
 * @since 3.6.0
 * @category mapping
 */
const match = exports.match = Internal.match;
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
const addDuration = exports.addDuration = Internal.addDuration;
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
const subtractDuration = exports.subtractDuration = Internal.subtractDuration;
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
const add = exports.add = Internal.add;
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
const subtract = exports.subtract = Internal.subtract;
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
const startOf = exports.startOf = Internal.startOf;
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
const endOf = exports.endOf = Internal.endOf;
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
const nearest = exports.nearest = Internal.nearest;
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
const format = exports.format = Internal.format;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * It will use the system's local time zone & locale.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatLocal = exports.formatLocal = Internal.formatLocal;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * This forces the time zone to be UTC.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatUtc = exports.formatUtc = Internal.formatUtc;
/**
 * Format a `DateTime` as a string using the `DateTimeFormat` API.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIntl = exports.formatIntl = Internal.formatIntl;
/**
 * Format a `DateTime` as a UTC ISO string.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIso = exports.formatIso = Internal.formatIso;
/**
 * Format a `DateTime` as a time zone adjusted ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIsoDate = exports.formatIsoDate = Internal.formatIsoDate;
/**
 * Format a `DateTime` as a UTC ISO date string.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIsoDateUtc = exports.formatIsoDateUtc = Internal.formatIsoDateUtc;
/**
 * Format a `DateTime.Zoned` as a ISO string with an offset.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIsoOffset = exports.formatIsoOffset = Internal.formatIsoOffset;
/**
 * Format a `DateTime.Zoned` as a string.
 *
 * It uses the format: `YYYY-MM-DDTHH:mm:ss.sss+HH:MM[Time/Zone]`.
 *
 * @since 3.6.0
 * @category formatting
 */
const formatIsoZoned = exports.formatIsoZoned = Internal.formatIsoZoned;
/**
 * Create a Layer from the given time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
const layerCurrentZone = zone => Layer.succeed(CurrentTimeZone, zone);
/**
 * Create a Layer from the given time zone offset.
 *
 * @since 3.6.0
 * @category current time zone
 */
exports.layerCurrentZone = layerCurrentZone;
const layerCurrentZoneOffset = offset => Layer.succeed(CurrentTimeZone, Internal.zoneMakeOffset(offset));
/**
 * Create a Layer from the given IANA time zone identifier.
 *
 * @since 3.6.0
 * @category current time zone
 */
exports.layerCurrentZoneOffset = layerCurrentZoneOffset;
const layerCurrentZoneNamed = zoneId => Layer.effect(CurrentTimeZone, Internal.zoneMakeNamedEffect(zoneId));
/**
 * Create a Layer from the systems local time zone.
 *
 * @since 3.6.0
 * @category current time zone
 */
exports.layerCurrentZoneNamed = layerCurrentZoneNamed;
const layerCurrentZoneLocal = exports.layerCurrentZoneLocal = /*#__PURE__*/Layer.sync(CurrentTimeZone, zoneMakeLocal);
//# sourceMappingURL=DateTime.js.map