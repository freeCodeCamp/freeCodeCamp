/**
 * @since 2.0.0
 */
import * as internal from "./internal/schedule/decision.js"
import type * as Interval from "./ScheduleInterval.js"
import type * as Intervals from "./ScheduleIntervals.js"

/**
 * @since 2.0.0
 * @category models
 */
export type ScheduleDecision = Continue | Done

/**
 * @since 2.0.0
 * @category models
 */
export interface Continue {
  readonly _tag: "Continue"
  readonly intervals: Intervals.Intervals
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Done {
  readonly _tag: "Done"
}

const _continue = internal._continue
export {
  /**
   * @since 2.0.0
   * @category constructors
   */
  _continue as continue
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const continueWith: (interval: Interval.Interval) => ScheduleDecision = internal.continueWith

/**
 * @since 2.0.0
 * @category constructors
 */
export const done: ScheduleDecision = internal.done

/**
 * @since 2.0.0
 * @category refinements
 */
export const isContinue: (self: ScheduleDecision) => self is Continue = internal.isContinue

/**
 * @since 2.0.0
 * @category refinements
 */
export const isDone: (self: ScheduleDecision) => self is Done = internal.isDone
