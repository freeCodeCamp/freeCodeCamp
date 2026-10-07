/**
 * @since 2.0.0
 */
import type * as Equal from "./Equal.js";
import type * as HashSet from "./HashSet.js";
import type { Inspectable } from "./Inspectable.js";
import type * as Option from "./Option.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberIdTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberIdTypeId = typeof FiberIdTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export type Single = None | Runtime;
/**
 * @since 2.0.0
 * @category models
 */
export type FiberId = Single | Composite;
/**
 * @since 2.0.0
 * @category models
 */
export interface None extends Equal.Equal, Inspectable {
    readonly [FiberIdTypeId]: FiberIdTypeId;
    readonly _tag: "None";
    readonly id: -1;
    readonly startTimeMillis: -1;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Runtime extends Equal.Equal, Inspectable {
    readonly [FiberIdTypeId]: FiberIdTypeId;
    readonly _tag: "Runtime";
    readonly id: number;
    readonly startTimeMillis: number;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Composite extends Equal.Equal, Inspectable {
    readonly [FiberIdTypeId]: FiberIdTypeId;
    readonly _tag: "Composite";
    readonly left: FiberId;
    readonly right: FiberId;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const none: None;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const runtime: (id: number, startTimeMillis: number) => Runtime;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const composite: (left: FiberId, right: FiberId) => Composite;
/**
 * Returns `true` if the specified unknown value is a `FiberId`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isFiberId: (self: unknown) => self is FiberId;
/**
 * Returns `true` if the `FiberId` is a `None`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isNone: (self: FiberId) => self is None;
/**
 * Returns `true` if the `FiberId` is a `Runtime`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isRuntime: (self: FiberId) => self is Runtime;
/**
 * Returns `true` if the `FiberId` is a `Composite`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isComposite: (self: FiberId) => self is Composite;
/**
 * Combine two `FiberId`s.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const combine: {
    /**
     * Combine two `FiberId`s.
     *
     * @since 2.0.0
     * @category constructors
     */
    (that: FiberId): (self: FiberId) => FiberId;
    /**
     * Combine two `FiberId`s.
     *
     * @since 2.0.0
     * @category constructors
     */
    (self: FiberId, that: FiberId): FiberId;
};
/**
 * Combines a set of `FiberId`s into a single `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const combineAll: (fiberIds: HashSet.HashSet<FiberId>) => FiberId;
/**
 * Returns this `FiberId` if it is not `None`, otherwise returns that `FiberId`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const getOrElse: {
    /**
     * Returns this `FiberId` if it is not `None`, otherwise returns that `FiberId`.
     *
     * @since 2.0.0
     * @category utils
     */
    (that: FiberId): (self: FiberId) => FiberId;
    /**
     * Returns this `FiberId` if it is not `None`, otherwise returns that `FiberId`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: FiberId, that: FiberId): FiberId;
};
/**
 * Get the set of identifiers for this `FiberId`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const ids: (self: FiberId) => HashSet.HashSet<number>;
/**
 * Creates a new `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (id: number, startTimeSeconds: number) => FiberId;
/**
 * Creates a string representing the name of the current thread of execution
 * represented by the specified `FiberId`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const threadName: (self: FiberId) => string;
/**
 * Convert a `FiberId` into an `Option<FiberId>`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const toOption: (self: FiberId) => Option.Option<FiberId>;
/**
 * Convert a `FiberId` into a `HashSet<FiberId>`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const toSet: (self: FiberId) => HashSet.HashSet<Runtime>;
/**
 * Unsafely creates a new `FiberId`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: (_: void) => Runtime;
//# sourceMappingURL=FiberId.d.ts.map