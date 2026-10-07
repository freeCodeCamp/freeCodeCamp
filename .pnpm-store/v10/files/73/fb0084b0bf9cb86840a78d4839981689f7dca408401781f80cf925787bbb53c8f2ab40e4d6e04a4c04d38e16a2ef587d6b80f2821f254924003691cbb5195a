/**
 * @since 2.0.0
 */
import type * as Check from "./Chunk.js";
import type * as Interval from "./ScheduleInterval.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const IntervalsTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type IntervalsTypeId = typeof IntervalsTypeId;
/**
 * An `Intervals` represents a list of several `Interval`s.
 *
 * @since 2.0.0
 * @category models
 */
export interface Intervals {
    readonly [IntervalsTypeId]: IntervalsTypeId;
    readonly intervals: Check.Chunk<Interval.Interval>;
}
/**
 * Creates a new `Intervals` from a `List` of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (intervals: Check.Chunk<Interval.Interval>) => Intervals;
/**
 * Constructs an empty list of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: Intervals;
/**
 * Creates `Intervals` from the specified `Iterable<Interval>`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromIterable: (intervals: Iterable<Interval.Interval>) => Intervals;
/**
 * Computes the union of this `Intervals` and  that `Intervals`
 *
 * @since 2.0.0
 * @category utils
 */
export declare const union: {
    /**
     * Computes the union of this `Intervals` and  that `Intervals`
     *
     * @since 2.0.0
     * @category utils
     */
    (that: Intervals): (self: Intervals) => Intervals;
    /**
     * Computes the union of this `Intervals` and  that `Intervals`
     *
     * @since 2.0.0
     * @category utils
     */
    (self: Intervals, that: Intervals): Intervals;
};
/**
 * Produces the intersection of this `Intervals` and that `Intervals`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const intersect: {
    /**
     * Produces the intersection of this `Intervals` and that `Intervals`.
     *
     * @since 2.0.0
     * @category utils
     */
    (that: Intervals): (self: Intervals) => Intervals;
    /**
     * Produces the intersection of this `Intervals` and that `Intervals`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: Intervals, that: Intervals): Intervals;
};
/**
 * The start of the earliest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const start: (self: Intervals) => number;
/**
 * The end of the latest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const end: (self: Intervals) => number;
/**
 * Returns `true` if the start of this `Intervals` is before the start of that
 * `Intervals`, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const lessThan: {
    /**
     * Returns `true` if the start of this `Intervals` is before the start of that
     * `Intervals`, `false` otherwise.
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Intervals): (self: Intervals) => boolean;
    /**
     * Returns `true` if the start of this `Intervals` is before the start of that
     * `Intervals`, `false` otherwise.
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Intervals, that: Intervals): boolean;
};
/**
 * Returns `true` if this `Intervals` is non-empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isNonEmpty: (self: Intervals) => boolean;
/**
 * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
 *
 * @since 2.0.0
 * @category ordering
 */
export declare const max: {
    /**
     * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
     *
     * @since 2.0.0
     * @category ordering
     */
    (that: Intervals): (self: Intervals) => Intervals;
    /**
     * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
     *
     * @since 2.0.0
     * @category ordering
     */
    (self: Intervals, that: Intervals): Intervals;
};
//# sourceMappingURL=ScheduleIntervals.d.ts.map