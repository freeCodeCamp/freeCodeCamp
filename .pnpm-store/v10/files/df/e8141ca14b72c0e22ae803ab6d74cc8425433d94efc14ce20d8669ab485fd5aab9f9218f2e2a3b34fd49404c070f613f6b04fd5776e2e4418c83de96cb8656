import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Generate non-contiguous ranges of values
 * by mapping integer values to constant
 *
 * @param options - Builders to be called to generate the values
 *
 * @example
 * ```
 * // generate alphanumeric values (a-z0-9)
 * mapToConstant(
 *   { num: 26, build: v => String.fromCharCode(v + 0x61) },
 *   { num: 10, build: v => String.fromCharCode(v + 0x30) },
 * )
 * ```
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function mapToConstant<T>(...entries: {
    num: number;
    build: (idInGroup: number) => T;
}[]): Arbitrary<T>;
