import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Create another Arbitrary with a limited (or capped) number of shrink values
 *
 * @example
 * ```typescript
 * const dataGenerator: Arbitrary<string> = ...;
 * const limitedShrinkableDataGenerator: Arbitrary<string> = fc.limitShrink(dataGenerator, 10);
 * // up to 10 shrunk values could be extracted from the resulting arbitrary
 * ```
 *
 * NOTE: Although limiting the shrinking capabilities can speed up your CI when failures occur, we do not recommend this approach.
 * Instead, if you want to reduce the shrinking time for automated jobs or local runs, consider using `endOnFailure` or `interruptAfterTimeLimit`.
 *
 * @param arbitrary - Instance of arbitrary responsible to generate and shrink values
 * @param maxShrinks - Maximal number of shrunk values that can be pulled from the resulting arbitrary
 *
 * @returns Create another arbitrary with limited number of shrink values
 * @remarks Since 3.20.0
 * @public
 */
export declare function limitShrink<T>(arbitrary: Arbitrary<T>, maxShrinks: number): Arbitrary<T>;
