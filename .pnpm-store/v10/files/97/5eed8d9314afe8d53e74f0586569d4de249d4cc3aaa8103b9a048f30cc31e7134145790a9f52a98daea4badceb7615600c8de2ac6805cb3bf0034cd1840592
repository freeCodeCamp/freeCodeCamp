/**
 * @since 2.0.0
 */
import type * as Equal from "./Equal.js";
import type * as FiberId from "./FiberId.js";
import type * as RuntimeFlags from "./RuntimeFlags.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberStatusTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberStatusTypeId = typeof FiberStatusTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export type FiberStatus = Done | Running | Suspended;
/**
 * @since 2.0.0
 * @category models
 */
export interface Done extends Equal.Equal {
    readonly _tag: "Done";
    readonly [FiberStatusTypeId]: FiberStatusTypeId;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Running extends Equal.Equal {
    readonly _tag: "Running";
    readonly [FiberStatusTypeId]: FiberStatusTypeId;
    readonly runtimeFlags: RuntimeFlags.RuntimeFlags;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Suspended extends Equal.Equal {
    readonly _tag: "Suspended";
    readonly [FiberStatusTypeId]: FiberStatusTypeId;
    readonly runtimeFlags: RuntimeFlags.RuntimeFlags;
    readonly blockingOn: FiberId.FiberId;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const done: FiberStatus;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const running: (runtimeFlags: RuntimeFlags.RuntimeFlags) => FiberStatus;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const suspended: (runtimeFlags: RuntimeFlags.RuntimeFlags, blockingOn: FiberId.FiberId) => FiberStatus;
/**
 * Returns `true` if the specified value is a `FiberStatus`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isFiberStatus: (u: unknown) => u is FiberStatus;
/**
 * Returns `true` if the specified `FiberStatus` is `Done`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isDone: (self: FiberStatus) => self is Done;
/**
 * Returns `true` if the specified `FiberStatus` is `Running`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isRunning: (self: FiberStatus) => self is Running;
/**
 * Returns `true` if the specified `FiberStatus` is `Suspended`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isSuspended: (self: FiberStatus) => self is Suspended;
//# sourceMappingURL=FiberStatus.d.ts.map