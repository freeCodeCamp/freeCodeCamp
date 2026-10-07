import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { FloatConstraints } from './float.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link float32Array}
 * @remarks Since 2.9.0
 * @public
 */
export type Float32ArrayConstraints = {
    /**
     * Lower bound of the generated array size
     * @defaultValue 0
     * @remarks Since 2.9.0
     */
    minLength?: number;
    /**
     * Upper bound of the generated array size
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.9.0
     */
    maxLength?: number;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: SizeForArbitrary;
} & FloatConstraints;
/**
 * For Float32Array
 * @remarks Since 2.9.0
 * @public
 */
export declare function float32Array(constraints?: Float32ArrayConstraints): Arbitrary<Float32Array>;
