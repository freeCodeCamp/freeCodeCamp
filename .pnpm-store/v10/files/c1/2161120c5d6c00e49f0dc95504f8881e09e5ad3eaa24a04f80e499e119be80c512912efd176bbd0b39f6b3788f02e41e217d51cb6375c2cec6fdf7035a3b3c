import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link uuid}
 * @remarks Since 3.21.0
 * @public
 */
export interface UuidConstraints {
    /**
     * Define accepted versions in the [1-15] according to {@link https://datatracker.ietf.org/doc/html/rfc9562#name-version-field | RFC 9562}
     * @defaultValue [1,2,3,4,5]
     * @remarks Since 3.21.0
     */
    version?: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15) | (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[];
}
/**
 * For UUID from v1 to v5
 *
 * According to {@link https://tools.ietf.org/html/rfc4122 | RFC 4122}
 *
 * No mixed case, only lower case digits (0-9a-f)
 *
 * @remarks Since 1.17.0
 * @public
 */
export declare function uuid(constraints?: UuidConstraints): Arbitrary<string>;
