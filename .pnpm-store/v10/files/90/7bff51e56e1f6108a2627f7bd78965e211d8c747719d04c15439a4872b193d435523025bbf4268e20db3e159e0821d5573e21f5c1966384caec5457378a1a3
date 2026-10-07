import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * For comparison functions
 *
 * A comparison function returns:
 * - negative value whenever `a < b`
 * - positive value whenever `a > b`
 * - zero whenever `a` and `b` are equivalent
 *
 * Comparison functions are transitive: `a < b and b < c => a < c`
 *
 * They also satisfy: `a < b <=> b > a` and `a = b <=> b = a`
 *
 * @remarks Since 1.6.0
 * @public
 */
export declare function compareFunc<T>(): Arbitrary<(a: T, b: T) => number>;
