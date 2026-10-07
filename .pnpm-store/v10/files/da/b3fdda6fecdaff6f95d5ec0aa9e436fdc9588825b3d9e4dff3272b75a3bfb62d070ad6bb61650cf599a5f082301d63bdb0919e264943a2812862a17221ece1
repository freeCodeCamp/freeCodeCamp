import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { DepthIdentifier } from './_internals/helpers/DepthContext.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link sparseArray}
 * @remarks Since 2.13.0
 * @public
 */
export interface SparseArrayConstraints {
    /**
     * Upper bound of the generated array size (maximal size: 4294967295)
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.13.0
     */
    maxLength?: number;
    /**
     * Lower bound of the number of non-hole elements
     * @defaultValue 0
     * @remarks Since 2.13.0
     */
    minNumElements?: number;
    /**
     * Upper bound of the number of non-hole elements
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.13.0
     */
    maxNumElements?: number;
    /**
     * When enabled, all generated arrays will either be the empty array or end by a non-hole
     * @defaultValue false
     * @remarks Since 2.13.0
     */
    noTrailingHole?: boolean;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
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
}
/**
 * For sparse arrays of values coming from `arb`
 * @param arb - Arbitrary used to generate the values inside the sparse array
 * @param constraints - Constraints to apply when building instances
 * @remarks Since 2.13.0
 * @public
 */
export declare function sparseArray<T>(arb: Arbitrary<T>, constraints?: SparseArrayConstraints): Arbitrary<T[]>;
