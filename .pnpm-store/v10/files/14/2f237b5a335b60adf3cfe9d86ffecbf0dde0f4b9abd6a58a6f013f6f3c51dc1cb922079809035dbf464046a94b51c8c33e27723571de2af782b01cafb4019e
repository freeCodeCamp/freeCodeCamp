import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
import type { DepthIdentifier } from './_internals/helpers/DepthContext.js';
/**
 * Shared constraints to be applied on {@link uniqueArray}
 * @remarks Since 2.23.0
 * @public
 */
export type UniqueArraySharedConstraints = {
    /**
     * Lower bound of the generated array size
     * @defaultValue 0
     * @remarks Since 2.23.0
     */
    minLength?: number;
    /**
     * Upper bound of the generated array size
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.23.0
     */
    maxLength?: number;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.23.0
     */
    size?: SizeForArbitrary;
    /**
     * When receiving a depth identifier, the arbitrary will impact the depth
     * attached to it to avoid going too deep if it already generated lots of items.
     *
     * In other words, if the number of generated values within the collection is large
     * then the generated items will tend to be less deep to avoid creating structures a lot
     * larger than expected.
     *
     * For the moment, the depth is not taken into account to compute the number of items to
     * define for a precise generate call of the array. Just applied onto eligible items.
     *
     * @remarks Since 2.25.0
     */
    depthIdentifier?: DepthIdentifier | string;
};
/**
 * Constraints implying known and optimized comparison function
 * to be applied on {@link uniqueArray}
 *
 * @remarks Since 2.23.0
 * @public
 */
export type UniqueArrayConstraintsRecommended<T, U> = UniqueArraySharedConstraints & {
    /**
     * The operator to be used to compare the values after having applied the selector (if any):
     * - SameValue behaves like `Object.is` — {@link https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue}
     * - SameValueZero behaves like `Set` or `Map` — {@link https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero}
     * - IsStrictlyEqual behaves like `===` — {@link https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal}
     * - Fully custom comparison function: it implies performance costs for large arrays
     *
     * @defaultValue 'SameValue'
     * @remarks Since 2.23.0
     */
    comparator?: 'SameValue' | 'SameValueZero' | 'IsStrictlyEqual';
    /**
     * How we should project the values before comparing them together
     * @defaultValue (v =&gt; v)
     * @remarks Since 2.23.0
     */
    selector?: (v: T) => U;
};
/**
 * Constraints implying a fully custom comparison function
 * to be applied on {@link uniqueArray}
 *
 * WARNING - Imply an extra performance cost whenever you want to generate large arrays
 *
 * @remarks Since 2.23.0
 * @public
 */
export type UniqueArrayConstraintsCustomCompare<T> = UniqueArraySharedConstraints & {
    /**
     * The operator to be used to compare the values after having applied the selector (if any)
     * @remarks Since 2.23.0
     */
    comparator: (a: T, b: T) => boolean;
    /**
     * How we should project the values before comparing them together
     * @remarks Since 2.23.0
     */
    selector?: undefined;
};
/**
 * Constraints implying fully custom comparison function and selector
 * to be applied on {@link uniqueArray}
 *
 * WARNING - Imply an extra performance cost whenever you want to generate large arrays
 *
 * @remarks Since 2.23.0
 * @public
 */
export type UniqueArrayConstraintsCustomCompareSelect<T, U> = UniqueArraySharedConstraints & {
    /**
     * The operator to be used to compare the values after having applied the selector (if any)
     * @remarks Since 2.23.0
     */
    comparator: (a: U, b: U) => boolean;
    /**
     * How we should project the values before comparing them together
     * @remarks Since 2.23.0
     */
    selector: (v: T) => U;
};
/**
 * Constraints implying known and optimized comparison function
 * to be applied on {@link uniqueArray}
 *
 * The defaults relies on the defaults specified by {@link UniqueArrayConstraintsRecommended}
 *
 * @remarks Since 2.23.0
 * @public
 */
export type UniqueArrayConstraints<T, U> = UniqueArrayConstraintsRecommended<T, U> | UniqueArrayConstraintsCustomCompare<T> | UniqueArrayConstraintsCustomCompareSelect<T, U>;
/**
 * For arrays of unique values coming from `arb`
 *
 * @param arb - Arbitrary used to generate the values inside the array
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 2.23.0
 * @public
 */
export declare function uniqueArray<T, U>(arb: Arbitrary<T>, constraints?: UniqueArrayConstraintsRecommended<T, U>): Arbitrary<T[]>;
/**
 * For arrays of unique values coming from `arb`
 *
 * @param arb - Arbitrary used to generate the values inside the array
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 2.23.0
 * @public
 */
export declare function uniqueArray<T>(arb: Arbitrary<T>, constraints: UniqueArrayConstraintsCustomCompare<T>): Arbitrary<T[]>;
/**
 * For arrays of unique values coming from `arb`
 *
 * @param arb - Arbitrary used to generate the values inside the array
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 2.23.0
 * @public
 */
export declare function uniqueArray<T, U>(arb: Arbitrary<T>, constraints: UniqueArrayConstraintsCustomCompareSelect<T, U>): Arbitrary<T[]>;
/**
 * For arrays of unique values coming from `arb`
 *
 * @param arb - Arbitrary used to generate the values inside the array
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 2.23.0
 * @public
 */
export declare function uniqueArray<T, U>(arb: Arbitrary<T>, constraints: UniqueArrayConstraints<T, U>): Arbitrary<T[]>;
