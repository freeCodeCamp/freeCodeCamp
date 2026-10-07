import type { SizeForArbitrary } from '../helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on typed arrays for integer values
 * @remarks Since 2.9.0
 * @public
 */
export type IntArrayConstraints = {
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
     * Lower bound for the generated int (included)
     * @defaultValue smallest possible value for this type
     * @remarks Since 2.9.0
     */
    min?: number;
    /**
     * Upper bound for the generated int (included)
     * @defaultValue highest possible value for this type
     * @remarks Since 2.9.0
     */
    max?: number;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: SizeForArbitrary;
};
/**
 * Constraints to be applied on typed arrays for big int values
 * @remarks Since 3.0.0
 * @public
 */
export type BigIntArrayConstraints = {
    /**
     * Lower bound of the generated array size
     * @defaultValue 0
     * @remarks Since 3.0.0
     */
    minLength?: number;
    /**
     * Upper bound of the generated array size
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 3.0.0
     */
    maxLength?: number;
    /**
     * Lower bound for the generated int (included)
     * @defaultValue smallest possible value for this type
     * @remarks Since 3.0.0
     */
    min?: bigint;
    /**
     * Upper bound for the generated int (included)
     * @defaultValue highest possible value for this type
     * @remarks Since 3.0.0
     */
    max?: bigint;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 3.0.0
     */
    size?: SizeForArbitrary;
};
