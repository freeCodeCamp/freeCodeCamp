import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { StringSharedConstraints } from './_shared/StringSharedConstraints.js';
export type { StringSharedConstraints } from './_shared/StringSharedConstraints.js';
/**
 * For strings using the characters produced by `charArb`
 *
 * @param charArb - Arbitrary able to generate random strings (possibly multiple characters)
 * @param constraints - Constraints to apply when building instances (since 2.4.0)
 *
 * @deprecated Please use ${@link string} with `fc.string({ unit: charArb, ...constraints })` instead
 * @remarks Since 1.1.3
 * @public
 */
export declare function stringOf(charArb: Arbitrary<string>, constraints?: StringSharedConstraints): Arbitrary<string>;
