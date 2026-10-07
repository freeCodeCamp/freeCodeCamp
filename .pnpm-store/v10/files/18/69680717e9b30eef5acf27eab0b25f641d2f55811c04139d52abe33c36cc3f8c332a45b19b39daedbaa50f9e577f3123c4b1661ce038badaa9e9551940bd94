/**
 * A collection of types that are commonly used types.
 *
 * @since 2.0.0
 */
type _TupleOf<T, N extends number, R extends Array<unknown>> = `${N}` extends `-${number}` ? never : R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>;
/**
 * Represents a tuple with a fixed number of elements of type `T`.
 *
 * This type constructs a tuple that has exactly `N` elements of type `T`.
 *
 * @typeParam N - The number of elements in the tuple.
 * @typeParam T - The type of elements in the tuple.
 *
 * @example
 * ```ts
 * import { TupleOf } from "effect/Types"
 *
 * // A tuple with exactly 3 numbers
 * const example1: TupleOf<3, number> = [1, 2, 3]; // valid
 * // @ts-expect-error
 * const example2: TupleOf<3, number> = [1, 2]; // invalid
 * // @ts-expect-error
 * const example3: TupleOf<3, number> = [1, 2, 3, 4]; // invalid
 * ```
 *
 * @category tuples
 * @since 3.3.0
 */
export type TupleOf<N extends number, T> = N extends N ? number extends N ? Array<T> : _TupleOf<T, N, []> : never;
/**
 * Represents a tuple with at least `N` elements of type `T`.
 *
 * This type constructs a tuple that has a fixed number of elements `N` of type `T` at the start,
 * followed by any number (including zero) of additional elements of the same type `T`.
 *
 * @typeParam N - The minimum number of elements in the tuple.
 * @typeParam T - The type of elements in the tuple.
 *
 * @example
 * ```ts
 * import { TupleOfAtLeast } from "effect/Types"
 *
 * // A tuple with at least 3 numbers
 * const example1: TupleOfAtLeast<3, number> = [1, 2, 3]; // valid
 * const example2: TupleOfAtLeast<3, number> = [1, 2, 3, 4, 5]; // valid
 * // @ts-expect-error
 * const example3: TupleOfAtLeast<3, number> = [1, 2]; // invalid
 * ```
 *
 * @category tuples
 * @since 3.3.0
 */
export type TupleOfAtLeast<N extends number, T> = [...TupleOf<N, T>, ...Array<T>];
/**
 * Returns the tags in a type.
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res = Types.Tags<string | { _tag: "a" } | { _tag: "b" } > // "a" | "b"
 * ```
 *
 * @category types
 * @since 2.0.0
 */
export type Tags<E> = E extends {
    _tag: string;
} ? E["_tag"] : never;
/**
 * Excludes the tagged object from the type.
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res = Types.ExcludeTag<string | { _tag: "a" } | { _tag: "b" }, "a"> // string | { _tag: "b" }
 * ```
 *
 * @category types
 * @since 2.0.0
 */
export type ExcludeTag<E, K extends Tags<E>> = Exclude<E, {
    _tag: K;
}>;
/**
 * Extracts the type of the given tag.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res = Types.ExtractTag<{ _tag: "a", a: number } | { _tag: "b", b: number }, "b"> // { _tag: "b", b: number }
 * ```
 *
 * @category types
 * @since 2.0.0
 */
export type ExtractTag<E, K extends Tags<E>> = Extract<E, {
    _tag: K;
}>;
/**
 * A utility type that transforms a union type `T` into an intersection type.
 *
 * @since 2.0.0
 * @category types
 */
export type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;
/**
 * Simplifies the type signature of a type.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res = Types.Simplify<{ a: number } & { b: number }> // { a: number; b: number; }
 * ```
 *
 * @since 2.0.0
 * @category types
 */
export type Simplify<A> = {
    [K in keyof A]: A[K];
} extends infer B ? B : never;
/**
 * Determines if two types are equal.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res1 = Types.Equals<{ a: number }, { a: number }> // true
 * type Res2 = Types.Equals<{ a: number }, { b: number }> // false
 * ```
 *
 * @since 2.0.0
 * @category models
 */
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
/**
 * Determines if two types are equal, allowing to specify the return types.
 *
 * @since 3.15.0
 * @category models
 */
export type EqualsWith<A, B, Y, N> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? Y : N;
/**
 * Determines if a record contains any of the given keys.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type Res1 = Types.Has<{ a: number }, "a" | "b"> // true
 * type Res2 = Types.Has<{ c: number }, "a" | "b"> // false
 * ```
 *
 * @since 2.0.0
 * @category models
 */
export type Has<A, Key extends string> = (Key extends infer K ? K extends keyof A ? true : never : never) extends never ? false : true;
/**
 * Merges two object where the keys of the left object take precedence in the case of a conflict.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 * type MergeLeft = Types.MergeLeft<{ a: number, b: number; }, { a: string }> // { a: number; b: number; }
 * ```
 *
 * @since 2.0.0
 * @category models
 */
export type MergeLeft<Source, Target> = MergeRight<Target, Source>;
/**
 * Merges two object where the keys of the right object take precedence in the case of a conflict.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 * type MergeRight = Types.MergeRight<{ a: number, b: number; }, { a: string }> // { a: string; b: number; }
 * ```
 *
 * @since 2.0.0
 * @category models
 */
export type MergeRight<Target, Source> = Simplify<Source & {
    [Key in keyof Target as Key extends keyof Source ? never : Key]: Target[Key];
}>;
/**
 * @since 2.0.0
 * @category models
 */
export type MergeRecord<Source, Target> = MergeLeft<Source, Target>;
/**
 * Describes the concurrency to use when executing multiple Effect's.
 *
 * @since 2.0.0
 * @category models
 */
export type Concurrency = number | "unbounded" | "inherit";
/**
 * Make all properties in `T` mutable. Supports arrays, tuples, and records as well.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type MutableStruct = Types.Mutable<{ readonly a: string; readonly b: number }> // { a: string; b: number; }
 *
 * type MutableArray = Types.Mutable<ReadonlyArray<string>> // string[]
 *
 * type MutableTuple = Types.Mutable<readonly [string, number]> // [string, number]
 *
 * type MutableRecord = Types.Mutable<{ readonly [_: string]: number }> // { [x: string]: number; }
 * ```
 *
 * @since 2.0.0
 * @category types
 */
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
/**
 * Like `Types.Mutable`, but works recursively.
 *
 * @example
 * ```ts
 * import type { Types } from "effect"
 *
 * type DeepMutableStruct = Types.DeepMutable<{
 *   readonly a: string;
 *   readonly b: readonly string[]
 * }>
 * // { a: string; b: string[] }
 * ```
 *
 * @since 3.1.0
 * @category types
 */
export type DeepMutable<T> = T extends ReadonlyMap<infer K, infer V> ? Map<DeepMutable<K>, DeepMutable<V>> : T extends ReadonlySet<infer V> ? Set<DeepMutable<V>> : T extends string | number | boolean | bigint | symbol | Function ? T : {
    -readonly [K in keyof T]: DeepMutable<T[K]>;
};
/**
 * Avoid inference on a specific parameter
 *
 * @since 2.0.0
 * @category models
 */
export type NoInfer<A> = [A][A extends any ? 0 : never];
/**
 * Invariant helper.
 *
 * @since 2.0.0
 * @category models
 */
export type Invariant<A> = (_: A) => A;
/**
 * @since 3.9.0
 * @category models
 */
export declare namespace Invariant {
    /**
     * @since 3.9.0
     * @category models
     */
    type Type<A> = A extends Invariant<infer U> ? U : never;
}
/**
 * Covariant helper.
 *
 * @since 2.0.0
 * @category models
 */
export type Covariant<A> = (_: never) => A;
/**
 * @since 3.9.0
 * @category models
 */
export declare namespace Covariant {
    /**
     * @since 3.9.0
     * @category models
     */
    type Type<A> = A extends Covariant<infer U> ? U : never;
}
/**
 * Contravariant helper.
 *
 * @since 2.0.0
 * @category models
 */
export type Contravariant<A> = (_: A) => void;
/**
 * @since 3.9.0
 * @category models
 */
export declare namespace Contravariant {
    /**
     * @since 3.9.0
     * @category models
     */
    type Type<A> = A extends Contravariant<infer U> ? U : never;
}
/**
 * @since 2.0.0
 */
export type MatchRecord<S, onTrue, onFalse> = {} extends S ? onTrue : onFalse;
/**
 * @since 2.0.0
 */
export type NotFunction<T> = T extends Function ? never : T;
/**
 * @since 3.9.0
 */
export type NoExcessProperties<T, U> = T & {
    readonly [K in Exclude<keyof U, keyof T>]: never;
};
/**
 * @since 3.15.0
 */
export type Ctor<T = {}> = new (...args: Array<any>) => T;
/**
 * Conditional type that returns `void` if `S` is an empty object type,
 * otherwise returns `S`.
 *
 * @since 3.19.20
 */
export type VoidIfEmpty<S> = keyof S extends never ? void : S;
export {};
//# sourceMappingURL=Types.d.ts.map