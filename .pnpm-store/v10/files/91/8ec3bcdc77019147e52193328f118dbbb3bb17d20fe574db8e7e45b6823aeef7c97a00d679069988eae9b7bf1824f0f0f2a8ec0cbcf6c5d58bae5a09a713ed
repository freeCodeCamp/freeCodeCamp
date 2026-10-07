/**
 * @since 2.0.0
 */
import type { Chunk } from "./Chunk.js";
import type { Context } from "./Context.js";
import type { Either } from "./Either.js";
import type { Equal } from "./Equal.js";
import type { HashMap } from "./HashMap.js";
import type { HashSet } from "./HashSet.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbol
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * A `Differ<Value, Patch>` knows how to compare an old value and new value of
 * type `Value` to produce a patch of type `Patch` that describes the
 * differences between those values. A `Differ` also knows how to apply a patch
 * to an old value to produce a new value that represents the old value updated
 * with the changes described by the patch.
 *
 * A `Differ` can be used to construct a `FiberRef` supporting compositional
 * updates using the `FiberRef.makePatch` constructor.
 *
 * The `Differ` companion object contains constructors for `Differ` values for
 * common data types such as `Chunk`, `HashMap`, and `HashSet``. In addition,
 * `Differ`values can be transformed using the `transform` operator and combined
 * using the `orElseEither` and `zip` operators. This allows creating `Differ`
 * values for arbitrarily complex data types compositionally.
 *
 * @since 2.0.0
 * @category models
 */
export interface Differ<in out Value, in out Patch> extends Pipeable {
    readonly [TypeId]: {
        readonly _V: Types.Invariant<Value>;
        readonly _P: Types.Invariant<Patch>;
    };
    readonly empty: Patch;
    diff(oldValue: Value, newValue: Value): Patch;
    combine(first: Patch, second: Patch): Patch;
    patch(patch: Patch, oldValue: Value): Value;
}
declare const ChunkPatchTypeId: unique symbol;
declare const ContextPatchTypeId: unique symbol;
declare const HashMapPatchTypeId: unique symbol;
declare const HashSetPatchTypeId: unique symbol;
declare const OrPatchTypeId: unique symbol;
declare const ReadonlyArrayPatchTypeId: unique symbol;
/**
 * @since 2.0.0
 */
export declare namespace Differ {
    /**
     * @since 2.0.0
     */
    namespace Context {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof ContextPatchTypeId;
        /**
         * A `Patch<Input, Output>` describes an update that transforms a `Env<Input>`
         * to a `Env<Output>` as a data structure. This allows combining updates to
         * different services in the environment in a compositional way.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in Input, out Output> extends Equal {
            readonly [ContextPatchTypeId]: {
                readonly _Input: Types.Contravariant<Input>;
                readonly _Output: Types.Covariant<Output>;
            };
        }
    }
    /**
     * @since 2.0.0
     */
    namespace Chunk {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof ChunkPatchTypeId;
        /**
         * A patch which describes updates to a chunk of values.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in out Value, in out Patch> extends Equal {
            readonly [ChunkPatchTypeId]: {
                readonly _Value: Types.Invariant<Value>;
                readonly _Patch: Types.Invariant<Patch>;
            };
        }
    }
    /**
     * @since 2.0.0
     */
    namespace HashMap {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof HashMapPatchTypeId;
        /**
         * A patch which describes updates to a map of keys and values.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in out Key, in out Value, in out Patch> extends Equal {
            readonly [HashMapPatchTypeId]: {
                readonly _Key: Types.Invariant<Key>;
                readonly _Value: Types.Invariant<Value>;
                readonly _Patch: Types.Invariant<Patch>;
            };
        }
    }
    /**
     * @since 2.0.0
     */
    namespace HashSet {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof HashSetPatchTypeId;
        /**
         * A patch which describes updates to a set of values.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in out Value> extends Equal {
            readonly [HashSetPatchTypeId]: {
                readonly _Value: Types.Invariant<Value>;
            };
        }
    }
    /**
     * @since 2.0.0
     */
    namespace Or {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof OrPatchTypeId;
        /**
         * A patch which describes updates to either one value or another.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in out Value, in out Value2, in out Patch, in out Patch2> extends Equal {
            readonly [OrPatchTypeId]: {
                readonly _Value: Types.Invariant<Value>;
                readonly _Value2: Types.Invariant<Value2>;
                readonly _Patch: Types.Invariant<Patch>;
                readonly _Patch2: Types.Invariant<Patch2>;
            };
        }
    }
    /**
     * @since 2.0.0
     */
    namespace ReadonlyArray {
        /**
         * @since 2.0.0
         * @category symbol
         */
        type TypeId = typeof ReadonlyArrayPatchTypeId;
        /**
         * A patch which describes updates to a ReadonlyArray of values.
         *
         * @since 2.0.0
         * @category models
         */
        interface Patch<in out Value, in out Patch> extends Equal {
            readonly [ReadonlyArrayPatchTypeId]: {
                readonly _Value: Types.Invariant<Value>;
                readonly _Patch: Types.Invariant<Patch>;
            };
        }
    }
}
/**
 * An empty patch that describes no changes.
 *
 * @since 2.0.0
 * @category patch
 */
export declare const empty: <Value, Patch>(self: Differ<Value, Patch>) => Patch;
/**
 * @since 2.0.0
 * @category patch
 */
export declare const diff: {
    /**
     * @since 2.0.0
     * @category patch
     */
    <Value>(oldValue: Value, newValue: Value): <Patch>(self: Differ<Value, Patch>) => Patch;
    /**
     * @since 2.0.0
     * @category patch
     */
    <Value, Patch>(self: Differ<Value, Patch>, oldValue: Value, newValue: Value): Patch;
};
/**
 * Combines two patches to produce a new patch that describes the updates of
 * the first patch and then the updates of the second patch. The combine
 * operation should be associative. In addition, if the combine operation is
 * commutative then joining multiple fibers concurrently will result in
 * deterministic `FiberRef` values.
 *
 * @since 2.0.0
 * @category patch
 */
export declare const combine: {
    /**
     * Combines two patches to produce a new patch that describes the updates of
     * the first patch and then the updates of the second patch. The combine
     * operation should be associative. In addition, if the combine operation is
     * commutative then joining multiple fibers concurrently will result in
     * deterministic `FiberRef` values.
     *
     * @since 2.0.0
     * @category patch
     */
    <Patch>(first: Patch, second: Patch): <Value>(self: Differ<Value, Patch>) => Patch;
    /**
     * Combines two patches to produce a new patch that describes the updates of
     * the first patch and then the updates of the second patch. The combine
     * operation should be associative. In addition, if the combine operation is
     * commutative then joining multiple fibers concurrently will result in
     * deterministic `FiberRef` values.
     *
     * @since 2.0.0
     * @category patch
     */
    <Value, Patch>(self: Differ<Value, Patch>, first: Patch, second: Patch): Patch;
};
/**
 * Applies a patch to an old value to produce a new value that is equal to the
 * old value with the updates described by the patch.
 *
 * @since 2.0.0
 * @category patch
 */
export declare const patch: {
    /**
     * Applies a patch to an old value to produce a new value that is equal to the
     * old value with the updates described by the patch.
     *
     * @since 2.0.0
     * @category patch
     */
    <Patch, Value>(patch: Patch, oldValue: Value): (self: Differ<Value, Patch>) => Value;
    /**
     * Applies a patch to an old value to produce a new value that is equal to the
     * old value with the updates described by the patch.
     *
     * @since 2.0.0
     * @category patch
     */
    <Patch, Value>(self: Differ<Value, Patch>, patch: Patch, oldValue: Value): Value;
};
/**
 * Constructs a new `Differ`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <Value, Patch>(params: {
    readonly empty: Patch;
    readonly diff: (oldValue: Value, newValue: Value) => Patch;
    readonly combine: (first: Patch, second: Patch) => Patch;
    readonly patch: (patch: Patch, oldValue: Value) => Value;
}) => Differ<Value, Patch>;
/**
 * Constructs a differ that knows how to diff `Env` values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const environment: <A>() => Differ<Context<A>, Differ.Context.Patch<A, A>>;
/**
 * Constructs a differ that knows how to diff a `Chunk` of values given a
 * differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const chunk: <Value, Patch>(differ: Differ<Value, Patch>) => Differ<Chunk<Value>, Differ.Chunk.Patch<Value, Patch>>;
/**
 * Constructs a differ that knows how to diff a `HashMap` of keys and values given
 * a differ that knows how to diff the values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const hashMap: <Key, Value, Patch>(differ: Differ<Value, Patch>) => Differ<HashMap<Key, Value>, Differ.HashMap.Patch<Key, Value, Patch>>;
/**
 * Constructs a differ that knows how to diff a `HashSet` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const hashSet: <Value>() => Differ<HashSet<Value>, Differ.HashSet.Patch<Value>>;
/**
 * Combines this differ and the specified differ to produce a differ that
 * knows how to diff the sum of their values.
 *
 * @since 2.0.0
 */
export declare const orElseEither: {
    /**
     * Combines this differ and the specified differ to produce a differ that
     * knows how to diff the sum of their values.
     *
     * @since 2.0.0
     */
    <Value2, Patch2>(that: Differ<Value2, Patch2>): <Value, Patch>(self: Differ<Value, Patch>) => Differ<Either<Value2, Value>, Differ.Or.Patch<Value, Value2, Patch, Patch2>>;
    /**
     * Combines this differ and the specified differ to produce a differ that
     * knows how to diff the sum of their values.
     *
     * @since 2.0.0
     */
    <Value, Patch, Value2, Patch2>(self: Differ<Value, Patch>, that: Differ<Value2, Patch2>): Differ<Either<Value2, Value>, Differ.Or.Patch<Value, Value2, Patch, Patch2>>;
};
/**
 * Constructs a differ that knows how to diff a `ReadonlyArray` of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const readonlyArray: <Value, Patch>(differ: Differ<Value, Patch>) => Differ<ReadonlyArray<Value>, Differ.ReadonlyArray.Patch<Value, Patch>>;
/**
 * Transforms the type of values that this differ knows how to differ using
 * the specified functions that map the new and old value types to each other.
 *
 * @since 2.0.0
 */
export declare const transform: {
    /**
     * Transforms the type of values that this differ knows how to differ using
     * the specified functions that map the new and old value types to each other.
     *
     * @since 2.0.0
     */
    <Value, Value2>(options: {
        readonly toNew: (value: Value) => Value2;
        readonly toOld: (value: Value2) => Value;
    }): <Patch>(self: Differ<Value, Patch>) => Differ<Value2, Patch>;
    /**
     * Transforms the type of values that this differ knows how to differ using
     * the specified functions that map the new and old value types to each other.
     *
     * @since 2.0.0
     */
    <Value, Patch, Value2>(self: Differ<Value, Patch>, options: {
        readonly toNew: (value: Value) => Value2;
        readonly toOld: (value: Value2) => Value;
    }): Differ<Value2, Patch>;
};
/**
 * Constructs a differ that just diffs two values by returning a function that
 * sets the value to the new value. This differ does not support combining
 * multiple updates to the value compositionally and should only be used when
 * there is no compositional way to update them.
 *
 * @since 2.0.0
 */
export declare const update: <A>() => Differ<A, (a: A) => A>;
/**
 * A variant of `update` that allows specifying the function that will be used
 * to combine old values with new values.
 *
 * @since 2.0.0
 */
export declare const updateWith: <A>(f: (x: A, y: A) => A) => Differ<A, (a: A) => A>;
/**
 * Combines this differ and the specified differ to produce a new differ that
 * knows how to diff the product of their values.
 *
 * @since 2.0.0
 */
export declare const zip: {
    /**
     * Combines this differ and the specified differ to produce a new differ that
     * knows how to diff the product of their values.
     *
     * @since 2.0.0
     */
    <Value2, Patch2>(that: Differ<Value2, Patch2>): <Value, Patch>(self: Differ<Value, Patch>) => Differ<readonly [Value, Value2], // readonly because invariant
    readonly [Patch, Patch2]>;
    /**
     * Combines this differ and the specified differ to produce a new differ that
     * knows how to diff the product of their values.
     *
     * @since 2.0.0
     */
    <Value, Patch, Value2, Patch2>(self: Differ<Value, Patch>, that: Differ<Value2, Patch2>): Differ<readonly [Value, Value2], // readonly because invariant
    readonly [Patch, Patch2]>;
};
export {};
//# sourceMappingURL=Differ.d.ts.map