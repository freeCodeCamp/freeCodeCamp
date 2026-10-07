/**
 * This module provides utility functions for working with structs in TypeScript.
 *
 * @since 2.0.0
 */
import * as Equivalence from "./Equivalence.js";
import * as order from "./Order.js";
import type { MatchRecord, Simplify } from "./Types.js";
/**
 * Create a new object by picking properties of an existing object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.pick("a", "b")), { a: "a", b: 1 })
 * assert.deepStrictEqual(Struct.pick({ a: "a", b: 1, c: true }, "a", "b"), { a: "a", b: 1 })
 * ```
 *
 * @since 2.0.0
 */
export declare const pick: {
    /**
     * Create a new object by picking properties of an existing object.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.pick("a", "b")), { a: "a", b: 1 })
     * assert.deepStrictEqual(Struct.pick({ a: "a", b: 1, c: true }, "a", "b"), { a: "a", b: 1 })
     * ```
     *
     * @since 2.0.0
     */
    <Keys extends Array<PropertyKey>>(...keys: Keys): <S extends {
        [K in Keys[number]]?: any;
    }>(s: S) => MatchRecord<S, {
        [K in Keys[number]]?: S[K];
    }, Simplify<Pick<S, Keys[number]>>>;
    /**
     * Create a new object by picking properties of an existing object.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.pick("a", "b")), { a: "a", b: 1 })
     * assert.deepStrictEqual(Struct.pick({ a: "a", b: 1, c: true }, "a", "b"), { a: "a", b: 1 })
     * ```
     *
     * @since 2.0.0
     */
    <S extends object, Keys extends Array<keyof S>>(s: S, ...keys: Keys): MatchRecord<S, {
        [K in Keys[number]]?: S[K];
    }, Simplify<Pick<S, Keys[number]>>>;
};
/**
 * Create a new object by omitting properties of an existing object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.omit("c")), { a: "a", b: 1 })
 * assert.deepStrictEqual(Struct.omit({ a: "a", b: 1, c: true }, "c"), { a: "a", b: 1 })
 * ```
 *
 * @since 2.0.0
 */
export declare const omit: {
    /**
     * Create a new object by omitting properties of an existing object.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.omit("c")), { a: "a", b: 1 })
     * assert.deepStrictEqual(Struct.omit({ a: "a", b: 1, c: true }, "c"), { a: "a", b: 1 })
     * ```
     *
     * @since 2.0.0
     */
    <Keys extends Array<PropertyKey>>(...keys: Keys): <S extends {
        [K in Keys[number]]?: any;
    }>(s: S) => Simplify<Omit<S, Keys[number]>>;
    /**
     * Create a new object by omitting properties of an existing object.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.omit("c")), { a: "a", b: 1 })
     * assert.deepStrictEqual(Struct.omit({ a: "a", b: 1, c: true }, "c"), { a: "a", b: 1 })
     * ```
     *
     * @since 2.0.0
     */
    <S extends object, Keys extends Array<keyof S>>(s: S, ...keys: Keys): Simplify<Omit<S, Keys[number]>>;
};
/**
 * Given a struct of `Equivalence`s returns a new `Equivalence` that compares values of a struct
 * by applying each `Equivalence` to the corresponding property of the struct.
 *
 * Alias of {@link Equivalence.struct}.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct, String, Number } from "effect"
 *
 * const PersonEquivalence = Struct.getEquivalence({
 *   name: String.Equivalence,
 *   age: Number.Equivalence
 * })
 *
 * assert.deepStrictEqual(
 *   PersonEquivalence({ name: "John", age: 25 }, { name: "John", age: 25 }),
 *   true
 * )
 * assert.deepStrictEqual(
 *   PersonEquivalence({ name: "John", age: 25 }, { name: "John", age: 40 }),
 *   false
 * )
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const getEquivalence: <R extends Record<string, Equivalence.Equivalence<any>>>(isEquivalents: R) => Equivalence.Equivalence<{
    readonly [K in keyof R]: [R[K]] extends [Equivalence.Equivalence<infer A>] ? A : never;
}>;
/**
 * This function creates and returns a new `Order` for a struct of values based on the given `Order`s
 * for each property in the struct.
 *
 * Alias of {@link order.struct}.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const getOrder: <R extends {
    readonly [x: string]: order.Order<any>;
}>(fields: R) => order.Order<{
    [K in keyof R]: [R[K]] extends [order.Order<infer A>] ? A : never;
}>;
type Transformed<O, T> = unknown & {
    [K in keyof O]: K extends keyof T ? (T[K] extends (...a: any) => any ? ReturnType<T[K]> : O[K]) : O[K];
};
type PartialTransform<O, T> = {
    [K in keyof T]: T[K] extends (a: O[K & keyof O]) => any ? T[K] : (a: O[K & keyof O]) => unknown;
};
/**
 * Transforms the values of a Struct provided a transformation function for each key.
 * If no transformation function is provided for a key, it will return the original value for that key.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     { a: 'a', b: 1, c: 3 },
 *     Struct.evolve({
 *       a: (a) => a.length,
 *       b: (b) => b * 2
 *     })
 *   ),
 *   { a: 1, b: 2, c: 3 }
 * )
 * ```
 *
 * @since 2.0.0
 */
export declare const evolve: {
    /**
     * Transforms the values of a Struct provided a transformation function for each key.
     * If no transformation function is provided for a key, it will return the original value for that key.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(
     *   pipe(
     *     { a: 'a', b: 1, c: 3 },
     *     Struct.evolve({
     *       a: (a) => a.length,
     *       b: (b) => b * 2
     *     })
     *   ),
     *   { a: 1, b: 2, c: 3 }
     * )
     * ```
     *
     * @since 2.0.0
     */
    <O, T>(t: PartialTransform<O, T>): (obj: O) => Transformed<O, T>;
    /**
     * Transforms the values of a Struct provided a transformation function for each key.
     * If no transformation function is provided for a key, it will return the original value for that key.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Struct } from "effect"
     *
     * assert.deepStrictEqual(
     *   pipe(
     *     { a: 'a', b: 1, c: 3 },
     *     Struct.evolve({
     *       a: (a) => a.length,
     *       b: (b) => b * 2
     *     })
     *   ),
     *   { a: 1, b: 2, c: 3 }
     * )
     * ```
     *
     * @since 2.0.0
     */
    <O, T>(obj: O, t: PartialTransform<O, T>): Transformed<O, T>;
};
/**
 * Retrieves the value associated with the specified key from a struct.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * const value = pipe({ a: 1, b: 2 }, Struct.get("a"))
 *
 * assert.deepStrictEqual(value, 1)
 * ```
 *
 * @since 2.0.0
 */
export declare const get: <K extends PropertyKey>(key: K) => <S extends { [P in K]?: any; }>(s: S) => MatchRecord<S, S[K] | undefined, S[K]>;
/**
 * Retrieves the object keys that are strings in a typed manner
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct } from "effect"
 *
 * const symbol: unique symbol = Symbol()
 *
 * const value = {
 *   a: 1,
 *   b: 2,
 *   [symbol]: 3
 * }
 *
 * const keys: Array<"a" | "b"> = Struct.keys(value)
 *
 * assert.deepStrictEqual(keys, ["a", "b"])
 * ```
 *
 * @since 3.6.0
 */
export declare const keys: <T extends {}>(o: T) => Array<(keyof T) & string>;
/**
 * Retrieves the entries (key-value pairs) of an object, where keys are strings,
 * in a type-safe manner. Symbol keys are excluded from the result.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct } from "effect"
 *
 * const c = Symbol("c")
 * const value = { a: "foo", b: 1, [c]: true }
 *
 * const entries: Array<["a" | "b", string | number]> = Struct.entries(value)
 *
 * assert.deepStrictEqual(entries, [["a", "foo"], ["b", 1]])
 * ```
 *
 * @since 3.17.0
 */
export declare const entries: <const R>(obj: R) => Array<[keyof R & string, R[keyof R & string]]>;
export {};
//# sourceMappingURL=Struct.d.ts.map