import type * as Interval from "./ScheduleInterval.js";
import type * as Intervals from "./ScheduleIntervals.js";
/**
 * @since 2.0.0
 * @category models
 */
export type ScheduleDecision = Continue | Done;
/**
 * @since 2.0.0
 * @category models
 */
export interface Continue {
    readonly _tag: "Continue";
    readonly intervals: Intervals.Intervals;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Done {
    readonly _tag: "Done";
}
declare const _continue: (intervals: Intervals.Intervals) => ScheduleDecision;
export { 
/**
 * @since 2.0.0
 * @category constructors
 */
_continue as continue };
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const continueWith: (interval: Interval.Interval) => ScheduleDecision;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const done: ScheduleDecision;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isContinue: (self: ScheduleDecision) => self is Continue;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isDone: (self: ScheduleDecision) => self is Done;
//# sourceMappingURL=ScheduleDecision.d.ts.map