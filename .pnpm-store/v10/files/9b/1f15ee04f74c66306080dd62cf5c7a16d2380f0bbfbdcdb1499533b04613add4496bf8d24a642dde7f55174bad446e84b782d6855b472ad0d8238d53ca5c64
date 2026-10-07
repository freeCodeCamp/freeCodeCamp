import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Build an arbitrary without shrinking capabilities.
 *
 * NOTE:
 * In most cases, users should avoid disabling shrinking capabilities.
 * If the concern is the shrinking process taking too long or being unnecessary in CI environments,
 * consider using alternatives like `endOnFailure` or `interruptAfterTimeLimit` instead.
 *
 * @param arb - The original arbitrary used for generating values. This arbitrary remains unchanged, but its shrinking capabilities will not be included in the new arbitrary.
 *
 * @remarks Since 3.20.0
 * @public
 */
export declare function noShrink<T>(arb: Arbitrary<T>): Arbitrary<T>;
