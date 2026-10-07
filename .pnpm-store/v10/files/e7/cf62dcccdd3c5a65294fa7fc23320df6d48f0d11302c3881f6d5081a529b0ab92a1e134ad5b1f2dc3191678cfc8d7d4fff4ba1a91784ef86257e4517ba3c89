/**
 * @since 2.0.0
 */
import type * as Arr from "./Array.js";
import type * as Effect from "./Effect.js";
import type * as FiberId from "./FiberId.js";
import type * as FiberRef from "./FiberRef.js";
import type * as HashSet from "./HashSet.js";
import type * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberRefsSym: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberRefsSym = typeof FiberRefsSym;
/**
 * `FiberRefs` is a data type that represents a collection of `FiberRef` values.
 *
 * This allows safely propagating `FiberRef` values across fiber boundaries, for
 * example between an asynchronous producer and consumer.
 *
 * @since 2.0.0
 * @category models
 */
export interface FiberRefs extends Pipeable {
    readonly [FiberRefsSym]: FiberRefsSym;
    readonly locals: Map<FiberRef.FiberRef<any>, Arr.NonEmptyReadonlyArray<readonly [FiberId.Single, any]>>;
}
declare const delete_: {
    <A>(fiberRef: FiberRef.FiberRef<A>): (self: FiberRefs) => FiberRefs;
    <A>(self: FiberRefs, fiberRef: FiberRef.FiberRef<A>): FiberRefs;
};
export { 
/**
 * Deletes the specified `FiberRef` from the `FibterRefs`.
 *
 * @since 2.0.0
 * @category utils
 */
delete_ as delete };
/**
 * Returns a set of each `FiberRef` in this collection.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const fiberRefs: (self: FiberRefs) => HashSet.HashSet<FiberRef.FiberRef<any>>;
/**
 * Forks this collection of fiber refs as the specified child fiber id. This
 * will potentially modify the value of the fiber refs, as determined by the
 * individual fiber refs that make up the collection.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const forkAs: {
    /**
     * Forks this collection of fiber refs as the specified child fiber id. This
     * will potentially modify the value of the fiber refs, as determined by the
     * individual fiber refs that make up the collection.
     *
     * @since 2.0.0
     * @category utils
     */
    (childId: FiberId.Single): (self: FiberRefs) => FiberRefs;
    /**
     * Forks this collection of fiber refs as the specified child fiber id. This
     * will potentially modify the value of the fiber refs, as determined by the
     * individual fiber refs that make up the collection.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: FiberRefs, childId: FiberId.Single): FiberRefs;
};
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or `None` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const get: {
    /**
     * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
     * values if it exists or `None` otherwise.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(fiberRef: FiberRef.FiberRef<A>): (self: FiberRefs) => Option.Option<A>;
    /**
     * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
     * values if it exists or `None` otherwise.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(self: FiberRefs, fiberRef: FiberRef.FiberRef<A>): Option.Option<A>;
};
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or the `initial` value of the `FiberRef` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const getOrDefault: {
    /**
     * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
     * values if it exists or the `initial` value of the `FiberRef` otherwise.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(fiberRef: FiberRef.FiberRef<A>): (self: FiberRefs) => A;
    /**
     * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
     * values if it exists or the `initial` value of the `FiberRef` otherwise.
     *
     * @since 2.0.0
     * @category getters
     */
    <A>(self: FiberRefs, fiberRef: FiberRef.FiberRef<A>): A;
};
/**
 * Joins this collection of fiber refs to the specified collection, as the
 * specified fiber id. This will perform diffing and merging to ensure
 * preservation of maximum information from both child and parent refs.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const joinAs: {
    /**
     * Joins this collection of fiber refs to the specified collection, as the
     * specified fiber id. This will perform diffing and merging to ensure
     * preservation of maximum information from both child and parent refs.
     *
     * @since 2.0.0
     * @category utils
     */
    (fiberId: FiberId.Single, that: FiberRefs): (self: FiberRefs) => FiberRefs;
    /**
     * Joins this collection of fiber refs to the specified collection, as the
     * specified fiber id. This will perform diffing and merging to ensure
     * preservation of maximum information from both child and parent refs.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: FiberRefs, fiberId: FiberId.Single, that: FiberRefs): FiberRefs;
};
/**
 * Set each ref to either its value or its default.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const setAll: (self: FiberRefs) => Effect.Effect<void>;
/**
 * Updates the value of the specified `FiberRef` using the provided `FiberId`
 *
 * @since 2.0.0
 * @category utils
 */
export declare const updateAs: {
    /**
     * Updates the value of the specified `FiberRef` using the provided `FiberId`
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(options: {
        readonly fiberId: FiberId.Single;
        readonly fiberRef: FiberRef.FiberRef<A>;
        readonly value: A;
    }): (self: FiberRefs) => FiberRefs;
    /**
     * Updates the value of the specified `FiberRef` using the provided `FiberId`
     *
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRefs, options: {
        readonly fiberId: FiberId.Single;
        readonly fiberRef: FiberRef.FiberRef<A>;
        readonly value: A;
    }): FiberRefs;
};
/**
 * Updates the values of the specified `FiberRef` & value pairs using the provided `FiberId`
 *
 * @since 2.0.0
 * @category utils
 */
export declare const updateManyAs: {
    /**
     * Updates the values of the specified `FiberRef` & value pairs using the provided `FiberId`
     *
     * @since 2.0.0
     * @category utils
     */
    (options: {
        readonly forkAs?: FiberId.Single | undefined;
        readonly entries: readonly [
            readonly [
                FiberRef.FiberRef<any>,
                readonly [readonly [FiberId.Single, any], ...Array<readonly [FiberId.Single, any]>]
            ],
            ...Array<readonly [
                FiberRef.FiberRef<any>,
                readonly [readonly [FiberId.Single, any], ...Array<readonly [FiberId.Single, any]>]
            ]>
        ];
    }): (self: FiberRefs) => FiberRefs;
    /**
     * Updates the values of the specified `FiberRef` & value pairs using the provided `FiberId`
     *
     * @since 2.0.0
     * @category utils
     */
    (self: FiberRefs, options: {
        readonly forkAs?: FiberId.Single | undefined;
        readonly entries: readonly [
            readonly [
                FiberRef.FiberRef<any>,
                readonly [readonly [FiberId.Single, any], ...Array<readonly [FiberId.Single, any]>]
            ],
            ...Array<readonly [
                FiberRef.FiberRef<any>,
                readonly [readonly [FiberId.Single, any], ...Array<readonly [FiberId.Single, any]>]
            ]>
        ];
    }): FiberRefs;
};
/**
 * Note: it will not copy the provided Map, make sure to provide a fresh one.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: (fiberRefLocals: Map<FiberRef.FiberRef<any>, Arr.NonEmptyReadonlyArray<readonly [FiberId.Single, any]>>) => FiberRefs;
/**
 * The empty collection of `FiberRef` values.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const empty: () => FiberRefs;
//# sourceMappingURL=FiberRefs.d.ts.map