/**
 * @since 2.0.0
 */
import type * as Check from "./Chunk.js"
import * as internal from "./internal/schedule/intervals.js"
import type * as Interval from "./ScheduleInterval.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const IntervalsTypeId: unique symbol = internal.IntervalsTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type IntervalsTypeId = typeof IntervalsTypeId

/**
 * An `Intervals` represents a list of several `Interval`s.
 *
 * @since 2.0.0
 * @category models
 */
export interface Intervals {
  readonly [IntervalsTypeId]: IntervalsTypeId
  readonly intervals: Check.Chunk<Interval.Interval>
}

/**
 * Creates a new `Intervals` from a `List` of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: (intervals: Check.Chunk<Interval.Interval>) => Intervals = internal.make

/**
 * Constructs an empty list of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty: Intervals = internal.empty

/**
 * Creates `Intervals` from the specified `Iterable<Interval>`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable: (intervals: Iterable<Interval.Interval>) => Intervals = internal.fromIterable

/**
 * Computes the union of this `Intervals` and  that `Intervals`
 *
 * @since 2.0.0
 * @category utils
 */
export const union: {
  /**
   * Computes the union of this `Intervals` and  that `Intervals`
   *
   * @since 2.0.0
   * @category utils
   */
  (that: Intervals): (self: Intervals) => Intervals
  /**
   * Computes the union of this `Intervals` and  that `Intervals`
   *
   * @since 2.0.0
   * @category utils
   */
  (self: Intervals, that: Intervals): Intervals
} = internal.union

/**
 * Produces the intersection of this `Intervals` and that `Intervals`.
 *
 * @since 2.0.0
 * @category utils
 */
export const intersect: {
  /**
   * Produces the intersection of this `Intervals` and that `Intervals`.
   *
   * @since 2.0.0
   * @category utils
   */
  (that: Intervals): (self: Intervals) => Intervals
  /**
   * Produces the intersection of this `Intervals` and that `Intervals`.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: Intervals, that: Intervals): Intervals
} = internal.intersect

/**
 * The start of the earliest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
export const start: (self: Intervals) => number = internal.start

/**
 * The end of the latest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
export const end: (self: Intervals) => number = internal.end

/**
 * Returns `true` if the start of this `Intervals` is before the start of that
 * `Intervals`, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
export const lessThan: {
  /**
   * Returns `true` if the start of this `Intervals` is before the start of that
   * `Intervals`, `false` otherwise.
   *
   * @since 2.0.0
   * @category ordering
   */
  (that: Intervals): (self: Intervals) => boolean
  /**
   * Returns `true` if the start of this `Intervals` is before the start of that
   * `Intervals`, `false` otherwise.
   *
   * @since 2.0.0
   * @category ordering
   */
  (self: Intervals, that: Intervals): boolean
} = internal.lessThan

/**
 * Returns `true` if this `Intervals` is non-empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isNonEmpty: (self: Intervals) => boolean = internal.isNonEmpty

/**
 * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
 *
 * @since 2.0.0
 * @category ordering
 */
export const max: {
  /**
   * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
   *
   * @since 2.0.0
   * @category ordering
   */
  (that: Intervals): (self: Intervals) => Intervals
  /**
   * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
   *
   * @since 2.0.0
   * @category ordering
   */
  (self: Intervals, that: Intervals): Intervals
} = internal.max
