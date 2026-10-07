import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link date}
 * @remarks Since 3.3.0
 * @public
 */
export interface DateConstraints {
    /**
     * Lower bound of the range (included)
     * @defaultValue new Date(-8640000000000000)
     * @remarks Since 1.17.0
     */
    min?: Date;
    /**
     * Upper bound of the range (included)
     * @defaultValue new Date(8640000000000000)
     * @remarks Since 1.17.0
     */
    max?: Date;
    /**
     * When set to true, no more "Invalid Date" can be generated.
     * @defaultValue true
     * @remarks Since 3.13.0
     */
    noInvalidDate?: boolean;
}
/**
 * For date between constraints.min or new Date(-8640000000000000) (included) and constraints.max or new Date(8640000000000000) (included)
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 1.17.0
 * @public
 */
export declare function date(constraints?: DateConstraints): Arbitrary<Date>;
