import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
import type { DepthIdentifier } from './_internals/helpers/DepthContext.js';
/**
 * Constraints to be applied on {@link array}
 * @remarks Since 2.4.0
 * @public
 */
export interface ArrayConstraints {
    /**
     * Lower bound of the generated array size
     * @defaultValue 0
     * @remarks Since 2.4.0
     */
    minLength?: number;
    /**
     * Upper bound of the generated array size
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.4.0
     */
    maxLength?: number;
    /**
     * Define how large the generated values should be (at max)
     *
     * When used in conjonction with `maxLength`, `size` will be used to define
     * the upper bound of the generated array size while `maxLength` will be used
     * to define and document the general maximal length allowed for this case.
     *
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
 * For arrays of values coming from `arb`
 *
 * @param arb - Arbitrary used to generate the values inside the array
 * @param constraints - Constraints to apply when building instances (since 2.4.0)
 *
 * @remarks Since 0.0.1
 * @public
 */
declare function array<T>(arb: Arbitrary<T>, constraints?: ArrayConstraints): Arbitrary<T[]>;
export { array };
