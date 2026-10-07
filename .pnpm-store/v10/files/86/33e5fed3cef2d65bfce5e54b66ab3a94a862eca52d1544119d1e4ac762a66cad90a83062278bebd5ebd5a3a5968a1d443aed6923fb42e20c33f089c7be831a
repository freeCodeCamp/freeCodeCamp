import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link nat}
 * @remarks Since 2.6.0
 * @public
 */
export interface NatConstraints {
    /**
     * Upper bound for the generated postive integers (included)
     * @defaultValue 0x7fffffff
     * @remarks Since 2.6.0
     */
    max?: number;
}
/**
 * For positive integers between 0 (included) and 2147483647 (included)
 * @remarks Since 0.0.1
 * @public
 */
declare function nat(): Arbitrary<number>;
/**
 * For positive integers between 0 (included) and max (included)
 *
 * @param max - Upper bound for the generated integers
 *
 * @remarks You may prefer to use `fc.nat({max})` instead.
 * @remarks Since 0.0.1
 * @public
 */
declare function nat(max: number): Arbitrary<number>;
/**
 * For positive integers between 0 (included) and max (included)
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 2.6.0
 * @public
 */
declare function nat(constraints: NatConstraints): Arbitrary<number>;
export { nat };
