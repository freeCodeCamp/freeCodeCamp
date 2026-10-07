import * as Either from "./Either.js";
import * as Option from "./Option.js";
import type { Predicate } from "./Predicate.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const BrandTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type BrandTypeId = typeof BrandTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const RefinedConstructorsTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type RefinedConstructorsTypeId = typeof RefinedConstructorsTypeId;
/**
 * A generic interface that defines a branded type.
 *
 * @since 2.0.0
 * @category models
 */
export interface Brand<in out K extends string | symbol> {
    readonly [BrandTypeId]: {
        readonly [k in K]: K;
    };
}
/**
 * @since 2.0.0
 */
export declare namespace Brand {
    /**
     * Represents a list of refinement errors.
     *
     * @since 2.0.0
     * @category models
     */
    interface BrandErrors extends Array<RefinementError> {
    }
    /**
     * Represents an error that occurs when the provided value of the branded type does not pass the refinement predicate.
     *
     * @since 2.0.0
     * @category models
     */
    interface RefinementError {
        readonly meta: unknown;
        readonly message: string;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Constructor<in out A extends Brand<any>> {
        readonly [RefinedConstructorsTypeId]: RefinedConstructorsTypeId;
        /**
         * Constructs a branded type from a value of type `A`, throwing an error if
         * the provided `A` is not valid.
         */
        (args: Brand.Unbranded<A>): A;
        /**
         * Constructs a branded type from a value of type `A`, returning `Some<A>`
         * if the provided `A` is valid, `None` otherwise.
         */
        option(args: Brand.Unbranded<A>): Option.Option<A>;
        /**
         * Constructs a branded type from a value of type `A`, returning `Right<A>`
         * if the provided `A` is valid, `Left<BrandError>` otherwise.
         */
        either(args: Brand.Unbranded<A>): Either.Either<A, Brand.BrandErrors>;
        /**
         * Attempts to refine the provided value of type `A`, returning `true` if
         * the provided `A` is valid, `false` otherwise.
         */
        is(a: Brand.Unbranded<A>): a is Brand.Unbranded<A> & A;
    }
    /**
     * A utility type to extract a branded type from a `Brand.Constructor`.
     *
     * @since 2.0.0
     * @category models
     */
    type FromConstructor<A> = A extends Brand.Constructor<infer B> ? B : never;
    /**
     * A utility type to extract the value type from a brand.
     *
     * @since 2.0.0
     * @category models
     */
    type Unbranded<P> = P extends infer Q & Brands<P> ? Q : P;
    /**
     * A utility type to extract the brands from a branded type.
     *
     * @since 2.0.0
     * @category models
     */
    type Brands<P> = P extends Brand<any> ? Types.UnionToIntersection<{
        [k in keyof P[BrandTypeId]]: k extends string | symbol ? Brand<k> : never;
    }[keyof P[BrandTypeId]]> : never;
    /**
     * A utility type that checks that all brands have the same base type.
     *
     * @since 2.0.0
     * @category models
     */
    type EnsureCommonBase<Brands extends readonly [Brand.Constructor<any>, ...Array<Brand.Constructor<any>>]> = {
        [B in keyof Brands]: Brand.Unbranded<Brand.FromConstructor<Brands[0]>> extends Brand.Unbranded<Brand.FromConstructor<Brands[B]>> ? Brand.Unbranded<Brand.FromConstructor<Brands[B]>> extends Brand.Unbranded<Brand.FromConstructor<Brands[0]>> ? Brands[B] : Brands[B] : "ERROR: All brands should have the same base type";
    };
}
/**
 * @category alias
 * @since 2.0.0
 */
export type Branded<A, K extends string | symbol> = A & Brand<K>;
/**
 * Returns a `BrandErrors` that contains a single `RefinementError`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const error: (message: string, meta?: unknown) => Brand.BrandErrors;
/**
 * Takes a variable number of `BrandErrors` and returns a single `BrandErrors` that contains all refinement errors.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const errors: (...errors: Array<Brand.BrandErrors>) => Brand.BrandErrors;
/**
 * Returns a `Brand.Constructor` that can construct a branded type from an unbranded value using the provided `refinement`
 * predicate as validation of the input data.
 *
 * If you don't want to perform any validation but only distinguish between two values of the same type but with different meanings,
 * see {@link nominal}.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Brand } from "effect"
 *
 * type Int = number & Brand.Brand<"Int">
 *
 * const Int = Brand.refined<Int>(
 *   (n) => Number.isInteger(n),
 *   (n) => Brand.error(`Expected ${n} to be an integer`)
 * )
 *
 * console.log(Int(1))
 * // 1
 *
 * assert.throws(() => Int(1.1))
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare function refined<A extends Brand<any>>(f: (unbranded: Brand.Unbranded<A>) => Option.Option<Brand.BrandErrors>): Brand.Constructor<A>;
export declare function refined<A extends Brand<any>>(refinement: Predicate<Brand.Unbranded<A>>, onFailure: (unbranded: Brand.Unbranded<A>) => Brand.BrandErrors): Brand.Constructor<A>;
/**
 * This function returns a `Brand.Constructor` that **does not apply any runtime checks**, it just returns the provided value.
 * It can be used to create nominal types that allow distinguishing between two values of the same type but with different meanings.
 *
 * If you also want to perform some validation, see {@link refined}.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Brand } from "effect"
 *
 * type UserId = number & Brand.Brand<"UserId">
 *
 * const UserId = Brand.nominal<UserId>()
 *
 * console.log(UserId(1))
 * // 1
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nominal: <A extends Brand<any>>() => Brand.Constructor<A>;
/**
 * Combines two or more brands together to form a single branded type.
 * This API is useful when you want to validate that the input data passes multiple brand validators.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Brand } from "effect"
 *
 * type Int = number & Brand.Brand<"Int">
 * const Int = Brand.refined<Int>(
 *   (n) => Number.isInteger(n),
 *   (n) => Brand.error(`Expected ${n} to be an integer`)
 * )
 * type Positive = number & Brand.Brand<"Positive">
 * const Positive = Brand.refined<Positive>(
 *   (n) => n > 0,
 *   (n) => Brand.error(`Expected ${n} to be positive`)
 * )
 *
 * const PositiveInt = Brand.all(Int, Positive)
 *
 * console.log(PositiveInt(1))
 * // 1
 *
 * assert.throws(() => PositiveInt(1.1))
 * ```
 *
 * @since 2.0.0
 * @category combining
 */
export declare const all: <Brands extends readonly [Brand.Constructor<any>, ...Array<Brand.Constructor<any>>]>(...brands: Brand.EnsureCommonBase<Brands>) => Brand.Constructor<Types.UnionToIntersection<{
    [B in keyof Brands]: Brand.FromConstructor<Brands[B]>;
}[number]> extends infer X extends Brand<any> ? X : Brand<any>>;
/**
 * Retrieves the unbranded value from a `Brand` instance.
 *
 * @since 3.15.0
 * @category getters
 */
export declare const unbranded: <A extends Brand<any>>(branded: A) => Brand.Unbranded<A>;
//# sourceMappingURL=Brand.d.ts.map