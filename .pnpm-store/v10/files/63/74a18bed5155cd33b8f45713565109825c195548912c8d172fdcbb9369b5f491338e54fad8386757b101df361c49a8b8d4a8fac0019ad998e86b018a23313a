import type { TypeLambda } from "./HKT.js";
/**
 * @category type class
 * @since 2.0.0
 */
export interface Order<in A> {
    (self: A, that: A): -1 | 0 | 1;
}
/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface OrderTypeLambda extends TypeLambda {
    readonly type: Order<this["Target"]>;
}
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const make: <A>(compare: (self: A, that: A) => -1 | 0 | 1) => Order<A>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const string: Order<string>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const number: Order<number>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const boolean: Order<boolean>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const bigint: Order<bigint>;
/**
 * @since 2.0.0
 */
export declare const reverse: <A>(O: Order<A>) => Order<A>;
/**
 * @category combining
 * @since 2.0.0
 */
export declare const combine: {
    /**
     * @category combining
     * @since 2.0.0
     */
    <A>(that: Order<A>): (self: Order<A>) => Order<A>;
    /**
     * @category combining
     * @since 2.0.0
     */
    <A>(self: Order<A>, that: Order<A>): Order<A>;
};
/**
 * @category combining
 * @since 2.0.0
 */
export declare const combineMany: {
    /**
     * @category combining
     * @since 2.0.0
     */
    <A>(collection: Iterable<Order<A>>): (self: Order<A>) => Order<A>;
    /**
     * @category combining
     * @since 2.0.0
     */
    <A>(self: Order<A>, collection: Iterable<Order<A>>): Order<A>;
};
/**
 * @since 2.0.0
 */
export declare const empty: <A>() => Order<A>;
/**
 * @category combining
 * @since 2.0.0
 */
export declare const combineAll: <A>(collection: Iterable<Order<A>>) => Order<A>;
/**
 * @category mapping
 * @since 2.0.0
 */
export declare const mapInput: {
    /**
     * @category mapping
     * @since 2.0.0
     */
    <B, A>(f: (b: B) => A): (self: Order<A>) => Order<B>;
    /**
     * @category mapping
     * @since 2.0.0
     */
    <A, B>(self: Order<A>, f: (b: B) => A): Order<B>;
};
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Date: Order<Date>;
/**
 * @category combining
 * @since 2.0.0
 */
export declare const product: {
    <B>(that: Order<B>): <A>(self: Order<A>) => Order<readonly [A, B]>;
    <A, B>(self: Order<A>, that: Order<B>): Order<readonly [A, B]>;
};
/**
 * @category combining
 * @since 2.0.0
 */
export declare const all: <A>(collection: Iterable<Order<A>>) => Order<ReadonlyArray<A>>;
/**
 * @category combining
 * @since 2.0.0
 */
export declare const productMany: {
    <A>(collection: Iterable<Order<A>>): (self: Order<A>) => Order<readonly [A, ...Array<A>]>;
    <A>(self: Order<A>, collection: Iterable<Order<A>>): Order<readonly [A, ...Array<A>]>;
};
/**
 * Similar to `Promise.all` but operates on `Order`s.
 *
 * ```
 * [Order<A>, Order<B>, ...] -> Order<[A, B, ...]>
 * ```
 *
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const tuple: <T extends ReadonlyArray<Order<any>>>(...elements: T) => Order<Readonly<{ [I in keyof T]: [T[I]] extends [Order<infer A>] ? A : never; }>>;
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const array: <A>(O: Order<A>) => Order<ReadonlyArray<A>>;
/**
 * This function creates and returns a new `Order` for a struct of values based on the given `Order`s
 * for each property in the struct.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const struct: <R extends {
    readonly [x: string]: Order<any>;
}>(fields: R) => Order<{ [K in keyof R]: [R[K]] extends [Order<infer A>] ? A : never; }>;
/**
 * Test whether one value is _strictly less than_ another.
 *
 * @since 2.0.0
 */
export declare const lessThan: <A>(O: Order<A>) => {
    (that: A): (self: A) => boolean;
    (self: A, that: A): boolean;
};
/**
 * Test whether one value is _strictly greater than_ another.
 *
 * @since 2.0.0
 */
export declare const greaterThan: <A>(O: Order<A>) => {
    (that: A): (self: A) => boolean;
    (self: A, that: A): boolean;
};
/**
 * Test whether one value is _non-strictly less than_ another.
 *
 * @since 2.0.0
 */
export declare const lessThanOrEqualTo: <A>(O: Order<A>) => {
    (that: A): (self: A) => boolean;
    (self: A, that: A): boolean;
};
/**
 * Test whether one value is _non-strictly greater than_ another.
 *
 * @since 2.0.0
 */
export declare const greaterThanOrEqualTo: <A>(O: Order<A>) => {
    (that: A): (self: A) => boolean;
    (self: A, that: A): boolean;
};
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 2.0.0
 */
export declare const min: <A>(O: Order<A>) => {
    (that: A): (self: A) => A;
    (self: A, that: A): A;
};
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 2.0.0
 */
export declare const max: <A>(O: Order<A>) => {
    (that: A): (self: A) => A;
    (self: A, that: A): A;
};
/**
 * Clamp a value between a minimum and a maximum.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Order, Number } from "effect"
 *
 * const clamp = Order.clamp(Number.Order)({ minimum: 1, maximum: 5 })
 *
 * assert.equal(clamp(3), 3)
 * assert.equal(clamp(0), 1)
 * assert.equal(clamp(6), 5)
 * ```
 *
 * @since 2.0.0
 */
export declare const clamp: <A>(O: Order<A>) => {
    (options: {
        minimum: A;
        maximum: A;
    }): (self: A) => A;
    (self: A, options: {
        minimum: A;
        maximum: A;
    }): A;
};
/**
 * Test whether a value is between a minimum and a maximum (inclusive).
 *
 * @since 2.0.0
 */
export declare const between: <A>(O: Order<A>) => {
    (options: {
        minimum: A;
        maximum: A;
    }): (self: A) => boolean;
    (self: A, options: {
        minimum: A;
        maximum: A;
    }): boolean;
};
//# sourceMappingURL=Order.d.ts.map