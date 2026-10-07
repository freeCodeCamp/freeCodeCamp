/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js";
import type * as Option from "./Option.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const IntervalTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type IntervalTypeId = typeof IntervalTypeId;
/**
 * An `Interval` represents an interval of time. Intervals can encompass all
 * time, or no time at all.
 *
 * @since 2.0.0
 * @category models
 */
export interface Interval {
    readonly [IntervalTypeId]: IntervalTypeId;
    readonly startMillis: number;
    readonly endMillis: number;
}
/**
 * Constructs a new interval from the two specified endpoints. If the start
 * endpoint greater than the end endpoint, then a zero size interval will be
 * returned.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (startMillis: number, endMillis: number) => Interval;
/**
 * An `Interval` of zero-width.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: Interval;
/**
 * Returns `true` if this `Interval` is less than `that` interval, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const lessThan: {
    /**
     * Returns `true` if this `Interval` is less than `that` interval, `false`
     * otherwise.
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Interval): (self: Interval) => boolean;
    /**
     * Returns `true` if this `Interval` is less than `that` interval, `false`
     * otherwise.
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Interval, that: Interval): boolean;
};
/**
 * Returns the minimum of two `Interval`s.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const min: {
    /**
     * Returns the minimum of two `Interval`s.
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Interval): (self: Interval) => Interval;
    /**
     * Returns the minimum of two `Interval`s.
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Interval, that: Interval): Interval;
};
/**
 * Returns the maximum of two `Interval`s.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const max: {
    /**
     * Returns the maximum of two `Interval`s.
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Interval): (self: Interval) => Interval;
    /**
     * Returns the maximum of two `Interval`s.
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Interval, that: Interval): Interval;
};
/**
 * Returns `true` if the specified `Interval` is empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const isEmpty: (self: Interval) => boolean;
/**
 * Returns `true` if the specified `Interval` is non-empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const isNonEmpty: (self: Interval) => boolean;
/**
 * Computes a new `Interval` which is the intersection of this `Interval` and
 * that `Interval`.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const intersect: {
    /**
     * Computes a new `Interval` which is the intersection of this `Interval` and
     * that `Interval`.
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Interval): (self: Interval) => Interval;
    /**
     * Computes a new `Interval` which is the intersection of this `Interval` and
     * that `Interval`.
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Interval, that: Interval): Interval;
};
/**
 * Calculates the size of the `Interval` as the `Duration` from the start of the
 * interval to the end of the interval.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const size: (self: Interval) => Duration.Duration;
/**
 * Computes a new `Interval` which is the union of this `Interval` and that
 * `Interval` as a `Some`, otherwise returns `None` if the two intervals cannot
 * form a union.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const union: {
    /**
     * Computes a new `Interval` which is the union of this `Interval` and that
     * `Interval` as a `Some`, otherwise returns `None` if the two intervals cannot
     * form a union.
     *
     * @since 2.0.0
     * @category utils
     */
    (that: Interval): (self: Interval) => Option.Option<Interval>;
    /**
     * Computes a new `Interval` which is the union of this `Interval` and that
     * `Interval` as a `Some`, otherwise returns `None` if the two intervals cannot
     * form a union.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: Interval, that: Interval): Option.Option<Interval>;
};
/**
 * Construct an `Interval` that includes all time equal to and after the
 * specified start time.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const after: (startMilliseconds: number) => Interval;
/**
 * Construct an `Interval` that includes all time equal to and before the
 * specified end time.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const before: (endMilliseconds: number) => Interval;
//# sourceMappingURL=ScheduleInterval.d.ts.map